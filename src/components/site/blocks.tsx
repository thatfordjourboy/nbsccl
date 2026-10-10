import { useRef, type ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { motion, useReducedMotion, useScroll, useSpring } from 'motion/react';
import { Button } from '../ui/button';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { CONTACT, tel } from '../../services';

const EASE = [0.16, 1, 0.3, 1] as const;

export function Container({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-7xl px-5 sm:px-8 ${className}`}>{children}</div>;
}

/** Inner-page hero: title on plum, photo panel that opens from the right edge on load. */
export function PageHero({
  title,
  intro,
  image,
  imageAlt = '',
  crumb,
}: {
  title: string;
  intro: string;
  image?: string;
  imageAlt?: string;
  crumb?: { label: string; href: string };
}) {
  const still = useReducedMotion() ?? false;
  return (
    <section className="relative overflow-hidden bg-plum text-white">
      <div className={image ? 'grid lg:grid-cols-[1.15fr_1fr]' : ''}>
        <Container className={image ? 'lg:mr-0 lg:max-w-none lg:pl-[max(2rem,calc((100vw-80rem)/2+2rem))]' : ''}>
          <div className="py-16 sm:py-24 lg:py-32 max-w-2xl">
            {crumb && (
              <p className="mb-6 text-sm text-white/60">
                <Link to={crumb.href} className="hover:text-white underline-offset-4 hover:underline">{crumb.label}</Link>
              </p>
            )}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: EASE }}
              className="font-display text-[2.6rem] sm:text-6xl lg:text-7xl text-balance"
            >
              {title}
            </motion.h1>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.9, delay: 0.35, ease: EASE }}
              className="mt-8 h-[3px] w-16 origin-left bg-gold"
            />
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mt-8 max-w-xl text-lg text-white/75"
            >
              {intro}
            </motion.p>
          </div>
        </Container>
        {image && (
          <motion.div
            initial={still ? false : { clipPath: 'inset(0 0 0 100%)' }}
            animate={{ clipPath: 'inset(0 0 0 0%)' }}
            transition={{ duration: 1.3, delay: 0.15, ease: EASE }}
            className="relative h-64 sm:h-80 lg:h-auto"
          >
            <ImageWithFallback src={image} alt={imageAlt} className="absolute inset-0 h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-plum/40 to-transparent lg:from-plum/60" />
          </motion.div>
        )}
      </div>
    </section>
  );
}

export function SectionHeading({ title, intro, light = false }: { title: string; intro?: string; light?: boolean }) {
  return (
    <div className="max-w-2xl">
      <h2 className={`font-heading text-3xl sm:text-4xl lg:text-[2.75rem] text-balance ${light ? 'text-white' : 'text-ink'}`}>
        {title}
      </h2>
      {intro && <p className={`mt-5 text-lg ${light ? 'text-white/70' : 'text-slate'}`}>{intro}</p>}
    </div>
  );
}

/** A real sequence (process steps, timeline). A gold line fills as the reader scrolls through it. */
export function Steps({ items }: { items: { marker: string; title: string; description: string }[] }) {
  const ref = useRef<HTMLOListElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 75%', 'end 55%'] });
  const scaleY = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

  return (
    <ol ref={ref} className="relative mt-14 space-y-12 pl-12 sm:pl-16">
      <div className="absolute left-[11px] top-3 bottom-3 w-px bg-line" aria-hidden="true" />
      <motion.div style={{ scaleY }} className="absolute left-[11px] top-3 bottom-3 w-px origin-top bg-gold" aria-hidden="true" />
      {items.map((item) => (
        <li key={item.title} className="relative">
          <span
            className="absolute -left-12 sm:-left-16 top-1 h-[23px] w-[23px] rounded-full border-2 border-gold bg-paper"
            aria-hidden="true"
          />
          <p className="font-heading text-base text-slate tabular-nums">{item.marker}</p>
          <h3 className="mt-1 font-heading text-xl sm:text-2xl">{item.title}</h3>
          <p className="mt-2 max-w-xl text-slate">{item.description}</p>
        </li>
      ))}
    </ol>
  );
}

/** Closing band on every page: real contact details, not a generic prompt. */
export function ContactBand({
  heading = 'Tell us what you need',
  text = 'Send an enquiry and we will reply within 24 hours. Prefer to talk? Call us, or visit our Spintex Road office.',
  label = 'Send an enquiry',
  service,
}: {
  heading?: string;
  text?: string;
  label?: string;
  service?: string;
}) {
  return (
    <section className="bg-plum-deep text-white">
      <Container className="grid gap-12 py-20 sm:py-24 lg:grid-cols-[1.2fr_1fr] lg:items-end">
        <div>
          <h2 className="font-display text-4xl sm:text-5xl text-balance">{heading}</h2>
          <p className="mt-6 max-w-lg text-lg text-white/70">{text}</p>
          <Button asChild size="lg" variant="gold" className="mt-10">
            <Link to={service ? `/contact?service=${service}` : '/contact'}>{label}</Link>
          </Button>
        </div>
        <dl className="grid gap-8 sm:grid-cols-2 text-sm">
          <div>
            <dt className="text-white/50">Call</dt>
            {CONTACT.phones.map((p) => (
              <dd key={p} className="mt-1 text-base">
                <a href={tel(p)} className="hover:text-gold-soft">{p}</a>
              </dd>
            ))}
          </div>
          <div>
            <dt className="text-white/50">Email</dt>
            <dd className="mt-1 text-base">
              <a href={`mailto:${CONTACT.emails[0]}`} className="hover:text-gold-soft">{CONTACT.emails[0]}</a>
            </dd>
          </div>
          <div className="sm:col-span-2">
            <dt className="text-white/50">Visit</dt>
            <dd className="mt-1 text-base">{CONTACT.address.join(', ')}</dd>
          </div>
        </dl>
      </Container>
    </section>
  );
}
