import { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import gsap from 'gsap';
import Steam from './Steam';


export default function Hero() {
  const embersRef = useRef(null);
  const containerRef = useRef(null);
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 150]);
  const rotate = useTransform(scrollY, [0, 500], [0, 15]);

  useEffect(() => {
    const container = embersRef.current;
    if (!container) return;
    const particles = [];

    // Create more realistic embers
    for (let i = 0; i < 40; i++) {
      const el = document.createElement('div');
      el.className = 'absolute pointer-events-none rounded-full blur-[1px]';
      const size = Math.random() * 4 + 2;
      const hue = Math.random() * 30 + 10; // Orange/Red range
      Object.assign(el.style, {
        width: size + 'px',
        height: size + 'px',
        background: `rgba(255, ${Math.random() * 100 + 50}, 0, ${Math.random() * 0.8 + 0.2})`,
        boxShadow: `0 0 ${size * 4}px ${size}px rgba(255, 100, 0, 0.4)`,
        zIndex: 5
      });
      container.appendChild(el);
      particles.push(el);

      const startX = Math.random() * window.innerWidth;
      const travelY = -(Math.random() * 400 + 300);
      const travelX = (Math.random() - 0.5) * 200;
      const dur = Math.random() * 3 + 3;

      gsap.set(el, { x: startX, y: window.innerHeight + 10, opacity: 0 });
      gsap.to(el, {
        y: travelY,
        x: `+=${travelX}`,
        opacity: 1,
        duration: dur,
        repeat: -1,
        delay: Math.random() * 5,
        ease: "power1.out",
        onRepeat: () => {
          gsap.set(el, { x: Math.random() * window.innerWidth, y: window.innerHeight + 10, opacity: 0 });
        }
      });
    }

    const mouseMove = (e) => {
      const { clientX, clientY } = e;
      gsap.to(particles, {
        x: (i) => `+=${(clientX - window.innerWidth / 2) * 0.02 * (i % 5)}`,
        y: (i) => `+=${(clientY - window.innerHeight / 2) * 0.02 * (i % 5)}`,
        duration: 2,
        ease: "power2.out"
      });
    };

    window.addEventListener('mousemove', mouseMove);
    return () => {
      window.removeEventListener('mousemove', mouseMove);
      particles.forEach(p => p.remove());
    };
  }, []);

  return (
    <section ref={containerRef} className="relative min-h-[100svh] flex items-center overflow-hidden bg-brand-dark" id="home">
      {/* Specialty Effects */}
      <div className="embers absolute inset-0 pointer-events-none z-[6]" ref={embersRef} />

      {/* Background Layers */}
      <motion.div
        style={{ y: y1 }}
        className="absolute inset-0 z-0 scale-110"
      >
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=2000&auto=format&fit=crop')`,
            filter: 'brightness(0.3) contrast(1.3)'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-brand-dark/20" />
      </motion.div>

      <div className="relative z-20 container mx-auto px-6 py-20 lg:py-0 w-full flex flex-col lg:flex-row items-center justify-between min-h-screen gap-12 mt-24">
        <div className="w-full lg:w-3/5 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-3 bg-brand-red/10 border border-brand-red/30 px-4 py-2 rounded-full mb-8 backdrop-blur-md"
          >
            <span className="w-2 h-2 rounded-full bg-brand-red animate-ping" />
            <span className="font-greatvibes text-xl text-brand-red lowercase">
              authentic philly experience
            </span>
          </motion.div>

          <h1 className="flex flex-col font-oswald font-black uppercase leading-[0.85] mb-8">
            <motion.span
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="text-6xl md:text-8xl text-white/95"
            >
              TASTE THE
            </motion.span>
            <motion.span
              initial={{ opacity: 0, scale: 1.5, filter: 'blur(20px)' }}
              animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
              transition={{
                duration: 1.2,
                delay: 0.5,
                type: "spring",
                stiffness: 80
              }}
              className="text-8xl md:text-[10rem] lg:text-[12rem] xl:text-[16rem] text-transparent [-webkit-text-stroke:2px_#ff4d00] drop-shadow-[0_0_100px_rgba(255,77,0,0.8)] py-4 leading-none"
            >
              FLAME
            </motion.span>
            
            <motion.span
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="text-5xl md:text-7xl text-white tracking-widest flex items-center gap-4 flex-wrap justify-center lg:justify-start"
            >
              LEGEND <span className="font-greatvibes text-brand-gold text-7xl md:text-8xl normal-case tracking-normal">Experience</span>
            </motion.span>
          </h1>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-col gap-8"
          >
            <p className="font-inter text-xl text-white/60 leading-relaxed max-w-md border-l-4 border-brand-red pl-6 italic mx-auto lg:mx-0">
              "We don't just grill meat. We master the fire to bring you the legendary smash and sizzle."
            </p>

            <div className="flex flex-wrap gap-6 justify-center lg:justify-start">
              <a
                href="#menu"
                className="group relative overflow-hidden bg-brand-red px-12 py-6 font-oswald text-2xl font-bold uppercase tracking-widest text-white transition-all hover:scale-110 shadow-[0_0_50px_rgba(192,26,8,0.5)] active:scale-95"
              >
                <span className="relative z-10 flex items-center gap-3">
                  VIEW MENU <ChevronRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-white/20 translate-y-full transition-transform group-hover:translate-y-0" />
              </a>

              <a
                href="tel:+10000000000"
                className="group flex items-center gap-3 border-2 border-white/10 px-12 py-6 font-oswald text-2xl font-bold uppercase tracking-widest text-white transition-all hover:border-brand-gold hover:bg-white/5 active:scale-95"
              >
                ORDER NOW
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.2, rotate: -45 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1.5, delay: 0.6, type: "spring", bounce: 0.4 }}
          style={{ rotate }}
          className="relative lg:w-2/5 flex justify-center lg:justify-end items-center"
        >
          <div className="absolute inset-0 bg-brand-red/30 blur-[180px] rounded-full animate-pulse" />
          {/* <div className="relative z-10 w-full max-w-lg">
            <Steam />
            <img
              src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1000&auto=format&fit=crop"
              alt="The Ultimate Smash"
              className="w-full h-auto drop-shadow-[0_40px_150px_rgba(192,26,8,0.4)] object-contain animate-float"
            />
          </div>

          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ repeat: Infinity, duration: 3 }}
            className="absolute -bottom-10 right-0 glass-morphism p-8 rounded-[2rem] border-brand-gold/30 rotate-12"
          >
            <div className="text-brand-gold font-oswald font-black text-6xl leading-none">$9.99</div>
            <div className="text-white/60 text-xs font-inter uppercase tracking-[0.4em] mt-2">Special Offer</div>
          </motion.div> */}
        </motion.div>
      </div>

      {/* Decorative Strip */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-10 right-10 hidden lg:block"
      >
        <div className="glass-morphism rounded-full px-6 py-3 border border-white/10 text-white/60 font-inter text-sm flex items-center gap-3">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          <span>3044 Old Denton Rd Suit 320, Carrollton, TX 75007</span>
        </div>
      </motion.div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="w-1 h-3 bg-brand-red rounded-full"
        />
        <span className="text-[10px] font-bold tracking-[0.4em] text-white/20 uppercase">Scroll</span>
      </div>
    </section>
  );
}
