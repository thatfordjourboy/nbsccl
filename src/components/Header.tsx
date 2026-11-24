import { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { ChevronDown, Menu, X } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { Logo } from './site/Logo';
import { SERVICES } from '../services';

const linkClass = ({ isActive }: { isActive: boolean }) =>
  `relative py-2 transition-colors hover:text-white ${isActive ? 'text-white after:absolute after:inset-x-0 after:-bottom-0.5 after:h-0.5 after:bg-gold' : 'text-white/75'}`;

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [businessesOpen, setBusinessesOpen] = useState(false);
  const { pathname } = useLocation();
  const onBusiness = SERVICES.some((s) => s.href === pathname);

  useEffect(() => {
    setMobileOpen(false);
    setBusinessesOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 bg-brand text-white">
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between gap-4 px-5 sm:px-8">
        <Logo />

        <nav aria-label="Main" className="hidden items-center gap-6 text-[0.9rem] xl:gap-8 xl:text-[0.95rem] lg:flex">
          <NavLink to="/" end className={linkClass}>Home</NavLink>
          <NavLink to="/about" className={linkClass}>About Us</NavLink>
          <div
            className="relative"
            onMouseEnter={() => setBusinessesOpen(true)}
            onMouseLeave={() => setBusinessesOpen(false)}
            onBlur={(e) => {
              if (!e.currentTarget.contains(e.relatedTarget)) setBusinessesOpen(false);
            }}
            onKeyDown={(e) => {
              if (e.key === 'Escape') setBusinessesOpen(false);
            }}
          >
            <button
              type="button"
              aria-expanded={businessesOpen}
              aria-controls="businesses-menu"
              onClick={() => setBusinessesOpen((open) => !open)}
              className={`flex items-center gap-1.5 py-2 transition-colors hover:text-white ${onBusiness ? 'text-white' : 'text-white/75'}`}
            >
              Our Businesses
              <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${businessesOpen ? 'rotate-180' : ''}`} />
            </button>
            <AnimatePresence>
              {businessesOpen && (
                <motion.div
                  id="businesses-menu"
                  initial={{ opacity: 0, y: -6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.18 }}
                  className="absolute left-1/2 top-full w-[36rem] -translate-x-1/2 pt-4"
                >
                  <ul className="overflow-hidden rounded-sm bg-line shadow-2xl shadow-brand-deep/30">
                    {SERVICES.map((s) => (
                      <li key={s.href} className="border-b border-line last:border-0">
                        <NavLink
                          to={s.href}
                          className={({ isActive }) =>
                            `flex gap-4 bg-white p-4 text-ink transition-colors hover:bg-paper ${isActive ? 'bg-paper' : ''}`
                          }
                        >
                          <span className="font-heading text-sm text-gold tabular-nums" aria-hidden="true">{s.number}</span>
                          <span>
                            <span className="font-heading text-base">{s.name}</span>
                            <span className="mt-1 block text-sm leading-snug text-slate">{s.summary}</span>
                          </span>
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <NavLink to="/projects" className={linkClass}>Projects &amp; Portfolio</NavLink>
          <NavLink to="/sustainability" className={linkClass}>Sustainability</NavLink>
          <NavLink to="/insights" className={linkClass}>Insights</NavLink>
          <NavLink to="/contact" className="rounded-sm bg-gold px-5 py-2.5 font-semibold text-brand-deep transition-colors hover:bg-gold-soft">
            Partner With Us
          </NavLink>
        </nav>

        <button
          type="button"
          className="-mr-2 p-2 lg:hidden"
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
          onClick={() => setMobileOpen((open) => !open)}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.nav
            id="mobile-menu"
            aria-label="Main"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-t border-white/15 lg:hidden"
          >
            <div className="max-h-[calc(100svh-72px)] overflow-y-auto px-5 pb-8 pt-4 sm:px-8">
              <ul className="font-heading text-2xl">
                <li><NavLink to="/" end className="block py-3">Home</NavLink></li>
                <li><NavLink to="/about" className="block py-3">About Us</NavLink></li>
                <li><NavLink to="/projects" className="block py-3">Projects &amp; Portfolio</NavLink></li>
                <li><NavLink to="/sustainability" className="block py-3">Sustainability</NavLink></li>
                <li><NavLink to="/insights" className="block py-3">Insights</NavLink></li>
                <li><NavLink to="/contact" className="block py-3">Contact</NavLink></li>
              </ul>
              <p className="mt-4 text-sm text-white/55">Our Businesses</p>
              <ul className="mt-1 text-lg">
                {SERVICES.map((s) => (
                  <li key={s.href}>
                    <NavLink to={s.href} className="block py-2 text-white/85">
                      <span className="mr-2 text-gold tabular-nums" aria-hidden="true">{s.number}</span>
                      {s.name}
                    </NavLink>
                  </li>
                ))}
              </ul>
              <NavLink
                to="/contact"
                className="mt-6 flex h-12 items-center justify-center rounded-sm bg-gold font-semibold text-brand-deep"
              >
                Partner With Us
              </NavLink>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
