import { motion } from 'framer-motion'
import { Container } from './ui/Container'
import { SectionHeading } from './ui/SectionHeading'
import { GlassCard } from './ui/GlassCard'
import { SERVICES } from '../data'

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
}
const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
}

export function Services() {
  return (
    <section id="services" className="relative py-28 sm:py-36">
      <Container>
        <SectionHeading
          eyebrow="What I Can Help With"
          title="Frontend work, done properly."
          subtitle="I focus on one thing — interfaces — so I can do it well."
          align="center"
        />

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {SERVICES.map(({ icon: Icon, title, description }) => (
            <motion.div key={title} variants={item} whileHover={{ y: -6 }}>
              <GlassCard className="group h-full p-7 transition-all duration-300 hover:border-violet-500/40 hover:shadow-glow-violet">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/[0.1] bg-gradient-to-br from-violet-500/20 to-transparent transition-transform duration-300 group-hover:scale-110">
                  <Icon size={20} className="text-violet-300" aria-hidden="true" />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-mist-100">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-mist-400">{description}</p>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto mt-10 max-w-lg text-center text-sm text-mist-500"
        >
          Frontend only — I don&rsquo;t build or maintain backend systems, but
          I&rsquo;m comfortable working against an existing API.
        </motion.p>
      </Container>
    </section>
  )
}
