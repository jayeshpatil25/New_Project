import emailjs from "@emailjs/browser";
import React, { useState, useEffect } from 'react';
import { 
  FaAward, FaGlobe, FaHandshake, FaLeaf, FaPhone, FaEnvelope, 
  FaMapMarkerAlt, FaBars, FaTimes, FaShippingFast, FaSeedling, 
  FaCertificate, FaBoxes, FaHeadset, FaClock, FaChevronRight, FaArrowRight 
} from 'react-icons/fa';

// --- Contact Component ---
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '', email: '', company: '', phone: '', product: '', message: ''
  });
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState({ type: null, message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSending) return;
    setIsSending(true);
    setStatus({ type: null, message: '' });

    setTimeout(() => {
      setStatus({
        type: 'success',
        message: "Thank you! Your message has been sent. We'll get back to you soon."
      });
      setFormData({ name: '', email: '', company: '', phone: '', product: '', message: '' });
      setIsSending(false);
    }, 1500);
  };

  const inputStyles = "w-full bg-transparent border-b border-slate-300 py-3 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-emerald-500 transition-colors rounded-none";

  return (
    <section id="contact" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20">
          <div>
            <h2 className="text-5xl font-bold text-slate-900 mb-8">Let's Connect</h2>
            <p className="text-xl text-slate-600 mb-12 font-light">
              Ready to start your coir benefit journey? Get in touch for personalized quotes.
            </p>

            <div className="space-y-8">
              {[
                { icon: FaPhone, title: 'Call Us', value: '+91 86258 56608' },
                { icon: FaEnvelope, title: 'Email', value: 'info@zencoir.in' },
                { icon: FaMapMarkerAlt, title: 'Visit', value: 'Yashashree Society, Marutrao Gaikwadnagar, Aundh\nPune, Maharashtra 411067, India' },
                { icon: FaClock, title: 'Hours', value: 'Mon - Fri: 9:00 AM - 6:00 PM\nSat: 9:00 AM - 2:00 PM' }
              ].map((item, idx) => (
                <div key={idx} className="flex items-start space-x-6 group">
                  <div className="text-emerald-600 text-xl mt-1 group-hover:scale-110 transition-transform">
                    <item.icon />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-700 uppercase tracking-wider mb-1">{item.title}</h4>
                    <p className="text-slate-600 text-base whitespace-pre-line group-hover:text-slate-900 transition-colors">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-100 p-8 lg:p-12 border border-slate-200">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <label className="block text-xs uppercase text-emerald-600 mb-1">Full Name</label>
                  <input type="text" name="name" value={formData.name} onChange={handleChange} required className={inputStyles} placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-xs uppercase text-emerald-600 mb-1">Email Address</label>
                  <input type="email" name="email" value={formData.email} onChange={handleChange} required className={inputStyles} placeholder="john@company.com" />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <label className="block text-xs uppercase text-emerald-600 mb-1">Company</label>
                  <input type="text" name="company" value={formData.company} onChange={handleChange} className={inputStyles} placeholder="Company Name" />
                </div>
                <div>
                  <label className="block text-xs uppercase text-emerald-600 mb-1">Phone</label>
                  <input type="tel" name="phone" value={formData.phone} onChange={handleChange} className={inputStyles} placeholder="+1 (555) 000-0000" />
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase text-emerald-600 mb-1">Product Interest</label>
                <select name="product" value={formData.product} onChange={handleChange} className={`${inputStyles} appearance-none cursor-pointer bg-slate-50`}>
                  <option value="" className="text-slate-500">Select a product</option>
                  <option value="coir-pith" className="text-slate-900">Coir Pith</option>
                  <option value="vermicompost" className="text-slate-900">Vermicompost</option>
                  <option value="custom" className="text-slate-900">Custom Products</option>
                </select>
              </div>

              <div>
                <label className="block text-xs uppercase text-emerald-600 mb-1">Message</label>
                <textarea name="message" value={formData.message} onChange={handleChange} required rows="3" className={`${inputStyles} resize-none bg-slate-50`} placeholder="Your requirements..."></textarea>
              </div>

              <button type="submit" disabled={isSending} className="w-full py-5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold tracking-widest uppercase text-sm transition-all disabled:opacity-50 mt-4 shadow-md shadow-emerald-200">
                {isSending ? 'Transmitting...' : 'Send Message'}
              </button>

              {status.type && (
                <div className={`mt-4 p-4 text-sm border-l-2 ${status.type === 'success' ? 'border-emerald-500 text-emerald-700 bg-emerald-50' : 'border-red-500 text-red-700 bg-red-50'}`}>
                  {status.message}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;