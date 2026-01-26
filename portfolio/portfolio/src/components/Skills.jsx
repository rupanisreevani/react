import React from "react";

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <h2 className="skills-title">
        Technical <span>Skills</span>
      </h2>

      <div className="skills-grid">
        <div className="skill-card">
          <img src="html.webp" alt="HTML" />
          <h3>HTML</h3>
        </div>

        <div className="skill-card">
          <img src="css.webp" alt="CSS" />
          <h3>CSS</h3>
        </div>

        <div className="skill-card">
          <img src="js.webp" alt="JavaScript" />
          <h3>JavaScript</h3>
        </div>

        <div className="skill-card">
          <img src="python.webp" alt="Python" />
          <h3>Python</h3>
        </div>

        <div className="skill-card">
          <img src="django.webp" alt="Django" />
          <h3>Django</h3>
        </div>
      </div>
    </section>
  );
};

export default Skills;
