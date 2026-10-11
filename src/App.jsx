import SiteHeader from "./components/SiteHeader";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Capabilities from "./components/Capabilities";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import SiteFooter from "./components/SiteFooter";

export default function App() {
  return (
    <>
      <SiteHeader />
      <main id="main">
        <Hero />
        <Experience />
        <Capabilities />
        <Projects />
        <Contact />
      </main>
      <SiteFooter />
    </>
  );
}
