import { ServicePage } from '../site/ServicePage';
import { unsplash } from '../../services';

export function MerchandisePage() {
  return (
    <ServicePage
      slug="merchandise"
      title="General merchandise"
      intro="Electronics, apparel and business supplies, sourced from trusted makers and delivered to your door."
      image={unsplash('1441986300917-64674bd600d8')}
      imageAlt="A clothing store interior"
      offerings={{
        heading: 'What we provide',
        items: [
          { title: 'Global sourcing', description: 'A wide supplier network, so one order can cover many product lines.' },
          { title: 'Quality assurance', description: 'Products inspected against international standards.' },
          { title: 'Inventory management', description: 'Warehousing that keeps stock ready for when you need it.' },
          { title: 'Distribution', description: 'Delivery to your shops, sites or warehouses.' },
        ],
      }}
      groups={{
        heading: 'Product categories',
        items: [
          { title: 'Consumer electronics', description: 'Devices and appliances from established global brands.', list: ['Smartphones and tablets', 'Audio equipment', 'Home appliances', 'Computer accessories'] },
          { title: 'Fashion and lifestyle', description: 'Clothing, footwear and home goods for a range of markets.', list: ['Apparel and clothing', 'Accessories', 'Footwear', 'Home decor'] },
          { title: 'Industrial supplies', description: 'The everyday kit that keeps a business running.', list: ['Tools and equipment', 'Safety products', 'Office supplies', 'Packaging materials'] },
        ],
      }}
      steps={{
        heading: 'From supplier to shelf',
        items: [
          { title: 'Source', description: 'We find and vet suppliers for what you need.' },
          { title: 'Inspect', description: 'Goods are checked and tested before they ship.' },
          { title: 'Store', description: 'Stock is warehoused until you need it.' },
          { title: 'Deliver', description: 'Products arrive at your locations.' },
        ],
      }}
      assurances={{
        heading: 'Why buy through us',
        items: [
          { title: 'One supplier, many lines', description: 'Our network covers products from many manufacturers, so you deal with one company.' },
          { title: 'Checked quality', description: 'Every product held to international standards.' },
        ],
      }}
      cta={{ heading: 'Stocking up?', text: 'Send a product list or the categories you need, and we will quote supply.', label: 'Request a product quote' }}
    />
  );
}
