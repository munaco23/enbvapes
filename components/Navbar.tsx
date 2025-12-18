
import React, { useState, useEffect } from 'react';
import { useCart } from './CartContext';
import CartSidebar from './CartSidebar';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [routeHash, setRouteHash] = useState<string>(typeof window !== 'undefined' ? window.location.hash : '');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { cartCount } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleHashChange = () => setRouteHash(window.location.hash);
    window.addEventListener('hashchange', handleHashChange);
    // Ensure initial state is correct in case hash is set before mount
    setRouteHash(window.location.hash);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const isHome = routeHash === '' || routeHash === '#/' || routeHash === '#';
  const isTransparent = isHome && !isScrolled;

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Dynamic Top Bar */}
      {isHome && !isScrolled && (
        <div className="bg-obsidian text-white text-[11px] font-bold text-center py-2 uppercase tracking-[0.3em] hidden md:block">
          Elite Hardware • Worldwide Shipping • Genuine Quality
        </div>
      )}
      
      <nav 
        className={`transition-all duration-500 px-6 lg:px-16 flex items-center justify-between ${
          isTransparent
            ? 'bg-transparent py-6'
            : 'bg-black/90 backdrop-blur-sm shadow-none py-4'
        }`}
      >
        {/* Logo Section */}
        <a href="#/" className="flex items-center space-x-4 cursor-pointer group">
          <img
            src="images/logo/logo.png"
            alt="ENBVAPES Logo"
            className="h-12 w-12 object-contain"
          />
          <div className="flex flex-col -space-y-1">
            <span className="text-white text-2xl font-black tracking-tighter">ENB<span className="text-gold">VAPES</span></span>
            <span className="text-neutral-400 text-[9px] font-bold tracking-[0.5em] uppercase">Elite Experience</span>
          </div>
        </a>

        {/* Right Side Controls & Desktop Links */}
        <div className="flex items-center space-x-12">
          <div className="hidden lg:flex items-center space-x-12 uppercase text-[11px] font-bold tracking-[0.2em]">
            {['Disposables', 'Rolling Paper', 'Accessories'].map((item) => (
              <a 
                key={item} 
                href={`#/shop?cat=${encodeURIComponent(item)}`}
                className="text-white hover:text-gold transition-all relative overflow-hidden group"
              >
                {item}
                <span className="absolute bottom-0 left-0 w-full h-[1px] bg-gold -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
              </a>
            ))}
            <a href="#/shop" className="text-red-500 hover:text-red-400 animate-pulse">Shop</a>
          </div>

          <button onClick={() => setIsCartOpen(true)} className="relative text-white text-2xl">
            <i className="fas fa-shopping-bag"></i>
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-gold text-obsidian text-[10px] font-bold h-5 w-5 rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>
          <button 
            className="lg:hidden text-white text-3xl"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="absolute top-0 left-0 w-full h-screen bg-obsidian flex flex-col items-center justify-center space-y-8 lg:hidden animate-fade-in z-50">
          <button 
            className="absolute top-8 right-8 text-white text-4xl"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <i className="fas fa-times"></i>
          </button>
          <div className="flex flex-col items-center space-y-6 uppercase font-black text-2xl tracking-[0.2em] text-white">
            <a href="#/shop" onClick={() => setIsMobileMenuOpen(false)}>Shop</a>
            {['Disposables', 'Rolling Paper', 'Accessories'].map((item) => (
              <a
                key={`m-${item}`}
                href={`#/shop?cat=${encodeURIComponent(item)}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      )}
          <CartSidebar isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </header>
  );
};

export default Navbar;
