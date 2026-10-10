import { test } from 'node:test';
import assert from 'node:assert/strict';
import { validate, rateLimited, rejectRequest, clientIp, POST } from '../api/contact.ts';

const ok = { name: 'Ama Owusu', email: 'ama@example.com', message: 'Need a quote for cement.' };

const req = (body: unknown, headers: Record<string, string> = {}) =>
  new Request('https://www.nbsccl.com/api/contact', {
    method: 'POST',
    headers: { 'content-type': 'application/json', host: 'www.nbsccl.com', origin: 'https://www.nbsccl.com', ...headers },
    body: typeof body === 'string' ? body : JSON.stringify(body),
  });

test('accepts valid input and trims/strips newlines', () => {
  const r = validate({ ...ok, name: '  Ama\r\nBcc: x@y.z  ', service: 'gold', phone: '' });
  assert.equal(typeof r, 'object');
  assert.equal((r as { name: string }).name, 'Ama  Bcc: x@y.z');
  assert.equal((r as { phone?: string }).phone, undefined);
});

test('rejects bad input', () => {
  assert.equal(validate(null), 'Invalid body');
  assert.equal(validate({ ...ok, website: 'http://spam' }), 'spam');
  assert.equal(validate({ ...ok, name: 'A' }), 'Invalid name');
  assert.equal(validate({ ...ok, email: 'nope' }), 'Invalid email');
  assert.equal(validate({ ...ok, phone: '<script>' }), 'Invalid phone');
  assert.equal(validate({ ...ok, service: 'hacking' }), 'Invalid service');
  assert.equal(validate({ ...ok, message: 'short' }), 'Invalid message');
  assert.equal(validate({ ...ok, message: 'x'.repeat(2001) }), 'Invalid message');
});

test('email cannot smuggle extra Reply-To recipients', () => {
  for (const email of ['a@b.co,evil@x.com', 'a@b.co;evil@x.com', '"a"@b.co', '<a@b.co>', 'a@b', 'a@b.c']) {
    assert.equal(validate({ ...ok, email }), 'Invalid email', email);
  }
  assert.equal(typeof validate({ ...ok, email: 'first.last+tag@mail.example.com.gh' }), 'object');
});

test('rate limits after 5 requests per window', () => {
  const t = 1_000_000;
  for (let i = 0; i < 5; i++) assert.equal(rateLimited('1.2.3.4', t + i), false);
  assert.equal(rateLimited('1.2.3.4', t + 5), true);
  assert.equal(rateLimited('1.2.3.4', t + 11 * 60_000), false);
});

test('rate limiter memory stays bounded under an IP flood', () => {
  const t = 5_000_000;
  for (let i = 0; i < 12_000; i++) rateLimited(`10.0.${i >> 8}.${i & 255}-${i}`, t);
  // Still works, and an old flooded IP was evicted rather than growing forever.
  assert.equal(rateLimited('fresh', t), false);
});

test('only same-origin JSON requests are accepted', () => {
  assert.equal(rejectRequest(req(ok)), null);
  assert.equal(rejectRequest(req(ok, { origin: '' })), null); // no Origin header (same-origin GET-less tools): allowed
  assert.equal(rejectRequest(req(ok, { 'content-type': 'text/plain' })), 'Unsupported content type');
  assert.equal(rejectRequest(req(ok, { origin: 'https://evil.example' })), 'Cross-origin request');
  assert.equal(rejectRequest(req(ok, { origin: 'not a url' })), 'Cross-origin request');
  assert.equal(rejectRequest(req(ok, { 'content-length': '20000' })), 'Payload too large');
});

test('client IP prefers x-real-ip over spoofable x-forwarded-for', () => {
  assert.equal(clientIp(req(ok, { 'x-real-ip': '41.1.1.1', 'x-forwarded-for': '6.6.6.6, 41.1.1.1' })), '41.1.1.1');
  assert.equal(clientIp(req(ok, { 'x-forwarded-for': '41.2.2.2' })), '41.2.2.2');
});

test('handler: cross-site and text/plain posts are refused; responses are not cacheable', async () => {
  const cross = await POST(req(ok, { origin: 'https://evil.example', 'x-real-ip': '9.9.9.1' }));
  assert.equal(cross.status, 400);
  assert.equal(cross.headers.get('cache-control'), 'no-store');
  const plain = await POST(req(JSON.stringify(ok), { 'content-type': 'text/plain', 'x-real-ip': '9.9.9.2' }));
  assert.equal(plain.status, 400);
  const big = await POST(req({ ...ok, message: 'x'.repeat(20_000) }, { 'x-real-ip': '9.9.9.3' }));
  assert.equal(big.status, 413);
});

test('handler: never reports success when mail is not configured', async () => {
  delete process.env.RESEND_API_KEY;
  delete process.env.TURNSTILE_SECRET_KEY;
  const res = await POST(req(ok, { 'x-real-ip': '9.9.9.4' }));
  assert.equal(res.status, 503);
});
