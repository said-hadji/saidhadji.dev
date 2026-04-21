import {
  House,
  BookMarked,
  FolderKanban,
  Send,
  Github,
  Twitter,
  Linkedin,
} from "lucide-react";
import { FaReddit } from "react-icons/fa";

export default function MobileNav({ toggleNav, isNavVisible }) {
  const navItems = {
    main: [
      { id: 1, icon: <House />, item: "Home", href: "#home" },
      {
        id: 2,
        icon: <BookMarked />,
        item: "Story",
        href: "#story",
      },
      {
        id: 4,
        icon: <FolderKanban />,
        item: "Projects",
        href: "#projects",
      },
      {
        id: 5,
        icon: <Send />,
        item: "Contact",
        href: "#contact",
      },
    ],
    social: [
      {
        id: 1,
        icon: <Linkedin size={20} />,
        item: "LinkedIn",
        href: "https://www.linkedin.com/in/said-hadji-363793404/",
      },
      {
        id: 2,
        icon: <Github size={20} />,
        item: "GitHub",
        href: "https://github.com/said-hadji",
      },
      {
        id: 3,
        icon: <Twitter size={20} />,
        item: "Twitter",
        href: "https://x.com/said_hadji_dev",
      },
      {
        id: 4,
        icon: <FaReddit size={20} />,
        item: "Reddit",
        href: "https://www.reddit.com/user/said_hadji/",
      },
    ],
  };

  return (
    <div>
      <div
        onClick={toggleNav}
        className={`fixed top-0 left-0 w-full h-screen z-50 ${isNavVisible ? "block" : "hidden"} ${isNavVisible ? "backdrop-blur-2xl" : ""}`}
      ></div>

      <div className="fixed top-0 left-0 z-100 w-full">
        <div
          className={`relative w-full ${isNavVisible ? "h-screen" : "h-15"} duration-300 bg-gray-950`}
        >
          <div className="absolute top-0 left-0 px-2 py-4 w-full bg-gray-950 flex justify-between items-center z-50">
            <h1 className="text-white text-2xl">Said Hadji</h1>

            <button
              onClick={toggleNav}
              className="text-white flex flex-col gap-2 cursor-pointer"
            >
              <div
                className={`w-8 h-px bg-white ${isNavVisible ? "-rotate-45 translate-y-1.5" : "rotate-0"} duration-300`}
              ></div>
              <div
                className={`w-8 h-px bg-white ${isNavVisible ? "rotate-45 -translate-y-0.5" : "rotate-0"} duration-300`}
              ></div>
            </button>
          </div>

          <div
            className={`w-full h-full flex flex-col justify-between items-center gap-14 p-2 ${isNavVisible ? "translate-y-0" : "-translate-y-105"} duration-300`}
          >
            <div></div>
            <div
              style={{ opacity: isNavVisible ? "1" : "1" }}
              className={`flex flex-col items-center gap-6 duration-3000`}
            >
              {navItems.main.map((i) => {
                return (
                  <a key={i.id} href={i.href} className="text-white text-4xl">
                    {i.item}
                  </a>
                );
              })}
            </div>

            <div className="w-full flex justify-between gap-4">
              <div className="flex flex-col gap-4">
                {navItems.social.map((i) => {
                  if (i.id === 1 || i.id === 2) {
                    return (
                      <a
                        key={i.id}
                        href={i.href}
                        className="text-white text-sm flex items-center gap-2"
                      >
                        <span>{i.icon}</span>
                        <span>{i.item}</span>
                      </a>
                    );
                  }
                })}
              </div>

              <div className="flex flex-col gap-4">
                {navItems.social.map((i) => {
                  if (i.id === 3 || i.id === 4) {
                    return (
                      <a
                        key={i.id}
                        href={i.href}
                        className="text-white text-sm flex items-center gap-2"
                      >
                        <span>{i.icon}</span>
                        <span>{i.item}</span>
                      </a>
                    );
                  }
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
