import * as m from 'motion/react-m';

export function UniversityHeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#001e57] to-[#001a4a] py-16 text-white lg:py-24">
      {/* Animated background dots/grid */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'radial-gradient(circle, rgba(255,255,255,0.15) 1px, transparent 1px)',
            backgroundSize: '20px 20px',
          }}
        ></div>
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <m.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h4 className="mb-2 text-sm font-bold tracking-widest text-[#89c540] uppercase sm:text-base">
              Malaysian Education
            </h4>

            <m.h1
              className="mb-4 text-4xl leading-tight font-bold sm:mb-6 sm:text-5xl lg:text-6xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              Study in Malaysia
            </m.h1>

            <m.p
              className="mx-auto mb-6 max-w-2xl text-base text-white/90 sm:text-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              Discover top Malaysian universities offering world-class education
              at affordable costs. Let us guide you through your academic
              journey in Malaysia.
            </m.p>
          </m.div>
        </div>
      </div>
    </section>
  );
}
