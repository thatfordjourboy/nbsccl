import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import routes from '../routes.json';

const NOT_FOUND = { title: 'Page Not Found - NBSCCL', description: 'The page you are looking for does not exist.' };

// Keeps <head> in sync on client-side navigation. Initial values are baked in by scripts/prerender.mjs.
export function Seo() {
  const { pathname } = useLocation();

  useEffect(() => {
    const route = routes.find((r) => r.path === pathname) ?? NOT_FOUND;
    const url = (import.meta.env.VITE_SITE_URL || window.location.origin).replace(/\/$/, '') + pathname;

    const set = (selector: string, attr: string, value: string) =>
      document.head.querySelector(selector)?.setAttribute(attr, value);

    document.title = route.title;
    set('meta[name="description"]', 'content', route.description);
    set('meta[property="og:title"]', 'content', route.title);
    set('meta[property="og:description"]', 'content', route.description);
    set('meta[property="og:url"]', 'content', url);
    set('meta[name="twitter:title"]', 'content', route.title);
    set('meta[name="twitter:description"]', 'content', route.description);
    set('link[rel="canonical"]', 'href', url);
  }, [pathname]);

  return null;
}
