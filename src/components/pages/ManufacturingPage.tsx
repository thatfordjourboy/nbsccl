import { ServicePage } from '../site/ServicePage';
import { unsplash } from '../../services';

export function ManufacturingPage() {
  return (
    <ServicePage
      slug="manufacturing"
      title="Manufacturing"
      intro="Industrial manufacturing and customized production solutions — delivered directly and through strategic manufacturing partners."
      image={unsplash('1513828583688-c52646db42da')}
      imageAlt="Pipework and machinery in an industrial plant"
      offerings={{
        heading: 'Capabilities',
        intro: 'We distinguish work we coordinate directly from production delivered through strategic manufacturing partners. We do not claim owned factory footprints that have not been verified for publication.',
        items: [
          { title: 'Industrial production', description: 'Production runs coordinated for industrial and commercial requirements.' },
          { title: 'Customized manufacturing', description: 'Made-to-specification work sized to your drawings and volumes.' },
          { title: 'Contract manufacturing', description: 'Production arranged under contract, including via manufacturing partners.' },
          { title: 'Product development', description: 'Support for developing products destined for local or export markets.' },
          { title: 'Material processing', description: 'Processing and preparation of materials where the brief requires it.' },
          { title: 'Production coordination', description: 'Scheduling, quality checkpoints and logistics around the production run.' },
          { title: 'Industrial partnerships', description: 'Strategic partnerships with manufacturers for capability we do not operate in-house.' },
        ],
      }}
      groups={{
        heading: 'Key opportunities',
        intro: 'Long-term industrial growth priorities — proposed directions, not confirmed plant investments.',
        items: [
          {
            title: 'Local production',
            description: 'Building domestic capacity where it creates lasting commercial value.',
            list: ['Local production', 'Import substitution', 'Material processing'],
          },
          {
            title: 'Contract & private label',
            description: 'Production programmes for brands and institutional buyers.',
            list: ['Contract manufacturing', 'Private-label products', 'Custom runs'],
          },
          {
            title: 'Partnerships',
            description: 'Industrial partners that extend what we can deliver under one commercial relationship.',
            list: ['Industrial partnerships', 'Production coordination', 'Quality oversight'],
          },
        ],
      }}
      assurances={{
        heading: 'Clear about ownership',
        items: [
          { title: 'Direct vs partner delivery', description: 'We state when work is delivered through strategic manufacturing partners rather than owned facilities.' },
          { title: 'No invented factories', description: 'Facility claims, certifications and capacity figures are published only after verification.' },
          { title: 'Specification-led', description: 'Quotes start from your drawings, samples or written requirements.' },
        ],
      }}
      cta={{ heading: 'Need something made?', text: 'Send a specification, drawing or sample and we will advise on direct or partner production.', label: 'Request a manufacturing quote' }}
    />
  );
}
