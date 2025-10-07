import React from "react";
import { Link } from "react-scroll";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <h3>Zencoir</h3>
              <p>Export Excellence</p>
            </div>
            <p className="footer-description">
              Exporter of premium coir products with commitment to quality in
              serving global markets with sustainable, eco-friendly solutions.
            </p>
            {/* Social links removed as requested */}
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li>
                <Link to="home" smooth={true} duration={500}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="about" smooth={true} duration={500}>
                  About Us
                </Link>
              </li>
              <li>
                <Link to="products" smooth={true} duration={500}>
                  Products
                </Link>
              </li>
              <li>
                <Link to="services" smooth={true} duration={500}>
                  Services
                </Link>
              </li>
              <li>
                <Link to="contact" smooth={true} duration={500}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Our Products</h4>
            <ul className="footer-links">
              <li>Coir Pith</li>
              <li>Vermicompost</li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Contact Info</h4>
            <div className="contact-info">
              <div className="contact-item">
                <FaPhone />
                <span>+91 86258 56608</span>
              </div>
              <div className="contact-item">
                <FaEnvelope />
                <span>info@zencoir.in</span>
              </div>
              <div className="contact-item">
                <FaMapMarkerAlt />
                <span>Aundh, Pune, India</span>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p>&copy; 2025 Zencoir. All rights reserved.</p>
            <div className="footer-bottom-links">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
              <a href="#">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
