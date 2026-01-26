import React from "react";

const About = () => {
  return (
    <section id="about" className="about-section">
      <h2 className="about-title">
        About <span>Me</span>
      </h2>

      <p className="about-text">
        I’m <strong>Sreevani</strong>, an aspiring <strong>Python Full Stack Developer</strong> with a strong interest in
        building dynamic and interactive web applications.
      </p>

      <p className="about-text">
        I have learned and practiced technologies such as <strong>HTML, CSS, JavaScript, Python, Django, and MySQL</strong>
        through hands-on projects and continuous practice. I enjoy problem-solving, debugging, and improving application
        performance. I strive to write clean and readable code.
      </p>

      <p className="about-text">
        I am actively looking for an <strong>entry-level or junior developer role</strong> where I can learn from
        experienced professionals and grow as a full stack developer.
      </p>

      <div className="about-stats">
        <span>✔ 10+ Projects</span>
        <span>✔ Full Stack Training</span>
        <span>✔ Strong Python Skills</span>
      </div>
    </section>
  );
};

export default About;
