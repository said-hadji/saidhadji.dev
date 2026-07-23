import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { GlassCard } from "./ui/GlassCard";
import { Button } from "./ui/Button";

const PREVIEW_WIDTH = 500;
const PREVIEW_HEIGHT = 280;
const CURSOR_OFFSET = 10;
const EDGE_PADDING = 12;
const LERP_SPEED = 0.35;

const clamp = (value, min, max) => Math.min(Math.max(value, min), max);

export function ProjectCard({ project }) {
  const [isHovering, setIsHovering] = useState(false);
  const [mounted, setMounted] = useState(false);

  const wrapperRef = useRef(null); // tracks cursor position (translate only)

  const target = useRef({ x: 0, y: 0 });
  const current = useRef({ x: 0, y: 0 });
  const hasPositioned = useRef(false);

  const animationFrame = useRef();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const animate = () => {
      current.current.x += (target.current.x - current.current.x) * LERP_SPEED;
      current.current.y += (target.current.y - current.current.y) * LERP_SPEED;

      if (wrapperRef.current) {
        // Position only — no transition here, it must track the cursor instantly.
        wrapperRef.current.style.transform = `translate3d(${current.current.x}px, ${current.current.y}px, 0)`;
      }

      animationFrame.current = requestAnimationFrame(animate);
    };

    animate();

    return () => cancelAnimationFrame(animationFrame.current);
  }, []);

  const getClampedPosition = (clientX, clientY) => {
    let x = clientX + CURSOR_OFFSET;
    let y = clientY + CURSOR_OFFSET;

    if (x + PREVIEW_WIDTH > window.innerWidth - EDGE_PADDING) {
      x = clientX - PREVIEW_WIDTH - CURSOR_OFFSET;
    }
    if (y + PREVIEW_HEIGHT > window.innerHeight - EDGE_PADDING) {
      y = clientY - PREVIEW_HEIGHT - CURSOR_OFFSET;
    }

    x = clamp(
      x,
      EDGE_PADDING,
      window.innerWidth - PREVIEW_WIDTH - EDGE_PADDING,
    );
    y = clamp(
      y,
      EDGE_PADDING,
      window.innerHeight - PREVIEW_HEIGHT - EDGE_PADDING,
    );

    return { x, y };
  };

  const handleMouseMove = (e) => {
    setIsHovering(true);

    const { x, y } = getClampedPosition(e.clientX, e.clientY);
    target.current.x = x;
    target.current.y = y;

    if (!hasPositioned.current) {
      current.current.x = x;
      current.current.y = y;
      hasPositioned.current = true;
    }
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    hasPositioned.current = false;
  };

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
        <a
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          href={project.demo}
          className={`relative h-20 px-3 flex justify-between items-center duration-1000 ease-out cursor-pointer`}
        >
          <div className="">
            <h3 className="text-lg font-semibold text-white/70 group-hover:text-white duration-300 sm:text-xl">
              {project.title}
            </h3>
          </div>
          {project.tag && !isHovering ? (
            <span className="rounded-full border border-gold-400/30 bg-gold-400/10 px-3 py-1 font-mono text-[11px] text-gold-300">
              {project.tag}
            </span>
          ) : (
            <a href={project.github} className={`text-xs text-white/80 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 backdrop-blur-sm px-3 py-1.5 rounded-full space-x-1 duration-300`}>
              <i className={`fa-brands fa-github`}></i>
              <span>Github</span>
            </a>
          )}
        </a>
      </GlassCard>

      {mounted && createPortal(previewImage, document.body)}
    </motion.div>
  );
}
