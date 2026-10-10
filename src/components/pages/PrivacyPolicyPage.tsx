import { Link } from 'react-router-dom';
import { PageHero } from '../site/blocks';

export function PrivacyPolicyPage() {
  return (
    <div>
      <PageHero title="Privacy policy" intro="How NB Sebastian collects, uses and protects your information." />

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-3xl px-5 sm:px-8 space-y-10">
          <div>
            <h2 className="font-heading text-2xl text-ink">1. Who we are</h2>
            <p className="text-slate mt-3">NB Sebastian Commodities Company Ltd. ("NB Sebastian", "we", "our", "us") provides construction, commodities trading, manufacturing, and global trade services. This policy explains how we handle personal data across our websites and services.</p>
          </div>

          <div>
            <h2 className="font-heading text-2xl text-ink">2. Information we collect</h2>
            <ul className="list-disc pl-6 text-slate mt-3 space-y-2">
              <li><span className="font-medium">Contact data</span>: name, email, phone, company, and message contents submitted via forms.</li>
              <li><span className="font-medium">Usage data</span>: device/browser information, IP address, and pages visited (via analytics, if enabled).</li>
              <li><span className="font-medium">Transactional data</span>: limited project-related information you voluntarily share for quotes or services.</li>
            </ul>
          </div>

          <div>
            <h2 className="font-heading text-2xl text-ink">3. How we use information</h2>
            <ul className="list-disc pl-6 text-slate mt-3 space-y-2">
              <li>Respond to inquiries and provide quotes or proposals.</li>
              <li>Operate, maintain, and improve our website and services.</li>
              <li>Comply with legal obligations and enforce agreements.</li>
            </ul>
          </div>

          <div>
            <h2 className="font-heading text-2xl text-ink">4. Legal bases</h2>
            <p className="text-slate mt-3">We process personal data in accordance with Ghana&apos;s Data Protection Act, 2012 (Act 843). Depending on your location, processing is based on consent, contract performance, legitimate interests (e.g., site security, service improvement), or legal compliance.</p>
          </div>

          <div>
            <h2 className="font-heading text-2xl text-ink">5. Sharing and third-party services</h2>
            <p className="text-slate mt-3">We do not sell personal data. We share it only with service providers that help us run this website, under contracts that require them to protect it, or where required by law. This website uses:</p>
            <ul className="list-disc pl-6 text-slate mt-3 space-y-2">
              <li><span className="font-medium">Vercel</span> (hosting): processes your IP address and request data to serve the site.</li>
              <li><span className="font-medium">Resend</span> (email delivery): receives the contents of the contact form so it can be delivered to our team.</li>
              <li><span className="font-medium">Cloudflare Turnstile</span> (spam protection on the contact form): may process your IP address and browser signals.</li>
              <li><span className="font-medium">Google Maps</span> (embedded map on the Contact page): Google may set cookies and collect usage data when the map loads, under Google&apos;s privacy policy.</li>
              <li><span className="font-medium">Unsplash</span> (image delivery): images are loaded from Unsplash servers, which receive your IP address.</li>
            </ul>
          </div>

          <div>
            <h2 className="font-heading text-2xl text-ink">6. Data retention</h2>
            <p className="text-slate mt-3">We retain personal data only as long as necessary for the purposes described above, and then delete or anonymize it according to our retention schedules and applicable laws.</p>
          </div>

          <div>
            <h2 className="font-heading text-2xl text-ink">7. International transfers</h2>
            <p className="text-slate mt-3">If data is transferred across borders, we use appropriate safeguards (such as standard contractual clauses) as required by law.</p>
          </div>

          <div>
            <h2 className="font-heading text-2xl text-ink">8. Your rights</h2>
            <ul className="list-disc pl-6 text-slate mt-3 space-y-2">
              <li>Access, correct, or delete your personal data.</li>
              <li>Object to or restrict processing; withdraw consent where applicable.</li>
              <li>Portability of data where required by law.</li>
            </ul>
            <p className="text-slate mt-3">Contact us to exercise rights: <a className="text-plum underline underline-offset-4" href="mailto:privacy@nbsebastian.com">privacy@nbsebastian.com</a>.</p>
          </div>

          <div>
            <h2 className="font-heading text-2xl text-ink">9. Security</h2>
            <p className="text-slate mt-3">We implement administrative, technical, and physical safeguards to protect personal data. No method of transmission or storage is 100% secure; we continuously improve our controls.</p>
          </div>

          <div>
            <h2 className="font-heading text-2xl text-ink">10. Children</h2>
            <p className="text-slate mt-3">Our services are not directed to children under 13 (or the age defined by local law). We do not knowingly collect data from children.</p>
          </div>

          <div>
            <h2 className="font-heading text-2xl text-ink">11. Changes</h2>
            <p className="text-slate mt-3">We may update this policy to reflect operational or legal changes. We will update the “Last updated” date and, where required, notify you.</p>
          </div>

          <div className="text-sm text-slate">Last updated: 10 October 2026</div>

          <div className="pt-4">
            <Link to="/" className="text-plum underline underline-offset-4">Back to Home</Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default PrivacyPolicyPage;


