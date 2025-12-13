import { Link } from "react-scroll";
import React, { useState, useEffect } from 'react';
import { 
  FaAward, FaGlobe, FaHandshake, FaLeaf, FaPhone, FaEnvelope, 
  FaMapMarkerAlt, FaBars, FaTimes, FaShippingFast, FaSeedling, 
  FaCertificate, FaBoxes, FaHeadset, FaClock, FaChevronRight, FaArrowRight 
} from 'react-icons/fa';

// --- Hero Component ---
const Hero = () => {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen bg-white flex items-center pt-20">
      {/* Abstract Background Elements */}
      <div className="absolute top-0 right-0 w-2/5 h-full bg-emerald-50 skew-x-12 pointer-events-none border-l border-slate-100"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-8 space-y-10">
            <div className="inline-flex items-center space-x-3 border-b border-emerald-500/30 pb-2">
              <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
              <span className="text-emerald-600 text-md font-mono tracking-widest uppercase">Sustainable Export Solutions</span>
            </div>
            
            <h1 className="text-5xl sm:text-7xl font-bold text-slate-900 leading-tight tracking-tight">
              Refining Nature's <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500">
                Finest Fiber.
              </span>
            </h1>
            
            <p className="text-xl text-slate-600 max-w-2xl leading-relaxed border-l-4 border-slate-200 pl-6">
              Zencoir connects global industries with premium, ethically sourced coir products. We bridge the gap between sustainable farming and industrial innovation.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 pt-4">
              <button onClick={() => scrollToSection('products')} className="group flex items-center justify-between px-8 py-4 bg-emerald-600 text-white min-w-[200px] hover:bg-emerald-700 transition-colors shadow-lg shadow-emerald-200">
                <span className="font-medium tracking-wide">View Catalog</span>
                <FaArrowRight className="transform group-hover:translate-x-1 transition-transform" />
              </button>
              <button onClick={() => scrollToSection('contact')} className="group flex items-center justify-between px-8 py-4 bg-white border border-slate-300 text-slate-700 min-w-[200px] hover:border-emerald-500 hover:text-emerald-700 transition-colors">
                <span className="font-medium tracking-wide">Request Quote</span>
                <div className="w-2 h-2 bg-slate-300 rounded-full group-hover:bg-emerald-500 transition-colors"></div>
              </button>
            </div>
          </div>

          <div className="lg:col-span-4 flex flex-col justify-end space-y-8 lg:border-l lg:border-slate-200 lg:pl-12 lg:py-12">
             <div className="space-y-2">
                <h3 className="text-5xl font-bold text-slate-900">50+</h3>
                <p className="text-md text-slate-500 uppercase tracking-widest">Global Markets</p>
             </div>
             <div className="w-12 h-px bg-slate-200"></div>
             <div className="space-y-2">
                <h3 className="text-5xl font-bold text-slate-900">100%</h3>
                <p className="text-md text-slate-500 uppercase tracking-widest">Organic Sourcing</p>
             </div>
             <div className="w-12 h-px bg-slate-200"></div>
             <div className="space-y-2">
                <h3 className="text-5xl font-bold text-slate-900">24/7</h3>
                <p className="text-md text-slate-500 uppercase tracking-widest">Logistics Support</p>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};



export default Hero;