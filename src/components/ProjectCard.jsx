import { createPortal } from "react-dom";
import { motion } from "framer-motion";
import { GlassCard } from "./ui/GlassCard";
import { useIsDesktop } from "../hooks/useIsDesktop";
import { useCursorFollow } from "../hooks/useCursorFollow";
import { PreviewImage } from "./ui/PreviewImage";
import { Button } from "./ui/Button";
import { SquareArrowOutUpRight } from "lucide-react";

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

function CompactLayout({ project }) {
  const { title, screenShot, demo, github } = project;

  return (
    <div
      className={`w-92 md:w-120 lg:w-150 shrink-0 transition-colors duration-300`}
    >
      <h3 className="text-2xl text-white font-medium mb-4">{title}</h3>

      <div
        className={`bg-white/5 backdrop-blur-2xl border border-white/10 rounded-2xl p-1 mb-4`}
      >
        <div className={`overflow-hidden rounded-xl`}>
          <img src={screenShot} alt="" />
        </div>
      </div>

      <div className={`grid grid-cols-2 gap-2`}>
        <Button as="a" href={demo}>
          <SquareArrowOutUpRight size={15} />
          <span>Live Demo</span>
        </Button>

        <Button as="a" variant={"secondary"} href={github}>
          <i className={`fa-brands fa-github`}></i>
          <span>Code</span>
        </Button>
      </div>
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
      initial={isDesktop ?? { opacity: 0, y: 24 }}
      whileInView={isDesktop ?? { opacity: 1, y: 0 }}
      viewport={isDesktop ?? { once: true, margin: "-60px" }}
      transition={isDesktop ?? { duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
    >
      <GlassCard
        className={
          isDesktop
            ? "group border-b border-white/10 xl:hover:shadow-2xl xl:shadow-[#12071f]"
            : ""
        }
      >
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
