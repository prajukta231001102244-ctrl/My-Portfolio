import React from "react";

function About() {
  return (
    <section className="section about-section" id="about">
      <div className="section-container">
        <div className="section-heading">
          <p>GET TO KNOW ME</p>
          <h2>About <span>Me</span></h2>
        </div>

        <div className="about-grid">
          <div className="about-card">
            <div className="card-icon">01</div>
            <h3>Prajukta Das</h3>
            <p>
              I am a passionate web developer interested in building
              beautiful and practical digital experiences. I enjoy turning
              ideas into functional applications.
            </p>
          </div>

          <div className="about-card">
            <div className="card-icon">02</div>
            <h3>What I Do</h3>
            <p>
              I work with modern frontend and backend technologies including
               JavaScript, Node.js and Express to develop full-stack
              web applications little bit.
            </p>
          </div>

          <div className="about-card">
            <div className="card-icon">03</div>
            <h3>My Goal</h3>
            <p>
              My goal is to continuously improve my technical skills while
              creating accessible, responsive and professional websites.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;