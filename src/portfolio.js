import React from "react";
import Header from "./components/Header";

// In our main App component, we are rendering only single instances of Header and Navbar and several instances of Card
function App() {
  return (
    <div>
      <Header />
      {/* <About />
      <Introduction />
      <Resume />
      <Portfolio />
      <Contact /> */}
    </div>
  );
}

export default App;
