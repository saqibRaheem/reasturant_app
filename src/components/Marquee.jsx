export default function Marquee() {
  const items = [
    'BEST CHEESESTEAKS IN RICHARDSON',
    'FRESH MADE TO ORDER',
    'FLAMING HOT OPTIONS',
    'SEASONED JUICY STEAK',
    'MAKE IT TEXAS SIZE',
    'PHILLY CHEESE FRIES & TOTS',
    'LOADED BURGERS',
    'HAND BATTERED ZINGERS',
  ];
  
  const doubled = [...items, ...items, ...items];

  return (
    <div className="bg-brand-dark border-y border-white/5 py-6 overflow-hidden select-none" aria-hidden="true">
      <div className="flex w-max animate-marquee">
        {doubled.map((item, i) => (
          <div key={i} className="flex items-center">
            <span className="font-oswald text-4xl font-black text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.1)] px-12 tracking-[0.1em] transition-colors hover:[-webkit-text-stroke:1px_theme(colors.brand.red)]">
              {item}
            </span>
            <span className="text-brand-red text-2xl drop-shadow-[0_0_10px_rgba(192,26,8,0.8)]">✦</span>
          </div>
        ))}
      </div>
    </div>
  );
}
