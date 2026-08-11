import Reveal from './Reveal'

const accents = {
  accent: { index: 'text-accent', line: 'bg-accent/50' },
  sky: { index: 'text-accent-sky', line: 'bg-accent-sky/50' },
  cyan: { index: 'text-accent-cyan', line: 'bg-accent-cyan/50' },
  indigo: { index: 'text-accent-2', line: 'bg-accent-2/50' },
  emerald: { index: 'text-accent-emerald', line: 'bg-accent-emerald/50' },
}

export default function SectionHeading({ index, eyebrow, title, description, accent = 'accent' }) {
  const a = accents[accent] || accents.accent
  return (
    <Reveal className="mb-12 md:mb-16">
      <div className="flex items-center gap-3">
        <span className={`font-mono text-xs ${a.index}`}>
          {String(index).padStart(2, '0')}
        </span>
        <span className={`h-px w-8 ${a.line}`} aria-hidden="true" />
        <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
          {eyebrow}
        </span>
      </div>
      <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-text sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">{description}</p>
      )}
    </Reveal>
  )
}
