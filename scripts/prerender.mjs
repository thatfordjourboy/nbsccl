// Post-build static site generation. For every route in src/routes.json:
//  - server-renders the full page body (build-server/entry-server.js), so crawlers and no-JS visitors get real
//    content and the browser hydrates instead of re-rendering;
//  - fills in <title>, description, canonical, Open Graph / Twitter tags (per-page share image) and
//    BreadcrumbList structured data.
// Also writes 404.html (served by Vercel with a real 404 status), sitemap.xml and robots.txt.
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { pathToFileURL } from 'node:url';
import { resolve } from 'node:path';
import { SITE_URL, ogImage } from './site-url.mjs';

const OUT = 'build';
const { render } = await import(pathToFileURL(resolve('build-server/entry-server.js')).href);
const routes = JSON.parse(readFileSync('src/routes.json', 'utf8'));
// Read the client shell before the root route overwrites build/index.html.
const shell = readFileSync(`${OUT}/index.html`, 'utf8').replaceAll('__SITE_URL__', SITE_URL);

const esc = (s) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const setMeta = (html, selector, value) => {
  const re = new RegExp(`(<meta ${selector} content=")[^"]*(")`);
  if (!re.test(html)) throw new Error(`index.html is missing <meta ${selector}>`);
  return html.replace(re, `$1${esc(value)}$2`);
};

function breadcrumbs(route) {
  if (route.path === '/') return '';
  const items = [
    { name: 'Home', item: `${SITE_URL}/` },
    { name: route.label ?? route.title, item: SITE_URL + route.path },
  ].map((c, i) => ({ '@type': 'ListItem', position: i + 1, ...c }));
  const data = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: items };
  // JSON in a <script> data block: escape "<" so content can never close the tag.
  return `<script type="application/ld+json">${JSON.stringify(data).replace(/</g, '\\u003c')}</script>`;
}

async function page(route, { renderPath = route.path, extraHead = '' } = {}) {
  const url = SITE_URL + route.path;
  const image = ogImage(route);
  let html = shell
    .replace(/<title>[^<]*<\/title>/, `<title>${esc(route.title)}</title>`)
    .replace(/(<link rel="canonical" href=")[^"]*(")/, `$1${url}$2`);
  html = setMeta(html, 'name="description"', route.description);
  html = setMeta(html, 'property="og:title"', route.title);
  html = setMeta(html, 'property="og:description"', route.description);
  html = setMeta(html, 'property="og:url"', url);
  html = setMeta(html, 'property="og:image"', image.url);
  html = setMeta(html, 'property="og:image:alt"', image.alt);
  html = setMeta(html, 'name="twitter:title"', route.title);
  html = setMeta(html, 'name="twitter:description"', route.description);
  html = setMeta(html, 'name="twitter:image"', image.url);
  html = setMeta(html, 'name="twitter:image:alt"', image.alt);
  const body = await render(renderPath);
  if (!html.includes('<div id="root"></div>')) throw new Error('index.html is missing <div id="root"></div>');
  return html
    .replace('</head>', `${breadcrumbs(route)}${extraHead}</head>`)
    .replace('<div id="root"></div>', `<div id="root">${body}</div>`);
}

for (const route of routes) {
  const dir = route.path === '/' ? OUT : `${OUT}${route.path}`;
  mkdirSync(dir, { recursive: true });
  writeFileSync(`${dir}/index.html`, await page(route));
}

writeFileSync(
  `${OUT}/404.html`,
  await page(
    { path: '/404', title: 'Page Not Found - NBSCCL', description: 'The page you are looking for does not exist.' },
    { renderPath: '/__not-found__', extraHead: '<meta name="robots" content="noindex" />' },
  ),
);

const today = new Date().toISOString().slice(0, 10);
writeFileSync(
  `${OUT}/sitemap.xml`,
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
    routes.map((r) => `  <url><loc>${SITE_URL}${r.path}</loc><lastmod>${today}</lastmod></url>`).join('\n') +
    `\n</urlset>\n`,
);

writeFileSync(`${OUT}/robots.txt`, `User-agent: *\nAllow: /\nDisallow: /api/\n\nSitemap: ${SITE_URL}/sitemap.xml\n`);

console.log(`prerendered ${routes.length} routes + 404.html + sitemap.xml + robots.txt for ${SITE_URL}`);
