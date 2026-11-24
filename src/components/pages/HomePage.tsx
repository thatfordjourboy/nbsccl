import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';
import { Button } from '../ui/button';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { Container, ContactBand, SectionHeading, Steps } from '../site/blocks';
import { Ticker } from '../site/Ticker';
import { BRAND, FIGURES, SERVICES, unsplash } from '../../services';

const EASE = [0.16, 1, 0.3, 1] as const;
const HEADLINE = ['Built on Capability.', 'Defined by Delivery.'];

const PROCESS = [
  { title: 'Tell us what you need', description: 'Call, email or send an enquiry: the goods, quantities or project, and when you need it.' },
  { title: 'Get a clear quote', description: 'We work out sourcing, pricing and logistics, and send you a written quote.' },
  { title: 'We handle the paperwork', description: 'Contracts, permits and customs documents, prepared and filed for you.' },
  { title: 'Delivery, then follow-up', description: 'We arrange transport and keep you updated until the goods arrive or the keys are handed over.' },
];

const VALUES = [
  { title: 'Integrity', description: 'Clear terms, honest prices, everything in writing.' },
  { title: 'Partnership', description: 'We would rather keep a client for ten years than win one deal.' },
  { title: 'Excellence', description: 'Work is checked before we call it finished.' },
  { title: 'Accountability', description: 'Commitments made in writing, progress reported, outcomes owned.' },
  { title: 'Integration', description: 'Complementary divisions that can work together under one corporate umbrella.' },
  { title: 'Sustainability', description: 'Decisions that will still look right in twenty years.' },
];

const featured = SERVICES.find((s) => s.featured)!;
const gridServices = SERVICES.filter((s) => !s.featured);

