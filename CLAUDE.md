# CLAUDE.md

Rules for anyone (human or AI) working on this repo. Read this first, then [PROJECT.md](PROJECT.md) for current status.

## What this is

Marketing site for NB Sebastian Commodities Company Ltd. (Accra, Ghana). React 18 + Vite + Tailwind v4 SPA, deployed on Vercel, plus one serverless function for the contact form.

## Commands

```bash
npm install
npm run dev        # http://localhost:3000 (the /api function does NOT run here; use `vercel dev` to test the form)
npm test           # node:test on tests/*.test.ts (Node 22.6+ for native TS)
npm run typecheck  # tsc --noEmit
npm run build      # typecheck + vite build + scripts/prerender.mjs -> build/
npm run preview    # serve build/
```

`npm run build` must pass before every commit.

## Layout

| Path | What |
|---|---|
| `src/routes.json` | **Single source of truth for routes**: path, `<title>`, meta description. Used by `Seo.tsx`, `scripts/prerender.mjs` and the sitemap. |
| `src/App.tsx` | Routes (router-agnostic). Pages are lazy-loaded. `main.tsx` wraps it in `BrowserRouter` and hydrates; `entry-server.tsx` wraps it in `StaticRouter` for build-time rendering. |
| `src/components/pages/` | One file per page. |
| `src/services.ts` | The six business lines (name, link, summary, image), contact details and company figures. Header, footer, home page and contact form all read from here. |
| `src/components/site/` | Design-system building blocks: `PageHero`, `SectionHeading`, `Steps`, `ContactBand`, `Container`, `ServicePage` template, `HeroMap`, `Ticker`, `Logo`. |
| `src/components/ui/` | Kept shadcn components (button, input, label, textarea, sonner). Delete what you stop using. |
| `src/index.css` | Tailwind source: brand tokens, font, `font-display` / `font-heading` utilities. Compiled at build time. |
| `public/logo.png`, `logo-mark.png` | Client logo (gold + white on transparent). Only place it on dark `brand` surfaces. Favicon, touch icon and `og-image.png` are generated from it on the brand green. |
| `api/contact.ts` | Vercel function: validation, honeypot, rate limit, Turnstile, sends mail via Resend. |
| `scripts/prerender.mjs` | Post-build static generation: full server-rendered HTML per route, head/OG tags, breadcrumb JSON-LD, `404.html`, `sitemap.xml`, `robots.txt`. |
| `scripts/site-url.mjs` | The public site URL (`VITE_SITE_URL` > Vercel production domain > `nbsccl.vercel.app`) and per-route share image. |
| `vercel.json` | Security headers (CSP, HSTS, ...) and caching. |

## Rules

### Adding or renaming a page
1. Add it to `src/routes.json` (path, title in `"<Name> - NBSCCL"` format, description).
2. Add the lazy import and `<Route>` in `src/App.tsx`.
3. Link it from `Header.tsx` / `Footer.tsx` if needed.
The sitemap and prerendered HTML update automatically.

### Security (do not regress)
- **No secrets in `VITE_*` env vars**: they ship in the public JS bundle. Secrets go to `api/` via `process.env`.
- **CSP lives in `vercel.json` only.** Do not add a `<meta http-equiv="Content-Security-Policy">`. Any new third-party origin (script, image host, iframe, API) must be added to the CSP deliberately, and to the privacy policy.
- Never use `dangerouslySetInnerHTML`, `eval`, or inline `<script>` (except the JSON-LD block).
- The server (`api/contact.ts`) is the source of truth for validation; client-side checks are UX only. Keep `tests/contact.test.ts` passing and extend it when you change validation.
- The contact form must never report success unless the server confirmed delivery.
- Run `npm audit` when touching dependencies; ship with 0 high/critical.

### Design system (do not drift)
- **Colours** (client choice, 2026-10-10): `brand` #1E3A32 forest green (header, heroes), `brand-deep` #142822 (footer, contact band, gold spotlight), `brand-soft` (hover), `gold` #DDB84F (accent **on brand surfaces only**; it fails contrast on light backgrounds), `paper` (page background), `ink` (text), `slate` (secondary text), `line` (rules). Use the tokens, never raw hex or Tailwind palette colours like `blue-600`. The logo needs a dark `brand` surface behind it.
- **Type**: Archivo variable only. `font-display` (expanded, heavy) for hero and page titles and big service names; `font-heading` for section and item headings; normal Archivo for body. Sentence case everywhere; no all-caps labels.
- **Layout**: left-aligned; `Container` for width; sections are `py-20 sm:py-28`. Lists separated by hairline rules, not rows of identical icon cards. Don't add icon tiles.
- **New service page** = data passed to `ServicePage` (see `GoldPage.tsx`). Add the service to `src/services.ts` and `src/routes.json` too.
- **Motion budget**: the home hero sequence (`HeroMap` + headline), the photo opening in `PageHero`, the `Ticker`, scroll-drawn `Steps` lines (only for real sequences), and hover responses. Don't add fade-up-on-scroll to sections. Everything must respect reduced motion (`MotionConfig reducedMotion="user"`, `useReducedMotion`, `motion-reduce:`).
- **Copy**: plain, specific, sentence case. Buttons say what happens ("Request a gold quote"), not "Learn more". Don't invent facts about the company: only use what the client has provided (see PROJECT.md open items).

### SEO and rendering (do not regress)
- Every page is server-rendered at build time and hydrated in the browser. **Components must be SSR-safe**: never touch `window`, `document`, `localStorage` or `matchMedia` during render or in `useState` initialisers; do it in `useEffect`. Server and first client render must produce the same markup (a mismatch shows up as a console error; `csp-check` style tests catch it).
- Per-page title, description, share image (`image` = Unsplash photo id, cropped 1200x630) and breadcrumb label live in `src/routes.json`. Titles under 60 characters, descriptions under 160.
- Never hardcode the site domain. `index.html` uses the `__SITE_URL__` placeholder; code uses `import.meta.env.VITE_SITE_URL`.
- One `<h1>` per page.

### Code style
- Use Tailwind classes; they are compiled at build time, so any class works. Don't hand-edit compiled CSS.
- Buttons that navigate use `<Button asChild><Link to="...">` (or `<a>` for tel:/mailto:/#anchors). Never put a `<Link>` inside a plain `<Button>`.
- Every interactive element must be keyboard-reachable and labelled (`aria-label` on icon-only buttons, `<Label htmlFor>` on inputs).
- Animations go through `motion/react`. `MotionConfig reducedMotion="user"` in `App.tsx` handles reduced-motion; don't bypass it.
- Use native HTML first (form validation, `<select>`, `<details>`) before adding a library.
- Don't add a dependency for something a few lines can do. Remove dependencies when you remove their last use.

### Content
- Business claims (years in operation, country/project counts, certifications) must be confirmed by the client before launch. See the open items in PROJECT.md.
- Contact details appear in `ContactPage.tsx`, `Footer.tsx`, `index.html` (JSON-LD) and `src/routes.json`. Update them all together.

### Record keeping
- **Every change that ships gets a dated entry in the Changelog in [PROJECT.md](PROJECT.md)** (newest first), and any new open item or decision goes there too.
- Work on a branch, keep commits focused, and use conventional commit prefixes (`fix:`, `feat:`, `chore:`, `docs:`, `security:`).
