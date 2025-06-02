export function TopBar() {
  return (
    <div className="bg-[#001e57]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col justify-between py-3 md:flex-row">
          {/* Left Side */}
          <div className="mb-2 flex items-center justify-center space-x-6 md:mb-0 md:justify-start">
            <span className="text-sm font-medium tracking-wide text-white/90">
              Knowledge of Excellency
            </span>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com/literacyofvirtue"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white/90 transition-colors duration-300 hover:bg-white/20 hover:text-[#89c540]"
                aria-label="Facebook"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                href="https://instagram.com/literacyofvirtue"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white/90 transition-colors duration-300 hover:bg-white/20 hover:text-[#89c540]"
                aria-label="Instagram"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="https://wa.me/60124209899"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white/90 transition-colors duration-300 hover:bg-white/20 hover:text-[#89c540]"
                aria-label="WhatsApp"
              >
                <i className="fab fa-whatsapp"></i>
              </a>
            </div>
          </div>

          {/* Right Side */}
          <div className="flex items-center justify-center space-x-6 md:justify-end">
            <a
              href="tel:+60124209899"
              className="group flex items-center text-sm text-white/90 transition-colors duration-300 hover:text-[#89c540]"
            >
              <span className="mr-2 group-hover:underline">
                +6012 - 420 9899
              </span>
              <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#89c540]/20">
                <i className="fas fa-phone text-xs text-[#89c540]"></i>
              </div>
            </a>
            <a
              href="mailto:info@lov.education"
              className="group flex items-center text-sm text-white/90 transition-colors duration-300 hover:text-[#89c540]"
            >
              <span className="mr-2 group-hover:underline">
                info@lov.education
              </span>
              <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#89c540]/20">
                <i className="fas fa-envelope text-xs text-[#89c540]"></i>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopBar;
