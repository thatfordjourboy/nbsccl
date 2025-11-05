import { motion } from 'motion/react';
import { Package, Wheat, Zap, Wrench, TrendingUp, Shield } from 'lucide-react';
import { Card } from '../ui/card';
import { Button } from '../ui/button';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { Link } from 'react-router-dom';

const commodities = [
  {
    icon: Wheat,
    title: 'Agricultural Products',
    items: ['Grains & Cereals', 'Coffee & Cocoa', 'Sugar & Spices', 'Livestock Feed'],
    description: 'Essential agricultural commodities sourced from premium global suppliers.'
  },
  {
    icon: Zap,
    title: 'Energy Resources',
    items: ['Crude Oil', 'Natural Gas', 'Coal', 'Renewable Energy'],
    description: 'Reliable energy commodities to power industries and communities worldwide.'
  },
  {
    icon: Wrench,
    title: 'Industrial Materials',
    items: ['Steel & Metals', 'Chemicals', 'Plastics', 'Textiles'],
    description: 'High-quality industrial materials for manufacturing and construction sectors.'
  }
];

const advantages = [
  {
    icon: TrendingUp,
    title: 'Market Intelligence',
    description: 'Deep market insights and analysis to optimize your commodity trading strategies.'
  },
  {
    icon: Shield,
    title: 'Risk Management',
    description: 'Comprehensive risk assessment and mitigation strategies for secure trading.'
  }
];

export function CommoditiesPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-green-900 to-green-800 text-white">
        <div className="absolute inset-0 opacity-30">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1586953208448-b95a79798f07?q=80&w=2070"
            alt="Agricultural commodities"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="w-16 h-16 bg-green-600 rounded-lg flex items-center justify-center mx-auto mb-6"
          >
            <Package className="h-8 w-8" />
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Commodities Trading
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-green-100 max-w-3xl mx-auto"
          >
            Global commodity trading expertise spanning agricultural products, energy resources, 
            and industrial materials with reliable supply chains and competitive pricing.
          </motion.p>
        </div>
      </section>

      {/* Commodities Section */}
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
              Our Commodity Portfolio
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              Comprehensive range of commodities backed by strong global partnerships and efficient logistics networks.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {commodities.map((commodity, index) => (
              <motion.div
                key={commodity.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-8 h-full hover:shadow-lg transition-shadow duration-300">
                  <div className="w-12 h-12 bg-green-100 text-green-600 rounded-lg flex items-center justify-center mb-6">
                    <commodity.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {commodity.title}
                  </h3>
                  <ul className="space-y-2 mb-4">
                    {commodity.items.map((item) => (
                      <li key={item} className="flex items-center text-sm text-gray-600">
                        <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <p className="text-gray-600 text-sm">
                    {commodity.description}
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
                <div className="w-10 h-10 bg-green-100 text-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
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

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-green-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Partner with Us for Commodity Trading
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-green-100 mb-8"
          >
            Access global markets with our expertise in commodity trading and supply chain management.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Button size="lg" variant="outline" className="border-white text-white bg-transparent hover:bg-white hover:text-green-600">
              <Link to="/contact">
                Get Trading Quotes
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}