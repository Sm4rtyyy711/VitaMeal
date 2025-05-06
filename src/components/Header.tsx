
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart, Menu, X, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/contexts/CartContext';
import { useIsMobile } from '@/hooks/use-mobile';
import LoginPopup from './LoginPopup';
import RegisterPopup from './RegisterPopup';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header: React.FC = () => {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { items } = useCart();
  const isMobile = useIsMobile();
  
  const cartItemsCount = items.reduce((total, item) => total + item.quantity, 0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Close menu when route changes
  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/shop', label: 'Shop' },
    { to: '/how-it-works', label: 'Wie es funktioniert' },
    { to: '/faq', label: 'FAQ' },
    { to: '/contact', label: 'Kontakt' },
  ];

  const headerClass = `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
    isScrolled || menuOpen ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
  }`;
  
  const textColorClass = isScrolled || menuOpen || location.pathname !== '/' 
    ? 'text-gray-800' 
    : 'text-[#fdf4cf]';

  const logoSrc = isScrolled || menuOpen || location.pathname !== '/'
    ? '/lovable-uploads/5f5789f0-b5b2-4af1-b88e-80801b43c2df.png'
    : '/lovable-uploads/5f5789f0-b5b2-4af1-b88e-80801b43c2df.png'; // Same logo, but you could use a white version if needed

  return (
    <header className={headerClass}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img src={logoSrc} alt="VitaMeal Logo" className="h-8 mr-2" />
          <span className={`text-lg font-bold ${textColorClass}`}>VitaMeal</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`${textColorClass} hover:text-brand-green transition-colors ${
                location.pathname === link.to ? 'font-semibold' : ''
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center">
          {/* User Account Dropdown (Desktop) */}
          <div className="hidden md:block mr-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className={`${textColorClass} hover:bg-gray-100 hover:text-brand-green`}>
                  <User className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem asChild>
                  <LoginPopup 
                    trigger={
                      <button className="w-full text-left cursor-pointer">Anmelden</button>
                    } 
                  />
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <RegisterPopup 
                    trigger={
                      <button className="w-full text-left cursor-pointer">Registrieren</button>
                    } 
                  />
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          
          {/* Cart */}
          <Link to="/cart" className="relative mr-2 md:mr-0">
            <Button variant="ghost" size="icon" className={`${textColorClass} hover:bg-gray-100 hover:text-brand-green`}>
              <ShoppingCart className="h-5 w-5" />
              {cartItemsCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-brand-green text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                  {cartItemsCount}
                </span>
              )}
            </Button>
          </Link>
          
          {/* Mobile Menu Toggle */}
          <Button
            variant="ghost"
            size="icon"
            className={`ml-2 md:hidden ${textColorClass}`}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t mt-2 py-4 px-4 shadow-lg">
          <nav className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`text-gray-800 hover:text-brand-green transition-colors ${
                  location.pathname === link.to ? 'font-semibold' : ''
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-2 border-t">
              <LoginPopup 
                trigger={
                  <Button 
                    variant="ghost" 
                    className="w-full justify-start text-gray-800 hover:text-brand-green mb-2"
                  >
                    Anmelden
                  </Button>
                } 
              />
              <RegisterPopup 
                trigger={
                  <Button 
                    variant="ghost" 
                    className="w-full justify-start text-gray-800 hover:text-brand-green"
                  >
                    Registrieren
                  </Button>
                } 
              />
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
