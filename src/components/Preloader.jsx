import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Preloader({ onComplete }) {
  const containerRef = useRef(null);
  const barRef = useRef(null);
  const textRef = useRef(null);

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

    tl.to(barRef.current, {
      width: '100%',
      duration: 2.5,
      ease: 'expo.inOut'
    })
    .to(textRef.current, {
      opacity: 0,
      y: -20,
      duration: 0.5,
      ease: 'power2.in'
    }, '-=0.5');

    return () => tl.kill();
  }, [onComplete]);

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 z-[9999] bg-brand-dark flex flex-col items-center justify-center pointer-events-none"
    >
      <div className="relative flex flex-col items-center">
        {/* Animated Flames Icon (Simulated with simple shapes for speed) */}
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

        <div ref={textRef} className="text-center mb-8">
          <h2 className="font-oswald text-4xl font-bold tracking-[0.2em] text-white">
            S&S <span className="font-greatvibes text-brand-red text-6xl normal-case tracking-normal">Cheese</span>steaks
          </h2>
          <p className="font-inter text-[10px] uppercase font-bold tracking-[0.6em] text-white/30 mt-2">
            Richardson, TX
          </p>
        </div>

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
