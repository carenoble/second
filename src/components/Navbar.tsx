import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, Heart } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/60 backdrop-blur-md border-b border-white/30 shadow-md py-2' 
          : 'bg-white/30 backdrop-blur-md py-4'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2" onClick={closeMenu}>
            <Heart className="h-8 w-8 text-primary-600" />
            <span className="text-xl font-bold text-primary-900">CareNoble</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <NavLink 
              to="/" 
              className={({ isActive }) => 
                `text-sm font-semibold transition-colors text-shadow ${
                  isActive 
                    ? 'text-primary-700' 
                    : isScrolled 
                      ? 'text-neutral-900 hover:text-primary-600' 
                      : 'text-neutral-900 hover:text-primary-600'
                }`
              }
            >
              Home
            </NavLink>
            <NavLink 
              to="/about" 
              className={({ isActive }) => 
                `text-sm font-semibold transition-colors text-shadow ${
                  isActive 
                    ? 'text-primary-700' 
                    : isScrolled 
                      ? 'text-neutral-900 hover:text-primary-600' 
                      : 'text-neutral-900 hover:text-primary-600'
                }`
              }
            >
              About Us
            </NavLink>
            <NavLink 
              to="/services" 
              className={({ isActive }) => 
                `text-sm font-semibold transition-colors text-shadow ${
                  isActive 
                    ? 'text-primary-700' 
                    : isScrolled 
                      ? 'text-neutral-900 hover:text-primary-600' 
                      : 'text-neutral-900 hover:text-primary-600'
                }`
              }
            >
              Services
            </NavLink>
            <NavLink 
              to="/blog" 
              className={({ isActive }) => 
                `text-sm font-semibold transition-colors text-shadow ${
                  isActive 
                    ? 'text-primary-700' 
                    : isScrolled 
                      ? 'text-neutral-900 hover:text-primary-600' 
                      : 'text-neutral-900 hover:text-primary-600'
                }`
              }
            >
              Blog
            </NavLink>
            <NavLink 
              to="/contact" 
              className={({ isActive }) => 
                `text-sm font-semibold transition-colors text-shadow ${
                  isActive 
                    ? 'text-primary-700' 
                    : isScrolled 
                      ? 'text-neutral-900 hover:text-primary-600' 
                      : 'text-neutral-900 hover:text-primary-600'
                }`
              }
            >
              Contact Us
            </NavLink>
          </nav>

          {/* Contact Button */}
          <Link 
            to="/contact" 
            className="hidden md:block bg-primary-600 hover:bg-primary-700 text-white font-medium py-2 px-4 rounded-lg transition-colors"
          >
            Get in Touch
          </Link>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-neutral-800"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-neutral-200 absolute w-full left-0 top-full shadow-lg">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <NavLink 
              to="/" 
              className={({ isActive }) => 
                `block py-2 px-4 text-sm font-medium ${isActive ? 'text-primary-700 bg-primary-50 rounded' : 'text-neutral-800'}`
              }
              onClick={closeMenu}
            >
              Home
            </NavLink>
            <NavLink 
              to="/about" 
              className={({ isActive }) => 
                `block py-2 px-4 text-sm font-medium ${isActive ? 'text-primary-700 bg-primary-50 rounded' : 'text-neutral-800'}`
              }
              onClick={closeMenu}
            >
              About Us
            </NavLink>
            <NavLink 
              to="/services" 
              className={({ isActive }) => 
                `block py-2 px-4 text-sm font-medium ${isActive ? 'text-primary-700 bg-primary-50 rounded' : 'text-neutral-800'}`
              }
              onClick={closeMenu}
            >
              Services
            </NavLink>
            <NavLink 
              to="/blog" 
              className={({ isActive }) => 
                `block py-2 px-4 text-sm font-medium ${isActive ? 'text-primary-700 bg-primary-50 rounded' : 'text-neutral-800'}`
              }
              onClick={closeMenu}
            >
              Blog
            </NavLink>
            <NavLink 
              to="/contact" 
              className={({ isActive }) => 
                `block py-2 px-4 text-sm font-medium ${isActive ? 'text-primary-700 bg-primary-50 rounded' : 'text-neutral-800'}`
              }
              onClick={closeMenu}
            >
              Contact Us
            </NavLink>
            <Link 
              to="/contact" 
              className="bg-primary-600 hover:bg-primary-700 text-white font-medium py-2 px-4 rounded-lg transition-colors text-center"
              onClick={closeMenu}
            >
              Get in Touch
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;