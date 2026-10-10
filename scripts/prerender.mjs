// Post-build: writes one static HTML shell per route with correct <head> tags (so crawlers and
// link previews see real titles/descriptions without running JS), a 404.html, and sitemap.xml.
// Vercel serves build/<route>/index.html for /<route>; unknown paths get 404.html with a real 404 status.
// ponytail: head-only prerender; body is still client-rendered. Move to full SSG (e.g. vite-react-ssg) if SEO needs body text.
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';

const OUT = 'build';
const SITE = (process.env.VITE_SITE_URL || 'https://www.nbsccl.com').replace(/\/$/, '');
const routes = JSON.parse(readFileSync('src/routes.json', 'utf8'));
const shell = readFileSync(`${OUT}/index.html`, 'utf8').replaceAll('https://www.nbsccl.com', SITE);

const esc = (s) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');
const setAttr = (html, selector, value) =>
  html.replace(new RegExp(`(<meta ${selector} content=")[^"]*(")`), `$1${esc(value)}$2`);

function render({ path, title, description }, extraHead = '') {
  const url = SITE + path;
  let html = shell
    .replace(/<title>[^<]*<\/title>/, `<title>${esc(title)}</title>`)
    .replace(/(<link rel="canonical" href=")[^"]*(")/, `$1${url}$2`);
  html = setAttr(html, 'name="description"', description);
  html = setAttr(html, 'property="og:title"', title);
  html = setAttr(html, 'property="og:description"', description);
  html = setAttr(html, 'property="og:url"', url);
  html = setAttr(html, 'name="twitter:title"', title);
  html = setAttr(html, 'name="twitter:description"', description);
  return html.replace('</head>', `${extraHead}</head>`);
}

for (const route of routes) {
  const dir = route.path === '/' ? OUT : `${OUT}${route.path}`;
  mkdirSync(dir, { recursive: true });
  writeFileSync(`${dir}/index.html`, render(route));
}

writeFileSync(
  `${OUT}/404.html`,
  render(
    { path: '/404', title: 'Page Not Found - NBSCCL', description: 'The page you are looking for does not exist.' },
    '<meta name="robots" content="noindex" />'
  )
);

const today = new Date().toISOString().slice(0, 10);
writeFileSync(
  `${OUT}/sitemap.xml`,
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
    routes.map((r) => `  <url><loc>${SITE}${r.path}</loc><lastmod>${today}</lastmod></url>`).join('\n') +
    `\n</urlset>\n`
);

console.log(`prerendered ${routes.length} routes + 404.html + sitemap.xml for ${SITE}`);
