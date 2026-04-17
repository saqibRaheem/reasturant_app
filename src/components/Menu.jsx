import { useState, useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const cheesesteaks = [
  { emoji: '🥩', name: 'Steak N Cheese', desc: 'Seasoned juicy steak, Swiss/American cheese & mayo', price: '$9.99' },
  { emoji: '🥩', name: 'Signature', desc: 'Juicy steak, Swiss/American cheese, grilled onions, bell peppers, mushroom & mayo', price: '$11.99', featured: true, badge: '⭐ House Special' },
  { emoji: '🍖', name: 'Barbeque', desc: 'Juicy steak, American cheese, grilled onions, crispy onions, BBQ sauce', price: '$11.99' },
  { emoji: '🌶️', name: 'Spicy Pepper', desc: 'Spicy steak, Swiss & American cheese, grilled jalapeños, bell peppers, banana peppers & mayo', price: '$11.99', spicy: true, badge: '🌶️ Spicy' },
  { emoji: '🔥', name: 'Flaming Hot', desc: 'Spicy steak, American cheese, grilled jalapeños, Cheeto dust, hot sauce', price: '$11.99', fire: true, badge: '🔥 Extra Hot' },
  { emoji: '🥦', name: 'Veggie', desc: 'Tator tots, Swiss/American cheese, grilled onions, bell peppers, mushroom & mayo', price: '$9.99' },
]

const sandwiches = [
  { emoji: '🍗', name: 'OG Zinger', desc: 'Freshly hand battered chicken breast, magical house sauce, hot n sweet sauce, coleslaw & cheese', single: '$9.99', double: '$13.99', featured: true, badge: '⭐ Best Seller' },
  { emoji: '🔥', name: 'Flamin Hot Zinger', desc: 'Hand battered chicken, house sauce, spicy sauce, jalapeños, Cheetos & coleslaw', single: '$9.99', double: '$13.99', fire: true, badge: '🔥 Extra Hot' },
  { emoji: '🥓', name: 'BBQ Bacon Zinger', desc: 'Hand battered chicken, house sauce, coleslaw, beef brisket bacon, BBQ sauce & cheese', price: '$12.99' },
]

const burgers = [
  { emoji: '🍔', name: 'OG Cheeseburger', desc: 'Seasoned beef patty, American cheese', single: '$9.99', double: '$13.99' },
  { emoji: '🍄', name: 'Mushroom N Swiss', desc: 'Seasoned beef patty, Swiss cheese, grilled mushrooms', single: '$10.99', double: '$14.99' },
  { emoji: '🏆', name: "Chef's Special", desc: 'Beef patty, Swiss cheese, grilled mushrooms, onions, jalapeños & mozzarella', single: '$9.99', double: '$13.99', featured: true, badge: "👨‍🍳 Chef's Special" },
  { emoji: '🥓', name: 'BBQ Bacon Cheeseburger', desc: 'Seasoned beef patty, American cheese, bacon brisket & BBQ sauce', price: '$12.99' },
  { emoji: '🤠', name: 'Texas Burger', desc: 'Beef patty, American cheese topped with Signature Philly CheeseSteaks', price: '$12.99', fire: true, badge: '🤠 Texas' },
]

const addons = [
  ['Extra Veggies', '$0.99'],
  ['Cheese Sauce', '$1.99'],
  ['Mozzarella', '$1.99'],
  ['American/Swiss', '$0.99'],
  ['2 Slice Brisket', '$2.49'],
]

const sides = [
  ['Seasoned Fries', '$2.99', '$4.49'],
  ['Tater Tots', '$3.49', '$6.49'],
  ['Onion Rings', '$3.49', '$6.49'],
  ['Sweet Potato Fries', '$3.49', '$6.49'],
  ['5PC Jalapeño Poppers', '$4.99', null],
  ['Cheese Fries', '$4.49', '$7.99'],
  ['Cheese Tots', '$4.99', '$8.49'],
  ['Coleslaw', '$1.99', null],
]

function MenuCard({ item }) {
  const cls = `menu-card${item.featured ? ' featured-card' : ''}${item.fire ? ' fire-card' : ''}${item.spicy ? ' spicy-card' : ''}`
  return (
    <div className={cls}>
      {item.badge && <div className={`mc-badge${item.fire ? ' fire' : ''}${item.spicy ? ' spicy' : ''}${item.badge?.includes('🤠') ? ' texas' : ''}`}>{item.badge}</div>}
      <div className="mc-top">
        <div className="mc-emoji">{item.emoji}</div>
        <div className="mc-info">
          <h3>{item.name}</h3>
          <p>{item.desc}</p>
        </div>
      </div>
      <div className="mc-bottom">
        {item.price
          ? <span className="mc-price">{item.price}</span>
          : <div className="price-duo">
              <span>Single <strong>{item.single}</strong></span>
              <span>Double <strong>{item.double}</strong></span>
            </div>
        }
      </div>
    </div>
  )
}

export default function Menu() {
  const [tab, setTab] = useState('cheesesteaks')
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.menu-section .sec-head',
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out',
          scrollTrigger: { trigger: '.menu-section', start: 'top 80%' } }
      )
      gsap.fromTo('.menu-tabs',
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out', delay: 0.2,
          scrollTrigger: { trigger: '.menu-section', start: 'top 75%' } }
      )
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section className="menu-section" id="menu" ref={sectionRef}>
      <div className="container">
        <div className="sec-head" style={{ opacity: 0 }}>
          <div className="sec-tag">Full Menu</div>
          <h2 className="sec-title">WHAT WE <span>SERVE</span></h2>
        </div>

        <div className="menu-tabs" style={{ opacity: 0 }}>
          {[['cheesesteaks','🥩','CheeseSteaks'],['sandwiches','🍗','Sandwiches'],['burgers','🍔','Burgers'],['sides','🍟','Sides & More']].map(([id,icon,label]) => (
            <button key={id} className={`tab-btn${tab===id?' active':''}`} onClick={() => setTab(id)}>
              <span className="tab-icon">{icon}</span> {label}
            </button>
          ))}
        </div>

        {/* CheeseSteaks */}
        <div className={`tab-pane${tab==='cheesesteaks'?' active':''}`} id="tab-cheesesteaks">
          <div className="menu-grid">
            {cheesesteaks.map((item, i) => <MenuCard key={i} item={item} />)}
          </div>
          <div className="texas-banner">
            <div className="tb-left">
              <span className="tb-icon">🤠</span>
              <div>
                <h3>Make It Texas Size!</h3>
                <p>Double Everything on any CheeseSteaks</p>
              </div>
            </div>
            <div className="tb-right">+$4.99</div>
          </div>
          <div className="addons-box">
            <h3 className="addons-heading">Add-Ons</h3>
            <div className="addons-grid">
              {addons.map(([name, price], i) => (
                <div className="addon" key={i}>
                  <span>{name}</span><span>{price}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sandwiches */}
        <div className={`tab-pane${tab==='sandwiches'?' active':''}`} id="tab-sandwiches">
          <div className="menu-grid">
            {sandwiches.map((item, i) => <MenuCard key={i} item={item} />)}
          </div>
          <div className="combo-banner">
            <span className="combo-icon">🍟</span>
            <div>
              <h3>Make it a Combo!</h3>
              <p>Any sandwich + Fries &amp; Soda · Upgrades Available</p>
            </div>
            <span className="combo-price">+$3.99</span>
          </div>
        </div>

        {/* Burgers */}
        <div className={`tab-pane${tab==='burgers'?' active':''}`} id="tab-burgers">
          <p className="tab-note">All burgers served with lettuce, tomato, pickles &amp; house sauce</p>
          <div className="menu-grid">
            {burgers.map((item, i) => <MenuCard key={i} item={item} />)}
          </div>
        </div>

        {/* Sides */}
        <div className={`tab-pane${tab==='sides'?' active':''}`} id="tab-sides">
          <div className="sides-layout">
            <div className="sides-group">
              <h3 className="sg-title">🍟 Sides</h3>
              <div className="sides-list">
                {sides.map(([name, reg, lg], i) => (
                  <div className="side-row" key={i}>
                    <span>{name}</span>
                    <div className="side-pr">
                      <span>Reg <strong>{reg}</strong></span>
                      {lg && <span>Lg <strong>{lg}</strong></span>}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="sides-extras">
              <div className="extras-card">
                <div className="ec-icon">🍽️</div>
                <h3>Combos</h3>
                <p>Make any sandwich a combo</p>
                <p className="ec-note">Fries &amp; Soda · Upgrades Available</p>
                <span className="ec-price">+$3.99</span>
              </div>
              <div className="extras-card">
                <div className="ec-icon">👶</div>
                <h3>Kids Menu</h3>
                <div className="kids-row">
                  <p>Chicken Nuggets + Unseasoned Fries</p>
                  <div className="kids-pr"><span>4pc <strong>$5.99</strong></span><span>8pc <strong>$8.49</strong></span></div>
                </div>
                <div className="kids-row">
                  <p>3PC Chicken Tenders + Unseasoned Fries</p>
                  <strong className="ec-price">$9.99</strong>
                </div>
              </div>
              <div className="extras-card">
                <div className="ec-icon">🥤</div>
                <h3>Beverages</h3>
                <div className="bev-list">
                  {[['Bottled Water','$1.49'],['Canned Soda','$2.49'],['Jaritos','$3.49'],['Mexican Tall Soda','$4.49']].map(([n,p],i) => (
                    <div className="bev-row" key={i}><span>{n}</span><span>{p}</span></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
