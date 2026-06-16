import React, { useState } from "react";
import "./Contact.scss";

const Contact = () => {
  // 1. Setup a state variable to hold form data as the user types
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  // Setup a state variable to track the status message (e.g., "Sending...")
  const [status, setStatus] = useState("");

  // 2. Update the state whenever a user types into an input box
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // 3. This runs when the user clicks the "Send Message" button
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevents the browser page from refreshing
    setStatus("Sending your message...");

    try {
      // Send the data over to our backend server running on port 5000
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData), // Converts our JavaScript object into JSON text
      });

      if (response.ok) {
        setStatus("Message sent successfully!");
        // Clear out the form inputs so they are blank again
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus("Something went wrong on the server. Please try again.");
      }
    } catch (error) {
      console.error(error);
      setStatus("Could not connect to the backend server. Is it running?");
    }
  };

  return (
    <section className="contact">
      <div className="contact-container">
        <h2>Contact Us</h2>
        <p>Feel free to send us a message. We'd love to hear from you.</p>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <textarea
              name="message"
              rows="5"
              placeholder="Write your message here..."
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <button type="submit">Send Message</button>
        </form>

        {/* Display the status text below the form if it exists */}
        {status && <p className="status-message" style={{marginTop: "15px", fontWeight: "bold"}}>{status}</p>}
      </div>
    </section>
  );
};
export default Contact;