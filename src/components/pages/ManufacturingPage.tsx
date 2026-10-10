import { ServicePage } from '../site/ServicePage';
import { unsplash } from '../../services';

export function ManufacturingPage() {
  return (
    <ServicePage
      slug="manufacturing"
      title="Manufacturing"
      intro="Parts and equipment made to your specification, with quality checked at every stage."
      image={unsplash('1513828583688-c52646db42da')}
      imageAlt="Pipework and machinery in an industrial plant"
      offerings={{
        heading: 'Capabilities',
        items: [
          { title: 'Precision engineering', description: 'Tight tolerances, held by inspection at every stage.' },
          { title: 'Automation', description: 'Automated, connected production lines for consistent output.' },
          { title: 'Custom production', description: 'Production runs sized to your specification and volumes.' },
          { title: 'Quality assurance', description: 'ISO-certified processes keep every batch consistent.' },
        ],
      }}
      showcase={{
        heading: 'Industries we serve',
        items: [
          { title: 'Automotive components', description: 'High-precision parts made to strict quality standards.', image: unsplash('1558618666-fcd25c85cd64', 900) },
          { title: 'Electronics', description: 'Electronic components and circuit board assembly.', image: unsplash('1581091226825-a6a2a5aee158', 900) },
          { title: 'Industrial equipment', description: 'Components for heavy machinery and industrial equipment.', image: unsplash('1504917595217-d4dc5ebe6122', 900) },
        ],
      }}
      assurances={{
        heading: 'Quality and certifications',
        items: [
          { title: 'ISO 9001:2015', description: 'Quality management.' },
          { title: 'ISO 14001', description: 'Environmental management.' },
          { title: 'Industry 4.0', description: 'Smart, connected manufacturing.' },
        ],
      }}
      cta={{ heading: 'Need something made?', text: 'Send a specification, drawing or sample and we will quote the production run.', label: 'Request a manufacturing quote' }}
    />
  );
}
