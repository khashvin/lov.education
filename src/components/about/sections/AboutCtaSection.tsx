import * as m from "motion/react-m";

export function AboutCtaSection() {
  return (
    <section className="py-20 bg-gradient-to-r from-[#001e57] to-[#001e57]">
      <div className="container mx-auto px-4">
        <m.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Begin Your Educational Journey</h2>
          <p className="text-white/80 text-lg mb-8">
            Contact us today to discuss how we can help you achieve your academic and career goals.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white hover:bg-[#89c540] text-[#001e57] hover:text-white px-8 py-3 rounded-md font-semibold transition-all duration-300"
            >
              Contact Us
            </a>
            <a
              href="/#services"
              className="bg-transparent border border-white text-white hover:bg-white/10 px-8 py-3 rounded-md font-semibold transition-all duration-300"
            >
              Explore Services
            </a>
          </div>
        </m.div>
      </div>
    </section>
  );
} 