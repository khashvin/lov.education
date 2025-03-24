import { useState, useEffect, useRef } from 'react';
import * as m from "motion/react-m";

interface BannerSliderProps {
  banners: string[];
}

export function BannerSlider({ banners }: BannerSliderProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });
  const bannerContainerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX / windowSize.width,
        y: e.clientY / windowSize.height
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [windowSize]);
  
  useEffect(() => {
    // Auto advance banners
    const interval = setInterval(() => {
      setActiveIndex(prev => (prev + 1) % banners.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [banners.length]);

  return (
    <div 
      className="w-full lg:w-7/12 relative aspect-[16/9] sm:aspect-[16/10] md:aspect-[16/9] flex items-center justify-center"
      ref={bannerContainerRef}
    >
      <m.div 
        className="relative w-full h-full rounded-2xl overflow-hidden"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        style={{
          perspective: '1200px',
          transformStyle: 'preserve-3d',
        }}
      >
        {/* Banner Gallery */}
        <div className="absolute inset-0 rounded-2xl overflow-hidden">
          {banners.map((banner, index) => (
            <m.div 
              key={index}
              className="absolute inset-0 w-full h-full"
              initial={{ opacity: 0 }}
              animate={{ 
                opacity: activeIndex === index ? 1 : 0,
                scale: activeIndex === index ? 1 : 1.1,
              }}
              transition={{ 
                opacity: { duration: 0.8 },
                scale: { duration: 1.2 }
              }}
            >
              <m.div
                className="w-full h-full overflow-hidden rounded-2xl"
                animate={{
                  rotateX: (mousePosition.y - 0.5) * 5,
                  rotateY: (mousePosition.x - 0.5) * -7,
                }}
                transition={{ duration: 0.8, type: "spring", damping: 15 }}
                style={{ transformStyle: 'preserve-3d' }}
              >
                <img 
                  src={banner} 
                  alt={`Malaysian education - banner ${index + 1}`} 
                  className="w-full h-full object-contain object-center rounded-2xl select-none"
                  loading={index === 0 ? "eager" : "lazy"}
                />
                
                <div className="absolute inset-0 rounded-2xl pointer-events-none"></div>
              </m.div>
            </m.div>
          ))}
        </div>
        
        {/* Banner Overlay Elements */}
        <div className="absolute bottom-8 left-8 right-8 z-20 text-white pointer-events-none">
          <m.div 
            className="inline-block px-3 py-1.5 rounded-full text-xs font-medium bg-black/20 backdrop-blur-md border border-white/10"
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            {activeIndex + 1} / {banners.length}
          </m.div>
        </div>
        
        {/* Controls */}
        <div className="absolute left-1/2 bottom-4 -translate-x-1/2 z-20 flex space-x-3">
          {banners.map((_, i) => (
            <button 
              key={i}
              onClick={() => setActiveIndex(i)}
              className={`h-1.5 ${
                activeIndex === i 
                  ? 'bg-white w-8' 
                  : 'bg-white/40 hover:bg-white/60 w-4'
              } rounded-full transition-all duration-300`}
              aria-label={`View banner ${i + 1}`}
            />
          ))}
        </div>
      </m.div>
      
      {/* Banner Frame & Decorative elements */}
      <m.div 
        className="absolute -bottom-6 -left-6 md:-bottom-10 md:-left-10 w-32 h-32 md:w-60 md:h-60 bg-[#89c540]/20 rounded-full blur-3xl"
        animate={{
          opacity: [0.2, 0.4, 0.2],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
      
      <m.div
        className="absolute -top-6 -right-6 md:-top-10 md:-right-10 w-32 h-32 md:w-48 md:h-48 bg-[#001e57]/50 rounded-full blur-3xl"
        animate={{
          opacity: [0.2, 0.3, 0.2],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
    </div>
  );
}

export default BannerSlider; 