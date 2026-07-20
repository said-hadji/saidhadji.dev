import { useRef } from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { GlassCard } from "./ui/GlassCard";

export function ProjectCard({ project }) {
  const cardRef = useRef(null);

  // Subtle mouse-tilt on the thumbnail — a small, honest way to show
  // Framer Motion skill directly inside the portfolio itself.
  const handleMouseMove = (e) => {
    const el = cardRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    el.style.setProperty("--tilt-x", `${py * -6}deg`);
    el.style.setProperty("--tilt-y", `${px * 6}deg`);
  };

  const handleMouseLeave = () => {
    const el = cardRef.current;
    if (!el) return;
    el.style.setProperty("--tilt-x", "0deg");
    el.style.setProperty("--tilt-y", "0deg");
  };

  const isFreelo = project.title === "Freelo";

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
    >
      <GlassCard className="group h-full overflow-hidden transition-colors duration-300 hover:border-violet-500/40">
        {/* Thumbnail mockup with subtle tilt on hover */}
        <div
          ref={cardRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className={`relative h-56 overflow-hidden border-b border-white/[0.06] bg-gradient-to-br ${project.gradient} transition-transform duration-300 ease-out sm:h-64`}
          style={{
            transform:
              "perspective(800px) rotateX(var(--tilt-x, 0deg)) rotateY(var(--tilt-y, 0deg))",
          }}
        >
          <div className="absolute inset-0 bg-grid-pattern bg-[size:28px_28px] opacity-40" />
          <div className="absolute left-4 top-4 flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
          </div>
          {project.tag && (
            <span className="absolute right-4 top-4 rounded-full border border-gold-400/30 bg-gold-400/10 px-3 py-1 font-mono text-[11px] text-gold-300">
              {project.tag}
            </span>
          )}
          <div className="absolute inset-x-6 bottom-6">
            <h3 className="text-3xl font-semibold text-white transition-transform duration-300 group-hover:-translate-y-0.5 sm:text-4xl">
              {project.title}
            </h3>
          </div>
        </div>

        <div className="flex flex-col p-6 sm:p-8">
          <p className="text-base font-medium text-mist-100">
            {project.subtitle}
          </p>
          <p className="mt-3 text-sm leading-relaxed text-mist-400 sm:text-base">
            {project.description}
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-md border border-white/[0.08] bg-white/[0.03] px-2.5 py-1 font-mono text-[11px] text-mist-400"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="mt-6 flex items-center gap-4">
            <a
              href={project.demo}
              className="inline-flex items-center gap-1.5 text-sm font-medium text-violet-300 transition-colors hover:text-violet-200"
            >
              View Live Demo <ExternalLink size={14} aria-hidden="true" />
            </a>
            {!isFreelo && (
              <a
                href={project.github}
                className="inline-flex items-center gap-1.5 text-sm font-medium text-mist-400 transition-colors hover:text-mist-100"
              >
                <i className={`fa-brands fa-github`} aria-hidden="true"></i>{" "}
                View Code
              </a>
            )}
          </div>
        </div>
      </GlassCard>
    </motion.div>
  );
}
