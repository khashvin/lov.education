export function SocialLinks() {
  return (
    <div className="bg-white rounded-xl shadow-lg p-8">
      <h3 className="text-xl font-semibold mb-5 text-[#001e57]">Connect With Us</h3>
      <div className="flex gap-4">
        <a 
          href="https://facebook.com/literacyofvirtue" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-[#001e57] text-white hover:bg-[#89c540] transition-all duration-300 w-12 h-12 rounded-lg flex items-center justify-center shadow-md hover:shadow-lg"
        >
          <i className="fab fa-facebook-f text-lg"></i>
        </a>
        <a 
          href="https://instagram.com/literacyofvirtue" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-[#001e57] text-white hover:bg-[#89c540] transition-all duration-300 w-12 h-12 rounded-lg flex items-center justify-center shadow-md hover:shadow-lg"
        >
          <i className="fab fa-instagram text-lg"></i>
        </a>
        <a 
          href="https://wa.me/60124209899" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-[#001e57] text-white hover:bg-[#89c540] transition-all duration-300 w-12 h-12 rounded-lg flex items-center justify-center shadow-md hover:shadow-lg"
        >
          <i className="fab fa-whatsapp text-lg"></i>
        </a>
      </div>
    </div>
  );
}

export default SocialLinks; 