import React from "react";

function Skills() {
  const skills = [
    { name: "HTML5", level: "60%" },
    { name: "CSS3", level: "55%" },
    { name: "JavaScript", level: "50%" },
    { name: "React.js", level: "50%" },
    { name: "Node.js", level: "30%" },
    { name: "Express.js", level: "30%" }
  ];

  return (
    <section className="section skills-section" id="skills">
      <div className="section-container">
        <div className="section-heading">
          <p>WHAT I WORK WITH</p>
          <h2>My <span>Skills</span></h2>
        </div>

        <div className="skills-grid">
          {skills.map((skill) => (
            <div className="skill-card" key={skill.name}>
              <div className="skill-header">
                <h3>{skill.name}</h3>
                <span>{skill.level}</span>
              </div>

              <div className="progress-bar">
                <div
                  className="progress"
                  style={{ width: skill.level }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        <div className="technology-list">
          <span>React</span>
          <span>Node.js</span>
          <span>Express</span>
          <span>Git</span>
          <span>Responsive Design</span>
        </div>
      </div>
    </section>
  );
}

export default Skills;