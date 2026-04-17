import { useEffect, useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

gsap.registerPlugin(ScrollTrigger)

const slides = [
  { emoji: '🥩', cat: 'CheeseSteaks', name: 'Steak N Cheese', desc: 'Seasoned juicy steak, Swiss/American cheese & mayo', price: '$9.99', badge: 'bestseller', badgeText: '⭐ BEST SELLER', bg: 'linear-gradient(135deg,#3d0000,#1a0000)' },
  { emoji: '🔥', cat: 'CheeseSteaks', name: 'Flaming Hot', desc: 'Spicy steak, American cheese, jalapeños, Cheeto dust & hot sauce', price: '$11.99', badge: 'fire', badgeText: '🔥 EXTRA HOT', bg: 'linear-gradient(135deg,#3d1500,#1a0000)' },
  { emoji: '🥩', cat: 'CheeseSteaks', name: 'Signature Philly', desc: 'Juicy steak, Swiss/American cheese, grilled onions, bell peppers, mushroom & mayo', price: '$11.99', badge: '', badgeText: '⭐ SIGNATURE', bg: 'linear-gradient(135deg,#001a10,#0a0000)' },
  { emoji: '🍗', cat: 'Sandwiches', name: 'OG Zinger', desc: 'Hand battered chicken, magical house sauce, hot n sweet sauce, coleslaw & cheese', price: 'From $9.99', badge: 'bestseller', badgeText: '⭐ BEST SELLER', bg: 'linear-gradient(135deg,#0a2000,#1a0000)' },
  { emoji: '🔥', cat: 'Sandwiches', name: 'Flamin Hot Zinger', desc: 'Hand battered chicken, spicy sauce, jalapeños, Cheetos & coleslaw', price: 'From $9.99', badge: 'fire', badgeText: '🔥 FIRE', bg: 'linear-gradient(135deg,#2d0000,#1a0000)' },
  { emoji: '🍔', cat: 'Burgers', name: 'Texas Burger', desc: 'Beef patty, American cheese topped with Signature Philly CheeseSteaks', price: '$12.99', badge: 'texas', badgeText: '🤠 TEXAS', bg: 'linear-gradient(135deg,#1a1000,#0a0000)' },
  { emoji: '🧀', cat: 'Shareables', name: 'Philly Cheese Tots', desc: 'Tater tots loaded with Signature Philly & bubbling cheese sauce', price: '$11.99', badge: 'fire', badgeText: '🔥 LOADED', bg: 'linear-gradient(135deg,#1a0015,#0a0000)' },
]

export default function FeaturedSlider() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.sec-head',
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out',
          scrollTrigger: { trigger: '.featured-section', start: 'top 80%' } }
      )
      gsap.fromTo('.featuredSwiper',
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', delay: 0.2,
          scrollTrigger: { trigger: '.featured-section', start: 'top 75%' } }
      )
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section className="featured-section" id="featured" ref={sectionRef}>
      <div className="container">
        <div className="sec-head" style={{ opacity: 0 }}>
          <div className="sec-tag">Customer Favorites</div>
          <h2 className="sec-title">OUR <span>BEST SELLERS</span></h2>
          <p className="sec-desc">Hand-crafted with passion · Served with fire</p>
        </div>

        <Swiper
          className="featuredSwiper"
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={24}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 3800, disableOnInteraction: false }}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{ 640: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }}
          style={{ opacity: 0 }}
        >
          {slides.map((s, i) => (
            <SwiperSlide key={i}>
              <div className="feat-card">
                <div className="feat-img" style={{ background: s.bg }}>
                  <div className="feat-emoji">{s.emoji}</div>
                  {s.badgeText && <div className={`feat-badge${s.badge ? ' ' + s.badge : ''}`}>{s.badgeText}</div>}
                </div>
                <div className="feat-body">
                  <div className="feat-cat">{s.cat}</div>
                  <h3>{s.name}</h3>
                  <p>{s.desc}</p>
                  <div className="feat-footer">
                    <span className="feat-price">{s.price}</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}
