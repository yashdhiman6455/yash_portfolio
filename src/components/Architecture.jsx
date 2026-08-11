import { ArrowDown, Cloud, Cpu, Database, Layout, Route } from 'lucide-react'
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

        <div className="relative max-w-3xl">
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
    </section>
  )
}
