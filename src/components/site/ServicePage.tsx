import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { SERVICES } from '../../services';
import { Container, ContactBand, PageHero, SectionHeading, Steps } from './blocks';

type Item = { title: string; description: string };

export type ServicePageProps = {
  slug: string;
  title: string;
  intro: string;
  image: string;
  imageAlt: string;
  offerings: { heading: string; intro?: string; items: Item[] };
  groups?: { heading: string; intro?: string; items: (Item & { list: string[] })[] };
  steps?: { heading: string; intro?: string; items: Item[] };
  showcase?: { heading: string; intro?: string; items: (Item & { image: string; meta?: string })[] };
  assurances: { heading: string; items: Item[] };
  cta: { heading: string; text: string; label: string };
};

export function ServicePage(p: ServicePageProps) {
  return (
    <>
      <PageHero title={p.title} intro={p.intro} image={p.image} imageAlt={p.imageAlt} crumb={{ label: 'Services', href: '/#services' }} />

      {/* Offerings: sticky heading on the left, list on the right */}
      <section className="py-20 sm:py-28">
        <Container className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-28">
              <SectionHeading title={p.offerings.heading} intro={p.offerings.intro} />
            </div>
          </div>
          <ul className="lg:col-span-8 border-b border-line">
            {p.offerings.items.map((item) => (
              <li key={item.title} className="grid gap-2 border-t border-line py-8 sm:grid-cols-[1fr_1.5fr] sm:gap-10">
                <h3 className="font-heading text-xl sm:text-2xl">{item.title}</h3>
                <p className="text-slate">{item.description}</p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {p.groups && (
        <section className="bg-white py-20 sm:py-28">
          <Container>
            <SectionHeading title={p.groups.heading} intro={p.groups.intro} />
            <div className="mt-14 grid gap-x-10 gap-y-14 md:grid-cols-3">
              {p.groups.items.map((g) => (
                <div key={g.title} className="border-t-[3px] border-brand pt-6">
                  <h3 className="font-heading text-2xl">{g.title}</h3>
                  <p className="mt-3 text-slate">{g.description}</p>
                  <ul className="mt-6 divide-y divide-line border-y border-line">
                    {g.list.map((entry) => (
                      <li key={entry} className="py-3">{entry}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </Container>
        </section>
      )}

      {p.showcase && (
        <section className="bg-white py-20 sm:py-28">
          <Container>
            <SectionHeading title={p.showcase.heading} intro={p.showcase.intro} />
            <div className="mt-14 grid gap-10 md:grid-cols-3">
              {p.showcase.items.map((s) => (
                <figure key={s.title} className="group">
                  <div className="aspect-[4/5] overflow-hidden bg-brand">
                    <ImageWithFallback
                      src={s.image}
                      alt=""
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                    />
                  </div>
                  <figcaption className="mt-5">
                    {s.meta && <p className="text-sm text-slate">{s.meta}</p>}
                    <h3 className="mt-1 font-heading text-xl">{s.title}</h3>
                    <p className="mt-2 text-slate">{s.description}</p>
                  </figcaption>
                </figure>
              ))}
            </div>
          </Container>
        </section>
      )}

      {p.steps && (
        <section className="py-20 sm:py-28">
          <Container className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <SectionHeading title={p.steps.heading} intro={p.steps.intro} />
            </div>
            <div className="lg:col-span-7">
              <Steps items={p.steps.items.map((s, i) => ({ ...s, marker: `Step ${i + 1}` }))} />
            </div>
          </Container>
        </section>
      )}

      <section className="bg-brand py-20 sm:py-24 text-white">
        <Container>
          <SectionHeading title={p.assurances.heading} light />
          <div className={`mt-12 grid gap-10 sm:grid-cols-2 ${p.assurances.items.length > 2 ? 'lg:grid-cols-3' : ''}`}>
            {p.assurances.items.map((a) => (
              <div key={a.title} className="border-t border-white/20 pt-6">
                <h3 className="font-heading text-xl text-gold-soft">{a.title}</h3>
                <p className="mt-3 text-white/70">{a.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Other services */}
      <section className="py-20 sm:py-24">
        <Container>
          <SectionHeading title="Other services" />
          <ul className="mt-10 grid gap-px overflow-hidden border border-line bg-line sm:grid-cols-2 lg:grid-cols-5">
            {SERVICES.filter((s) => s.slug !== p.slug).map((s) => (
              <li key={s.slug} className="bg-paper">
                <Link to={s.href} className="group flex h-full flex-col justify-between gap-8 p-6 transition-colors duration-300 hover:bg-brand hover:text-white">
                  <span className="font-heading text-xl">{s.name}</span>
                  <span className="flex items-end justify-between gap-4 text-sm text-slate group-hover:text-white/75">
                    {s.summary}
                    <ArrowUpRight className="h-5 w-5 shrink-0 text-brand transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-gold" />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <ContactBand heading={p.cta.heading} text={p.cta.text} label={p.cta.label} service={p.slug} />
    </>
  );
}
