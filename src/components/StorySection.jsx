import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function StorySection() {
  const titleRef = useRef(null);
  const paragraphRef = useRef(null);

  const paragraphText = `I didn’t follow a perfect path — I built mine. It started in high school with HTML and CSS, learning from YouTube, practicing every small detail, creating simple sections that no one would ever see. Then I stopped. Time passed. Life moved. But something stayed. After getting my baccalaureate, I came back — not motivated, but disciplined. I started learning JavaScript alone, spending hours every day, pushing through confusion, errors, and doubt. No shortcuts. No excuses. Just progress. Project by project, line by line, I rebuilt myself. And today, with React.js, I’m still on that same path — not chasing perfection, but chasing growth.`;

  useEffect(() => {
    gsap.fromTo(
      titleRef.current,
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 80%",
          end: "top 20%",
          scrub: true,
        },
      },
    );

    const words = paragraphRef.current.querySelectorAll(".word");

    gsap.fromTo(
      words,
      { opacity: 0 },
      {
        opacity: 1,
        stagger: 0.05,
        ease: "power2.out",
        scrollTrigger: {
          trigger: paragraphRef.current,
          start: "top 80%",
          end: "bottom 20%",
          scrub: true,
          invalidateOnRefresh: true,
        },
      },
    );
  }, []);

  return (
    <div id="story" className="w-full bg-gray-100 py-28">
      <div className="w-full flex flex-col justify-between gap-28 px-2 sm:px-10">
        <h1
          ref={titleRef}
          className="text-6xl lg:text-9xl 2xl:text-[10rem] font-extrabold uppercase"
        >
          My Story
        </h1>
        <p
          ref={paragraphRef}
          className="mt-6 max-w-2xl sm:text-lg text-gray-700 leading-relaxed"
        >
          {paragraphText.split(" ").map((word, i) => (
            <span key={i} className="word inline-block opacity-0 mr-2">
              {word}
            </span>
          ))}
        </p>
      </div>
    </div>
  );
}
