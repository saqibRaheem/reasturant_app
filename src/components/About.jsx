import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Steam from './Steam';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import burgerImg from "../assets/images/flaming-hot-zinger.jpeg"

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef = useRef(null);
  const legacyRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Parallax effect for the background text
      gsap.to(legacyRef.current, {
        x: -200,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 2,
        }
      });

      // Split text-like reveal for heading
      gsap.from(".about-heading", {
        y: 100,
        opacity: 0,
        duration: 1.2,
        ease: "power4.out",
        scrollTrigger: {
          trigger: ".about-heading",
          start: "top 90%",
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-32 bg-brand-dark relative overflow-hidden" id="about">
      {/* Thick Smoke GIF Background */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center mix-blend-color-dodge opacity-5"
          style={{ backgroundImage: `url('https://media.giphy.com/media/hS42TzhV6NdfM464nO/giphy.gif')` }}
        />
      </div>

      {/* Decorative large text in background */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden flex items-center justify-center opacity-[0.03]">
        <h2 ref={legacyRef} className="text-[30rem] font-oswald font-black uppercase text-white leading-none rotate-12 whitespace-nowrap">
          LEGACY LEGACY LEGACY
        </h2>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          
          <div className="relative group">
            <motion.div 
              initial={{ opacity: 0, rotate: -10, scale: 0.9 }}
              whileInView={{ opacity: 1, rotate: 0, scale: 1 }}
              viewport={{ once: true }}
              className="relative z-10 rounded-[4rem] overflow-hidden border-4 border-white/5 aspect-[4/5] shadow-[0_50px_100px_-20px_rgba(0,0,0,1)]"
            >
              <Steam />
              <img 
                src={burgerImg} 
                alt="The Sizzle" 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 group-hover:rotate-2"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/20 to-transparent" />
              
              {/* Overlay Text */}
              <div className="absolute bottom-12 left-12 right-12">
                <div className="font-oswald text-4xl font-bold text-white uppercase leading-none mb-2">The Secret lies in the <span className="font-greatvibes text-brand-red text-6xl lowercase">Fire</span></div>
                <div className="font-inter text-sm text-white/60 uppercase tracking-widest">Handmade since 2020</div>
              </div>
            </motion.div>
            
            {/* Floating Stats */}
            <motion.div 
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="absolute -top-12 -right-12 z-20 bg-brand-gold p-8 rounded-[3rem] shadow-2xl rotate-12 transition-transform hover:rotate-0"
            >
              <div className="text-center text-brand-dark">
                <span className="block font-oswald text-6xl font-black">100%</span>
                <span className="block font-inter text-xs font-bold uppercase tracking-widest">Prime Ribeye</span>
              </div>
            </motion.div>

            <motion.div 
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 }}
              className="absolute -bottom-12 -left-12 z-20 glass-morphism p-8 rounded-[3rem] -rotate-12 transition-transform hover:rotate-0"
            >
              <div className="text-center">
                <span className="block font-oswald text-4xl font-black text-white">FRESH</span>
                <span className="block font-inter text-xs font-bold uppercase tracking-widest text-brand-red">Daily Baked Bread</span>
              </div>
            </motion.div>
          </div>

          <div className="space-y-12">
            <header>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-block px-6 py-2 rounded-full bg-brand-red/10 border border-brand-red/30 text-brand-red font-oswald text-sm font-bold uppercase tracking-[0.4em] mb-8"
              >
                Our Passion
              </motion.div>
              <motion.h2 
                className="about-heading font-oswald text-7xl md:text-8xl font-black uppercase text-white leading-[0.9] mb-8"
              >
                WE BORN FROM THE <span className="font-greatvibes text-brand-red text-8xl md:text-9xl normal-case italic">Flames</span>
              </motion.h2>
            </header>

            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="space-y-8 border-l-2 border-brand-red/30 pl-10"
            >
              <p className="font-inter text-2xl text-white/80 leading-relaxed font-light">
                At S&S CheeseSteaks, we don't just cook—we orchestrate a symphony of heat, smoke, and seasoning. 
              </p>
              <p className="font-inter text-lg text-white/50 leading-relaxed">
                Our story is simple: We were tired of "average." We wanted the bite that halts the world. 
                Using only the finest cuts of ribeye and our signature smash technique, we've created a flavor that's impossible to ignore.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="grid grid-cols-2 gap-12 pt-6"
            >
              <div className="group cursor-default">
                <div className="w-12 h-12 rounded-2xl bg-brand-gold/20 flex items-center justify-center mb-4 transition-transform group-hover:scale-125 group-hover:bg-brand-gold/40">
                  <span className="text-brand-gold text-2xl">🔥</span>
                </div>
                <h4 className="font-oswald text-white text-xl font-bold uppercase tracking-widest mb-2">High Heat</h4>
                <p className="font-inter text-sm text-white/40">Sealed-in juices and charred perfection every time.</p>
              </div>
              <div className="group cursor-default">
                <div className="w-12 h-12 rounded-2xl bg-brand-red/20 flex items-center justify-center mb-4 transition-transform group-hover:scale-125 group-hover:bg-brand-red/40">
                  <span className="text-brand-red text-2xl">✨</span>
                </div>
                <h4 className="font-oswald text-white text-xl font-bold uppercase tracking-widest mb-2">Secret Melt</h4>
                <p className="font-inter text-sm text-white/40">Our proprietary cheese blend that flows like lava.</p>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
