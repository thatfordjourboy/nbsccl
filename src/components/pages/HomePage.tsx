import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';
import { Button } from '../ui/button';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { HeroMap } from '../site/HeroMap';
import { Container, ContactBand, SectionHeading, Steps } from '../site/blocks';
import { Ticker } from '../site/Ticker';
import { FIGURES, SERVICES, unsplash } from '../../services';

const EASE = [0.16, 1, 0.3, 1] as const;
const HEADLINE = ['Trading from', 'the centre', 'of the map.'];

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
  { title: 'Global reach', description: 'Rooted in Accra, connected to markets abroad.' },
  { title: 'Innovation', description: 'New tools when they make the work better, not for show.' },
  { title: 'Sustainability', description: 'Decisions that will still look right in twenty years.' },
];

export function HomePage() {
  return (
    <>
      {/* Hero: the Equator and Prime Meridian meet just south of Accra */}
      <section className="relative isolate flex min-h-[calc(100svh-72px)] flex-col overflow-hidden bg-brand text-white">
        <HeroMap />
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-b from-brand via-brand/75 to-brand/10 lg:bg-gradient-to-r lg:from-brand lg:from-35% lg:via-brand/85 lg:via-55% lg:to-transparent lg:to-80%"
          aria-hidden="true"
        />
        <Container className="relative flex flex-1 flex-col justify-center py-20">
          <h1 className="font-display text-[clamp(2.9rem,7.2vw,6.4rem)]">
            {HEADLINE.map((line, i) => (
              <span key={line} className="block overflow-hidden pb-[0.06em]">
                <motion.span
                  className="block"
                  initial={{ y: '105%' }}
                  animate={{ y: 0 }}
                  transition={{ duration: 1.1, delay: 0.25 + i * 0.12, ease: EASE }}
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
            transition={{ duration: 1, delay: 0.9 }}
          >
            <p className="mt-8 max-w-lg text-lg text-white/80 sm:text-xl">
              Buildings, commodities, gold and freight. One Accra company, from first enquiry to final delivery.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button asChild size="lg" variant="gold">
                <Link to="/contact">Start an enquiry</Link>
              </Button>
              <Button asChild size="lg" variant="outline-light">
                <a href="#services">Explore our services</a>
              </Button>
            </div>
          </motion.div>
        </Container>
        <Container className="relative pb-8">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2.2 }}
            className="flex max-w-md gap-3 border-t border-white/20 pt-5 text-sm text-white/65"
          >
            <span className="mt-[0.45em] h-1.5 w-1.5 shrink-0 rounded-full bg-gold" aria-hidden="true" />
            The Prime Meridian runs through Tema, minutes from our Spintex Road office. About 600 km south, it crosses the
            Equator.
          </motion.p>
        </Container>
      </section>

      <Ticker />

      {/* Services index */}
      <section id="services" className="scroll-mt-[72px] py-20 sm:py-28">
        <Container>
          <SectionHeading
            title="Six trades, one office in Accra"
            intro="From building sites to bullion. Pick a service to see what is included and how to get started."
          />
          <ul className="mt-14 border-b border-line">
            {SERVICES.map((s) => (
              <li key={s.href} className="border-t border-line">
                <Link
                  to={s.href}
                  className="group relative grid items-center gap-x-10 gap-y-2 py-7 sm:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)_auto] sm:py-9"
                >
                  <span className="font-display text-[1.9rem] leading-none transition-colors duration-300 group-hover:text-brand sm:text-5xl">
                    {s.name}
                  </span>
                  <span className="max-w-sm text-slate">{s.summary}</span>
                  <span className="hidden items-center gap-6 sm:flex">
                    <span className="relative h-20 w-32 overflow-hidden transition-[clip-path] duration-500 ease-out [clip-path:inset(0_0_0_100%)] group-hover:[clip-path:inset(0)] group-focus-visible:[clip-path:inset(0)]">
                      <ImageWithFallback src={s.image} alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
                    </span>
                    <span className="flex h-12 w-12 items-center justify-center rounded-full border border-ink/20 transition-colors duration-300 group-hover:border-brand group-hover:bg-brand group-hover:text-white">
                      <ArrowUpRight className="h-5 w-5" />
                    </span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* Gold spotlight */}
      <section className="bg-brand-deep text-white">
        <div className="grid lg:grid-cols-2">
          <div className="relative min-h-80 lg:min-h-[36rem]">
            <ImageWithFallback
              src={unsplash('1610375461246-83df859d849d', 1400)}
              alt="Gold bars"
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
          <div className="px-5 py-20 sm:px-12 lg:px-16 lg:py-28 xl:pr-[max(4rem,calc((100vw-80rem)/2+2rem))]">
            <p className="text-gold-soft">Ghana is Africa&apos;s largest gold producer.</p>
            <h2 className="mt-4 font-display text-4xl sm:text-5xl text-balance">Know exactly what your gold is worth</h2>
            <dl className="mt-12 space-y-8">
              {[
                ['Market-linked rates', 'You get the current price, and see how it was calculated, before you agree to anything.'],
                ['Tested purity', 'Every lot is weighed, and its purity tested and certified.'],
                ['A full paper trail', 'Every transaction is documented, from the scale to the payment.'],
              ].map(([title, text]) => (
                <div key={title} className="border-t border-white/15 pt-5">
                  <dt className="font-heading text-xl text-gold">{title}</dt>
                  <dd className="mt-2 text-white/70">{text}</dd>
                </div>
              ))}
            </dl>
            <Button asChild size="lg" variant="gold" className="mt-12">
              <Link to="/gold">How selling gold works</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* How working with us goes */}
      <section className="py-20 sm:py-28">
        <Container className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-28">
              <SectionHeading
                title="Four steps from enquiry to delivery"
                intro="The same process whether you are buying cocoa, shipping freight or breaking ground."
              />
            </div>
          </div>
          <div className="lg:col-span-7">
            <Steps items={PROCESS.map((p, i) => ({ ...p, marker: `Step ${i + 1}` }))} />
          </div>
        </Container>
      </section>

      {/* Who we are */}
      <section className="bg-white py-20 sm:py-28">
        <Container className="grid items-center gap-14 lg:grid-cols-2">
          <div>
            <SectionHeading
              title="Built in Ghana, one trade at a time"
              intro="We began as a construction company in Accra and grew into commodities, freight, gold, manufacturing and merchandise. How we work has not changed: clear terms, reliable supply and jobs finished properly."
            />
            <dl className="mt-10 grid grid-cols-3 gap-6 border-t border-line pt-8">
              {FIGURES.map((f) => (
                <div key={f.label} className="flex flex-col-reverse">
                  <dt className="mt-2 text-sm text-slate">{f.label}</dt>
                  <dd className="font-display text-3xl text-brand sm:text-4xl">{f.value}</dd>
                </div>
              ))}
            </dl>
            <Button asChild variant="outline" size="lg" className="mt-10">
              <Link to="/about">Read our story</Link>
            </Button>
          </div>
          <div className="aspect-[4/3] overflow-hidden bg-brand">
            <ImageWithFallback
              src={unsplash('1497366216548-37526070297c', 1200)}
              alt="An open-plan office"
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
        </Container>
      </section>

      {/* Values */}
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

      <ContactBand />
    </>
  );
}
