import React from "react";

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-top">
        {/* LEFT */}
        <div className="footer-col">
          <h2 className="footer-logo">Sreevani</h2>
          <p className="footer-role">
            PYTHON FULLSTACK DEVELOPER · FRONTEND & BACKEND · UI/UX
          </p>
          <p className="footer-desc">
          Aspiring full-stack developer passionate about learning, problem-solving, and
          creating modern web applications with clean and scalable code.
          </p>

        </div>

        {/* CENTER */}
        <div className="footer-col center">
             <p className="footer-text">
             Always open to learning, collaboration, and new opportunities in full-stack
            development — let’s connect and grow together.
            </p>


          <div className="footer-icons">
            <a href="#" aria-label="Email">📩</a>
            <a href="#" aria-label="LinkedIn">in</a>
            <a href="#" aria-label="GitHub">🐙</a>
          </div>
        </div>

        {/* RIGHT */}
        <div className="footer-col right">
          <p className="footer-text">
          Actively seeking entry-level and junior full-stack developer opportunities.
          </p>
          <a href="#contact" className="footer-btn">
          Get in Touch →
          </a>

        </div>
      </div>

      {/* BOTTOM */}
      <div className="footer-bottom">
        <p>© 2026 Sreevani — Passionate full-stack developer.</p>
        <div className="footer-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Cookie Preferences</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
