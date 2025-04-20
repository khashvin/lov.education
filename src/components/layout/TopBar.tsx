export function TopBar() {
  return (
    <div className="bg-[#001e57]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between py-3">
          {/* Left Side */}
          <div className="flex items-center space-x-6 justify-center md:justify-start mb-2 md:mb-0">
            <span className="text-sm tracking-wide text-white/90 font-medium">
              Knowledge of Excellency
            </span>
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
              <span className="mr-2 group-hover:underline">
                +6012 - 420 9899
              </span>
              <div className="w-7 h-7 rounded-full bg-[#89c540]/20 flex items-center justify-center">
                <i className="fas fa-phone text-[#89c540] text-xs"></i>
              </div>
            </a>
            <a
              href="mailto:info@lov.education"
              className="text-sm flex items-center text-white/90 hover:text-[#89c540] transition-colors duration-300 group"
            >
              <span className="mr-2 group-hover:underline">
                info@lov.education
              </span>
              <div className="w-7 h-7 rounded-full bg-[#89c540]/20 flex items-center justify-center">
                <i className="fas fa-envelope text-[#89c540] text-xs"></i>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopBar;
