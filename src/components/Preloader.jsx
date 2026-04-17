import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export default function Preloader({ onComplete }) {
  const rootRef = useRef(null)
  const fillRef = useRef(null)

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        gsap.to(rootRef.current, {
          opacity: 0, duration: 0.5, ease: 'power2.in',
          onComplete: () => {
            if (rootRef.current) rootRef.current.style.display = 'none'
            if (onComplete) onComplete()
          }
        })
      }
    })
    tl.to(fillRef.current, { width: '100%', duration: 1.8, ease: 'power2.inOut' })
  }, [onComplete])

  return (
    <div className="preloader" ref={rootRef}>
      <div className="pre-inner">
        <div className="pre-flames">
          <div className="flame f1" />
          <div className="flame f2" />
          <div className="flame f3" />
        </div>
        <div className="pre-logo">S<span>&</span>S</div>
        <div className="pre-sub">CheeseSteaks</div>
        <div className="pre-bar">
          <div className="pre-fill" ref={fillRef} />
        </div>
      </div>
    </div>
  )
}
