import { useEffect, useRef } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import {
  ArrowRight,
  Braces,
  Check,
  Layout,
  PieChart,
  Send,
  ServerCog,
  Sparkles,
  User,
  X,
  Zap,
} from 'lucide-react'
import { EASE } from '../lib/motion'
import { GitHubIcon } from './shared/BrandIcons'
import ProjectPreview from './ProjectPreview'
import Button from './shared/Button'

const flowIcons = {
  User,
  Laravel: ServerCog,
  Livewire: Zap,
  'AI API': Sparkles,
  'JSON Schema': Braces,
  'Dynamic Form': Layout,
  Submissions: Send,
  Analytics: PieChart,
}

function Section({ title, children }) {
  return (
    <section className="mt-9 first:mt-0">
      <h3 className="flex items-center gap-2.5 font-display text-base font-semibold text-text">
        <span className="h-4 w-1 rounded-full bg-accent" aria-hidden="true" />
        {title}
      </h3>
      <div className="mt-4">{children}</div>
    </section>
  )
}

function List({ items, icon = null }) {
  return (
    <ul className="space-y-2.5">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-2.5 text-sm leading-relaxed text-muted">
          {icon ? (
            <span className="mt-0.5 shrink-0">{icon}</span>
          ) : (
            <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-accent/70" aria-hidden="true" />
          )}
          {item}
        </li>
      ))}
    </ul>
  )
}

