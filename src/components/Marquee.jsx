export default function Marquee() {
  const items = [
    '🔥 BEST CHEESESTEAKS IN RICHARDSON',
    '🧀 FRESH MADE TO ORDER',
    '🌶️ FLAMING HOT OPTIONS',
    '🥩 SEASONED JUICY STEAK',
    '🤠 MAKE IT TEXAS SIZE +$4.99',
    '⭐ PHILLY CHEESE FRIES & TOTS',
    '🍔 LOADED BURGERS',
    '🍗 HAND BATTERED ZINGERS',
  ]
  const doubled = [...items, ...items]

  return (
    <div className="marquee-wrap" aria-hidden="true">
      <div className="marquee-track">
        {doubled.map((item, i) => (
          <span key={i}>{item}{i !== doubled.length - 1 && <span className="sep"> ✦ </span>}</span>
        ))}
      </div>
    </div>
  )
}
