import { ArrowDown, Check, Cloud, Cpu, Database, Layout, Route } from 'lucide-react'
import { architecture } from '../config/site'
import Reveal from './shared/Reveal'
import SectionHeading from './shared/SectionHeading'

const layerIcons = {
  layout: Layout,
  route: Route,
  cpu: Cpu,
  database: Database,
  cloud: Cloud,
}

export default function Architecture() {
  return (
    <section id="architecture" className="py-24 md:py-32">
      <div className="container-site">
        <SectionHeading
          index={5}
          eyebrow={architecture.eyebrow}
          title={architecture.title}
          description={architecture.description}
        />

        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
          <div>
            <div className="relative">
              <span
                className="absolute bottom-8 left-5 top-8 w-px bg-line-strong"
                aria-hidden="true"
              />

              {architecture.layers.map((layer, i) => {
                const Icon = layerIcons[layer.icon]
                return (
                  <div key={layer.title}>
                    <Reveal delay={i * 0.06}>
                      <div className="relative flex items-start gap-5">
                        <span
                          className="z-10 grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-accent/30 bg-surface shadow-lg shadow-accent/5"
                          aria-hidden="true"
                        >
                          <Icon size={17} className="text-accent" />
                        </span>

                        <div className="card-surface flex-1 rounded-xl p-5 transition-colors hover:border-accent/30 md:p-6">
                          <div className="flex flex-wrap items-center justify-between gap-2">
                            <h3 className="font-display text-base font-semibold text-text">
                              {layer.title}
                            </h3>
                            <span className="font-mono text-[11px] text-accent">
                              {layer.tech.join(' / ')}
                            </span>
                          </div>
                          <p className="mt-1.5 text-[13px] leading-relaxed text-muted">
                            {layer.detail}
                          </p>
                        </div>
                      </div>
                    </Reveal>

                    {i < architecture.layers.length - 1 && (
                      <div className="flex justify-center py-2" aria-hidden="true">
                        <span className="rounded-full border border-line bg-surface px-1.5 py-0.5">
                          <ArrowDown size={14} className="text-faint" />
                        </span>
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          </div>

          <Reveal delay={0.15} className="lg:sticky lg:top-28 lg:self-start">
            <div className="card-surface rounded-2xl p-6 md:p-8">
              <h3 className="font-display text-lg font-semibold text-text">
                What that means in practice
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                I keep the frontend thin, put every rule behind an explicit service or action
                layer, and treat the database schema as a design decision — not an afterthought.
                Validation happens at the boundary, authentication is enforced consistently, and
                integrations are wrapped so they can be swapped without touching business logic.
              </p>

              <ul className="mt-6 grid grid-cols-2 gap-2.5">
                {architecture.principles.map((principle) => (
                  <li
                    key={principle}
                    className="flex items-center gap-2.5 rounded-lg border border-line bg-surface-2/50 px-3 py-2.5 text-[13px] text-muted"
                  >
                    <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full border border-status/30 bg-status/10">
                      <Check size={11} className="text-status" />
                    </span>
                    {principle}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
