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

import brewhaus from "../assets/screenShots/brewhausScreenshot.png";
import ironforge from "../assets/screenShots/ironforgeScreenshot.png";
import quartier from "../assets/screenShots/quartierScreenshot.png";

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
  location: "Morocco",
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
  { label: "Based in", value: "Morocco", icon: MapPin },
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
    title: "Quartier",
    subtitle: "A refined café experience in the heart of London.",
    tag: "Frontend",
    tags: ["React", "Tailwind CSS", "JavaScript"],
    screenShot: quartier,
    demo: "https://quartier-cafe.vercel.app/",
    github: "https://github.com/said-hadji/quartier-cafe",
  },
  {
    title: "IronForge",
    subtitle: "Premium Gym Landing Page",
    tag: "Frontend",
    tags: ["React", "Tailwind CSS", "JavaScript"],
    screenShot: ironforge,
    demo: "https://ironforge-gym-rose.vercel.app/",
    github: "https://github.com/said-hadji/ironforge-gym",
  },
  {
    title: "Brewhaus",
    subtitle: "Premium Coffee Shop Landing Page",
    tag: "Frontend",
    tags: ["React", "Tailwind CSS", "JavaScript"],
    screenShot: brewhaus,
    demo: "https://brewhaus-iota.vercel.app/",
    github: "https://github.com/said-hadji/Brewhaus",
  },
];

export const SERVICES = [
  {
    icon: Code2,
    title: "Frontend Development",
    description:
      "Building responsive websites and interfaces with React, JavaScript, and Tailwind CSS.",
  },
  {
    icon: Component,
    title: "React Applications",
    description:
      "Creating component-based applications that are organized, reusable, and easy to maintain.",
  },
  {
    icon: Smartphone,
    title: "Responsive Design",
    description:
      "Building layouts that work well across mobile, tablet, and desktop devices.",
  },
  {
    icon: Palette,
    title: "UI Implementation",
    description:
      "Turning Figma designs or ideas into functional, responsive user interfaces.",
  },
  {
    icon: Plug,
    title: "API Integration",
    description:
      "Connecting frontend applications to existing REST APIs to display and manage data.",
  },
  {
    icon: Sparkles,
    title: "Performance-Minded Builds",
    description:
      "Writing readable, reusable code with a focus on maintainability and consistency.",
  },
];

export const PROCESS_STEPS = [
  {
    icon: MessageCircle,
    title: "Let's talk",
    description:
      "We discuss your project, your goals, and whether I'm the right person to build it.",
  },
  {
    icon: ClipboardList,
    title: "Planning",
    description:
      "We define the features, timeline, and what will be delivered before development starts.",
  },
  {
    icon: Code2,
    title: "Build",
    description:
      "I build the frontend, keeping you updated throughout the development process.",
  },
  {
    icon: PackageCheck,
    title: "Review & Handoff",
    description:
      "You review the final result, request any agreed revisions, and receive the completed project.",
  },
];
