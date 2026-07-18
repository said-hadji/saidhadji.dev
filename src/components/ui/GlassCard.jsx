export function GlassCard({ className = '', children, as: As = 'div', ...props }) {
  return (
    <As
      className={`relative rounded-2xl border border-white/[0.08] bg-white/[0.03] backdrop-blur-xl shadow-card ${className}`}
      {...props}
    >
      {children}
    </As>
  )
}
