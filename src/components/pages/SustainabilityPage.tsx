import { Container, ContactBand, PageHero, SectionHeading } from '../site/blocks';
import { unsplash } from '../../services';

const PILLARS = [
  {
    title: 'Responsible execution',
    text: 'Professional standards on sites, in supply chains and in commercial documentation — work that can be inspected and explained.',
  },
  {
    title: 'Accountability',
    text: 'Clear ownership of commitments to clients, partners and communities, with progress reported in writing.',
  },
  {
    title: 'Integrity in trade',
    text: 'Honest pricing, documented terms and no promotional claims that outrun verified facts.',
  },
  {
    title: 'Lasting value',
    text: 'Decisions that still look right in twenty years — for infrastructure, commerce and the people who depend on both.',
  },
];

export function SustainabilityPage() {
  return (
    <>
      <PageHero
        title="Sustainability"
        intro="Responsible business practices are part of how we deliver — not a separate slogan."
        image={unsplash('1466611653911-95081537e5b7')}
        imageAlt="Green landscape meeting built infrastructure"
      />

      <section className="py-20 sm:py-28">
        <Container className="max-w-3xl">
          <SectionHeading
            title="Built into how we work"
            intro="Our approach is founded on integrity, accountability, operational excellence and responsible business practices. Formal sustainability metrics and certifications will be published when independently verified."
          />
        </Container>
      </section>

      <section className="bg-white py-20 sm:py-28">
        <Container>
          <SectionHeading title="Pillars" />
          <dl className="mt-14 grid gap-10 sm:grid-cols-2">
            {PILLARS.map((p) => (
              <div key={p.title} className="border-l-[3px] border-brand pl-5">
                <dt className="font-heading text-xl sm:text-2xl">{p.title}</dt>
                <dd className="mt-3 text-slate">{p.text}</dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      <ContactBand heading="Talk to us about responsible delivery" label="Partner With Us" />
    </>
  );
}
