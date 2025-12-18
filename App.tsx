import React, { useState, useEffect } from 'react';
import { CartProvider } from './components/CartContext';
import ShopPage from './pages/ShopPage';
import JsonShopPage from './pages/JsonShopPage';
import ProductPage from './pages/ProductPage';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ShopSection from './components/ShopSection';
import Footer from './components/Footer';
import About from './components/About';
import Testimonials from './components/Testimonials';
import BestSellers from './components/BestSellers';
import Shipping from './components/Shipping';
import QualityInfo from './components/QualityInfo';
import SafetyTips from './components/SafetyTips';


const ValueProposition: React.FC = () => {
  const brands = [
    'images/our%20brands/airbar.png',
    'images/our%20brands/aura.png',
    'images/our%20brands/cali.png',
    'images/our%20brands/foger.png',
    'images/our%20brands/geek.png',
    'images/our%20brands/razz.png',
    'images/our%20brands/tyson.png'
  ];

  const marquee = [...brands, ...brands];

  return (
    <section className="py-20 bg-white border-y border-neutral-100">
      <div className="max-w-7xl mx-auto px-6 mb-10 text-center">
        <h3 className="text-2xl md:text-3xl font-black tracking-tight text-obsidian uppercase">Our Brands</h3>
        <div className="mx-auto mt-3 h-[2px] w-20 bg-gold"></div>
        <p className="mt-4 text-[11px] md:text-xs font-bold tracking-[0.35em] uppercase text-neutral-500">Trusted by leading names</p>
      </div>

      <div className="relative overflow-hidden">
        <div className="marquee w-full">
          <div className="marquee-track select-none">
            <div className="marquee-row flex items-center gap-16 px-6">
              {brands.map((src, i) => (
                <img
                  key={`brand-a-${i}`}
                  src={src}
                  alt="brand"
                  className="h-16 md:h-20 opacity-60 hover:opacity-100 transition-all duration-300 grayscale hover:grayscale-0 hover:scale-105 object-contain"
                  draggable={false}
                />
              ))}
            </div>
            <div className="marquee-row flex items-center gap-16 px-6" aria-hidden="true">
              {brands.map((src, i) => (
                <img
                  key={`brand-b-${i}`}
                  src={src}
                  alt="brand"
                  className="h-16 md:h-20 opacity-60 hover:opacity-100 transition-all duration-300 grayscale hover:grayscale-0 hover:scale-105 object-contain"
                  draggable={false}
                />
              ))}
            </div>
          </div>
        </div>
        <style>{`
          .marquee { overflow: hidden; }
          .marquee-track { display: flex; width: max-content; will-change: transform; animation: marquee 18s linear infinite; }
          .marquee-row { width: max-content; }
          @keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        `}</style>
      </div>
    </section>
  );
};

const App: React.FC = () => {
  const [route, setRoute] = useState(window.location.hash);

  useEffect(() => {
    const handleHashChange = () => {
      setRoute(window.location.hash);
    };

    window.addEventListener('hashchange', handleHashChange);
    if (!window.location.hash) {
      window.location.hash = '#/';
    }
    setRoute(window.location.hash);

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [route]);

  const renderPage = () => {
    switch (route) {
      case '#/shop':
        return <JsonShopPage />;
      default:
        if (route.startsWith('#/shop')) {
          return <JsonShopPage />;
        }
        if (route.startsWith('#/product/')) {
          return <ProductPage />;
        }
        return (
          <>
            <Hero />
            <ValueProposition />
            <ShopSection />
            <BestSellers />
            <About />
            <Testimonials />
            <QualityInfo />
            <SafetyTips />
            <Shipping />
          </>
        );
    }
  };

  return (
    <CartProvider>
      <main className="min-h-screen bg-white overflow-x-hidden w-full">
        <style>{`
          html, body { overflow-x: hidden; width: 100%; }
          #root, main { overflow-x: hidden; }
        `}</style>
        <Navbar />
        {renderPage()}
        <Footer />
      </main>
    </CartProvider>
  );
};

export default App;
