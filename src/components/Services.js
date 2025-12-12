import React, { useState, useEffect } from 'react';
import { 
  FaAward, FaGlobe, FaHandshake, FaLeaf, FaPhone, FaEnvelope, 
  FaMapMarkerAlt, FaBars, FaTimes, FaShippingFast, FaSeedling, 
  FaCertificate, FaBoxes, FaHeadset, FaClock, FaChevronRight, FaArrowRight 
} from 'react-icons/fa';

// --- Services Component ---
const Services = () => {
  const services = [
    {
      title: 'Global Export Solutions',
      details: 'International Shipping, Customs Clearance'
    },
    {
      title: 'Quality Assurance',
      details: 'Quality Testing, Certification Support'
    },
    {
      title: 'Custom Packaging',
      details: 'Custom Design, Branding Options'
    },
    {
      title: 'Fast & Reliable Delivery',
      details: 'Real-time Tracking, Delivery Guarantee'
    },
    {
      title: 'Business Partnership',
      details: 'Dedicated Support, Flexible Terms'
    },
    {
      title: '24/7 Customer Support',
      details: 'Multi-language Support, Expert Guidance'
    }
  ];

  return (
    <section id="services" className="py-24 bg-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-16">
          <div className="lg:col-span-4 space-y-8">
            <h2 className="text-4xl font-bold text-slate-900">Our Services</h2>
            <p className="text-slate-600 leading-relaxed">
              Comprehensive export solutions designed to make your international trade seamless, efficient, and profitable.
            </p>
            <div className="hidden lg:block p-8 border border-slate-200 bg-white shadow-sm">
              <h4 className="text-slate-900 font-bold mb-4">Why Choose Us?</h4>
              <ul className="space-y-4">
                <li className="flex justify-between text-slate-600 border-b border-slate-100 pb-2">
                  <span>Commitment</span>
                  <span className="text-emerald-600 font-semibold">100%</span>
                </li>
                <li className="flex justify-between text-slate-600 border-b border-slate-100 pb-2">
                  <span>Countries</span>
                  <span className="text-emerald-600 font-semibold">50+</span>
                </li>
                <li className="flex justify-between text-slate-600">
                  <span>Support</span>
                  <span className="text-emerald-600 font-semibold">24/7</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="lg:col-span-8">
            <div className="grid sm:grid-cols-2 gap-x-12 gap-y-0">
              {services.map((service, idx) => (
                <div key={idx} className="group py-8 border-b border-slate-200 hover:border-emerald-500/50 transition-colors">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-lg font-bold text-slate-800 group-hover:text-emerald-600 transition-colors">{service.title}</h3>
                    <FaCertificate className="text-slate-400 group-hover:text-emerald-500 transition-colors text-sm" />
                  </div>
                  <p className="text-sm text-slate-500 group-hover:text-slate-600 transition-colors">
                    {service.details}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


export default Services;