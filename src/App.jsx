import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Projects } from "./components/Projects";
import { Services } from "./components/Services";
import { Process } from "./components/Process";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { BackToTop } from "./components/ui/BackToTop";
import { useEffect, useState } from "react";

export default function App() {
  const [isStartProject, setIsStartProject] = useState(false);

  useEffect(() => {
    if (isStartProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isStartProject]);

  return (
    <div className="relative min-h-screen bg-ink-950">
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <Navbar setIsStartProject={setIsStartProject} />
      <main id="main">
        <Hero setIsStartProject={setIsStartProject} />
        <About />
        <Projects />
        <Services />
        <Process />
        <Contact
          isStartProject={isStartProject}
          setIsStartProject={setIsStartProject}
        />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}
