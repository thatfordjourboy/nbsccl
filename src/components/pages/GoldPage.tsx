import { ServicePage } from '../site/ServicePage';
import { unsplash } from '../../services';

export function GoldPage() {
  return (
    <ServicePage
      slug="gold"
      title="Gold purchasing"
      intro="Gold bought at transparent, competitive rates, with purity assessed and every transaction documented."
      image={unsplash('1610375461246-83df859d849d')}
      imageAlt="Stacked gold bars"
      offerings={{
        heading: 'Our gold services',
        intro: 'From purchase and evaluation to storage and market analysis.',
        items: [
          { title: 'Gold purchasing', description: 'Competitive rates with pricing explained up front.' },
          { title: 'Quality assessment', description: 'Purity evaluated and certified using established testing methods.' },
          { title: 'Market analysis', description: 'Current price insight to inform when you buy or sell.' },
          { title: 'Secure storage', description: 'Fully insured, secure storage for precious metals.' },
        ],
      }}
      steps={{
        heading: 'How selling gold works',
        intro: 'Four steps, each one documented.',
        items: [
          { title: "Ask for today's rate", description: 'Call or send an enquiry and we will give you the current price, set against the market.' },
          { title: 'Assessment', description: 'Your gold is weighed and its purity tested and certified.' },
          { title: 'Agree the price', description: 'You see exactly how the price was worked out before you accept.' },
          { title: 'Payment and records', description: 'Payment is made and the full transaction is documented. Secure storage is available if you need it.' },
        ],
      }}
      assurances={{
        heading: 'Why sell to us',
        items: [
          { title: 'Certified expertise', description: 'Licensed precious metals dealers with decades of industry experience.' },
          { title: 'Trusted transactions', description: 'Transparent, secure transactions with full documentation.' },
          { title: '99.9% purity guarantee', description: 'Gold guaranteed to 99.9% purity.' },
        ],
      }}
      cta={{ heading: 'Selling gold?', text: 'Contact us for current rates and to arrange an assessment.', label: 'Request a gold quote' }}
    />
  );
}
