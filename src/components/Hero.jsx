import { useRef } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Mail, ChevronDown } from 'lucide-react'
import { Container } from './ui/Container'
import { Button } from './ui/Button'
import { CodeWindow } from './ui/CodeWindow'
import { FloatingParticles } from './ui/FloatingParticles'

export function Hero() {
  const heroRef = useRef(null)

  const handleMouseMove = (e) => {
    const el = heroRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    el.style.setProperty('--spot-x', `${e.clientX - rect.left}px`)
    el.style.setProperty('--spot-y', `${e.clientY - rect.top}px`)
  }

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="home"
      ref={heroRef}
      onMouseMove={handleMouseMove}
      className="relative flex min-h-screen items-center overflow-hidden pt-28 sm:pt-32"
      style={{ '--spot-x': '50%', '--spot-y': '30%' }}
    >
      {/* Grid + spotlight background */}
      <div className="absolute inset-0 bg-grid-pattern bg-size-[56px_56px] mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,black,transparent)]" />
      <div
        className="pointer-events-none absolute inset-0 opacity-70 transition-opacity"
        style={{
          background:
            'radial-gradient(600px circle at var(--spot-x) var(--spot-y), rgba(124,92,252,0.12), transparent 60%)',
        }}
        aria-hidden="true"
      />
      <div className="absolute -left-40 top-20 h-72 w-72 rounded-full bg-violet-600/20 blur-[100px]" aria-hidden="true" />
      <div className="absolute -right-32 top-64 h-72 w-72 rounded-full bg-violet-400/10 blur-[120px]" aria-hidden="true" />
      <FloatingParticles count={16} />

      <Container className="relative grid grid-cols-1 items-center gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/3 px-4 py-1.5 font-mono text-xs text-mist-300"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            Available for freelance work
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl font-semibold leading-[1.08] tracking-tight text-mist-100 text-balance sm:text-5xl md:text-6xl"
          >
            Clean, fast interfaces — built in React.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.22 }}
            className="mt-6 max-w-xl text-base leading-relaxed text-mist-400 sm:text-lg"
          >
            I&rsquo;m a self-taught frontend developer specializing in React
            and Tailwind CSS. I build responsive, detail-oriented interfaces
            for freelance clients — from a Figma file, a rough sketch, or
            just an idea.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.34 }}
            className="mt-10 flex flex-col gap-4 sm:flex-row"
          >
            <Button onClick={() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })}>
              View My Work <ArrowRight size={16} aria-hidden="true" />
            </Button>
            <Button
              variant="secondary"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Mail size={16} aria-hidden="true" /> Start a Project
            </Button>
          </motion.div>

          {/* Honest tech strip — replaces any "trusted by" claim */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-14 flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-xs text-mist-600"
          >
            <span className="text-mist-100">React</span>
            <span>·</span>
            <span className="text-mist-100">Tailwind CSS</span>
            <span>·</span>
            <span className="text-mist-100">JavaScript</span>
            <span>·</span>
            <span className="text-mist-100">Framer Motion</span>
          </motion.div>
        </div>

        <div className="flex justify-center lg:justify-end">
          <CodeWindow />
        </div>
      </Container>

      <motion.button
        onClick={scrollToAbout}
        aria-label="Scroll to About section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-mist-500 sm:flex"
      >
        <span className="font-mono text-[11px] tracking-widest">SCROLL</span>
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown size={18} />
        </motion.span>
      </motion.button>
    </section>
  )
}
