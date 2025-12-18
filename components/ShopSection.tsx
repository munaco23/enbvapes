
import React, { useEffect, useState, useMemo } from 'react';
import { PRODUCTS } from '../constants';
import { Category } from '../types';
import ProductCard from './ProductCard';
import ProductModal from './ProductModal';
import { Product } from '../types';

const ShopSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<Category>('Disposables');
  const [products, setProducts] = useState<Product[]>(PRODUCTS);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(4);
  const [showAll, setShowAll] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const categories: { label: Category; icon: string }[] = [
    { label: 'Disposables', icon: 'fa-box' },
    { label: 'Rolling Paper', icon: 'fa-scroll' },
    { label: 'Accessories', icon: 'fa-wrench' }
  ];

  const filteredProducts = useMemo(() => products.filter(p => p.category === activeCategory), [products, activeCategory]);

  useEffect(() => {
    setCurrentIndex(0);
    setShowAll(false); // Reset to slider view on category change
  }, [activeCategory]);

  // Load products from JSON with fallback to constants
  useEffect(() => {
    let cancelled = false;
    const load = async () => {
      try {
        const url = `${import.meta.env.BASE_URL}sample-product.json`;
        const res = await fetch(url, { cache: 'no-store' });
        if (!res.ok) return;
        const data = await res.json();
        const arr = Array.isArray(data) ? data : (Array.isArray(data?.products) ? data.products : []);
        if (!cancelled && arr.length) {
          // Coerce minimal fields for type safety
          const mapped = arr.map((p: any) => ({
            id: String(p.id),
            name: String(p.name),
            category: p.category as Category,
            price: typeof p.price === 'number' ? p.price : 0,
            oldPrice: typeof p.oldPrice === 'number' ? p.oldPrice : undefined,
            description: String(p.description ?? ''),
            image: typeof p.image === 'string' ? p.image : undefined,
            images: Array.isArray(p.images) ? p.images : undefined,
            isNew: Boolean(p.isNew),
            onSale: Boolean(p.onSale),
            rating: typeof p.rating === 'number' ? p.rating : 0,
          })) as Product[];
          setProducts(mapped);
        }
      } catch (_) {
        // ignore and keep fallback PRODUCTS
      }
    };
    load();
    return () => { cancelled = true; };
  }, []);

  useEffect(() => {
    // responsive items per view: 2 on small screens, 4 on desktop
    const computeItems = () => {
      const w = window.innerWidth;
      setItemsPerView(w < 1024 ? 2 : 4);
    };
    computeItems();
    window.addEventListener('resize', computeItems);
    return () => window.removeEventListener('resize', computeItems);
  }, []);

  useEffect(() => {
    // Auto-scroll removed: slider advances only via manual controls
  }, [filteredProducts.length, itemsPerView]);

  const handlePrev = () => {
    if (!filteredProducts.length) return;
    setCurrentIndex((prev) => (prev - 1 + filteredProducts.length) % filteredProducts.length);
  };

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
  };

  const handleNext = () => {
    if (!filteredProducts.length) return;
    setCurrentIndex((prev) => (prev + 1) % filteredProducts.length);
  };

  const getVisibleProducts = () => {
    const len = filteredProducts.length;
    if (len === 0) return [] as typeof filteredProducts;
    const count = Math.min(itemsPerView, len);
    return Array.from({ length: count }, (_, i) => filteredProducts[(currentIndex + i) % len]);
  };

  return (
    <section id="shop" className="bg-white py-12 md:py-32">
      <div className="max-w-7xl mx-auto px-2 md:px-6">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 md:mb-20 gap-6 md:gap-8">
            <div className="space-y-2 md:space-y-4">
                <div className="flex items-center gap-4">
                    <span className="h-px w-8 bg-gold"></span>
                    <span className="text-gold font-black uppercase tracking-[0.3em] text-[10px]">Premium Catalog</span>
                </div>
                <h2 className="text-5xl md:text-7xl font-black text-obsidian uppercase tracking-tighter leading-none">
                    Vape <span className="text-neutral-300">Collective</span>
                </h2>
            </div>
            
            <p className="text-neutral-500 max-w-sm text-sm font-medium leading-relaxed">
                Experience precision engineering and exquisite flavors with our curated selection of high-end vaping equipment.
            </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">

          {/* Filters - 2x2 grid on Mobile, Sidebar on Desktop */}
          <div className="w-full lg:w-1/4 lg:sticky top-24 self-start">
            <div className="grid grid-cols-2 gap-3 pb-4 lg:grid-cols-1 lg:pb-0 lg:pr-4">
              {categories.map((cat) => (
                <button
                  key={cat.label}
                  onClick={() => setActiveCategory(cat.label)}
                  className={`block flex items-center gap-3 px-6 py-4 font-black text-[11px] uppercase tracking-[0.2em] transition-all relative group w-full text-left ${
                    activeCategory === cat.label 
                    ? 'text-obsidian' 
                    : 'text-neutral-400 hover:text-obsidian'
                  }`}
                >
                  <i className={`fas ${cat.icon} text-gold transition-transform group-hover:scale-125 w-6 text-center`}></i>
                  <span>{cat.label}</span>
                  {activeCategory === cat.label && (
                    <div className="absolute bottom-0 left-0 w-full h-[3px] lg:w-[3px] lg:h-full bg-gold animate-slide-in"></div>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Products Grid & Slider */}
          <div className="w-full lg:w-3/4">
            <div className="relative">
              {/* Cards viewport */}
              <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-8">
                {(showAll ? filteredProducts : getVisibleProducts()).map((p) => (
                  <ProductCard key={p.id} product={p} onClick={() => { window.location.hash = `#/product/${p.id}`; }} />
                ))}
              </div>
              {filteredProducts.length === 0 && (
                  <div className="text-center text-neutral-400 py-20 col-span-full">No products in this category.</div>
              )}

              {/* Prev/Next Controls - hide when showing all */}
              {!showAll && filteredProducts.length > itemsPerView && (
                <>
                  <button
                    aria-label="Previous product"
                    onClick={handlePrev}
                    className="absolute -left-6 top-1/2 -translate-y-1/2 bg-white border border-neutral-200 text-obsidian h-12 w-12 rounded-full shadow-lg hover:bg-neutral-50 active:scale-95 transition-all hidden lg:block"
                  >
                    <i className="fas fa-chevron-left"></i>
                  </button>
                  <button
                    aria-label="Next product"
                    onClick={handleNext}
                    className="absolute -right-6 top-1/2 -translate-y-1/2 bg-white border border-neutral-200 text-obsidian h-12 w-12 rounded-full shadow-lg hover:bg-neutral-50 active:scale-95 transition-all hidden lg:block"
                  >
                    <i className="fas fa-chevron-right"></i>
                  </button>
                </>
              )}
            </div>

            {/* Dots for mobile/tablet - hide when showing all */}
            {!showAll && filteredProducts.length > itemsPerView && (
              <div className="mt-8 flex justify-center gap-2 lg:hidden">
                {Array.from({ length: Math.ceil(filteredProducts.length / itemsPerView) }).map((_, i) => (
                  <span
                    key={i}
                    className={`h-2 w-2 rounded-full ${
                      i === Math.floor(currentIndex / itemsPerView) ? 'bg-gold' : 'bg-neutral-200'
                    }`}
                  ></span>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Load More Call-to-Action - hide when all are shown */}
        {!showAll && filteredProducts.length > itemsPerView && (
          <div className="mt-24 text-center">
            <button 
              onClick={() => { window.location.hash = '#/shop'; }}
              className="group relative bg-obsidian text-white px-16 py-6 font-black uppercase tracking-[0.3em] text-[11px] overflow-hidden transition-all hover:pr-20">
              <span className="relative z-10">Load Full Inventory</span>
              <div className="absolute top-0 left-0 w-0 h-full bg-gold transition-all duration-500 group-hover:w-full -z-0"></div>
              <i className="fas fa-arrow-right absolute right-8 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 group-hover:text-obsidian transition-all"></i>
            </button>
          </div>
        )}
      </div>
      
          <ProductModal product={selectedProduct} onClose={handleCloseModal} />
    </section>
  );
};

export default ShopSection;
