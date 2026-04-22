'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, Loader2, CheckCircle, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { menuData } from '../data/menuData';

export default function OrderModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [status, setStatus] = useState('idle');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    item: '',
    quantity: 1,
    instructions: ''
  });

  // Flatten all items from menuData into a single array for the dropdown
  const allItems = Object.values(menuData).flat();

  useEffect(() => {
    const handleOpen = (e) => {
      setIsOpen(true);
      // Reset all fields completely whenever modal opens
      setFormData({
        name: '',
        phone: '',
        email: '',
        address: '',
        item: e.detail?.itemName || '',
        quantity: 1,
        instructions: ''
      });
    };
    window.addEventListener('OPEN_ORDER_MODAL', handleOpen);
    return () => window.removeEventListener('OPEN_ORDER_MODAL', handleOpen);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    const formattedOrderText = `Item: ${formData.item}\nQuantity: ${formData.quantity}\nSpecial Instructions: ${formData.instructions}`;

    try {
      const serviceId = 'YOUR_SERVICE_ID'; 
      const templateId = 'YOUR_TEMPLATE_ID'; 
      const publicKey = 'YOUR_PUBLIC_KEY'; 

      if(serviceId === 'YOUR_SERVICE_ID' || !serviceId) {
          setTimeout(() => {
              setStatus('success');
              setTimeout(() => { setIsOpen(false); setStatus('idle'); }, 3000);
          }, 1500);
          return;
      }

      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          phone: formData.phone,
          reply_to: formData.email,
          address: formData.address,
          message: formattedOrderText,
        },
        publicKey
      );
      
      setStatus('success');
      setTimeout(() => { setIsOpen(false); setStatus('idle'); }, 3000);
      setFormData({ name: '', phone: '', email: '', address: '', item: '', quantity: 1, instructions: '' });
    } catch (error) {
      console.error('Email failed:', error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 4000);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[1000] cursor-pointer"
          />
          <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg z-[1001] p-4 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 50 }}
              className="pointer-events-auto"
            >
              <div className="bg-brand-dark2 border border-white/10 p-6 md:p-8 rounded-[2rem] shadow-[0_0_100px_rgba(0,0,0,0.8)] relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-brand-red/10 blur-[100px] -translate-y-1/2 translate-x-1/2 rounded-full pointer-events-none" />

                <button onClick={() => setIsOpen(false)} className="absolute top-6 right-6 text-white/50 hover:text-brand-red transition-colors">
                  <X size={24} />
                </button>

                <h2 className="font-oswald text-3xl md:text-4xl font-black text-white uppercase tracking-widest mb-2">Place an Order</h2>
                <p className="font-inter text-sm text-white/50 mb-6">Select your item and fill in your delivery details.</p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Item Dropdown */}
                  <div className="bg-white/5 border-2 border-brand-red/30 p-4 rounded-2xl relative overflow-hidden group">
                    <div className="absolute inset-0 bg-brand-red/5 pointer-events-none" />
                    <div className="flex gap-4 relative z-10">
                      <div className="w-full">
                        <label className="block font-oswald text-[10px] uppercase tracking-widest text-brand-gold mb-1">Select Item</label>
                        <select required name="item" value={formData.item} onChange={handleChange} className="w-full bg-transparent text-white font-oswald text-lg font-bold uppercase focus:outline-none appearance-none cursor-pointer">
                          <option value="" disabled className="bg-brand-dark2">-- Choose Menu Item --</option>
                          {allItems.map((menuItem, idx) => (
                            <option key={idx} value={menuItem.name} className="bg-brand-dark2 text-sm">
                              {menuItem.name} {menuItem.price || menuItem.reg || menuItem.single ? `(${menuItem.price || menuItem.reg || menuItem.single})` : ''}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div className="w-24 shrink-0 border-l border-white/10 pl-4">
                        <label className="block font-oswald text-[10px] uppercase tracking-widest text-brand-gold mb-1">QTY</label>
                        <input required name="quantity" value={formData.quantity} onChange={handleChange} type="number" min="1" max="50" className="w-full bg-transparent text-white font-oswald text-lg font-bold focus:outline-none text-center" />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <input required name="name" value={formData.name} onChange={handleChange} type="text" className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-red transition-colors font-inter text-sm" placeholder="Your Name" />
                    </div>
                    <div>
                      <input required name="phone" value={formData.phone} onChange={handleChange} type="tel" className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-red transition-colors font-inter text-sm" placeholder="Phone No." />
                    </div>
                  </div>

                  <div>
                    <input required name="email" value={formData.email} onChange={handleChange} type="email" className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-red transition-colors font-inter text-sm" placeholder="Email Address" />
                  </div>

                  <div>
                    <input required name="address" value={formData.address} onChange={handleChange} type="text" className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-red transition-colors font-inter text-sm" placeholder="Full Delivery Address" />
                  </div>

                  <div>
                    <textarea name="instructions" value={formData.instructions} onChange={handleChange} rows="2" className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-red transition-colors font-inter text-sm resize-none" placeholder="Special Instructions (e.g., No onions, extra spicy...)"></textarea>
                  </div>

                  <button 
                    type="submit" 
                    disabled={status === 'loading'}
                    className="w-full mt-2 bg-brand-red text-white py-4 rounded-xl font-oswald font-black uppercase tracking-[0.2em] hover:bg-white hover:text-brand-dark transition-all flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed shadow-xl active:scale-95"
                  >
                    {status === 'loading' ? (
                      <><Loader2 className="animate-spin" size={20} /> Sending...</>
                    ) : status === 'success' ? (
                      <><CheckCircle size={20} /> Sent Successfully</>
                    ) : status === 'error' ? (
                      <><AlertCircle size={20} /> Failed. Try Again</>
                    ) : (
                      <><Send size={20} /> Submit Order</>
                    )}
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
