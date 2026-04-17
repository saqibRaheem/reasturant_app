import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export default function Hero() {
  const embersRef = useRef(null)

  useEffect(() => {
    // Hero text reveal
    const tl = gsap.timeline({ delay: 2.4 })
    tl.to('.hero-eyebrow', { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out' })
    tl.to('.line-a', { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' }, '-=0.2')
    tl.to('.line-b', { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out' }, '-=0.3')
    tl.to('.line-c', { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' }, '-=0.3')
    tl.to('.hero-sub', { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' }, '-=0.2')
    tl.to('.hero-btns', { opacity: 1, y: 0, duration: 0.5, ease: 'power3.out' }, '-=0.2')
    tl.to('.hero-social-strip', { opacity: 1, duration: 0.5, ease: 'power3.out' }, '-=0.2')
    tl.to('.hero-address-badge', { opacity: 1, duration: 0.5 }, '-=0.3')
    tl.to('.hero-scroll', { opacity: 1, duration: 0.5 }, '-=0.3')

    // Ember particles
    const container = embersRef.current
    if (!container) return
    const particles = []

    for (let i = 0; i < 45; i++) {
      const el = document.createElement('div')
      el.className = 'ember'
      const size = Math.random() * 5 + 2
      const hue = Math.random() * 40 + 5
      const lightness = Math.random() * 30 + 55
      Object.assign(el.style, {
        width: size + 'px',
        height: size + 'px',
        background: `hsl(${hue},100%,${lightness}%)`,
        boxShadow: `0 0 ${size * 2}px ${size}px hsl(${hue},100%,${lightness}%)`
      })
      container.appendChild(el)
      particles.push(el)

      const startX = Math.random() * window.innerWidth
      const travelY = -(Math.random() * 500 + 200)
      const travelX = Math.random() * 120 - 60
      const dur = Math.random() * 4 + 2.5

      gsap.set(el, { x: startX, y: window.innerHeight, opacity: 0 })
      gsap.timeline({ repeat: -1, delay: Math.random() * 6 })
        .to(el, { y: travelY, x: `+=${travelX}`, opacity: Math.random() * 0.7 + 0.2, duration: dur, ease: 'none' })
        .to(el, { opacity: 0, duration: 0.8, ease: 'power1.in' }, `-=0.8`)
        .set(el, { x: Math.random() * window.innerWidth, y: window.innerHeight })
    }

    return () => particles.forEach(p => p.remove())
  }, [])

  return (
    <section className="hero" id="home">
      <div className="hero-bg">
        <div className="hero-img-layer" />
        <div className="hero-overlay" />
        <div className="embers" ref={embersRef} />
      </div>

      <div className="hero-content">
        <div className="hero-eyebrow" style={{ transform: 'translateY(20px)' }}>
          <span className="eyebrow-line" />
          Richardson&apos;s #1 CheeseSteaks
          <span className="eyebrow-line" />
        </div>

        <h1 className="hero-h1">
          <span className="h1-line line-a" style={{ transform: 'translateY(40px)' }}>TASTE THE</span>
          <span className="h1-line line-b" style={{ transform: 'translateY(40px)' }}>FLAME</span>
          <span className="h1-line line-c" style={{ transform: 'translateY(40px)' }}>EXPERIENCE</span>
        </h1>

        <p className="hero-sub" style={{ transform: 'translateY(20px)' }}>
          Authentic Philly CheeseSteaks · Burgers · Sandwiches<br />
          Made fresh to order, every time
        </p>

        <div className="hero-btns">
          <a href="#menu" className="btn btn-fire">
            <span>Explore Menu</span>
            <svg viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </a>
          <a href="tel:+19453989915" className="btn btn-ghost">Call to Order</a>
        </div>

        <div className="hero-social-strip">
          <a href="#" className="hs-item">📷 @sscheesesteaks</a>
          <span className="hs-sep">·</span>
          <a href="#" className="hs-item">📘 S&amp;SCheeseSteaks</a>
          <span className="hs-sep">·</span>
          <a href="#" className="hs-item">🎵 @sscheesesteaks</a>
        </div>
      </div>

      <div className="hero-address-badge">
        📍 #300 N Coit Rd, Richardson TX
      </div>

      <div className="hero-scroll">
        <div className="scroll-dot" />
        <div className="scroll-text">SCROLL</div>
      </div>
    </section>
  )
}
