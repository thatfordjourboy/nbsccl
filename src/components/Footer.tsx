import { Link } from 'react-router-dom';
import { Logo } from './site/Logo';
import { BRAND, CONTACT, SERVICES, tel } from '../services';

export function Footer() {
  return (
    <footer className="bg-brand-deep text-white/75">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <Logo className="h-11" />
            <p className="mt-6 max-w-xs text-sm">
              {BRAND.supporting} Based in Accra, Ghana.
            </p>
            <p className="mt-3 max-w-xs text-sm text-white/55">{BRAND.tagline}</p>
          </div>

          <nav aria-label="Our Businesses">
            <h2 className="font-heading text-sm text-white">Our Businesses</h2>
            <ul className="mt-4 space-y-2 text-sm">
              {SERVICES.map((s) => (
                <li key={s.href}><Link to={s.href} className="hover:text-white">{s.name}</Link></li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Company">
            <h2 className="font-heading text-sm text-white">Company</h2>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link to="/about" className="hover:text-white">About Us</Link></li>
              <li><Link to="/projects" className="hover:text-white">Projects &amp; Portfolio</Link></li>
              <li><Link to="/sustainability" className="hover:text-white">Sustainability</Link></li>
              <li><Link to="/insights" className="hover:text-white">Insights</Link></li>
              <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
              <li><Link to="/privacy" className="hover:text-white">Privacy policy</Link></li>
              <li><Link to="/terms" className="hover:text-white">Terms of service</Link></li>
            </ul>
          </nav>

          <div className="text-sm">
            <h2 className="font-heading text-white">Get in touch</h2>
            <address className="mt-4 not-italic">{CONTACT.address.join(', ')}</address>
            <ul className="mt-4 space-y-1">
              {CONTACT.phones.map((p) => (
                <li key={p}><a href={tel(p)} className="hover:text-white">{p}</a></li>
              ))}
              {CONTACT.emails.map((e) => (
                <li key={e}><a href={`mailto:${e}`} className="break-all hover:text-white">{e}</a></li>
              ))}
            </ul>
          </div>
        </div>

        <p className="mt-14 border-t border-white/15 pt-8 text-xs text-white/50">
          © {new Date().getFullYear()} {BRAND.legalName}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
