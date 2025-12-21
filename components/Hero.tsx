
import React, { useState, useEffect } from 'react';
import { HERO_SLIDES } from '../constants';

const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isDesktop, setIsDesktop] = useState<boolean>(
    typeof window !== 'undefined' ? window.innerWidth >= 1024 : true
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const onResize = () => setIsDesktop(window.innerWidth >= 1024);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return (
    <section id="hero" className="relative h-[80vh] sm:h-[90vh] lg:h-[97vh] w-full overflow-hidden bg-obsidian pt-66 md:pt-94">
      {/* Slides */}
      {HERO_SLIDES.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          {/* Background Image (desktop) / IMG (mobile) */}
          {isDesktop ? (
            <div
              className="absolute inset-0 bg-center bg-no-repeat will-change-transform"
              style={{
                backgroundImage: `url(${slide.image})`,
                backgroundSize: 'cover',
                transform: index === currentSlide ? 'scale(1.06)' : 'scale(1)',
                transition: 'transform 8000ms ease-out'
              }}
            />
          ) : (
            <img
              src={slide.image}
              alt="hero"
              className="absolute inset-0 w-full h-full object-contain sm:object-cover object-center bg-obsidian"
            />
          )}

          {/* Content Removed */}
        </div>
      ))}

      {/* Modern Slide Numbering */}
      <div className="absolute bottom-12 left-12 z-30 text-white flex items-baseline space-x-2">
        <span className="text-4xl font-black text-gold">0{currentSlide + 1}</span>
        <span className="text-neutral-500 font-bold">/ 0{HERO_SLIDES.length}</span>
      </div>

      {/* Progress Line */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-white/10 z-30">
        <div 
          className="h-full bg-gold transition-all duration-8000 ease-linear"
          style={{ width: `${((currentSlide + 1) / HERO_SLIDES.length) * 100}%` }}
        ></div>
      </div>
    </section>
  );
};

export default Hero;
