import React from "react";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-container">
        <div className="hero-content">
          <p className="hero-intro">Hello, I'm</p>

          <h1>
            Your <span>Name</span>
          </h1>

          <h2>React & Node.js Developer</h2>

          <p className="hero-description">
            I create modern, responsive and user-friendly web applications
            with clean code and thoughtful design.
          </p>

          <div className="hero-buttons">
            <a href="#contact" className="btn primary-btn">
              Contact Me
            </a>

            <a href="#about" className="btn secondary-btn">
              Explore More
            </a>
          </div>
        </div>

        <div className="avatar-container">
          <div className="avatar-glow"></div>
          <img
            src="/avatar.svg"
            alt="Professional avatar"
            className="avatar"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;