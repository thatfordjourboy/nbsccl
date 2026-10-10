import { ServicePage } from '../site/ServicePage';
import { unsplash } from '../../services';

export function ImportExportPage() {
  return (
    <ServicePage
      slug="import-export"
      title="Import and export"
      intro="Freight by sea, air and land, with customs documentation and compliance handled for you."
      image={unsplash('1494412574643-ff11b0a5c1c3')}
      imageAlt="A container port seen from above"
      offerings={{
        heading: 'Trade services',
        intro: 'End-to-end support for moving goods into and out of Ghana.',
        items: [
          { title: 'Ocean freight', description: 'Cost-effective sea transport for large shipments.' },
          { title: 'Air freight', description: 'Fast air cargo for time-sensitive deliveries.' },
          { title: 'Land transport', description: 'Overland haulage and last-mile delivery.' },
          { title: 'Documentation', description: 'Customs paperwork and regulatory compliance, prepared and filed.' },
        ],
      }}
      steps={{
        heading: 'How a shipment runs',
        intro: 'From first conversation to final delivery.',
        items: [
          { title: 'Consultation and planning', description: 'We understand your requirements and agree a trade plan.' },
          { title: 'Documentation and compliance', description: 'All paperwork prepared and regulatory checks completed.' },
          { title: 'Logistics and transport', description: 'The most efficient shipping and delivery route arranged.' },
          { title: 'Tracking and delivery', description: 'Shipments monitored until they reach their destination.' },
        ],
      }}
      assurances={{
        heading: 'Why ship with us',
        items: [
          { title: 'Global network', description: 'Partners and agents in over 50 countries.' },
          { title: 'Timely delivery', description: 'A record of on-time deliveries, with tracking updates along the way.' },
        ],
      }}
      cta={{ heading: 'Moving goods?', text: 'Tell us what you are shipping, from where and to where, and we will quote the route.', label: 'Request a shipping quote' }}
    />
  );
}
