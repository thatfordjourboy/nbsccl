import { ServicePage } from '../site/ServicePage';
import { unsplash } from '../../services';

export function CommoditiesPage() {
  return (
    <ServicePage
      slug="commodities"
      title="Commodities trading"
      intro="Grain, cocoa, fuel, metals and more, bought from trusted suppliers and delivered where you need them."
      image={unsplash('1574323347407-f5e1ad6d020b')}
      imageAlt="Grains of wheat"
      offerings={{
        heading: 'How we trade',
        items: [
          { title: 'Sourcing', description: 'Established suppliers, with quality checked before anything ships.' },
          { title: 'Market intelligence', description: 'Price and supply analysis, so you buy and sell at the right moment.' },
          { title: 'Risk management', description: 'Inspection, contracts and cover in place on every trade.' },
          { title: 'Logistics', description: 'Shipping, storage and delivery through our own import and export team.' },
        ],
      }}
      groups={{
        heading: 'What we trade',
        intro: 'Three groups of commodities, one supply chain.',
        items: [
          { title: 'Agricultural', description: 'Staples and cash crops from trusted growers and suppliers.', list: ['Grains and cereals', 'Coffee and cocoa', 'Sugar and spices', 'Livestock feed'] },
          { title: 'Energy', description: 'Fuel for industry, power and transport.', list: ['Crude oil', 'Natural gas', 'Coal', 'Renewable energy'] },
          { title: 'Industrial', description: 'Raw materials for factories and building sites.', list: ['Steel and metals', 'Chemicals', 'Plastics', 'Textiles'] },
        ],
      }}
      assurances={{
        heading: 'Why trade with us',
        items: [
          { title: 'Market insight', description: 'Analysis that helps you time purchases and sales.' },
          { title: 'Secure trading', description: 'Every contract assessed for risk and protected accordingly.' },
        ],
      }}
      cta={{ heading: 'Need a price?', text: 'Tell us the commodity, the quantity and where it is going. We will come back with a quote.', label: 'Request a commodity quote' }}
    />
  );
}
