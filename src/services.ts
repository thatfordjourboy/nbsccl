// Single list of the five business divisions. Used by the header, footer and home page.
export const unsplash = (id: string, w = 1600) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&q=75&w=${w}`;

export const SERVICES = [
  {
    name: 'Construction & Infrastructure',
    shortName: 'Construction',
    href: '/construction',
    slug: 'construction',
    number: '01',
    featured: true as const,
    priority: 'Very high' as const,
    role: 'Flagship / credibility',
    summary:
      'Building construction, civil engineering and infrastructure development for public and private sector clients.',
    image: unsplash('1541888946425-d81bb19240f5', 900),
    capabilities: [
      'Residential construction',
      'Commercial buildings',
      'Institutional facilities',
      'Educational facilities',
      'Industrial facilities',
      'Civil engineering',
      'Road infrastructure',
      'Renovation and rehabilitation',
      'Project management',
    ],
    opportunities: [
      'Government contracts',
      'Educational and healthcare facilities',
      'Road infrastructure',
      'Residential development',
      'Commercial buildings',
      'Public infrastructure',
    ],
  },
  {
    name: 'Commodity Trading',
    shortName: 'Commodity Trading',
    href: '/commodities',
    slug: 'commodities',
    number: '02',
    featured: false as const,
    priority: 'High' as const,
    role: 'Diversification',
    summary:
      'Strategic sourcing, procurement and trading of agricultural, industrial and commercial commodities.',
    image: unsplash('1574323347407-f5e1ad6d020b', 900),
    capabilities: [
      'Agricultural commodities',
      'Industrial raw materials',
      'Procurement',
      'Bulk sourcing',
      'Supplier coordination',
      'Domestic and international trade',
      'Distribution',
      'Supply-chain coordination',
    ],
    opportunities: [
      'Agricultural trading',
      'Industrial raw materials',
      'Bulk procurement',
      'Wholesale distribution',
      'International supply agreements',
    ],
  },
  {
    name: 'Import & Export',
    shortName: 'Import & Export',
    href: '/import-export',
    slug: 'import-export',
    number: '03',
    featured: false as const,
    priority: 'High' as const,
    role: 'International connectivity',
    summary:
      'International trade facilitation, cross-border sourcing and integrated logistics coordination.',
    image: unsplash('1494412574643-ff11b0a5c1c3', 900),
    capabilities: [
      'International procurement',
      'Import and export facilitation',
      'Freight coordination',
      'Customs documentation support',
      'International sourcing',
      'Distribution',
      'Trade partnerships',
    ],
    opportunities: [
      'International sourcing',
      'Cross-border trade',
      'Equipment imports',
      'Agricultural exports',
      'Logistics coordination',
      'Distribution partnerships',
    ],
  },
  {
    name: 'Manufacturing',
    shortName: 'Manufacturing',
    href: '/manufacturing',
    slug: 'manufacturing',
    number: '04',
    featured: false as const,
    priority: 'Strategic' as const,
    role: 'Long-term industrial growth',
    summary:
      'Industrial manufacturing and customized production solutions, delivered directly and with strategic partners.',
    image: unsplash('1513828583688-c52646db42da', 900),
    capabilities: [
      'Industrial production',
      'Customized and contract manufacturing',
      'Product development support',
      'Material processing',
      'Production coordination',
      'Industrial partnerships',
    ],
    opportunities: [
      'Local production',
      'Contract manufacturing',
      'Private-label production',
      'Industrial partnerships',
      'Material processing',
      'Import substitution',
    ],
  },
  {
    name: 'General Merchandise & Supply',
    shortName: 'Merchandise & Supply',
    href: '/merchandise',
    slug: 'merchandise',
    number: '05',
    featured: false as const,
    priority: 'Very high' as const,
    role: 'Recurring revenue',
    summary: 'Procurement and supply of commercial, industrial and institutional goods.',
    image: unsplash('1441986300917-64674bd600d8', 900),
    capabilities: [
      'Government procurement support',
      'Institutional supplies',
      'Commercial merchandise',
      'Industrial, office and electrical equipment',
      'Building materials',
      'Bulk procurement',
      'Corporate supply contracts',
    ],
    opportunities: [
      'Government tenders',
      'Institutional procurement',
      'Industrial equipment',
      'Medical supplies',
      'Office equipment',
      'Building materials',
      'Corporate supply contracts',
    ],
  },
] as const;

export type Service = (typeof SERVICES)[number];

/** Contact form enquiry categories (includes non-division options). */
export const ENQUIRY_CATEGORIES = [
  { slug: 'general', label: 'General Enquiry' },
  { slug: 'construction', label: 'Construction & Infrastructure' },
  { slug: 'commodities', label: 'Commodity Trading' },
  { slug: 'import-export', label: 'Import & Export' },
  { slug: 'manufacturing', label: 'Manufacturing' },
  { slug: 'merchandise', label: 'General Merchandise & Supply' },
  { slug: 'procurement', label: 'Procurement & Tender Opportunities' },
  { slug: 'partnerships', label: 'Strategic Partnerships' },
] as const;

export const CONTACT = {
  phones: ['+233 200252498', '+233 550974525'],
  emails: ['info@nbsebastian.com', 'sales@nbsebastian.com', 'nbsebastianccl@gmail.com'],
  address: ['Behind Inkoom Hospital', 'Spintex Road, Accra', 'G6-166-0779'],
  hours: ['Mon to Fri, 8:30 am to 5:00 pm', 'Saturday, 10:00 am to 4:00 pm', 'Closed on Sunday'],
};

export const tel = (phone: string) => `tel:${phone.replace(/\s/g, '')}`;

export const BRAND = {
  legalName: 'NB Sebastian Commodities Company Limited',
  tagline: 'Built on Capability. Defined by Delivery.',
  secondary: 'Diversified Capabilities. One Commitment to Excellence.',
  supporting: 'Connecting Markets. Building Infrastructure. Delivering Value.',
  positioning:
    'A diversified African enterprise delivering integrated solutions across infrastructure, trade, manufacturing and institutional supply.',
  description:
    'NB Sebastian Commodities Company Limited is a diversified Ghanaian enterprise operating across construction and infrastructure, commodity trading, import and export, manufacturing, and general merchandise and supply.\n\nThrough our integrated business capabilities, strategic partnerships and commitment to professional execution, we connect markets, facilitate commerce, develop infrastructure and pursue lasting value for our clients, partners and communities.\n\nOur approach is founded on integrity, accountability, operational excellence and responsible business practices.',
  mission:
    'To deliver reliable, integrated and innovative commercial solutions through professional execution, responsible business practices and strategic partnerships that create lasting value for our stakeholders.',
  vision:
    'To become a respected diversified African enterprise recognised for operational excellence, commercial integrity and meaningful contributions to infrastructure development, international trade, industrial growth and sustainable economic development.',
};

/** Soft positioning labels only — not verified operating statistics. */
export const FIGURES = [
  { value: 'Five', label: 'complementary divisions' },
  { value: 'Accra', label: 'headquartered in Ghana' },
  { value: 'One', label: 'integrated commitment' },
];

/** Strategic growth themes for Insights — proposed directions, not confirmed contracts. */
export const STRATEGIC_THEMES = [
  {
    title: 'Government & institutional procurement',
    description:
      'Pursue public-sector and institutional supply opportunities where construction, merchandise and trade capabilities can be combined.',
  },
  {
    title: 'International strategic partnerships',
    description:
      'Build relationships with foreign manufacturers seeking entry into Ghana and the wider West African market.',
  },
  {
    title: 'Integrated project delivery',
    description:
      'Offer construction, procurement, manufacturing coordination and importation under one umbrella for complex programmes.',
  },
  {
    title: 'Regional West Africa expansion',
    description:
      'Extend trade and supply relationships across neighbouring markets as capability and partnerships mature.',
  },
  {
    title: 'Exclusive distribution agreements',
    description:
      'Seek distribution arrangements that deepen institutional and commercial supply reach.',
  },
  {
    title: 'Private-sector development',
    description:
      'Support commercial infrastructure, real estate and industrial projects through complementary divisions.',
  },
] as const;
