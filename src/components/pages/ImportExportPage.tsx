import { ServicePage } from '../site/ServicePage';
import { unsplash } from '../../services';

export function ImportExportPage() {
  return (
    <ServicePage
      slug="import-export"
      title="Import and export"
      intro="Sea, air and road freight, with the customs paperwork handled for you."
      image={unsplash('1494412574643-ff11b0a5c1c3')}
      imageAlt="A container port seen from above"
      offerings={{
        heading: 'Freight services',
        intro: 'Everything needed to move goods into and out of Ghana.',
        items: [
          { title: 'Ocean freight', description: 'The economical choice for large and heavy shipments.' },
          { title: 'Air freight', description: 'For deliveries that cannot wait.' },
          { title: 'Land transport', description: 'Overland haulage and last-mile delivery.' },
          { title: 'Documentation', description: 'Customs declarations and compliance, prepared and filed.' },
        ],
      }}
      steps={{
        heading: 'How a shipment runs',
        intro: 'From first call to final delivery.',
        items: [
          { title: 'Plan', description: 'We agree the route, timing and cost with you.' },
          { title: 'Paperwork', description: 'Documents are prepared and regulatory checks completed before goods move.' },
          { title: 'Transport', description: 'Your goods travel by the most efficient route.' },
          { title: 'Tracking and delivery', description: 'You get updates until the shipment arrives.' },
        ],
      }}
      assurances={{
        heading: 'Why ship with us',
        items: [
          { title: 'Global network', description: 'Partners and agents in more than 50 countries.' },
          { title: 'On-time delivery', description: 'A record of arriving when promised, with tracking along the way.' },
        ],
      }}
      cta={{ heading: 'Moving goods?', text: 'Tell us what you are shipping, from where and to where, and we will quote the route.', label: 'Request a freight quote' }}
    />
  );
}
