import { Link } from "react-scroll";
import React, { useState, useEffect } from 'react';
import {
  FaAward, FaGlobe, FaHandshake, FaLeaf, FaPhone, FaEnvelope,
  FaMapMarkerAlt, FaBars, FaTimes, FaShippingFast, FaSeedling,
  FaCertificate, FaBoxes, FaHeadset, FaClock, FaChevronRight, FaArrowRight
} from 'react-icons/fa';

import logo from "../assets/logo.jpg";

// --- Header Component ---
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md border-b border-slate-200 shadow-sm' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          <div className="flex items-center space-x-3">
            <img
              src={logo}
              alt="Zencoir Logo"
              className="h-20 w-20 object-contain"
            />
            <div className="flex flex-col">
              <h2 className="text-2xl font-bold text-slate-900 tracking-wide">ZENCOIR</h2>
              <span className="text-[12px] uppercase tracking-[0.2em] text-amber-800">
                Global Exports
              </span>
            </div>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            {['home', 'about', 'products', 'services', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="text-md font-medium text-slate-600 hover:text-amber-800 hover:underline decoration-amber-700 decoration-2 underline-offset-8 transition-all capitalize"
              >
                {item}
              </button>
            ))}
          </nav>

          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 text-slate-800">
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t border-slate-200 shadow-xl">
          <nav className="px-4 py-6 space-y-4">
            {['home', 'about', 'products', 'services', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="block w-full text-left px-4 py-3 text-slate-600 hover:text-amber-800 hover:bg-slate-50 hover:pl-6 transition-all border-l-2 border-transparent hover:border-amber-700 capitalize font-medium"
              >
                {item}
              </button>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
