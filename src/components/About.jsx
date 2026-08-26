import { Award, Braces, Briefcase, Layers } from 'lucide-react'
import { about, site } from '../config/site'
import useCountUp from '../hooks/useCountUp'
import Reveal from './shared/Reveal'
import SectionHeading from './shared/SectionHeading'

const statIcons = {
  experience: Briefcase,
  stack: Braces,
  api: Layers,
  dev: Award,
}

function AnimatedStat({ item }) {
  const Icon = statIcons[item.icon] || Briefcase
  const numericPart = item.value.match(/\d+/)
  const number = numericPart ? parseInt(numericPart[0]) : 0
  const suffix = item.value.replace(/\d+/, '').trim()
  const { count, ref } = useCountUp(number, 2000)

  return (
    <div
      ref={ref}
      className="group relative overflow-hidden rounded-2xl border border-line bg-background/40 p-4 transition-all duration-500 hover:border-accent-sky/40 hover:bg-background/60 hover:shadow-xl hover:shadow-accent-sky/5"
      style={{ transformStyle: 'preserve-3d' }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-accent-sky/5 via-transparent to-accent/3 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      <div className="absolute -inset-px rounded-2xl border border-accent-sky/0 transition-all duration-500 group-hover:border-accent-sky/20" />
      <div className="relative">
        <div className="grid h-10 w-10 place-items-center rounded-xl border border-accent-sky/25 bg-accent-sky/10 transition-all duration-500 group-hover:border-accent-sky/50 group-hover:bg-accent-sky/15 group-hover:shadow-lg group-hover:shadow-accent-sky/10 group-hover:scale-110">
          <Icon size={16} className="text-accent-sky" />
        </div>
        <div className="mt-3 font-display text-xl font-bold text-text transition-all duration-300">
          {number > 0 ? `${count}${suffix ? '+' : ''}` : item.value}
        </div>
        <div className="mt-0.5 font-mono text-[10px] uppercase tracking-[0.14em] text-faint">
          {item.label}
        </div>
      </div>
    </div>
  )
}

function FloatingElement({ className = '', delay = 0 }) {
  return (
    <div
      className={`absolute pointer-events-none ${className}`}
      style={{
        animation: `float ${6 + delay}s ease-in-out infinite`,
        animationDelay: `${delay}s`,
      }}
      aria-hidden="true"
    >
      <div className="h-2 w-2 rounded-full bg-accent-sky/20 blur-sm" />
    </div>
  )
}

export default function About() {
  return (
    <section id="about" className="relative py-24 md:py-32">
      <div className="pointer-events-none absolute -left-40 top-24 h-96 w-96 rounded-full bg-accent-sky/8 blur-[140px]" aria-hidden="true" />
      <div className="pointer-events-none absolute -right-40 bottom-24 h-96 w-96 rounded-full bg-accent/8 blur-[140px]" aria-hidden="true" />

      {/* Floating 3D decorative elements */}
      <FloatingElement className="top-20 left-[10%]" delay={0} />
      <FloatingElement className="top-40 right-[15%]" delay={2} />
      <FloatingElement className="bottom-32 left-[20%]" delay={4} />

      <div className="container-site relative">
        <SectionHeading index={1} eyebrow={about.eyebrow} title={about.title} accent="sky" />

        <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr] lg:gap-8">
          <Reveal rotateX={3}>
            <article
              className="card-tinted card-hover rounded-3xl p-6 sm:p-8 md:p-10"
              style={{
                '--tint': 'rgba(125, 211, 252, 0.07)',
                '--tint-2': 'rgba(167, 139, 250, 0.05)',
                '--hover-glow': 'rgba(125, 211, 252, 0.2)',
                transformStyle: 'preserve-3d',
              }}
            >
              <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
                <div className="relative shrink-0">
                  <div className="absolute -inset-3 rounded-full bg-gradient-to-br from-accent-sky/40 via-accent-2/25 to-accent-strong/35 opacity-50 blur-xl" aria-hidden="true" />
                  <div className="absolute -inset-1.5 rounded-full border border-accent-sky/20 animate-ring-rotate" style={{ animationDuration: '15s' }} aria-hidden="true" />
                  <img
                    src="/images/profile.png"
                    alt={site.name}
                    width={80}
                    height={80}
                    className="relative h-20 w-20 rounded-full border-2 border-white/10 object-cover ring-2 ring-accent-sky/30 shadow-xl shadow-accent-sky/10"
                  />
                  {site.available && (
                    <span className="absolute -right-1.5 -top-1.5 grid h-5 w-5 place-items-center rounded-full border-2 border-background bg-status shadow-lg shadow-status/30" aria-hidden="true">
                      <span className="h-2 w-2 animate-pulse rounded-full bg-background/70" />
                    </span>
                  )}
                </div>

                <div>
                  <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent-sky">Hello, I&apos;m</p>
                  <h3 className="mt-1 font-display text-3xl font-semibold tracking-tight text-text">{site.name}</h3>
                  <span className="mt-3 inline-flex items-center rounded-full border border-accent-sky/30 bg-accent-sky/10 px-4 py-1.5 text-sm font-medium text-accent-sky shadow-sm shadow-accent-sky/5">
                    PHP / Laravel Web Developer
                  </span>
                </div>
              </div>

              <div className="mt-8 space-y-4 border-t border-line pt-8">
                {about.paragraphs.map((paragraph, i) => (
                  <p key={i} className="text-[15px] leading-relaxed text-muted sm:text-base">{paragraph}</p>
                ))}
              </div>

              <div className="mt-8 grid grid-cols-2 gap-3 lg:grid-cols-4">
                {about.highlights.map((item) => (
                  <AnimatedStat key={item.label} item={item} />
                ))}
              </div>
            </article>
          </Reveal>

          <Reveal delay={0.1} rotateX={3}>
            <article
              className="card-tinted flex h-full flex-col rounded-3xl p-6 md:p-8"
              style={{
                '--tint': 'rgba(125, 211, 252, 0.05)',
                '--tint-2': 'rgba(167, 139, 250, 0.05)',
              }}
            >
              <div className="flex items-center gap-3">
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-accent-sky/25 bg-accent-sky/10">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent-sky">
                    <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                    <path d="M6 12v5c3 3 9 3 12 0v-5" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold text-text">Developer Journey</h3>
                  <p className="text-sm text-muted">From first commits to full-stack.</p>
                </div>
              </div>

              <ol className="relative mt-8 flex-1 space-y-8 border-l border-line-strong/50 pl-6">
                {about.journey.map((item) => (
                  <li key={item.year} className="relative group">
                    <span className="absolute -left-[29px] top-1.5 h-3 w-3 rounded-full border-2 border-accent-sky bg-background shadow-[0_0_14px_rgba(125,211,252,0.5)] transition-all duration-500 group-hover:scale-125 group-hover:shadow-[0_0_24px_rgba(125,211,252,0.7)]" aria-hidden="true" />
                    <div className="flex flex-wrap items-baseline gap-x-2.5 gap-y-0.5">
                      <span className="font-mono text-sm font-medium text-accent-sky">{item.year}</span>
                      <span className="font-display text-sm font-semibold text-text">{item.title}</span>
                    </div>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted">{item.text}</p>
                    {item.tech?.length > 0 && (
                      <div className="mt-2.5 flex flex-wrap gap-1.5" aria-label={`Technologies: ${item.tech.join(', ')}`}>
                        {item.tech.map((t) => (
                          <span key={t} className="rounded-md border border-accent-sky/20 bg-accent-sky/5 px-2 py-0.5 font-mono text-[10px] text-muted transition-all duration-300 hover:border-accent-sky/40 hover:text-accent-sky tech-badge-shine">{t}</span>
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
