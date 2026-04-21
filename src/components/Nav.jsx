import {
  House,
  BookMarked,
  FolderKanban,
  Send,
  Github,
  Twitter,
  Linkedin,
} from "lucide-react";

export default function Nav({ toggleNav, isNavVisible }) {
  const navItems = {
    main: [
      { id: 1, icon: <House />, char: ["H", "o", "m", "e"], href: "#home" },
      {
        id: 2,
        icon: <BookMarked />,
        char: ["S", "t", "o", "r", "y"],
        href: "#story",
      },
      {
        id: 4,
        icon: <FolderKanban />,
        char: ["P", "r", "o", "j", "e", "c", "t", "s"],
        href: "#projects",
      },
      {
        id: 5,
        icon: <Send />,
        char: ["C", "o", "n", "t", "a", "c", "t"],
        href: "#contact",
      },
    ],
    social: [
      {
        id: 1,
        icon: <Linkedin />,
        char: ["L", "i", "n", "k", "e", "d", "i", "n"],
        href: "",
      },
      {
        id: 2,
        icon: <Github />,
        char: ["G", "i", "t", "h", "u", "b"],
        href: "",
      },
      {
        id: 3,
        icon: <Twitter />,
        char: ["T", "w", "i", "t", "t", "e", "r"],
        href: "",
      },
    ],
  };

  function renderNavItems(items) {
    return items.map((item) => {
      return (
        <div
          key={item.id}
          style={{
            transform: `translateY(${isNavVisible ? 0 : 400 * item.id}px)`,
          }}
          className={`h-7 flex flex-col overflow-hidden group ${isNavVisible ? "duration-1000" : "duration-75"}`}
        >
          <a href={item.href} className="text-white flex gap-3">
            <span>{item.icon}</span>
            <div className="flex">
              {item.char.map((c, j) => {
                return (
                  <span
                    key={j}
                    style={{
                      transitionDelay: `${20 * j}ms`,
                    }}
                    className="text-white text-xl block group-hover:-translate-y-8 duration-500"
                  >
                    {c}
                  </span>
                );
              })}
            </div>
          </a>

          <a href={item.href} className="text-white flex gap-3">
            <span>{item.icon}</span>
            <div className="flex">
              {item.char.map((c, j) => {
                return (
                  <span
                    key={j}
                    style={{
                      transitionDelay: `${20 * j}ms`,
                    }}
                    className="text-white text-xl block group-hover:-translate-y-[1.7rem] duration-500"
                  >
                    {c}
                  </span>
                );
              })}
            </div>
          </a>
        </div>
      );
    });
  }

  return (
    <>
      <div
        onClick={toggleNav}
        className={`fixed top-0 left-0 w-full h-screen z-50 ${isNavVisible ? "block" : "hidden"} ${isNavVisible ? "backdrop-blur-2xl" : ""}`}
      ></div>
      <div className="fixed top-0 left-0 z-100 w-full flex justify-between">
        <div
          style={{
            clipPath: isNavVisible
              ? "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"
              : "polygon(0% 0%, 100% 0%, 60% 100%, 0% 100%)",
          }}
          className={`fixed top-0 left-0 w-70 ${isNavVisible ? "h-70" : "h-24"} transition-all duration-300 bg-gray-950 px-10 py-8 flex justify-center items-end`}
        >
          <h1 className="absolute top-0 left-0 m-10 my-9 text-xl text-white select-none">
            SAID HADJI
          </h1>

          <div
            className={`flex flex-col gap-6 ${isNavVisible ? "opacity-100 duration-1000" : "opacity-0"}`}
          >
            {renderNavItems(navItems.social)}
          </div>
        </div>

        <div className="flex-1 h-6 p-4 bg-gray-950"></div>

        <div
          style={{
            clipPath: isNavVisible
              ? "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"
              : "polygon(3% 0%, 100% 0%, 100% 100%, 42% 100%)",
          }}
          className={`fixed top-0 right-0 w-70 ${isNavVisible ? "h-82" : "h-24"} transition-all duration-300 bg-gray-950 px-10 py-8 flex justify-center items-end`}
        >
          <button
            onClick={toggleNav}
            className="absolute top-0 right-0 mx-10 my-11 text-white flex flex-col gap-2 cursor-pointer"
          >
            <div
              className={`w-8 h-px bg-white ${isNavVisible ? "-rotate-45 translate-y-1.5" : "rotate-0"} duration-300`}
            ></div>
            <div
              className={`w-8 h-px bg-white ${isNavVisible ? "rotate-45 -translate-y-0.5" : "rotate-0"} duration-300`}
            ></div>
          </button>
          <div
            className={`flex flex-col gap-6 ${isNavVisible ? "opacity-100 duration-1000" : "opacity-0"}`}
          >
            {renderNavItems(navItems.main)}
          </div>
        </div>
      </div>
    </>
  );
}
