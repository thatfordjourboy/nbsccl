import { motion } from 'motion/react';
import { ShoppingBag, Package, Truck, Globe, Zap, Shield } from 'lucide-react';
import { Card } from '../ui/card';
import { Button } from '../ui/button';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { Link } from 'react-router-dom';

const categories = [
  {
    icon: Package,
    title: 'Consumer Electronics',
    items: ['Smartphones & Tablets', 'Audio Equipment', 'Home Appliances', 'Computer Accessories'],
    description: 'Latest consumer electronics from leading global brands.'
  },
  {
    icon: ShoppingBag,
    title: 'Fashion & Lifestyle',
    items: ['Apparel & Clothing', 'Accessories', 'Footwear', 'Home Decor'],
    description: 'Trendy fashion and lifestyle products for diverse markets.'
  },
  {
    icon: Zap,
    title: 'Industrial Supplies',
    items: ['Tools & Equipment', 'Safety Products', 'Office Supplies', 'Packaging Materials'],
    description: 'Essential industrial and commercial supplies for business operations.'
  }
];

const advantages = [
  {
    icon: Globe,
    title: 'Global Sourcing',
    description: 'Extensive network of suppliers and manufacturers worldwide for diverse product ranges.'
  },
  {
    icon: Shield,
    title: 'Quality Assurance',
    description: 'Rigorous quality control processes to ensure all products meet international standards.'
  }
];

export function MerchandisePage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-indigo-900 to-indigo-800 text-white">
        <div className="absolute inset-0 opacity-30">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070"
            alt="Retail merchandise"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="w-16 h-16 bg-indigo-600 rounded-lg flex items-center justify-center mx-auto mb-6"
          >
            <ShoppingBag className="h-8 w-8" />
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            General Merchandise
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-indigo-100 max-w-3xl mx-auto"
          >
            Comprehensive range of consumer and industrial products sourced globally, 
            offering quality merchandise solutions for diverse market needs and distribution channels.
          </motion.p>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
            >
              Product Categories
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              Diverse merchandise portfolio spanning consumer electronics, fashion, lifestyle, and industrial supplies.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {categories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-8 h-full hover:shadow-lg transition-shadow duration-300">
                  <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-lg flex items-center justify-center mb-6">
                    <category.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {category.title}
                  </h3>
                  <ul className="space-y-2 mb-4">
                    {category.items.map((item) => (
                      <li key={item} className="flex items-center text-sm text-gray-600">
                        <div className="w-2 h-2 bg-indigo-600 rounded-full mr-3"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <p className="text-gray-600 text-sm">
                    {category.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {advantages.map((advantage, index) => (
              <motion.div
                key={advantage.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start space-x-4"
              >
                <div className="w-10 h-10 bg-indigo-100 text-indigo-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <advantage.icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {advantage.title}
                  </h3>
                  <p className="text-gray-600">
                    {advantage.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
            >
              Our Distribution Process
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-xl text-gray-600"
            >
              Streamlined process from sourcing to delivery, ensuring quality and efficiency at every step.
            </motion.p>
          </div>

          <div className="space-y-12">
            {[
              {
                step: '01',
                title: 'Global Sourcing',
                description: 'Identifying and partnering with trusted suppliers worldwide for quality merchandise.'
              },
              {
                step: '02',
                title: 'Quality Control',
                description: 'Rigorous inspection and testing to ensure all products meet quality standards.'
              },
              {
                step: '03',
                title: 'Inventory Management',
                description: 'Efficient warehousing and inventory systems for optimal stock management.'
              },
              {
                step: '04',
                title: 'Distribution & Delivery',
                description: 'Fast and reliable distribution network to deliver products to your locations.'
              }
            ].map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} gap-8`}
              >
                <div className="flex-1">
                  <div className="text-4xl font-bold text-indigo-600 mb-2">{item.step}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
                <div className="w-24 h-24 bg-indigo-100 rounded-full flex items-center justify-center">
                  <div className="w-12 h-12 bg-indigo-600 rounded-full"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-8"
          >
            Why Choose Our Merchandise Services?
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-4xl font-bold text-indigo-600 mb-2">5000+</div>
              <div className="text-gray-600">Product Lines</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-4xl font-bold text-indigo-600 mb-2">30+</div>
              <div className="text-gray-600">Countries Served</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-4xl font-bold text-indigo-600 mb-2">48h</div>
              <div className="text-gray-600">Delivery Time</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-indigo-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Expand Your Product Range
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-indigo-100 mb-8"
          >
            Access thousands of quality products through our global merchandise network.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Button size="lg" variant="outline" className="border-white text-white bg-transparent hover:bg-white hover:text-indigo-600">
              <Link to="/contact">
                Browse Products
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}