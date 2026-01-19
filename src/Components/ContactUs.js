import React from "react";

function ContactUs() {
  return (
    <div id="contact" className="page-content">
      <h2>Contact Us</h2>
      <p>Have questions? Reach out!</p>
      <form className="contact-form">
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" required></textarea>
        <button type="submit">
          <i className="fas fa-paper-plane"></i> Submit
        </button>
      </form>
      <p>Email: info@flavorquest.com | Phone: (123) 456-7890</p>
    </div>
  );
}

export default ContactUs;
