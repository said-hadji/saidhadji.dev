import { createPortal } from "react-dom";
import { motion } from "framer-motion";
import { GlassCard } from "./ui/GlassCard";
import { useIsDesktop } from "../hooks/useIsDesktop";
import { useCursorFollow } from "../hooks/useCursorFollow";
import { PreviewImage } from "./ui/PreviewImage";
import { ChevronDown } from "lucide-react";

const PREVIEW_WIDTH = 500;
const PREVIEW_HEIGHT = 280;
const CURSOR_OFFSET = 10;
const EDGE_PADDING = 12;
const LERP_SPEED = 0.35;

function GithubLink({ href, className = "" }) {
  return (
    <a
      href={href}
      className={`absolute top-1/2 -translate-y-1/2 right-0 text-xs text-white/80 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 backdrop-blur-sm px-3 py-1.5 rounded-full space-x-1 duration-300 ${className}`}
    >
      <i className={`fa-brands fa-github`}></i>
      <span>Github</span>
    </a>
  );
}

function DesktopLayout({
  handleMouseMove,
  handleMouseLeave,
  project,
  isHovering,
}) {
  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative h-20 flex items-center`}
    >
      <a href={project.demo} className="w-full h-full px-3 flex items-center">
        <h3 className="text-lg font-semibold text-white/70 group-hover:text-white duration-300 sm:text-xl">
          {project.title}
        </h3>
      </a>
      {project.tag && !isHovering ? (
        <span className="absolute top-1/2 -translate-y-1/2 right-3 rounded-full border border-gold-400/30 bg-gold-400/10 px-3 py-1 font-mono text-[11px] text-gold-300">
          {project.tag}
        </span>
      ) : (
        <GithubLink href={project.github} className={`right-3`} />
      )}
    </div>
  );
}

function CompactLayout({ project, clickedProject, setClickedProject }) {
  const { title, screenShot, demo, github } = project;

  const toggleProject = () => {
    setClickedProject((prev) => {
      if (prev.title === title) {
        return {
          isOpen: false,
          title: null,
        };
      }

      return {
        isOpen: true,
        title
      };
    });
  };

  const isOpen = clickedProject.isOpen && clickedProject.title === title;

  return (
    <div
      onClick={toggleProject}
      style={{
        gridTemplateRows: isOpen ? "auto 1fr" : "auto 0fr",
      }}
      className={`relative grid ${isOpen ? "gap-4" : "gap-0"} transition-[grid-template-rows] duration-300`}
    >
      <div
        className={`relative w-full grid grid-cols-2 ${isOpen ? "border-b border-white/10" : ""} py-5`}
      >
        <h3 className="text-lg font-semibold text-white/70 group-hover:text-white duration-300 sm:text-xl">
          {title}
        </h3>

        {isOpen ? (
          <GithubLink href={github} />
        ) : (
          <span className={`flex justify-end translate-y-0.75`}>
            <ChevronDown className={`text-white/50`} />
          </span>
        )}
      </div>

      <a href={demo} className={`overflow-hidden`}>
        <img src={screenShot} alt="" className={`rounded-2xl`} />
      </a>

      {isOpen && (
        <span className={`text-xs text-white/70 text-center mb-4`}>
          Click the image to see Live Demo
        </span>
      )}
    </div>
  );
}

export function ProjectCard({ project, clickedProject, setClickedProject }) {
  const isDesktop = useIsDesktop();
  const cursorFollow = useCursorFollow({
    PREVIEW_WIDTH,
    PREVIEW_HEIGHT,
    CURSOR_OFFSET,
    EDGE_PADDING,
    LERP_SPEED,
  });
  const { wrapperRef, isHovering, mounted, handleMouseMove, handleMouseLeave } =
    cursorFollow;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
    >
      <GlassCard className="group border-b border-white/10 xl:hover:shadow-2xl xl:shadow-[#12071f]">
        {isDesktop ? (
          <DesktopLayout
            handleMouseMove={handleMouseMove}
            handleMouseLeave={handleMouseLeave}
            project={project}
            isHovering={isHovering}
          />
        ) : (
          <CompactLayout
            project={project}
            clickedProject={clickedProject}
            setClickedProject={setClickedProject}
          />
        )}
      </GlassCard>

      {isDesktop &&
        mounted &&
        createPortal(
          <PreviewImage
            project={project}
            wrapperRef={wrapperRef}
            PREVIEW_WIDTH={PREVIEW_WIDTH}
            PREVIEW_HEIGHT={PREVIEW_HEIGHT}
            isHovering={isHovering}
          />,
          document.body,
        )}
    </motion.div>
  );
}
