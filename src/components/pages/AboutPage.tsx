import { Link } from 'react-router-dom';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { Container, ContactBand, PageHero, SectionHeading, Steps } from '../site/blocks';
import { BRAND, FIGURES, unsplash } from '../../services';

const VALUES = [
  { title: 'Integrity', description: 'Clear terms, honest prices and everything in writing. You always know where you stand.' },
  { title: 'Accountability', description: 'We own our commitments, report progress and close work to an agreed standard.' },
  { title: 'Partnership', description: 'We would rather keep a client, supplier or community partner for ten years than win one deal.' },
  { title: 'Excellence', description: 'Work is checked before we call it finished, whether it is a building, a shipment or a supply contract.' },
  { title: 'Integration', description: 'Complementary divisions that can combine construction, trade, manufacturing and supply under one contract when the brief requires it.' },
  { title: 'Sustainability', description: 'We make decisions that will still look right in twenty years, for the planet and the people who come after us.' },
];

const TIMELINE = [
  { marker: 'Origin', title: 'Construction roots', description: 'NB Sebastian began with construction capability in Accra, building a foundation of professional execution.' },
  { marker: 'Growth', title: 'Trade & supply', description: 'Commodity trading, import and export, and general merchandise supply expanded the commercial footprint.' },
  { marker: 'Industry', title: 'Manufacturing partnerships', description: 'Manufacturing capability developed through direct coordination and strategic industrial partners.' },
  { marker: 'Today', title: 'Integrated enterprise', description: 'Five complementary divisions under one corporate umbrella — infrastructure, trade, manufacturing and institutional supply.' },
  { marker: 'Ahead', title: 'Strategic priorities', description: 'Proposed directions include government procurement, international partnerships, regional expansion and exclusive distribution — subject to verified opportunity.' },
];

export function AboutPage() {
  const paragraphs = BRAND.description.split('\n\n');

  return (
    <>
      <PageHero
        title="About NB Sebastian"
        intro={BRAND.positioning}
        image={unsplash('1497366216548-37526070297c')}
        imageAlt="An open-plan office"
      />

      <section className="py-20 sm:py-28">
        <Container className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading title="Who we are" intro={BRAND.tagline} />
            <dl className="mt-10 grid grid-cols-3 gap-6 border-t border-line pt-8 lg:grid-cols-1 lg:gap-8">
              {FIGURES.map((f) => (
                <div key={f.label} className="flex flex-col-reverse">
                  <dt className="mt-2 text-sm text-slate">{f.label}</dt>
                  <dd className="font-display text-3xl text-brand sm:text-5xl">{f.value}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="space-y-6 text-lg text-slate lg:col-span-7 [&>p:first-child]:text-xl [&>p:first-child]:text-ink">
            {paragraphs.map((p) => (
              <p key={p.slice(0, 40)}>{p}</p>
            ))}
            <div className="!mt-12 aspect-[16/9] overflow-hidden bg-brand">
              <ImageWithFallback
                src={unsplash('1486406146926-c627a92ad1ab', 1400)}
                alt="Office towers seen from below"
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-brand py-20 text-white sm:py-28">
        <Container className="grid gap-14 lg:grid-cols-2">
          <div>
            <p className="font-heading text-sm tracking-[0.12em] text-gold-soft">MISSION</p>
            <h2 className="mt-3 font-heading text-3xl sm:text-4xl">What we pursue</h2>
            <p className="mt-6 text-lg text-white/75">{BRAND.mission}</p>
          </div>
          <div>
            <p className="font-heading text-sm tracking-[0.12em] text-gold-soft">VISION</p>
            <h2 className="mt-3 font-heading text-3xl sm:text-4xl">Where we aim</h2>
            <p className="mt-6 text-lg text-white/75">{BRAND.vision}</p>
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-28">
        <Container>
          <SectionHeading title="Our values" intro="What clients, suppliers and partners can expect from us." />
          <dl className="mt-14 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {VALUES.map((v) => (
              <div key={v.title} className="border-t-[3px] border-brand pt-6">
                <dt className="font-heading text-2xl">{v.title}</dt>
                <dd className="mt-3 text-slate">{v.description}</dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      <section className="bg-white py-20 sm:py-28">
        <Container className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-28">
              <SectionHeading
                title="Our journey"
                intro="From construction roots to a diversified enterprise. Specific founding dates and operating statistics are published once verified."
              />
            </div>
          </div>
          <div className="lg:col-span-7">
            <Steps items={TIMELINE} />
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-28">
        <Container className="max-w-3xl">
          <SectionHeading
            title="Long-term positioning"
            intro={BRAND.positioning}
          />
          <p className="mt-8 text-lg text-slate">
            The greatest opportunity we see is integrating our divisions into a complementary commercial ecosystem —
            source internationally, import equipment, coordinate manufacturing, supply institutional clients and execute
            construction under one corporate umbrella — capturing value at multiple supply-chain stages. See{' '}
            <Link to="/insights" className="text-brand underline-offset-2 hover:underline">Insights</Link> for proposed
            strategic directions (not confirmed contracts).
          </p>
        </Container>
      </section>

      <ContactBand heading="Partner with us" label="Partner With Us" />
    </>
  );
}
