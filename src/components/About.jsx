import { motion } from "framer-motion";
import { Download } from "lucide-react";
import { Container } from "./ui/Container";
import { SectionHeading } from "./ui/SectionHeading";
import { GlassCard } from "./ui/GlassCard";
import { Badge } from "./ui/Badge";
import { Button } from "./ui/Button";
import {
  QUICK_FACTS,
  SKILLS,
  SECONDARY_SKILLS,
  TIMELINE,
  PROFILE,
} from "../data";

// Honest resume content — no invented "Experience" section or job titles.
const CV_TEXT = `${PROFILE.name.toUpperCase()}
Frontend Developer (React)

SUMMARY

Self-taught Frontend Developer based in Morocco, specializing in
React, JavaScript, and Tailwind CSS. I build fast, responsive,
and accessible web interfaces with clean, reusable code.
Currently available for remote freelance opportunities.

SKILLS

Frontend
• React
• JavaScript (ES6+)
• Tailwind CSS
• HTML5
• CSS3
• Responsive Design
• REST APIs
• Framer Motion

Tools
• Git & GitHub
• Vite
• Figma

Also familiar with (personal projects)
• Node.js
• Express.js
• PostgreSQL

PROJECTS

Freelo
Freelancer management dashboard built with React and Tailwind CSS.
Designed and developed independently with reusable components,
responsive layouts, frontend architecture, authentication, and
REST API integration.

SERVICES

• React Frontend Development
• Landing Pages
• Business Websites
• Responsive UI Development
• Figma to React Conversion
• Admin Dashboard Interfaces

CONTACT

Email
saidhadji.dev@gmail.com

GitHub
github.com/said-hadji

Location
Morocco (GMT+1)

Available for Remote Freelance Work
`;

function downloadCV() {
  const blob = new Blob([CV_TEXT], { type: "text/plain;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "Resume.txt";
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
}

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};
const item = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  },
};

export function About() {
  return (
    <section id="about" className="relative py-28 sm:py-36">
      <Container>
        <SectionHeading
          eyebrow="About"
          title="Self-taught. Still learning. Building real things."
          subtitle="A quick look at how I got here, and the tools I reach for most."
        />

        <div className="mt-16 grid grid-cols-1 gap-16 lg:grid-cols-5">
          {/* Bio + CV + Quick facts */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-4 text-mist-400 leading-relaxed"
            >
              <p>
                I&rsquo;m a self-taught frontend developer from Morocco, focused
                on React and Tailwind CSS. I started with HTML and CSS, moved
                into JavaScript, and eventually specialized in React because I
                liked how it let me think in components instead of pages.
              </p>
              <p>
                I don&rsquo;t have a long work history yet — what I have instead
                is working software. Freelo, my main project, is the clearest
                proof of how I design and build interfaces. I&rsquo;m looking
                for freelance frontend work where I can do the same for you:
                take a design or an idea and turn it into something fast,
                responsive, and genuinely well put together.
              </p>
            </motion.div>

            <div className="mt-8">
              <Button variant="secondary" onClick={downloadCV}>
                <Download size={16} aria-hidden="true" /> Download Resume
              </Button>
            </div>

            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-60px" }}
              className="mt-10 grid grid-cols-2 gap-4"
            >
              {QUICK_FACTS.map(({ label, value, icon: Icon }) => (
                <motion.div key={label} variants={item}>
                  <GlassCard className="p-5 transition-colors duration-300 hover:border-violet-500/30">
                    <Icon
                      size={18}
                      className="text-violet-400"
                      aria-hidden="true"
                    />
                    <p className="mt-3 text-base font-semibold leading-snug text-mist-100">
                      {value}
                    </p>
                    <p className="mt-1 text-sm text-mist-500">{label}</p>
                  </GlassCard>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Skills + Timeline */}
          <div className="lg:col-span-3">
            <h3 className="font-mono text-xs tracking-widest text-mist-500">
              SKILLS &amp; TOOLS
            </h3>
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-60px" }}
              className="mt-4 flex flex-wrap gap-3"
            >
              {SKILLS.map((skill) => (
                <motion.div key={skill.name} variants={item}>
                  <Badge icon={skill.icon}>{skill.name}</Badge>
                </motion.div>
              ))}
            </motion.div>

            <div className="mt-5">
              <p className="mb-3 text-xs text-mist-600">
                Also comfortable with, for personal projects only:
              </p>
              <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-60px" }}
                className="flex flex-wrap gap-3"
              >
                {SECONDARY_SKILLS.map((skill) => (
                  <motion.div key={skill.name} variants={item}>
                    <Badge icon={skill.icon} className="opacity-70">
                      {skill.name}
                    </Badge>
                  </motion.div>
                ))}
              </motion.div>
              <p className="mt-3 text-xs text-mist-600">
                I use these for my own projects, but frontend is what I take on
                client work in.
              </p>
            </div>

            <h3 className="mt-14 font-mono text-xs tracking-widest text-mist-500">
              HOW I GOT HERE
            </h3>
            <div className="relative mt-6 space-y-10 border-l border-white/[0.08] pl-8">
              {TIMELINE.map((entry, i) => (
                <motion.div
                  key={entry.title}
                  initial={{ opacity: 0, x: 16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                  className="relative"
                >
                  <span className="absolute -left-[2.32rem] top-1 flex h-4 w-4 items-center justify-center rounded-full border-2 border-ink-950 bg-violet-500 shadow-glow-violet" />
                  <span className="font-mono text-xs text-violet-300">
                    {entry.tag}
                  </span>
                  <h4 className="mt-1 text-lg font-semibold text-mist-100">
                    {entry.title}
                  </h4>
                  <p className="mt-1.5 max-w-xl text-sm leading-relaxed text-mist-400">
                    {entry.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
