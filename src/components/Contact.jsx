import { useState } from "react";
import { ArrowRight, ArrowLeft } from "lucide-react";

export default function Contact() {
  const [id, setID] = useState(1);
  const [formData, setformData] = useState({
    name: "",
    email: "",
    message: "",
  });

  function putFormData(e) {
    setformData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }

  const array = [
    {
      id: 1,
      element: (
        <input
          value={formData.name}
          onChange={(e) => {
            putFormData(e);
          }}
          name="name"
          type="text"
          placeholder="Name"
          className="w-full border-b border-gray-950 py-3 outline-none text-xl md:text-2xl lg:text-3xl"
        />
      ),
    },
    {
      id: 2,
      element: (
        <input
          onChange={(e) => {
            putFormData(e);
          }}
          value={formData.email}
          name="email"
          type="email"
          placeholder="Email"
          className="w-full border-b border-gray-950 py-3 outline-none text-xl md:text-2xl lg:text-3xl"
        />
      ),
    },
    {
      id: 3,
      element: (
        <textarea
          onChange={(e) => {
            putFormData(e);
          }}
          value={formData.message}
          name="message"
          type="text"
          placeholder="Message"
          className="w-full h-50 resize-none border-b border-gray-950 py-3 outline-none text-xl md:text-2xl lg:text-3xl"
        />
      ),
    },
    {
      id: 4,
      element: (
        <button
          className="relative w-full py-10 bg-gray-950 cursor-pointer overflow-hidden group"
          style={{ boxShadow: "0px 0px 20px rgba(0,0,0,0.3)" }}
        >
          <h1 className="text-white group-hover:text-gray-950 text-lg font-bold absolute top-[50%] -translate-y-1/2 left-[50%] -translate-x-1/2 z-40">
            Send
          </h1>
          <div className="absolute top-0 left-0 w-full py-10 bg-white text-gray-950 translate-y-20 group-hover:translate-y-0 duration-200 pointer-events-none"></div>
        </button>
      ),
    },
  ];

  const current = array.find((el) => el.id === id);

  const styles = {
    1: "w-6.5 md:w-12 xl:w-15.5",
    2: "w-11.5 md:w-22 xl:w-26",
    3: "w-16.5 md:w-31.5 xl:w-38",
    4: "w-27 md:w-50 xl:w-62",
  };

  function ArrowRightEl() {
    return (
      <div className="flex flex-col items-end">
        <div className="w-6 h-0.5 bg-white rotate-45 lg:rotate-0 -translate-y-1.5 translate-x-[0.2rem] lg:translate-y-0.5 lg:group-hover:-translate-y-1.5 lg:group-hover:translate-x-[0.2rem] lg:group-hover:rotate-45 duration-500"></div>
        <div className="w-10 bg-white h-0.5"></div>
        <div className="w-6 h-0.5 bg-white -rotate-45 lg:rotate-0 translate-y-1.5 lg:-translate-y-0.5 translate-x-[0.2rem] lg:group-hover:translate-y-1.5 lg:group-hover:translate-x-[0.2rem] lg:group-hover:-rotate-45 duration-500"></div>
      </div>
    );
  }

  return (
    <div id="contact" className="w-full xl:h-screen bg-gray-100 px-2 sm:px-10 py-32 flex flex-col xl:flex-row gap-20 xl:gap-0">
      <div className="flex-1 h-full flex flex-col justify-between gap-10 lg:gap-0">
        <h1 className="text-4xl md:text-7xl xl:text-8xl font-bold flex gap-3">
          Let's Get In{" "}
          <div className="relative">
            <div className="absolute top-0 left-0 z-40">
              <span className={`${id >= 1 ? "text-white" : ""} duration-500`}>
                T
              </span>
              <span className={`${id >= 2 ? "text-white" : ""} duration-500`}>
                o
              </span>
              <span className={`${id >= 3 ? "text-white" : ""} duration-500`}>
                u
              </span>
              <span className={`${id >= 4 ? "text-white" : ""} duration-500`}>
                c
              </span>
              <span className={`${id >= 4 ? "text-white" : ""} duration-500`}>
                h
              </span>
            </div>
            <div
              className={`${styles[id]} h-full bg-gray-950 absolute top-0 left-0 duration-500`}
            ></div>
          </div>
        </h1>
        <form key={id} className="w-full md:w-150 h-50 flex flex-col justify-center">
          {current?.element}
        </form>
        <div className="flex gap-4">
          <button
            onClick={() => {
              setID((prev) => Math.max(prev - 1, 1));
            }}
            type="button"
            className="relative px-14 py-8 bg-gray-950 overflow-hidden group cursor-pointer"
          >
            <ArrowLeft className="text-white group-hover:text-gray-950 absolute top-[50%] -translate-y-1/2 left-[50%] -translate-x-1/2 z-40 pointer-events-none" />
            <div className="absolute top-0 left-0 px-14 py-10 bg-white text-gray-950 translate-y-16 group-hover:translate-y-0 duration-200 pointer-events-none"></div>
          </button>

          <button
            onClick={() => {
              if (id === 1 && !formData.name) return;
              if (id === 2 && !formData.email) return;
              if (id === 3 && !formData.message) return;
              setID((prev) => Math.min(prev + 1, 4));
            }}
            type="button"
            className="relative px-14 py-8 bg-gray-950 overflow-hidden group cursor-pointer"
          >
            <ArrowRight className="text-white group-hover:text-gray-950 absolute top-[50%] -translate-y-1/2 left-[50%] -translate-x-1/2 z-40 pointer-events-none" />
            <div className="absolute top-0 left-0 px-14 py-10 bg-white text-gray-950 translate-y-16 group-hover:translate-y-0 duration-200 pointer-events-none"></div>
          </button>
        </div>
      </div>

      <div className="flex-1 h-full flex xl:items-end xl:justify-end">
        <div className="flex flex-col gap-4">
          <a
            href="#"
            className="text-4xl px-10 py-5 bg-gray-950 text-white flex items-center justify-between gap-15 group"
          >
            <span>Email</span>
            {ArrowRightEl()}
          </a>

          <a href="#" className="text-4xl px-10 py-5 bg-gray-950 text-white flex items-center justify-between gap-15 group">
            <span>Whatssap</span>
            {ArrowRightEl()}
          </a>
        </div>
      </div>
    </div>
  );
}
