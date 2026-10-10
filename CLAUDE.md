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
| `src/App.tsx` | Router. Pages are lazy-loaded. |
| `src/components/pages/` | One file per page. |
| `src/services.ts` | The six business lines (name, link, summary, image), contact details and company figures. Header, footer, home page and contact form all read from here. |
| `src/components/site/` | Design-system building blocks: `PageHero`, `SectionHeading`, `Steps`, `ContactBand`, `Container`, `ServicePage` template, `HeroMap`, `Ticker`, `Logo`. |
| `src/components/ui/` | Kept shadcn components (button, input, label, textarea, sonner). Delete what you stop using. |
| `src/index.css` | Tailwind source: brand tokens, font, `font-display` / `font-heading` utilities. Compiled at build time. |
| `public/logo.png`, `logo-mark.png` | Client logo, keyed out of its plum background. Only place it on plum surfaces. |
| `api/contact.ts` | Vercel function: validation, honeypot, rate limit, Turnstile, sends mail via Resend. |
| `scripts/prerender.mjs` | Post-build: per-route HTML with correct head tags, `404.html`, `sitemap.xml`. |
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
- **Colours come from the client logo**: `plum` #7D0147 (brand surfaces, header, heroes), `plum-deep` (footer, contact band, gold spotlight), `gold` #FDD100 (accent **on plum only**; it fails contrast on light backgrounds), `paper` (page background), `ink` (text), `slate` (secondary text), `line` (rules). Use the tokens, never raw hex or Tailwind palette colours like `blue-600`.
- **Type**: Archivo variable only. `font-display` (expanded, heavy) for hero and page titles and big service names; `font-heading` for section and item headings; normal Archivo for body. Sentence case everywhere; no all-caps labels.
- **Layout**: left-aligned; `Container` for width; sections are `py-20 sm:py-28`. Lists separated by hairline rules, not rows of identical icon cards. Don't add icon tiles.
- **New service page** = data passed to `ServicePage` (see `GoldPage.tsx`). Add the service to `src/services.ts` and `src/routes.json` too.
- **Motion budget**: the home hero sequence (`HeroMap` + headline), the photo opening in `PageHero`, the `Ticker`, scroll-drawn `Steps` lines (only for real sequences), and hover responses. Don't add fade-up-on-scroll to sections. Everything must respect reduced motion (`MotionConfig reducedMotion="user"`, `useReducedMotion`, `motion-reduce:`).
- **Copy**: plain, specific, sentence case. Buttons say what happens ("Request a gold quote"), not "Learn more". Don't invent facts about the company: only use what the client has provided (see PROJECT.md open items).

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
