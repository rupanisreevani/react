import React, { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const resumeLink = "https://drive.google.com/uc?export=download&id=15V06j7LtFGtmkn-de0NtQZLIglPLFCuH";

  return (
    <header className="navbar-container">
      <div className="logo"><h1>Sreevani</h1></div>

      <nav className={`navbar ${open ? "active" : ""}`}>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
        <a href={resumeLink} target="_blank">Resume</a>
      </nav>

      <div
        className={`hamburger ${open ? "active" : ""}`}
        onClick={() => setOpen(!open)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </header>
  );
};

export default Navbar;
