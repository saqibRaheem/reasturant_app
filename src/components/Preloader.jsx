import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import leftLogo from '../assets/logo/JPG/3.png';
import rightLogo from '../assets/logo/JPG/4.png';

export default function Preloader({ onComplete }) {
  const containerRef = useRef(null);
  const barRef = useRef(null);
  const textRef = useRef(null);
  
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const logosRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        gsap.to(containerRef.current, {
          yPercent: -100,
          duration: 1.2,
          ease: 'power4.inOut',
          onComplete: onComplete
        });
      }
    });

    // 1. Logos fly in
    tl.fromTo(leftRef.current, 
      { x: -500, opacity: 0 }, 
      { x: 0, opacity: 1, duration: 1.5, ease: 'power3.out' },
      0
    )
    .fromTo(rightRef.current, 
      { x: 500, opacity: 0 }, 
      { x: 0, opacity: 1, duration: 1.5, ease: 'power3.out' },
      0
    );

    // Bump effect when they meet
    tl.to(logosRef.current, {
      scale: 1.05,
      duration: 0.3,
      yoyo: true,
      repeat: 1,
      ease: 'power1.inOut'
    }, 1.3);

    // 2. Bar Loading (runs parallel to logos)
    tl.to(barRef.current, {
      width: '100%',
      duration: 2.5,
      ease: 'expo.inOut'
    }, 0);

    // 3. Fade out middle section (logos + text) before sweeping
    tl.to(textRef.current, {
      opacity: 0,
      y: -20,
      duration: 0.5,
      ease: 'power2.in'
    }, 2.0);

    return () => tl.kill();
  }, [onComplete]);

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 z-[9999] bg-brand-dark flex flex-col items-center justify-center pointer-events-none"
    >
      <div className="relative flex flex-col items-center">
        {/* Animated Flames Icon */}
        <div className="flex gap-1.5 mb-8">
          {[0, 1, 2].map((i) => (
            <div 
              key={i}
              className={`w-3 rounded-full bg-gradient-to-t from-brand-red to-brand-gold animate-bounce`}
              style={{ 
                height: i === 1 ? '48px' : '32px',
                animationDelay: `${i * 0.1}s`,
                animationDuration: '0.8s'
              }}
            />
          ))}
        </div>

        {/* Logos & City Text */}
        <div ref={textRef} className="text-center mb-8">
          <div ref={logosRef} className="flex items-center justify-center w-full mb-2">
            <img 
              ref={leftRef} 
              src={leftLogo} 
              alt="Logo Left" 
              className="w-auto h-24 md:h-32 object-contain pointer-events-auto" 
            />
            <img 
              ref={rightRef} 
              src={rightLogo} 
              alt="Logo Right" 
              className="w-auto h-24 md:h-32 object-contain pointer-events-auto" 
            />
          </div>
          <p className="font-inter text-[10px] uppercase font-bold tracking-[0.6em] text-white/30 mt-2">
            Richardson, TX
          </p>
        </div>

        {/* Loading Bar */}
        <div className="w-64 h-[2px] bg-white/5 rounded-full overflow-hidden">
          <div 
            ref={barRef}
            className="h-full w-0 bg-gradient-to-r from-brand-red via-red-500 to-brand-gold"
          />
        </div>
      </div>
    </div>
  );
}
