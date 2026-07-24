import { createPortal } from "react-dom";
import { motion } from "framer-motion";
import { GlassCard } from "./ui/GlassCard";
import { useIsDesktop } from "../hooks/useIsDesktop";
import { useCursorFollow } from "../hooks/useCursorFollow";

const PREVIEW_WIDTH = 500;
const PREVIEW_HEIGHT = 280;
const CURSOR_OFFSET = 10;
const EDGE_PADDING = 12;
const LERP_SPEED = 0.35;

export function ProjectCard({ project }) {
  const isDesktop = useIsDesktop();
  const cursorFollow = useCursorFollow({
    PREVIEW_WIDTH,
    PREVIEW_HEIGHT,
    CURSOR_OFFSET,
    EDGE_PADDING,
    LERP_SPEED,
  });
  const { wrapperRef, isHovering, mounted, handleMouseMove, handleMouseLeave } = cursorFollow;

  const previewImage = (
    <div
      ref={wrapperRef}
      className="fixed top-0 left-0 z-9999 pointer-events-none"
      style={{ willChange: "transform" }}
    >
      <img
        src={project.screenShot}
        alt={`${project.title} preview`}
        style={{ width: PREVIEW_WIDTH, height: PREVIEW_HEIGHT }}
        className={`
          block
          origin-top-left
          rounded-3xl
          object-cover
          shadow-2xl
          shadow-[#12071f]
          ring-1
          ring-white/10
          transition-[scale,opacity]
          ease-out
          ${isHovering ? "scale-100 opacity-100 duration-300" : "scale-[0.1] opacity-0"}
        `}
      />
    </div>
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
    >
      <GlassCard className="group border-b border-white/10 hover:shadow-2xl shadow-[#12071f]">
        <div
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className={`relative h-20 flex items-center`}
        >
          <a
            href={project.demo}
            className="w-full h-full px-3 flex items-center"
          >
            <h3 className="text-lg font-semibold text-white/70 group-hover:text-white duration-300 sm:text-xl">
              {project.title}
            </h3>
          </a>
          {project.tag && !isHovering ? (
            <span className="absolute top-1/2 -translate-y-1/2 right-3 rounded-full border border-gold-400/30 bg-gold-400/10 px-3 py-1 font-mono text-[11px] text-gold-300">
              {project.tag}
            </span>
          ) : (
            <a
              href={project.github}
              className={`absolute top-1/2 -translate-y-1/2 right-3 text-xs text-white/80 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 backdrop-blur-sm px-3 py-1.5 rounded-full space-x-1 duration-300`}
            >
              <i className={`fa-brands fa-github`}></i>
              <span>Github</span>
            </a>
          )}
        </div>
      </GlassCard>

      {isDesktop && mounted && createPortal(previewImage, document.body)}
    </motion.div>
  );
}
