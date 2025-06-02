export function ContactInfoCard() {
  return (
    <div className="rounded-xl bg-[#001e57] p-8 text-white shadow-xl">
      <div className="grid gap-8">
        <div className="flex items-center gap-5">
          <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-[#89c540]/20 p-3 text-[#89c540]">
            <i className="fas fa-map-marker-alt"></i>
          </div>
          <div>
            <h3 className="font-medium text-[#89c540]">Our Location</h3>
            <p className="mt-1 text-white/90">
              Block B4, Leisure Commerce Square, No. 9,
              <br />
              Jln PJS 8/9, 46150 Petaling Jaya,
              <br />
              Selangor, Malaysia
            </p>
          </div>
        </div>

        <div className="flex items-center gap-5">
          <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-[#89c540]/20 p-3 text-[#89c540]">
            <i className="fas fa-phone-alt"></i>
          </div>
          <div>
            <h3 className="font-medium text-[#89c540]">Call Us</h3>
            <p className="mt-1 text-white/90">
              <a
                href="tel:+60124209899"
                className="transition-colors duration-300 hover:text-[#89c540]"
              >
                +6012 - 420 9899
              </a>
            </p>
          </div>
        </div>

        <div className="flex items-center gap-5">
          <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-[#89c540]/20 p-3 text-[#89c540]">
            <i className="fas fa-envelope"></i>
          </div>
          <div>
            <h3 className="font-medium text-[#89c540]">Email Us</h3>
            <p className="mt-1 text-white/90">
              <a
                href="mailto:info@lov.education"
                className="transition-colors duration-300 hover:text-[#89c540]"
              >
                info@lov.education
              </a>
            </p>
          </div>
        </div>

        <div className="flex items-center gap-5">
          <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-[#89c540]/20 p-3 text-[#89c540]">
            <i className="fas fa-clock"></i>
          </div>
          <div>
            <h3 className="font-medium text-[#89c540]">Working Hours</h3>
            <p className="mt-1 text-white/90">
              Monday - Friday: 9:00 AM - 6:00 PM
              <br />
              Saturday: 10:00 AM - 2:00 PM
              <br />
              Sunday: Closed
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactInfoCard;
