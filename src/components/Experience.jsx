import { Building2, Calendar, Check, Sparkles } from 'lucide-react'
import { experience } from '../config/site'
import Reveal from './shared/Reveal'
import SectionHeading from './shared/SectionHeading'

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 md:py-32">
      <div className="pointer-events-none absolute -right-40 top-40 h-96 w-96 rounded-full bg-accent/8 blur-[140px]" aria-hidden="true" />

      <div className="container-site relative">
        <SectionHeading
          index={2}
          eyebrow="Career"
          title="Experience"
          description="Three years of shipping production software — currently focused on Laravel, APIs and integrations, and moving toward full-stack ownership."
        />

        <div className="relative space-y-12 border-l border-line-strong/30 pl-8 md:pl-14">
          {/* Animated gradient line */}
          <div className="absolute left-0 top-0 bottom-0 w-px" aria-hidden="true">
            <div className="h-full w-full bg-gradient-to-b from-accent/30 via-accent-2/20 to-accent-emerald/20" />
          </div>

          {experience.map((job, i) => {
            const isLatest = i === 0
            return (
              <Reveal key={`${job.company}-${i}`} delay={i * 0.15} rotateX={2}>
                <div className="relative">
                  {/* Timeline dot */}
                  <span
                    className={`absolute -left-[41px] md:-left-[57px] -top-1 grid h-10 w-10 place-items-center rounded-full border-2 transition-all duration-500 ${
                      isLatest
                        ? 'border-accent/70 bg-accent/20 text-accent shadow-[0_0_24px_rgba(139,92,246,0.5)]'
                        : 'border-line-strong/50 bg-surface text-faint hover:border-accent/40 hover:text-accent hover:shadow-lg hover:shadow-accent/10'
                    }`}
                    aria-hidden="true"
                  >
                    <Building2 size={16} />
                  </span>

                  <article
                    className={`card-tinted rounded-2xl p-6 transition-all duration-500 md:p-8 ${
                      isLatest ? 'card-hover border-accent/20!' : 'hover:border-accent/25!'
                    }`}
                    style={
                      isLatest
                        ? {
                            '--tint': 'rgba(167, 139, 250, 0.09)',
                            '--tint-2': 'rgba(129, 140, 248, 0.05)',
                            '--hover-glow': 'rgba(139, 92, 246, 0.35)',
                            boxShadow: '0 0 70px -18px rgba(139, 92, 246, 0.3)',
                          }
                        : {
                            '--tint': 'rgba(167, 139, 250, 0.05)',
                            '--tint-2': 'rgba(129, 140, 248, 0.03)',
                          }
                    }
                  >
                    <div className="flex flex-wrap items-center gap-3">
                      <h3 className="font-display text-xl font-semibold text-text">{job.role}</h3>
                      {isLatest && (
                        <span className="inline-flex items-center gap-1.5 rounded-full border border-accent/40 bg-accent/15 px-3 py-1 text-[11px] font-medium text-accent animate-pulse-glow">
                          <Sparkles size={11} />
                          Most Recent
                        </span>
                      )}
                      {job.current && (
                        <span className="inline-flex items-center gap-1.5 rounded-full border border-status/30 bg-status/10 px-3 py-1 text-[11px] font-medium text-status">
                          <span className="h-1.5 w-1.5 rounded-full bg-status" aria-hidden="true" />
                          Current
                        </span>
                      )}
                    </div>

                    <div className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-1.5 text-sm text-muted">
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
                          <span className={`mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full border bg-accent/10 transition-all duration-300 ${isLatest ? 'border-accent/40' : 'border-accent/25'}`}>
                            <Check size={11} className="text-accent" />
                          </span>
                          {bullet}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-6 flex flex-wrap gap-2" aria-label={`Technologies used at ${job.company}`}>
                      {job.technologies.map((tech) => (
                        <span key={tech} className="rounded-lg border border-line bg-background/40 px-3 py-1.5 font-mono text-[11px] text-muted transition-all duration-300 hover:border-accent/40 hover:text-text hover:bg-accent/5 hover:shadow-sm hover:shadow-accent/5 tech-badge-shine">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </article>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
