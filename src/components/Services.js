import React from 'react';
import { GiPlantRoots } from 'react-icons/gi';
import { useTranslation } from 'react-i18next';
import bg from '../assets/bg.jpg'; 

// --- Services Component ---
const Services = () => {
  const { t } = useTranslation();
  const services = t('services.list', { returnObjects: true });

  return (
    <section 
      id="services" 
      // CHANGED: "Seigaiha / Ocean Wave" Texture
      // Created using overlapping radial gradients. 
      // Represents: Crossing oceans (Export) and Natural Scales (Organic).
      className="py-20 bg-amber-100 bg-[repeating-linear-gradient(45deg,rgba(217,119,6,0.1)_0px,rgba(217,119,6,0.1)_1px,transparent_1px,transparent_10px),repeating-linear-gradient(-45deg,rgba(217,119,6,0.1)_0px,rgba(217,119,6,0.1)_1px,transparent_1px,transparent_10px)] overflow-x-hidden scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Centered Heading */}
        <div className="text-center max-w-2xl mx-auto mb-12 relative z-10">
          <div className="absolute inset-0 bg-white/40 blur-3xl -z-10 rounded-full"></div>
          <h2 className="text-5xl font-bold text-slate-900 mb-4">
            {t('services.heading')}
          </h2>
          <p className="text-xl text-slate-600 leading-relaxed">
            {t('services.sub')}
          </p>
        </div>

        {/* Services List */}
        <div className="grid sm:grid-cols-2 gap-x-12 gap-y-4">
          {services.map((service, idx) => (
            <div
              key={idx}
              // Card style: Glassmorphism effect to float above the waves
              className="py-8 border border-white/50 bg-white/60 backdrop-blur-sm rounded-2xl px-8 shadow-sm hover:shadow-xl hover:bg-white transition-all duration-300 group"
            >
              <div className="flex items-start gap-4">
                {/* Icon */}
                <div className="p-3 bg-gradient-to-br from-amber-100 to-amber-200 rounded-xl group-hover:scale-110 transition-transform duration-300">
                    <GiPlantRoots className="text-amber-800 text-3xl flex-shrink-0" />
                </div>

                {/* Text Content */}
                <div>
                  <h3 className="text-2xl font-bold text-slate-800 mb-2 group-hover:text-amber-700 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-lg text-slate-500 group-hover:text-slate-600">
                    {service.details}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;