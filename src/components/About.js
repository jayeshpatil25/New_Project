import React, { useState, useEffect } from "react";
import { useTranslation } from 'react-i18next';

import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import img4 from "../assets/img4.jpg";
import img5 from "../assets/img5.jpg";
import img6 from "../assets/img6.jpg";

const images = [img2, img3, img4, img5, img6];

const About = () => {
  const { t } = useTranslation();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section
      id="about"
      // CHANGED: darker amber diagonal lines to create a visible "woven" texture
      className="py-24 bg-amber-100 bg-[repeating-linear-gradient(45deg,rgba(217,119,6,0.1)_0px,rgba(217,119,6,0.1)_1px,transparent_1px,transparent_10px),repeating-linear-gradient(-45deg,rgba(217,119,6,0.1)_0px,rgba(217,119,6,0.1)_1px,transparent_1px,transparent_10px)] scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[45%_55%] gap-16 items-center">
          {/* LEFT — SOOTHING CONTENT */}
          <div className="space-y-10">
            <div className="space-y-4">
                <h2 className="text-5xl font-light text-slate-900 leading-tight">
                  {t('about.title_line1')} <br />
                  {t('about.title_line2')}
                </h2>

                <div className="h-1 w-14 bg-amber-700 rounded-full"></div>
              </div>

              <p className="text-xl text-slate-600 leading-relaxed max-w-xl">
                {t('about.lead')}
              </p>

              <p className="text-lg text-slate-500 leading-relaxed max-w-xl">
                {t('about.follow')}
              </p>

              <div className="flex items-center gap-8 pt-6">
                <div>
                  <div className="text-3xl font-semibold text-amber-800">
                    100%
                  </div>
                  <div className="text-xs uppercase tracking-widest text-slate-400">
                    {t('about.metrics.materials')}
                  </div>
                </div>

                <div className="h-10 w-px bg-slate-300"></div>

                <div>
                  <div className="text-3xl font-semibold text-amber-800">
                    Global
                  </div>
                  <div className="text-xs uppercase tracking-widest text-slate-400">
                    {t('about.metrics.reach')}
                  </div>
                </div>
              </div>
          </div>

          {/* RIGHT — CAROUSEL */}
          <div className="relative w-full h-[420px] rounded-2xl overflow-hidden shadow-lg lg:ml-10">
            {images.map((img) => (
              <img
                key={img}
                src={img}
                alt="Zencoir coir products"
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                  images[current] === img ? "opacity-100" : "opacity-0"
                }`}
              />
            ))}

            <div className="absolute inset-0 bg-black/10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;