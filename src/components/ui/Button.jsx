import { motion } from 'framer-motion'

const base =
  'group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-xl px-6 py-3.5 text-sm font-semibold transition-colors duration-300 focus-visible:outline-hidden cursor-pointer'

const variants = {
  primary:
    'bg-linear-to-r from-violet-500 to-violet-600 text-white shadow-glow-violet hover:from-violet-400 hover:to-violet-500',
  secondary:
    'border border-white/12 bg-white/3 text-mist-100 backdrop-blur-xl hover:border-white/25 hover:bg-white/[0.07]',
  ghost: 'text-mist-300 hover:text-mist-100',
}

export function Button({ as: As = 'button', variant = 'primary', className = '', children, ...props }) {
  const MotionComp = motion.create ? motion.create(As) : motion(As)

  return (
    <MotionComp
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: 'spring', stiffness: 400, damping: 25 }}
      className={`${base} ${variants[variant]} ${className}`}
      {...props}
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full"
      />
      {children}
    </MotionComp>
  )
}
