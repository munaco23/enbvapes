import React, { useEffect, useRef, useState } from 'react';

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
  const scrollerRef = useRef<HTMLDivElement | null>(null);
  const sectionRef = useRef<HTMLElement | null>(null);
  const intervalRef = useRef<number | null>(null);
  const interactionTimeoutRef = useRef<number | null>(null);
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(false);
  const [interacting, setInteracting] = useState(false);

  // Smooth scroll helper with easing to a specific scrollLeft
  const smoothScrollTo = (el: HTMLDivElement, targetX: number, duration = 600) => {
    const startX = el.scrollLeft;
    const change = targetX - startX;
    const startTime = performance.now();
    const easeInOutQuad = (t: number) => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t);
    const step = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(1, elapsed / duration);
      const eased = easeInOutQuad(progress);
      el.scrollLeft = startX + change * eased;
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  };

  // Observe if section is in viewport
  useEffect(() => {
    const node = sectionRef.current;
    if (!node || typeof IntersectionObserver === 'undefined') return;
    const io = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setVisible(entry.isIntersecting && entry.intersectionRatio > 0.35);
      },
      { threshold: [0, 0.25, 0.5, 0.75, 1] }
    );
    io.observe(node);
    return () => io.disconnect();
  }, []);

  // Auto-advance while visible and not interacting
  useEffect(() => {
    const shouldRun = visible && !interacting;
    const el = scrollerRef.current;
    if (!shouldRun || !el) {
      if (intervalRef.current) {
        window.clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
      return;
    }
    intervalRef.current = window.setInterval(() => {
      setIndex((prev) => {
        const next = (prev + 1) % testimonials.length;
        const cards = el.querySelectorAll<HTMLElement>('.snap-card');
        const target = cards[next] as HTMLElement | undefined;
        if (target) {
          const targetCenter = target.offsetLeft - (el.clientWidth - target.clientWidth) / 2;
          smoothScrollTo(el, targetCenter, 700);
        }
        return next;
      });
    }, 3500);
    return () => {
      if (intervalRef.current) {
        window.clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [visible, interacting]);

  // Update index based on manual scroll position
  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    const handler = () => {
      const cards = Array.from(el.querySelectorAll('.snap-card')) as HTMLElement[];
      if (cards.length === 0) return;
      // find the card whose left is closest to scrollLeft + half width
      const center = el.scrollLeft + el.clientWidth / 2;
      let closest = 0;
      let minDelta = Infinity;
      cards.forEach((card: HTMLElement, i) => {
        const rectLeft = card.offsetLeft + card.clientWidth / 2;
        const delta = Math.abs(rectLeft - center);
        if (delta < minDelta) { minDelta = delta; closest = i; }
      });
      setIndex(closest);
    };
    el.addEventListener('scroll', handler, { passive: true });
    return () => el.removeEventListener('scroll', handler as any);
  }, []);

  return (
    <section id="testimonials" ref={sectionRef} className="py-28 bg-obsidian border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h3 className="text-3xl md:text-4xl font-black tracking-tight text-white uppercase">Voices of the Vibe</h3>
          <div className="mx-auto mt-4 h-1 w-24 bg-gold"></div>
          <p className="mt-5 text-sm font-bold tracking-[0.3em] uppercase text-neutral-400">What our customers say</p>
        </div>

        {/* Mobile: manual horizontal scroll with snap */}
        <div className="md:hidden -mx-6 px-6">
          <div
            ref={scrollerRef}
            className="overflow-x-auto overflow-y-hidden pb-2 snap-x snap-mandatory scroll-smooth"
            onTouchStart={() => {
              setInteracting(true);
              if (intervalRef.current) { window.clearInterval(intervalRef.current); intervalRef.current = null; }
              if (interactionTimeoutRef.current) { window.clearTimeout(interactionTimeoutRef.current); }
            }}
            onTouchEnd={() => {
              if (interactionTimeoutRef.current) { window.clearTimeout(interactionTimeoutRef.current); }
              interactionTimeoutRef.current = window.setTimeout(() => setInteracting(false), 1200);
            }}
          >
            <div className="flex gap-4">
              {testimonials.map((testimonial, i) => (
                <div key={i} className="snap-center shrink-0 w-[85%] snap-card">
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
