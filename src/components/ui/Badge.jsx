export function Badge({ icon: Icon, children, className = '' }) {
  return (
    <span
      className={`group inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.03] px-4 py-2 text-sm text-mist-300 transition-all duration-300 hover:border-violet-500/40 hover:bg-violet-500/[0.07] hover:text-mist-100 ${className}`}
    >
      {Icon && (
        <Icon
          size={15}
          className="text-violet-400 transition-transform duration-300 group-hover:scale-110"
          aria-hidden="true"
        />
      )}
      {children}
    </span>
  )
}
