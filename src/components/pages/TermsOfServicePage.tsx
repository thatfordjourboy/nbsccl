import { Link } from 'react-router-dom';

export function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold">Terms of Service</h1>
          <p className="text-gray-300 mt-4 max-w-2xl">The terms governing your use of NB Sebastian websites and services.</p>
        </div>
      </section>

      <section className="py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div>
            <h2 className="text-2xl font-semibold text-gray-900">1. Agreement to terms</h2>
            <p className="text-gray-700 mt-3">By accessing our websites or using our services, you agree to be bound by these Terms. If you do not agree, do not use our websites or services.</p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-900">2. Services</h2>
            <p className="text-gray-700 mt-3">We provide information about our capabilities and accept inquiries for projects and services. Formal engagements are governed by separate written agreements that supersede these Terms where applicable.</p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-900">3. Acceptable use</h2>
            <ul className="list-disc pl-6 text-gray-700 mt-3 space-y-2">
              <li>Do not misuse the site (e.g., spam, automated scraping, security testing without authorization).</li>
              <li>Do not upload unlawful, infringing, or harmful content.</li>
              <li>Respect intellectual property and privacy rights.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-900">4. Intellectual property</h2>
            <p className="text-gray-700 mt-3">All content on the site is owned by NB Sebastian or its licensors and protected by law. You may not copy, modify, or distribute content without permission, unless permitted by law.</p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-900">5. Disclaimers</h2>
            <p className="text-gray-700 mt-3">The site is provided "as is" without warranties of any kind. We do not guarantee uninterrupted or error-free operation.</p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-900">6. Limitation of liability</h2>
            <p className="text-gray-700 mt-3">To the fullest extent permitted by law, NB Sebastian will not be liable for indirect, incidental, special, consequential, or punitive damages arising from or related to your use of the site.</p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-900">7. Third-party links</h2>
            <p className="text-gray-700 mt-3">Our site may link to third-party websites or services that we do not control. We are not responsible for their content or practices.</p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-900">8. Changes to terms</h2>
            <p className="text-gray-700 mt-3">We may update these Terms from time to time. Continued use constitutes acceptance of the revised Terms.</p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-900">9. Contact</h2>
            <p className="text-gray-700 mt-3">Questions about these Terms? Contact us at <a className="text-blue-600" href="mailto:legal@nbsebastian.com">legal@nbsebastian.com</a>.</p>
          </div>

          <div className="text-sm text-gray-500">Last updated: {new Date().toLocaleDateString()}</div>

          <div className="pt-4">
            <Link to="/" className="text-blue-600">Back to Home</Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default TermsOfServicePage;


