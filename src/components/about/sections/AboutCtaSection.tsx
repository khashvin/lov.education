import { CustomLink } from '@/components/CustomLink';
import * as m from 'motion/react-m';

export function AboutCtaSection() {
  return (
    <section className="bg-gradient-to-r from-[#001e57] to-[#001e57] py-20">
      <div className="container mx-auto px-4">
        <m.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="mb-6 text-3xl font-bold text-white md:text-4xl">
            Begin Your Educational Journey
          </h2>
          <p className="mb-8 text-lg text-white/80">
            Contact us today to discuss how we can help you achieve your
            academic and career goals.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <CustomLink
              to="/contact"
              className="rounded-md bg-white px-8 py-3 font-semibold text-[#001e57] transition-all duration-300 hover:bg-[#89c540] hover:text-white"
            >
              Contact Us
            </CustomLink>
            <CustomLink
              to="/"
              hash="services"
              className="rounded-md border border-white bg-transparent px-8 py-3 font-semibold text-white transition-all duration-300 hover:bg-white/10"
            >
              Explore Services
            </CustomLink>
          </div>
        </m.div>
      </div>
    </section>
  );
}
