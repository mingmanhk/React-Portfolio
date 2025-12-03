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
          href="https://media.licdn.com/dms/document/media/v2/D562DAQHUPO_rmHereg/profile-treasury-document-pdf-analyzed/B56ZaXLN39G4Ac-/0/1746293024000?e=1763596800&v=beta&t=x0ZigC2z0vSRt447_LKEcfyXXEvkKZ3ZRboemlwn3G4"
          className="Resume"
        >
          <i className="bi bi-file-earmark-person"></i>
        </a>
      </div>
    </div>
  );
}

export default Profile;
