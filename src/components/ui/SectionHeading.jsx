import { motion } from 'framer-motion'

export function SectionHeading({ eyebrow, title, subtitle, align = 'left' }) {
  const alignment = align === 'center' ? 'items-center text-center mx-auto' : 'items-start text-left'

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`flex flex-col gap-4 max-w-2xl ${alignment}`}
    >
      <span className="font-mono text-xs sm:text-sm tracking-widest text-violet-400/90 flex items-center gap-2">
        <span className="text-gold-400">//</span> {eyebrow}
      </span>
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-mist-100 text-balance">
        {title}
      </h2>
      {subtitle && (
        <p className="text-mist-400 text-base sm:text-lg leading-relaxed text-balance">
          {subtitle}
        </p>
      )}
    </motion.div>
  )
}
