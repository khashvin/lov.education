import { useState, useEffect, useRef } from 'react';
import * as m from 'motion/react-m';

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
        height: window.innerHeight,
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
        y: e.clientY / windowSize.height,
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
      setActiveIndex((prev) => (prev + 1) % banners.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [banners.length]);

  return (
    <div
      className="relative flex aspect-[16/9] w-full items-center justify-center sm:aspect-[16/10] md:aspect-[16/9] lg:w-7/12"
      ref={bannerContainerRef}
    >
      <m.div
        className="relative h-full w-full overflow-hidden rounded-2xl"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        style={{
          perspective: '1200px',
          transformStyle: 'preserve-3d',
        }}
      >
        {/* Banner Gallery */}
        <div className="absolute inset-0 overflow-hidden rounded-2xl">
          {banners.map((banner, index) => (
            <m.div
              key={index}
              className="absolute inset-0 h-full w-full"
              initial={{ opacity: 0 }}
              animate={{
                opacity: activeIndex === index ? 1 : 0,
                scale: activeIndex === index ? 1 : 1.1,
              }}
              transition={{
                opacity: { duration: 0.8 },
                scale: { duration: 1.2 },
              }}
            >
              <m.div
                className="h-full w-full overflow-hidden rounded-2xl"
                animate={{
                  rotateX: (mousePosition.y - 0.5) * 5,
                  rotateY: (mousePosition.x - 0.5) * -7,
                }}
                transition={{ duration: 0.8, type: 'spring', damping: 15 }}
                style={{ transformStyle: 'preserve-3d' }}
              >
                <img
                  src={banner}
                  alt={`Malaysian education - banner ${index + 1}`}
                  className="h-full w-full rounded-2xl object-contain object-center select-none"
                  loading={index === 0 ? 'eager' : 'lazy'}
                />

                <div className="pointer-events-none absolute inset-0 rounded-2xl"></div>
              </m.div>
            </m.div>
          ))}
        </div>

        {/* Banner Overlay Elements */}
        <div className="pointer-events-none absolute right-8 bottom-8 left-8 z-20 text-white">
          <m.div
            className="inline-block rounded-full border border-white/10 bg-black/20 px-3 py-1.5 text-xs font-medium backdrop-blur-md"
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            {activeIndex + 1} / {banners.length}
          </m.div>
        </div>

        {/* Controls */}
        <div className="absolute bottom-4 left-1/2 z-20 flex -translate-x-1/2 space-x-3">
          {banners.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className={`h-1.5 ${
                activeIndex === i
                  ? 'w-8 bg-white'
                  : 'w-4 bg-white/40 hover:bg-white/60'
              } rounded-full transition-all duration-300`}
              aria-label={`View banner ${i + 1}`}
            />
          ))}
        </div>
      </m.div>

      {/* Banner Frame & Decorative elements */}
      <m.div
        className="absolute -bottom-6 -left-6 h-32 w-32 rounded-full bg-[#89c540]/20 blur-3xl md:-bottom-10 md:-left-10 md:h-60 md:w-60"
        animate={{
          opacity: [0.2, 0.4, 0.2],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
      />

      <m.div
        className="absolute -top-6 -right-6 h-32 w-32 rounded-full bg-[#001e57]/50 blur-3xl md:-top-10 md:-right-10 md:h-48 md:w-48"
        animate={{
          opacity: [0.2, 0.3, 0.2],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
      />
    </div>
  );
}

export default BannerSlider;
