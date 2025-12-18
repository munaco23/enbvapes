import React, { useState, useEffect } from 'react';
import { PRODUCTS } from '../constants';
import ProductCard from './ProductCard';

const BestSellers: React.FC = () => {
  const bestSellers = PRODUCTS.filter(p => (p.rating ?? 0) >= 4.8);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(4);

  useEffect(() => {
    const updateItemsPerView = () => {
      if (window.innerWidth < 768) {
        setItemsPerView(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerView(2);
      } else {
        setItemsPerView(4);
      }
    };

    updateItemsPerView();
    window.addEventListener('resize', updateItemsPerView);
    return () => window.removeEventListener('resize', updateItemsPerView);
  }, []);

  useEffect(() => {
    // Auto-scroll disabled: users navigate with prev/next only
  }, [bestSellers.length, itemsPerView]);

  const handlePrev = () => {
    setCurrentIndex(prev => (prev - 1 + bestSellers.length) % bestSellers.length);
  };

  const handleNext = () => {
    setCurrentIndex(prev => (prev + 1) % bestSellers.length);
  };

  return (
    <section id="best-sellers" className="py-28 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <span className="h-px w-8 bg-gold"></span>
              <span className="text-gold font-black uppercase tracking-[0.3em] text-[10px]">Top Rated</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-obsidian uppercase tracking-tighter leading-none">
              Best Sellers
            </h2>
          </div>
          <p className="text-neutral-500 max-w-sm text-sm font-medium leading-relaxed">
            Discover the community's top picks. These are the tried-and-true favorites for flavor, performance, and reliability.
          </p>
        </div>

        <div className="relative">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-700 ease-in-out" 
              style={{ transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)` }}
            >
              {bestSellers.map((product) => (
                <div style={{ width: `${100 / itemsPerView}%` }} key={product.id} className="flex-shrink-0 px-3">
                  <ProductCard product={product} />
                </div>
              ))}
               {/* Cloned for seamless loop illusion */}
              {bestSellers.map((product) => (
                <div style={{ width: `${100 / itemsPerView}%` }} key={`${product.id}-clone`} className="flex-shrink-0 px-3">
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
          </div>

          <button onClick={handlePrev} className="absolute top-1/2 left-0 md:-left-4 -translate-y-1/2 bg-white h-12 w-12 rounded-full shadow-lg border border-neutral-200 text-obsidian hover:bg-neutral-100 transition-all z-10">
            <i className="fas fa-chevron-left"></i>
          </button>
          <button onClick={handleNext} className="absolute top-1/2 right-0 md:-right-4 -translate-y-1/2 bg-white h-12 w-12 rounded-full shadow-lg border border-neutral-200 text-obsidian hover:bg-neutral-100 transition-all z-10">
            <i className="fas fa-chevron-right"></i>
          </button>
        </div>
      </div>
    </section>
  );
};

export default BestSellers;
