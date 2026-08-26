import { motion, useReducedMotion } from 'framer-motion'
import { EASE } from '../../lib/motion'

const accents = {
  accent: { index: 'text-accent', line: 'bg-accent/50' },
  sky: { index: 'text-accent-sky', line: 'bg-accent-sky/50' },
  cyan: { index: 'text-accent-cyan', line: 'bg-accent-cyan/50' },
  indigo: { index: 'text-accent-2', line: 'bg-accent-2/50' },
  emerald: { index: 'text-accent-emerald', line: 'bg-accent-emerald/50' },
}

export default function SectionHeading({ index, eyebrow, title, description, accent = 'accent' }) {
  const a = accents[accent] || accents.accent
  const reduce = useReducedMotion()

  return (
    <motion.div
      className="mb-14 md:mb-18"
      initial={{ opacity: 0, y: 24, filter: reduce ? 'none' : 'blur(4px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.8, ease: EASE }}
    >
      <div className="flex items-center gap-3">
        <span className={`font-mono text-xs font-medium ${a.index}`}>
          {String(index).padStart(2, '0')}
        </span>
        <span className={`h-px w-12 ${a.line}`} aria-hidden="true" />
        <span className="font-mono text-xs uppercase tracking-[0.22em] text-muted">
          {eyebrow}
        </span>
      </div>
      <h2 className="mt-5 font-display text-3xl font-semibold tracking-tight text-text sm:text-4xl lg:text-[2.75rem]">
        {title}
      </h2>
      {description && (
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">{description}</p>
      )}
    </motion.div>
  )
}
