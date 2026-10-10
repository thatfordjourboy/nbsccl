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
  const [servicesOpen, setServicesOpen] = useState(false);
  const { pathname } = useLocation();
  const onService = SERVICES.some((s) => s.href === pathname);

  // Close menus whenever the route changes.
  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 bg-brand text-white">
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-5 sm:px-8">
        <Logo />

        <nav aria-label="Main" className="hidden items-center gap-9 text-[0.95rem] lg:flex">
          <NavLink to="/" end className={linkClass}>Home</NavLink>
          <NavLink to="/about" className={linkClass}>About</NavLink>
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
            onBlur={(e) => {
              if (!e.currentTarget.contains(e.relatedTarget)) setServicesOpen(false);
            }}
            onKeyDown={(e) => {
              if (e.key === 'Escape') setServicesOpen(false);
            }}
          >
            <button
              type="button"
              aria-expanded={servicesOpen}
              aria-controls="services-menu"
              onClick={() => setServicesOpen((open) => !open)}
              className={`flex items-center gap-1.5 py-2 transition-colors hover:text-white ${onService ? 'text-white' : 'text-white/75'}`}
            >
              Services
              <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`} />
            </button>
            <AnimatePresence>
              {servicesOpen && (
                <motion.div
                  id="services-menu"
                  initial={{ opacity: 0, y: -6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.18 }}
                  className="absolute right-0 top-full w-[34rem] pt-4"
                >
                  <ul className="grid grid-cols-2 gap-px overflow-hidden rounded-sm bg-line shadow-2xl shadow-brand-deep/30">
                    {SERVICES.map((s) => (
                      <li key={s.href} className="bg-white">
                        <NavLink
                          to={s.href}
                          className={({ isActive }) =>
                            `block h-full p-5 text-ink transition-colors hover:bg-paper ${isActive ? 'bg-paper' : ''}`
                          }
                        >
                          <span className="font-heading text-base">{s.name}</span>
                          <span className="mt-1 block text-sm leading-snug text-slate">{s.summary}</span>
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <NavLink to="/contact" className="rounded-sm bg-gold px-5 py-2.5 font-semibold text-brand-deep transition-colors hover:bg-gold-soft">
            Contact us
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
                <li><NavLink to="/about" className="block py-3">About</NavLink></li>
              </ul>
              <p className="mt-4 text-sm text-white/55">Services</p>
              <ul className="mt-1 text-lg">
                {SERVICES.map((s) => (
                  <li key={s.href}><NavLink to={s.href} className="block py-2 text-white/85">{s.name}</NavLink></li>
                ))}
              </ul>
              <NavLink
                to="/contact"
                className="mt-6 flex h-12 items-center justify-center rounded-sm bg-gold font-semibold text-brand-deep"
              >
                Contact us
              </NavLink>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
