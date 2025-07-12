import * as m from 'motion/react-m';

import { StatsItem } from '../elements/StatsItem';

export function AboutHeroSection() {
  const stats = [
    { value: '2012', label: 'Year Founded' },
    { value: '20+', label: 'Partner Universities' },
    { value: '450+', label: 'Courses Available' },
  ];

  return (
    <section className="relative border-b border-gray-100 py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-5xl">
          <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="mb-6"
          >
            <p className="text-sm font-medium tracking-wider text-[#89c540] uppercase">
              About Us
            </p>
          </m.div>

          <m.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8 text-4xl font-bold tracking-tight text-[#001e57] md:text-6xl"
          >
            Your trusted partner in{' '}
            <span className="text-[#89c540]">international education</span>.
          </m.h1>

          <m.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-12 grid gap-x-8 gap-y-6 border-t border-gray-100 pt-12 md:grid-cols-3"
          >
            {stats.map((stat, index) => (
              <StatsItem key={index} value={stat.value} label={stat.label} />
            ))}
          </m.div>
        </div>
      </div>
    </section>
  );
}
