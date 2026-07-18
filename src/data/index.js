import {
  Component,
  Braces,
  Palette,
  Layers,
  Sparkles,
  GitBranch,
  Plug,
  Smartphone,
  Cpu,
  Boxes,
  Database,
  MapPin,
  Clock,
  CircleCheck,
  MessageCircle,
  ClipboardList,
  Code2,
  PackageCheck,
} from "lucide-react";

// ---- Replace these with your real details ----
export const PROFILE = {
  name: "Said Hadji",
  role: "Frontend Developer",
  location: "Morocco",
  timezone: "GMT+1",
};

export const NAV_ITEMS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "work", label: "Work" },
  { id: "services", label: "Services" },
  { id: "contact", label: "Contact" },
];

export const SOCIALS = {
  email: "saidhadji.dev@gmail.com",
  github: "https://github.com/said-hadji",
  linkedin: "https://www.linkedin.com/in/said-hadji-363793404",
  location: "Morocco (GMT+1)",
};

// Core stack you actually ship client work with.
export const SKILLS = [
  { name: "React", icon: Component },
  { name: "JavaScript", icon: Braces },
  { name: "Tailwind CSS", icon: Palette },
  { name: "HTML & CSS", icon: Layers },
  { name: "Git & GitHub", icon: GitBranch },
  { name: "REST APIs", icon: Plug },
  { name: "Responsive Design", icon: Smartphone },
];

// Shown separately and labeled honestly — not part of your service offering.
export const SECONDARY_SKILLS = [
  { name: "Node.js", icon: Cpu },
  { name: "Express", icon: Boxes },
  { name: "PostgreSQL", icon: Database },
];

// Honest "quick facts" — replaces vanity stats you can't back up yet.
export const QUICK_FACTS = [
  { label: "Based in", value: "Morocco (GMT+1)", icon: MapPin },
  { label: "Core stack", value: "React · Tailwind CSS", icon: Layers },
  {
    label: "Availability",
    value: "Open for freelance work",
    icon: CircleCheck,
  },
  { label: "Typical response time", value: "Within 24–48 hours", icon: Clock },
];

// A real, dateless learning path — no invented job titles.
export const TIMELINE = [
  {
    tag: "Fundamentals",
    title: "Started with HTML & CSS",
    description:
      "Learned the fundamentals by building small static pages, one from-scratch project at a time.",
  },
  {
    tag: "JavaScript",
    title: "Learned JavaScript",
    description:
      "Moved from copy-pasted tutorials into writing my own logic, DOM manipulation, and small tools.",
  },
  {
    tag: "React",
    title: "Specialized in React",
    description:
      "Started thinking in components and state instead of pages, and haven\u2019t gone back since.",
  },
  {
    tag: "Freelo",
    title: "Built Freelo",
    description:
      "Designed and developed my most complete project yet: a real dashboard solving a real problem.",
  },
  {
    tag: "Today",
    title: "Freelancing & still learning",
    description:
      "Focused on freelance frontend work, and on getting better with every project.",
  },
];

// Your one real, flagship project. Add more real projects here as you build them —
// avoid filling this with placeholders; one honest case study beats several fake ones.
export const PROJECTS = [
  {
    title: "Brewhaus",
    subtitle: "Premium Coffee Shop Landing Page",
    tag: "Frontend",
    tags: ["React", "Tailwind CSS", "JavaScript"],
    description:
      "A premium coffee shop landing page built with React and Tailwind CSS, featuring reusable components, responsive layouts, interactive menu filtering, and modern UI/UX design.",
    gradient: "from-yellow-100/20 via-stone-800 to-neutral-950",
    demo: "https://brewhaus-iota.vercel.app/",
    github: "https://github.com/said-hadji/Brewhaus"
  },
];

export const SERVICES = [
  {
    icon: Code2,
    title: "Frontend Development",
    description:
      "Building clean, responsive interfaces with React and Tailwind CSS — from a Figma file or a rough idea.",
  },
  {
    icon: Component,
    title: "React Applications",
    description:
      "Component-based apps that are easy to read, extend, and hand off to another developer.",
  },
  {
    icon: Smartphone,
    title: "Responsive Design",
    description:
      "Interfaces that work properly on any screen — not just a resized version of the desktop layout.",
  },
  {
    icon: Palette,
    title: "UI Implementation (Figma \u2192 Code)",
    description:
      "Turning your designs into interfaces that match, pixel by pixel.",
  },
  {
    icon: Sparkles,
    title: "Performance-Minded Builds",
    description:
      "Writing code that loads quickly and doesn't get in the user's way.",
  },
  {
    icon: Plug,
    title: "API Integration",
    description:
      "Connecting your frontend to existing REST APIs — fetching, displaying, and managing data cleanly.",
  },
];

export const PROCESS_STEPS = [
  {
    icon: MessageCircle,
    title: "Quick intro",
    description: "We talk about what you need and whether I'm the right fit.",
  },
  {
    icon: ClipboardList,
    title: "Plan & scope",
    description:
      "I break the work into clear tasks, so you know what you\u2019re getting and when.",
  },
  {
    icon: Code2,
    title: "Build",
    description:
      "I develop the interface in React, sharing progress as I go — no long silences.",
  },
  {
    icon: PackageCheck,
    title: "Review & handoff",
    description:
      "You review the work, I make adjustments, and you get clean, organized code.",
  },
];
