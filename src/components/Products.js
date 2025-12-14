import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  FaLeaf,
  FaSeedling,
  FaChevronRight
} from 'react-icons/fa';

import coir from '../assets/coir-pith.jpg';
import vermicompost from '../assets/vermicompost.jpg';

// --- Products Component ---
const Products = () => {
  const { t } = useTranslation();
  const products = [
    {
      key: 'coir-pith',
      name: t('products.items.coir-pith.name'),
      id: '01',
      description: t('products.items.coir-pith.description'),
      features: t('products.items.coir-pith.features', { returnObjects: true }),
      image: coir,
      icon: FaLeaf
    },
    {
      key: 'vermicompost',
      name: t('products.items.vermicompost.name'),
      id: '02',
      description: t('products.items.vermicompost.description'),
      features: t('products.items.vermicompost.features', { returnObjects: true }),
      image: vermicompost,
      icon: FaSeedling
    }
  ];

  return (
    <section 
      id="products" 
      // CHANGED: Added "Bubbly/Porous" Texture using offset radial gradients
      className="pt-20 pb-15 overflow-x-hidden scroll-mt-24 bg-amber-50/30 bg-[radial-gradient(rgba(217,119,6,0.1)_3px,transparent_3px),radial-gradient(rgba(217,119,6,0.1)_3px,transparent_3px)] bg-[size:30px_30px] bg-[position:0_0,15px_15px]"
    >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-5">
        <div className="flex flex-col md:flex-row justify-between items-end border-b border-amber-900/10 pb-5">
          <div>
            <h2 className="text-5xl font-bold text-slate-900 mb-3">
              {t('products.heading')}
            </h2>
            <p className="text-lg text-slate-600 max-w-md">
              {t('products.sub')}
            </p>
          </div>

          <button
            onClick={() =>
              document
                .getElementById('contact')
                ?.scrollIntoView({ behavior: 'smooth' })
            }
            className="mt-6 md:mt-0 text-amber-800 flex items-center space-x-2 font-medium group"
          >
            <span className="text-lg group-hover:underline">{t('products.request_button')}</span>
            <FaChevronRight className="text-xs group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>

      <div>
        {products.map((product, idx) => (
          <div
            key={idx}
            // Transparent background for individual items so the texture shows through
            className="relative border-b border-amber-900/10 last:border-b-0 overflow-hidden"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                
                <div className={`space-y-6 ${idx % 2 === 1 ? 'md:order-2' : ''}`}>
                  <div className="flex items-center space-x-4">
                    <span className="text-5xl font-bold text-amber-700/20 select-none">
                      {product.id}
                    </span>
                    <h3 className="text-3xl sm:text-4xl font-bold text-slate-900">
                      {product.name}
                    </h3>
                  </div>

                  <p className="text-2xl text-slate-600 leading-relaxed border-l-2 border-amber-700 pl-4 bg-white/60 backdrop-blur-sm py-2 rounded-r-lg">
                    {product.description}
                  </p>
                  
                  

                  <ul className="grid grid-cols-2 gap-4 pt-4">
                    {product.features.map((feature, i) => (
                      <li
                        key={i}
                        className="flex items-center text-xl text-slate-600"
                      >
                        <span className="w-2 h-2 rounded-full bg-amber-600 mr-3 shadow-sm"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className={`flex justify-center ${idx % 2 === 1 ? 'md:order-1' : ''}`}>
                  <div className="relative w-full max-w-full md:max-w-md aspect-square">
                    
                    {/* Decorative Blob behind image */}
                    <div className="absolute inset-0 bg-amber-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>

                    <img
                      src={product.image}
                      alt={product.name}
                      className="relative w-full h-full object-cover rounded-full shadow-2xl border-4 border-white"
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