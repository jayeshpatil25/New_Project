import { Link } from "react-scroll";
import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { 
  FaAward, FaGlobe, FaHandshake, FaLeaf, FaPhone, FaEnvelope, 
  FaMapMarkerAlt, FaBars, FaTimes, FaShippingFast, FaSeedling, 
  FaCertificate, FaBoxes, FaHeadset, FaClock, FaChevronRight, FaArrowRight 
} from 'react-icons/fa';

// --- Hero Component ---
const Hero = () => {
  const { t } = useTranslation();
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
// Added 'pb-24' for mobile and 'lg:pb-0' to keep laptop view centered
  <section id="home" className="relative min-h-screen bg-white flex items-center pt-20 pb-24 lg:pb-0 scroll-mt-24 overflow-hidden">      
      {/* Subtle Texture Overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.035] bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:18px_18px]"></div>

      {/* Abstract Background Elements */}
      <div className="absolute top-0 right-0 hidden lg:block w-2/5 h-full bg-amber-50 skew-x-12 pointer-events-none border-l border-slate-100"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-8 space-y-10">
            <div className="inline-flex items-center space-x-3 border-b border-amber-700/30 pb-2">
              <span className="w-2 h-2 bg-amber-700 rounded-full animate-pulse"></span>
              <span className="text-amber-800 text-md font-mono tracking-widest uppercase">
                {t('hero.badge')}
              </span>
            </div>
            
            <h1 className="text-5xl sm:text-7xl font-bold text-slate-900 leading-tight tracking-tight">
              {t('hero.title_line1')} <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-800 to-yellow-700">
                {t('hero.title_line2')}
              </span>
            </h1>
            
            <p className="text-xl text-slate-600 max-w-2xl leading-relaxed border-l-4 border-slate-200 pl-6">
              {t('hero.description')}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 pt-4">
                <button
                onClick={() => scrollToSection('products')}
                className="group flex items-center justify-between px-8 py-4 bg-amber-800 text-white min-w-[200px] hover:bg-amber-900 transition-colors shadow-lg shadow-amber-200"
              >
                <span className="font-medium tracking-wide">{t('hero.buttons.view')}</span>
                <FaArrowRight className="transform group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => scrollToSection('contact')}
                className="group flex items-center justify-between px-8 py-4 bg-white border border-slate-300 text-slate-700 min-w-[200px] hover:border-amber-700 hover:text-amber-800 transition-colors"
              >
                <span className="font-medium tracking-wide">{t('hero.buttons.quote')}</span>
                <div className="w-2 h-2 bg-slate-300 rounded-full group-hover:bg-amber-700 transition-colors"></div>
              </button>
            </div>
          </div>

          <div className="lg:col-span-4 flex flex-col justify-end space-y-8 lg:border-l lg:border-slate-200 lg:pl-12 lg:py-12">
            <div className="space-y-2">
              <h3 className="text-5xl font-bold text-slate-900">50+</h3>
              <p className="text-md text-slate-500 uppercase tracking-widest">{t('hero.stats.markets')}</p>
            </div>
            <div className="w-12 h-px bg-slate-200"></div>
            <div className="space-y-2">
              <h3 className="text-5xl font-bold text-slate-900">100%</h3>
              <p className="text-md text-slate-500 uppercase tracking-widest">{t('hero.stats.sourcing')}</p>
            </div>
            <div className="w-12 h-px bg-slate-200"></div>
            <div className="space-y-2">
              <h3 className="text-5xl font-bold text-slate-900">24/7</h3>
              <p className="text-md text-slate-500 uppercase tracking-widest">{t('hero.stats.support')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
