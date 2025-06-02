import ContactForm from '../elements/ContactForm';

export function ContactFormSection() {
  return (
    <section id="main-form" className="main-form bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-16 text-center">
          <span className="mb-4 inline-block rounded-full bg-[#001e57]/10 px-4 py-2 text-sm font-semibold text-[#001e57]">
            START YOUR JOURNEY
          </span>
          <h2 className="mb-4 text-3xl font-bold text-[#001e57] md:text-4xl">
            Ready to Study in Malaysia?
          </h2>
          <p className="mx-auto max-w-3xl text-gray-600">
            Fill out the form below and our education experts will get in touch
            to guide you through the next steps of your Malaysian education
            journey.
          </p>
        </div>

        <div className="mx-auto">
          <div className="overflow-hidden rounded-2xl bg-white shadow-2xl">
            <div className="grid md:grid-cols-5">
              {/* Left side - Form */}
              <div className="p-8 md:col-span-3 lg:p-10">
                <h3 className="mb-6 text-2xl font-bold text-[#001e57]">
                  Personal Information
                </h3>
                <ContactForm />
              </div>

              {/* Right side - Info */}
              <div className="relative overflow-hidden bg-[#001e57] text-white md:col-span-2">
                <div className="flex h-full flex-col p-8 lg:p-10">
                  <div className="mb-6">
                    <h4 className="mb-5 text-2xl font-bold">
                      Why Study in Malaysia?
                    </h4>
                    <ul className="space-y-6">
                      <li className="flex gap-5">
                        <div className="mt-1 flex-shrink-0">
                          <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#89c540]/20">
                            <i className="fas fa-check text-sm text-[#89c540]"></i>
                          </div>
                        </div>
                        <p className="text-base text-white/80 md:text-lg">
                          World-class education at affordable costs compared to
                          Western countries
                        </p>
                      </li>
                      <li className="flex gap-5">
                        <div className="mt-1 flex-shrink-0">
                          <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#89c540]/20">
                            <i className="fas fa-check text-sm text-[#89c540]"></i>
                          </div>
                        </div>
                        <p className="text-base text-white/80 md:text-lg">
                          Diverse multicultural environment with English-taught
                          programs
                        </p>
                      </li>
                      <li className="flex gap-5">
                        <div className="mt-1 flex-shrink-0">
                          <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#89c540]/20">
                            <i className="fas fa-check text-sm text-[#89c540]"></i>
                          </div>
                        </div>
                        <p className="text-base text-white/80 md:text-lg">
                          Safe country with vibrant culture and lower cost of
                          living
                        </p>
                      </li>
                      <li className="flex gap-5">
                        <div className="mt-1 flex-shrink-0">
                          <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#89c540]/20">
                            <i className="fas fa-check text-sm text-[#89c540]"></i>
                          </div>
                        </div>
                        <p className="text-base text-white/80 md:text-lg">
                          Internationally recognized degrees and qualifications
                        </p>
                      </li>
                      <li className="flex gap-5">
                        <div className="mt-1 flex-shrink-0">
                          <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#89c540]/20">
                            <i className="fas fa-check text-sm text-[#89c540]"></i>
                          </div>
                        </div>
                        <p className="text-base text-white/80 md:text-lg">
                          Strategic location in Southeast Asia with excellent
                          travel opportunities
                        </p>
                      </li>
                      <li className="flex gap-5">
                        <div className="mt-1 flex-shrink-0">
                          <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#89c540]/20">
                            <i className="fas fa-check text-sm text-[#89c540]"></i>
                          </div>
                        </div>
                        <p className="text-base text-white/80 md:text-lg">
                          Strong industry connections offering internship and
                          job opportunities
                        </p>
                      </li>
                    </ul>
                  </div>

                  <div className="mt-auto">
                    <div className="rounded-xl bg-white/5 p-6 backdrop-blur-sm">
                      <div className="flex items-center gap-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#89c540]/20">
                          <i className="fas fa-headset text-[#89c540]"></i>
                        </div>
                        <div>
                          <h5 className="font-medium text-[#89c540]">
                            Need Immediate Help?
                          </h5>
                          <a
                            href="tel:+60124209899"
                            className="text-lg font-bold text-white transition-colors hover:text-[#89c540]"
                          >
                            +6012 - 420 9899
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Background pattern */}
                <div className="pointer-events-none absolute right-0 bottom-0 opacity-10">
                  <i className="fas fa-globe-asia text-9xl"></i>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-500">
              By submitting this form, you agree to our{' '}
              <a
                href="#"
                className="text-[#001e57] underline hover:text-[#89c540]"
              >
                privacy policy
              </a>{' '}
              and terms of service.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactFormSection;
