// Vercel serverless function: POST /api/contact
// Env: RESEND_API_KEY, CONTACT_TO_EMAIL, CONTACT_FROM_EMAIL (required to deliver mail)
//      TURNSTILE_SECRET_KEY (optional; when set, a valid Cloudflare Turnstile token is required)

const SERVICES = ['construction', 'commodities', 'import-export', 'gold', 'manufacturing', 'merchandise', 'other'];
// Conservative: no quotes, angle brackets, commas or semicolons, so Reply-To can only ever hold one address.
const EMAIL_RE = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9-]+(\.[A-Za-z0-9-]+)*\.[A-Za-z]{2,}$/;
const MAX_BODY_BYTES = 10_000;
const UPSTREAM_TIMEOUT_MS = 8_000;

export type ContactInput = {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  service?: string;
  message: string;
};

const str = (v: unknown) => (typeof v === 'string' ? v.trim() : '');
// Strip control chars (incl. CR/LF) from single-line fields.
const oneLine = (v: unknown) => str(v).replace(/[\u0000-\u001f\u007f]/g, ' ');

/** Returns the cleaned input, or an error string. Server is the source of truth; client checks are UX only. */
export function validate(body: unknown): ContactInput | string {
  if (!body || typeof body !== 'object') return 'Invalid body';
  const b = body as Record<string, unknown>;
  if (str(b.website)) return 'spam'; // honeypot

  const input: ContactInput = {
    name: oneLine(b.name),
    email: oneLine(b.email),
    phone: oneLine(b.phone) || undefined,
    company: oneLine(b.company) || undefined,
    service: oneLine(b.service) || undefined,
    message: str(b.message),
  };
  if (input.name.length < 2 || input.name.length > 80) return 'Invalid name';
  if (input.email.length > 120 || !EMAIL_RE.test(input.email)) return 'Invalid email';
  if (input.phone && (input.phone.length > 24 || !/^[\d\s()+-]+$/.test(input.phone))) return 'Invalid phone';
  if (input.company && input.company.length > 120) return 'Invalid company';
  if (input.service && !SERVICES.includes(input.service)) return 'Invalid service';
  if (input.message.length < 10 || input.message.length > 2000) return 'Invalid message';
  return input;
}

// ponytail: per-instance in-memory limit; resets on cold start and isn't shared across instances.
// Move to Vercel KV / Upstash if spam gets through Turnstile + honeypot.
const hits = new Map<string, number[]>();
const MAX_TRACKED_IPS = 5_000;
export function rateLimited(ip: string, now = Date.now(), max = 5, windowMs = 10 * 60_000) {
  // Bound memory: drop expired entries, and if still full, the oldest ones (Map keeps insertion order).
  if (hits.size >= MAX_TRACKED_IPS) {
    for (const [key, times] of hits) if (now - times[times.length - 1] >= windowMs) hits.delete(key);
    for (const key of hits.keys()) {
      if (hits.size < MAX_TRACKED_IPS) break;
      hits.delete(key);
    }
  }
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < windowMs);
  recent.push(now);
  hits.set(ip, recent);
  return recent.length > max;
}

const json = (status: number, body: object) =>
  Response.json(body, { status, headers: { 'Cache-Control': 'no-store', 'X-Robots-Tag': 'noindex' } });

/**
 * Rejects requests that did not come from our own contact form.
 * Requiring application/json forces a CORS preflight for any cross-site request (which fails: we send no CORS
 * headers), so other sites cannot make their visitors' browsers post here. The Origin check backs that up.
 */
export function rejectRequest(request: Request): string | null {
  if (!request.headers.get('content-type')?.toLowerCase().startsWith('application/json')) return 'Unsupported content type';
  const origin = request.headers.get('origin');
  const host = request.headers.get('x-forwarded-host') ?? request.headers.get('host');
  if (origin && host) {
    let originHost = '';
    try { originHost = new URL(origin).host; } catch { /* malformed origin */ }
    if (originHost !== host) return 'Cross-origin request';
  }
  const length = Number(request.headers.get('content-length') ?? 0);
  if (length > MAX_BODY_BYTES) return 'Payload too large';
  return null;
}

/** Vercel sets x-real-ip to the connecting client and overwrites x-forwarded-for; prefer the former. */
export function clientIp(request: Request) {
  return request.headers.get('x-real-ip') ?? request.headers.get('x-forwarded-for')?.split(',')[0].trim() ?? 'unknown';
}

export async function POST(request: Request) {
  const rejection = rejectRequest(request);
  if (rejection) return json(rejection === 'Payload too large' ? 413 : 400, { error: rejection });

  const ip = clientIp(request);
  if (rateLimited(ip)) return json(429, { error: 'Too many requests' });

  const raw = await request.text().catch(() => '');
  if (raw.length > MAX_BODY_BYTES) return json(413, { error: 'Payload too large' });
  let body: unknown = null;
  try { body = JSON.parse(raw); } catch { /* handled by validate */ }
  const result = validate(body);
  // Pretend success to bots so they don't adapt.
  if (result === 'spam') return json(200, { ok: true });
  if (typeof result === 'string') return json(400, { error: result });

  const turnstileSecret = process.env.TURNSTILE_SECRET_KEY;
  if (turnstileSecret) {
    const verify = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
      method: 'POST',
      body: new URLSearchParams({
        secret: turnstileSecret,
        response: str((body as Record<string, unknown>)['cf-turnstile-response']),
        remoteip: ip,
      }),
      signal: AbortSignal.timeout(UPSTREAM_TIMEOUT_MS),
    }).then((r) => r.json() as Promise<{ success: boolean }>).catch(() => ({ success: false }));
    if (!verify.success) return json(403, { error: 'Verification failed' });
  }

  const { RESEND_API_KEY, CONTACT_TO_EMAIL, CONTACT_FROM_EMAIL } = process.env;
  if (!RESEND_API_KEY || !CONTACT_TO_EMAIL || !CONTACT_FROM_EMAIL) {
    console.error('contact: mail env vars not configured');
    return json(503, { error: 'Contact form not configured' });
  }

  const text = [
    `Name: ${result.name}`,
    `Email: ${result.email}`,
    `Phone: ${result.phone ?? '-'}`,
    `Company: ${result.company ?? '-'}`,
    `Service: ${result.service ?? '-'}`,
    '',
    result.message,
  ].join('\n');

  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    signal: AbortSignal.timeout(UPSTREAM_TIMEOUT_MS),
    headers: { Authorization: `Bearer ${RESEND_API_KEY}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      from: CONTACT_FROM_EMAIL,
      to: CONTACT_TO_EMAIL.split(',').map((s) => s.trim()),
      reply_to: result.email,
      subject: `Website enquiry from ${result.name}${result.service ? ` (${result.service})` : ''}`,
      text,
    }),
  }).catch((err: unknown) => {
    console.error('contact: resend unreachable', err);
    return null;
  });
  if (!res?.ok) {
    if (res) console.error('contact: resend failed', res.status, (await res.text()).slice(0, 500));
    return json(502, { error: 'Failed to send' });
  }
  return json(200, { ok: true });
}
