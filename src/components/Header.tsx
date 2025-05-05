import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '@/contexts/CartContext';
import { Button } from '@/components/ui/button';
import { ShoppingCart, Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const { totalItems } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="bg-[#fdf4cf] shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold text-brand-green">VitaMeal</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-brand-green font-medium">
              Home
            </Link>
            <Link to="/shop" className="text-gray-700 hover:text-brand-green font-medium">
              Shop
            </Link>
            <Link to="/how-it-works" className="text-gray-700 hover:text-brand-green font-medium">
              Wie es funktioniert
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-brand-green font-medium">
              Kontakt
            </Link>
            <Link to="/faq" className="text-gray-700 hover:text-brand-green font-medium">
              FAQ
            </Link>
          </nav>

          {/* User Actions */}
          <div className="flex items-center space-x-4">
            {/* Account Link (non-functional as per requirements) */}
            <Button variant="ghost" className="hidden md:flex items-center">
              <span>Konto</span>
            </Button>
            
            {/* Cart */}
            <Link to="/cart" className="relative">
              <Button variant="ghost" className="relative">
                <ShoppingCart className="h-6 w-6" />
                {totalItems > 0 && (
                  <span className="absolute -top-2 -right-2 bg-brand-green text-[#fdf4cf] rounded-full w-5 h-5 flex items-center justify-center text-xs">
                    {totalItems}
                  </span>
                )}
              </Button>
            </Link>
            
            {/* Mobile Menu Toggle */}
            <Button
              variant="ghost"
              className="md:hidden"
              onClick={toggleMobileMenu}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-4">
            <ul className="flex flex-col space-y-4">
              <li>
                <Link 
                  to="/" 
                  className="block text-gray-700 hover:text-brand-green font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  to="/shop" 
                  className="block text-gray-700 hover:text-brand-green font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Shop
                </Link>
              </li>
              <li>
                <Link 
                  to="/how-it-works" 
                  className="block text-gray-700 hover:text-brand-green font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Wie es funktioniert
                </Link>
              </li>
              <li>
                <Link 
                  to="/contact" 
                  className="block text-gray-700 hover:text-brand-green font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Kontakt
                </Link>
              </li>
              <li>
                <Link 
                  to="/faq" 
                  className="block text-gray-700 hover:text-brand-green font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link 
                  to="#" 
                  className="block text-gray-700 hover:text-brand-green font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Konto
                </Link>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
