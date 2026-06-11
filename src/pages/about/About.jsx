import React from "react";
import "./About.scss";

const About = () => {
  return (
    <div className="about">
      <div className="about-hero">
        <h1>About Pendora Repairs</h1>
        <p>
          Your trusted partner for reliable appliance repair and maintenance
          services.
        </p>
      </div>

      <div className="about-content">
        <div className="about-section">
          <h2>Who We Are</h2>
          <p>
            Pendora Repairs is a professional home appliance repair and
            maintenance company dedicated to providing fast, reliable, and
            affordable services. Our skilled technicians are trained to handle
            a wide range of household appliances, ensuring your home runs
            smoothly and efficiently.
          </p>
        </div>

        <div className="about-section">
          <h2>Our Mission</h2>
          <p>
            Our mission is to deliver high-quality repair and maintenance
            services that exceed customer expectations. We strive to build
            long-term relationships through honesty, professionalism, and
            exceptional customer service.
          </p>
        </div>

        <div className="about-section">
          <h2>What We Repair</h2>
          <ul>
            <li>Refrigerators</li>
            <li>Washing Machines</li>
            <li>Microwave Ovens</li>
            <li>Air Conditioners</li>
            <li>Water Heaters</li>
            <li>Dishwashers</li>
            <li>Kitchen Appliances</li>
          </ul>
        </div>

        <div className="about-section">
          <h2>Why Choose Us?</h2>
          <div className="features">
            <div className="feature-card">
              <h3>✓ Trained Technicians</h3>
              <p>
                Our technicians are experienced, trained, and verified for
                quality service.
              </p>
            </div>

            <div className="feature-card">
              <h3>✓ On-Time Service</h3>
              <p>
                We respect your time and always aim to provide prompt service.
              </p>
            </div>

            <div className="feature-card">
              <h3>✓ Service Warranty</h3>
              <p>
                We stand behind our work with service and spare-parts warranty.
              </p>
            </div>

            <div className="feature-card">
              <h3>✓ Customer Satisfaction</h3>
              <p>
                Customer trust and satisfaction remain our highest priorities.
              </p>
            </div>
          </div>
        </div>

        <div className="about-section contact-info">
          <h2>Get In Touch</h2>
          <p>
            Need appliance repair or maintenance services? Our team is ready to
            help.
          </p>
          <p><strong>Phone:</strong> +977 9867241332</p>
          <p><strong>Email:</strong> info@pendorarepairs.com</p>
        </div>
      </div>
    </div>
  );
};

export default About;