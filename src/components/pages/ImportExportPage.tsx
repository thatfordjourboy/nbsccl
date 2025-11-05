import { motion } from 'motion/react';
import { Plane, Ship, Truck, Globe, FileCheck, Clock } from 'lucide-react';
import { Card } from '../ui/card';
import { Button } from '../ui/button';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { Link } from 'react-router-dom';

const services = [
  {
    icon: Ship,
    title: 'Ocean Freight',
    description: 'Cost-effective sea transportation for large volume shipments worldwide.'
  },
  {
    icon: Plane,
    title: 'Air Freight',
    description: 'Fast and reliable air cargo services for time-sensitive deliveries.'
  },
  {
    icon: Truck,
    title: 'Land Transport',
    description: 'Efficient overland transportation and last-mile delivery solutions.'
  },
  {
    icon: FileCheck,
    title: 'Documentation',
    description: 'Complete handling of customs documentation and regulatory compliance.'
  }
];

const benefits = [
  {
    icon: Globe,
    title: 'Global Network',
    description: 'Extensive network of partners and agents in over 50 countries worldwide.'
  },
  {
    icon: Clock,
    title: 'Timely Delivery',
    description: 'Proven track record of on-time deliveries with real-time tracking updates.'
  }
];

export function ImportExportPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-purple-900 to-purple-800 text-white">
        <div className="absolute inset-0 opacity-30">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?q=80&w=2070"
            alt="Cargo ship at port"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="w-16 h-16 bg-purple-600 rounded-lg flex items-center justify-center mx-auto mb-6"
          >
            <Plane className="h-8 w-8" />
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Import & Export Solutions
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-purple-100 max-w-3xl mx-auto"
          >
            Comprehensive international trade services connecting businesses to global markets 
            through efficient logistics, customs handling, and supply chain management.
          </motion.p>
        </div>
      </section>

      {/* Services Section */}
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
              Comprehensive Trade Services
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              End-to-end international trade solutions designed to streamline your import and export operations.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-8 h-full hover:shadow-lg transition-shadow duration-300">
                  <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-lg flex items-center justify-center mb-4">
                    <service.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600">
                    {service.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start space-x-4"
              >
                <div className="w-10 h-10 bg-purple-100 text-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <benefit.icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600">
                    {benefit.description}
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
              How We Work
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-xl text-gray-600"
            >
              Streamlined process to ensure smooth international trade operations from start to finish.
            </motion.p>
          </div>

          <div className="space-y-12">
            {[
              {
                step: '01',
                title: 'Consultation & Planning',
                description: 'Understanding your requirements and developing a customized trade strategy.'
              },
              {
                step: '02',
                title: 'Documentation & Compliance',
                description: 'Handling all necessary paperwork and ensuring regulatory compliance.'
              },
              {
                step: '03',
                title: 'Logistics & Transportation',
                description: 'Coordinating the most efficient shipping and delivery methods.'
              },
              {
                step: '04',
                title: 'Tracking & Delivery',
                description: 'Real-time monitoring and successful delivery to final destination.'
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
                  <div className="text-4xl font-bold text-purple-600 mb-2">{item.step}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
                <div className="w-24 h-24 bg-purple-100 rounded-full flex items-center justify-center">
                  <div className="w-12 h-12 bg-purple-600 rounded-full"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-purple-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Expand Your Global Reach
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-purple-100 mb-8"
          >
            Let us handle your international trade operations while you focus on growing your business.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Button size="lg" variant="outline" className="border-white text-white bg-transparent hover:bg-white hover:text-purple-600">
              <Link to="/contact">
                Get Shipping Quote
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}