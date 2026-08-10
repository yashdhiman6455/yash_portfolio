import Reveal from './Reveal'

export default function SectionHeading({ index, eyebrow, title, description }) {
  return (
    <Reveal className="mb-12 md:mb-16">
      <div className="flex items-center gap-3">
        <span className="font-mono text-xs text-accent">
          {String(index).padStart(2, '0')}
        </span>
        <span className="h-px w-8 bg-accent/50" aria-hidden="true" />
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
