import React from "react";
import imgVictorLam from "../assets/Victor_Lam.jpg";

// In Navbar, we can assign a style from an object by using curly braces
function Profile() {
  return (
    <div className="profile">
      <img
        src={imgVictorLam}
        alt="Victor Lam"
        className="img-fluid rounded-circle"
      ></img>
      <h1 className="text-light">
        <a href="/">Victor Lam</a>
      </h1>
      <div className="social-links mt-3 text-center">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/mingmanhk"
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
          href="https://drive.google.com/file/d/1fLUh_lNjaOft6ANH4B1FDgAt1DZQAQsS/view?usp=sharing"
          className="Resume"
        >
          <i className="bi bi-file-earmark-person"></i>
        </a>
      </div>
    </div>
  );
}

export default Profile;
