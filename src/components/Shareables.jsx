import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const items = [
  { icon: '🍟', name: 'Philly Cheese Fries', desc: 'Signature Philly steak loaded over crispy seasoned fries', price: '$11.99' },
  { icon: '🌮', name: 'Philly Cheese Nachos', desc: 'Your favorite Philly loaded on golden crunchy nachos', price: '$11.99' },
  { icon: '🥔', name: 'Philly Cheese Tots', desc: 'Tater tots loaded with Signature Philly & bubbling cheese sauce', price: '$11.99', hot: true, highlight: true },
  { icon: '🥗', name: 'Philly Cheese Salad', desc: 'Fresh salad elevated with your choice of Philly style', price: '$11.99' },
]

export default function Shareables() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.shareables-section .sec-head',
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out',
          scrollTrigger: { trigger: '.shareables-section', start: 'top 80%' } }
      )
      gsap.fromTo('.sh-card',
        { opacity: 0, y: 60, scale: 0.95 },
        { opacity: 1, y: 0, scale: 1, duration: 0.7, stagger: 0.12, ease: 'power3.out',
          scrollTrigger: { trigger: '.shareables-grid', start: 'top 82%' } }
      )
      gsap.fromTo('.texas-upsell',
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out',
          scrollTrigger: { trigger: '.texas-upsell', start: 'top 90%' } }
      )
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section className="shareables-section" id="shareables" ref={sectionRef}>
      <div className="container">
        <div className="sec-head" style={{ opacity: 0 }}>
          <div className="sec-tag">Share the Love</div>
          <h2 className="sec-title">SHAREABLES <span>&amp; SIDES</span></h2>
          <p className="sec-desc">Comes with Signature Philly · Or choose any style</p>
        </div>

        <div className="shareables-grid">
          {items.map((item, i) => (
            <div key={i} className={`sh-card${item.highlight ? ' highlight-card' : ''}`} style={{ opacity: 0 }}>
              <div className="sh-glow" />
              {item.hot && <div className="sh-hot-badge">🔥 HOT</div>}
              <span className="sh-icon">{item.icon}</span>
              <h3>{item.name}</h3>
              <p>{item.desc}</p>
              <span className="sh-price">{item.price}</span>
            </div>
          ))}
        </div>

        <div className="texas-upsell" style={{ opacity: 0 }}>
          <div className="tu-inner">
            <span className="tu-icon">🤠</span>
            <span className="tu-text">Double Everything on any Shareable</span>
            <span className="tu-price">+$4.99</span>
          </div>
        </div>
      </div>
    </section>
  )
}
