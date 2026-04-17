import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'

export default function Navbar() {
  const navRef = useRef(null)
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [activeLink, setActiveLink] = useState('home')

  useEffect(() => {
    gsap.fromTo('.nav-wrap > *',
      { opacity: 0, y: -20 },
      { opacity: 1, y: 0, stagger: 0.08, duration: 0.6, ease: 'power3.out', delay: 2.2 }
    )
    const onScroll = () => {
      setScrolled(window.scrollY > 50)
      const sections = ['home','featured','menu','shareables','contact']
      for (const id of sections) {
        const el = document.getElementById(id)
        if (el) {
          const top = el.getBoundingClientRect().top
          if (top <= 120 && top > -el.offsetHeight + 120) { setActiveLink(id); break }
        }
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const close = () => setOpen(false)

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`} ref={navRef}>
      <div className="nav-wrap">
        <a href="#home" className="nav-logo" onClick={close}>
          <span className="nl-big">S<em>&</em>S</span>
          <span className="nl-small">CheeseSteaks</span>
        </a>

        <ul className="nav-links">
          {[['home','Home'],['featured','Featured'],['menu','Menu'],['shareables','Shareables'],['contact','Contact']].map(([id,label]) => (
            <li key={id}>
              <a href={`#${id}`} className={`nav-link${activeLink===id?' active':''}`}>{label}</a>
            </li>
          ))}
        </ul>

        <a href="tel:+19453989915" className="nav-cta">
          <span className="cta-icon">📞</span> Order Now
        </a>

        <button className={`hamburger${open?' open':''}`} id="hamburger" onClick={() => setOpen(p => !p)} aria-label="Toggle menu">
          <span /><span /><span />
        </button>
      </div>

      <div className={`mobile-drawer${open?' open':''}`}>
        <ul>
          {[['home','Home'],['featured','Featured'],['menu','Menu'],['shareables','Shareables'],['contact','Contact']].map(([id,label]) => (
            <li key={id}><a href={`#${id}`} className="mob-link" onClick={close}>{label}</a></li>
          ))}
        </ul>
        <a href="tel:+19453989915" className="mob-cta" onClick={close}>📞 +1 (945) 398-9915</a>
      </div>
    </nav>
  )
}
