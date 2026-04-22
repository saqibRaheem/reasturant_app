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
          { innerHTML: 0 }, 
          {
            innerHTML: target,
            duration: 2.5,
            ease: "circ.out",
            scrollTrigger: {
              trigger: counter,
              start: "top 85%",
              toggleActions: "play none none none"
            },
            snap: { innerHTML: 1 },
            onUpdate: function() {
              const val = Math.floor(this.targets()[0].innerHTML);
              counter.innerHTML = val + suffix;
            }
          }
        );
      });

      // Staggered Cards Entrance with 3D Flip
      gsap.from(".stat-card", {
        y: 100,
        rotationX: -45,
        opacity: 0,
        duration: 1.2,
        stagger: 0.15,
        ease: "expo.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
        }
      });
      
      // Floating icons animation
      gsap.to(".stat-icon", {
        y: -10,
        duration: 2,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
        stagger: 0.2
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-32 relative overflow-hidden bg-brand-dark z-10 border-y border-white/5">
      {/* Dynamic Background Globs */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-1/2 left-1/4 w-[600px] h-[600px] bg-brand-red rounded-full blur-[150px] -translate-x-1/2 -translate-y-1/2 mix-blend-screen animate-pulse" />
        <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-brand-gold rounded-full blur-[120px] translate-x-1/2 -translate-y-1/2 mix-blend-screen opacity-50" />
      </div>
      
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-brand-red to-transparent opacity-50" />
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-brand-gold to-transparent opacity-50" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
            <motion.h2 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="font-greatvibes text-6xl md:text-8xl text-brand-gold mb-4 tracking-wider"
            >
              The Legacy
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="font-oswald text-4xl md:text-5xl font-black uppercase text-white tracking-widest text-glow-red"
            >
              NUMBERS DON'T LIE
            </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 perspective-[1000px]">
          {stats.map((stat, i) => {
            const numValue = parseFloat(stat.value);
            let suffix = stat.value.replace(/[0-9.]/g, '');
            if (stat.value === '1st') suffix = 'st'; 

            return (
              <motion.div
                key={i}
                whileHover={{ 
                  scale: 1.05, 
                  rotateY: 5,
                  rotateX: 5,
                  z: 50,
                  boxShadow: "0 25px 50px -12px rgba(192, 26, 8, 0.5)"
                }}
                className="stat-card group relative p-8 rounded-[2rem] bg-gradient-to-br from-brand-dark2 via-[#0a0000] to-brand-red/10 border border-white/5 overflow-hidden flex flex-col items-center text-center transform-gpu shadow-2xl"
              >
                {/* Glow effect that tracks hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-t from-brand-red/20 via-transparent to-transparent pointer-events-none" />
                
                {/* Icon Wrapper */}
                <div className="stat-icon relative flex items-center justify-center w-20 h-20 rounded-[1.5rem] bg-gradient-to-br from-brand-red/20 to-transparent border border-brand-red/30 text-brand-gold mb-8 shadow-[0_0_30px_rgba(192,26,8,0.2)] group-hover:shadow-[0_0_50px_rgba(232,160,32,0.4)] group-hover:text-white transition-all duration-500 z-10">
                  <div className="absolute inset-0 bg-brand-red/20 blur-xl rounded-full" />
                  <stat.icon size={36} className="relative z-10 drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]" />
                </div>

                {/* Number Counter */}
                <h3 className="font-oswald text-6xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-white/50 mb-3 drop-shadow-2xl relative z-10">
                  <span className="stat-counter font-black tracking-tighter" data-target={numValue} data-suffix={suffix}>
                    0{suffix}
                  </span>
                </h3>
                
                {/* Label */}
                <p className="font-oswald text-sm md:text-base font-bold uppercase tracking-[0.2em] text-brand-red mb-2 group-hover:text-brand-gold transition-colors duration-300 relative z-10">
                  {stat.label}
                </p>
                
                {/* Subtext */}
                <p className="font-inter text-sm text-white/40 font-light max-w-[200px] leading-relaxed relative z-10 group-hover:text-white/70 transition-colors">
                  {stat.sub}
                </p>

                {/* Animated Boarder lines */}
                <div className="absolute top-0 left-0 w-0 h-[2px] bg-brand-gold group-hover:w-full transition-all duration-700 ease-out" />
                <div className="absolute bottom-0 right-0 w-0 h-[2px] bg-brand-red group-hover:w-full transition-all duration-700 ease-out" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
