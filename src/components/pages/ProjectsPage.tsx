import { Link } from 'react-router-dom';
import { Button } from '../ui/button';
import { Container, ContactBand, PageHero, SectionHeading } from '../site/blocks';
import { SERVICES, unsplash } from '../../services';
import { ImageWithFallback } from '../figma/ImageWithFallback';

export function ProjectsPage() {
  return (
    <>
      <PageHero
        title="Projects & Portfolio"
        intro="Selected experience across construction, trade and supply. Named case studies are published here once verified with the client."
        image={unsplash('1503387762-592deb58ef4e')}
        imageAlt="Architectural structure against the sky"
      />

      <section className="py-20 sm:py-28">
        <Container className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading
              title="Authentic portfolio only"
              intro="We do not publish invented project names, locations or awards. Until verified entries are ready, this page outlines the categories of work we pursue."
            />
          </div>
          <div className="lg:col-span-7">
            <div className="aspect-[16/9] overflow-hidden bg-brand">
              <ImageWithFallback
                src={unsplash('1541888946425-d81bb19240f5', 1400)}
                alt="Construction site overview"
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
            <p className="mt-8 text-lg text-slate">
              Flagship emphasis sits with Construction &amp; Infrastructure. Portfolio materials for other divisions —
              commodity programmes, import consignments, manufacturing runs and institutional supply contracts — will be
              added as documentation is confirmed.
            </p>
            <Button asChild size="lg" className="mt-8">
              <Link to="/contact?service=construction">Discuss a project</Link>
            </Button>
          </div>
        </Container>
      </section>

      <section className="bg-white py-20 sm:py-28">
        <Container>
          <SectionHeading
            title="Work categories"
            intro="Areas where we invite enquiries and partnership discussions."
          />
          <ul className="mt-14 divide-y divide-line border-y border-line">
            {SERVICES.map((s) => (
              <li key={s.href} className="grid gap-2 py-8 sm:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)_auto] sm:items-center sm:gap-10">
                <div>
                  <span className="font-heading text-sm text-gold tabular-nums" aria-hidden="true">{s.number}</span>
                  <h3 className="mt-1 font-heading text-xl sm:text-2xl">{s.name}</h3>
                </div>
                <p className="text-slate">{s.summary}</p>
                <Link to={s.href} className="font-heading text-brand hover:underline">
                  Explore Division
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <ContactBand
        heading="Have a project brief?"
        text="Share drawings, a tender reference or a short description. We reply within 24 hours."
        label="Partner With Us"
      />
    </>
  );
}
