import barbeQue from '../assets/images/eleven.jpeg'

export const menuData = {
  cheesesteaks: [
    { 
      image: 'https://images.unsplash.com/photo-1529665293573-5016a7c2cd3c?q=80&w=800&auto=format&fit=crop', 
      name: 'STEAK N CHEESE', 
      desc: 'SEASONED JUICY STEAK, SWISS/AMERICAN CHEESE & MAYO', 
      price: '$9.99' 
    },
    { 
      image: barbeQue, 
      name: 'BARBEQUE', 
      desc: 'SEASONED JUICY STEAK, AMERICAN CHEESE, GRILLED ONIONS, BBQ SAUCE', 
      price: '$11.99' 
    },
    { 
      image: 'https://images.unsplash.com/photo-1600891964599-f61ba0e24092?q=80&w=800&auto=format&fit=crop', 
      name: 'SIGNATURE', 
      desc: 'SEASONED JUICY STEAK, SWISS/AMERICAN CHEESE, GRILLED ONIONS, BELL PEPPERS, MUSHROOM & MAYO', 
      price: '$11.99', 
      featured: true 
    },
    { 
      image: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d?q=80&w=800&auto=format&fit=crop', 
      name: 'SPICY PEPPER', 
      desc: 'SEASONED SPICY STEAK, SWISS & AMERICAN CHEESE, GRILLED JALAPENOS, BELL PEPPERS, BANANA PEPPERS & MAYO', 
      price: '$11.99', 
      spicy: true 
    },
    { 
      image: 'https://images.unsplash.com/photo-1621800043295-a73fe2f76e2c?q=80&w=800&auto=format&fit=crop', 
      name: 'FLAMING HOT', 
      desc: 'SEASONED SPICY STEAK, AMERICAN CHEESE, GRILLED JALAPENOS, CHEETO DUST, HOT SAUCE', 
      price: '$11.99', 
      fire: true 
    },
    { 
      image: 'https://images.unsplash.com/photo-1547496502-affa22d38842?q=80&w=800&auto=format&fit=crop', 
      name: 'VEGGIE', 
      desc: 'TATOR TOTS, SWISS/AMERICAN CHEESE, GRILLED ONIONS, BELL PEPPERS, MUSHROOM & MAYO', 
      price: '$9.99' 
    },
  ],
  shareables: [
    {
      image: 'https://images.unsplash.com/photo-1573225342350-16731dd9bf3d?q=80&w=800&auto=format&fit=crop',
      name: 'PHILLY CHEESE FRIES',
      desc: '(COMES WITH SIGNATURE PHILLY) CHOOSE ANY OTHER STYLE AVAILABLE',
      price: '$11.99'
    },
    {
      image: 'https://images.unsplash.com/photo-1513456852971-30c0b8199d4d?q=80&w=800&auto=format&fit=crop',
      name: 'PHILLY CHEESE NACHOS',
      desc: '(COMES WITH SIGNATURE PHILLY) CHOOSE ANY OTHER STYLE AVAILABLE',
      price: '$11.99'
    },
    {
      image: 'https://images.unsplash.com/photo-1626078437292-cc76dc560295?q=80&w=800&auto=format&fit=crop',
      name: 'PHILLY CHEESE TOTS',
      desc: '(COMES WITH SIGNATURE PHILLY) CHOOSE ANY OTHER STYLE AVAILABLE',
      price: '$11.99'
    },
    {
      image: 'https://images.unsplash.com/photo-1546793665-c74683f339c1?q=80&w=800&auto=format&fit=crop',
      name: 'PHILLY CHEESE SALAD',
      desc: '(COMES WITH SIGNATURE PHILLY) CHOOSE ANY OTHER STYLE AVAILABLE',
      price: '$11.99'
    }
  ],
  sandwiches: [
    { 
      image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=800&auto=format&fit=crop', 
      name: 'OG ZINGER', 
      desc: 'FRESHLY HAND BATTERED CHICKEN BREAST TOPPED WITH OUR MAGICAL HOUSE SAUCE, HOT N SWEET SAUCE, COLESLAW & CHEESE', 
      single: '$9.99', 
      double: '$13.99', 
      featured: true, 
      badge: 'BEST SELLER' 
    },
    { 
      image: 'https://images.unsplash.com/photo-1562967916-eb82221dfb92?q=80&w=800&auto=format&fit=crop', 
      name: 'FLAMIN HOT ZINGER', 
      desc: 'FRESHLY HAND BATTERED CHICKEN BREAST TOPPED WITH OUR MAGICAL HOUSE SAUCE, SPICY SAUCE, JALAPENOS, CHEETOS & COLESLAW', 
      single: '$9.99', 
      double: '$13.99', 
      fire: true 
    },
    { 
      image: 'https://images.unsplash.com/photo-1626078299034-90407a10fd34?q=80&w=800&auto=format&fit=crop', 
      name: 'BBQ BACON ZINGER', 
      desc: 'FRESHLY HAND BATTERED CHICKEN BREAST TOPPED WITH OUR MAGICAL HOUSE SAUCE, COLESLAW, BEEF BRISKET BACON, BBQ SAUCE & CHEESE', 
      price: '$12.99' 
    },
  ],
  burgers: [
    { 
      image: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?q=80&w=800&auto=format&fit=crop', 
      name: 'OG CHEESEBURGER', 
      desc: 'SEASONED BEEF PATTY, AMERICAN CHEESE', 
      single: '$9.99', 
      double: '$13.99' 
    },
    { 
      image: 'https://images.unsplash.com/photo-1534790561517-40e1c944f24c?q=80&w=800&auto=format&fit=crop', 
      name: 'MUSHROOM N SWISS', 
      desc: 'SEASONED BEEF PATTY, SWISS CHEESE, GRILLED MUSHROOMS', 
      single: '$10.99', 
      double: '$14.99' 
    },
    { 
      image: 'https://images.unsplash.com/photo-1553979459-d2229ba7433b?q=80&w=800&auto=format&fit=crop', 
      name: "CHEF'S SPECIAL", 
      desc: 'SEASONED BEEF PATTY, SWISS CHEESE, GRILLED MUSHROOMS, ONIONS, JALAPENOS & MOZZARELLA CHEESE', 
      single: '$9.99', 
      double: '$13.99' 
    },
    { 
      image: 'https://images.unsplash.com/photo-1619177383921-9e79f64817a1?q=80&w=800&auto=format&fit=crop', 
      name: 'TEXAS BURGER', 
      desc: 'SEASONED BEEF PATTY, AMERICAN CHEESE TOPPED WITH SIGNATURE PHILLY CHEESE STEAK', 
      price: '$12.99'
    },
    { 
      image: 'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?q=80&w=800&auto=format&fit=crop', 
      name: 'BBQ BACON CHEESEBURGER', 
      desc: 'SEASONED BEEF PATTY, AMERICAN CHEESE, BACON BRISKET & BBQ SAUCE', 
      price: '$12.99' 
    },
  ],
  kids: [
    {
      name: 'CHICKEN NUGGETS + UNSEASONED FRIES',
      desc: '',
      four_pc: '$5.99',
      eight_pc: '$8.49',
      icon: '🍗'
    },
    {
      name: '3PC CHICKEN TENDERS + UNSEASONED FRIES',
      desc: '',
      price: '$9.99',
      icon: '🍱'
    }
  ],
  sides: [
    { name: 'SEASONED FRIES', reg: '$2.99', lg: '$4.49', icon: '🍟' },
    { name: 'TATER TOTS', reg: '$3.49', lg: '$6.49', icon: '🥔' },
    { name: 'ONION RINGS', reg: '$3.49', lg: '$6.49', icon: '🧅' },
    { name: 'SWEET POTATO FRIES', reg: '$3.49', lg: '$6.49', icon: '🍠' },
    { name: '5PC JALAPENO POPPERS', price: '$4.99', icon: '🌶️' },
    { name: 'CHEESE FRIES', reg: '$4.49', lg: '$7.99', icon: '🧀' },
    { name: 'CHEESE TOTS', reg: '$4.99', lg: '$8.49', icon: '🟡' },
    { name: 'COLESLAW', reg: '$1.99', icon: '🥗' },
  ],
  beverages: [
    { name: 'BOTTLED WATER', price: '$1.49', icon: '💧' },
    { name: 'CANNED SODA', price: '$2.49', icon: '🥤' },
    { name: 'JARITOS', price: '$3.49', icon: '🍹' },
    { name: 'MEXICAN TALL SODA', price: '$4.49', icon: '🍾' },
  ]
};

export const extras = [
  { name: 'Make Any Sandwich A Combo Fries & Soda (Upgrades Available)', price: '$3.99' },
  { name: 'Extra Veggies (Mushrooms, Onions, Blend of Peppers, Banana Pepper, Jalapenos)', price: '$0.99' },
  { name: 'Cheese Sauce', price: '$1.99' },
  { name: 'Mozzarella', price: '$1.99' },
  { name: 'American/Swiss', price: '$0.99' },
  { name: '2 Slice Brisket', price: '$2.49' },
];
