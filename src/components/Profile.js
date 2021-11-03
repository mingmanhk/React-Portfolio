import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import imgVictorLam from "../assets/Victor_Lam.jpg";

// In Navbar, we can assign a style from an object by using curly braces
function Profile() {
  return (
    <div class="profile">
      <img
        src={imgVictorLam}
        alt=""
        class="img-fluid rounded-circle"
      ></img>
      <h1 class="text-light">
        <a href="index.html">Victor Lam</a>
      </h1>
      <div class="social-links mt-3 text-center">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/ming-man-lam-25521a33/"
          class="linkedin"
        >
          <i class="bi bi-linkedin"></i>
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/mingmanhk"
          class="Github"
        >
          <i class="bi bi-github"></i>
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="assets/Ming Man Lam - Resume - IT Manager 2021.pdf"
          class="Resume"
          download
        >
          <i class="bi bi-file-earmark-person"></i>
        </a>
      </div>
    </div>
  );
}

export default Profile;
