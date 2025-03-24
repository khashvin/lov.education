import { useState, useEffect } from 'react';
import * as m from "motion/react-m";
import { LazyMotion, domAnimation } from "motion/react";
import BannerSlider from '../elements/BannerSlider';
import { CustomLink } from '@/components/CustomLink';

export function HeroSection() {
  const banners = [
    "/images/banner/banner1.png",
    "/images/banner/banner2.png",
    "/images/banner/banner3.png"
  ];

  const [, setIsLoaded] = useState(false);
  
  useEffect(() => {
    // Set loaded state after a delay to trigger animations
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <LazyMotion features={domAnimation}>
      <section className="relative overflow-hidden bg-gradient-to-br from-[#001e57] to-[#001a4a]">
        {/* Animated background dots/grid */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.15) 1px, transparent 1px)',
            backgroundSize: '20px 20px',
          }}></div>
        </div>
        
        {/* Main hero content */}
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row min-h-[80vh] md:min-h-[70vh] py-10 md:py-14 items-center">
            {/* Left side - Text and CTA */}
            <div className="w-full lg:w-5/12 text-white z-10 mb-10 lg:mb-0">
              <m.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
              >
                <h4 className="uppercase text-sm sm:text-base tracking-widest font-bold text-[#89c540] mb-2 relative inline-flex items-center">
                  <span className="flex w-3 h-3 mr-2">
                    <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-[#89c540] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-[#89c540]"></span>
                  </span>
                  Malaysian Education Agency
                </h4>
                
                <m.h1 
                  className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-4 sm:mb-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                >
                  <span className="block">Your Gateway to</span>
                  <span className="text-[#89c540]">Malaysian Education</span>
                </m.h1>
                
                <m.p 
                  className="text-base sm:text-lg text-white/90 mb-6 sm:mb-8 max-w-lg"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.7, delay: 0.3 }}
                >
                  Expert guidance for international students seeking quality education in Malaysia. 
                  Begin your journey with personalized support every step of the way.
                </m.p>
                
                <m.div 
                  className="flex flex-wrap gap-4"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.4 }}
                >
                  <CustomLink to="/" hash="main-form" className="bg-[#89c540] hover:bg-[#89c540]/90 text-white px-5 sm:px-6 py-3 sm:py-4 rounded-xl font-semibold transition-all duration-300 flex items-center gap-2 transform hover:-translate-y-1 shadow-[0_0_20px_rgba(137,197,64,0.5)]">
                    <span>Start Application</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </CustomLink>
                  <CustomLink to="/" hash="services" className="bg-white/10 backdrop-blur-sm hover:bg-white/20 border border-white/30 text-white px-5 sm:px-6 py-3 sm:py-4 rounded-xl font-semibold transition-all duration-300 flex items-center gap-2 group">
                    <span>Our Services</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </CustomLink>
                </m.div>
                
                <m.div 
                  className="mt-10 sm:mt-12 flex items-center gap-3 sm:gap-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.7, delay: 0.6 }}
                >
                  <div className="flex -space-x-2">
                    {[1, 2, 3].map((i) => (
                      <m.div 
                        key={i} 
                        className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-[#001e57] overflow-hidden"
                        initial={{ opacity: 0, x: 15 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.6 + (i * 0.1) }}
                        style={{
                          backgroundImage: `url(/images/banner/banner${i}.png)`,
                          backgroundSize: 'cover',
                          backgroundPosition: 'center'
                        }}
                      />
                    ))}
                  </div>
                  <m.div 
                    className="text-white/80 text-xs sm:text-sm"
                    initial={{ opacity: 0, x: 15 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.9 }}
                  >
                    Trusted by <span className="font-bold text-white">2,000+</span> international students
                  </m.div>
                </m.div>
              </m.div>
            </div>
            
            {/* Right side - Banner slider */}
            <BannerSlider banners={banners} />
          </div>
        </div>
      </section>
    </LazyMotion>
  );
}

export default HeroSection; 