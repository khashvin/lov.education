import {
  Outlet,
  HeadContent,
  Scripts,
  createRootRouteWithContext,
  Link,
} from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { useState, useEffect } from 'react'

import appCss from '../styles.css?url'

import type { QueryClient } from '@tanstack/react-query'
interface MyRouterContext {
  queryClient: QueryClient
}

// NavLink component for desktop navigation
function NavLink({ to, label }: { to: string; label: string }) {
  return (
    <Link
      to={to}
      activeProps={{ className: 'text-[#89c540] font-medium' }}
      className="relative px-4 py-2 text-gray-700 font-medium hover:text-[#89c540] transition-colors duration-300 group rounded-lg hover:bg-gray-50"
    >
      {label}
      <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-[#89c540] group-hover:w-3/4 transition-all duration-300"></span>
    </Link>
  );
}

// MobileNavLink component for mobile navigation
function MobileNavLink({ to, label, onClick }: { to: string; label: string; onClick: () => void }) {
  return (
    <Link
      to={to}
      activeProps={{ className: 'text-[#89c540] bg-gray-50' }}
      className="px-4 py-3 text-gray-700 font-medium hover:text-[#89c540] hover:bg-gray-50 transition-colors duration-300 rounded-lg block"
      onClick={onClick}
    >
      {label}
    </Link>
  );
}

// Root document component
function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
        <style>
          {`
            @keyframes slideDown {
              0% {
                transform: translateY(-100%);
                opacity: 0;
              }
              100% {
                transform: translateY(0);
                opacity: 1;
              }
            }
            .animate-slideDown {
              animation: slideDown 0.3s ease-in-out forwards;
            }
          `}
        </style>
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  )
}

