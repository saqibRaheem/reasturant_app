import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
export default function Footer() {
  return (
    <footer className="bg-brand-dark2 pt-20 pb-10 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Col */}
          <div className="space-y-6">
            <a href="#home" className="flex flex-col leading-none">
              <span className="font-oswald text-3xl font-bold tracking-widest text-white">
                S&S <span className="text-brand-red">CHEESE</span>
              </span>
              <span className="font-greatvibes text-lg text-white/60 lowercase mt-1">
                Steaks & More
              </span>
            </a>
            <p className="font-inter text-sm text-white/50 leading-relaxed">
              Experience the authentic taste of Philadelphia right here in Carrollton.
              Our commitment to quality ingredients and traditional recipes makes every bite unforgettable.
            </p>
            <div className="flex gap-4">
              {[FaFacebook, FaInstagram, FaTwitter].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/60 hover:bg-brand-red hover:text-white transition-all transform hover:-translate-y-1">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Nav Col */}
          <div>
            <h4 className="font-greatvibes text-4xl text-brand-gold mb-8">Navigation</h4>
            <ul className="space-y-4">
              {['Home', 'Menu', 'Featured', 'About', 'Contact'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="font-inter text-sm text-white/50 hover:text-brand-red transition-colors flex items-center gap-2 group">
                    <span className="w-0 h-[1px] bg-brand-red group-hover:w-4 transition-all" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Col */}
          <div>
            <h4 className="font-greatvibes text-4xl text-brand-gold mb-8">Contact Us</h4>
            <ul className="space-y-6">
              <li className="flex gap-4">
                <MapPin className="text-brand-red shrink-0" size={20} />
                <span className="font-inter text-sm text-white/50 leading-snug">3044 Old Denton Rd Suit 320, Carrollton, TX 75007</span>
              </li>
              <li className="flex gap-4">
                <Phone className="text-brand-red shrink-0" size={20} />
                <span className="font-inter text-sm text-white/50">(945) 398-9915</span>
              </li>
              <li className="flex gap-4">
                <Mail className="text-brand-red shrink-0" size={20} />
                <span className="font-inter text-sm text-white/50">info@sscheesesteaks.com</span>
              </li>
            </ul>
          </div>

          {/* Hours Col */}
          <div>
            <h4 className="font-greatvibes text-4xl text-brand-gold mb-8">Working Hours</h4>
            <ul className="space-y-4">
              <li className="flex justify-between items-center text-sm">
                <span className="font-inter text-white/70">Mon - Thu</span>
                <span className="font-oswald text-brand-gold font-bold">11:00 AM - 10:00 PM</span>
              </li>
              <li className="flex justify-between items-center text-sm">
                <span className="font-inter text-white/70">Fri - Sat</span>
                <span className="font-oswald text-brand-gold font-bold">11:00 AM - 11:30 PM</span>
              </li>
              <li className="flex justify-between items-center text-sm">
                <span className="font-inter text-white/70">Sunday</span>
                <span className="font-oswald text-brand-gold font-bold">12:00 PM - 09:00 PM</span>
              </li>
            </ul>
            <div className="mt-8 p-4 bg-brand-red/10 border border-brand-red/20 rounded-xl flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-brand-red animate-pulse" />
              <span className="font-inter text-[10px] font-bold uppercase tracking-wider text-brand-red">Open for Delivery & Pickup</span>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="font-inter text-[10px] text-white/30 uppercase tracking-widest font-bold">
            © 2024 S&S CheeseSteaks. All Rights Reserved.
          </p>
          <div className="flex gap-8">
            <a href="#" className="font-inter text-[10px] text-white/30 hover:text-white uppercase tracking-widest font-bold font-transition">Privacy Policy</a>
            <a href="#" className="font-inter text-[10px] text-white/30 hover:text-white uppercase tracking-widest font-bold font-transition">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
