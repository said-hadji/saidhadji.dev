import { useState } from "react";
import "./App.css";
import Grainient from "./components/Grainient";
import Nav from "./components/Nav";
import HomeContent from "./components/HomeContent";
import HomeWord from "./components/HomeWord";
import StorySection from "./components/StorySection";
import ProjectsSection from "./components/ProjectsSection";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import MobileNav from "./components/MobileNav";

function App() {
  const [isNavVisible, setIsNavVisible] = useState(false);

  function toggleNav() {
    setIsNavVisible(!isNavVisible);
  }

  return (
    <div>
      <div id="home" className="w-full h-screen relative">
        <Grainient />
        <div className="hidden md:block">
          <Nav toggleNav={toggleNav} isNavVisible={isNavVisible} />
        </div>
        <div className="md:hidden">
          <MobileNav toggleNav={toggleNav} isNavVisible={isNavVisible} />
        </div>
        <HomeContent />
        <HomeWord />
      </div>
      <StorySection />
      <ProjectsSection />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
