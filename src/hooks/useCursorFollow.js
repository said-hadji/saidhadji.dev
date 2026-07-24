import { useEffect, useRef, useState } from "react";
import { useIsDesktop } from "./useIsDesktop";

const clamp = (value, min, max) => Math.min(Math.max(value, min), max);

export function useCursorFollow({
  PREVIEW_WIDTH,
  PREVIEW_HEIGHT,
  CURSOR_OFFSET,
  EDGE_PADDING,
  LERP_SPEED,
}) {
  const isDesktop = useIsDesktop();

  const [isHovering, setIsHovering] = useState(false);
  console.log(isHovering);
  const [mounted, setMounted] = useState(false);

  const wrapperRef = useRef(null);

  const target = useRef({ x: 0, y: 0 });
  const current = useRef({ x: 0, y: 0 });
  const hasPositioned = useRef(false);

  const animationFrame = useRef();

  useEffect(() => {
    if (!isDesktop && !isHovering) return;
    setMounted(true);
  }, [isDesktop, isHovering]);

  useEffect(() => {
    if (!isDesktop && !isHovering) return;
    const animate = () => {
      current.current.x += (target.current.x - current.current.x) * LERP_SPEED;
      current.current.y += (target.current.y - current.current.y) * LERP_SPEED;

      if (wrapperRef.current) {
        wrapperRef.current.style.transform = `translate3d(${current.current.x}px, ${current.current.y}px, 0)`;
      }

      animationFrame.current = requestAnimationFrame(animate);
    };

    animate();

    return () => cancelAnimationFrame(animationFrame.current);
  }, [isDesktop, isHovering, LERP_SPEED]);

  const getClampedPosition = (clientX, clientY) => {
    if (!isDesktop && !isHovering) return;
    let x = clientX + CURSOR_OFFSET;
    let y = clientY + CURSOR_OFFSET;

    if (x + PREVIEW_WIDTH > window.innerWidth - EDGE_PADDING) {
      x = clientX - PREVIEW_WIDTH - CURSOR_OFFSET;
    }
    if (y + PREVIEW_HEIGHT > window.innerHeight - EDGE_PADDING) {
      y = clientY - PREVIEW_HEIGHT - CURSOR_OFFSET;
    }

    x = clamp(
      x,
      EDGE_PADDING,
      window.innerWidth - PREVIEW_WIDTH - EDGE_PADDING,
    );
    y = clamp(
      y,
      EDGE_PADDING,
      window.innerHeight - PREVIEW_HEIGHT - EDGE_PADDING,
    );

    return { x, y };
  };

  const handleMouseMove = (e) => {
    if (!isDesktop && !isHovering) return;
    setIsHovering(true);

    const { x, y } = getClampedPosition(e.clientX, e.clientY);
    target.current.x = x;
    target.current.y = y;

    if (!hasPositioned.current) {
      current.current.x = x;
      current.current.y = y;
      hasPositioned.current = true;
    }
  };

  const handleMouseLeave = () => {
    if (!isDesktop && !isHovering) return;
    setIsHovering(false);
    hasPositioned.current = false;
  };

  return {
    wrapperRef,
    isHovering,
    mounted,
    handleMouseMove,
    handleMouseLeave,
  };
}
