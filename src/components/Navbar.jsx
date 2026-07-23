import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Terminal } from "lucide-react";
import { NAV_ITEMS, PROFILE } from "../data";
import { useActiveSection } from "../hooks/useActiveSection";
import { useScrolled } from "../hooks/useScrolled";
import { Container } from "./ui/Container";
import { Button } from "./ui/Button";

export function Navbar({ setIsStartProject }) {
  const [open, setOpen] = useState(false);
  const scrolled = useScrolled(12);
  const activeId = useActiveSection(NAV_ITEMS.map((n) => n.id));

  const scrollToSection = (id) => {
    setOpen(false);
    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleStartProject = () => {
    if (activeId !== "contact") {
      setIsStartProject(true);
      setOpen(false);
    } else {
      scrollToSection("contact");
    }
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-white/8 bg-ink-950/70 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <Container className="flex h-16 items-center justify-between sm:h-20">
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("home");
          }}
          className="flex items-center gap-2 font-mono text-sm font-semibold tracking-tight text-mist-100"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-white/3">
            <Terminal
              size={16}
              className="text-violet-400"
              aria-hidden="true"
            />
          </span>
          {PROFILE.name.split(" ")[0].toLowerCase()}
          <span className="text-violet-400">.</span>dev
        </a>

        <nav className="hidden md:block" aria-label="Primary">
          <ul className="flex items-center gap-1 rounded-full border border-white/8 bg-white/2 p-1">
            {NAV_ITEMS.map((item) => {
              const isActive = activeId === item.id;
              return (
                <li key={item.id} className="relative">
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className={`relative z-10 rounded-full px-4 py-2 text-sm font-medium transition-colors duration-300 cursor-pointer ${
                      isActive
                        ? "text-ink-950"
                        : "text-mist-400 hover:text-mist-100"
                    }`}
                    aria-current={isActive ? "true" : undefined}
                  >
                    {item.label}
                  </button>
                  {isActive && (
                    <motion.span
                      layoutId="nav-active-pill"
                      className="absolute inset-0 rounded-full bg-linear-to-r from-violet-400 to-violet-300"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                    />
                  )}
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="hidden md:block">
          <Button
            variant="secondary"
            className="py-2.5 text-sm"
            onClick={handleStartProject}
          >
            Start a Project
          </Button>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-mist-100 md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </Container>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            className="overflow-hidden border-t border-white/8 bg-ink-950/95 backdrop-blur-xl md:hidden"
            aria-label="Mobile"
          >
            <Container className="flex flex-col gap-1 py-4">
              {NAV_ITEMS.map((item, i) => (
                <motion.button
                  key={item.id}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => scrollToSection(item.id)}
                  className={`rounded-lg px-3 py-3 text-left text-base font-medium transition-colors ${
                    activeId === item.id
                      ? "bg-violet-500/10 text-violet-300"
                      : "text-mist-300 hover:bg-white/3"
                  }`}
                >
                  {item.label}
                </motion.button>
              ))}
              <Button
                variant="primary"
                className="mt-2 justify-center"
                onClick={handleStartProject}
              >
                Start a Project
              </Button>
            </Container>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
