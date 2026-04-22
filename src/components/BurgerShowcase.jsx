'use client';
import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function BurgerShowcase() {
  const containerRef = useRef(null);
  const burgerRef = useRef(null);
  const textRef = useRef(null);
  const bgTextRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // The "Flying & Spinning" Animation - Made extra smooth
      gsap.fromTo(burgerRef.current, 
        { 
          x: '150vw', 
          y: '50vh', 
          rotation: -720, 
          scale: 0.2,
          filter: 'blur(20px) contrast(2)'
        },
        {
          x: '0',
          y: '0',
          rotation: 0,
          scale: 1,
          filter: 'blur(0px) contrast(1)',
          duration: 3,
          ease: "expo.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 85%",
            end: "top 25%",
            scrub: 2.5, // Even higher scrub for inertia-like smoothness
          }
        }
      );

      // Backtext Parallax - smoother
      gsap.to(bgTextRef.current, {
        xPercent: -50,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 3,
        }
      });

      // Text Entrance
      gsap.from(textRef.current, {
        y: 150,
        opacity: 0,
        duration: 2,
        ease: "power4.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 65%",
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={containerRef} 
      className="py-40 bg-brand-dark relative overflow-hidden flex flex-col items-center justify-center min-h-screen"
    >
      {/* Massive Background Text */}
      <div 
        ref={bgTextRef}
        className="absolute top-1/2 left-0 whitespace-nowrap z-0 pointer-events-none select-none opacity-5"
      >
        <span className="font-oswald text-[30vw] font-black text-white uppercase leading-none">
          THE KING OF FLAVOR
        </span>
      </div>

      {/* Fiery Glow Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-red/20 rounded-full blur-[150px] animate-pulse" />
      </div>

      <div className="container relative z-10 grid lg:grid-cols-2 items-center gap-20">
        
        {/* Left Side Content */}
        <div ref={textRef} className="text-center lg:text-left">
          <motion.span 
            className="inline-block px-8 py-3 rounded-full border border-brand-red text-brand-red font-oswald text-xs font-black uppercase tracking-[0.5em] mb-8"
          >
            Legendary Bite
          </motion.span>
          <h2 className="font-oswald text-8xl md:text-[10rem] font-black text-white uppercase leading-[0.8] mb-10">
            THE <br />
            <span className="text-brand-gold">TITAN</span>
          </h2>
          <p className="font-inter text-2xl text-white/50 mb-12 max-w-lg leading-relaxed italic">
            "Triple-stacked prime beef, artisanal brioche, and our secret sauce that redefined the standard."
          </p>
          
          <div className="flex flex-wrap gap-10 justify-center lg:justify-start items-center">
             <div className="flex flex-col">
                <span className="text-brand-gold font-oswald text-6xl font-black">$18.99</span>
                <span className="text-white/30 text-xs uppercase tracking-widest font-black">Limitless Flavor</span>
             </div>
             <button className="bg-brand-red hover:bg-brand-red/80 text-white px-12 py-6 rounded-2xl font-oswald font-black uppercase tracking-[0.2em] transition-all hover:scale-110 active:scale-95 shadow-[0_20px_50px_rgba(192,26,8,0.5)]">
                Grab The Titan
             </button>
          </div>
        </div>

        {/* Right Side - The Flying Burger */}
        <div className="relative flex items-center justify-center">
          <div 
            ref={burgerRef}
            className="relative z-20 group"
          >
            {/* The Optimized Burger Image */}
            <Image 
              src="/assets/images/titan-burger.png" 
              alt="Titan Burger" 
              width={650}
              height={650}
              priority
              className="w-full h-auto drop-shadow-[0_60px_100px_rgba(0,0,0,0.9)] transition-all duration-700 group-hover:scale-110 group-hover:rotate-12"
            />
            
            {/* Floating Glow */}
            <div className="absolute -inset-20 bg-brand-red/10 blur-[120px] -z-10 rounded-full group-hover:bg-brand-gold/10 transition-colors duration-1000" />
          </div>

          {/* Abstract Spinning Elements */}
          <div className="absolute w-[140%] h-[140%] border border-white/5 rounded-full -z-10 animate-[spin_40s_linear_infinite]" />
          <div className="absolute w-[120%] h-[120%] border border-brand-red/10 rounded-full -z-10 animate-[spin_30s_linear_infinite_reverse]" />
        </div>

      </div>

      {/* Decorative Accents */}
      <div className="absolute bottom-10 left-10 opacity-30 text-white font-oswald font-black text-xs uppercase tracking-[1em] rotate-90 origin-left">
         Premium Quality
      </div>

    </section>
  );
}
