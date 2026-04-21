export default function MobileNav({ toggleNav, isNavVisible }) {
  return (
    <div>
      <div
        onClick={toggleNav}
        className={`fixed top-0 left-0 w-full h-screen z-50 ${isNavVisible ? "block" : "hidden"} ${isNavVisible ? "backdrop-blur-2xl" : ""}`}
      ></div>

      <div className="fixed top-0 left-0 z-100 w-full">
        <div
          className={`relative w-full ${isNavVisible ? "h-50" : "h-15"} duration-300 bg-gray-950 flex justify-between items-center`}
        >
          <h1 className="absolute top-0 left-0 mx-2 my-4 text-white text-2xl">
            Said Hadji
          </h1>

          <button
            onClick={toggleNav}
            className="absolute top-0 right-0 mx-2 my-6 text-white flex flex-col gap-2 cursor-pointer"
          >
            <div
              className={`w-8 h-px bg-white ${isNavVisible ? "-rotate-45 translate-y-1.5" : "rotate-0"} duration-300`}
            ></div>
            <div
              className={`w-8 h-px bg-white ${isNavVisible ? "rotate-45 -translate-y-0.5" : "rotate-0"} duration-300`}
            ></div>
          </button>
        </div>
      </div>
    </div>
  );
}
