import React from 'react';

const Shipping: React.FC = () => {
  return (
    <section id="shipping" className="py-24 bg-white border-t border-neutral-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-10">
          <span className="text-gold font-black uppercase tracking-[0.35em] text-[10px]">Logistics</span>
          <h2 className="mt-3 text-3xl md:text-5xl font-black tracking-tighter text-obsidian">Worldwide Shipping</h2>
          <p className="mt-3 text-neutral-600 max-w-2xl mx-auto">
            Fast, reliable delivery to 150+ countries with tracked options. Duties and taxes may apply at destination.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-6">
          <div className="rounded-xl border border-neutral-200 p-6 text-center bg-white">
            <img src="https://flagcdn.com/w80/us.png" alt="USA Flag" className="h-12 mx-auto mb-4" />
            <div className="font-black uppercase tracking-widest text-xs text-neutral-700">United States</div>
            <p className="text-neutral-500 text-sm mt-2">Expedited USPS/UPS options available.</p>
          </div>
          <div className="rounded-xl border border-neutral-200 p-6 text-center bg-white">
            <img src="https://flagcdn.com/w80/gb.png" alt="UK Flag" className="h-12 mx-auto mb-4" />
            <div className="font-black uppercase tracking-widest text-xs text-neutral-700">United Kingdom</div>
            <p className="text-neutral-500 text-sm mt-2">Royal Mail / courier partners with tracking.</p>
          </div>
          <div className="rounded-xl border border-neutral-200 p-6 text-center bg-white">
            <img src="https://flagcdn.com/w80/eu.png" alt="Europe Flag" className="h-12 mx-auto mb-4" />
            <div className="font-black uppercase tracking-widest text-xs text-neutral-700">Europe</div>
            <p className="text-neutral-500 text-sm mt-2">Priority lanes across EU member states.</p>
          </div>
          <div className="rounded-xl border border-neutral-200 p-6 text-center bg-white">
            <img src="https://flagcdn.com/w80/ae.png" alt="UAE Flag" className="h-12 mx-auto mb-4" />
            <div className="font-black uppercase tracking-widest text-xs text-neutral-700">United Arab Emirates</div>
            <p className="text-neutral-500 text-sm mt-2">Express Dubai hub with GCC coverage.</p>
          </div>
          <div className="rounded-xl border border-neutral-200 p-6 text-center bg-white">
            <img src="https://flagcdn.com/w80/pk.png" alt="Pakistan Flag" className="h-12 mx-auto mb-4" />
            <div className="font-black uppercase tracking-widest text-xs text-neutral-700">Pakistan</div>
            <p className="text-neutral-500 text-sm mt-2">Tracked delivery to major cities nationwide.</p>
          </div>
          <div className="rounded-xl border border-neutral-200 p-6 text-center bg-white">
            <img src="https://flagcdn.com/w80/cn.png" alt="China Flag" className="h-12 mx-auto mb-4" />
            <div className="font-black uppercase tracking-widest text-xs text-neutral-700">China</div>
            <p className="text-neutral-500 text-sm mt-2">Reliable routes across major provinces.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Shipping;
