import { Container } from "./ui/Container";
import { SectionHeading } from "./ui/SectionHeading";
import { ProjectCard } from "./ProjectCard";
import { ProjectComingSoon } from "./ProjectComingSoon";
import { PROJECTS } from "../data";
import { useState } from "react";

export function Projects() {
  const [clickedProject, setClickedProject] = useState({
    isOpen: false,
    title: null,
  });

  return (
    <section id="work" className="relative py-28 sm:py-36">
      <Container>
        <SectionHeading
          eyebrow="Selected Work"
          title="Projects I've built with attention to detail."
          subtitle="Real projects focused on clean code, responsive design, and thoughtful user experience."
        />

        <div className="mt-14 flex flex-col gap-10">
          <div className="flex flex-col">
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
