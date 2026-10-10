import { ServicePage } from '../site/ServicePage';
import { unsplash } from '../../services';

export function ConstructionPage() {
  return (
    <ServicePage
      slug="construction"
      title="Construction"
      intro="Commercial, residential, industrial and infrastructure projects, built to schedule and to standard."
      image={unsplash('1541888946425-d81bb19240f5')}
      imageAlt="Site engineers walking a construction site"
      offerings={{
        heading: 'What we build',
        intro: 'Construction is where NB Sebastian started. We take projects from planning through to handover.',
        items: [
          { title: 'Commercial', description: 'Office buildings, retail spaces and mixed-use developments designed to work well and last.' },
          { title: 'Residential', description: 'Homes, apartment blocks and housing developments built for comfort and durability.' },
          { title: 'Industrial', description: 'Factories, warehouses and industrial complexes laid out for efficient operation.' },
          { title: 'Infrastructure', description: 'Roads, bridges and public works that connect communities.' },
        ],
      }}
      showcase={{
        heading: 'Featured projects',
        items: [
          { title: 'Manhattan Business Center', meta: 'Commercial, New York', description: '50-storey commercial tower with sustainable design features.', image: unsplash('1486406146926-c627a92ad1ab', 900) },
          { title: 'Riverside Residences', meta: 'Residential, London', description: 'Residential complex with 200 apartments.', image: unsplash('1545324418-cc1a3fa10c00', 900) },
          { title: 'Tech Manufacturing Hub', meta: 'Industrial, Singapore', description: 'Manufacturing facility for technology companies.', image: unsplash('1587293852726-70cdb56c2866', 900) },
        ],
      }}
      assurances={{
        heading: 'How we work on site',
        items: [
          { title: 'Quality checked', description: 'Every stage is inspected against the specification before work moves on.' },
          { title: 'On time, on budget', description: 'Schedules and costs are agreed up front and reported on throughout.' },
        ],
      }}
      cta={{ heading: 'Planning a build?', text: 'Send us your drawings or a description of the project and we will arrange a consultation.', label: 'Start a construction enquiry' }}
    />
  );
}
