import React from "react";
import { FaSeedling } from "react-icons/fa";
import "./Products.css";

const Products = () => {
  const products = [
    {
      id: 1,
      name: "Coir Pith",
      description:
        "Premium coir pith/peat for horticulture, gardening, and agricultural applications.",
      icon: FaSeedling,
      image: "/images/coir-pith.jpg", // replace with 800x600 image in public/images
      features: [
        "Excellent Water Retention",
        "Natural pH Balance",
        "Disease Resistant",
        "Sustainable",
      ],
    },
    {
      id: 2,
      name: "Vermicompost",
      description:
        "Nutrient-rich organic vermicompost ideal for soil conditioning and plant growth.",
      icon: FaSeedling,
      image: "/images/vermicompost.jpg", // replace with 800x600 image in public/images
      features: [
        "Improves Soil Structure",
        "Boosts Plant Growth",
        "100% Organic",
        "Sustainable",
      ],
    },
  ];

  return (
    <section id="products" className="section products-section">
      <div className="container">
        <h2 className="section-title">Our Products</h2>
        <p className="section-subtitle">
          Premium quality coir products sourced from the finest coconut
          plantations and processed to meet international standards.
        </p>

        <div className="products-grid">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              {product.image ? (
                <div className="product-image-wrap">
                  <img
                    className="product-image"
                    src={product.image}
                    alt={product.name}
                    width="400"
                    height="280"
                    loading="lazy"
                  />
                </div>
              ) : (
                <div className="product-icon">
                  <product.icon />
                </div>
              )}
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <div className="product-features">
                {product.features.map((feature, index) => (
                  <span key={index} className="feature-tag">
                    {feature}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="products-cta">
          <h3>Custom Products Available</h3>
          <p>
            We also offer custom coir products tailored to your specific
            requirements. Contact us to discuss your needs and get a
            personalized quote.
          </p>
          <a href="#contact" className="btn">
            Request Custom Quote
          </a>
        </div>
      </div>
    </section>
  );
};

export default Products;
