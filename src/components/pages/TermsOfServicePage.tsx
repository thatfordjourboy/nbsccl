import { Link } from 'react-router-dom';
import { PageHero } from '../site/blocks';

export function TermsOfServicePage() {
  return (
    <div>
      <PageHero title="Terms of service" intro="The terms that govern your use of the NB Sebastian website and services." />

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-3xl px-5 sm:px-8 space-y-10">
          <div>
            <h2 className="font-heading text-2xl text-ink">1. Agreement to terms</h2>
            <p className="text-slate mt-3">By accessing our websites or using our services, you agree to be bound by these Terms. If you do not agree, do not use our websites or services.</p>
          </div>

          <div>
            <h2 className="font-heading text-2xl text-ink">2. Services</h2>
            <p className="text-slate mt-3">We provide information about our capabilities and accept inquiries for projects and services. Formal engagements are governed by separate written agreements that supersede these Terms where applicable.</p>
          </div>

          <div>
            <h2 className="font-heading text-2xl text-ink">3. Acceptable use</h2>
            <ul className="list-disc pl-6 text-slate mt-3 space-y-2">
              <li>Do not misuse the site (e.g., spam, automated scraping, security testing without authorization).</li>
              <li>Do not upload unlawful, infringing, or harmful content.</li>
              <li>Respect intellectual property and privacy rights.</li>
            </ul>
          </div>

          <div>
            <h2 className="font-heading text-2xl text-ink">4. Intellectual property</h2>
            <p className="text-slate mt-3">All content on the site is owned by NB Sebastian or its licensors and protected by law. You may not copy, modify, or distribute content without permission, unless permitted by law.</p>
          </div>

          <div>
            <h2 className="font-heading text-2xl text-ink">5. Disclaimers</h2>
            <p className="text-slate mt-3">The site is provided "as is" without warranties of any kind. We do not guarantee uninterrupted or error-free operation.</p>
          </div>

          <div>
            <h2 className="font-heading text-2xl text-ink">6. Limitation of liability</h2>
            <p className="text-slate mt-3">To the fullest extent permitted by law, NB Sebastian will not be liable for indirect, incidental, special, consequential, or punitive damages arising from or related to your use of the site.</p>
          </div>

          <div>
            <h2 className="font-heading text-2xl text-ink">7. Third-party links</h2>
            <p className="text-slate mt-3">Our site may link to third-party websites or services that we do not control. We are not responsible for their content or practices.</p>
          </div>

          <div>
            <h2 className="font-heading text-2xl text-ink">8. Changes to terms</h2>
            <p className="text-slate mt-3">We may update these Terms from time to time. Continued use constitutes acceptance of the revised Terms.</p>
          </div>

          <div>
            <h2 className="font-heading text-2xl text-ink">9. Contact</h2>
            <p className="text-slate mt-3">Questions about these Terms? Contact us at <a className="text-plum underline underline-offset-4" href="mailto:legal@nbsebastian.com">legal@nbsebastian.com</a>.</p>
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

export default TermsOfServicePage;


