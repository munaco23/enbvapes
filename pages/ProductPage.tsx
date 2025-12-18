import React, { useEffect, useMemo, useState } from 'react';
import { PRODUCTS } from '../constants';
import { Product, Category } from '../types';

const ProductPage: React.FC = () => {
  const [products, setProducts] = useState<Product[]>(PRODUCTS);
  const [product, setProduct] = useState<Product | null>(null);
  const [activeImageIndex, setActiveImageIndex] = useState<number>(0);

  const productId = useMemo(() => {
    const hash = typeof window !== 'undefined' ? window.location.hash : '';
    const match = hash.match(/^#\/product\/(.+)$/);
    return match ? decodeURIComponent(match[1]) : '';
  }, [typeof window !== 'undefined' ? window.location.hash : '']);

  useEffect(() => {
    let cancelled = false;
    const load = async () => {
      try {
        const url = `${import.meta.env.BASE_URL}sample-product.json`;
        const res = await fetch(url, { cache: 'no-store' });
        if (!res.ok) return;
        const data = await res.json();
        const arr: any[] = Array.isArray(data) ? data : (Array.isArray(data?.products) ? data.products : []);
        if (!cancelled && arr.length) {
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
        // keep fallback PRODUCTS
      }
    };
    load();
    return () => { cancelled = true; };
  }, []);

  useEffect(() => {
    const p = products.find((x) => x.id === productId) || null;
    setProduct(p);
    setActiveImageIndex(0);
  }, [products, productId]);

  if (!product) {
    return (
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-neutral-500">Product not found.</p>
        </div>
      </section>
    );
  }

  const gallery = product.images && product.images.length > 0 ? product.images : (product.image ? [product.image] : []);
  const primary = gallery[activeImageIndex] || '';
  const waNumber = '923107158348'; // 03107158348 in international format
  const waText = encodeURIComponent(`Hi! I'm interested in this product: ${product.name}. Can you share details/price?`);
  const waUrl = `https://wa.me/${waNumber}?text=${waText}`;

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Images */}
        <div>
          <div className="w-full aspect-[1/1] bg-white border border-neutral-100 flex items-center justify-center overflow-hidden">
            <img src={primary} alt={product.name} className="w-full h-full object-contain p-4" />
          </div>
          {gallery.length > 1 && (
            <div className="mt-4 grid grid-cols-5 sm:grid-cols-6 gap-3">
              {gallery.map((src, idx) => (
                <button key={idx} onClick={() => setActiveImageIndex(idx)} className={`border ${idx === activeImageIndex ? 'border-gold' : 'border-neutral-200'} rounded-md bg-white aspect-square overflow-hidden`}>
                  <img src={src} alt={`thumb-${idx}`} className="w-full h-full object-contain p-2" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Info */}
        <div className="space-y-5">
          <div className="text-[11px] font-black uppercase tracking-[0.3em] text-neutral-500">{product.category}</div>
          <h1 className="text-3xl md:text-4xl font-black text-obsidian leading-tight">{product.name}</h1>
          <div className="flex items-center gap-2 text-neutral-600">
            <i className="fas fa-star text-gold"></i>
            <span className="font-bold">{product.rating}</span>
          </div>
          <div className="pt-2">
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-md font-black uppercase tracking-[0.25em] text-[10px]"
            >
              <i className="fab fa-whatsapp text-lg"></i>
              WhatsApp
            </a>
          </div>
          <p className="text-neutral-600 leading-relaxed whitespace-pre-line">{product.description}</p>
          <div className="pt-4">
            <a href="#/shop" className="inline-flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.3em] text-obsidian hover:text-gold">
              <i className="fas fa-arrow-left"></i>
              Back to Shop
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductPage;
