import { Link, useRouteContext } from '@tanstack/react-router';

export function Footer() {
  const { metadata } = useRouteContext({
    from: '__root__',
    select: (ctx) => ctx.metadata,
  });

  return (
    <footer className="bg-[#030e22] py-16 text-white">
      <div className="container mx-auto px-4">
        {/* Widgets Section */}
        <div className="py-8">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
            {/* About Widget */}
            <div className="space-y-6 text-center md:text-left">
              <div className="mb-6">
                <Link to="/" className="inline-block">
                  <img
                    src="/logo-footer.png"
                    alt="Literacy of Virtue"
                    className="mx-auto h-16 md:mx-0 md:h-20"
                  />
                </Link>
              </div>
              <div className="leading-relaxed text-[#cccccc]">
                Start your journey with us!
                <br />
                We guide your pathways.
              </div>
            </div>

            {/* Services Widget */}
            <div className="space-y-6 text-center md:text-left">
              <h2 className="relative mb-2 pb-4 text-xl font-bold after:absolute after:bottom-0 after:left-1/2 after:h-[2px] after:w-16 after:-translate-x-1/2 after:bg-[#89c540] after:content-[''] after:md:left-0 after:md:translate-x-0">
                Our Services
              </h2>
              <ul className="space-y-3">
                <li className="transition-transform duration-200 hover:translate-x-1">
                  <Link
                    to="/"
                    hash="services"
                    className="flex items-center justify-center gap-2 text-[#cccccc] hover:text-white hover:underline md:justify-start"
                  >
                    <i className="fas fa-chevron-right text-xs text-[#89c540]"></i>
                    <span>Free Consultation</span>
                  </Link>
                </li>
                <li className="transition-transform duration-200 hover:translate-x-1">
                  <Link
                    to="/"
                    hash="services"
                    className="flex items-center justify-center gap-2 text-[#cccccc] hover:text-white hover:underline md:justify-start"
                  >
                    <i className="fas fa-chevron-right text-xs text-[#89c540]"></i>
                    <span>Application Assistance</span>
                  </Link>
                </li>
                <li className="transition-transform duration-200 hover:translate-x-1">
                  <Link
                    to="/"
                    hash="services"
                    className="flex items-center justify-center gap-2 text-[#cccccc] hover:text-white hover:underline md:justify-start"
                  >
                    <i className="fas fa-chevron-right text-xs text-[#89c540]"></i>
                    <span>Prepare For Departure</span>
                  </Link>
                </li>
                <li className="transition-transform duration-200 hover:translate-x-1">
                  <Link
                    to="/"
                    hash="services"
                    className="flex items-center justify-center gap-2 text-[#cccccc] hover:text-white hover:underline md:justify-start"
                  >
                    <i className="fas fa-chevron-right text-xs text-[#89c540]"></i>
                    <span>Accommodation</span>
                  </Link>
                </li>
              </ul>
            </div>

            {/* Connect Widget */}
            <div className="space-y-6 text-center md:text-left">
              <h2 className="relative mb-2 pb-4 text-xl font-bold after:absolute after:bottom-0 after:left-1/2 after:h-[2px] after:w-16 after:-translate-x-1/2 after:bg-[#89c540] after:content-[''] after:md:left-0 after:md:translate-x-0">
                Connect With Us
              </h2>
              <div className="flex justify-center rounded-lg bg-[#031331] p-6 md:block">
                <a
                  href="https://www.facebook.com/literacyofvirtue"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 text-[#cccccc] hover:text-white"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#001e57] p-3 text-white transition-all duration-300 group-hover:bg-[#89c540]">
                    <i className="fab fa-facebook-f"></i>
                  </div>
                  <span>Follow us on Facebook</span>
                </a>
              </div>
            </div>

            {/* Contact Widget */}
            <div className="space-y-6 text-center md:text-left">
              <h2 className="relative mb-2 pb-4 text-xl font-bold after:absolute after:bottom-0 after:left-1/2 after:h-[2px] after:w-16 after:-translate-x-1/2 after:bg-[#89c540] after:content-[''] after:md:left-0 after:md:translate-x-0">
                Contact
              </h2>
              <div className="text-2xl font-bold text-white">
                +6012 - 420 9899
              </div>
              <ul className="space-y-4 text-[#cccccc]">
                <li className="flex items-start justify-center gap-3 md:justify-start">
                  <i className="fas fa-map-marker-alt mt-1 text-[#89c540]"></i>
                  <span>
                    Block B4, Leisure Commerce Square, No. 9, Jln PJS 8/9, 46150
                    Petaling Jaya, Selangor, Malaysia
                  </span>
                </li>
                <li className="flex items-center justify-center gap-3 md:justify-start">
                  <i className="fas fa-envelope text-[#89c540]"></i>
                  <span>info@lov.education</span>
                </li>
                <li className="flex items-center justify-center gap-3 md:justify-start">
                  <i className="fas fa-clock text-[#89c540]"></i>
                  <span>Mon to Sat: 9:am to 6pm</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-white/10 pt-10">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <div className="text-center text-[#cccccc] md:text-left">
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
              <span className="pl-2 text-xs text-white/15">
                ({metadata.id.slice(0, 8)})
              </span>
            </div>
            <div>
              <ul className="flex justify-center space-x-4">
                <li>
                  <a
                    href="https://facebook.com/literacyofvirtue"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-[#031331] text-[#cccccc] transition-all duration-300 hover:bg-[#001e57] hover:text-[#89c540]"
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
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-[#031331] text-[#cccccc] transition-all duration-300 hover:bg-[#001e57] hover:text-[#89c540]"
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
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-[#031331] text-[#cccccc] transition-all duration-300 hover:bg-[#001e57] hover:text-[#89c540]"
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
