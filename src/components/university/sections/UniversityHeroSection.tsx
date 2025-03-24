import * as m from 'motion/react-m'

export function UniversityHeroSection() {
  return (
    <section className="bg-gradient-to-br from-[#001e57] to-[#001a4a] text-white py-16 lg:py-24 relative overflow-hidden">
      {/* Animated background dots/grid */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.15) 1px, transparent 1px)',
          backgroundSize: '20px 20px',
        }}></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <m.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h4 className="uppercase text-sm sm:text-base tracking-widest font-bold text-[#89c540] mb-2">
              Malaysian Education
            </h4>
            
            <m.h1 
              className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-4 sm:mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              Study in Malaysia
            </m.h1>
            
            <m.p 
              className="text-base sm:text-lg text-white/90 mb-6 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              Discover top Malaysian universities offering world-class education at affordable costs.
              Let us guide you through your academic journey in Malaysia.
            </m.p>
          </m.div>
        </div>
      </div>
    </section>
  )
} 