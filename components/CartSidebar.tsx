import React from 'react';
import { useCart } from './CartContext';

interface CartSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const CartSidebar: React.FC<CartSidebarProps> = ({ isOpen, onClose }) => {
  const { cartItems, removeFromCart, updateQuantity, cartCount, totalPrice } = useCart();

  return (
    <>
      {/* Overlay */}
      <div 
        className={`fixed inset-0 bg-black transition-opacity duration-500 z-40 ${isOpen ? 'opacity-75' : 'opacity-0 pointer-events-none'}`}
        onClick={onClose}
      ></div>

      {/* Sidebar */}
      <div className={`fixed top-0 right-0 h-full w-full max-w-md bg-white transform transition-transform duration-500 ease-in-out z-50 ${isOpen ? 'translate-x-0 shadow-2xl' : 'translate-x-[105%] shadow-none'}`}>
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-neutral-200">
            <h2 className="text-xl font-black uppercase tracking-widest text-obsidian">Your Cart ({cartCount})</h2>
            <button onClick={onClose} className="text-2xl text-neutral-500 hover:text-obsidian transition-colors">
              <i className="fas fa-times"></i>
            </button>
          </div>

          {/* Cart Items */}
          <div className="flex-grow p-6 overflow-y-auto space-y-6">
            {cartItems.length === 0 ? (
              <div className="text-center text-neutral-500 pt-20">
                <i className="fas fa-shopping-bag text-6xl text-neutral-300 mb-4"></i>
                <p className="font-bold">Your cart is empty.</p>
                <p className="text-sm text-neutral-400">Looks like you haven't added anything yet.</p>
              </div>
            ) : (
              cartItems.map(item => (
                <div key={item.id} className="flex items-start space-x-4">
                  <img src={item.image} alt={item.name} className="w-20 h-20 object-cover border border-neutral-200 rounded-md" />
                  <div className="flex-grow">
                    <h3 className="font-bold text-obsidian">{item.name}</h3>
                    <p className="text-sm text-neutral-500">${(item.price / 100).toFixed(2)}</p>
                    <div className="flex items-center mt-2">
                      <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="h-8 w-8 border border-neutral-300 rounded-l-md hover:bg-neutral-100">-</button>
                      <input 
                        type="text" 
                        value={item.quantity}
                        readOnly
                        className="w-12 h-8 text-center border-t border-b border-neutral-300"
                      />
                      <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="h-8 w-8 border border-neutral-300 rounded-r-md hover:bg-neutral-100">+</button>
                    </div>
                  </div>
                  <button onClick={() => removeFromCart(item.id)} className="text-neutral-400 hover:text-red-500 transition-colors pt-1">
                    <i className="fas fa-trash-alt"></i>
                  </button>
                </div>
              ))
            )}
          </div>

          {/* Footer */}
          {cartItems.length > 0 && (
            <div className="p-6 border-t border-neutral-200 space-y-4 bg-neutral-50">
              <div className="flex justify-between font-bold text-lg text-obsidian">
                <span>Subtotal</span>
                <span>${(totalPrice / 100).toFixed(2)}</span>
              </div>
              <button className="w-full bg-gold text-obsidian py-4 font-black text-sm uppercase tracking-[0.3em] hover:bg-gold-hover transition-all rounded-md shadow-lg hover:shadow-xl">
                Proceed to Checkout
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CartSidebar;
