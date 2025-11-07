import React from "react";
import Navbar from "./Navbar";
import Profile from "./Profile";

// In Navbar, we can assign a style from an object by using curly braces
function Header({ theme, toggleTheme }) {
  return (
    <header>
      <div className="d-flex flex-column">
        <Profile theme={theme} toggleTheme={toggleTheme} />
        <Navbar />
      </div>
    </header>
  );
}

export default Header;
