// Single source for the public site URL (canonical links, og:url, og:image, sitemap, robots.txt).
// Priority: explicit VITE_SITE_URL > Vercel's production domain (set automatically on every Vercel build,
// and switches to the custom domain once one is connected) > the current production URL.
// Also imported by the browser bundle (Seo.tsx), where `process` does not exist.
const env = globalThis.process?.env ?? {};
export const SITE_URL = (
  env.VITE_SITE_URL ||
  (env.VERCEL_PROJECT_PRODUCTION_URL && `https://${env.VERCEL_PROJECT_PRODUCTION_URL}`) ||
  'https://nbsccl.vercel.app'
).replace(/\/$/, '');

/** Share image for a route: its own photo (Unsplash, cropped to 1200x630) or the brand card. */
export function ogImage(route, site = SITE_URL) {
  return route.image
    ? { url: `https://images.unsplash.com/photo-${route.image}?auto=format&fit=crop&q=75&w=1200&h=630`, alt: route.imageAlt ?? '' }
    : { url: `${site}/og-image.png`, alt: 'NB Sebastian Commodities Company Limited logo' };
}
