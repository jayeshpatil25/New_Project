import React from 'react';
import { GiPlantRoots } from 'react-icons/gi';
import bg from '../assets/bg.jpg'; // use your image path

// --- Services Component ---
const Services = () => {
  const services = [
    { title: 'Global Export Solutions', details: 'International Shipping, Customs Clearance' },
    { title: 'Quality Assurance', details: 'Quality Testing, Certification Support' },
    { title: 'Custom Packaging', details: 'Custom Design, Branding Options' },
    { title: 'Fast & Reliable Delivery', details: 'Real-time Tracking, Delivery Guarantee' },
    { title: 'Business Partnership', details: 'Dedicated Support, Flexible Terms' },
    { title: '24/7 Customer Support', details: 'Multi-language Support, Expert Guidance' }
  ];

  return (
    <section id="services" className="py-20 bg-amber-100 overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Centered Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-5xl font-bold text-slate-900 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-slate-600 leading-relaxed">
            Comprehensive export solutions designed to make your international trade seamless, efficient, and profitable.
          </p>
        </div>

        {/* Services List */}
        <div className="grid sm:grid-cols-2 gap-x-12">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="py-8 border-b border-slate-200"
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-2xl font-bold text-slate-800">
                  {service.title}
                </h3>
                <GiPlantRoots className="text-amber-700 text-3xl" />
              </div>
              <p className="text-lg text-slate-500">
                {service.details}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;
