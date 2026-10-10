# NB Sebastian Commodities Company Ltd.

Corporate website for NB Sebastian: construction, commodities trading, manufacturing, gold purchasing and global trade.

- **Working on the code?** Read [CLAUDE.md](CLAUDE.md) (rules, layout, commands).
- **Status, open items, changelog:** [PROJECT.md](PROJECT.md).

## Quick start

```bash
npm install
npm run dev     # http://localhost:3000
npm test
npm run build   # output in build/
```

## Deploying (Vercel)

1. Import `thatfordjourboy/nbsccl` in Vercel. Build settings come from `vercel.json`.
2. Set the environment variables from [.env.example](.env.example):
   - `VITE_SITE_URL`: production URL, e.g. `https://www.nbsccl.com`
   - `RESEND_API_KEY`, `CONTACT_TO_EMAIL`, `CONTACT_FROM_EMAIL`: required for the contact form to deliver mail
   - `VITE_TURNSTILE_SITE_KEY`, `TURNSTILE_SECRET_KEY`: optional Cloudflare Turnstile spam protection
3. Add the custom domain under Settings → Domains.

## Stack

React 18, TypeScript, Vite, Tailwind CSS v4, React Router 7, motion, Vercel Functions (`api/`).
