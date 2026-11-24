import { ServicePage } from '../site/ServicePage';
import { unsplash } from '../../services';

export function MerchandisePage() {
  return (
    <ServicePage
      slug="merchandise"
      title="General Merchandise & Supply"
      intro="Procurement and supply of commercial, industrial and institutional goods — a priority channel for recurring revenue."
      image={unsplash('1553413077-190dd305871c')}
      imageAlt="Warehouse aisles of institutional supplies"
      offerings={{
        heading: 'Capabilities',
        items: [
          { title: 'Government procurement and supplies', description: 'Supply responses aligned to public-sector procurement processes.' },
          { title: 'Institutional supplies', description: 'Goods for schools, hospitals, agencies and other institutions.' },
          { title: 'Commercial merchandise', description: 'Commercial product lines for businesses and retailers.' },
          { title: 'Industrial equipment', description: 'Equipment and tools that keep industrial operations running.' },
          { title: 'Office equipment', description: 'Office and administrative equipment for corporate environments.' },
          { title: 'Electrical supplies', description: 'Electrical goods and related supplies for projects and facilities.' },
          { title: 'Building materials', description: 'Materials that support construction and rehabilitation programmes.' },
          { title: 'Bulk procurement', description: 'Volume buying coordinated for efficiency and consistency.' },
          { title: 'Corporate supply contracts', description: 'Ongoing supply relationships for private-sector clients.' },
        ],
      }}
      groups={{
        heading: 'Key opportunities',
        intro: 'Proposed recurring-revenue priorities — not confirmed tenders or awards.',
        items: [
          {
            title: 'Public sector',
            description: 'Larger, recurring institutional demand where delivery discipline matters.',
            list: ['Government tenders', 'Institutional procurement', 'Medical supplies'],
          },
          {
            title: 'Industrial & commercial',
            description: 'Equipment and materials for private-sector operations.',
            list: ['Industrial equipment', 'Office equipment', 'Building materials'],
          },
          {
            title: 'Contracts',
            description: 'Structured supply agreements that create predictable commercial relationships.',
            list: ['Corporate supply contracts', 'Bulk procurement', 'Framework supply'],
          },
        ],
      }}
      steps={{
        heading: 'From requirement to delivery',
        items: [
          { title: 'Define', description: 'We capture the product list, specifications and delivery locations.' },
          { title: 'Source', description: 'Suppliers are identified and quoted against your requirements.' },
          { title: 'Supply', description: 'Goods are procured, checked and staged for delivery.' },
          { title: 'Deliver', description: 'Products arrive at your sites, offices or warehouses.' },
        ],
      }}
      assurances={{
        heading: 'Why buy through us',
        items: [
          { title: 'One relationship, many lines', description: 'Procurement across categories under one commercial counterpart.' },
          { title: 'Integrated delivery', description: 'Supply can combine with construction, import and manufacturing when the brief requires it.' },
        ],
      }}
      cta={{ heading: 'Stocking up or tendering?', text: 'Send a product list, tender reference or the categories you need, and we will respond.', label: 'Request a supply quote' }}
    />
  );
}
