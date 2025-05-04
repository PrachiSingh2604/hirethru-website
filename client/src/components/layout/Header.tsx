import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import logoImage from "../../assets/logo.png";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className={`bg-white shadow-sm sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'shadow-md' : 'shadow-sm'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-2">
              <img src={logoImage} alt="HireThru Logo" className="h-12" />
            </Link>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              type="button" 
              className="text-gray-500 hover:text-gray-700 focus:outline-none"
              onClick={toggleMobileMenu} 
              aria-label="Toggle mobile menu"
            >
              <i className="fa-solid fa-bars text-xl"></i>
            </button>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-primary font-medium hover:text-primary transition">Home</a>
            <a href="#services" className="text-gray-700 font-medium hover:text-primary transition">Services</a>
            <a href="#why-choose-us" className="text-gray-700 font-medium hover:text-primary transition">Why Choose Us</a>
            <a href="#process" className="text-gray-700 font-medium hover:text-primary transition">Our Process</a>
            <a href="#clients" className="text-gray-700 font-medium hover:text-primary transition">Clients</a>
            <a href="#contact" className="text-gray-700 font-medium hover:text-primary transition">Contact</a>
          </nav>
          
          <div className="hidden md:block">
            <Button className="shadow-sm text-white bg-primary hover:bg-primary/90">
              Get Started
            </Button>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      <div className={`md:hidden ${mobileMenuOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t">
          <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-primary">Home</a>
          <a href="#services" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50">Services</a>
          <a href="#why-choose-us" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50">Why Choose Us</a>
          <a href="#process" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50">Our Process</a>
          <a href="#clients" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50">Clients</a>
          <a href="#contact" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50">Contact</a>
          <a href="#contact" className="block w-full text-center px-4 py-2 mt-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary/90">
            Get Started
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
