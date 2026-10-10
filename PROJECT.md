# PROJECT.md

Status, decisions, open items and changelog for the NB Sebastian website. Rules for working on the repo are in [CLAUDE.md](CLAUDE.md).

## Status

Draft. Code is pre-launch ready; launch is blocked on the **client** and **deployment** items below.

## Open items

### Blocked on client (content / legal)
- [ ] **Confirm or remove business claims**: "25+ years", "50+ countries", "1000+ projects", "over two decades" (HomePage, AboutPage, Footer, HomePage hero). Unverifiable claims are a legal risk, especially for gold purchasing.
- [ ] **One email domain**: the site uses `@nbsebastian.com` and a Gmail address, and the site domain is `nbsccl.com`. Pick one domain and confirm `info@`, `sales@`, `privacy@`, `legal@` receive mail.
- [ ] **Exact map location**: the map is a search for "Inkoom Hospital, Spintex Road". Replace it with an embed of the office's own Google Business pin (`ContactPage.tsx`).
- [ ] **Own photography**: all 16 images are Unsplash stock, hotlinked. Replace them with company photos in `public/images/`, then remove `https://images.unsplash.com` from the CSP and the privacy policy.
- [ ] **Real share image and logo**: `public/og-image.png` and `public/favicon.svg` are text placeholders.
- [ ] **Social profiles**: LinkedIn/Twitter icons were removed because they linked nowhere. Re-add them with real URLs if the profiles exist.
- [ ] **Legal review** of the Privacy Policy (Ghana Data Protection Act 2012, Act 843) and Terms. Update the "Last updated" dates when they change.
- [ ] **Careers / News pages**: links removed. Add them back if those pages are wanted.

### Blocked on deployment setup
- [ ] Confirm the production domain is `www.nbsccl.com` (hardcoded fallback in `index.html` and `scripts/prerender.mjs`; overridable with `VITE_SITE_URL`).
- [ ] Vercel env vars: `RESEND_API_KEY`, `CONTACT_TO_EMAIL`, `CONTACT_FROM_EMAIL` (domain must be verified in Resend). **Without these the form returns an error and tells visitors to email instead.**
- [ ] Cloudflare Turnstile: create a site and set `VITE_TURNSTILE_SITE_KEY` + `TURNSTILE_SECRET_KEY`. Optional but recommended.
- [ ] After the first deploy: check the headers on securityheaders.com, test the form end to end, confirm `/random-path` returns 404, then submit `sitemap.xml` in Google Search Console.
- [ ] HSTS is set with `preload`. Only submit to hstspreload.org once every subdomain serves HTTPS.

### Known limitations (deliberate)
- **Head-only prerender**: crawlers get correct titles/meta per route, but body text is client-rendered. Google renders JS, so this is fine for now. Move to full SSG (e.g. `vite-react-ssg`) if rankings need it.
- **Contact rate limit is in-memory per function instance** (5 requests / 10 min / IP). Move to Vercel KV / Upstash if spam gets through Turnstile + honeypot.
- `style-src 'unsafe-inline'` remains in the CSP; sonner and motion inject inline styles.
- Unused theme tokens for dark mode remain in `src/index.css` (harmless).

## Decisions
- **2026-10-10**: Tailwind compiled at build time (`@tailwindcss/vite`) instead of a frozen precompiled CSS file, because new classes were silently missing (e.g. map height).
- **2026-10-10**: Contact form uses native HTML validation + server validation; dropped zod / react-hook-form / Radix Select (bundle 167 kB → 10 kB).
- **2026-10-10**: Mail is delivered via Resend's REST API from a Vercel function (no SDK dependency).
- **2026-10-10**: Page titles use the `"<Page> - NBSCCL"` format (kept from commit 8b0a5a4).

## Changelog

### 2026-10-10: Audit fixes (branch `fix/audit-findings`)
**Security**
- Vite 6.3.5 → 6.4.4 and React Router 6 → 7 (`npm audit`: 10 high → 0).
- Moved the CSP from a weak `<meta>` tag (`unsafe-eval`, localhost, any https) to an enforced `vercel.json` header with an allowlist; added HSTS, COOP, `object-src 'none'`, `frame-ancestors 'none'`.
- Removed the deprecated `X-XSS-Protection`; fixed the cache rule to match `/assets/` (it pointed at `/static/`).
- Contact form: added the `api/contact.ts` endpoint (server validation, honeypot, per-IP rate limit, optional Turnstile, Resend delivery). It no longer fakes success when no backend is configured.
- Removed the map iframe's `referrerPolicy` downgrade.

**Bugs**
- Map was collapsed (missing `h-[450px]` class): fixed by real Tailwind compilation.
- Map pointed at the wrong business ("Cliff J Enterprise"): now an address search.
- "Schedule Consultation" / "Request Quote" did nothing: now `tel:` and a jump to the form.
- 14 CTA buttons wrapped `<Link>` inside `<button>` (invalid HTML): now `Button asChild`.
- Service pages' CTAs preselect the service on the contact form (`/contact?service=gold`).
- Footer: removed dead Careers/News links and non-link social icons; phone/email now clickable; copyright year is computed.
- Added favicon and share image (placeholders); removed the missing `site.webmanifest` reference.
- Unknown URLs showed the homepage: now a real 404 page (and a 404 status on Vercel via `404.html`).
- SEO: per-route title, description, canonical, and og/twitter tags at build time and on navigation; `example.com` fallback removed; sitemap generated with `lastmod`.
- Privacy/Terms "Last updated" always showed today's date: now fixed dates. The privacy policy lists the third parties and cites Act 843.

**Accessibility**
- Services menu opens by keyboard/click (not just hover), closes on Escape/blur, with `aria-expanded`.
- Mobile menu button has `aria-label` / `aria-expanded`.
- Animations respect `prefers-reduced-motion`; scroll-to-top is no longer smooth-scrolled.

**Cleanup**
- Deleted 42 unused shadcn components, `SimpleHomePage`, `test-simple`, Figma `Guidelines.md`, the frozen 2.7k-line compiled CSS, and 37 Vite version aliases.
- Dependencies: 45 → 10 runtime packages.
- Added TypeScript (`tsconfig.json`, strict) and the typecheck in the build; added `tests/contact.test.ts`.
