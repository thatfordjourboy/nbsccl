import { ServicePage } from '../site/ServicePage';
import { unsplash } from '../../services';

export function GoldPage() {
  return (
    <ServicePage
      slug="gold"
      title="Gold purchasing"
      intro="Sell your gold at a fair, market-linked rate, with its purity tested and every step documented."
      image={unsplash('1610375461246-83df859d849d')}
      imageAlt="Stacked gold bars"
      offerings={{
        heading: 'Our gold services',
        intro: 'From a single sale to secure storage.',
        items: [
          { title: 'Gold purchasing', description: 'Competitive rates, with the price explained before you agree.' },
          { title: 'Quality assessment', description: 'Purity tested and certified using established methods.' },
          { title: 'Market analysis', description: 'Current price insight to help you decide when to sell.' },
          { title: 'Secure storage', description: 'Fully insured storage for gold you want to hold.' },
        ],
      }}
      steps={{
        heading: 'How selling gold works',
        intro: 'Four steps, each one documented.',
        items: [
          { title: "Ask for today's rate", description: 'Call or send an enquiry for the current market price.' },
          { title: 'Weigh and test', description: 'Your gold is weighed, and its purity tested and certified.' },
          { title: 'Agree the price', description: 'You see how the price was calculated before you accept.' },
          { title: 'Get paid', description: 'Payment is made and the transaction recorded. Storage is available if you would rather hold.' },
        ],
      }}
      assurances={{
        heading: 'Why sell to us',
        items: [
          { title: 'Certified expertise', description: 'Licensed precious metals dealers with decades of industry experience.' },
          { title: 'Nothing hidden', description: 'Transparent, secure transactions, documented from start to finish.' },
          { title: '99.9% purity guarantee', description: 'Gold guaranteed to 99.9% purity.' },
        ],
      }}
      cta={{ heading: 'Selling gold?', text: "Ask for today's rate or book an assessment.", label: "Get today's gold rate" }}
    />
  );
}
