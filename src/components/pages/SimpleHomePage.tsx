import { Link } from 'react-router-dom';
import { ArrowRight, Building, Package, Plane, Coins, Factory, ShoppingBag } from 'lucide-react';
import { Button } from '../ui/button';
import { Card } from '../ui/card';
import { ImageWithFallback } from '../figma/ImageWithFallback';

const services = [
  {
    icon: Building,
    title: 'Construction',
    description: 'Comprehensive construction services from residential to commercial projects.',
    href: '/construction',
    color: 'bg-blue-50 text-blue-600'
  },
  {
    icon: Package,
    title: 'Commodities', 
    description: 'Trading in essential commodities including agricultural and industrial materials.',
    href: '/commodities',
    color: 'bg-green-50 text-green-600'
  },
  {
    icon: Plane,
    title: 'Import & Export',
    description: 'Global trade solutions with expertise in international logistics.',
    href: '/import-export',
    color: 'bg-purple-50 text-purple-600'
  },
  {
    icon: Coins,
    title: 'Gold Purchasing',
    description: 'Professional gold procurement and trading services.',
    href: '/gold',
    color: 'bg-yellow-50 text-yellow-600'
  },
  {
    icon: Factory,
    title: 'Manufacturing',
    description: 'State-of-the-art manufacturing capabilities across diverse industries.',
    href: '/manufacturing',
    color: 'bg-red-50 text-red-600'
  },
  {
    icon: ShoppingBag,
    title: 'General Merchandise',
    description: 'Wide range of consumer and industrial products for global distribution.',
    href: '/merchandise',
    color: 'bg-indigo-50 text-indigo-600'
  }
];

export function SimpleHomePage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070"
            alt="Modern cityscape"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        </div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            Building Tomorrow's
            <span className="block text-blue-400">Global Economy</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            NB Sebastian Commodities Company Ltd. - Leading international corporation specializing in construction, commodities, manufacturing, 
            and global trade solutions with over two decades of excellence.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
              <Link to="/about" className="flex items-center">
                Discover Our Story
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white bg-transparent hover:bg-white hover:text-gray-900">
              <Link to="/contact">Get In Touch</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Business Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From construction to commodities, we deliver excellence across diverse industries 
              with a commitment to quality, innovation, and global reach.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Card key={service.title} className="p-6 h-full hover:shadow-lg transition-shadow duration-300 group cursor-pointer">
                <Link to={service.href} className="block h-full">
                  <div className={`w-12 h-12 rounded-lg ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {service.description}
                  </p>
                  <div className="flex items-center text-blue-600 group-hover:translate-x-2 transition-transform duration-300">
                    <span className="text-sm font-medium">Learn More</span>
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </div>
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">25+</div>
              <div className="text-gray-600">Years of Excellence</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">50+</div>
              <div className="text-gray-600">Countries Served</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">1000+</div>
              <div className="text-gray-600">Successful Projects</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Start Your Next Project?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Let's discuss how our expertise can drive your business forward.
          </p>
          <Button size="lg" variant="outline" className="border-white text-white bg-transparent hover:bg-white hover:text-blue-600">
            <Link to="/contact" className="flex items-center">
              Contact Us Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}