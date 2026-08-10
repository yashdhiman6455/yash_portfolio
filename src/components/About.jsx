import { about } from '../config/site'
import Reveal from './shared/Reveal'
import SectionHeading from './shared/SectionHeading'

export default function About() {
  return (
    <section id="about" className="relative py-24 md:py-32">
      <div className="container-site">
        <SectionHeading index={1} eyebrow={about.eyebrow} title={about.title} />

        <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
          <div>
            {about.paragraphs.map((paragraph, i) => (
              <Reveal key={i} delay={i * 0.05}>
                <p className="mb-5 max-w-2xl text-[15px] leading-relaxed text-muted sm:text-base">
                  {paragraph}
                </p>
              </Reveal>
            ))}

            <Reveal delay={0.15}>
              <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
                {about.highlights.map((item) => (
                  <div
                    key={item.label}
                    className="card-surface rounded-xl p-4 transition-colors hover:border-accent/30"
                  >
                    <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-faint">
                      {item.label}
                    </div>
                    <div className="mt-1.5 font-display text-sm font-semibold text-text">
                      {item.value}
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <div className="card-surface h-full rounded-2xl p-6 md:p-8">
              <h3 className="font-display text-lg font-semibold text-text">Developer Journey</h3>
              <p className="mt-1 text-sm text-muted">From first commits to full-stack.</p>

              <ol className="relative mt-8 space-y-8 border-l border-line-strong pl-6">
                {about.journey.map((item) => (
                  <li key={item.year} className="relative">
                    <span
                      className="absolute -left-[29px] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-accent bg-background"
                      aria-hidden="true"
                    />
                    <div className="font-mono text-sm font-medium text-accent">{item.year}</div>
                    <p className="mt-1 text-sm leading-relaxed text-muted">{item.text}</p>
                  </li>
                ))}
              </ol>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
