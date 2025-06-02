import { CustomButtonLink } from '@/components/CustomLink';

export function UniversityCtaSection() {
  return (
    <section className="bg-[#001e57] py-16 text-white">
      <div className="container mx-auto px-4 text-center">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-6 text-3xl font-bold">
            Ready to Study in Malaysia?
          </h2>
          <p className="mb-8 text-xl text-white/80">
            Our expert consultants can help you navigate the application
            process, visa requirements, and find the perfect Malaysian
            university for your academic goals.
          </p>
          <CustomButtonLink
            to="/contact"
            className="bg-[#89c540] px-8 py-6 text-lg text-white hover:bg-[#89c540]/90"
          >
            Get Free Consultation
          </CustomButtonLink>
        </div>
      </div>
    </section>
  );
}
