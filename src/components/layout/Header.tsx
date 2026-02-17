import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import MegaMenu from './MegaMenu';
import logo from '@/assets/logo.svg';

const navItems = [
  { name: 'Expertises', href: '/rechtsgebieden', hasMegaMenu: true },
  { 
    name: 'Over ons', 
    href: '/over-ons', 
    hasDropdown: true,
    dropdownItems: [
      { name: 'Missie & Visie', href: '/over-ons/missie-visie' },
      { name: 'Wie zijn wij', href: '/over-ons' },
      { name: 'Werkwijze', href: '/werkwijze' },
      { name: 'Tarieven', href: '/tarieven' },
    ]
  },
  { name: 'Ons team', href: '/over-ons/team' },
  { name: 'Vacatures', href: '/vacatures' },
  { name: 'Blogs', href: '/blog' },
];
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsMegaMenuOpen(false);
    setOpenDropdown(null);
  }, [location]);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-background/95 backdrop-blur-md shadow-soft' 
          : 'bg-background'
      }`}
    >
      <div className="container-editorial">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <img 
              src={logo} 
              alt="HBM Juristen - Juridisch advies & rechtsbijstand" 
              className="h-10 w-auto"
            />
          </Link>

          {/* Desktop Navigation + CTA */}
          <div className="hidden lg:flex items-center gap-1 ml-auto">
            <nav className="flex items-center gap-1">
              {navItems.map((item) => (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => {
                    if (item.hasMegaMenu) setIsMegaMenuOpen(true);
                    if (item.hasDropdown) setOpenDropdown(item.name);
                  }}
                  onMouseLeave={() => {
                    if (item.hasMegaMenu) setIsMegaMenuOpen(false);
                    if (item.hasDropdown) setOpenDropdown(null);
                  }}
                >
                  <Link
                    to={item.href}
                    className={`flex items-center gap-1 px-4 py-2 text-sm font-medium transition-colors ${
                      location.pathname === item.href || location.pathname.startsWith(item.href + '/')
                        ? 'text-primary'
                        : 'text-foreground hover:text-primary'
                    }`}
                  >
                    {item.name}
                    {(item.hasMegaMenu || item.hasDropdown) && (
                      <ChevronDown 
                        className={`w-4 h-4 transition-transform ${
                          (item.hasMegaMenu && isMegaMenuOpen) || (item.hasDropdown && openDropdown === item.name) ? 'rotate-180' : ''
                        }`} 
                      />
                    )}
                  </Link>
                  
                  {/* Dropdown for Over ons */}
                  {item.hasDropdown && item.dropdownItems && (
                    <AnimatePresence>
                      {openDropdown === item.name && (
                        <motion.div
                          initial={{ opacity: 0, y: -5 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -5 }}
                          transition={{ duration: 0.15 }}
                          className="absolute top-full left-0 mt-1 w-56 bg-background rounded-lg shadow-large border border-border z-[100] py-2"
                        >
                          {item.dropdownItems.map((dropdownItem) => (
                            <Link
                              key={dropdownItem.name}
                              to={dropdownItem.href}
                              className="block px-4 py-2.5 text-sm text-foreground hover:bg-secondary hover:text-primary transition-colors"
                            >
                              {dropdownItem.name}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </div>
              ))}
            </nav>
            <Button variant="cta" size="lg" className="ml-4" asChild>
              <Link to="/contact">Neem contact op</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-foreground"
            aria-label={isMobileMenuOpen ? 'Sluit menu' : 'Open menu'}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mega Menu */}
      <div
        onMouseEnter={() => setIsMegaMenuOpen(true)}
        onMouseLeave={() => setIsMegaMenuOpen(false)}
      >
        <MegaMenu isOpen={isMegaMenuOpen} onClose={() => setIsMegaMenuOpen(false)} />
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-background border-t border-border overflow-hidden"
          >
            <nav className="container-editorial py-6">
              <ul className="space-y-1">
                {navItems.map((item) => (
                  <li key={item.name}>
                    <Link
                      to={item.href}
                      className={`block py-3 px-4 text-base font-medium rounded-lg transition-colors ${
                        location.pathname === item.href
                          ? 'text-primary bg-secondary'
                          : 'text-foreground hover:bg-secondary'
                      }`}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="mt-6 pt-6 border-t border-border">
                <Button variant="cta" size="lg" className="w-full" asChild>
                  <Link to="/contact">Neem contact op</Link>
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
