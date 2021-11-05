import React from 'react';

// In Navbar, we can assign a style from an object by using curly braces
function Navbar() {
  return (
    <nav id="navbar" className="nav-menu navbar">
      <ul>
        <li>
          <a href="#about" className="nav-link scrollto">
            <i className="bi bi-person"></i> <span>About</span>
          </a>
        </li>
        <li>
          <a href="#experience" className="nav-link scrollto">
            <i className="bi bi-card-heading"></i> <span>Experience</span>
          </a>
        </li>
        <li>
          <a href="#resume" className="nav-link scrollto">
            <i className="bi bi-list"></i> <span>Resume</span>
          </a>
        </li>
        <li>
          <a href="#portfolio" className="nav-link scrollto">
            <i className="bi bi-stickies"></i> <span>Portfolio</span>
          </a>
        </li>
        <li>
          <a href="#contact" className="nav-link scrollto">
            <i className="bi bi-envelope"></i> <span>Contact</span>
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
