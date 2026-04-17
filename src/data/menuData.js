export const menuData = {
  cheesesteaks: [
    { 
      image: 'https://images.unsplash.com/photo-1529665293573-5016a7c2cd3c?q=80&w=800&auto=format&fit=crop', 
      name: 'Steak N Cheese', 
      desc: 'Seasoned juicy steak, Swiss/American cheese & creamy mayo.', 
      price: '$9.99' 
    },
    { 
      image: 'https://images.unsplash.com/photo-1600891964599-f61ba0e24092?q=80&w=800&auto=format&fit=crop', 
      name: 'Signature Philly', 
      desc: 'Juicy steak, Swiss/American cheese, grilled onions, bell peppers, mushroom & mayo.', 
      price: '$11.99', 
      featured: true, 
      badge: 'House Special' 
    },
    { 
      image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=800&auto=format&fit=crop', 
      name: 'Barbeque Steak', 
      desc: 'Juicy steak, melted American cheese, grilled onions, topped with crispy onions and BBQ sauce.', 
      price: '$11.99' 
    },
    { 
      image: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d?q=80&w=800&auto=format&fit=crop', 
      name: 'Spicy Pepper Philly', 
      desc: 'Spicy steak, Swiss & American cheese, grilled jalapeños, bell peppers, banana peppers & zesty mayo.', 
      price: '$11.99', 
      spicy: true, 
      badge: 'Spicy' 
    },
    { 
      image: 'https://images.unsplash.com/photo-1621800043295-a73fe2f76e2c?q=80&w=800&auto=format&fit=crop', 
      name: 'Flaming Hot', 
      desc: 'Spicy steak, American cheese, grilled jalapeños, Cheeto dust, and our signature hot sauce.', 
      price: '$11.99', 
      fire: true, 
      badge: 'Extra Hot' 
    },
    { 
      image: 'https://images.unsplash.com/photo-1547496502-affa22d38842?q=80&w=800&auto=format&fit=crop', 
      name: 'Veggie Philly', 
      desc: 'Crispy tator tots, Swiss/American cheese, grilled onions, bell peppers, mushroom & mayo.', 
      price: '$9.99' 
    },
  ],
  sandwiches: [
    { 
      image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=800&auto=format&fit=crop', 
      name: 'OG Zinger', 
      desc: 'Freshly hand battered chicken breast, magical house sauce, hot n sweet sauce, coleslaw & cheese.', 
      single: '$9.99', 
      double: '$13.99', 
      featured: true, 
      badge: 'Best Seller' 
    },
    { 
      image: 'https://images.unsplash.com/photo-1562967916-eb82221dfb92?q=80&w=800&auto=format&fit=crop', 
      name: 'Flamin Hot Zinger', 
      desc: 'Hand battered chicken, house sauce, spicy sauce, jalapeños, Cheetos & fresh coleslaw.', 
      single: '$9.99', 
      double: '$13.99', 
      fire: true, 
      badge: 'Extra Hot' 
    },
    { 
      image: 'https://images.unsplash.com/photo-1626078299034-90407a10fd34?q=80&w=800&auto=format&fit=crop', 
      name: 'BBQ Bacon Zinger', 
      desc: 'Hand battered chicken, house sauce, fresh coleslaw, beef brisket bacon, BBQ sauce & cheese.', 
      price: '$12.99' 
    },
  ],
  burgers: [
    { 
      image: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?q=80&w=800&auto=format&fit=crop', 
      name: 'OG Cheeseburger', 
      desc: 'Double seasoned beef patty, melted American cheese on a toasted brioche bun.', 
      single: '$9.99', 
      double: '$13.99' 
    },
    { 
      image: 'https://images.unsplash.com/photo-1534790561517-40e1c944f24c?q=80&w=800&auto=format&fit=crop', 
      name: 'Mushroom N Swiss', 
      desc: 'Seasoned beef patty, Swiss cheese, grilled mushrooms and onions.', 
      single: '$10.99', 
      double: '$14.99' 
    },
    { 
      image: 'https://images.unsplash.com/photo-1553979459-d2229ba7433b?q=80&w=800&auto=format&fit=crop', 
      name: "Chef's Special", 
      desc: 'Beef patty, Swiss cheese, grilled mushrooms, onions, jalapeños & mozzarella.', 
      single: '$9.99', 
      double: '$13.99', 
      featured: true, 
      badge: "Chef's Choice" 
    },
    { 
      image: 'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?q=80&w=800&auto=format&fit=crop', 
      name: 'BBQ Bacon Burger', 
      desc: 'Seasoned beef patty, American cheese, beef bacon brisket & premium BBQ sauce.', 
      price: '$12.99' 
    },
    { 
      image: 'https://images.unsplash.com/photo-1619177383921-9e79f64817a1?q=80&w=800&auto=format&fit=crop', 
      name: 'Texas Burger', 
      desc: 'Beef patty, American cheese topped with our Signature Philly CheeseSteaks topping.', 
      price: '$12.99', 
      fire: true, 
      badge: 'Texas Style' 
    },
  ],
  sides: [
    { name: 'Seasoned Fries', reg: '$2.99', lg: '$4.49', icon: '🍟' },
    { name: 'Tater Tots', reg: '$3.49', lg: '$6.49', icon: '🥔' },
    { name: 'Onion Rings', reg: '$3.49', lg: '$6.49', icon: '🧅' },
    { name: 'Sweet Potato Fries', reg: '$3.49', lg: '$6.49', icon: '🍠' },
    { name: 'Cheese Fries', reg: '$4.49', lg: '$7.99', icon: '🧀' },
  ]
};

export const extras = [
  { name: 'Extra Veggies', price: '$0.99' },
  { name: 'Cheese Sauce', price: '$1.99' },
  { name: 'Mozzarella', price: '$1.99' },
  { name: 'American/Swiss', price: '$0.99' },
  { name: '2 Slice Brisket', price: '$2.49' },
];
