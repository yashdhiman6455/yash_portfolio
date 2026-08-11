import { Award, Braces, Briefcase, GraduationCap, Layers } from 'lucide-react'
import { about, site } from '../config/site'
import Reveal from './shared/Reveal'
import SectionHeading from './shared/SectionHeading'

const statIcons = {
  experience: Briefcase,
  stack: Braces,
  api: Layers,
  dev: Award,
}

export default function About() {
  return (
    <section id="about" className="relative py-24 md:py-32">
      <div
        className="pointer-events-none absolute -left-40 top-24 h-96 w-96 rounded-full bg-accent-sky/10 blur-[140px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-40 bottom-24 h-96 w-96 rounded-full bg-accent/10 blur-[140px]"
        aria-hidden="true"
      />

      <div className="container-site relative">
        <SectionHeading index={1} eyebrow={about.eyebrow} title={about.title} accent="sky" />

        <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr] lg:gap-8">
          <Reveal>
            <article
              className="card-tinted card-hover rounded-3xl p-6 sm:p-8 md:p-10"
              style={{
                '--tint': 'rgba(125, 211, 252, 0.1)',
                '--tint-2': 'rgba(167, 139, 250, 0.09)',
                '--hover-glow': 'rgba(125, 211, 252, 0.18)',
              }}
            >
              <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
                <div className="relative shrink-0">
                  <div
                    className="absolute -inset-1 rounded-full bg-gradient-to-br from-accent-sky/50 via-accent-2/40 to-accent-strong/50 opacity-60 blur-md"
                    aria-hidden="true"
                  />
                  <img
                    src="/images/profile.png"
                    alt={site.name}
                    width={80}
                    height={80}
                    className="relative h-20 w-20 rounded-full border-2 border-white/10 object-cover ring-2 ring-accent-sky/30"
                  />
                  {site.available && (
                    <span
                      className="absolute -right-1.5 -top-1.5 grid h-5 w-5 place-items-center rounded-full border-2 border-background bg-status"
                      aria-hidden="true"
                    >
                      <span className="h-2 w-2 animate-pulse rounded-full bg-background/70" />
                    </span>
                  )}
                </div>

                <div>
                  <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent-sky">
                    Hello, I&apos;m
                  </p>
                  <h3 className="mt-1 font-display text-3xl font-semibold tracking-tight text-text">
                    {site.name}
                  </h3>
                  <span className="mt-3 inline-flex items-center rounded-full border border-accent-sky/30 bg-accent-sky/10 px-3.5 py-1.5 text-sm font-medium text-accent-sky">
                    PHP / Laravel Web Developer
                  </span>
                </div>
              </div>

              <div className="mt-8 space-y-4 border-t border-line pt-8">
                {about.paragraphs.map((paragraph, i) => (
                  <p key={i} className="text-[15px] leading-relaxed text-muted sm:text-base">
                    {paragraph}
                  </p>
                ))}
              </div>

              <div className="mt-8 grid grid-cols-2 gap-3 lg:grid-cols-4">
                {about.highlights.map((item) => {
                  const Icon = statIcons[item.icon] || Briefcase
                  return (
                    <div
                      key={item.label}
                      className="group rounded-2xl border border-line bg-background/40 p-4 transition-all duration-300 hover:border-accent-sky/40 hover:bg-background/60"
                    >
                      <div className="grid h-8 w-8 place-items-center rounded-lg border border-accent-sky/25 bg-accent-sky/10">
                        <Icon size={15} className="text-accent-sky" />
                      </div>
                      <div className="mt-3 font-display text-sm font-semibold text-text">
                        {item.value}
                      </div>
                      <div className="mt-0.5 font-mono text-[10px] uppercase tracking-[0.14em] text-faint">
                        {item.label}
                      </div>
                    </div>
                  )
                })}
              </div>
            </article>
          </Reveal>

          <Reveal delay={0.1}>
            <article
              className="card-tinted flex h-full flex-col rounded-3xl p-6 md:p-8"
              style={{
                '--tint': 'rgba(125, 211, 252, 0.08)',
                '--tint-2': 'rgba(167, 139, 250, 0.08)',
              }}
            >
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-accent-sky/25 bg-accent-sky/10">
                  <GraduationCap size={18} className="text-accent-sky" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold text-text">Developer Journey</h3>
                  <p className="text-sm text-muted">From first commits to full-stack.</p>
                </div>
              </div>

              <ol className="relative mt-8 flex-1 space-y-8 border-l border-line-strong pl-6">
                {about.journey.map((item) => (
                  <li key={item.year} className="relative">
                    <span
                      className="absolute -left-[29px] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-accent-sky bg-background shadow-[0_0_10px_rgba(125,211,252,0.5)]"
                      aria-hidden="true"
                    />
                    <div className="flex flex-wrap items-baseline gap-x-2.5 gap-y-0.5">
                      <span className="font-mono text-sm font-medium text-accent-sky">{item.year}</span>
                      <span className="font-display text-sm font-semibold text-text">{item.title}</span>
                    </div>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted">{item.text}</p>
                    {item.tech?.length > 0 && (
                      <div className="mt-2.5 flex flex-wrap gap-1.5" aria-label={`Technologies: ${item.tech.join(', ')}`}>
                        {item.tech.map((t) => (
                          <span
                            key={t}
                            className="rounded-md border border-accent-sky/20 bg-accent-sky/5 px-2 py-0.5 font-mono text-[10px] text-muted"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    )}
                  </li>
                ))}
              </ol>

              <div className="mt-8 space-y-2.5 rounded-2xl border border-line bg-background/40 p-4">
                {[site.education.degree, site.education.current].map((line) => (
                  <p key={line} className="flex items-start gap-2.5 text-[13px] leading-relaxed text-muted">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-sky/70" aria-hidden="true" />
                    {line}
                  </p>
                ))}
              </div>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
