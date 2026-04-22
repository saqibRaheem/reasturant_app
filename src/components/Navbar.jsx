'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ShoppingBag } from 'lucide-react';
import { cn } from '../utils/cn';




const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Menu', href: '#menu' },
  { name: 'Featured', href: '#featured' },
  { name: 'About', href: '#about' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={cn(
        "fixed top-0 left-0 right-0 z-[100] transition-all duration-500 py-6",
        scrolled ? "bg-brand-dark/80 backdrop-blur-xl border-b border-white/5 py-4" : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="group flex items-center">
          <img src={'../assets/logo/JPG/1.png'} alt="S&S CheeseSteaks" className="h-16 md:h-20 w-auto transition-transform duration-500 group-hover:scale-105" />
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-4 py-2 font-oswald text-sm font-medium uppercase tracking-[0.1em] text-white/70 hover:text-brand-red transition-colors relative group"
            >
              {link.name}
              <span className="absolute bottom-1 left-4 right-4 h-[2px] bg-brand-red scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-6">
          <button 
            onClick={() => window.dispatchEvent(new CustomEvent('OPEN_ORDER_MODAL'))}
            className="flex items-center gap-2 bg-brand-red hover:bg-red-600 text-white px-6 py-2.5 rounded-full font-oswald text-sm font-bold uppercase tracking-wider transition-all hover:scale-105"
          >
            Order Now
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-brand-dark border-t border-white/5 overflow-hidden"
          >
            <div className="container mx-auto px-6 py-8 flex flex-col gap-4 text-center">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="font-oswald text-2xl font-bold uppercase tracking-widest text-white hover:text-brand-red transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <button 
                onClick={() => { setIsOpen(false); window.dispatchEvent(new CustomEvent('OPEN_ORDER_MODAL')); }}
                className="mt-4 bg-brand-red text-white py-4 font-oswald text-lg font-bold uppercase w-full text-center"
              >
                Order Online
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
