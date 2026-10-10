// Single list of the six business lines. Used by the header, footer and home page.
export const unsplash = (id: string, w = 1600) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&q=75&w=${w}`;

export const SERVICES = [
  {
    name: 'Construction',
    href: '/construction',
    slug: 'construction',
    summary: 'Offices, homes, factories and roads, built to schedule.',
    image: unsplash('1541888946425-d81bb19240f5', 900),
  },
  {
    name: 'Commodities',
    href: '/commodities',
    slug: 'commodities',
    summary: 'Grain, cocoa, fuel and metals, sourced and traded.',
    image: unsplash('1574323347407-f5e1ad6d020b', 900),
  },
  {
    name: 'Import & Export',
    href: '/import-export',
    slug: 'import-export',
    summary: 'Freight by sea, air and road, cleared through customs.',
    image: unsplash('1494412574643-ff11b0a5c1c3', 900),
  },
  {
    name: 'Gold Purchasing',
    href: '/gold',
    slug: 'gold',
    summary: 'Gold bought at open rates, tested and documented.',
    image: unsplash('1610375461246-83df859d849d', 900),
  },
  {
    name: 'Manufacturing',
    href: '/manufacturing',
    slug: 'manufacturing',
    summary: 'Parts and equipment made to your specification.',
    image: unsplash('1513828583688-c52646db42da', 900),
  },
  {
    name: 'General Merchandise',
    href: '/merchandise',
    slug: 'merchandise',
    summary: 'Electronics, apparel and supplies, sourced and delivered.',
    image: unsplash('1441986300917-64674bd600d8', 900),
  },
] as const;

export const CONTACT = {
  phones: ['+233 200252498', '+233 550974525'],
  emails: ['info@nbsebastian.com', 'sales@nbsebastian.com', 'nbsebastianccl@gmail.com'],
  address: ['Behind Inkoom Hospital', 'Spintex Road, Accra', 'G6-166-0779'],
  hours: ['Mon to Fri, 8:30 am to 5:00 pm', 'Saturday, 10:00 am to 4:00 pm', 'Closed on Sunday'],
};

export const tel = (phone: string) => `tel:${phone.replace(/\s/g, '')}`;

// Company figures as currently claimed on the site. AWAITING CLIENT CONFIRMATION (see PROJECT.md).
export const FIGURES = [
  { value: '25+', label: 'years in business' },
  { value: '50+', label: 'countries served' },
  { value: '1,000+', label: 'projects completed' },
];
