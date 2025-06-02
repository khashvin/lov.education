import { useState, useEffect } from 'react';
import { Link } from '@tanstack/react-router';

// NavLink component for desktop navigation
function NavLink({ to, label }: { to: string; label: string }) {
  return (
    <Link
      to={to}
      activeProps={{ className: 'text-[#89c540] font-medium' }}
      className="group relative rounded-lg px-4 py-2 font-medium text-gray-700 transition-colors duration-300 hover:bg-gray-50 hover:text-[#89c540]"
    >
      {label}
      <span className="absolute bottom-0 left-1/2 h-0.5 w-0 -translate-x-1/2 transform bg-[#89c540] transition-all duration-300 group-hover:w-3/4"></span>
    </Link>
  );
}

// MobileNavLink component for mobile navigation
function MobileNavLink({
  to,
  label,
  onClick,
}: {
  to: string;
  label: string;
  onClick: () => void;
}) {
  return (
    <Link
      to={to}
      activeProps={{ className: 'text-[#89c540] bg-gray-50' }}
      className="block rounded-lg px-4 py-3 font-medium text-gray-700 transition-colors duration-300 hover:bg-gray-50 hover:text-[#89c540]"
      onClick={onClick}
    >
      {label}
    </Link>
  );
}

export function Navigation() {
  // State for mobile menu
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  // State for sticky header
  const [isSticky, setIsSticky] = useState(false);

  // Handle scroll for sticky header
  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      className={`bg-white shadow-md transition-all duration-300 ${isSticky ? 'animate-slideDown fixed top-0 right-0 left-0 shadow-lg' : ''}`}
    >
      <div className="container mx-auto px-4">
        <div
          className={`flex items-center justify-between ${isSticky ? 'py-2' : 'py-4'} transition-all duration-300`}
        >
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <img
                src="/logo-header.png"
                alt="Literacy of Virtue"
                className={`transition-all duration-300 ${isSticky ? 'h-10 md:h-12' : 'h-16 md:h-20'}`}
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden items-center space-x-1 md:flex">
            <NavLink to="/" label="Home" />
            <NavLink to="/about" label="About us" />
            <NavLink to="/university" label="Universities" />
            <NavLink to="/contact" label="Contact Us" />
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              className={`rounded-full p-2 text-gray-700 transition-all duration-300 hover:bg-gray-100 hover:text-[#89c540] focus:outline-none ${isSticky ? 'text-sm' : 'text-xl'}`}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <i className="fas fa-times"></i>
              ) : (
                <i className="fas fa-bars"></i>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="animate-slideDown border-t border-gray-200 bg-white md:hidden">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-2">
              <MobileNavLink
                to="/"
                label="Home"
                onClick={() => setMobileMenuOpen(false)}
              />
              <MobileNavLink
                to="/about"
                label="About us"
                onClick={() => setMobileMenuOpen(false)}
              />
              <MobileNavLink
                to="/university"
                label="Universities"
                onClick={() => setMobileMenuOpen(false)}
              />
              <MobileNavLink
                to="/contact"
                label="Contact Us"
                onClick={() => setMobileMenuOpen(false)}
              />
            </nav>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navigation;
