import React from "react";
import imgVictorLam from "../assets/Victor_Lam.jpg";

// In Navbar, we can assign a style from an object by using curly braces
function Profile() {
  return (
    <div className="profile">
      <img
        src={imgVictorLam}
        alt=""
        className="img-fluid rounded-circle"
      ></img>
      <h1 className="text-light">
        <a href="index.html">Victor Lam</a>
      </h1>
      <div className="social-links mt-3 text-center">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/ming-man-lam-25521a33/"
          className="linkedin"
        >
          <i className="bi bi-linkedin"></i>
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/mingmanhk"
          className="Github"
        >
          <i className="bi bi-github"></i>
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="assets/Ming Man Lam - Resume - IT Manager 2021.pdf"
          className="Resume"
          download
        >
          <i className="bi bi-file-earmark-person"></i>
        </a>
      </div>
    </div>
  );
}

export default Profile;
