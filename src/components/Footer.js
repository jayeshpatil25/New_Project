import { Link } from "react-scroll";
import React, { useState, useEffect } from 'react';
import { 
  FaAward, FaGlobe, FaHandshake, FaLeaf, FaPhone, FaEnvelope, 
  FaMapMarkerAlt, FaBars, FaTimes, FaShippingFast, FaSeedling, 
  FaCertificate, FaBoxes, FaHeadset, FaClock, FaChevronRight, FaArrowRight 
} from 'react-icons/fa';

// --- Footer Component ---
const Footer = () => {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-slate-400 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center pb-12 border-b border-slate-800 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-white mb-1">ZENCOIR</h3>
            <p className="text-xs text-emerald-500 uppercase tracking-[0.3em]">Export Excellence</p>
          </div>
          <div className="flex flex-wrap gap-8">
             {['home', 'about', 'products', 'services', 'contact'].map((item) => (
               <button key={item} onClick={() => scrollToSection(item)} className="text-sm hover:text-white transition-colors capitalize">
                 {item}
               </button>
             ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 pt-12 text-sm">
          <div className="space-y-2">
             <p>&copy; 2025 Zencoir. All rights reserved.</p>
             <p className="text-slate-500">Premium Coir Exporters • Pune, India</p>
          </div>
          <div className="flex md:justify-end gap-6">
            <a href="#" className="hover:text-emerald-500 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-emerald-500 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;