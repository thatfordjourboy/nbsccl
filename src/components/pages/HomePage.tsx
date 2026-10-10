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
  { title: 'Tell us what you need', description: 'Call, email or send an enquiry with the goods, quantities or project you have in mind, and your timeline.' },
  { title: 'We plan and quote', description: 'We work out sourcing, pricing and logistics, then send you a clear quote to review.' },
  { title: 'We handle the paperwork', description: 'Contracts, customs documentation and regulatory checks are prepared and filed for you.' },
  { title: 'Delivery and follow-up', description: 'We coordinate transport and keep you updated until the goods arrive or the work is handed over.' },
];

const VALUES = [
  { title: 'Integrity', description: 'Clear terms, honest pricing and full documentation.' },
  { title: 'Partnership', description: 'Long relationships with clients, suppliers and communities.' },
  { title: 'Excellence', description: 'Work checked properly and delivered to standard.' },
  { title: 'Global reach', description: 'Local knowledge in Accra, partners across continents.' },
  { title: 'Innovation', description: 'Better methods and tools, adopted when they help clients.' },
  { title: 'Sustainability', description: 'Practices that hold up for the next generation.' },
];

export function HomePage() {
  return (
    <>
      {/* Hero: the Equator and Prime Meridian meet just south of Accra */}
      <section className="relative isolate flex min-h-[calc(100svh-72px)] flex-col overflow-hidden bg-plum text-white">
        <HeroMap />
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-b from-plum via-plum/75 to-plum/10 lg:bg-gradient-to-r lg:from-plum lg:via-plum/60 lg:to-transparent"
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
              </span>
            ))}
          </h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.9 }}
          >
            <p className="mt-8 max-w-lg text-lg text-white/80 sm:text-xl">
              NB Sebastian Commodities Company is an Accra business working in construction, commodities trading, import and
              export, gold purchasing, manufacturing and general merchandise.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button asChild size="lg" variant="gold">
                <Link to="/contact">Talk to our team</Link>
              </Button>
              <Button asChild size="lg" variant="outline-light">
                <a href="#services">See what we do</a>
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
            intro="From building sites to bullion. Choose a line of business to see what we offer and how to start."
          />
          <ul className="mt-14 border-b border-line">
            {SERVICES.map((s) => (
              <li key={s.href} className="border-t border-line">
                <Link
                  to={s.href}
                  className="group relative grid items-center gap-x-10 gap-y-2 py-7 sm:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)_auto] sm:py-9"
                >
                  <span className="font-display text-[1.9rem] leading-none transition-colors duration-300 group-hover:text-plum sm:text-5xl">
                    {s.name}
                  </span>
                  <span className="max-w-sm text-slate">{s.summary}</span>
                  <span className="hidden items-center gap-6 sm:flex">
                    <span className="relative h-20 w-32 overflow-hidden transition-[clip-path] duration-500 ease-out [clip-path:inset(0_0_0_100%)] group-hover:[clip-path:inset(0)] group-focus-visible:[clip-path:inset(0)]">
                      <ImageWithFallback src={s.image} alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
                    </span>
                    <span className="flex h-12 w-12 items-center justify-center rounded-full border border-ink/20 transition-colors duration-300 group-hover:border-plum group-hover:bg-plum group-hover:text-white">
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
      <section className="bg-plum-deep text-white">
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
            <h2 className="mt-4 font-display text-4xl sm:text-5xl text-balance">Gold purchasing, done in the open</h2>
            <dl className="mt-12 space-y-8">
              {[
                ['Transparent rates', 'Prices are set against the market and explained before you agree to anything.'],
                ['Tested purity', 'Every lot is assessed and certified using established testing methods.'],
                ['Full documentation', 'Each transaction is recorded and documented from weighing to payment.'],
              ].map(([title, text]) => (
                <div key={title} className="border-t border-white/15 pt-5">
                  <dt className="font-heading text-xl text-gold">{title}</dt>
                  <dd className="mt-2 text-white/70">{text}</dd>
                </div>
              ))}
            </dl>
            <Button asChild size="lg" variant="gold" className="mt-12">
              <Link to="/gold">About gold purchasing</Link>
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
                title="How working with us goes"
                intro="The same four steps whether you are buying cocoa, shipping freight or starting a building project."
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
              title="A diversified business, built in Ghana"
              intro="We started in construction and grew into commodities, trade, gold, manufacturing and merchandise. The aim has stayed the same: dependable supply and work done properly, for clients at home and abroad."
            />
            <dl className="mt-10 grid grid-cols-3 gap-6 border-t border-line pt-8">
              {FIGURES.map((f) => (
                <div key={f.label}>
                  <dt className="sr-only">{f.label}</dt>
                  <dd className="font-display text-3xl text-plum sm:text-4xl">{f.value}</dd>
                  <dd className="mt-2 text-sm text-slate">{f.label}</dd>
                </div>
              ))}
            </dl>
            <Button asChild variant="outline" size="lg" className="mt-10">
              <Link to="/about">Read our story</Link>
            </Button>
          </div>
          <div className="aspect-[4/3] overflow-hidden bg-plum">
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
              <div key={v.title} className="border-l-[3px] border-plum pl-5">
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
