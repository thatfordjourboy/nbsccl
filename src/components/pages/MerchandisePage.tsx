import { ServicePage } from '../site/ServicePage';
import { unsplash } from '../../services';

export function MerchandisePage() {
  return (
    <ServicePage
      slug="merchandise"
      title="General merchandise"
      intro="Consumer goods and industrial supplies, sourced from trusted manufacturers and distributed to your locations."
      image={unsplash('1441986300917-64674bd600d8')}
      imageAlt="A retail store interior"
      offerings={{
        heading: 'What we provide',
        items: [
          { title: 'Global sourcing', description: 'A wide network of suppliers and manufacturers for a broad product range.' },
          { title: 'Quality assurance', description: 'Products inspected to meet international standards.' },
          { title: 'Inventory management', description: 'Warehousing and stock management to keep supply steady.' },
          { title: 'Distribution', description: 'Delivery to your shops, sites or warehouses.' },
        ],
      }}
      groups={{
        heading: 'Product categories',
        items: [
          { title: 'Consumer electronics', description: 'Electronics from established global brands.', list: ['Smartphones and tablets', 'Audio equipment', 'Home appliances', 'Computer accessories'] },
          { title: 'Fashion and lifestyle', description: 'Clothing and lifestyle goods for a range of markets.', list: ['Apparel and clothing', 'Accessories', 'Footwear', 'Home decor'] },
          { title: 'Industrial supplies', description: 'Everyday supplies for businesses and sites.', list: ['Tools and equipment', 'Safety products', 'Office supplies', 'Packaging materials'] },
        ],
      }}
      steps={{
        heading: 'From supplier to shelf',
        items: [
          { title: 'Global sourcing', description: 'We identify and partner with trusted suppliers.' },
          { title: 'Quality control', description: 'Goods are inspected and tested before they ship.' },
          { title: 'Inventory management', description: 'Stock is warehoused and managed until it is needed.' },
          { title: 'Distribution and delivery', description: 'Products are delivered to your locations.' },
        ],
      }}
      assurances={{
        heading: 'Why buy through us',
        items: [
          { title: 'Broad sourcing', description: 'Suppliers and manufacturers worldwide, so one order can cover many lines.' },
          { title: 'Checked quality', description: 'Inspection processes that hold products to international standards.' },
        ],
      }}
      cta={{ heading: 'Stocking up?', text: 'Send us a product list or the categories you need and we will quote supply.', label: 'Request a product quote' }}
    />
  );
}
