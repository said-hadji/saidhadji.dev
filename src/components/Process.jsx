import { motion } from 'framer-motion'
import { Container } from './ui/Container'
import { SectionHeading } from './ui/SectionHeading'
import { PROCESS_STEPS } from '../data'

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
}
const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
}

export function Process() {
  return (
    <section id="process" className="relative py-28 sm:py-36">
      <Container>
        <SectionHeading
          eyebrow="How We'd Work Together"
          title="A simple, clear process."
          align="center"
        />

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4"
        >
          {PROCESS_STEPS.map(({ icon: Icon, title, description }, i) => (
            <motion.div key={title} variants={item} className="relative text-center sm:text-left">
              <div className="flex items-center justify-center gap-3 sm:justify-start">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/[0.1] bg-white/[0.03]">
                  <Icon size={17} className="text-violet-300" aria-hidden="true" />
                </span>
                <span className="font-mono text-xs text-mist-600">0{i + 1}</span>
              </div>
              <h3 className="mt-4 text-base font-semibold text-mist-100">{title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-mist-500">{description}</p>

              {i < PROCESS_STEPS.length - 1 && (
                <span
                  aria-hidden="true"
                  className="absolute right-[-1rem] top-5 hidden h-px w-8 bg-white/[0.1] lg:block"
                />
              )}
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  )
}
