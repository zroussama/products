import Link from 'next/link';
import { Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-100">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Qasr Zouina</h3>
            <p className="text-sm text-gray-600">
              Bringing the finest Moroccan products to Dubai and beyond.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-sm text-gray-600 hover:text-gray-900">Home</Link></li>
              <li><Link href="/products" className="text-sm text-gray-600 hover:text-gray-900">Products</Link></li>
              <li><Link href="/about" className="text-sm text-gray-600 hover:text-gray-900">About Us</Link></li>
              <li><Link href="/contact" className="text-sm text-gray-600 hover:text-gray-900">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <p className="text-sm text-gray-600">Business Bay, Dubai, UAE</p>
            <p className="text-sm text-gray-600">Phone: +971 XXXXXXXXX</p>
            <p className="text-sm text-gray-600">Email: info@qasrzouina.com</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-gray-900">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-200 pt-8 text-center">
          <p className="text-sm text-gray-600">
            © {new Date().getFullYear()} Qasr Zouina General Trade. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;