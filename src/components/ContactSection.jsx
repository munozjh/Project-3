import React from "react";
import { Send, CheckCircle2 } from "lucide-react";

const ContactSection = ({ formData, formSubmitted, onFieldChange, onSubmit }) => {
  return (
    <section id="contact" className="section">
      <h2>Contact Me</h2>
      <p className="contact-intro">
        Interested in discussing IT infrastructure, cybersecurity operations, or software development opportunities? Send me a message below.
      </p>

      <form className="contact-form" onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            id="name"
            type="text"
            required
            placeholder="Your name"
            value={formData.name}
            onChange={(e) => onFieldChange("name", e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            required
            placeholder="your.email@example.com"
            value={formData.email}
            onChange={(e) => onFieldChange("email", e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            rows="4"
            required
            placeholder="Write your message here..."
            value={formData.message}
            onChange={(e) => onFieldChange("message", e.target.value)}
          />
        </div>
        <button type="submit" className="submit-btn">
          <Send size={16} /> Send Message
        </button>

        {formSubmitted && (
          <div className="form-success">
            <CheckCircle2 size={18} /> Thank you! Your message has been validated and sent.
          </div>
        )}
      </form>
    </section>
  );
};

export default ContactSection;