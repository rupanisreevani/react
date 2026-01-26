import React, { useEffect } from "react";

const Hero = () => {

  // Typing effect (same as HTML id="typing")
  useEffect(() => {
    const words = ["Full Stack Developer", "Python Developer", "React Developer"];
    let wordIndex = 0;
    let charIndex = 0;
    let currentWord = "";
    let isDeleting = false;

    const typingElement = document.getElementById("typing");

    const type = () => {
      if (!typingElement) return;

      if (!isDeleting) {
        currentWord = words[wordIndex].substring(0, charIndex + 1);
        charIndex++;
      } else {
        currentWord = words[wordIndex].substring(0, charIndex - 1);
        charIndex--;
      }

      typingElement.textContent = currentWord;

      if (!isDeleting && charIndex === words[wordIndex].length) {
        setTimeout(() => (isDeleting = true), 1200);
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
      }

      setTimeout(type, isDeleting ? 60 : 100);
    };

    type();
  }, []);

  return (
    <section id="home" className="hero">
      
      {/* LEFT CONTENT */}
      <div className="hero-text">
        <p className="small-text">WELCOME TO MY WORLD</p>

        <h1>
          Hi I'm <span>SREEVANI</span>
        </h1>

        <h2>
          I'm a <span id="typing" className="blue"></span>
        </h2>

        <p className="desc">
        Passionate Full Stack Developer specializing in modern web technologies.
        Experienced in building responsive interfaces and scalable backend solutions
        using React and Python. Open to exciting opportunities.
        </p>



        <div className="buttons">
          <a href="#projects" className="btn primary">
            Explore Work
          </a>

          <a href="#contact" className="btn outline">
            Let's Talk
          </a>
        </div>
      </div>

      {/* RIGHT IMAGE */}
      <div className="hero-image">
        <div className="profile">
          <img src="sreevani.jpeg" alt="Sreevani" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
