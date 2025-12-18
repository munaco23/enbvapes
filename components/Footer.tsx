
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer id="footer" className="bg-obsidian pt-32 pb-16 px-6 lg:px-24 text-white overflow-hidden relative">
      {/* Atmospheric Background Logo */}
      <div className="absolute -bottom-20 -right-20 text-[300px] font-black text-white/5 select-none pointer-events-none italic">V</div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 pb-24 border-b border-white/5">
          
          {/* Brand & Purpose */}
          <div className="space-y-10">
            <div className="flex items-center space-x-4">
              <div className="h-10 w-10 border-2 border-gold flex items-center justify-center rotate-45">
                <span className="text-gold font-black text-xl -rotate-45">V</span>
              </div>
              <span className="text-2xl font-black tracking-tighter uppercase italic">Vapor<span className="text-gold">Vibe</span></span>
            </div>
            <p className="text-neutral-500 font-medium leading-loose text-sm italic">
              "Excellence is not an act, but a habit. We redefine the vaping landscape through unyielding commitment to premium craftsmanship."
            </p>
            <div className="flex space-x-6">
              {['instagram', 'twitter', 'facebook-f', 'linkedin-in'].map((icon) => (
                <a key={icon} href="#" className="text-neutral-500 hover:text-gold transition-colors text-xl">
                  <i className={`fab fa-${icon}`}></i>
                </a>
              ))}
            </div>
          </div>

          {/* Catalog Index */}
          <div>
            <h4 className="text-[11px] font-black uppercase tracking-[0.4em] mb-12 text-gold">The Catalog</h4>
            <ul className="space-y-6">
              {['Pro Mods', 'Pod Collection', 'Liquid Gallery', 'Limited Kits', 'Accessories'].map(link => (
                <li key={link}>
                  <a href="#" className="text-neutral-400 hover:text-white transition-all font-bold text-xs uppercase tracking-widest flex items-center group">
                    <span className="w-0 group-hover:w-4 h-px bg-gold mr-0 group-hover:mr-3 transition-all"></span>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Client Concierge */}
          <div>
            <h4 className="text-[11px] font-black uppercase tracking-[0.4em] mb-12 text-gold">Concierge</h4>
            <ul className="space-y-6">
              {['Order Tracking', 'Shipping Policy', 'Wholesale Elite', 'Privacy Protocol', 'Contact Us'].map(link => (
                <li key={link}>
                  <a href="#" className="text-neutral-400 hover:text-white transition-all font-bold text-xs uppercase tracking-widest flex items-center group">
                    <span className="w-0 group-hover:w-4 h-px bg-gold mr-0 group-hover:mr-3 transition-all"></span>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Protocol */}
          <div className="space-y-8">
            <div>
              <h4 className="text-[11px] font-black uppercase tracking-[0.4em] mb-6 text-gold">Insider Access</h4>
              <p className="text-neutral-500 text-sm font-medium leading-relaxed">Join the inner circle for first access to experimental batches and hardware drops.</p>
            </div>
            <form className="relative">
              <input 
                type="email" 
                placeholder="YOUR EMAIL" 
                className="w-full bg-transparent border-b border-white/20 py-4 px-0 text-white placeholder-neutral-700 focus:outline-none focus:border-gold transition-colors font-bold uppercase text-[11px] tracking-widest"
              />
              <button className="absolute right-0 bottom-4 text-gold hover:text-white transition-colors">
                <i className="fas fa-arrow-right"></i>
              </button>
            </form>
          </div>
        </div>

        {/* Closing Bar */}
        <div className="pt-16 flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="flex flex-col md:flex-row items-center gap-6 text-[10px] font-black text-neutral-600 uppercase tracking-[0.3em]">
            <span>&copy; 2024 VAPORVIBE ELITE LTD</span>
            <span className="hidden md:inline text-gold opacity-30">•</span>
            <a href="#" className="hover:text-white transition-colors">SECURITY Protocol</a>
            <span className="hidden md:inline text-gold opacity-30">•</span>
            <a href="#" className="hover:text-white transition-colors">GDPR COMPLIANCE</a>
          </div>
          
          <div className="flex items-center space-x-10 grayscale opacity-20 hover:grayscale-0 hover:opacity-100 transition-all duration-700">
            <i className="fab fa-cc-visa text-3xl"></i>
            <i className="fab fa-cc-mastercard text-3xl"></i>
            <i className="fab fa-cc-paypal text-3xl"></i>
            <i className="fab fa-cc-apple-pay text-3xl"></i>
          </div>
        </div>

        {/* Global Warning */}
        <div className="mt-20 py-8 px-10 border border-white/5 bg-white/[0.02] text-center">
          <p className="text-[9px] text-neutral-700 leading-relaxed font-black uppercase tracking-[0.4em]">
            NICOTINE WARNING: PRODUCTS ON THIS SITE CONTAIN NICOTINE WHICH IS A HIGHLY ADDICTIVE CHEMICAL. NOT FOR SALE TO MINORS. PLEASE VAPE RESPONSIBLY AND WITHIN THE LIMITS OF THE LAW. PROPOSITION 65 MAY APPLY.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
