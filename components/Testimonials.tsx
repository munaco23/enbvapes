import React, { useEffect, useState } from 'react';

const testimonials = [
  {
    quote: "The flavor is incredibly rich and the hardware feels premium. ENBVAPES has set a new standard for me.",
    name: "Alex R.",
    handle: "@alexvapes",
    avatar: "https://i.pravatar.cc/100?u=alex",
    rating: 5
  },
  {
    quote: "Flawless performance every time. The Pro Max is a beast, and the support team is genuinely helpful.",
    name: "Jessica M.",
    handle: "@jessm_clouds",
    avatar: "https://i.pravatar.cc/100?u=jessica",
    rating: 5
  },
  {
    quote: "I was skeptical about disposables, but the Next-Gen line is a game-changer. Long-lasting and great taste.",
    name: "David L.",
    handle: "@davelogic",
    avatar: "https://i.pravatar.cc/100?u=david",
    rating: 5
  }
];

const Testimonials: React.FC = () => {
  // Mobile slider state: show one card, then auto-advance
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    const id = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 3500); // pause then slide every 3.5s
    return () => clearInterval(id);
  }, []);

  return (
    <section id="testimonials" className="py-28 bg-obsidian border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h3 className="text-3xl md:text-4xl font-black tracking-tight text-white uppercase">Voices of the Vibe</h3>
          <div className="mx-auto mt-4 h-1 w-24 bg-gold"></div>
          <p className="mt-5 text-sm font-bold tracking-[0.3em] uppercase text-neutral-400">What our customers say</p>
        </div>

        {/* Mobile: one-at-a-time auto slider */}
        <div className="md:hidden -mx-6 px-6">
          <div className="overflow-hidden pb-2">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {testimonials.map((testimonial, i) => (
                <div key={i} className="min-w-full pr-4">
                  <div className="bg-deep-slate p-6 border border-white/10 flex flex-col items-start space-y-4">
                    <div className="flex items-center text-gold">
                      {[...Array(testimonial.rating)].map((_, starIndex) => (
                        <i key={starIndex} className="fas fa-star"></i>
                      ))}
                    </div>
                    <blockquote className="text-neutral-300 leading-relaxed italic">
                      “{testimonial.quote}”
                    </blockquote>
                    <div className="flex items-center space-x-4 pt-4 mt-auto border-t border-white/5 w-full">
                      <img src={testimonial.avatar} alt={testimonial.name} className="h-10 w-10 rounded-full border-2 border-gold" />
                      <div>
                        <p className="font-bold text-white">{testimonial.name}</p>
                        <p className="text-neutral-400 text-sm">{testimonial.handle}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Desktop grid */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, i) => (
            <div key={i} className="bg-deep-slate p-8 border border-white/10 flex flex-col items-start space-y-6 transition-all hover:border-gold hover:-translate-y-2">
              <div className="flex items-center text-gold">
                {[...Array(testimonial.rating)].map((_, starIndex) => (
                  <i key={starIndex} className="fas fa-star"></i>
                ))}
              </div>
              <blockquote className="text-neutral-300 leading-relaxed italic text-lg">
                “{testimonial.quote}”
              </blockquote>
              <div className="flex items-center space-x-4 pt-4 mt-auto border-t border-white/5 w-full">
                <img src={testimonial.avatar} alt={testimonial.name} className="h-12 w-12 rounded-full border-2 border-gold" />
                <div>
                  <p className="font-bold text-white">{testimonial.name}</p>
                  <p className="text-neutral-400 text-sm">{testimonial.handle}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
