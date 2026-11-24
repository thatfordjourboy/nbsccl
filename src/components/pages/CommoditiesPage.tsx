import { ServicePage } from '../site/ServicePage';
import { unsplash } from '../../services';

export function CommoditiesPage() {
  return (
    <ServicePage
      slug="commodities"
      title="Commodity Trading"
      intro="Strategic sourcing, procurement and trading of agricultural, industrial and commercial commodities."
      image={unsplash('1574323347407-f5e1ad6d020b')}
      imageAlt="Grains of wheat"
      offerings={{
        heading: 'Capabilities',
        intro: 'We focus on agricultural, industrial and commercial commodities — not precious-metals purchasing.',
        items: [
          { title: 'Agricultural commodities', description: 'Staples and cash crops sourced through established supplier relationships.' },
          { title: 'Industrial raw materials', description: 'Inputs for factories, construction sites and industrial operations.' },
          { title: 'Commodity procurement', description: 'Structured buying against agreed specifications, volumes and timelines.' },
          { title: 'Bulk sourcing', description: 'Volume procurement coordinated for wholesale and institutional demand.' },
          { title: 'Supplier coordination', description: 'Vetting, scheduling and quality checks across the supply chain.' },
          { title: 'Domestic and international trade', description: 'Trade within Ghana and across borders where logistics allow.' },
          { title: 'Distribution', description: 'Movement of goods to the points of use you specify.' },
          { title: 'Supply-chain management', description: 'End-to-end coordination from source to delivery.' },
        ],
      }}
      groups={{
        heading: 'Key opportunities',
        intro: 'Proposed commercial directions for commodity trading — not confirmed supply agreements.',
        items: [
          {
            title: 'Agricultural',
            description: 'Trading programmes built around Ghana and West African agricultural flows.',
            list: ['Agricultural commodity trading', 'Bulk procurement', 'Wholesale distribution'],
          },
          {
            title: 'Industrial',
            description: 'Raw materials that keep production and construction moving.',
            list: ['Industrial raw materials', 'Steel and related metals', 'Industrial inputs'],
          },
          {
            title: 'International',
            description: 'Cross-border commodity supply where documentation and logistics are coordinated.',
            list: ['International commodity supply', 'Supplier partnerships', 'Distribution networks'],
          },
        ],
      }}
      assurances={{
        heading: 'How we trade',
        items: [
          { title: 'Written terms', description: 'Pricing, quantities and delivery conditions agreed before goods move.' },
          { title: 'Quality checks', description: 'Inspection against specification before acceptance where the trade requires it.' },
          { title: 'Clear scope', description: 'Focus remains on agricultural, industrial and commercial commodities only.' },
        ],
      }}
      cta={{ heading: 'Need a commodity quote?', text: 'Tell us the commodity, quantity and destination. We will respond with next steps.', label: 'Request a commodity quote' }}
    />
  );
}
