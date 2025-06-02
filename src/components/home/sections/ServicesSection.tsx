import { CustomLink } from '@/components/CustomLink';
import ServiceCard from '../elements/ServiceCard';

export function ServicesSection() {
  const services = [
    {
      icon: 'fas fa-user-friends',
      title: 'Free Consultation',
      description:
        'Our qualified education specialists will guide you in finding the right course and institution in Malaysia based on your academic background, budget, and career aspirations.',
    },
    {
      icon: 'fas fa-handshake',
      title: 'Application Assistance',
      description:
        "We'll guide you through the entire application process - from choosing Malaysian universities to preparing documents for visa applications and submissions.",
    },
    {
      icon: 'fas fa-paper-plane',
      title: 'Pre-Departure Support',
      description:
        "We ensure you're fully prepared for life in Malaysia with comprehensive briefings, cultural orientation, and practical advice for a smooth transition.",
    },
    {
      icon: 'fas fa-home',
      title: 'Accommodation Arrangement',
      description:
        "No need to worry about where you'll stay in Malaysia - we arrange comfortable, convenient accommodation options before your arrival for a stress-free experience.",
    },
  ];

  return (
    <section id="services" className="services-section py-12 sm:py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto">
          <div className="mb-16 text-center">
            <span className="mb-4 inline-block rounded-full bg-[#89c540]/10 px-4 py-2 text-sm font-semibold text-[#89c540]">
              OUR SERVICES
            </span>
            <h2 className="mb-6 text-3xl font-bold text-[#001e57] md:text-4xl">
              How We Can Help You
            </h2>
            <p className="mx-auto max-w-3xl text-gray-600">
              We're with you every step of the way, from initial consultation to
              settling into your new life in Malaysia.
            </p>
          </div>

          <div className="overflow-hidden rounded-2xl bg-white shadow-2xl">
            <div className="grid lg:grid-cols-5">
              {/* Left Side Image */}
              <div className="relative lg:col-span-2">
                <div className="flex h-full items-center justify-center bg-[#001e57] p-10">
                  <div className="relative z-10 text-center">
                    <div className="mx-auto mb-6 flex h-32 w-32 items-center justify-center rounded-full bg-white/10">
                      <i className="fas fa-globe-asia text-5xl text-[#89c540]"></i>
                    </div>
                    <h3 className="mb-4 text-2xl font-bold text-white">
                      Your Journey to Malaysia Begins Here
                    </h3>
                    <p className="text-white/80">
                      With over a decade of experience, we've helped thousands
                      of international students achieve their dreams of studying
                      in Malaysian institutions.
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Side Services */}
              <div className="p-10 lg:col-span-3">
                <div className="space-y-8">
                  {services.map((service, index) => (
                    <ServiceCard
                      key={index}
                      icon={service.icon}
                      title={service.title}
                      description={service.description}
                    />
                  ))}
                </div>

                <div className="mt-10">
                  <CustomLink
                    to="/"
                    hash="main-form"
                    className="inline-flex items-center gap-2 rounded-lg bg-[#001e57] px-8 py-4 font-semibold text-white shadow-lg transition-all duration-300 hover:bg-[#001e57]/90 hover:shadow-xl"
                  >
                    Get Started Today
                    <i className="fas fa-arrow-right"></i>
                  </CustomLink>
                </div>
              </div>
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="mt-20 grid gap-8 md:grid-cols-3">
            <div className="rounded-xl bg-white p-8 text-center shadow-lg transition-all duration-300 hover:shadow-xl">
              <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-xl bg-[#001e57] text-white">
                <i className="fas fa-check-circle text-2xl"></i>
              </div>
              <h3 className="mb-3 text-lg font-bold text-[#001e57]">
                High Success Rate
              </h3>
              <p className="text-gray-600">
                We have a proven track record of successful placements with top
                universities worldwide.
              </p>
            </div>

            <div className="rounded-xl bg-white p-8 text-center shadow-lg transition-all duration-300 hover:shadow-xl">
              <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-xl bg-[#001e57] text-white">
                <i className="fas fa-university text-2xl"></i>
              </div>
              <h3 className="mb-3 text-lg font-bold text-[#001e57]">
                University Partnerships
              </h3>
              <p className="text-gray-600">
                We maintain strong relationships with prestigious universities
                across Malaysia.
              </p>
            </div>

            <div className="rounded-xl bg-white p-8 text-center shadow-lg transition-all duration-300 hover:shadow-xl">
              <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-xl bg-[#001e57] text-white">
                <i className="fas fa-headset text-2xl"></i>
              </div>
              <h3 className="mb-3 text-lg font-bold text-[#001e57]">
                Personalized Guidance
              </h3>
              <p className="text-gray-600">
                Our team is always available to assist you throughout your
                educational journey.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
