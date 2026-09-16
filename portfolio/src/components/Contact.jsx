import React from "react";

function Contact() {
  return (
    <section className="section contact-section" id="contact">
      <div className="section-container">
        <div className="section-heading">
          <p>LET'S CONNECT</p>
          <h2>Contact <span>Me</span></h2>
        </div>

        <div className="contact-wrapper">
          <div className="contact-info">
            <h3>Let's build something together.</h3>

            <p>
              Have a project idea, internship opportunity or simply want to
              connect? Feel free to reach out.
            </p>

            <div className="contact-details">
              <div className="contact-item">
                <div className="contact-icon">✉</div>
                <div>
                  <small>Email</small>
                  <p>prajuktadas@example.com</p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">☎</div>
                <div>
                  <small>Phone</small>
                  <p>+91 98765 43210</p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">⌖</div>
                <div>
                  <small>Location</small>
                  <p>Kolkata, India</p>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-card">
            <h3>Get In Touch</h3>

            <a
              href="mailto:yourname@example.com"
              className="btn primary-btn contact-btn"
            >
              Send Me an Email
            </a>

            <div className="social-links">
              <a href="#" aria-label="GitHub">GH</a>
              <a href="#" aria-label="LinkedIn">in</a>
              <a href="#" aria-label="Twitter">X</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;