export function HomePage() {
  return (
    <>
      <section className="relative isolate flex min-h-[calc(100svh-72px)] flex-col overflow-hidden bg-brand text-white">
        <ImageWithFallback
          src={unsplash('1503387762-592deb58ef4e', 2000)}
          alt=""
          fetchpriority="high"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-b from-brand/95 via-brand/80 to-brand/55 lg:bg-gradient-to-r lg:from-brand lg:from-40% lg:via-brand/85 lg:via-65% lg:to-brand/35"
          aria-hidden="true"
        />
        <Container className="relative flex flex-1 flex-col justify-center py-20">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: EASE }}
            className="max-w-3xl font-heading text-sm tracking-[0.08em] text-gold-soft sm:text-base"
          >
            NB SEBASTIAN COMMODITIES COMPANY LIMITED
          </motion.p>
          <h1 className="mt-5 font-display text-[clamp(2.4rem,6.2vw,5.4rem)] leading-[1.05]">
            {HEADLINE.map((line, i) => (
              <span key={line} className="block overflow-hidden pb-[0.06em]">
                <motion.span
                  className="block"
                  initial={{ y: '105%' }}
                  animate={{ y: 0 }}
                  transition={{ duration: 1.1, delay: 0.2 + i * 0.14, ease: EASE }}
                >
                  {line}
                </motion.span>
                {i < HEADLINE.length - 1 && ' '}
              </span>
            ))}
          </h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.85 }}
          >
            <p className="mt-8 max-w-xl text-lg text-white/80 sm:text-xl">
              A diversified Ghanaian enterprise connecting markets, developing infrastructure and delivering integrated
              commercial solutions across complementary industries.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button asChild size="lg" variant="gold">
                <a href="#businesses">Explore Our Businesses</a>
              </Button>
              <Button asChild size="lg" variant="outline-light">
                <Link to="/projects">View Our Projects</Link>
              </Button>
            </div>
          </motion.div>
        </Container>
        <Container className="relative pb-8">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.4 }}
            className="flex max-w-lg gap-3 border-t border-white/20 pt-5 text-sm text-white/65"
          >
            <span className="mt-[0.45em] h-1.5 w-1.5 shrink-0 rounded-full bg-gold" aria-hidden="true" />
            {BRAND.secondary}
          </motion.p>
        </Container>
      </section>

      <Ticker />

      <section id="businesses" className="scroll-mt-[72px] py-20 sm:py-28">
        <Container>
          <p className="font-heading text-sm tracking-[0.12em] text-slate">OUR BUSINESSES</p>
          <SectionHeading
            title="Diversified Capabilities. Unified Standards."
            intro="Five complementary business divisions united by a commitment to integrity, professional execution and sustainable commercial value."
          />

          {/* Featured: Construction & Infrastructure */}
          <Link
            to={featured.href}
            className="group relative mt-14 block overflow-hidden bg-brand text-white"
          >
            <div className="grid lg:grid-cols-2">
              <div className="relative min-h-72 lg:min-h-[28rem]">
                <ImageWithFallback
                  src={unsplash('1541888946425-d81bb19240f5', 1400)}
                  alt=""
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-brand/25" aria-hidden="true" />
              </div>
              <div className="flex flex-col justify-center px-6 py-12 sm:px-10 lg:px-14 lg:py-16">
                <span className="font-heading text-sm tracking-[0.14em] text-gold-soft" aria-hidden="true">
                  {featured.number} — Flagship
                </span>
                <h3 className="mt-3 font-display text-3xl sm:text-4xl lg:text-[2.75rem]">{featured.name}</h3>
                <p className="mt-5 max-w-md text-lg text-white/75">{featured.summary}</p>
                <p className="mt-4 max-w-md text-sm text-white/55">
                  Documented infrastructure and construction capability for public and private sector clients —
                  residential, commercial, institutional and civil works.
                </p>
                <span className="mt-8 inline-flex items-center gap-2 font-heading text-gold transition-colors group-hover:text-gold-soft">
                  Explore Division
                  <ArrowUpRight className="h-5 w-5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </span>
              </div>
            </div>
          </Link>

          {/* Remaining four: 2×2 on desktop, 2-col tablet, 1-col mobile */}
          <ul className="mt-6 grid gap-6 sm:grid-cols-2">
            {gridServices.map((s) => (
              <li key={s.href}>
                <Link
                  to={s.href}
                  className="group flex h-full flex-col overflow-hidden border border-line bg-white transition-colors hover:border-brand/30"
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-brand">
                    <ImageWithFallback
                      src={s.image}
                      alt=""
                      loading="lazy"
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-6 sm:p-8">
                    <span className="font-heading text-sm tracking-[0.12em] text-gold" aria-hidden="true">
                      {s.number}
                    </span>
                    <h3 className="mt-2 font-heading text-xl sm:text-2xl">{s.name}</h3>
                    <p className="mt-3 flex-1 text-slate">{s.summary}</p>
                    <span className="mt-6 inline-flex items-center gap-2 font-heading text-brand">
                      Explore Division
                      <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="py-20 sm:py-28">
        <Container className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-28">
              <SectionHeading
                title="Four steps from enquiry to delivery"
                intro="The same process whether you are building infrastructure, sourcing commodities or fulfilling a supply contract."
              />
            </div>
          </div>
          <div className="lg:col-span-7">
            <Steps items={PROCESS.map((p, i) => ({ ...p, marker: `Step ${i + 1}` }))} />
          </div>
        </Container>
      </section>

      <section className="bg-white py-20 sm:py-28">
        <Container className="grid items-center gap-14 lg:grid-cols-2">
          <div>
            <SectionHeading
              title="Integrated capabilities. One commitment."
              intro="We connect markets, develop infrastructure and pursue lasting value through professional execution and responsible business practices — across complementary industries under one corporate umbrella."
            />
            <dl className="mt-10 grid grid-cols-3 gap-6 border-t border-line pt-8">
              {FIGURES.map((f) => (
                <div key={f.label} className="flex flex-col-reverse">
                  <dt className="mt-2 text-sm text-slate">{f.label}</dt>
                  <dd className="font-display text-3xl text-brand sm:text-4xl">{f.value}</dd>
                </div>
              ))}
            </dl>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button asChild variant="outline" size="lg">
                <Link to="/about">Read our story</Link>
              </Button>
              <Button asChild variant="ghost" size="lg">
                <Link to="/insights">Strategic insights</Link>
              </Button>
            </div>
          </div>
          <div className="aspect-[4/3] overflow-hidden bg-brand">
            <ImageWithFallback
              src={unsplash('1486406146926-c627a92ad1ab', 1200)}
              alt="Modern infrastructure against the sky"
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-28">
        <Container>
          <SectionHeading title="What we stand for" />
          <dl className="mt-12 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {VALUES.map((v) => (
              <div key={v.title} className="border-l-[3px] border-brand pl-5">
                <dt className="font-heading text-xl">{v.title}</dt>
                <dd className="mt-2 text-slate">{v.description}</dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      <ContactBand
        heading="Partner with us"
        text="Tell us about a project, tender, shipment or supply requirement. We reply within 24 hours."
        label="Partner With Us"
      />
    </>
  );
}
