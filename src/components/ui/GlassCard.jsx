export function GlassCard({ className = '', children, as: As = 'div', ...props }) {
  return (
    <As
      className={`relative ${className}`}
      {...props}
    >
      {children}
    </As>
  )
}
