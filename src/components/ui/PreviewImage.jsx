export function PreviewImage({
  project,
  wrapperRef,
  PREVIEW_WIDTH,
  PREVIEW_HEIGHT,
  isHovering,
}) {
  return (
    <div
      ref={wrapperRef}
      className="fixed top-0 left-0 z-9999 pointer-events-none"
      style={{ willChange: "transform" }}
    >
      <img
        src={project.screenShot}
        alt={`${project.title} preview`}
        style={{ width: PREVIEW_WIDTH, height: PREVIEW_HEIGHT }}
        className={`
          block
          origin-top-left
          rounded-3xl
          object-cover
          shadow-2xl
          shadow-[#12071f]
          ring-1
          ring-white/10
          transition-[scale,opacity]
          ease-out
          ${isHovering ? "scale-100 opacity-100 duration-300" : "scale-[0.1] opacity-0"}
        `}
      />
    </div>
  );
}
