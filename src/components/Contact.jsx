import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Contact() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.contact-section .sec-head',
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out',
          scrollTrigger: { trigger: '.contact-section', start: 'top 80%' } }
      )
      gsap.fromTo('.contact-info',
        { opacity: 0, x: -50 },
        { opacity: 1, x: 0, duration: 0.8, ease: 'power3.out', delay: 0.2,
          scrollTrigger: { trigger: '.contact-layout', start: 'top 82%' } }
      )
      gsap.fromTo('.contact-map',
        { opacity: 0, x: 50 },
        { opacity: 1, x: 0, duration: 0.8, ease: 'power3.out', delay: 0.3,
          scrollTrigger: { trigger: '.contact-layout', start: 'top 82%' } }
      )
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section className="contact-section" id="contact" ref={sectionRef}>
      <div className="container">
        <div className="sec-head" style={{ opacity: 0 }}>
          <div className="sec-tag">Find Us</div>
          <h2 className="sec-title">VISIT <span>US TODAY</span></h2>
        </div>

        <div className="contact-layout">
          <div className="contact-info" style={{ opacity: 0 }}>
            <div className="ci-item">
              <div className="ci-icon">📍</div>
              <div className="ci-text">
                <h4>Address</h4>
                <p>#300 N Coit Rd, Richardson TX</p>
              </div>
            </div>
            <div className="ci-item">
              <div className="ci-icon">📞</div>
              <div className="ci-text">
                <h4>Phone</h4>
                <a href="tel:+19453989915">+1 (945) 398-9915</a>
              </div>
            </div>
            <div className="ci-item">
              <div className="ci-icon">✉️</div>
              <div className="ci-text">
                <h4>Email</h4>
                <a href="mailto:sscheesesteaks@gmail.com">sscheesesteaks@gmail.com</a>
              </div>
            </div>

            <div className="social-row">
              <a href="#" className="soc-btn ig">📷 Instagram</a>
              <a href="#" className="soc-btn fb">📘 Facebook</a>
              <a href="#" className="soc-btn tk">🎵 TikTok</a>
            </div>

            <a href="tel:+19453989915" className="call-cta-btn">
              📞 Call Now to Order
            </a>
          </div>

          <div className="contact-map" style={{ opacity: 0 }}>
            <iframe
              src="https://maps.google.com/maps?q=300+N+Coit+Rd+Richardson+TX+75080&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, borderRadius: '14px', display: 'block' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="S&S CheeseSteaks Location"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
