import * as m from 'motion/react-m';
import { StatsItem } from '../elements/StatsItem';

export function AboutHeroSection() {
  const stats = [
    { value: '2012', label: 'Year Founded' },
    { value: '20+', label: 'Partner Universities' },
    { value: '450+', label: 'Courses Available' },
  ];

  return (
    <section className="relative py-20 md:py-28 border-b border-gray-100">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="mb-6"
          >
            <p className="text-[#89c540] font-medium tracking-wider uppercase text-sm">
              About Us
            </p>
          </m.div>

          <m.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold text-[#001e57] tracking-tight mb-8"
          >
            Your trusted partner in{' '}
            <span className="text-[#89c540]">international education</span>.
          </m.h1>

          <m.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid md:grid-cols-3 gap-x-8 gap-y-6 mt-12 border-t border-gray-100 pt-12"
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
