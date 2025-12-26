import React from "react";
import imgVictorLam from "../assets/Victor_Lam.jpg";

const Profile = React.memo(() => {
  return (
    <div className="profile">
      <img
        src={imgVictorLam}
        alt="Victor Lam - IT Leader and Full-Stack Developer"
        className="img-fluid rounded-circle"
      />
      <h1 className="text-light">
        <a href="/">Victor Lam</a>
      </h1>
      <div className="social-links mt-3 text-center">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/mingmanhk"
          className="linkedin"
          aria-label="Visit Victor Lam's LinkedIn profile"
        >
          <i className="bi bi-linkedin" aria-hidden="true"></i>
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/mingmanhk"
          className="Github"
          aria-label="Visit Victor Lam's GitHub profile"
        >
          <i className="bi bi-github" aria-hidden="true"></i>
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://drive.google.com/file/d/1fLUh_lNjaOft6ANH4B1FDgAt1DZQAQsS/view?usp=sharing"
          className="Resume"
          aria-label="View Victor Lam's resume (PDF)"
        >
          <i className="bi bi-file-earmark-person" aria-hidden="true"></i>
        </a>
      </div>
    </div>
  );
});

Profile.displayName = 'Profile';

export default Profile;
