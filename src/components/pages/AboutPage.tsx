import { ImageWithFallback } from '../figma/ImageWithFallback';
import { Container, ContactBand, PageHero, SectionHeading, Steps } from '../site/blocks';
import { FIGURES, unsplash } from '../../services';

const VALUES = [
  { title: 'Integrity', description: 'We do business to high ethical standards, with transparency in everything we do.' },
  { title: 'Global reach', description: 'Our international presence lets us serve clients across continents with local expertise.' },
  { title: 'Partnership', description: 'We build lasting relationships with clients, suppliers and communities, based on mutual respect.' },
  { title: 'Excellence', description: 'We aim for excellence on every project and deliver quality that meets the brief.' },
  { title: 'Innovation', description: 'We adopt new technology and better methods to stay ahead of our industries.' },
  { title: 'Sustainability', description: 'We are committed to practices that benefit the planet and future generations.' },
];

const TIMELINE = [
  { marker: '2000', title: 'Foundation', description: 'NB Sebastian Commodities Company was established, with a vision of a diversified business.' },
  { marker: '2005', title: 'Expansion', description: 'We expanded into commodities trading and opened our first international office.' },
  { marker: '2010', title: 'Manufacturing', description: 'Our manufacturing division launched.' },
  { marker: '2015', title: 'Gold division', description: 'We entered the precious metals market with gold purchasing.' },
  { marker: '2020', title: 'Global network', description: 'Our presence reached more than 50 countries and over 1,000 completed projects.' },
  { marker: '2025', title: 'Looking ahead', description: 'We continue to invest in sustainable practice and digital tools.' },
];

export function AboutPage() {
  return (
    <>
      <PageHero
        title="About NB Sebastian"
        intro="For over two decades we have worked across industries and borders from our base in Accra."
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
              NB Sebastian Commodities Company began with a simple but ambitious idea: a diversified business that connects
              industries and markets. Founded in 2000, we started as a small construction company with big plans and a
              commitment to doing the work well.
            </p>
            <p>
              Over the years we grew into commodities trading, import and export, gold purchasing, manufacturing and general
              merchandise. That growth has come from a focus on quality, new ideas and partnerships that last.
            </p>
            <p>
              Today we operate across more than 50 countries with over 1,000 completed projects, and we keep raising the
              standard for the work we do.
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
          <SectionHeading title="Our values" intro="The principles behind every contract, shipment and build." light />
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
              <SectionHeading title="Our journey" intro="The milestones that shaped the business." />
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
