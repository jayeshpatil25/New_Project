import { Link } from "react-scroll";
import React from 'react';
import {
  FaAward, FaGlobe, FaHandshake, FaLeaf, FaPhone, FaEnvelope,
  FaMapMarkerAlt, FaBars, FaTimes, FaShippingFast, FaSeedling,
  FaCertificate, FaBoxes, FaHeadset, FaClock, FaChevronRight, FaArrowRight
} from 'react-icons/fa';

const Footer = () => {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-slate-400 border-t border-slate-800 font-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">

          {/* Column 1: Brand Info */}
          <div className="space-y-4">
            <div>
              <h3 className="text-3xl font-bold text-white mb-1">ZENCOIR</h3>
              <p className="text-xs text-amber-700 uppercase tracking-[0.3em]">
                Export Excellence
              </p>
            </div>
            <p className="text-base leading-relaxed text-slate-500 max-w-xs">
              Delivering premium quality coir and vermicompost solutions globally. Sustainable products for a greener future.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-6 uppercase tracking-wider text-base">
              Quick Links
            </h4>
            <div className="grid grid-cols-2 gap-3">
              {['home', 'about', 'products', 'services', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="text-base text-left capitalize flex items-center text-slate-400 hover:text-white transition-all duration-300"
                >
                  <span className="w-2 mr-1 text-amber-700 transform transition-transform duration-300 group-hover:translate-x-1">
                    ›
                  </span>
                  {item}
                </button>

              ))}
            </div>
          </div>

          {/* Column 3: Contact Details */}
          <div>
            <h4 className="text-white font-semibold mb-6 uppercase tracking-wider text-base">
              Contact Us
            </h4>
            <ul className="space-y-4 text-base">
              <li className="flex items-start space-x-3">
                <FaMapMarkerAlt className="text-amber-700 mt-1 flex-shrink-0" />
                <span>
                  Yashashree Society, Marutrao Gaikwadnagar,<br />
                  Aundh Pune, Maharashtra 411067, India
                </span>
              </li>

              <li className="flex items-center space-x-3">
                <FaPhone className="text-amber-700 flex-shrink-0" />
                <span>
                  +91 86258 56608
                </span>
              </li>

              <li className="flex items-center space-x-3">
                <FaEnvelope className="text-amber-700 flex-shrink-0" />
                <span>
                  info@zencoir.in
                </span>
              </li>

              <li className="flex items-start space-x-3">
                <FaClock className="text-amber-700 mt-1 flex-shrink-0" />
                <span>
                  Mon - Fri: 9:00 AM - 6:00 PM<br />
                  Sat: 9:00 AM - 2:00 PM
                </span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-400">
          <p>&copy; 2025 Zencoir. All rights reserved.</p>
          <p className="mt-2 md:mt-0">
            Premium Coir Exporters • Pune, India
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
