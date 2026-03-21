import React, { useState, useEffect } from "react";
import Header from "./components/Header.jsx";
import About from "./components/about.jsx";
import Intro from "./intro.jsx";
import Experience from "./components/experience.jsx";
import Resume from "./components/resume.jsx";
import Contact from "./components/contact.jsx";
import Footer from "./components/Footer.jsx";
import ErrorBoundary from "./components/ErrorBoundary.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";
import "./App.css";

const App = () => {
  const [theme, setTheme] = useState("dark");
  const [scrollProgress, setScrollProgress] = useState(0);

  // Handle scroll progress
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.pageYOffset / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle theme
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "dark";
    setTheme(savedTheme);
    document.documentElement.setAttribute("data-theme", savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  return (
    <ErrorBoundary>
      <div className="app-container" data-theme={theme}>
        {/* Scroll Progress Bar */}
        <div 
          className="scroll-progress-bar" 
          style={{ width: scrollProgress + "%" }}
          aria-hidden="true"
        />
        
        {/* Theme Toggle Button */}
        <button
          className="theme-toggle"
          onClick={toggleTheme}
          aria-label={"Switch to " + (theme === "dark" ? "light" : "dark") + " mode"}
          title={"Current: " + theme + ". Click to switch."}
        >
          {theme === "dark" ? "☀️" : "🌙"}
        </button>
        
        <Header />
        <Intro />
        
        <main id="main" className="main-content">
          <About />
          <Experience />
          <Resume />
          <Contact />
        </main>
        
        <Footer />
        <ScrollToTop />
      </div>
    </ErrorBoundary>
  );
};

export default App;
