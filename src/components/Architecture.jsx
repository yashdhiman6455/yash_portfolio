import { ArrowDown, Cloud, Cpu, Database, Layout, Route } from 'lucide-react'
import { architecture } from '../config/site'
import Reveal from './shared/Reveal'
import SectionHeading from './shared/SectionHeading'

const layerIcons = { layout: Layout, route: Route, cpu: Cpu, database: Database, cloud: Cloud }

const layerColors = [
  { border: 'border-accent/30', bg: 'bg-accent/10', text: 'text-accent', shadow: 'shadow-accent/10', glow: '0 0 20px rgba(139,92,246,0.15)' },
  { border: 'border-accent-2/30', bg: 'bg-accent-2/10', text: 'text-accent-2', shadow: 'shadow-accent-2/10', glow: '0 0 20px rgba(129,140,248,0.15)' },
  { border: 'border-accent-sky/30', bg: 'bg-accent-sky/10', text: 'text-accent-sky', shadow: 'shadow-accent-sky/10', glow: '0 0 20px rgba(125,211,252,0.15)' },
  { border: 'border-accent-cyan/30', bg: 'bg-accent-cyan/10', text: 'text-accent-cyan', shadow: 'shadow-accent-cyan/10', glow: '0 0 20px rgba(103,232,249,0.15)' },
  { border: 'border-accent-emerald/30', bg: 'bg-accent-emerald/10', text: 'text-accent-emerald', shadow: 'shadow-accent-emerald/10', glow: '0 0 20px rgba(110,231,183,0.15)' },
]

export default function Architecture() {
  return (
    <section id="architecture" className="relative py-24 md:py-32">
      <div className="pointer-events-none absolute -right-40 top-1/2 h-96 w-96 rounded-full bg-accent/6 blur-[140px]" aria-hidden="true" />

      <div className="container-site relative">
        <SectionHeading
          index={5}
          eyebrow={architecture.eyebrow}
          title={architecture.title}
          description={architecture.description}
        />

        <div className="relative max-w-3xl mx-auto">
          {/* Gradient connecting line */}
          <div className="absolute bottom-8 left-5 top-8 w-px bg-gradient-to-b from-accent/40 via-accent-2/30 to-accent-emerald/30" aria-hidden="true" />

          {architecture.layers.map((layer, i) => {
            const Icon = layerIcons[layer.icon]
            const color = layerColors[i % layerColors.length]
            return (
              <div key={layer.title}>
                <Reveal delay={i * 0.1} rotateX={2}>
                  <div className="relative flex items-start gap-5">
                    <span
                      className={`z-10 grid h-12 w-12 shrink-0 place-items-center rounded-xl border ${color.border} ${color.bg} shadow-lg ${color.shadow} transition-all duration-500`}
                      style={{ boxShadow: color.glow }}
                      aria-hidden="true"
                    >
                      <Icon size={18} className={color.text} />
                    </span>

                    <div className="card-surface flex-1 rounded-xl p-5 transition-all duration-500 hover:border-accent/30 hover:shadow-xl hover:shadow-accent/5 md:p-6">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <h3 className="font-display text-base font-semibold text-text">{layer.title}</h3>
                        <span className={`font-mono text-[11px] ${color.text}`}>{layer.tech.join(' / ')}</span>
                      </div>
                      <p className="mt-1.5 text-[13px] leading-relaxed text-muted">{layer.detail}</p>
                    </div>
                  </div>
                </Reveal>

                {i < architecture.layers.length - 1 && (
                  <div className="flex justify-center py-3" aria-hidden="true">
                    <span className="rounded-full border border-line-strong/30 bg-surface/50 px-2 py-1 transition-all duration-300 hover:border-accent/30 hover:shadow-sm hover:shadow-accent/5">
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
