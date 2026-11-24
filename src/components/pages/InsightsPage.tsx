import { Link } from 'react-router-dom';
import { Container, ContactBand, PageHero, SectionHeading } from '../site/blocks';
import { BRAND, SERVICES } from '../../services';

const DIVISION_OPPORTUNITIES: Record<string, string[]> = {
  construction: [
    'Government contracts',
    'Educational and healthcare facilities',
    'Road construction',
    'Residential developments',
    'Commercial buildings',
    'Public infrastructure projects',
  ],
  commodities: [
    'Agricultural commodity trading',
    'Industrial raw materials',
    'Bulk procurement',
    'Wholesale distribution',
    'International commodity supply agreements',
  ],
  'import-export': [
    'International sourcing',
    'Cross-border trade',
    'Equipment imports',
    'Agricultural exports',
    'Logistics coordination',
    'International distribution partnerships',
  ],
  manufacturing: [
    'Local production',
    'Contract manufacturing',
    'Private-label products',
    'Industrial partnerships',
    'Material processing',
    'Import substitution',
  ],
  merchandise: [
    'Government tenders',
    'Institutional procurement',
    'Industrial equipment',
    'Medical supplies',
    'Office equipment',
    'Building materials',
    'Corporate supply contracts',
  ],
};

const GROWTH_THEMES = [
  {
    title: 'Government and institutional procurement',
    text: 'Larger recurring public-sector contracts across construction and general merchandise supply.',
  },
  {
    title: 'International strategic partnerships',
    text: 'Representing foreign manufacturers and suppliers entering Ghana and West Africa.',
  },
  {
    title: 'Integrated project delivery',
    text: 'Combining construction, procurement, manufacturing and importation under one contract.',
  },
  {
    title: 'Regional expansion',
    text: 'West Africa commercial relationships that extend beyond a single-country footprint.',
  },
  {
    title: 'Exclusive distribution agreements',
    text: 'Authorized distributor relationships for international brands, where secured.',
  },
  {
    title: 'Private-sector development',
    text: 'Commercial infrastructure, real estate and industrial development partnerships.',
  },
];

export function InsightsPage() {
  return (
    <>
      <PageHero
        title="Strategic insights"
        intro="Proposed growth directions across our complementary divisions — priorities for leadership, not a list of confirmed contracts."
      />

      <section className="border-b border-line bg-paper py-8">
        <Container>
          <p className="max-w-3xl text-sm text-slate">
            <strong className="font-heading text-ink">Disclaimer:</strong> Content on this page describes strategic
            priorities and proposed directions. It does not assert active contracts, awards, exclusive licences or
            verified market statistics unless separately confirmed and published elsewhere.
          </p>
        </Container>
      </section>

      <section className="py-20 sm:py-28">
        <Container>
          <SectionHeading
            title="Key opportunities by division"
            intro="Soft positioning for each business line — useful for strategy conversations and partner discussions."
          />
          <div className="mt-14 overflow-x-auto">
            <table className="w-full min-w-[40rem] border-collapse text-left text-sm">
              <thead>
                <tr className="border-b border-line">
                  <th className="py-4 pr-6 font-heading text-base">Division</th>
                  <th className="py-4 font-heading text-base">Proposed opportunities</th>
                </tr>
              </thead>
              <tbody>
                {SERVICES.map((s) => (
                  <tr key={s.slug} className="border-b border-line align-top">
                    <td className="py-5 pr-6">
                      <Link to={s.href} className="font-heading text-brand hover:underline">
                        <span className="mr-2 text-gold tabular-nums" aria-hidden="true">{s.number}</span>
                        {s.name}
                      </Link>
                    </td>
                    <td className="py-5 text-slate">
                      <ul className="list-disc space-y-1 pl-5">
                        {(DIVISION_OPPORTUNITIES[s.slug] ?? []).map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Container>
      </section>

      <section className="bg-white py-20 sm:py-28">
        <Container>
          <SectionHeading
            title="Strategic growth opportunities"
            intro="Broader themes that cut across divisions."
          />
          <ol className="mt-14 divide-y divide-line border-y border-line">
            {GROWTH_THEMES.map((theme, i) => (
              <li key={theme.title} className="grid gap-3 py-8 sm:grid-cols-[4rem_1fr]">
                <span className="font-heading text-gold tabular-nums" aria-hidden="true">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div>
                  <h3 className="font-heading text-xl sm:text-2xl">{theme.title}</h3>
                  <p className="mt-2 max-w-2xl text-slate">{theme.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section className="py-20 sm:py-28">
        <Container>
          <SectionHeading
            title="Division priority"
            intro="Visual and commercial hierarchy for how we present the enterprise."
          />
          <div className="mt-14 overflow-x-auto">
            <table className="w-full min-w-[36rem] border-collapse text-left text-sm">
              <thead>
                <tr className="border-b border-line">
                  <th className="py-4 pr-4 font-heading">Division</th>
                  <th className="py-4 pr-4 font-heading">Strategic role</th>
                  <th className="py-4 font-heading">Priority</th>
                </tr>
              </thead>
              <tbody>
                {SERVICES.map((s) => (
                  <tr key={s.slug} className="border-b border-line">
                    <td className="py-4 pr-4">{s.name}</td>
                    <td className="py-4 pr-4 text-slate">{s.role}</td>
                    <td className="py-4 font-heading text-brand">{s.priority}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Container>
      </section>

      <section className="bg-brand py-20 text-white sm:py-28">
        <Container className="max-w-3xl">
          <p className="font-heading text-sm tracking-[0.12em] text-gold-soft">COMPETITIVE ADVANTAGE</p>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl text-balance">
            An integrated commercial ecosystem
          </h2>
          <p className="mt-8 text-lg text-white/75">
            The greatest opportunity is integrating the five divisions into a complementary commercial ecosystem —
            source internationally, import equipment, coordinate manufacturing, supply institutional clients and execute
            construction under one corporate umbrella — capturing value at multiple supply-chain stages.
          </p>
          <p className="mt-8 border-t border-white/20 pt-8 font-heading text-xl text-gold-soft sm:text-2xl">
            {BRAND.positioning}
          </p>
        </Container>
      </section>

      <ContactBand heading="Discuss a strategic partnership" label="Partner With Us" service="partnerships" />
    </>
  );
}
