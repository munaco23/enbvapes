import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="relative order-2 lg:order-1">
          <div className="overflow-hidden">
            <img
              src="/images/about/about.png"
              alt="ENBVAPES Craft Flavors"
              className="w-full h-[420px] object-cover"
            />
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <span className="text-gold font-black uppercase tracking-[0.4em] text-[10px]">About ENBVAPES</span>
          <h2 className="mt-4 text-4xl md:text-6xl font-black tracking-tighter text-obsidian leading-[0.95] uppercase">
            Crafted For Flavor. Built For Performance.
          </h2>
          <p className="mt-6 text-neutral-600 leading-relaxed max-w-prose">
            We create premium hardware and flavors engineered for consistency, purity, and rich vapor. Our mission is simple: deliver a refined experience that feels effortless and tastes unforgettable.
          </p>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm">
            <div className="flex items-start space-x-3">
              <i className="fas fa-gem text-gold mt-1"></i>
              <div>
                <h4 className="font-black uppercase tracking-widest text-xs text-obsidian">Curated Materials</h4>
                <p className="text-neutral-500">High-grade alloys, food-safe components, and rigorous QA.</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <i className="fas fa-flask text-gold mt-1"></i>
              <div>
                <h4 className="font-black uppercase tracking-widest text-xs text-obsidian">Signature Flavors</h4>
                <p className="text-neutral-500">Balanced profiles developed with expert tasters.</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <i className="fas fa-microchip text-gold mt-1"></i>
              <div>
                <h4 className="font-black uppercase tracking-widest text-xs text-obsidian">Precision Chipsets</h4>
                <p className="text-neutral-500">Instant ignition, consistent output, and intelligent safety.</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <i className="fas fa-shield-alt text-gold mt-1"></i>
              <div>
                <h4 className="font-black uppercase tracking-widest text-xs text-obsidian">Trusted Support</h4>
                <p className="text-neutral-500">Fast service, real guidance, and genuine parts.</p>
              </div>
            </div>
          </div>

          <div className="mt-10">
            <a href="#shop" className="inline-block bg-gold text-obsidian px-10 py-4 font-black text-[11px] uppercase tracking-[0.3em] hover:bg-neutral-300 transition-all">
              Explore The Lineup
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
