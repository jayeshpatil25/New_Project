import React from 'react';
import {
  FaLeaf,
  FaSeedling,
  FaChevronRight
} from 'react-icons/fa';

import coir from '../assets/coir-pith.jpg';
import vermicompost from '../assets/vermicompost.jpg';

// --- Products Component ---
const Products = () => {
  const products = [
    {
      name: 'Coir Pith',
      id: '01',
      description: 'Premium coir pith/peat for horticulture, gardening, and agricultural applications.',
      features: ['Excellent Water Retention', 'Natural pH Balance', 'Disease Resistant', 'Sustainable'],
      image: coir,
      icon: FaLeaf
    },
    {
      name: 'Vermicompost',
      id: '02',
      description: 'Nutrient-rich organic vermicompost ideal for soil conditioning and plant growth.',
      features: ['Improves Soil Structure', 'Boosts Plant Growth', '100% Organic', 'Sustainable'],
      image: vermicompost,
      icon: FaSeedling
    }
  ];

  return (
    <section id="products" className="bg-white pt-20 pb-15 overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-5">
        <div className="flex flex-col md:flex-row justify-between items-end border-b border-slate-200 pb-5">
          <div>
            <h2 className="text-5xl font-bold text-slate-900 mb-3">
              Our Products
            </h2>
            <p className="text-lg text-slate-600 max-w-md">
              Processed to meet international standards.
            </p>
          </div>

          <button
            onClick={() =>
              document
                .getElementById('contact')
                ?.scrollIntoView({ behavior: 'smooth' })
            }
            className="mt-6 md:mt-0 text-amber-800 flex items-center space-x-2 font-medium"
          >
            <span className="text-lg">Request Custom Order</span>
            <FaChevronRight className="text-xs" />
          </button>
        </div>
      </div>

      <div>
        {products.map((product, idx) => (
          <div
            key={idx}
            className="relative bg-white border-b border-slate-200 last:border-b-0 overflow-hidden"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                
                <div className={`space-y-6 ${idx % 2 === 1 ? 'md:order-2' : ''}`}>
                  <div className="flex items-center space-x-4">
                    <span className="text-5xl font-bold text-amber-700 select-none">
                      {product.id}
                    </span>
                    <h3 className="text-3xl sm:text-4xl font-bold text-slate-900">
                      {product.name}
                    </h3>
                  </div>

                  <p className="text-2xl text-slate-600 leading-relaxed border-l-2 border-amber-700 pl-4">
                    {product.description}
                  </p>

                  <ul className="grid grid-cols-2 gap-4 pt-4">
                    {product.features.map((feature, i) => (
                      <li
                        key={i}
                        className="flex items-center text-xl text-slate-600"
                      >
                        <span className="w-1.5 h-1.5 bg-amber-700 mr-3"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className={`flex justify-center ${idx % 2 === 1 ? 'md:order-1' : ''}`}>
                  <div className="relative w-full max-w-full md:max-w-md aspect-square overflow-hidden">
                    
                    <div className="absolute inset-0 bg-amber-700 blur-[60px] opacity-10"></div>

                    <img
                      src={product.image}
                      alt={product.name}
                      className="relative w-full h-full object-cover rounded-2xl shadow-xl border border-slate-200"
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
