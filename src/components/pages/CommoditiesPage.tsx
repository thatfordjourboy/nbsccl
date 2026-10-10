import { ServicePage } from '../site/ServicePage';
import { unsplash } from '../../services';

export function CommoditiesPage() {
  return (
    <ServicePage
      slug="commodities"
      title="Commodities trading"
      intro="Agricultural, energy and industrial commodities, sourced through global partners and delivered through our own logistics."
      image={unsplash('1574323347407-f5e1ad6d020b')}
      imageAlt="Grains of wheat"
      offerings={{
        heading: 'How we trade',
        items: [
          { title: 'Sourcing', description: 'We buy from established suppliers and check quality before goods ship.' },
          { title: 'Market intelligence', description: 'Pricing and supply analysis so you buy and sell at the right time.' },
          { title: 'Risk management', description: 'Risk assessed and mitigated on every contract.' },
          { title: 'Logistics', description: 'Shipping, storage and delivery handled by our import and export team.' },
        ],
      }}
      groups={{
        heading: 'What we trade',
        intro: 'Three groups of commodities, backed by supplier partnerships and logistics.',
        items: [
          { title: 'Agricultural', description: 'Essential produce sourced from trusted suppliers.', list: ['Grains and cereals', 'Coffee and cocoa', 'Sugar and spices', 'Livestock feed'] },
          { title: 'Energy', description: 'Fuel and energy supply for industry and communities.', list: ['Crude oil', 'Natural gas', 'Coal', 'Renewable energy'] },
          { title: 'Industrial', description: 'Materials for manufacturing and construction.', list: ['Steel and metals', 'Chemicals', 'Plastics', 'Textiles'] },
        ],
      }}
      assurances={{
        heading: 'Why trade with us',
        items: [
          { title: 'Market insight', description: 'Analysis that helps you plan purchases and sales around the market.' },
          { title: 'Secure trading', description: 'Comprehensive risk assessment and mitigation for every trade.' },
        ],
      }}
      cta={{ heading: 'Need a commodity price?', text: 'Tell us the commodity, quantity and delivery point and we will come back with a quote.', label: 'Request a trading quote' }}
    />
  );
}
