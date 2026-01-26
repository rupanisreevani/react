import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <h2 className="contact-title">
        Contact <span>Me</span>
      </h2>

      <div className="contact-box">
        <form>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" required></textarea>

          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
