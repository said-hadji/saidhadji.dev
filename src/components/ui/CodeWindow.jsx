import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const LINES = [
  [
    { t: "const ", c: "text-violet-400" },
    { t: "developer", c: "text-mist-100" },
    { t: " = {", c: "text-mist-400" },
  ],
  [
    { t: "  name", c: "text-gold-300" },
    { t: ": '", c: "text-mist-400" },
    { t: "Said Hadji", c: "text-emerald-300" },
    { t: "',", c: "text-mist-400" },
  ],
  [
    { t: "  role", c: "text-gold-300" },
    { t: ": '", c: "text-mist-400" },
    { t: "Frontend Developer", c: "text-emerald-300" },
    { t: "',", c: "text-mist-400" },
  ],
  [
    { t: "  based", c: "text-gold-300" },
    { t: ": '", c: "text-mist-400" },
    { t: "Morocco", c: "text-emerald-300" },
    { t: "',", c: "text-mist-400" },
  ],
  [
    { t: "  stack", c: "text-gold-300" },
    { t: ": [", c: "text-mist-400" },
    { t: "'React'", c: "text-emerald-300" },
    { t: ", ", c: "text-mist-400" },
    { t: "'Tailwind CSS'", c: "text-emerald-300" },
    { t: ", ", c: "text-mist-400" },
    { t: "'JavaScript'", c: "text-emerald-300" },
    { t: "],", c: "text-mist-400" },
  ],
  [
    { t: "  focus", c: "text-gold-300" },
    { t: ": ", c: "text-mist-400" },
    { t: "clean UI", c: "text-violet-300" },
    { t: " + ", c: "text-mist-400" },
    { t: "real projects", c: "text-violet-300" },
    { t: ",", c: "text-mist-400" },
  ],
  [
    { t: "  available", c: "text-gold-300" },
    { t: ": ", c: "text-mist-400" },
    { t: "true", c: "text-cyan-300" },
    { t: ",", c: "text-mist-400" },
  ],
  [{ t: "};", c: "text-mist-400" }],
];

export function CodeWindow({ className = "" }) {
  const [visibleLines, setVisibleLines] = useState(0);
  const [visibleChars, setVisibleChars] = useState(0);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (prefersReduced) {
      setVisibleLines(LINES.length);
      return;
    }

    let line = 0;
    let char = 0;
    let cancelled = false;

    const step = () => {
      if (cancelled) return;
      const currentLineLength = LINES[line].reduce(
        (sum, seg) => sum + seg.t.length,
        0,
      );

      if (char < currentLineLength) {
        char += 1;
        setVisibleChars(char);
        setTimeout(step, 14 + Math.random() * 18);
      } else if (line < LINES.length - 1) {
        line += 1;
        char = 0;
        setVisibleLines(line);
        setVisibleChars(0);
        setTimeout(step, 120);
      } else {
        setVisibleLines(LINES.length);
      }
    };

    const start = setTimeout(step, 500);
    return () => {
      cancelled = true;
      clearTimeout(start);
    };
  }, []);

  const renderLine = (segments, charsAllowed) => {
    let remaining = charsAllowed;
    return segments.map((seg, i) => {
      const slice = seg.t.slice(0, Math.max(0, remaining));
      remaining -= seg.t.length;
      return (
        <span key={i} className={seg.c}>
          {slice}
        </span>
      );
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, rotateX: 6 }}
      animate={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
      className={`w-full max-w-md rounded-2xl border border-white/8 bg-ink-900/80 shadow-card backdrop-blur-xl ${className}`}
      style={{ perspective: 1000 }}
    >
      <div className="flex items-center gap-2 border-b border-white/6 px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
        <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
        <span className="h-3 w-3 rounded-full bg-[#28c840]" />
        <span className="ml-3 font-mono text-xs text-mist-600">
          developer.js
        </span>
      </div>
      <div className="px-5 py-5 font-mono text-[13px] leading-6 sm:text-sm">
        {LINES.map((segments, i) => (
          <div key={i} className="flex gap-3">
            <span className="w-4 shrink-0 select-none text-right text-mist-600/70">
              {i + 1}
            </span>
            <span className="whitespace-pre-wrap wrap-break-word">
              {i < visibleLines
                ? renderLine(segments, Infinity)
                : i === visibleLines
                  ? renderLine(segments, visibleChars)
                  : null}
              {i === visibleLines && (
                <span className="inline-block w-0.5 h-4 -mb-0.5 bg-violet-400 animate-blink" />
              )}
            </span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
