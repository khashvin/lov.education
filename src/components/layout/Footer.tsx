import { Link } from '@tanstack/react-router';

export function Footer() {
  return (
    <footer className="bg-[#030e22] text-white py-16">
      <div className="container mx-auto px-4">
        {/* Widgets Section */}
        <div className="py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* About Widget */}
            <div className="space-y-6 text-center md:text-left">
              <div className="mb-6">
                <Link to="/" className="inline-block">
                  <img
                    src="/logo-footer.png"
                    alt="Literacy of Virtue"
                    className="h-16 md:h-20 mx-auto md:mx-0"
                  />
                </Link>
              </div>
              <div className="text-[#cccccc] leading-relaxed">
                Start your journey with us!
                <br />
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
                  <Link
                    to="/"
                    hash="services"
                    className="text-[#cccccc] hover:text-white hover:underline flex items-center gap-2 justify-center md:justify-start"
                  >
                    <i className="fas fa-chevron-right text-xs text-[#89c540]"></i>
                    <span>Free Consultation</span>
                  </Link>
                </li>
                <li className="transition-transform duration-200 hover:translate-x-1">
                  <Link
                    to="/"
                    hash="services"
                    className="text-[#cccccc] hover:text-white hover:underline flex items-center gap-2 justify-center md:justify-start"
                  >
                    <i className="fas fa-chevron-right text-xs text-[#89c540]"></i>
                    <span>Application Assistance</span>
                  </Link>
                </li>
                <li className="transition-transform duration-200 hover:translate-x-1">
                  <Link
                    to="/"
                    hash="services"
                    className="text-[#cccccc] hover:text-white hover:underline flex items-center gap-2 justify-center md:justify-start"
                  >
                    <i className="fas fa-chevron-right text-xs text-[#89c540]"></i>
                    <span>Prepare For Departure</span>
                  </Link>
                </li>
                <li className="transition-transform duration-200 hover:translate-x-1">
                  <Link
                    to="/"
                    hash="services"
                    className="text-[#cccccc] hover:text-white hover:underline flex items-center gap-2 justify-center md:justify-start"
                  >
                    <i className="fas fa-chevron-right text-xs text-[#89c540]"></i>
                    <span>Accommodation</span>
                  </Link>
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
                  <span>
                    Block B4, Leisure Commerce Square, No. 9, Jln PJS 8/9, 46150
                    Petaling Jaya, Selangor, Malaysia
                  </span>
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
              &copy; {new Date().getFullYear()} LOV Edu Academy (003560575-D).
              All rights reserved.
              <br />
              Designed by{' '}
              <a
                href="https://artiqe.media"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#89c540] hover:text-[#89c540]"
              >
                Artiqe Media
              </a>
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
  );
}

export default Footer;
