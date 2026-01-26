import React from "react";

const projectsData = [
  {
    title: "Student Feedback System",
    desc: "Django + HTML + CSS + JavaScript project to collect feedback.",
    img: "project1.webp",
    live: "https://rupanisreevani.github.io/samplefullstack/frontend/",
    github: "https://github.com/rupanisreevani/samplefullstack",
  },
  {
    title: "Portfolio Website",
    desc: "Personal portfolio website using HTML, CSS & JavaScript.",
    img: "project2.avif",
    live: "https://rupanisreevani.github.io/portfolio/frontend/",
    github: "https://github.com/rupanisreevani/portfolio",
  },
  {
    title: "JavaScript Mini Project",
    desc: "JavaScript-based interactive project with dynamic functionality.",
    img: "jsproject.jpg",
    live: "https://rupanisreevani.github.io/js-project/js%20project/project/index.html",
    github: "https://github.com/rupanisreevani/js-project",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <h2 className="projects-title">
        Latest <span>Projects</span>
      </h2>

      <div className="projects-grid">
        {projectsData.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.img} alt={project.title} />

            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.desc}</p>

              <div className="project-buttons">
              <a href={project.live} target="_blank" rel="noopener noreferrer">
              Live
              </a>
             <a href={project.github} target="_blank" rel="noopener noreferrer">
             GitHub
             </a>
             </div>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
