import React from "react";

function Education() {
  return (
    <section className="section education-section" id="education">
      <div className="section-container">
        <div className="section-heading">
          <p>MY JOURNEY</p>
          <h2>Educa<span>tion</span></h2>
        </div>

        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-dot"></div>

            <div className="timeline-content">
              <span className="timeline-year">2023 - 2027</span>
              <h3>Bachelor's Degree</h3>
              <h4>Computer Science / Information Technology</h4>
              <p>
                Developed a strong foundation in programming, databases,
                algorithms, web development and software engineering.
              </p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-dot"></div>

            <div className="timeline-content">
              <span className="timeline-year">2021 - 2023</span>
              <h3>Higher Secondary Education</h3>
              <h4> Computer Science / Application</h4>
              <p>
                Built an interest in computer science and programming while
                developing analytical and problem-solving skills.
              </p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-dot"></div>

            <div className="timeline-content">
              <span className="timeline-year">2011 - 2021</span>
              <h3>Secondary Education</h3>
              <h4>School Education</h4>
              <p>
                Completed foundational education with an emphasis on
                mathematics and technology and arts background as well.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;