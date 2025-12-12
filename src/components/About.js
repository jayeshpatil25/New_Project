import React, { useState, useEffect } from 'react';
import { FaAward, FaGlobe, FaHandshake, FaLeaf, FaPhone, FaEnvelope, FaMapMarkerAlt, FaBars, FaTimes, FaShippingFast, FaSeedling, FaCertificate, FaBoxes, FaHeadset, FaClock, FaChevronRight } from 'react-icons/fa';

// --- About Component ---
const About = () => {
  return (
    <section id="about" className="py-24 bg-slate-100 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20">
          
          <div className="space-y-12">
            <div>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">About Zencoir</h2>
              <div className="h-1 w-20 bg-emerald-500 mb-8"></div>
              <p className="text-xl text-slate-600 leading-relaxed font-light">
                Your trusted partner in premium coir exports with fresh experience and commitment to quality and sustainability.
              </p>
            </div>

            <div className="space-y-6 text-slate-600">
              <p>
                Zencoir has the commitment for coir product exports for the coming years. We specialize in sourcing, processing, and exporting the finest quality coir products to markets worldwide.
              </p>
              <p>
                Our commitment to sustainable practices and eco-friendly solutions has made us a preferred choice for businesses looking for natural, biodegradable alternatives to synthetic materials.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8 pt-8 border-t border-slate-200">
              {[
                { label: 'Quality Committed', value: '100%' },
                { label: 'Client Satisfaction', value: '100+' }
              ].map((stat, idx) => (
                <div key={idx}>
                  <div className="text-3xl font-bold text-emerald-600 mb-1">{stat.value}</div>
                  <div className="text-xs uppercase tracking-widest text-slate-500">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col justify-center space-y-0">
            {[
              { title: 'Quality Assurance', desc: 'Rigorous quality control processes ensure every product meets international standards.', num: '01' },
              { title: 'Sustainable Sourcing', desc: 'We work directly with local farmers to ensure ethical and sustainable coir production.', num: '02' },
              { title: 'Custom Solutions', desc: 'Tailored products and packaging solutions to meet your specific requirements.', num: '03' }
            ].map((feature, idx) => (
              <div key={idx} className="flex group border-b border-slate-200 py-10 last:border-0 hover:bg-white hover:shadow-sm transition-all px-4 -mx-4">
                <div className="mr-8 text-sm font-mono text-emerald-600/50 pt-1 group-hover:text-emerald-600 transition-colors">
                  {feature.num}
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-emerald-600 transition-colors">{feature.title}</h4>
                  <p className="text-slate-600 text-sm leading-relaxed max-w-md">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};


export default About;
