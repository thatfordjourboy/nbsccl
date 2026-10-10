import { ServicePage } from '../site/ServicePage';
import { unsplash } from '../../services';

export function ConstructionPage() {
  return (
    <ServicePage
      slug="construction"
      title="Construction"
      intro="Offices, homes, factories and roads, planned properly and handed over on time."
      image={unsplash('1541888946425-d81bb19240f5')}
      imageAlt="Site engineers walking a construction site"
      offerings={{
        heading: 'What we build',
        intro: 'Construction is where NB Sebastian began. We manage projects from first drawings to handover.',
        items: [
          { title: 'Commercial', description: 'Offices, shops and mixed-use buildings designed around the people who will use them.' },
          { title: 'Residential', description: 'Houses and apartment blocks built to stay comfortable and solid for decades.' },
          { title: 'Industrial', description: 'Factories and warehouses laid out so goods and people move efficiently.' },
          { title: 'Infrastructure', description: 'Roads, bridges and public works that connect communities.' },
        ],
      }}
      showcase={{
        heading: 'Featured projects',
        items: [
          { title: 'Manhattan Business Center', meta: 'Commercial, New York', description: 'A 50-storey commercial tower with sustainable design features.', image: unsplash('1486406146926-c627a92ad1ab', 900) },
          { title: 'Riverside Residences', meta: 'Residential, London', description: 'A residential complex of 200 apartments.', image: unsplash('1545324418-cc1a3fa10c00', 900) },
          { title: 'Tech Manufacturing Hub', meta: 'Industrial, Singapore', description: 'A manufacturing facility for technology companies.', image: unsplash('1587293852726-70cdb56c2866', 900) },
        ],
      }}
      assurances={{
        heading: 'On every site',
        items: [
          { title: 'Checked at every stage', description: 'Each stage is inspected against the specification before the next one starts.' },
          { title: 'On time, on budget', description: 'Schedule and costs are agreed before work begins, and you get progress reports throughout.' },
        ],
      }}
      cta={{ heading: 'Planning a build?', text: 'Send us drawings or a short description and we will set up a site consultation.', label: 'Start a construction enquiry' }}
    />
  );
}
