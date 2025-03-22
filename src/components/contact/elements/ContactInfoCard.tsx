export function ContactInfoCard() {
  return (
    <div className="bg-[#001e57] text-white p-8 rounded-xl shadow-xl">
      <div className="grid gap-8">
        <div className="flex items-center gap-5">
          <div className="bg-[#89c540]/20 text-[#89c540] rounded-full p-3 flex items-center justify-center w-12 h-12 flex-shrink-0">
            <i className="fas fa-map-marker-alt"></i>
          </div>
          <div>
            <h3 className="font-medium text-[#89c540]">Our Location</h3>
            <p className="text-white/90 mt-1">
              C-3A-03, Centum @ Oasis Corporate Park,<br />
              No., 2, Jalan PJU 1A/3A, Taipan<br />
              Ara Damansara, 47301 Petaling Jaya
            </p>
          </div>
        </div>
        
        <div className="flex items-center gap-5">
          <div className="bg-[#89c540]/20 text-[#89c540] rounded-full p-3 flex items-center justify-center w-12 h-12 flex-shrink-0">
            <i className="fas fa-phone-alt"></i>
          </div>
          <div>
            <h3 className="font-medium text-[#89c540]">Call Us</h3>
            <p className="text-white/90 mt-1">
              <a href="tel:+60124209899" className="hover:text-[#89c540] transition-colors duration-300">
                +6012 - 420 9899
              </a>
            </p>
          </div>
        </div>
        
        <div className="flex items-center gap-5">
          <div className="bg-[#89c540]/20 text-[#89c540] rounded-full p-3 flex items-center justify-center w-12 h-12 flex-shrink-0">
            <i className="fas fa-envelope"></i>
          </div>
          <div>
            <h3 className="font-medium text-[#89c540]">Email Us</h3>
            <p className="text-white/90 mt-1">
              <a href="mailto:info@lov.education" className="hover:text-[#89c540] transition-colors duration-300">
                info@lov.education
              </a>
            </p>
          </div>
        </div>
        
        <div className="flex items-center gap-5">
          <div className="bg-[#89c540]/20 text-[#89c540] rounded-full p-3 flex items-center justify-center w-12 h-12 flex-shrink-0">
            <i className="fas fa-clock"></i>
          </div>
          <div>
            <h3 className="font-medium text-[#89c540]">Working Hours</h3>
            <p className="text-white/90 mt-1">
              Monday - Friday: 9:00 AM - 6:00 PM<br />
              Saturday: 10:00 AM - 2:00 PM<br />
              Sunday: Closed
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactInfoCard; 