
import React from 'react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onClick: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onClick }) => {
  const primaryImage = product.images?.[0] || product.image;
  const handleCardClick = () => {
    // Always navigate to product page; also call any provided handler
    window.location.hash = `#/product/${product.id}`;
    try { onClick && onClick(); } catch { /* noop */ }
  };
  return (
    <div className="group bg-white border border-neutral-100 flex flex-col transition-all duration-500 hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] p-3 cursor-pointer" onClick={handleCardClick}>
      {/* Image Showcase */}
      <div className="relative w-full aspect-[1/1] flex items-center justify-center overflow-hidden mb-4 bg-white transition-colors duration-500">
        <img 
          src={primaryImage} 
          alt={product.name}
          className="w-full h-full object-contain p-3 md:p-4 transition-all duration-700 group-hover:scale-105"
        />
        
        {/* Sale Tag */}
        {product.onSale && (
          <div className="absolute top-0 right-0 bg-gold text-obsidian text-[9px] font-black uppercase tracking-widest px-3 py-1.5">
            Limited Sale
          </div>
        )}

        {/* Hover Action Bar */}
        <div className="absolute bottom-0 left-0 w-full translate-y-full group-hover:translate-y-0 transition-transform duration-500 flex border-t border-neutral-100 bg-white">
                        <button 
              onClick={(e) => e.stopPropagation()} 
              className="flex-1 py-3 text-[10px] font-black uppercase tracking-widest text-obsidian hover:bg-gold hover:text-obsidian transition-all">

                Add to Cart
            </button>
        </div>
      </div>

      {/* Info Section */}
      <div className="space-y-2 px-2 pb-2 flex-grow flex flex-col">
        <div className="flex justify-between items-center text-[9px] font-bold uppercase tracking-[0.2em] text-neutral-400">
            <span>{product.category}</span>
            <div className="flex items-center space-x-1">
                <i className="fas fa-star text-gold"></i>
                <span className="text-neutral-600">{product.rating}</span>
            </div>
        </div>
        
        <h3 className="text-obsidian text-base font-bold group-hover:text-gold transition-colors duration-300 line-clamp-2">
          {product.name}
        </h3>
        
        <p className="text-neutral-500 text-[11px] leading-relaxed line-clamp-2">
            {product.description}
        </p>
        {/* Pricing removed as requested */}
        <div className="pt-2 mt-auto"></div>
      </div>
    </div>
  );
};

export default ProductCard;
