import * as m from 'motion/react-m';

import { ServiceItem } from '../elements/ServiceItem';

export function ServicesSection() {
  const services = [
    {
      title: 'Student Placement',
      description:
        'We help students find the right universities and courses that match their academic goals and career aspirations.',
      number: '01',
    },
    {
      title: 'Scholarship Guidance',
      description:
        'Our team provides information and assistance in securing scholarships and financial aid opportunities.',
      number: '02',
    },
    {
      title: 'Application Assistance',
      description:
        'We guide students through the entire application process, ensuring all requirements are met.',
      number: '03',
    },
    {
      title: 'Career Counselling',
      description:
        'Professional advice on career paths and opportunities based on academic interests and market trends.',
      number: '04',
    },
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <m.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <h2 className="mb-4 text-3xl font-bold text-[#001e57]">
            What We Offer
          </h2>
          <p className="text-lg text-gray-600">
            Comprehensive services to support your educational journey.
          </p>
        </m.div>

        <div className="mx-auto max-w-6xl">
          <div className="grid gap-10 md:grid-cols-2">
            {services.map((service, index) => (
              <ServiceItem
                key={index}
                title={service.title}
                description={service.description}
                number={service.number}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
