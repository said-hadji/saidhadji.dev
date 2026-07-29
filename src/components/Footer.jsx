import { Container } from "./ui/Container";
import { PROFILE } from "../data";

export function Footer() {
  return (
    <footer className="border-t border-white/6 py-10">
      <Container className="flex justify-center">
        <p className="font-mono text-xs text-mist-600">
          © {new Date().getFullYear()} {PROFILE.name}. Designed &amp; built by
          me, with React &amp; Tailwind CSS.
        </p>
      </Container>
    </footer>
  );
}
