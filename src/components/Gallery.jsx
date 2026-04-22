
'use client';
import { motion } from 'framer-motion';
import { cn } from '../utils/cn';
import Steam from './Steam';
import Image from 'next/image';


const images = [
  { url: '/assets/images/thirteen.jpeg',           title: 'Cheese Overflow' },
  { url: '/assets/images/seven.jpeg',              title: 'Spicy Cheetos' },
  { url: '/assets/images/double-zinger.jpeg',      title: 'Double Zinger' },
  { url: '/assets/images/steak-cheese.jpeg',       title: 'Classic Philly' },
  { url: '/assets/images/flaming-hot-zinger.jpeg', title: 'Flaming Hot' },
  { url: '/assets/images/texas-burger.jpeg',       title: 'Texas Heat' },
  { url: '/assets/images/five.jpeg',               title: 'Meat Lovers' },
  { url: '/assets/images/ten.jpeg',                title: 'Golden Smash' },
  { url: '/assets/images/three.jpeg',              title: 'Tower of Flavor' },
];

export default function Gallery() {
  return (
    <section className="py-32 bg-brand-dark relative overflow-hidden" id="gallery">
      {/* Misty Smoke GIF Background */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center mix-blend-lighten opacity-5"
          style={{ backgroundImage: `url('https://media.giphy.com/media/l41lO6pSPhO0Xy9S8/giphy.gif')` }}
        />
      </div>

      {/* Decorative Blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-brand-red/5 blur-[200px] rounded-full" />

      <div className="container mx-auto px-6 relative z-10">
        <header className="text-center mb-24 max-w-3xl mx-auto">
          <motion.span 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-8 py-3 rounded-full bg-brand-gold/10 border border-brand-gold/30 text-brand-gold font-oswald text-xs font-black uppercase tracking-[0.5em] mb-8"
          >
            Vibe Check
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-oswald text-6xl md:text-8xl lg:text-9xl font-black uppercase text-white mb-8"
          >
            LIVING THE <span className="font-greatvibes text-brand-red text-8xl md:text-[8rem] lg:text-[12rem] normal-case italic ml-4">Flame</span> LIFE
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-inter text-2xl text-white/40 font-light"
          >
            Witness the sizzle. The moments where fire meets flavor.
          </motion.p>
        </header>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8 }}
              className="relative group overflow-hidden rounded-[3rem] border-4 border-white/5 shadow-2xl break-inside-avoid"
            >
              <div className="relative">
                <img
                  src={img.url} 
                  alt={img.title} 
                  className="w-full h-auto object-cover transition-transform duration-1000 group-hover:scale-110 group-hover:rotate-1"
                />
                {i % 2 === 0 && <Steam />}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-10">
                    <span className="font-greatvibes text-4xl text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-500">{img.title}</span>
                    <span className="font-inter text-xs text-brand-red font-bold uppercase tracking-widest mt-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">Click to view full</span>
                </div>
                
                {/* Real-time Hover Glow */}
                <div className="absolute inset-0 bg-brand-red/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-24 text-center"
        >
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-4 bg-white/5 border-2 border-white/10 px-12 py-6 rounded-full font-oswald text-xl font-bold uppercase tracking-widest text-white hover:bg-brand-red hover:border-brand-red transition-all shadow-xl active:scale-95">
                FOLLOW THE HEAT @SSCHEESE
            </a>
        </motion.div>
      </div>
    </section>
  );
}
