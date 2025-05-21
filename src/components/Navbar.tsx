
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Services', href: '#services' },
  { name: 'Portfolio', href: '#portfolio' },
  { name: 'Pricing', href: '#pricing' },
  { name: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <header
      className={cn(
        'fixed top-0 w-full z-50 transition-all duration-300',
        scrolled
          ? 'bg-meduza-darker/80 backdrop-blur-md py-3'
          : 'bg-transparent py-6'
      )}
    >
      <div className="container mx-auto flex justify-between items-center px-4">
        <a href="#home" className="flex items-center space-x-2">
          <span className="text-xl font-display font-bold text-white">
            <span className="text-meduza-green">MEDUZA</span> Creations
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex">
          <ul className="flex space-x-10">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="text-white hover:text-meduza-green text-sm font-medium link-underline"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white hover:text-meduza-green focus:outline-none"
          onClick={() => setMobileNavOpen(!mobileNavOpen)}
          aria-label="Toggle menu"
        >
          {mobileNavOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Navigation */}
        <div
          className={cn(
            'fixed inset-0 bg-meduza-darker/95 z-50 flex flex-col justify-center items-center md:hidden transition-opacity duration-300',
            mobileNavOpen
              ? 'opacity-100 pointer-events-auto'
              : 'opacity-0 pointer-events-none'
          )}
        >
          <nav>
            <ul className="flex flex-col space-y-8 items-center">
              {navLinks.map((link) => (
                <li key={link.name} className="overflow-hidden">
                  <a
                    href={link.href}
                    className="text-white hover:text-meduza-green text-2xl font-medium"
                    onClick={() => setMobileNavOpen(false)}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