export const Route = createRootRouteWithContext<MyRouterContext>()({
  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        title: 'Literacy of Virtue - Education Consultancy',
      },
      {
        name: 'description',
        content: 'Expert education consultancy services for international students',
      },
    ],
    links: [
      {
        rel: 'stylesheet',
        href: appCss,
      },
      {
        rel: 'stylesheet',
        href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css',
      },
    ],
  }),

  component: () => {
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
      <RootDocument>
        <div className="min-h-screen flex flex-col">
          <header className="w-full z-50">
            {/* Top Bar */}
            <div className="bg-[#001e57]">
              <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between py-3">
                  {/* Left Side */}
                  <div className="flex items-center space-x-6 justify-center md:justify-start mb-2 md:mb-0">
                    <span className="text-sm tracking-wide text-white/90 font-medium">Knowledge of Excellency</span>
                    <div className="flex space-x-4">
                      <a 
                        href="https://facebook.com/literacyofvirtue" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-white/90 hover:text-[#89c540] transition-colors duration-300 w-8 h-8 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20"
                        aria-label="Facebook"
                      >
                        <i className="fab fa-facebook-f"></i>
                      </a>
                      <a 
                        href="https://instagram.com/literacyofvirtue" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-white/90 hover:text-[#89c540] transition-colors duration-300 w-8 h-8 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20"
                        aria-label="Instagram"
                      >
                        <i className="fab fa-instagram"></i>
                      </a>
                      <a 
                        href="https://wa.me/60124209899" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-white/90 hover:text-[#89c540] transition-colors duration-300 w-8 h-8 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20"
                        aria-label="WhatsApp"
                      >
                        <i className="fab fa-whatsapp"></i>
                      </a>
                    </div>
                  </div>
                  
                  {/* Right Side */}
                  <div className="flex items-center justify-center md:justify-end space-x-6">
                    <a 
                      href="tel:+60124209899" 
                      className="text-sm flex items-center text-white/90 hover:text-[#89c540] transition-colors duration-300 group"
                    >
                      <span className="mr-2 group-hover:underline">+6012 - 420 9899</span>
                      <div className="w-7 h-7 rounded-full bg-[#89c540]/20 flex items-center justify-center">
                        <i className="fas fa-phone text-[#89c540] text-xs"></i>
                      </div>
                    </a>
                    <a 
                      href="mailto:info@lov.education" 
                      className="text-sm flex items-center text-white/90 hover:text-[#89c540] transition-colors duration-300 group"
                    >
                      <span className="mr-2 group-hover:underline">info@lov.education</span>
                      <div className="w-7 h-7 rounded-full bg-[#89c540]/20 flex items-center justify-center">
                        <i className="fas fa-envelope text-[#89c540] text-xs"></i>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Main Navigation */}
            <div className={`bg-white shadow-md transition-all duration-300 ${isSticky ? 'fixed top-0 left-0 right-0 animate-slideDown shadow-lg' : ''}`}>
              <div className="container mx-auto px-4">
                <div className={`flex items-center justify-between ${isSticky ? 'py-2' : 'py-4'} transition-all duration-300`}>
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
                  <nav className="hidden md:flex items-center space-x-1">
                    <NavLink to="/" label="Home" />
                    <NavLink to="/about" label="About us" />
                    <NavLink to="/university" label="Universities" />
                    <NavLink to="/contact" label="Contact Us" />
                  </nav>
                  
                  {/* Mobile menu button */}
                  <div className="md:hidden">
                    <button
                      type="button"
                      className={`text-gray-700 hover:text-[#89c540] focus:outline-none p-2 rounded-full hover:bg-gray-100 transition-all duration-300 ${isSticky ? 'text-sm' : 'text-xl'}`}
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
                <div className="md:hidden bg-white border-t border-gray-200 animate-slideDown">
                  <div className="container mx-auto px-4 py-4">
                    <nav className="flex flex-col space-y-2">
                      <MobileNavLink to="/" label="Home" onClick={() => setMobileMenuOpen(false)} />
                      <MobileNavLink to="/about" label="About us" onClick={() => setMobileMenuOpen(false)} />
                      <MobileNavLink to="/university" label="Universities" onClick={() => setMobileMenuOpen(false)} />
                      <MobileNavLink to="/contact" label="Contact Us" onClick={() => setMobileMenuOpen(false)} />
                    </nav>
                  </div>
                </div>
              )}
            </div>
          </header>
          
          <main className="flex-1">
            <Outlet />
          </main>
          <footer className="bg-[#030e22] text-white py-16">
            <div className="container mx-auto px-4">
              {/* Widgets Section */}
              <div className="py-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                  {/* About Widget */}
                  <div className="space-y-6 text-center md:text-left">
                    <div className="mb-6">
                      <Link to="/" className="inline-block">
                        <img src="/logo-footer.png" alt="Literacy of Virtue" className="h-16 md:h-20 mx-auto md:mx-0" />
                      </Link>
                    </div>
                    <div className="text-[#cccccc] leading-relaxed">
                      Start your journey with us!<br/>
                      We guide your pathways.
                    </div>
                  </div>

                  {/* Services Widget */}
                  <div className="space-y-6 text-center md:text-left">
                    <h2 className="text-xl font-bold relative pb-4 mb-2 after:content-[''] after:absolute after:left-1/2 after:md:left-0 after:-translate-x-1/2 after:md:translate-x-0 after:bottom-0 after:h-[2px] after:w-16 after:bg-[#89c540]">
                      Our Services
                    </h2>
                    <ul className="space-y-3">
                      <li className="transition-transform duration-200 hover:translate-x-1">
                        <a href="/#services" className="text-[#cccccc] hover:text-white hover:underline flex items-center gap-2 justify-center md:justify-start">
                          <i className="fas fa-chevron-right text-xs text-[#89c540]"></i>
                          <span>Free Consultation</span>
                        </a>
                      </li>
                      <li className="transition-transform duration-200 hover:translate-x-1">
                        <a href="/#services" className="text-[#cccccc] hover:text-white hover:underline flex items-center gap-2 justify-center md:justify-start">
                          <i className="fas fa-chevron-right text-xs text-[#89c540]"></i>
                          <span>Application Assistance</span>
                        </a>
                      </li>
                      <li className="transition-transform duration-200 hover:translate-x-1">
                        <a href="/#services" className="text-[#cccccc] hover:text-white hover:underline flex items-center gap-2 justify-center md:justify-start">
                          <i className="fas fa-chevron-right text-xs text-[#89c540]"></i>
                          <span>Prepare For Departure</span>
                        </a>
                      </li>
                      <li className="transition-transform duration-200 hover:translate-x-1">
                        <a href="/#services" className="text-[#cccccc] hover:text-white hover:underline flex items-center gap-2 justify-center md:justify-start">
                          <i className="fas fa-chevron-right text-xs text-[#89c540]"></i>
                          <span>Accommodation</span>
                        </a>
                      </li>
                    </ul>
                  </div>

                  {/* Connect Widget */}
                  <div className="space-y-6 text-center md:text-left">
                    <h2 className="text-xl font-bold relative pb-4 mb-2 after:content-[''] after:absolute after:left-1/2 after:md:left-0 after:-translate-x-1/2 after:md:translate-x-0 after:bottom-0 after:h-[2px] after:w-16 after:bg-[#89c540]">
                      Connect With Us
                    </h2>
                    <div className="bg-[#031331] rounded-lg p-6 flex justify-center md:block">
                      <a 
                        href="https://www.facebook.com/literacyofvirtue" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-[#cccccc] hover:text-white flex items-center gap-4 group"
                      >
                        <div className="bg-[#001e57] text-white p-3 rounded-full flex items-center justify-center w-12 h-12 group-hover:bg-[#89c540] transition-all duration-300">
                          <i className="fab fa-facebook-f"></i>
                        </div>
                        <span>Follow us on Facebook</span>
                      </a>
                    </div>
                  </div>

                  {/* Contact Widget */}
                  <div className="space-y-6 text-center md:text-left">
                    <h2 className="text-xl font-bold relative pb-4 mb-2 after:content-[''] after:absolute after:left-1/2 after:md:left-0 after:-translate-x-1/2 after:md:translate-x-0 after:bottom-0 after:h-[2px] after:w-16 after:bg-[#89c540]">
                      Contact
                    </h2>
                    <div className="text-2xl font-bold text-white">
                      +6012 - 420 9899
                    </div>
                    <ul className="space-y-4 text-[#cccccc]">
                      <li className="flex gap-3 items-start justify-center md:justify-start">
                        <i className="fas fa-map-marker-alt text-[#89c540] mt-1"></i>
                        <span>C-3A-03, Centum @ Oasis Corporate Park, No., 2, Jalan PJU 1A/3A, Taipan</span>
                      </li>
                      <li className="flex gap-3 items-center justify-center md:justify-start">
                        <i className="fas fa-envelope text-[#89c540]"></i>
                        <span>info@lov.education</span>
                      </li>
                      <li className="flex gap-3 items-center justify-center md:justify-start">
                        <i className="fas fa-clock text-[#89c540]"></i>
                        <span>Mon to Sat: 9:am to 6pm</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              
              {/* Footer Bottom */}
              <div className="pt-10 border-t border-white/10">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                  <div className="text-[#cccccc] text-center md:text-left">
                    &copy; {new Date().getFullYear()} Literacy of Virtue. All rights reserved.
                  </div>
                  <div>
                    <ul className="flex space-x-4 justify-center">
                      <li>
                        <a 
                          href="https://facebook.com/literacyofvirtue" 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="text-[#cccccc] hover:text-[#89c540] w-10 h-10 rounded-full bg-[#031331] flex items-center justify-center transition-all duration-300 hover:bg-[#001e57]"
                          aria-label="Facebook"
                        >
                          <i className="fab fa-facebook-f"></i>
                        </a>
                      </li>
                      <li>
                        <a 
                          href="https://instagram.com/literacyofvirtue" 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="text-[#cccccc] hover:text-[#89c540] w-10 h-10 rounded-full bg-[#031331] flex items-center justify-center transition-all duration-300 hover:bg-[#001e57]"
                          aria-label="Instagram"
                        >
                          <i className="fab fa-instagram"></i>
                        </a>
                      </li>
                      <li>
                        <a 
                          href="https://wa.me/60124209899" 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="text-[#cccccc] hover:text-[#89c540] w-10 h-10 rounded-full bg-[#031331] flex items-center justify-center transition-all duration-300 hover:bg-[#001e57]"
                          aria-label="WhatsApp"
                        >
                          <i className="fab fa-whatsapp"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </footer>
        </div>
        <TanStackRouterDevtools />
        <ReactQueryDevtools buttonPosition="bottom-right" />
      </RootDocument>
    );
  }
})
