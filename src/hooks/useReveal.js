import { useEffect, useRef, useState } from "react";
import { useScreenWidth } from "./useScreenWidth";

export function useReveal() {
  const [visibleProject, setVisibleProject] = useState(null);
  const refs = useRef([]);

  useEffect(() => {
    if (useScreenWidth >= 768) return;
    
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleProject(entry.target.dataset.title);
          }
        });
      },
      { threshold: 0.5 },
    );

    refs.current.forEach((el) => {
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  return { refs, visibleProject };
}
