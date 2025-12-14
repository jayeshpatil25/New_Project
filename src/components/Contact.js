import emailjs from "@emailjs/browser";
import React, { useState } from 'react';
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

  const inputStyles =
    "w-full bg-transparent border-b border-slate-300 py-3 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-amber-700 transition-colors rounded-none";

  return (
    <section id="contact" className="py-24 bg-amber-50 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent opacity-50"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Centered Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
            Let's Connect
          </h2>
          <p className="text-xl text-slate-600 font-light leading-relaxed max-w-2xl mx-auto">
            Ready to start your coir benefit journey? Fill out the form below and we will get back to you with a personalized quote.
          </p>
        </div>

        {/* Form Container */}
        <div className="bg-white rounded-3xl shadow-xl shadow-slate-200/50 overflow-hidden border border-slate-100">
          <div className="p-8 lg:p-12">
            <form onSubmit={handleSubmit} className="space-y-8">

              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-md font-bold uppercase tracking-wider text-slate-500 ml-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className={inputStyles}
                    placeholder="John Doe"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-md font-bold uppercase tracking-wider text-slate-500 ml-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={inputStyles}
                    placeholder="john@company.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-md font-bold uppercase tracking-wider text-slate-500 ml-1">
                    Company
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className={inputStyles}
                    placeholder="Company Name"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-md font-bold uppercase tracking-wider text-slate-500 ml-1">
                    Phone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={inputStyles}
                    placeholder="+1 (555) 000-0000"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-md font-bold uppercase tracking-wider text-slate-500 ml-1">
                  Product Interest
                </label>
                <div className="relative">
                  <select
                    name="product"
                    value={formData.product}
                    onChange={handleChange}
                    className={`${inputStyles} appearance-none cursor-pointer`}
                  >
                    <option value="" className="text-slate-400">Select a product</option>
                    <option value="coir-pith" className="text-slate-900">Coir Pith</option>
                    <option value="vermicompost" className="text-slate-900">Vermicompost</option>
                    <option value="custom" className="text-slate-900">Custom Products</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-5 text-slate-500">
                    <svg
                      className="fill-current h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-md font-bold uppercase tracking-wider text-slate-500 ml-1">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  className={`${inputStyles} resize-none`}
                  placeholder="Tell us about your requirements..."
                ></textarea>
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  disabled={isSending}
                  className="w-full py-5 bg-amber-800 hover:bg-amber-900 text-white font-bold tracking-widest uppercase text-sm rounded-xl disabled:opacity-50 shadow-lg shadow-amber-200 transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-amber-300"
                >
                  {isSending ? 'Transmitting...' : 'Send Message'}
                </button>

              </div>

              {status.type && (
                <div
                  className={`p-4 rounded-xl text-center text-sm ${status.type === 'success'
                      ? 'bg-amber-50 text-amber-800 border border-amber-100'
                      : 'bg-red-50 text-red-700 border border-red-100'
                    }`}
                >
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
