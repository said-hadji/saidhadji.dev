import { Container } from "./ui/Container";
import { SectionHeading } from "./ui/SectionHeading";
import { ProjectCard } from "./ProjectCard";
import { ProjectComingSoon } from "./ProjectComingSoon";
import { PROJECTS } from "../data";

export function Projects() {
  return (
    <section id="work" className="relative py-28 sm:py-36">
      <Container>
        <SectionHeading
          eyebrow="Selected Work"
          title="A project I built to solve a real problem."
          subtitle="I'd rather show you one thing done properly than five things done halfway."
        />

        <div className="mt-14 flex flex-col gap-10">
          <div className="flex flex-col">
            {PROJECTS.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>

          <ProjectComingSoon />
        </div>
      </Container>
    </section>
  );
}
