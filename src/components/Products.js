import React, { useState, useEffect } from 'react';
import { 
  FaAward, FaGlobe, FaHandshake, FaLeaf, FaPhone, FaEnvelope, 
  FaMapMarkerAlt, FaBars, FaTimes, FaShippingFast, FaSeedling, 
  FaCertificate, FaBoxes, FaHeadset, FaClock, FaChevronRight, FaArrowRight 
} from 'react-icons/fa';


// --- Products Component ---
const Products = () => {
  const products = [
    {
      name: 'Coir Pith',
      id: '01',
      description: 'Premium coir pith/peat for horticulture, gardening, and agricultural applications.',
      features: ['Excellent Water Retention', 'Natural pH Balance', 'Disease Resistant', 'Sustainable'],
      image: "/images/coir-pith.jpg", 
      icon: FaLeaf
    },
    {
      name: 'Vermicompost',
      id: '02',
      description: 'Nutrient-rich organic vermicompost ideal for soil conditioning and plant growth.',
      features: ['Improves Soil Structure', 'Boosts Plant Growth', '100% Organic', 'Sustainable'],
      image: "/images/vermicompost.jpg",
      icon: FaSeedling
    }
  ];

  return (
    <section id="products" className="bg-white pt-20 pb-15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-5">
        <div className="flex flex-col md:flex-row justify-between items-end border-b border-slate-200 pb-5">
          <div>
            <h2 className="text-4xl font-bold text-slate-900 mb-2">Our Products</h2>
            <p className="text-slate-600 max-w-md">Processed to meet international standards.</p>
          </div>
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="mt-6 md:mt-0 text-emerald-600 hover:text-emerald-800 flex items-center space-x-2 transition-colors font-medium"
          >
            <span>Request Custom Order</span>
            <FaChevronRight className="text-xs" />
          </button>
        </div>
      </div>

      <div>
        {products.map((product, idx) => (
          <div key={idx} className="group relative bg-white border-b border-slate-200 last:border-b-0 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className={`space-y-6 ${idx % 2 === 1 ? 'md:order-2' : ''}`}>
                  <div className="flex items-center space-x-4">
                    <span className="text-6xl font-bold text-slate-200 select-none group-hover:text-emerald-100 transition-colors">
                      {product.id}
                    </span>
                    <h3 className="text-3xl font-bold text-slate-900">{product.name}</h3>
                  </div>
                  
                  <p className="text-lg text-slate-600 leading-relaxed border-l-2 border-emerald-500 pl-4">
                    {product.description}
                  </p>
                  
                  <ul className="grid grid-cols-2 gap-4 pt-4">
                    {product.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-sm text-slate-600">
                        <span className="w-1.5 h-1.5 bg-emerald-500 mr-3"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className={`flex justify-center ${idx % 2 === 1 ? 'md:order-1' : ''}`}>
                  <div className="relative w-full max-w-md aspect-square">
                     
                     <div className="absolute inset-0 bg-emerald-500 blur-[60px] opacity-10 group-hover:opacity-20 transition-opacity"></div>
                    
                     <img 
                       src={product.image} 
                       alt={product.name}
                       className="relative w-full h-full object-cover rounded-2xl shadow-xl border border-slate-200 group-hover:border-emerald-500/50 transition-all duration-500 grayscale group-hover:grayscale-0"
                     />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};


export default Products;