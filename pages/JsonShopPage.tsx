import React, { useEffect, useMemo, useState } from 'react';
import { PRODUCTS } from '../constants';
import { Category, Product } from '../types';
import ProductCard from '../components/ProductCard';

const JsonShopPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<Category>('Disposables');
  const [products, setProducts] = useState<Product[]>(PRODUCTS);

  const categories: { label: Category; icon: string }[] = [
    { label: 'Disposables', icon: 'fa-box' },
    { label: 'Rolling Paper', icon: 'fa-scroll' },
    { label: 'Accessories', icon: 'fa-wrench' }
  ];

  // Pick category from URL hash if provided (e.g., #/shop?cat=Disposables)
  useEffect(() => {
    const valid = categories.map(c => c.label);
    const applyFromHash = () => {
      const hash = typeof window !== 'undefined' ? window.location.hash : '';
      if (hash.startsWith('#/shop')) {
        const qIndex = hash.indexOf('?');
        if (qIndex !== -1) {
          const search = new URLSearchParams(hash.substring(qIndex + 1));
          const cat = search.get('cat');
          if (cat && valid.includes(cat as Category)) {
            setActiveCategory(cat as Category);
          }
        }
      }
    };
    applyFromHash();
    window.addEventListener('hashchange', applyFromHash);
    return () => window.removeEventListener('hashchange', applyFromHash);
  }, []);

  // Load products from JSON with fallback to constants
  useEffect(() => {
    let cancelled = false;
    const load = async () => {
      try {
        const url = `${import.meta.env.BASE_URL}sample-product.json`;
        const res = await fetch(url, { cache: 'no-store' });
        if (!res.ok) return;
        const data = await res.json();
        const arr = Array.isArray(data) ? data : (Array.isArray((data as any)?.products) ? (data as any).products : []);
        if (!cancelled && arr.length) {
          const mapped = (arr as any[]).map((p) => ({
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
      } catch {
        // keep fallback PRODUCTS
      }
    };
    load();
    return () => { cancelled = true; };
  }, []);

  const filteredProducts = useMemo(() => products.filter(p => p.category === activeCategory), [products, activeCategory]);

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-2 md:px-6 py-16 md:py-24">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 md:mb-16 gap-6 md:gap-8">
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
          {/* Filters */}
          <div className="w-full lg:w-1/4 lg:sticky top-24 self-start">
            <div className="grid grid-cols-2 gap-3 pb-4 lg:grid-cols-1 lg:pb-0 lg:pr-4">
              {categories.map((cat) => (
                <button
                  key={cat.label}
                  onClick={() => setActiveCategory(cat.label)}
                  className={`block flex items-center gap-3 px-6 py-4 font-black text-[11px] uppercase tracking-[0.2em] transition-all relative group w-full text-left ${
                    activeCategory === cat.label ? 'text-obsidian' : 'text-neutral-400 hover:text-obsidian'
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

          {/* Products Grid */}
          <div className="w-full lg:w-3/4">
            <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-8">
              {filteredProducts.map((p) => (
                <ProductCard key={p.id} product={p} onClick={() => { window.location.hash = `#/product/${p.id}`; }} />
              ))}
            </div>
            {filteredProducts.length === 0 && (
              <div className="text-center text-neutral-400 py-20 col-span-full">No products in this category.</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default JsonShopPage;
