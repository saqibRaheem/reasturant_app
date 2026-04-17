import { useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade, FreeMode } from 'swiper/modules';
import { motion } from 'framer-motion';
import Steam from './Steam';
import { gsap } from 'gsap';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';

const slides = [
  { image: 'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?q=80&w=800&auto=format&fit=crop', cat: 'CheeseSteaks', name: 'Original Philly', desc: 'Seasoned juicy steak, Swiss/American cheese & creamy mayo.', price: '$12.99', badge: 'Authentic' },
  { image: 'https://images.unsplash.com/photo-1621800043295-a73fe2f76e2c?q=80&w=800&auto=format&fit=crop', cat: 'CheeseSteaks', name: 'Flaming Hot', desc: 'Spicy steak, American cheese, jalapeños, and ghost pepper sauce.', price: '$14.99', badge: 'Hot' },
  { image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=800&auto=format&fit=crop', cat: 'Burgers', name: 'Triple Smash', desc: 'Three beef patties, triple cheese, and our signature secret sauce.', price: '$15.99', badge: 'Best Seller' },
  { image: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?q=80&w=800&auto=format&fit=crop', cat: 'Sides', name: 'Loaded Fries', desc: 'Crispy fries topped with steak, cheese, and grilled onions.', price: '$8.99', badge: 'New' },
];

export default function FeaturedSlider() {
  const fireRef = useRef(null);
  const emberRef = useRef(null);

  useEffect(() => {
    // Fire Flicker Effect
    const flicker = () => {
      gsap.to([fireRef.current, emberRef.current], {
        opacity: () => Math.random() * 0.4 + 0.1,
        duration: () => Math.random() * 0.5 + 0.1,
        onComplete: flicker,
        ease: "none"
      });
    };
    flicker();
  }, []);

  return (
    <section className="py-32 bg-brand-dark2 relative overflow-hidden" id="featured">
      {/* High-Intensity Fire/Smoky Background */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Smoke Layer */}
        <div 
          className="absolute inset-0 bg-cover bg-center mix-blend-screen opacity-20 filter blur-md scale-110"
          style={{ backgroundImage: `url('https://media.giphy.com/media/hS42TzhV6NdfM464nO/giphy.gif')` }}
        />
        {/* Bonfire/Fire Layer */}
        <div 
          ref={fireRef}
          className="absolute bottom-0 left-0 w-full h-1/2 bg-cover bg-center mix-blend-color-dodge opacity-20"
          style={{ backgroundImage: `url('https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExOHpneXp6Z3Z6Z3Z6Z3Z6Z3Z6Z3Z6Z3Z6Z3Z6Z3Z6Z3Z6Z3ZpZCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Lopx9eUi34rbq/giphy.gif')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark2 via-transparent to-brand-dark2" />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-dark2 via-transparent to-transparent opacity-60" />
      </div>

      {/* Decorative Fire Embers */}
      <div ref={emberRef} className="absolute inset-0 pointer-events-none z-10 opacity-30">
        <div className="absolute bottom-0 left-0 w-full h-[300px] bg-gradient-to-t from-brand-red/20 to-transparent" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <header className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-2xl">
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-block px-6 py-2 rounded-full bg-brand-red/10 border border-brand-red/30 text-brand-red font-oswald text-sm font-bold uppercase tracking-[0.4em] mb-6"
            >
              The Hall of Fame
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-oswald text-7xl font-black uppercase text-white leading-none"
            >
              CHOSEN BY <span className="text-brand-red">THE PEOPLE</span>
            </motion.h2>
          </div>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-inter text-xl text-white/40 max-w-sm md:text-right italic border-r-2 border-brand-red/30 pr-6"
          >
            "These are the legends. The items that define our legacy on the grill."
          </motion.p>
        </header>

        <Swiper
          modules={[Navigation, Pagination, Autoplay, FreeMode]}
          spaceBetween={40}
          slidesPerView={1}
          loop={true}
          freeMode={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{ clickable: true, dynamicBullets: true }}
          breakpoints={{
            768: { slidesPerView: 2, spaceBetween: 30 },
            1280: { slidesPerView: 3, spaceBetween: 40 },
          }}
          className="pb-20 !overflow-visible testimonials-swiper"
        >
          {slides.map((slide, i) => (
            <SwiperSlide key={i} className="h-full">
              <motion.div 
                whileHover={{ y: -20, scale: 1.02 }}
                className="group relative bg-brand-dark border-4 border-white/5 rounded-[3rem] overflow-hidden h-[600px] flex flex-col transition-all duration-500 hover:border-brand-red/50 hover:shadow-[0_40px_100px_rgba(0,0,0,0.8)]"
              >
                <div className="relative h-[350px] overflow-hidden">
                  <Steam />
                  <img 
                    src={slide.image} 
                    alt={slide.name} 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 group-hover:rotate-1"
                  />
                  <div className="absolute top-6 left-6 bg-brand-red text-white text-[10px] font-black uppercase tracking-[0.3em] px-6 py-3 rounded-full shadow-2xl">
                    {slide.badge}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent opacity-80" />
                </div>
                
                <div className="p-10 flex flex-col flex-grow bg-gradient-to-b from-brand-dark to-brand-dark2">
                  <span className="font-oswald text-xs font-bold uppercase tracking-[0.3em] text-brand-gold mb-3">{slide.cat}</span>
                  <h3 className="font-oswald text-4xl font-black uppercase text-white mb-4 transition-colors group-hover:text-brand-red">
                    {slide.name}
                  </h3>
                  <p className="font-inter text-base text-white/40 leading-relaxed mb-6 flex-grow line-clamp-3">
                    {slide.desc}
                  </p>
                  <div className="mt-auto flex items-center justify-between pt-6 border-t border-white/5">
                    <span className="font-oswald text-4xl font-black text-white group-hover:text-brand-gold transition-colors">{slide.price}</span>
                    <button className="bg-brand-red hover:bg-white hover:text-brand-dark text-white px-8 py-4 rounded-2xl text-xs font-black uppercase tracking-widest transition-all shadow-xl active:scale-95">ORDER NOW</button>
                  </div>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
