import { createPortal } from "react-dom";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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

  const contentRef = useRef(null);
  const [contentHeight, setContentHeight] = useState(0);

  const isOpen = clickedProject.isOpen && clickedProject.title === title;

  const toggleProject = () => {
    setClickedProject((prev) => {
      if (prev.title === title) {
        return { isOpen: false, title: null };
      }
      return { isOpen: true, title };
    });
  };

  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(contentRef.current.scrollHeight);
    }
  }, [isOpen]);

  return (
    <div onClick={toggleProject} className="relative cursor-pointer">
      <div
        className={`relative w-full grid grid-cols-2 border-b transition-colors duration-300 ${
          isOpen ? "border-white/10" : "border-transparent"
        } py-5`}
      >
        <h3 className="text-lg font-semibold text-white/70 group-hover:text-white duration-300 sm:text-xl">
          {title}
        </h3>

        <div className="relative flex justify-end">
          <AnimatePresence mode="wait" initial={false}>
            {isOpen ? (
              <motion.div
                key="github"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <GithubLink href={github} />
              </motion.div>
            ) : (
              <motion.span
                key="chevron"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="flex justify-end translate-y-0.75"
              >
                <ChevronDown className="text-white/50" />
              </motion.span>
            )}
          </AnimatePresence>
        </div>
      </div>

      <div
        style={{ height: isOpen ? `${contentHeight + 16}px` : "0px" }}
        className="overflow-hidden transition-[height] duration-300 ease-out"
      >
        <div
          ref={contentRef}
          className={isOpen ? "pt-4" : "pt-4 pointer-events-none"}
        >
          <a
            href={demo}
            onClick={(e) => e.stopPropagation()}
            className="block overflow-hidden rounded-2xl"
          >
            <img
              src={screenShot}
              alt=""
              className="w-full rounded-2xl"
              onLoad={() => {
                if (contentRef.current) {
                  setContentHeight(contentRef.current.scrollHeight);
                }
              }}
            />
          </a>

          <span className="block text-xs text-white/70 text-center mt-4">
            Click the image to see Live Demo
          </span>
        </div>
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
