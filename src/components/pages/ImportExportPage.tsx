import { ServicePage } from '../site/ServicePage';
import { unsplash } from '../../services';

export function ImportExportPage() {
  return (
    <ServicePage
      slug="import-export"
      title="Import & Export"
      intro="International trade facilitation, cross-border sourcing and integrated logistics coordination."
      image={unsplash('1494412574643-ff11b0a5c1c3')}
      imageAlt="A container port seen from above"
      offerings={{
        heading: 'Capabilities',
        intro: 'Everything needed to move goods into and out of Ghana with coordinated documentation support.',
        items: [
          { title: 'International procurement', description: 'Sourcing from overseas suppliers against agreed specifications.' },
          { title: 'Import coordination', description: 'Planning and oversight of inbound shipments into Ghana.' },
          { title: 'Export facilitation', description: 'Support for outbound cargo and commercial documentation.' },
          { title: 'Freight coordination', description: 'Sea, air and road freight arranged to suit the cargo and timeline.' },
          { title: 'Customs documentation support', description: 'Preparation and filing support for customs and compliance paperwork.' },
          { title: 'International sourcing', description: 'Finding and coordinating suppliers entering Ghana and West Africa.' },
          { title: 'Distribution', description: 'Last-mile and regional distribution once goods clear.' },
          { title: 'Trade partnerships', description: 'Relationships that connect foreign manufacturers and local demand.' },
        ],
      }}
      groups={{
        heading: 'Key opportunities',
        intro: 'Proposed directions for international trade — not confirmed routes or exclusive agreements.',
        items: [
          {
            title: 'Inbound',
            description: 'Equipment and materials entering Ghana for projects and commerce.',
            list: ['Equipment imports', 'Industrial inputs', 'International sourcing'],
          },
          {
            title: 'Outbound',
            description: 'Agricultural and commercial exports where logistics allow.',
            list: ['Agricultural exports', 'Cross-border trade', 'Export facilitation'],
          },
          {
            title: 'Partnerships',
            description: 'Connecting foreign brands with Ghana and West African markets.',
            list: ['Logistics coordination', 'International distribution', 'Trade partnerships'],
          },
        ],
      }}
      steps={{
        heading: 'How a shipment runs',
        intro: 'From first call to final delivery.',
        items: [
          { title: 'Plan', description: 'We agree the route, timing and cost with you.' },
          { title: 'Paperwork', description: 'Documents are prepared and regulatory checks completed before goods move.' },
          { title: 'Transport', description: 'Your goods travel by the most efficient coordinated route.' },
          { title: 'Tracking and delivery', description: 'You get updates until the shipment arrives.' },
        ],
      }}
      assurances={{
        heading: 'How we ship',
        items: [
          { title: 'Documented process', description: 'Clear steps from quote through customs support to delivery updates.' },
          { title: 'Integrated with other divisions', description: 'Import can feed construction, manufacturing and institutional supply under one umbrella.' },
        ],
      }}
      cta={{ heading: 'Moving goods?', text: 'Tell us what you are shipping, from where and to where, and we will quote the route.', label: 'Request a freight quote' }}
    />
  );
}
