import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

// In Navbar, we can assign a style from an object by using curly braces
function Navbar() {
  return (
    <nav id="navbar" class="nav-menu navbar">
      <ul>
        <li>
          <a href="#about" class="nav-link scrollto">
            <i class="bi bi-person"></i> <span>About</span>
          </a>
        </li>
        <li>
          <a href="#experience" class="nav-link scrollto">
            <i class="bi bi-card-heading"></i> <span>Experience</span>
          </a>
        </li>
        <li>
          <a href="#resume" class="nav-link scrollto">
            <i class="bi bi-list"></i> <span>Resume</span>
          </a>
        </li>
        <li>
          <a href="#portfolio" class="nav-link scrollto">
            <i class="bi bi-stickies"></i> <span>Portfolio</span>
          </a>
        </li>
        <li>
          <a href="#contact" class="nav-link scrollto">
            <i class="bi bi-envelope"></i> <span>Contact</span>
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
