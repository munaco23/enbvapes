
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
    <section id="hero" className="relative h-screen w-full overflow-hidden bg-obsidian pt-66 md:pt-94">
      {/* Slides */}
      {HERO_SLIDES.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          {/* Background Image with optimized filter */}
          <div 
            className="absolute inset-0 bg-center bg-no-repeat"
            style={{ 
              backgroundImage: `url(${slide.image})`,
              // Smooth zoom only on desktop
              backgroundSize: isDesktop && index === currentSlide ? '110% auto' : '100% auto',
              transition: isDesktop ? 'background-size 8000ms ease-out' : 'none'
            }}
          >
          </div>

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
