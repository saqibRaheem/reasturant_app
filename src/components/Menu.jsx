import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Utensils, Flame, Star, Zap } from 'lucide-react';
import { menuData, extras } from '../data/menuData';
import { cn } from '../utils/cn';
import Steam from './Steam';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function MenuCard({ item }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9, y: 20 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true }}
      exit={{ opacity: 0, scale: 0.9 }}
      whileHover={{ y: -10 }}
      className={cn(
        "group relative flex flex-col bg-brand-dark2 border border-white/5 rounded-3xl overflow-hidden transition-all duration-500",
        item.featured && "border-brand-gold/30 bg-gradient-to-br from-brand-dark2 to-brand-gold/5 shadow-[0_10px_40px_rgba(232,160,32,0.1)]",
        item.fire && "border-brand-red/30 bg-gradient-to-br from-brand-dark2 to-brand-red/5 shadow-[0_10px_40px_rgba(192,26,8,0.1)]"
      )}
    >
      {/* Badge */}
      {item.badge && (
        <div className={cn(
          "absolute top-5 left-5 z-20 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest shadow-xl",
          item.fire ? "bg-brand-red text-white" : "bg-brand-gold text-brand-dark"
        )}>
          {item.badge}
        </div>
      )}

      {/* Image Area */}
      <div className="relative h-64 overflow-hidden">
        {item.fire && <Steam />}
        <img 
          src={item.image} 
          alt={item.name}
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark2 via-transparent to-transparent opacity-60" />
        
        {/* Glow effect on hover */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-tr from-brand-red/20 to-transparent pointer-events-none" />
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-oswald text-xl font-bold uppercase tracking-wide text-white group-hover:text-brand-red transition-colors">
            {item.name}
          </h3>
          {item.price && (
            <span className="font-oswald text-lg font-bold text-brand-gold">{item.price}</span>
          )}
        </div>
        
        <p className="font-inter text-sm text-white/50 leading-relaxed mb-6 flex-grow">
          {item.desc}
        </p>

        {/* Pricing for Single/Double */}
        {!item.price && (item.single || item.double) && (
          <div className="mt-auto pt-4 border-t border-white/5 flex justify-between items-center text-xs">
            <span className="text-white/40 uppercase tracking-widest font-bold">Options</span>
            <div className="flex gap-4">
              <div className="flex flex-col items-center">
                <span className="text-[10px] text-white/30 uppercase">Single</span>
                <span className="font-bold text-white">{item.single}</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-[10px] text-white/30 uppercase">Double</span>
                <span className="font-bold text-brand-gold">{item.double}</span>
              </div>
            </div>
          </div>
        )}

        {/* Action button */}
        <button className="mt-4 w-full py-3 rounded-lg border border-white/10 hover:border-brand-red hover:bg-brand-red/10 text-white font-oswald text-xs font-bold uppercase tracking-[0.2em] transition-all">
          Quick Order
        </button>
      </div>
    </motion.div>
  );
}

