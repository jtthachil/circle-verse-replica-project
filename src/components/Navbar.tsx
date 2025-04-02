
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-circle-purple">
              Circle
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-10">
            <Link to="/" className="font-medium text-gray-700 hover:text-circle-purple transition-colors">
              Home
            </Link>
            <Link to="/services" className="font-medium text-gray-700 hover:text-circle-purple transition-colors">
              Services
            </Link>
            <Link to="/work" className="font-medium text-gray-700 hover:text-circle-purple transition-colors">
              Our Work
            </Link>
            <Link to="/about" className="font-medium text-gray-700 hover:text-circle-purple transition-colors">
              About Us
            </Link>
            <Button className="bg-circle-purple hover:bg-circle-purple/90 circle-btn">
              Contact Us
            </Button>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-gray-700">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 bg-white">
            <div className="flex flex-col space-y-4">
              <Link to="/" className="font-medium text-gray-700 hover:text-circle-purple transition-colors py-2">
                Home
              </Link>
              <Link to="/services" className="font-medium text-gray-700 hover:text-circle-purple transition-colors py-2">
                Services
              </Link>
              <Link to="/work" className="font-medium text-gray-700 hover:text-circle-purple transition-colors py-2">
                Our Work
              </Link>
              <Link to="/about" className="font-medium text-gray-700 hover:text-circle-purple transition-colors py-2">
                About Us
              </Link>
              <Button className="bg-circle-purple hover:bg-circle-purple/90 circle-btn w-full">
                Contact Us
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
