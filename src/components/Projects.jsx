import { Container } from './ui/Container'
import { SectionHeading } from './ui/SectionHeading'
import { ProjectCard } from './ProjectCard'
import { ProjectComingSoon } from './ProjectComingSoon'
import { PROJECTS } from '../data'

export function Projects() {
  return (
    <section id="work" className="relative py-28 sm:py-36">
      <Container>
        <SectionHeading
          eyebrow="Selected Work"
          title="A project I built to solve a real problem."
          subtitle="I'd rather show you one thing done properly than five things done halfway."
        />

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2">
            {PROJECTS.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
          <div className="lg:col-span-1">
            <ProjectComingSoon />
          </div>
        </div>
      </Container>
    </section>
  )
}
