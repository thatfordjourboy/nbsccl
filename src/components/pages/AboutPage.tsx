import { ImageWithFallback } from '../figma/ImageWithFallback';
import { Container, ContactBand, PageHero, SectionHeading, Steps } from '../site/blocks';
import { FIGURES, unsplash } from '../../services';

const VALUES = [
  { title: 'Integrity', description: 'Clear terms, honest prices and everything in writing. You always know where you stand.' },
  { title: 'Global reach', description: 'Rooted in Accra and connected to markets abroad, so you get local knowledge and international reach.' },
  { title: 'Partnership', description: 'We would rather keep a client, supplier or community partner for ten years than win one deal.' },
  { title: 'Excellence', description: 'Work is checked before we call it finished, whether it is a building, a shipment or a sale.' },
  { title: 'Innovation', description: 'We adopt new tools and methods when they make the work better, not for show.' },
  { title: 'Sustainability', description: 'We make decisions that will still look right in twenty years, for the planet and the people who come after us.' },
];

const TIMELINE = [
  { marker: '2000', title: 'Founded', description: 'NB Sebastian starts out as a small construction company with plans to grow into much more.' },
  { marker: '2005', title: 'Into commodities', description: 'Commodities trading begins, and our first international office opens.' },
  { marker: '2010', title: 'Manufacturing', description: 'Our manufacturing division opens.' },
  { marker: '2015', title: 'Gold', description: 'We enter the precious metals market with gold purchasing.' },
  { marker: '2020', title: 'A global network', description: 'Operations reach more than 50 countries, with over 1,000 projects completed.' },
  { marker: '2025', title: 'Looking ahead', description: 'We are investing in sustainable practice and digital tools for the next chapter.' },
];

export function AboutPage() {
  return (
    <>
      <PageHero
        title="About NB Sebastian"
        intro="For over two decades we have built, traded and shipped from our base in Accra."
        image={unsplash('1497366216548-37526070297c')}
        imageAlt="An open-plan office"
      />

      <section className="py-20 sm:py-28">
        <Container className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading title="Our story" />
            <dl className="mt-10 grid grid-cols-3 gap-6 border-t border-line pt-8 lg:grid-cols-1 lg:gap-8">
              {FIGURES.map((f) => (
                <div key={f.label}>
                  <dt className="sr-only">{f.label}</dt>
                  <dd className="font-display text-3xl text-plum sm:text-5xl">{f.value}</dd>
                  <dd className="mt-2 text-sm text-slate">{f.label}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="space-y-6 text-lg text-slate lg:col-span-7 [&>p:first-child]:text-xl [&>p:first-child]:text-ink">
            <p>
              NB Sebastian started in 2000 as a small construction company with a big ambition: one business that could connect
              industries and markets.
            </p>
            <p>
              Commodities trading came next, then import and export, gold purchasing, manufacturing and general merchandise. Each new
              line was built on the standards that made the construction business work: quality, fresh thinking and partnerships
              that last.
            </p>
            <p>
              Today we operate in more than 50 countries and have completed over 1,000 projects. The standard has not changed.
            </p>
            <div className="!mt-12 aspect-[16/9] overflow-hidden bg-plum">
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

      <section className="bg-plum py-20 text-white sm:py-28">
        <Container>
          <SectionHeading title="Our values" intro="What clients, suppliers and partners can expect from us." light />
          <dl className="mt-14 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {VALUES.map((v) => (
              <div key={v.title} className="border-t border-white/20 pt-6">
                <dt className="font-heading text-2xl text-gold">{v.title}</dt>
                <dd className="mt-3 text-white/75">{v.description}</dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      <section className="py-20 sm:py-28">
        <Container className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-28">
              <SectionHeading title="Our journey" intro="Twenty-five years, six lines of business." />
            </div>
          </div>
          <div className="lg:col-span-7">
            <Steps items={TIMELINE} />
          </div>
        </Container>
      </section>

      <ContactBand />
    </>
  );
}
