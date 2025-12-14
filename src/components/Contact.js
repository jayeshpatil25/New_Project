import emailjs from "@emailjs/browser";
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  FaAward, FaGlobe, FaHandshake, FaLeaf, FaPhone, FaEnvelope,
  FaMapMarkerAlt, FaBars, FaTimes, FaShippingFast, FaSeedling,
  FaCertificate, FaBoxes, FaHeadset, FaClock, FaChevronRight, FaArrowRight
} from 'react-icons/fa';

// --- Contact Component ---
const Contact = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '', email: '', company: '', phone: '', product: '', message: ''
  });
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState({ type: null, message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSending) return;

    setIsSending(true);
    setStatus({ type: null, message: "" });

    const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;
    const toEmail =
      process.env.REACT_APP_EMAILJS_TO_EMAIL || "info@zencoir.in";

    if (!serviceId || !templateId || !publicKey) {
      setStatus({
        type: "error",
        message: t('contact.status.error_config'),
      });
      setIsSending(false);
      return;
    }

    const subject = `New Quote Received - ${formData.name || "Unknown"} - ${formData.email || "no-email"
      } - ${formData.company || "no-company"} - ${formData.phone || "no-phone"
      } - ${formData.product || "no-product"}`;

    const templateParams = {
      subject,
      to_email: toEmail,
      name: formData.name,
      email: formData.email,
      company: formData.company,
      phone: formData.phone,
      product: formData.product,
      message: formData.message,
    };

    try {
      await emailjs.send(
        serviceId,
        templateId,
        templateParams,
        publicKey
      );

      setStatus({
        type: "success",
        message: t('contact.status.success'),
      });

      setFormData({
        name: "",
        email: "",
        company: "",
        phone: "",
        product: "",
        message: "",
      });
    } catch (error) {
      console.error("Email send failed:", error);
      setStatus({
        type: "error",
        message: t('contact.status.error_send'),
      });
    } finally {
      setIsSending(false);
    }
  };


  const inputStyles =
    "w-full bg-transparent border-b border-slate-300 py-3 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-amber-700 transition-colors rounded-none";

  return (
    <section id="contact" className="py-24 bg-amber-50 relative overflow-hidden scroll-mt-24 bg-amber-50/30 bg-[radial-gradient(rgba(217,119,6,0.1)_3px,transparent_3px),radial-gradient(rgba(217,119,6,0.1)_3px,transparent_3px)] bg-[size:30px_30px] bg-[position:0_0,15px_15px]">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent opacity-50"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Centered Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
            {t('contact.title')}
          </h2>
          <p className="text-xl text-slate-600 font-light leading-relaxed max-w-2xl mx-auto">
            {t('contact.subtitle')}
          </p>
        </div>

        {/* Form Container */}
        <div className="bg-white rounded-3xl shadow-xl shadow-slate-200/50 overflow-hidden border border-slate-100">
          <div className="p-8 lg:p-12">
            <form onSubmit={handleSubmit} className="space-y-8">

              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-md font-bold uppercase tracking-wider text-slate-500 ml-1">
                    {t('contact.labels.name')}
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className={inputStyles}
                    placeholder={t('contact.placeholders.name')}
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-md font-bold uppercase tracking-wider text-slate-500 ml-1">
                    {t('contact.labels.email')}
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={inputStyles}
                    placeholder={t('contact.placeholders.email')}
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-md font-bold uppercase tracking-wider text-slate-500 ml-1">
                    {t('contact.labels.company')}
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className={inputStyles}
                    placeholder={t('contact.placeholders.company')}
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-md font-bold uppercase tracking-wider text-slate-500 ml-1">
                    {t('contact.labels.phone')}
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={inputStyles}
                    placeholder={t('contact.placeholders.phone')}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-md font-bold uppercase tracking-wider text-slate-500 ml-1">
                  {t('contact.labels.product')}
                </label>
                <div className="relative">
                  <select
                    name="product"
                    value={formData.product}
                    onChange={handleChange}
                    className={`${inputStyles} appearance-none cursor-pointer`}
                  >
                    <option value="" className="text-slate-400">{t('contact.placeholders.select')}</option>
                    <option value="coir-pith" className="text-slate-900">{t('contact.placeholders.coir-pith')}</option>
                    <option value="vermicompost" className="text-slate-900">{t('contact.placeholders.vermicompost')}</option>
                    <option value="custom" className="text-slate-900">{t('contact.placeholders.custom')}</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-5 text-slate-500">
                    <svg
                      className="fill-current h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-md font-bold uppercase tracking-wider text-slate-500 ml-1">
                  {t('contact.labels.message')}
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  className={`${inputStyles} resize-none`}
                  placeholder={t('contact.placeholders.message')}
                ></textarea>
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  disabled={isSending}
                  className="w-full py-5 bg-amber-800 hover:bg-amber-900 text-white font-bold tracking-widest uppercase text-sm rounded-xl disabled:opacity-50 shadow-lg shadow-amber-200 transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-amber-300"
                >
                  {isSending ? t('contact.buttons.sending') : t('contact.buttons.send')}
                </button>

              </div>

              {status.type && (
                <div
                  className={`p-4 rounded-xl text-center text-sm ${status.type === 'success'
                    ? 'bg-amber-50 text-amber-800 border border-amber-100'
                    : 'bg-red-50 text-red-700 border border-red-100'
                    }`}
                >
                  {status.message}
                </div>
              )}

            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
