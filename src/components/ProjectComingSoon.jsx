import { motion } from "framer-motion";
import { Hammer } from "lucide-react";
import { SOCIALS } from "../data";

export function ProjectComingSoon() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="flex h-full flex-col items-center justify-center text-center"
    >
      <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/3">
        <Hammer size={18} className="text-violet-400" aria-hidden="true" />
      </span>
      <h3 className="mt-5 text-lg font-semibold text-mist-100">
        More projects coming soon
      </h3>
      <p className="mt-2 max-w-xs text-sm leading-relaxed text-mist-500">
        I'm constantly learning and building new projects. In the meantime, you
        can explore my latest work on GitHub.
      </p>
      <a
        href={SOCIALS.github}
        className="mt-5 flex items-center gap-1.5 text-sm font-medium text-violet-300 hover:underline hover:underline-offset-4 transition-colors hover:text-violet-200"
      >
        <i className={`fa-brands fa-github`} aria-hidden="true"></i> Visit
        GitHub
      </a>
    </motion.div>
  );
}
