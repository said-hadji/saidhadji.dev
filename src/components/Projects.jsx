import { Container } from "./ui/Container";
import { SectionHeading } from "./ui/SectionHeading";
import { ProjectCard } from "./ProjectCard";
import { ProjectComingSoon } from "./ProjectComingSoon";
import { NAV_ITEMS, PROJECTS } from "../data";
import { useEffect, useRef, useState } from "react";
import { useActiveSection } from "../hooks/useActiveSection";

export function Projects() {
  const [clickedProject, setClickedProject] = useState({
    isOpen: false,
    title: null,
  });
  
  const activeId = useActiveSection(NAV_ITEMS.map((n) => n.id));
  
  const ref = useRef(null);
  const animationCounter = useRef(0);
  
  useEffect(() => {
    if (activeId !== "work" || animationCounter.current > 0) return;
    const el = ref.current;
    if (!el) return;

    let start;
    const duration = 1000;
    const distance = 50;

    function animate(timestamp) {
      if (!start) start = timestamp;

      const progress = Math.min((timestamp - start) / duration, 1);

      const eased =
        progress < 0.5
          ? 2 * progress * progress
          : 1 - Math.pow(-2 * progress + 2, 2) / 2;

      const x =
        progress <= 0.5 ? eased * 2 * distance : (1 - eased) * 2 * distance;

      el.scrollLeft = x;

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    }

    requestAnimationFrame(animate);
    animationCounter.current = 1
  }, [activeId]);

  return (
    <section id="work" className="relative py-28 sm:py-36">
      <Container>
        <SectionHeading
          eyebrow="Selected Work"
          title="Projects I've built with attention to detail."
          subtitle="Real projects focused on clean code, responsive design, and thoughtful user experience."
        />

        <div className="mt-14 flex flex-col gap-14">
          <div
            ref={ref}
            className="flex xl:flex-col gap-5 xl:gap-0 overflow-x-auto duration-500 scrollBar"
          >
            {PROJECTS.map((project) => (
              <ProjectCard
                key={project.title}
                project={project}
                clickedProject={clickedProject}
                setClickedProject={setClickedProject}
              />
            ))}
          </div>

          <ProjectComingSoon />
        </div>
      </Container>
    </section>
  );
}
