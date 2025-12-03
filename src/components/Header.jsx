import React, { useState } from "react";
import Navbar from "./Navbar";
import Profile from "./Profile";

// In Navbar, we can assign a style from an object by using curly braces
function Header() {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const toggleMobileNav = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
    document.body.classList.toggle('mobile-nav-active');
  };

  return (
    <>
      <i
        className={`bi mobile-nav-toggle ${isMobileNavOpen ? 'bi-x' : 'bi-list'}`}
        onClick={toggleMobileNav}
      ></i>
      <header id="header">
        <div className="d-flex flex-column">
          <Profile />
          <Navbar />
        </div>
      </header>
    </>
  );
}

export default Header;
