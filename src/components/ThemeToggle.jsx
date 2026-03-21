import React from 'react';
import './ThemeToggle.css';

const ThemeToggle = ({ theme, toggleTheme }) => {
  return (
    <button
      className="theme-toggle"
      onClick={toggleTheme}
      aria-label={Switch to  mode}
      title={Current theme: . Click to switch.}
    >
      <div className="theme-toggle-container">
        <div className={	heme-toggle-slider }>
          <span className="theme-icon sun" aria-hidden="true">☀️</span>
          <span className="theme-icon moon" aria-hidden="true">🌙</span>
        </div>
      </div>
      <span className="visually-hidden">
        Current theme: {theme}. Click to switch to {theme === 'dark' ? 'light' : 'dark'} mode.
      </span>
    </button>
  );
};

export default ThemeToggle;
