import { useEffect, useState, type FormEvent } from 'react';
import { useSearchParams } from 'react-router-dom';
import { toast } from 'sonner';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Label } from '../ui/label';
import { Container, PageHero } from '../site/blocks';
import { CONTACT, SERVICES, tel } from '../../services';

const TURNSTILE_SITE_KEY = import.meta.env.VITE_TURNSTILE_SITE_KEY as string | undefined;

declare global {
  interface Window { turnstile?: { reset: () => void } }
}

export function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [searchParams] = useSearchParams();
  const requested = searchParams.get('service') ?? '';
  const presetService = requested === 'other' || SERVICES.some((s) => s.slug === requested) ? requested : '';

  useEffect(() => {
    if (!TURNSTILE_SITE_KEY || document.getElementById('turnstile-script')) return;
    const script = document.createElement('script');
    script.id = 'turnstile-script';
    script.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js';
    script.async = true;
    document.head.appendChild(script);
  }, []);

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    setIsSubmitting(true);
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 15000);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(Object.fromEntries(new FormData(form))),
        signal: controller.signal,
      });
      if (!res.ok) throw new Error(`Request failed: ${res.status}`);
      toast.success('Enquiry sent. We reply within 24 hours.');
      form.reset();
    } catch {
      toast.error(`Your enquiry was not sent. Try again, or email us at ${CONTACT.emails[0]}.`, { duration: 10000 });
    } finally {
      clearTimeout(timeout);
      window.turnstile?.reset();
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <PageHero
        title="Contact us"
        intro="Tell us about your project, shipment or order. We reply within 24 hours."
      />

      <section className="py-16 sm:py-24">
        <Container className="grid gap-14 lg:grid-cols-12">
          <form
            id="contact-form"
            onSubmit={onSubmit}
            className="relative space-y-6 border border-line bg-white p-6 sm:p-10 lg:col-span-7"
          >
            <h2 className="font-heading text-2xl sm:text-3xl">Send an enquiry</h2>
            {/* Honeypot: invisible to people, bots fill it in. Rejected server-side in api/contact.ts. */}
            <div aria-hidden="true" className="absolute -left-[9999px]">
              <label htmlFor="website">Website</label>
              <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
              <Field id="name" label="Full name" required>
                <Input id="name" name="name" type="text" required minLength={2} maxLength={80} autoComplete="name" className="h-11" />
              </Field>
              <Field id="email" label="Email" required>
                <Input id="email" name="email" type="email" required maxLength={120} autoComplete="email" className="h-11" />
              </Field>
              <Field id="phone" label="Phone">
                <Input id="phone" name="phone" type="tel" maxLength={24} autoComplete="tel" className="h-11" />
              </Field>
              <Field id="company" label="Company">
                <Input id="company" name="company" type="text" maxLength={120} autoComplete="organization" className="h-11" />
              </Field>
            </div>
            <Field id="service" label="What is it about?">
              <select
                id="service"
                name="service"
                key={presetService}
                defaultValue={presetService}
                className="flex h-11 w-full rounded-md border border-input bg-input-background px-3 text-base outline-none focus-visible:border-brand md:text-sm"
              >
                <option value="">Choose a service</option>
                {SERVICES.map((s) => (
                  <option key={s.slug} value={s.slug}>{s.name}</option>
                ))}
                <option value="other">Something else</option>
              </select>
            </Field>
            <Field id="message" label="Message" required>
              <Textarea
                id="message"
                name="message"
                required
                minLength={10}
                maxLength={2000}
                rows={6}
                className="min-h-40"
                placeholder="What you need, how much, where and by when."
              />
            </Field>

            {TURNSTILE_SITE_KEY && <div className="cf-turnstile" data-sitekey={TURNSTILE_SITE_KEY} />}

            <Button type="submit" size="lg" className="w-full sm:w-auto" disabled={isSubmitting}>
              {isSubmitting ? 'Sending…' : 'Send enquiry'}
            </Button>
          </form>

          <dl className="space-y-10 lg:col-span-5 lg:pt-4">
            <Detail title="Call">
              {CONTACT.phones.map((p) => (
                <a key={p} href={tel(p)} className="block text-lg hover:text-brand">{p}</a>
              ))}
            </Detail>
            <Detail title="Email">
              {CONTACT.emails.map((e) => (
                <a key={e} href={`mailto:${e}`} className="block break-all text-lg hover:text-brand">{e}</a>
              ))}
            </Detail>
            <Detail title="Visit">
              <address className="not-italic text-lg">
                {CONTACT.address.map((line) => <span key={line} className="block">{line}</span>)}
              </address>
            </Detail>
            <Detail title="Opening hours">
              {CONTACT.hours.map((h) => <span key={h} className="block text-lg">{h}</span>)}
            </Detail>
          </dl>
        </Container>
      </section>

      <section aria-label="Map" className="h-[420px] border-t border-line bg-brand-deep sm:h-[480px]">
        <iframe
          title="Map showing NB Sebastian's office near Inkoom Hospital, Spintex Road, Accra"
          src="https://www.google.com/maps?q=Inkoom+Hospital,+Spintex+Road,+Accra,+Ghana&output=embed"
          className="h-full w-full border-0"
          // Google's embed needs scripts and its own origin; it may open Maps in a new tab but cannot navigate this page.
          sandbox="allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          loading="lazy"
        />
      </section>
    </>
  );
}

function Field({ id, label, required, children }: { id: string; label: string; required?: boolean; children: React.ReactNode }) {
  return (
    <div className="space-y-2">
      <Label htmlFor={id} className="text-ink">
        {label}
        {required && <span className="font-normal text-slate">(required)</span>}
      </Label>
      {children}
    </div>
  );
}

function Detail({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="border-t border-line pt-5">
      <dt className="font-heading text-base text-slate">{title}</dt>
      <dd className="mt-2 space-y-1">{children}</dd>
    </div>
  );
}
