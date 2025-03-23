import * as m from "motion/react-m";

export function ContactHeroSection() {
  return (
    <section className="relative overflow-hidden py-20 bg-[#001e57]">
      <div className="absolute inset-0 bg-[#001e57]/10 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-[#001e57] to-transparent opacity-90"></div>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <m.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold mb-6 text-white leading-tight"
          >
            Contact <span className="text-[#89c540]">Us</span>
          </m.h1>
          <m.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-white/90"
          >
            Get in touch with us for any inquiries about our services or to
            schedule a consultation.
          </m.p>
        </div>
      </div>
    </section>
  );
}

export default ContactHeroSection; 