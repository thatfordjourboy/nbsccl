import { Link } from 'react-router-dom';

export function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold">Privacy Policy</h1>
          <p className="text-gray-300 mt-4 max-w-2xl">How NB Sebastian collects, uses, and protects your information.</p>
        </div>
      </section>

      <section className="py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div>
            <h2 className="text-2xl font-semibold text-gray-900">1. Who we are</h2>
            <p className="text-gray-700 mt-3">NB Sebastian Commodities Company Ltd. ("NB Sebastian", "we", "our", "us") provides construction, commodities trading, manufacturing, and global trade services. This policy explains how we handle personal data across our websites and services.</p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-900">2. Information we collect</h2>
            <ul className="list-disc pl-6 text-gray-700 mt-3 space-y-2">
              <li><span className="font-medium">Contact data</span>: name, email, phone, company, and message contents submitted via forms.</li>
              <li><span className="font-medium">Usage data</span>: device/browser information, IP address, and pages visited (via analytics, if enabled).</li>
              <li><span className="font-medium">Transactional data</span>: limited project-related information you voluntarily share for quotes or services.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-900">3. How we use information</h2>
            <ul className="list-disc pl-6 text-gray-700 mt-3 space-y-2">
              <li>Respond to inquiries and provide quotes or proposals.</li>
              <li>Operate, maintain, and improve our website and services.</li>
              <li>Comply with legal obligations and enforce agreements.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-900">4. Legal bases</h2>
            <p className="text-gray-700 mt-3">Depending on your location, processing is based on consent, contract performance, legitimate interests (e.g., site security, service improvement), or legal compliance.</p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-900">5. Sharing</h2>
            <p className="text-gray-700 mt-3">We do not sell personal data. We may share with service providers that help us run our business (e.g., hosting, analytics, communications) under contracts that require them to protect your data. We may disclose where required by law or to protect rights and safety.</p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-900">6. Data retention</h2>
            <p className="text-gray-700 mt-3">We retain personal data only as long as necessary for the purposes described above, and then delete or anonymize it according to our retention schedules and applicable laws.</p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-900">7. International transfers</h2>
            <p className="text-gray-700 mt-3">If data is transferred across borders, we use appropriate safeguards (such as standard contractual clauses) as required by law.</p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-900">8. Your rights</h2>
            <ul className="list-disc pl-6 text-gray-700 mt-3 space-y-2">
              <li>Access, correct, or delete your personal data.</li>
              <li>Object to or restrict processing; withdraw consent where applicable.</li>
              <li>Portability of data where required by law.</li>
            </ul>
            <p className="text-gray-700 mt-3">Contact us to exercise rights: <a className="text-blue-600" href="mailto:privacy@nbsebastian.com">privacy@nbsebastian.com</a>.</p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-900">9. Security</h2>
            <p className="text-gray-700 mt-3">We implement administrative, technical, and physical safeguards to protect personal data. No method of transmission or storage is 100% secure; we continuously improve our controls.</p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-900">10. Children</h2>
            <p className="text-gray-700 mt-3">Our services are not directed to children under 13 (or the age defined by local law). We do not knowingly collect data from children.</p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-900">11. Changes</h2>
            <p className="text-gray-700 mt-3">We may update this policy to reflect operational or legal changes. We will update the “Last updated” date and, where required, notify you.</p>
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

export default PrivacyPolicyPage;


