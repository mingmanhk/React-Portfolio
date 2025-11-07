import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "./components/Header.js";
import About from "./components/about.js";
import Intro from "./components/intro.js"; // Assuming intro.js exists
import Projects from "./components/portfolio.js";
import Experience from "./components/experience.js";
import Resume from "./components/resume.js";
import Contact from "./components/contact.js";
import Footer from "./components/Footer.js";
import "./App.css";

const App = () => {
  // State to manage the theme
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      mirror: false,
    });
  }, []);

  // Function to toggle the theme
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  // Effect to apply the theme class to the body
  useEffect(() => {
    document.body.className = `${theme}-theme`;
  }, [theme]);

  return (
    <div>
      <Header theme={theme} toggleTheme={toggleTheme} />
      <Intro />
      <main id="main">
        <About />
        <Experience />
        <Resume />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
