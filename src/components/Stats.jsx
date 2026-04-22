'use client';
import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Award, Users, UtensilsCrossed, Flame } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { icon: Award, label: 'Quality Award', value: '1st', sub: 'Best Philly in Richardson' },
  { icon: Users, label: 'Happy Customers', value: '50k+', sub: 'Serving since 2020' },
  { icon: UtensilsCrossed, label: 'Menu Items', value: '40+', sub: 'Fresh daily ingredients' },
  { icon: Flame, label: 'Spicy Level', value: '100%', sub: 'Real jalapeños & heat' },
];

export default function Stats() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Counter Animation
      const counters = document.querySelectorAll('.stat-counter');
      counters.forEach(counter => {
        const target = parseFloat(counter.getAttribute('data-target'));
        const suffix = counter.getAttribute('data-suffix') || '';
        
        gsap.fromTo(counter, 
          { textContent: 0 }, 
          {
            textContent: target,
            duration: 2,
            ease: "power2.out",
            scrollTrigger: {
              trigger: counter,
              start: "top 85%",
              toggleActions: "play none none none"
            },
            snap: { textContent: 1 },
            onUpdate: function() {
              counter.textContent = Math.floor(counter.textContent) + suffix;
            }
          }
        );
      });

      // Cards Entrance
      gsap.from(".stat-card", {
        y: 60,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-brand-dark overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => {
            const numValue = parseFloat(stat.value);
            const suffix = stat.value.replace(/[0-9.]/g, '');

            return (
              <div
                key={i}
                className="stat-card group p-8 rounded-3xl bg-brand-dark2 border border-white/5 hover:border-brand-red/30 transition-colors text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-brand-red/10 text-brand-red mb-6 transition-transform group-hover:scale-110 group-hover:rotate-3">
                  <stat.icon size={32} />
                </div>
                <h3 className="font-oswald text-4xl font-black text-white mb-2">
                  <span className="stat-counter" data-target={numValue} data-suffix={suffix}>
                    0{suffix}
                  </span>
                </h3>
                <p className="font-oswald text-xs font-bold uppercase tracking-widest text-brand-gold mb-3">{stat.label}</p>
                <p className="font-inter text-sm text-white/40">{stat.sub}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