export default function ProjectCaseStudy({ project, onClose }) {
  const reduce = useReducedMotion()
  const closeRef = useRef(null)

  useEffect(() => {
    if (!project) return undefined

    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    const prevFocus = document.activeElement
    closeRef.current?.focus()

    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
      prevFocus?.focus()
    }
  }, [project, onClose])

  return (
    <AnimatePresence>
      {project && (
        <div className="fixed inset-0 z-[100]">
          <motion.div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
            aria-hidden="true"
          />

          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="case-study-title"
            className="pointer-events-none absolute inset-0 flex items-end justify-center sm:items-center sm:p-6"
          >
            <motion.div
              className="pointer-events-auto flex max-h-[92dvh] w-full max-w-3xl flex-col overflow-hidden rounded-t-2xl border border-line bg-background shadow-2xl shadow-black/40 sm:max-h-[85dvh] sm:rounded-2xl"
              initial={{ opacity: 0, y: reduce ? 0 : 48, scale: reduce ? 1 : 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: reduce ? 0 : 32, scale: reduce ? 1 : 0.98 }}
              transition={{ duration: 0.35, ease: EASE }}
            >
              <header className="flex items-start justify-between gap-4 border-b border-line px-6 py-5 sm:px-8">
                <div>
                  <div className="flex flex-wrap items-center gap-2.5">
                    <span className="inline-flex items-center rounded-full border border-accent/30 bg-accent/10 px-2.5 py-0.5 text-[11px] font-medium text-accent">
                      {project.status}
                    </span>
                    <span className="font-mono text-[11px] text-faint">{project.year}</span>
                  </div>
                  <h2
                    id="case-study-title"
                    className="mt-2.5 font-display text-2xl font-semibold tracking-tight text-text"
                  >
                    {project.name}
                  </h2>
                  <p className="mt-1 text-sm text-muted">{project.tagline}</p>
                </div>
                <button
                  ref={closeRef}
                  type="button"
                  onClick={onClose}
                  aria-label="Close case study"
                  className="grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-line-strong text-muted transition-colors hover:border-accent/50 hover:text-text"
                >
                  <X size={17} />
                </button>
              </header>

              <div className="overflow-y-auto px-6 py-6 sm:px-8 sm:py-8">
                <motion.div
                  initial={reduce ? false : { opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                >
                  <Section title="Overview">
                    <p className="text-sm leading-relaxed text-muted sm:text-[15px]">
                      {project.description}
                    </p>
                  </Section>

                  {project.problem && project.solution && (
                    <div className="mt-9 grid gap-4 sm:grid-cols-2">
                      <div className="rounded-xl border border-line bg-surface/60 p-5">
                        <h3 className="font-mono text-[11px] uppercase tracking-[0.18em] text-faint">
                          Problem
                        </h3>
                        <p className="mt-3 text-sm leading-relaxed text-muted">{project.problem}</p>
                      </div>
                      <div className="rounded-xl border border-accent/25 bg-accent/5 p-5">
                        <h3 className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent">
                          Solution
                        </h3>
                        <p className="mt-3 text-sm leading-relaxed text-muted">{project.solution}</p>
                      </div>
                    </div>
                  )}

                  {project.flow.length > 0 && (
                    <Section title="Architecture — How It Works">
                      <div className="relative ml-2 border-l border-line-strong pl-6">
                        {project.flow.map((step, i) => {
                          const Icon = flowIcons[step.label]
                          return (
                            <motion.div
                              key={step.label}
                              initial={reduce ? false : { opacity: 0, x: -12 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true, margin: '-40px' }}
                              transition={{ duration: 0.4, ease: EASE, delay: i * 0.06 }}
                              className="relative pb-6 last:pb-0"
                            >
                              <span
                                className="absolute -left-[35px] top-0 grid h-5 w-5 place-items-center rounded-full border border-accent/40 bg-background"
                                aria-hidden="true"
                              >
                                {Icon ? <Icon size={11} className="text-accent" /> : null}
                              </span>
                              <div className="flex flex-wrap items-baseline gap-x-2.5">
                                <span className="font-mono text-xs font-medium text-text">
                                  {String(i + 1).padStart(2, '0')}
                                </span>
                                <span className="text-sm font-semibold text-text">{step.label}</span>
                              </div>
                              <p className="mt-0.5 text-[13px] leading-relaxed text-muted">
                                {step.detail}
                              </p>
                            </motion.div>
                          )
                        })}
                      </div>
                    </Section>
                  )}

                  <Section title="Key Features">
                    <ul className="grid gap-x-6 gap-y-2.5 sm:grid-cols-2">
                      {project.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-start gap-2.5 text-sm leading-relaxed text-muted"
                        >
                          <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full border border-accent/30 bg-accent/10">
                            <Check size={11} className="text-accent" />
                          </span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </Section>

                  {project.highlights.length > 0 && (
                    <Section title="Technical Highlights">
                      <div className="grid gap-2.5 sm:grid-cols-2">
                        {project.highlights.map((highlight) => (
                          <div
                            key={highlight}
                            className="flex items-center gap-2.5 rounded-lg border border-line bg-surface/60 px-3.5 py-2.5 text-[13px] text-muted"
                          >
                            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                            {highlight}
                          </div>
                        ))}
                      </div>
                    </Section>
                  )}

                  <div className="grid gap-9 sm:grid-cols-2">
                    {project.challenges.length > 0 && (
                      <Section title="Challenges">
                        <List items={project.challenges} />
                      </Section>
                    )}
                    {project.learned.length > 0 && (
                      <Section title="What I Learned">
                        <List items={project.learned} icon={<ArrowRight size={14} className="text-accent" />} />
                      </Section>
                    )}
                  </div>

                  <Section title="Technology">
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-md border border-line bg-surface-2/60 px-2.5 py-1 font-mono text-[11px] text-muted"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </Section>

                  <Section title="UI Preview">
                    <p className="mb-4 text-xs text-faint">
                      {project.screenshots?.length
                        ? 'Screenshots of the live product interface.'
                        : 'Conceptual preview of the product interface.'}
                    </p>
                    <ProjectPreview variant={project.preview} screenshots={project.screenshots} />
                  </Section>
                </motion.div>
              </div>

              <footer className="flex flex-wrap items-center gap-3 border-t border-line px-6 py-5 sm:px-8">
                {project.links.demo && (
                  <Button href={project.links.demo} size="sm">
                    Live Demo
                  </Button>
                )}
                <Button href={project.links.github} variant="secondary" size="sm">
                  <GitHubIcon size={14} />
                  View GitHub
                </Button>
                <span className="ml-auto hidden font-mono text-[11px] text-faint sm:block">
                  {project.name.toLowerCase().replace(/\s+/g, '-')}
                </span>
              </footer>
            </motion.div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
