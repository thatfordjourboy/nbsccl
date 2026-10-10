import { test } from 'node:test';
import assert from 'node:assert/strict';
import { validate, rateLimited } from '../api/contact.ts';

const ok = { name: 'Ama Owusu', email: 'ama@example.com', message: 'Need a quote for cement.' };

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

test('rate limits after 5 requests per window', () => {
  const t = 1_000_000;
  for (let i = 0; i < 5; i++) assert.equal(rateLimited('1.2.3.4', t + i), false);
  assert.equal(rateLimited('1.2.3.4', t + 5), true);
  assert.equal(rateLimited('1.2.3.4', t + 11 * 60_000), false);
});
