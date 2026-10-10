import { Link } from 'react-router-dom';
import { Building2, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Building2 className="h-6 w-6" />
              <span className="font-semibold text-lg">NB Sebastian</span>
            </div>
            <p className="text-gray-300 text-sm">
              NB Sebastian Commodities Company Ltd. - Leading the way in construction, commodities, manufacturing, and international trade with over two decades of excellence.
            </p>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="font-semibold">Our Services</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/construction" className="text-gray-300 hover:text-white transition-colors">Construction</Link></li>
              <li><Link to="/commodities" className="text-gray-300 hover:text-white transition-colors">Commodities</Link></li>
              <li><Link to="/import-export" className="text-gray-300 hover:text-white transition-colors">Import & Export</Link></li>
              <li><Link to="/gold" className="text-gray-300 hover:text-white transition-colors">Gold Purchasing</Link></li>
              <li><Link to="/manufacturing" className="text-gray-300 hover:text-white transition-colors">Manufacturing</Link></li>
              <li><Link to="/merchandise" className="text-gray-300 hover:text-white transition-colors">General Merchandise</Link></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-semibold">Contact Info</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-gray-400 shrink-0" />
                <span className="text-gray-300">Behind Inkoom Hospital, Spintex Road (G6-166-0779)</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-gray-400" />
                <a href="tel:+233200252498" className="text-gray-300 hover:text-white">+233 200252498</a>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-gray-400" />
                <a href="tel:+233550974525" className="text-gray-300 hover:text-white">+233 550974525</a>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-gray-400" />
                <a href="mailto:info@nbsebastian.com" className="text-gray-300 hover:text-white">info@nbsebastian.com</a>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-gray-400" />
                <a href="mailto:sales@nbsebastian.com" className="text-gray-300 hover:text-white">sales@nbsebastian.com</a>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-gray-400" />
                <a href="mailto:nbsebastianccl@gmail.com" className="text-gray-300 hover:text-white">nbsebastianccl@gmail.com</a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} NB Sebastian Commodities Company Ltd. All rights reserved.
            </p>
            <nav aria-label="Legal" className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">Terms of Service</Link>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}