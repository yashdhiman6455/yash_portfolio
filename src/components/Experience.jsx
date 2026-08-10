import { Building2, Calendar, Check } from 'lucide-react'
import { experience } from '../config/site'
import Reveal from './shared/Reveal'
import SectionHeading from './shared/SectionHeading'

export default function Experience() {
  return (
    <section id="experience" className="py-24 md:py-32">
      <div className="container-site">
        <SectionHeading
          index={2}
          eyebrow="Career"
          title="Experience"
          description="Three years of shipping production software — currently focused on Laravel, APIs and integrations, and moving toward full-stack ownership."
        />

        <div className="relative space-y-10 border-l border-line-strong pl-8 md:pl-12">
          {experience.map((job, i) => (
            <Reveal key={`${job.company}-${i}`} delay={i * 0.1} className="relative">
              <span
                className="absolute -left-[37px] top-8 h-2.5 w-2.5 rounded-full border-2 border-accent bg-background md:-left-[53px]"
                aria-hidden="true"
              />
              <article className="card-surface rounded-2xl p-6 transition-colors hover:border-accent/25 md:p-8">
                <div className="flex flex-wrap items-center gap-3">
                  <h3 className="font-display text-xl font-semibold text-text">{job.role}</h3>
                  {job.current && (
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-status/30 bg-status/10 px-2.5 py-1 text-[11px] font-medium text-status">
                      <span className="h-1.5 w-1.5 rounded-full bg-status" aria-hidden="true" />
                      Current
                    </span>
                  )}
                </div>

                <div className="mt-2.5 flex flex-wrap items-center gap-x-5 gap-y-1.5 text-sm text-muted">
                  <span className="inline-flex items-center gap-2">
                    <Building2 size={15} className="text-faint" />
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
                      <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full border border-accent/30 bg-accent/10">
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
                      className="rounded-md border border-line bg-surface-2/60 px-2.5 py-1 font-mono text-[11px] text-muted"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
