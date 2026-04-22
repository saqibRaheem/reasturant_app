'use client';
import { useState, useEffect } from 'react';
import Preloader from '@/components/Preloader';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Marquee from '@/components/Marquee';
import FeaturedSlider from '@/components/FeaturedSlider';
import Menu from '@/components/Menu';
import Stats from '@/components/Stats';
import About from '@/components/About';
import Gallery from '@/components/Gallery';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import OrderModal from '@/components/OrderModal';
import BurgerShowcase from '@/components/BurgerShowcase';


export default function Home() {
   const [loaded, setLoaded] = useState(false);
  // Handle smooth scroll behavior for the entire app
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  return (
  <div className="bg-brand-dark min-h-screen selection:bg-brand-red selection:text-white relative">
      <Preloader onComplete={() => setLoaded(true)} />
      
      {loaded && (
        <div className="relative flex flex-col">
          {/* Global Background GIF Effect */}
          <div className="fixed inset-0 z-0 pointer-events-none opacity-20 mix-blend-screen">
            <div 
              className="absolute inset-0 bg-cover bg-center grayscale contrast-150 brightness-50"
              style={{ backgroundImage: `url('https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExOHY5eW5yeXp4eXd4eXd4eXd4eXd4eXd4eXd4eXd4eXd4eXd4eJm0&ep=v1_gifs_search&rid=giphy.gif&ct=g')` }}
            />
          </div>

          <Navbar />
          <main className="relative z-10">
            <Hero />
            <Marquee />
            <About />
            <Stats />
            <BurgerShowcase />
            <FeaturedSlider />
            <Menu />
            <Gallery />
            <Contact />
          </main>
          <Footer />
          <OrderModal />
        </div>
      )}
    </div>
  );
}
