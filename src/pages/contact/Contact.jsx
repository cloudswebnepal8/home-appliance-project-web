import React from "react";
import "./Contact.scss";

const Contact = () => {
  return (
    <section className="contact">
      <div className="contact-container">
        <h2>Contact Us</h2>
        <p>Feel free to send us a message. We'd love to hear from you.</p>

        <form>
          <div className="form-group">
            <input type="text" placeholder="Your Name" />
          </div>

          <div className="form-group">
            <input type="email" placeholder="Your Email" />
          </div>

          <div className="form-group">
            <input type="text" placeholder="Subject" />
          </div>

          <div className="form-group">
            <textarea
              rows="5"
              placeholder="Write your message here..."
            ></textarea>
          </div>

          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;