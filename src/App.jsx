import { useState } from 'react'
import Preloader from './components/Preloader'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import FeaturedSlider from './components/FeaturedSlider'
import Menu from './components/Menu'
import Shareables from './components/Shareables'
import Stats from './components/Stats'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './App.css'

export default function App() {
  const [loaded, setLoaded] = useState(false)

  return (
    <>
      <Preloader onComplete={() => setLoaded(true)} />
      <div style={{ visibility: loaded ? 'visible' : 'hidden' }}>
        <Navbar />
        <Hero />
        <Marquee />
        <FeaturedSlider />
        <Menu />
        <Shareables />
        <Stats />
        <Contact />
        <Footer />
      </div>
    </>
  )
}
