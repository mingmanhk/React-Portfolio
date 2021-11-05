import React from "react";
import Navbar from "./Navbar";
import Profile from "./Profile";

// In Navbar, we can assign a style from an object by using curly braces
function Header() {
  return (
    <header>
      <div className="d-flex flex-column">
        <Profile />
        <Navbar />
      </div>
    </header>
  );
}

export default Header;
