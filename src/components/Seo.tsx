import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import routes from '../routes.json';
import { ogImage } from '../../scripts/site-url.mjs';

const SITE = import.meta.env.VITE_SITE_URL as string;
const NOT_FOUND = { path: '', title: 'Page Not Found - NBSCCL', description: 'The page you are looking for does not exist.' };

// Keeps <head> in sync on client-side navigation. Initial values are baked in by scripts/prerender.mjs.
export function Seo() {
  const { pathname } = useLocation();

  useEffect(() => {
    const route = routes.find((r) => r.path === pathname) ?? NOT_FOUND;
    const url = SITE + pathname;
    const image = ogImage(route, SITE);

    const set = (selector: string, attr: string, value: string) =>
      document.head.querySelector(selector)?.setAttribute(attr, value);

    document.title = route.title;
    set('meta[name="description"]', 'content', route.description);
    set('link[rel="canonical"]', 'href', url);
    set('meta[property="og:title"]', 'content', route.title);
    set('meta[property="og:description"]', 'content', route.description);
    set('meta[property="og:url"]', 'content', url);
    set('meta[property="og:image"]', 'content', image.url);
    set('meta[property="og:image:alt"]', 'content', image.alt);
    set('meta[name="twitter:title"]', 'content', route.title);
    set('meta[name="twitter:description"]', 'content', route.description);
    set('meta[name="twitter:image"]', 'content', image.url);
    set('meta[name="twitter:image:alt"]', 'content', image.alt);
  }, [pathname]);

  return null;
}
