import { useEffect, useRef, useCallback } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Code, ArrowRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const PROJECTS = [
  {
    id: 1,
    title: "Todo App",
    description:
      "A clean and minimal Todo App designed to help users organize and manage their tasks",
    technologies: ["HTML", "TailwindCSS", "JavaScript"],
    gitHubLink: "https://github.com/said-hadji/todo-app-vanilla-js",
    demoLink: "https://todo-app-vanilla-js-sigma.vercel.app/",
  },
  {
    id: 2,
    title: "Request Management System",
    description:
      "A simple Request Management System that allows users to submit and track requests, with an intuitive interface for managing them efficiently.",
    technologies: ["React", "JavaScript", "TailwindCSS"],
    gitHubLink: "https://github.com/said-hadji/request-management-system",
    demoLink: "https://request-management-system-woad.vercel.app/",
  },
];

function GradientButton({ href, icon, label }) {
  return (
    <div className="bg-linear-to-br hover:bg-linear-to-bl from-gray-500 via-white to-gray-500 p-px group">
      <a
        href={href}
        className="text-black hover:text-black bg-white px-10 py-3 flex gap-4 duration-300"
      >
        {label} {icon}
      </a>
    </div>
  );
}

export default function ProjectsSection() {
  const sectionRef = useRef(null);
  const panelRefs = useRef([]);
  const setPanelRef = useCallback((el, index) => {
    panelRefs.current[index] = el;
  }, []);

  useEffect(() => {
    const section = sectionRef.current;
    const panels = panelRefs.current.filter(Boolean);

    if (!section || panels.length === 0) return;

    gsap.set(panels, { willChange: "transform" });

    const mm = gsap.matchMedia();

    mm.add({ isDesktop: "(min-width: 1280px)" }, (context) => {
      const { isDesktop } = context.conditions;

      if (!isDesktop) {
        gsap.set(panels, { clearProps: "transform,willChange" });
        return;
      }

      const ctx = gsap.context(() => {
        const scrollTween = gsap.to(panels, {
          xPercent: -100 * (panels.length - 1),
          ease: "none",
          stagger: 0,
          overwrite: "auto",
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: () => "+=" + window.innerWidth * (panels.length - 1),
            invalidateOnRefresh: true,
            scrub: 1,
            pin: true,
            anticipatePin: 1,
            lazy: false,
            fastScrollEnd: true,
          },
        });

        panels.forEach((panel) => {
          gsap.fromTo(
            panel,
            { scale: 0.85 },
            {
              scale: 1,
              ease: "power1.out",
              overwrite: "auto",
              scrollTrigger: {
                trigger: panel,
                containerAnimation: scrollTween,
                start: "left 80%",
                end: "center center",
                scrub: true,
                invalidateOnRefresh: true,
                lazy: false,
              },
            },
          );
        });
      }, section);

      return () => {
        gsap.set(panels, { clearProps: "willChange" });
        ctx.revert();
      };
    });

    return () => mm.revert();
  }, []);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="w-full min-h-screen flex flex-col xl:flex-row xl:justify-between xl:items-center xl:overflow-hidden"
    >
      <div className="xl:h-full flex flex-col justify-center items-center gap-10 p-10">
        <h1 className="text-4xl md:text-5xl xl:text-6xl 2xl:text-8xl font-extrabold text-center sm:text-start">
          Selected Projects
        </h1>
        <p className="text-center text-base 2xl:text-lg text-black/70">
          A collection of projects focused on clean UI and smooth user
          experience.
        </p>
        <GradientButton
          href={"#"}
          icon={<ArrowRight className="group-hover:-rotate-45 duration-300" />}
          label="See All"
        />
      </div>

      <div
        className={`w-full xl:flex-2 h-auto xl:h-full flex flex-col xl:flex-row gap-2 sm:gap-10 xl:gap-0 py-2 sm:py-10 lg:py-30 2xl:py-40 px-2 sm:px-10 xl:px-0 xl:pl-20 xl:pr-7 xl:overflow-hidden`}
      >
        {PROJECTS.map((project, index) => (
          <div
            key={project.id}
            ref={(el) => setPanelRef(el, index)}
            className={`w-full xl:h-full bg-linear-to-br from-[#B0B0B0] via-[#E8E8E8] to-[#D0D0D0] p-10 xl:p-0 flex justify-center items-center lg:overflow-hidden lg:shrink-0  lg:scale-80`}
          >
            <div className="flex flex-col items-center gap-10">
              <h1 className="text-3xl md:text-4xl 2xl:text-6xl text-black font-bold">
                {project.title}
              </h1>
              <p className="lg:w-sm 2xl:w-lg text-sm 2xl:text-base text-center text-black/80 leading-8">
                {project.description}
              </p>

              <div className="space-x-4">
                {project.technologies.map((tech) => (
                  <span key={tech} className="text-sm bg-white/30 px-3 py-1">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <GradientButton
                  href={project.gitHubLink}
                  icon={<Code />}
                  label="Code"
                />
                <GradientButton
                  href={project.demoLink}
                  icon={
                    <ArrowRight className="group-hover:-rotate-45 duration-300" />
                  }
                  label="Demo"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
