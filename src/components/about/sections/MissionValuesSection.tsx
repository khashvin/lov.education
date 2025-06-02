import * as m from 'motion/react-m';
import { ValueCard } from '../elements/ValueCard';

export function MissionValuesSection() {
  const values = [
    {
      title: 'Excellence',
      description:
        'We strive for excellence in everything we do, ensuring the highest quality of service for our students.',
      icon: '✓',
    },
    {
      title: 'Integrity',
      description:
        'We maintain the highest standards of integrity and transparency in our dealings with students and institutions.',
      icon: '♦',
    },
    {
      title: 'Student Success',
      description:
        "Our students' success is our success. We are committed to helping each student achieve their educational goals.",
      icon: '★',
    },
  ];

  return (
    <section className="bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <m.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <h2 className="mb-4 text-3xl font-bold text-[#001e57]">
            Our Mission & Values
          </h2>
          <p className="text-lg text-gray-600">
            Guiding principles that drive our commitment to educational
            excellence.
          </p>
        </m.div>

        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 md:grid-cols-3">
            {values.map((value, index) => (
              <ValueCard
                key={index}
                title={value.title}
                description={value.description}
                icon={value.icon}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
