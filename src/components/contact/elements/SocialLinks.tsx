export function SocialLinks() {
  return (
    <div className="rounded-xl bg-white p-8 shadow-lg">
      <h3 className="mb-5 text-xl font-semibold text-[#001e57]">
        Connect With Us
      </h3>
      <div className="flex gap-4">
        <a
          href="https://facebook.com/literacyofvirtue"
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#001e57] text-white shadow-md transition-all duration-300 hover:bg-[#89c540] hover:shadow-lg"
        >
          <i className="fab fa-facebook-f text-lg"></i>
        </a>
        <a
          href="https://instagram.com/literacyofvirtue"
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#001e57] text-white shadow-md transition-all duration-300 hover:bg-[#89c540] hover:shadow-lg"
        >
          <i className="fab fa-instagram text-lg"></i>
        </a>
        <a
          href="https://wa.me/60124209899"
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#001e57] text-white shadow-md transition-all duration-300 hover:bg-[#89c540] hover:shadow-lg"
        >
          <i className="fab fa-whatsapp text-lg"></i>
        </a>
      </div>
    </div>
  );
}

export default SocialLinks;
