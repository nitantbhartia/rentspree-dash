import { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Building2, Menu, X, ChevronDown } from 'lucide-react';

const navigation = {
  Products: [
    { name: 'Tenant Screening', href: '/screening' },
    { name: 'Rental Applications', href: '/applications' },
    { name: 'Property Management', href: '/management' },
    { name: 'Document Signing', href: '/documents' },
    { name: 'Rent Collection', href: '/payments' },
  ],
  'Who We Serve': [
    { name: 'Property Managers', href: '/for-managers' },
    { name: 'Real Estate Agents', href: '/for-agents' },
    { name: 'Landlords', href: '/for-landlords' },
    { name: 'Tenants', href: '/for-tenants' },
  ],
  Pricing: [
    { name: 'Screening Packages', href: '/pricing/screening' },
    { name: 'Enterprise Plans', href: '/pricing/enterprise' },
    { name: 'Compare Plans', href: '/pricing/compare' },
  ],
  Resources: [
    { name: 'Blog', href: '/blog' },
    { name: 'Help Center', href: '/help' },
    { name: 'Market Reports', href: '/reports' },
    { name: 'Rental Forms', href: '/forms' },
    { name: 'Landlord Tools', href: '/tools' },
  ],
};

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleNavigation = (href: string) => {
    navigate(href);
    setIsMenuOpen(false);
    setActiveDropdown(null);
  };

  const toggleDropdown = (menu: string) => {
    setActiveDropdown(activeDropdown === menu ? null : menu);
  };

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center space-x-8">
            <Link to="/" className="flex items-center space-x-2">
              <Building2 className="h-8 w-8" style={{ color: '#1f15e1' }} />
              <span className="text-xl font-bold text-gray-900">RentSpree</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex md:items-center md:space-x-6" ref={dropdownRef}>
              {Object.entries(navigation).map(([category, items]) => (
                <div key={category} className="relative">
                  <button
                    onClick={() => toggleDropdown(category)}
                    className="flex items-center space-x-1 text-gray-700 hover:text-[#1f15e1]"
                  >
                    <span>{category}</span>
                    <ChevronDown className="h-4 w-4" />
                  </button>
                  {activeDropdown === category && (
                    <div className="absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                      <div className="py-1">
                        {items.map((item) => (
                          <button
                            key={item.name}
                            onClick={() => handleNavigation(item.href)}
                            className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          >
                            {item.name}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="hidden md:flex md:items-center md:space-x-4">
            <Link
              to="/login"
              className="text-gray-700 hover:text-[#1f15e1]"
            >
              Sign In
            </Link>
            <Link
              to="/signup"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-[#1f15e1] hover:bg-[#1f15e1]/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#1f15e1]"
            >
              Sign Up for Free
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="pt-2 pb-3 space-y-1">
            {Object.entries(navigation).map(([category, items]) => (
              <div key={category} className="px-4">
                <div className="text-sm font-medium text-gray-500 py-2">
                  {category}
                </div>
                {items.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => handleNavigation(item.href)}
                    className="block w-full text-left py-2 pl-4 text-base text-gray-700 hover:text-[#1f15e1]"
                  >
                    {item.name}
                  </button>
                ))}
              </div>
            ))}
            <div className="px-4 py-4 space-y-4">
              <Link
                to="/login"
                onClick={() => setIsMenuOpen(false)}
                className="block text-center px-4 py-2 text-base font-medium text-gray-700 hover:text-[#1f15e1]"
              >
                Sign In
              </Link>
              <Link
                to="/signup"
                onClick={() => setIsMenuOpen(false)}
                className="block text-center px-4 py-2 text-base font-medium text-white bg-[#1f15e1] hover:bg-[#1f15e1]/90 rounded-md"
              >
                Sign Up for Free
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}