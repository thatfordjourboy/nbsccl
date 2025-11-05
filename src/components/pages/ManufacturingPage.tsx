import { motion } from 'motion/react';
import { Factory, Cog, Cpu, Zap, Award, Shield } from 'lucide-react';
import { Card } from '../ui/card';
import { Button } from '../ui/button';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { Link } from 'react-router-dom';

const capabilities = [
  {
    icon: Cog,
    title: 'Precision Engineering',
    description: 'Advanced manufacturing processes with tight tolerances and quality control.'
  },
  {
    icon: Cpu,
    title: 'Technology Integration',
    description: 'State-of-the-art automation and IoT-enabled production systems.'
  },
  {
    icon: Zap,
    title: 'Custom Solutions',
    description: 'Tailored manufacturing solutions to meet specific client requirements.'
  },
  {
    icon: Award,
    title: 'Quality Assurance',
    description: 'ISO certified processes ensuring consistent high-quality output.'
  }
];

const industries = [
  {
    title: 'Automotive Components',
    description: 'High-precision parts for automotive industry with strict quality standards.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=2070'
  },
  {
    title: 'Electronics Manufacturing',
    description: 'Advanced electronic components and circuit board assembly services.',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070'
  },
  {
    title: 'Industrial Equipment',
    description: 'Heavy machinery components and industrial equipment manufacturing.',
    image: 'https://images.unsplash.com/photo-1565793298595-6a879b1d9492?q=80&w=2070'
  }
];

export function ManufacturingPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-red-900 to-red-800 text-white">
        <div className="absolute inset-0 opacity-30">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1565793298595-6a879b1d9492?q=80&w=2070"
            alt="Manufacturing facility"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="w-16 h-16 bg-red-600 rounded-lg flex items-center justify-center mx-auto mb-6"
          >
            <Factory className="h-8 w-8" />
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Advanced Manufacturing
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-red-100 max-w-3xl mx-auto"
          >
            State-of-the-art manufacturing capabilities across diverse industries, delivering 
            precision-engineered products with cutting-edge technology and quality assurance.
          </motion.p>
        </div>
      </section>

      {/* Capabilities Section */}
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
              Manufacturing Capabilities
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              Advanced manufacturing solutions powered by cutting-edge technology and decades of expertise.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {capabilities.map((capability, index) => (
              <motion.div
                key={capability.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-8 h-full hover:shadow-lg transition-shadow duration-300">
                  <div className="w-12 h-12 bg-red-100 text-red-600 rounded-lg flex items-center justify-center mb-4">
                    <capability.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {capability.title}
                  </h3>
                  <p className="text-gray-600">
                    {capability.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
            >
              Industries We Serve
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              Specialized manufacturing solutions across diverse industries with expertise in quality and precision.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <div className="relative h-48">
                    <ImageWithFallback
                      src={industry.image}
                      alt={industry.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                      {industry.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {industry.description}
                    </p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Standards */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-8"
          >
            Quality & Certifications
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-red-100 text-red-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8" />
              </div>
              <div className="text-lg font-semibold text-gray-900 mb-2">ISO 9001:2015</div>
              <div className="text-gray-600">Quality Management</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-red-100 text-red-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8" />
              </div>
              <div className="text-lg font-semibold text-gray-900 mb-2">ISO 14001</div>
              <div className="text-gray-600">Environmental Management</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-red-100 text-red-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Factory className="h-8 w-8" />
              </div>
              <div className="text-lg font-semibold text-gray-900 mb-2">Industry 4.0</div>
              <div className="text-gray-600">Smart Manufacturing</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-red-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Partner with Manufacturing Excellence
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-red-100 mb-8"
          >
            Experience precision manufacturing with advanced technology and quality assurance.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Button size="lg" variant="outline" className="border-white text-white bg-transparent hover:bg-white hover:text-red-600">
              <Link to="/contact">
                Request Manufacturing Quote
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}