import { Building2, Calendar, Check, Sparkles } from 'lucide-react'
import { experience } from '../config/site'
import Reveal from './shared/Reveal'
import SectionHeading from './shared/SectionHeading'

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 md:py-32">
      <div
        className="pointer-events-none absolute -right-40 top-40 h-96 w-96 rounded-full bg-accent/10 blur-[140px]"
        aria-hidden="true"
      />

      <div className="container-site relative">
        <SectionHeading
          index={2}
          eyebrow="Career"
          title="Experience"
          description="Three years of shipping production software — currently focused on Laravel, APIs and integrations, and moving toward full-stack ownership."
        />

        <div className="relative space-y-10 border-l border-line-strong pl-8 md:pl-12">
          {experience.map((job, i) => {
            const isLatest = i === 0
            return (
              <Reveal key={`${job.company}-${i}`} delay={i * 0.1} className="relative">
                <span
                  className={`absolute -left-12 -top-1 grid h-8 w-8 place-items-center rounded-full border md:-left-16 ${
                    isLatest
                      ? 'border-accent/60 bg-accent/15 text-accent shadow-[0_0_18px_rgba(139,92,246,0.45)]'
                      : 'border-line-strong bg-surface text-faint'
                  }`}
                  aria-hidden="true"
                >
                  <Building2 size={14} />
                </span>

                <article
                  className={`card-tinted rounded-2xl p-6 transition-all duration-300 md:p-8 ${
                    isLatest ? 'card-hover border-accent/20!' : 'hover:border-accent/25!'
                  }`}
                  style={
                    isLatest
                      ? {
                          '--tint': 'rgba(167, 139, 250, 0.12)',
                          '--tint-2': 'rgba(129, 140, 248, 0.08)',
                          '--hover-glow': 'rgba(139, 92, 246, 0.3)',
                          boxShadow: '0 0 50px -18px rgba(139, 92, 246, 0.35)',
                        }
                      : {
                          '--tint': 'rgba(167, 139, 250, 0.07)',
                          '--tint-2': 'rgba(129, 140, 248, 0.05)',
                        }
                  }
                >
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="font-display text-xl font-semibold text-text">{job.role}</h3>
                    {isLatest && (
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-accent/40 bg-accent/15 px-2.5 py-1 text-[11px] font-medium text-accent">
                        <Sparkles size={11} />
                        Most Recent
                      </span>
                    )}
                    {job.current && (
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-status/30 bg-status/10 px-2.5 py-1 text-[11px] font-medium text-status">
                        <span className="h-1.5 w-1.5 rounded-full bg-status" aria-hidden="true" />
                        Current
                      </span>
                    )}
                  </div>

                  <div className="mt-2.5 flex flex-wrap items-center gap-x-5 gap-y-1.5 text-sm text-muted">
                    <span className="inline-flex items-center gap-2 font-medium text-text">
                      <Building2 size={15} className="text-accent" />
                      {job.company}
                    </span>
                    <span className="inline-flex items-center gap-2 font-mono text-[13px] text-faint">
                      <Calendar size={14} />
                      {job.period}
                    </span>
                  </div>

                  <p className="mt-4 text-[15px] leading-relaxed text-muted">{job.description}</p>

                  <ul className="mt-5 space-y-2.5">
                    {job.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-3 text-sm leading-relaxed text-muted">
                        <span
                          className={`mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full border bg-accent/10 ${
                            isLatest ? 'border-accent/40' : 'border-accent/25'
                          }`}
                        >
                          <Check size={11} className="text-accent" />
                        </span>
                        {bullet}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 flex flex-wrap gap-2" aria-label={`Technologies used at ${job.company}`}>
                    {job.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md border border-line bg-background/40 px-2.5 py-1 font-mono text-[11px] text-muted transition-colors hover:border-accent/40 hover:text-text"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </article>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
