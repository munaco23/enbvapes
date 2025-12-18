import React from 'react';
import { Product } from '../types';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
}

const ProductModal: React.FC<ProductModalProps> = ({ product, onClose }) => {
  if (!product) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4 animate-fade-in">
      <div className="bg-white rounded-lg shadow-2xl w-full max-w-4xl max-h-[90vh] flex flex-col lg:flex-row relative animate-slide-up">
        <button 
          onClick={onClose} 
          className="absolute -top-4 -right-4 bg-gold text-obsidian h-10 w-10 rounded-full flex items-center justify-center text-xl shadow-lg hover:scale-110 transition-transform z-10"
        >
          <i className="fas fa-times"></i>
        </button>

        {/* Image Section */}
        <div className="w-full lg:w-1/2 p-8 flex items-center justify-center bg-neutral-100 rounded-t-lg lg:rounded-l-lg lg:rounded-t-none">
          <img src={product.image} alt={product.name} className="max-h-[60vh] object-contain" />
        </div>

        {/* Details Section */}
        <div className="w-full lg:w-1/2 p-8 flex flex-col overflow-y-auto">
          <span className="text-gold font-black uppercase tracking-[0.3em] text-[10px]">{product.category}</span>
          <h2 className="text-4xl font-black text-obsidian uppercase tracking-tighter mt-2">{product.name}</h2>
          
          <div className="flex items-baseline space-x-3 mt-4">
            <span className="text-3xl font-black text-obsidian">${(product.price / 100).toFixed(2)}</span>
            {product.onSale && product.oldPrice && (
              <span className="text-xl text-neutral-400 line-through">${(product.oldPrice / 100).toFixed(2)}</span>
            )}
          </div>

          <p className="text-neutral-600 mt-6 leading-relaxed">{product.description}</p>

          <div className="mt-8 pt-8 border-t border-neutral-200">
            <button className="w-full bg-gold text-obsidian py-4 font-black text-sm uppercase tracking-[0.3em] hover:bg-gold-hover transition-all">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
       <style>{`
        @keyframes fade-in {
            from { opacity: 0; }
            to { opacity: 1; }
        }
        .animate-fade-in { animation: fade-in 0.3s ease-out forwards; }

        @keyframes slide-up {
            from { transform: translateY(20px); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
        }
        .animate-slide-up { animation: slide-up 0.4s ease-out forwards; }
      `}</style>
    </div>
  );
};

export default ProductModal;