export default function Menu() {
  const [activeTab, setActiveTab] = useState('cheesesteaks');
  const sectionRef = useRef(null);
  const bgRef = useRef(null);

  const tabs = [
    { id: 'cheesesteaks', label: 'CheeseSteaks', icon: <Utensils size={18} /> },
    { id: 'sandwiches', label: 'Sandwiches', icon: <Zap size={18} /> },
    { id: 'burgers', label: 'Burgers', icon: <Star size={18} /> },
    { id: 'sides', label: 'Sides & More', icon: <Flame size={18} /> },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(bgRef.current, 
        { opacity: 0, scale: 1.1 },
        { 
          opacity: 0.4, 
          scale: 1,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 60%",
            end: "top 20%",
            scrub: 1,
          }
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-32 bg-brand-dark relative overflow-hidden" id="menu">
      {/* User Requested Fire GIF Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div 
          ref={bgRef}
          className="absolute inset-0 bg-cover bg-center mix-blend-screen opacity-0"
          style={{ backgroundImage: `url('https://i.pinimg.com/originals/a2/dc/31/a2dc314adf7e4c4bad82d90af7a0f219.gif')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/20 to-brand-dark" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <header className="text-center max-w-4xl mx-auto mb-20">
          <motion.span 
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-8 py-3 rounded-full bg-brand-red text-white font-oswald text-xs font-black uppercase tracking-[0.5em] mb-8 shadow-[0_0_30px_rgba(192,26,8,0.5)]"
          >
            Taste the Masterpieces
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-oswald text-8xl md:text-[10rem] font-black uppercase text-white mb-8 leading-none"
          >
            WHAT WE <span className="text-transparent [-webkit-text-stroke:2px_theme(colors.brand.red)]">SERVE</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-inter text-2xl text-white/50 leading-relaxed font-light italic"
          >
            "Every plate is a story of fire, tradition, and uncompromising quality."
          </motion.p>
        </header>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-20">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={cn(
                "flex items-center gap-4 px-10 py-5 rounded-2xl font-oswald text-lg font-black uppercase tracking-widest transition-all duration-500 relative overflow-hidden group",
                activeTab === tab.id 
                  ? "bg-brand-red text-white shadow-[0_20px_50px_rgba(192,26,8,0.4)] scale-110" 
                  : "bg-white/5 text-white/40 hover:bg-white/10 hover:text-white"
              )}
            >
              <span className={cn("transition-transform duration-500", activeTab === tab.id ? "scale-125 rotate-12" : "group-hover:scale-110 group-hover:rotate-6")}>
                {tab.icon}
              </span>
              {tab.label}
              {activeTab === tab.id && (
                <motion.div 
                  layoutId="activeTab"
                  className="absolute inset-0 bg-white/10"
                />
              )}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="min-h-[800px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5, ease: "anticipate" }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12"
            >
              {(activeTab !== 'sides' ? menuData[activeTab] : []).map((item, idx) => (
                <MenuCard key={`${activeTab}-${idx}`} item={item} />
              ))}

              {activeTab === 'sides' && (
                <div className="col-span-full grid grid-cols-1 lg:grid-cols-2 gap-16">
                  <div className="bg-brand-dark2 border-4 border-white/5 p-12 rounded-[3rem] shadow-2xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-brand-red/10 blur-[100px] -translate-y-1/2 translate-x-1/2" />
                    <h3 className="font-oswald text-4xl font-black uppercase text-white mb-10 flex items-center gap-4 border-b border-brand-red pb-6">
                      <span className="p-4 bg-brand-red/10 rounded-2xl"><Flame className="text-brand-red w-8 h-8" /></span>
                      Featured Sides
                    </h3>
                    <div className="space-y-8">
                      {menuData.sides.map((side, i) => (
                        <div key={i} className="flex justify-between items-center group cursor-default">
                          <div className="flex items-center gap-6">
                            <span className="text-4xl transition-transform group-hover:scale-125 group-hover:rotate-12">{side.icon}</span>
                            <div>
                                <span className="block font-oswald text-2xl text-white font-bold group-hover:text-brand-red transition-colors">{side.name}</span>
                                <span className="text-white/30 text-xs font-inter uppercase tracking-widest">Handmade Fresh</span>
                            </div>
                          </div>
                          <div className="flex gap-8 font-oswald">
                            <div className="flex flex-col items-end">
                              <span className="text-white/30 uppercase text-[10px] tracking-widest">Reg</span>
                              <span className="text-brand-gold font-bold text-xl">{side.reg}</span>
                            </div>
                            <div className="flex flex-col items-end">
                              <span className="text-white/30 uppercase text-[10px] tracking-widest">Large</span>
                              <span className="text-brand-gold font-bold text-xl">{side.lg}</span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-12">
                    <div className="bg-gradient-to-br from-brand-dark2 to-brand-gold/10 border-4 border-brand-gold/20 p-12 rounded-[3rem] relative overflow-hidden group shadow-2xl">
                      <div className="absolute -right-8 -top-8 text-[12rem] opacity-5 rotate-12 transition-transform group-hover:scale-125 group-hover:rotate-0">🤠</div>
                      <h3 className="font-oswald text-5xl font-black uppercase text-brand-gold mb-4 leading-none">Texas Size It!</h3>
                      <p className="text-white/50 text-xl font-light mb-8 max-w-sm">Deeply satisfy your hunger with Double Meat and Double Cheese.</p>
                      <div className="flex items-center justify-between pt-6 border-t border-white/5">
                        <span className="font-oswald text-5xl font-black text-white">$4.99 <span className="text-sm text-white/30 font-medium">Extra</span></span>
                        <button className="bg-brand-gold text-brand-dark px-10 py-5 rounded-2xl font-black uppercase text-xs tracking-widest transition-all hover:scale-110 active:scale-95 shadow-xl">Upgrade</button>
                      </div>
                    </div>

                    <div className="bg-brand-dark2 border-4 border-white/5 p-12 rounded-[3rem] shadow-2xl">
                      <h3 className="font-oswald text-2xl font-black uppercase text-white mb-8 border-b border-white/5 pb-4">Add-Ons & Extras</h3>
                      <div className="flex flex-wrap gap-4">
                        {extras.map((ex, i) => (
                          <div key={i} className="px-6 py-4 rounded-2xl border-2 border-white/5 bg-white/5 text-sm font-black text-white/70 uppercase hover:border-brand-red hover:text-white transition-all cursor-pointer active:scale-95">
                            {ex.name} <span className="text-brand-gold ml-2">{ex.price}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Decorative Fire Elements */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-red/5 rounded-full blur-[200px] -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-brand-gold/5 rounded-full blur-[200px] translate-y-1/2 -translate-x-1/2" />
    </section>
  );
}
