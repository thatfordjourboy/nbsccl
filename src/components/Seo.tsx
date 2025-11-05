import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const BRAND = 'NBSCCL';
const DEFAULT_TITLE = `${BRAND}`;
const DEFAULT_DESC = "Construction, commodities, manufacturing, and global trade solutions.";

export function Seo() {
  const { pathname, search } = useLocation();

  useEffect(() => {
    const siteUrl = import.meta.env.VITE_SITE_URL || 'https://example.com';
    const url = siteUrl.replace(/\/$/, '') + pathname + search;

    const routeTitleMap: Record<string, string> = {
      '/': `Home - ${BRAND}`,
      '/about': `About - ${BRAND}`,
      '/construction': `Construction - ${BRAND}`,
      '/commodities': `Commodities - ${BRAND}`,
      '/import-export': `Import & Export - ${BRAND}`,
      '/gold': `Gold - ${BRAND}`,
      '/manufacturing': `Manufacturing - ${BRAND}`,
      '/merchandise': `Merchandise - ${BRAND}`,
      '/contact': `Contact - ${BRAND}`,
      '/privacy': `Privacy Policy - ${BRAND}`,
      '/terms': `Terms of Service - ${BRAND}`
    };

    const ensureMeta = (name: string, attr: 'name' | 'property' = 'name') => {
      let tag = document.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement | null;
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute(attr, name);
        document.head.appendChild(tag);
      }
      return tag;
    };

    const setMeta = (name: string, content: string, attr: 'name' | 'property' = 'name') => {
      const tag = ensureMeta(name, attr);
      tag.setAttribute('content', content);
    };

    // Title per route (fallback to default)
    document.title = routeTitleMap[pathname] || DEFAULT_TITLE;
    setMeta('description', DEFAULT_DESC);

    // Canonical
    let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!link) {
      link = document.createElement('link');
      link.rel = 'canonical';
      document.head.appendChild(link);
    }
    link.href = url;

    // Open Graph and Twitter URL
    setMeta('og:url', url, 'property');
    setMeta('twitter:url', url);
  }, [pathname, search]);

  return null;
}

export default Seo;


