# Developer Portfolio

A premium, dark-themed developer portfolio built with **React**, **Tailwind CSS**, **Framer Motion**, and **Lucide React**.

## Stack

- React 18 + Vite
- Tailwind CSS (custom design tokens: `ink`, `mist`, `violet`, `gold`)
- Framer Motion (scroll reveals, stagger, layout animation, mobile menu)
- Lucide React (icons)

## Getting started

```bash
npm install
npm run dev
```

Then open the URL Vite prints (usually `http://localhost:5173`).

To build for production:

```bash
npm run build
npm run preview
```

## Project structure

```
src/
  components/
    ui/                  reusable primitives (Button, Badge, GlassCard, CodeWindow, ...)
    Navbar.jsx
    Hero.jsx
    About.jsx
    Projects.jsx         "Work" section — your real project(s)
    ProjectCard.jsx
    ProjectComingSoon.jsx placeholder card, not a fake project
    Services.jsx          "What I Can Help With"
    Process.jsx           "How We'd Work Together"
    Contact.jsx
    Footer.jsx
  data/index.js    all portfolio content (profile, skills, projects, services, process, timeline)
  hooks/           useActiveSection (scroll-spy), useScrolled
  App.jsx
  main.jsx
  index.css
```

Section order on the page: **Hero → Work → About → Services → Process → Contact.**
Work comes before About deliberately — clients decide "can this person do the job"
from what you've built, before they read your bio.

## Customizing — do this first

1. Open `src/data/index.js` and fill in `PROFILE` (your real name) and `SOCIALS`
   (your real email, GitHub, LinkedIn).
2. Update the `PROJECTS` array with your real project(s). **Don't add placeholder
   or fictional projects** — the `ProjectComingSoon` card is there specifically so
   the Work section doesn't look empty while you only have one or two real pieces.
3. Check `SKILLS` and `SECONDARY_SKILLS` match what you're actually comfortable
   with. `SECONDARY_SKILLS` (Node/Express/Postgres) is deliberately shown smaller
   and labeled "personal projects only" — don't move these into your main skills
   or into the Services list unless you start offering backend work.
4. `QUICK_FACTS` in About replaces a vanity-metrics stat grid with things you can
   actually state as fact (location, stack, availability, response time). Keep
   these true and update the response time if it changes.

## Other customizing notes

- **Colors** — the palette is defined in `tailwind.config.js` under `theme.extend.colors`
  (`ink` = backgrounds, `mist` = text, `violet` = primary accent). Gold is used in
  exactly one place on purpose — the "Personal Project" tag on your featured
  project card — so it reads as a highlight, not a general luxury signal. Avoid
  spreading gold to other components.
- **Resume download** — `About.jsx` generates a plain-text resume on the fly
  (`CV_TEXT` constant), deliberately structured as *Summary → Skills → Projects*
  with no invented "Experience" section. Swap it for a real PDF later by
  replacing `downloadCV()` with a link to a file in `/public`.
- **Adding more projects** — once you have 4-6 real projects, it's reasonable to
  bring back a technology filter bar (the previous version of this codebase had
  one). Below that count, a filter just draws attention to how little there is
  to filter.

## Accessibility notes

- Semantic landmarks (`header`, `nav`, `main`, `section`, `footer`) throughout.
- Visible focus rings via `:focus-visible` in `index.css`.
- A "Skip to content" link appears on first Tab press.
- `prefers-reduced-motion` is respected globally (animations collapse to near-instant)
  and specifically in the hero's typing effect.
- Interactive icon-only buttons all have `aria-label`s.
