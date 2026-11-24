import { ServicePage } from '../site/ServicePage';
import { unsplash } from '../../services';

export function ConstructionPage() {
  return (
    <ServicePage
      slug="construction"
      title="Construction & Infrastructure"
      intro="Building construction, civil engineering and infrastructure development for public and private sector clients."
      image={unsplash('1541888946425-d81bb19240f5')}
      imageAlt="Site engineers walking a construction site"
      offerings={{
        heading: 'Capabilities',
        intro: 'Construction is our flagship division. Capabilities below reflect the scope we pursue; project specifics are published as they are verified.',
        items: [
          { title: 'Residential', description: 'Houses and apartment developments built for lasting comfort and structural integrity.' },
          { title: 'Commercial', description: 'Offices, shops and mixed-use buildings designed around the people who will use them.' },
          { title: 'Institutional infrastructure', description: 'Public-sector and institutional facilities delivered to agreed specifications.' },
          { title: 'Educational facilities', description: 'Schools and related educational infrastructure for communities and institutions.' },
          { title: 'Industrial construction', description: 'Factories, warehouses and industrial buildings laid out for efficient operations.' },
          { title: 'Civil engineering', description: 'Civil works that support sites, utilities and public infrastructure.' },
          { title: 'Road infrastructure', description: 'Road works that connect communities and support commercial activity.' },
          { title: 'Renovation and rehabilitation', description: 'Upgrades and rehabilitation of existing structures and infrastructure.' },
          { title: 'Project management', description: 'Coordination from planning through execution to handover.' },
        ],
      }}
      groups={{
        heading: 'Key opportunities',
        intro: 'Proposed strategic priorities for this division — not confirmed contracts or awards.',
        items: [
          {
            title: 'Public & institutional',
            description: 'Government and institutional briefs where credible delivery matters.',
            list: ['Government contracts', 'Educational facilities', 'Healthcare facilities', 'Public infrastructure'],
          },
          {
            title: 'Civil & transport',
            description: 'Infrastructure that enables commerce and community access.',
            list: ['Road construction', 'Civil engineering works', 'Site infrastructure'],
          },
          {
            title: 'Private development',
            description: 'Private-sector building programmes across residential and commercial use.',
            list: ['Residential developments', 'Commercial buildings', 'Industrial facilities'],
          },
        ],
      }}
      assurances={{
        heading: 'How we work on site',
        items: [
          { title: 'Checked at every stage', description: 'Each stage is inspected against the specification before the next one starts.' },
          { title: 'Clear schedules and reporting', description: 'Programme and costs are agreed before work begins, with progress updates throughout.' },
          { title: 'No unverified claims', description: 'Named project histories and awards are published only after client confirmation.' },
        ],
      }}
      cta={{ heading: 'Planning a build?', text: 'Send drawings or a short description and we will arrange a consultation.', label: 'Start a construction enquiry' }}
    />
  );
}
