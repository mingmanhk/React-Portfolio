import React from "react";
import Header from "./components/Header.jsx";
import About from "./components/about.jsx";
import Intro from "./intro.jsx";
import Experience from "./components/experience.jsx";
import Resume from "./components/resume.jsx";
import Contact from "./components/contact.jsx";
import Footer from "./components/Footer.jsx";
import ErrorBoundary from "./components/ErrorBoundary.jsx";
import "./App.css";

const App = () => {
  return (
    <ErrorBoundary>
      <div className="app-container">
        <Header />
        <Intro />
        
        <main id="main" className="main-content">
          <About />
          <Experience />
          <Resume />
          <Contact />
        </main>
        
        <Footer />
      </div>
    </ErrorBoundary>
  );
};

export default App;
