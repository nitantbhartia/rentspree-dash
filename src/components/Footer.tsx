import { Building2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="bg-white border-t">
      <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex justify-center space-x-6 md:order-2">
          <Link to="/about" className="text-gray-600 hover:text-gray-900">
            About
          </Link>
          <Link to="/contact" className="text-gray-600 hover:text-gray-900">
            Contact
          </Link>
          <Link to="/privacy" className="text-gray-600 hover:text-gray-900">
            Privacy
          </Link>
          <Link to="/terms" className="text-gray-600 hover:text-gray-900">
            Terms
          </Link>
        </div>
        <div className="mt-8 md:order-1 md:mt-0">
          <Link to="/" className="flex items-center justify-center md:justify-start space-x-2">
            <Building2 className="h-6 w-6 text-blue-600" />
            <span className="text-xl font-bold text-gray-900">RentSpree</span>
          </Link>
          <p className="mt-2 text-center md:text-left text-xs leading-5 text-gray-500">
            &copy; {new Date().getFullYear()} RentSpree Clone. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}