import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const stats = [
  { target: 6, plus: '', label: 'Cheesesteak Styles' },
  { target: 1000, plus: '+', label: 'Happy Customers' },
  { target: 100, plus: '%', label: 'Fresh Every Day' },
  { target: 5, plus: '★', label: 'Star Experience' },
]

export default function Stats() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const nums = sectionRef.current.querySelectorAll('.stat-number')
      nums.forEach((el, i) => {
        const target = stats[i].target
        const obj = { val: 0 }
        gsap.to(obj, {
          val: target,
          duration: 2,
          ease: 'power2.out',
          delay: i * 0.15,
          onUpdate: () => { el.textContent = Math.round(obj.val) },
          scrollTrigger: { trigger: sectionRef.current, start: 'top 80%', once: true }
        })
      })
      gsap.fromTo('.stat-item',
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.7, stagger: 0.12, ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' } }
      )
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section className="stats-section" ref={sectionRef}>
      <div className="container">
        <div className="stats-grid">
          {stats.map((s, i) => (
            <div className="stat-item" key={i} style={{ opacity: 0 }}>
              <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'center', gap: '2px' }}>
                <div className="stat-number">0</div>
                <div className="stat-plus">{s.plus}</div>
              </div>
              <div className="stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
