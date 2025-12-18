import React from 'react';

const Newsletter: React.FC = () => {
  return (
    <section id="newsletter" className="py-24 bg-deep-slate border-t border-white/5">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="mb-8">
          <h3 className="text-3xl md:text-4xl font-black tracking-tight text-white uppercase">Join The Elite</h3>
          <p className="mt-4 text-sm font-bold tracking-[0.3em] uppercase text-neutral-400">Get exclusive offers & early access</p>
        </div>

        <form className="max-w-xl mx-auto flex flex-col sm:flex-row items-center gap-4 p-2 border border-white/10 bg-obsidian">
          <div className="flex-grow w-full flex items-center pl-4">
            <i className="fas fa-envelope text-gold mr-3"></i>
            <input
              type="email"
              placeholder="Enter your email address..."
              className="w-full bg-transparent text-white placeholder-neutral-500 focus:outline-none text-sm"
              required
            />
          </div>
          <button type="submit" className="w-full sm:w-auto bg-gold text-obsidian px-8 py-4 font-black text-[11px] uppercase tracking-[0.2em] hover:bg-neutral-300 transition-all flex-shrink-0">
            Subscribe
          </button>
        </form>

        <p className="mt-6 text-xs text-neutral-500">
          By subscribing, you agree to our Privacy Policy. Unsubscribe at any time.
        </p>
      </div>
    </section>
  );
};

export default Newsletter;
