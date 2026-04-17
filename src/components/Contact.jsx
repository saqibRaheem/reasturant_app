import { motion } from 'framer-motion';
import { Send, Phone, MapPin, Mail } from 'lucide-react';

export default function Contact() {
  return (
    <section className="py-24 bg-brand-dark" id="contact">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Info Side */}
          <div className="space-y-12">
            <header>
              <span className="inline-block px-4 py-1.5 rounded-full border border-brand-red/30 text-brand-red font-inter text-[10px] font-bold uppercase tracking-[0.3em] mb-4">
                Get In Touch
              </span>
              <h2 className="font-oswald text-5xl font-black uppercase text-white mb-6">
                VISIT THE <span className="text-brand-red">SOURCE</span>
              </h2>
              <p className="font-inter text-white/50 leading-relaxed max-w-md">
                Craving the best Philly CheeseSteak in Texas? Swing by our Carrollton location 
                or give us a call to place your order for pickup or delivery.
              </p>
            </header>

            <div className="space-y-8">
              {[
                { icon: MapPin, title: 'Our Location', detail: '3044 Old Denton Rd Suit 320, Carrollton, TX 75007' },
                { icon: Phone, title: 'Call Us', detail: '(945) 398-9915' },
                { icon: Mail, title: 'Email Us', detail: 'hello@sscheesesteaks.com' },
              ].map((item, i) => (
                <div key={i} className="flex gap-6 group">
                  <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-brand-red group-hover:bg-brand-red group-hover:text-white transition-all">
                    <item.icon size={24} />
                  </div>
                  <div>
                    <h4 className="font-oswald text-xs font-bold uppercase tracking-widest text-brand-gold mb-1">{item.title}</h4>
                    <p className="font-inter text-white font-medium">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Map Placeholder/Embed */}
            <div className="rounded-3xl overflow-hidden grayscale contrast-125 opacity-70 hover:opacity-100 transition-all border border-white/10 h-64 relative group">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3348.657512217112!2d-96.7691884!3d32.9568943!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c1f61882fb3df%3A0x673af436aa39a1ab!2s300%20N%20Coit%20Rd%2C%20Richardson%2C%20TX%2075080!5e0!3m2!1sen!2sus!4v1713360000000!5m2!1sen!2sus" 
                className="w-full h-full border-0"
                allowFullScreen="" 
                loading="lazy"
              />
              <div className="absolute inset-0 pointer-events-none border-[12px] border-brand-dark/40 rounded-3xl group-hover:border-transparent transition-all" />
            </div>
          </div>

          {/* Form Side */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-brand-dark2 p-10 lg:p-14 rounded-[3rem] border border-white/5 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-red/10 rounded-full blur-3xl" />
            
            <form className="space-y-6 relative z-10" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-2">
                <label className="font-oswald text-[10px] font-bold uppercase tracking-widest text-white/40 ml-4">Full Name</label>
                <input 
                  type="text" 
                  placeholder="John Doe"
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-white/20 focus:outline-none focus:border-brand-red/50 transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="font-oswald text-[10px] font-bold uppercase tracking-widest text-white/40 ml-4">Email Address</label>
                <input 
                  type="email" 
                  placeholder="john@example.com"
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-white/20 focus:outline-none focus:border-brand-red/50 transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="font-oswald text-[10px] font-bold uppercase tracking-widest text-white/40 ml-4">Message</label>
                <textarea 
                  rows="4"
                  placeholder="Your message here..."
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-white/20 focus:outline-none focus:border-brand-red/50 transition-all resize-none"
                />
              </div>
              <button className="group w-full bg-brand-red hover:bg-red-600 text-white py-5 rounded-2xl font-oswald text-lg font-bold uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-3">
                Send Message <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
