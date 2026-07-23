import { Container } from "./ui/Container";
import { SOCIALS, PROFILE } from "../data";

const LINKS = [
  { icon: "fa-brands fa-github", href: SOCIALS.github, label: "GitHub" },
  { icon: "fa-brands fa-linkedin-in", href: SOCIALS.linkedin, label: "LinkedIn" },
  {
    icon: "fa-solid fa-envelope",
    href: `mailto:${SOCIALS.email}`,
    label: "Email",
  },
];

export function Footer() {
  return (
    <footer className="border-t border-white/6 py-10">
      <Container className="flex flex-col items-center justify-between gap-6 sm:flex-row">
        <p className="font-mono text-xs text-mist-600">
          © {new Date().getFullYear()} {PROFILE.name}. Designed &amp; built by
          me, with React &amp; Tailwind CSS.
        </p>
        <div className="flex items-center gap-3">
          {LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              aria-label={link.label}
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/8 text-mist-400 transition-colors hover:border-violet-500/40 hover:text-violet-300"
            >
              <i className={link.icon}></i>
            </a>
          ))}
        </div>
      </Container>
    </footer>
  );
}
