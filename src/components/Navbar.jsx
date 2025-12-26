import React from 'react';

const Navbar = React.memo(() => {
  return (
    <nav id="navbar" className="nav-menu navbar">
      <ul>
        <li>
          <a href="#about" className="nav-link scrollto" aria-label="Navigate to Summary section">
            <i className="bi bi-person" aria-hidden="true"></i> <span>Summary</span>
          </a>
        </li>
        <li>
          <a href="#experience" className="nav-link scrollto" aria-label="Navigate to Skills section">
            <i className="bi bi-card-heading" aria-hidden="true"></i> <span>Skills</span>
          </a>
        </li>
        <li>
          <a href="#resume" className="nav-link scrollto" aria-label="Navigate to Resume section">
            <i className="bi bi-list" aria-hidden="true"></i> <span>Resume</span>
          </a>
        </li>
        <li>
          <a href="#projects" className="nav-link scrollto" aria-label="Navigate to Projects section">
            <i className="bi bi-stickies" aria-hidden="true"></i> <span>Projects</span>
          </a>
        </li>
        <li>
          <a href="#contact" className="nav-link scrollto" aria-label="Navigate to Contact section">
            <i className="bi bi-envelope" aria-hidden="true"></i> <span>Contact</span>
          </a>
        </li>
      </ul>
    </nav>
  );
});

Navbar.displayName = 'Navbar';

export default Navbar;
