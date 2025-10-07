import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from "react-icons/fa";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    product: "",
    message: "",
  });
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState({ type: null, message: "" });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSending) return;
    setIsSending(true);

    const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;
    const toEmail = process.env.REACT_APP_EMAILJS_TO_EMAIL || "info@zencoir.in";

    if (!serviceId || !templateId || !publicKey) {
      alert(
        "Email service is not configured. Please set EmailJS env variables."
      );
      return;
    }

    setStatus({ type: null, message: "" });

    // Using detailed subject, no formatted date needed

    const subject = `New Quote Received - ${formData.name || "Unknown"} - ${
      formData.email || "no-email"
    } - ${formData.company || "no-company"} - ${
      formData.phone || "no-phone"
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
      // Ensure the email is sent to your inbox via the template's to_email
      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      setStatus({
        type: "success",
        message:
          "Thank you! Your message has been sent. We'll get back to you soon.",
      });
      setFormData({
        name: "",
        email: "",
        company: "",
        phone: "",
        product: "",
        message: "",
      });
    } catch (err) {
      console.error("Email send failed", err);
      setStatus({
        type: "error",
        message:
          "Sorry, something went wrong while sending your message. Please try again later.",
      });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <h2 className="section-title">Contact Us</h2>
        <p className="section-subtitle">
          Ready to start your coir benefit journey? Get in touch with us for
          personalized quotes and expert guidance.
        </p>

        <div className="contact-content">
          <div className="contact-info">
            <h3>Get In Touch</h3>
            <p>
              We're here to help you with all your coir export needs. Contact us
              today for a free consultation and quote.
            </p>

            <div className="contact-details">
              <div className="contact-item">
                <FaPhone className="contact-icon" />
                <div>
                  <h4>Phone</h4>
                  <p>+91 86258 56608</p>
                </div>
              </div>

              <div className="contact-item">
                <FaEnvelope className="contact-icon" />
                <div>
                  <h4>Email</h4>
                  <p>info@zencoir.in</p>
                </div>
              </div>

              <div className="contact-item">
                <FaMapMarkerAlt className="contact-icon" />
                <div>
                  <h4>Address</h4>
                  <p>Yashashree Society, Marutrao Gaikwadnagar, Aundh</p>
                  <p>Pune, Maharashtra 411067, India</p>
                </div>
              </div>

              <div className="contact-item">
                <FaClock className="contact-icon" />
                <div>
                  <h4>Business Hours (IST) </h4>
                  <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p>Saturday: 9:00 AM - 2:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-form-container">
            <form className="contact-form" onSubmit={handleSubmit}>
              <h3>Send us a Message</h3>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="company">Company Name</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="product">Product of Interest</label>
                <select
                  id="product"
                  name="product"
                  value={formData.product}
                  onChange={handleChange}
                >
                  <option value="">Select a product</option>
                  <option value="coir-pith">Coir Pith</option>
                  <option value="vermicompost">Vermicompost</option>
                  <option value="custom">Custom Products</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your requirements, quantity needed, and any specific specifications..."
                  required
                ></textarea>
              </div>

              <button type="submit" className="btn" disabled={isSending}>
                {isSending ? "Sending..." : "Send Message"}
              </button>

              {status.type && (
                <div
                  className={`form-status ${
                    status.type === "success"
                      ? "form-status--success"
                      : "form-status--error"
                  }`}
                  role="status"
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
