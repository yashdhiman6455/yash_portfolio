import {
  Atom,
  Bot,
  Braces,
  Brain,
  Cable,
  Code2,
  Container,
  Database,
  FileCode2,
  GitBranch,
  GitFork,
  Heart,
  Hexagon,
  KeyRound,
  Layers,
  Layout,
  MousePointer2,
  Package,
  Palette,
  Route,
  ScanSearch,
  Send,
  Server,
  ServerCog,
  Sparkles,
  SquarePen,
  Terminal,
  Wand,
  Webhook,
  Workflow,
  Wrench,
  Zap,
} from 'lucide-react'
import { skillCategories } from '../config/site'
import Reveal from './shared/Reveal'
import SectionHeading from './shared/SectionHeading'

const categoryIcons = {
  server: Server,
  layout: Layout,
  database: Database,
  route: Route,
  wrench: Wrench,
  sparkles: Sparkles,
  bot: Bot,
}

const techIcons = {
  PHP: Code2,
  Laravel: ServerCog,
  'REST APIs': Webhook,
  Authentication: KeyRound,
  Eloquent: Workflow,
  MySQL: Database,
  HTML: FileCode2,
  CSS: Palette,
  JavaScript: Braces,
  'Vue.js': Hexagon,
  React: Atom,
  'Node.js': Server,
  'Express.js': Route,
  MongoDB: Layers,
  Mongoose: Cable,
  Git: GitBranch,
  GitHub: GitFork,
  Postman: Send,
  Docker: Container,
  Vite: Zap,
  Composer: Package,
  Cursor: MousePointer2,
  opencode: Terminal,
  Claude: Brain,
  ChatGPT: Bot,
  'GitHub Copilot': Wand,
  Gemini: Sparkles,
  Perplexity: ScanSearch,
  v0: SquarePen,
  Lovable: Heart,
  Bolt: Zap,
}

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 md:py-32">
      <div
        className="pointer-events-none absolute -left-40 top-40 h-96 w-96 rounded-full bg-accent-cyan/10 blur-[140px]"
        aria-hidden="true"
      />

      <div className="container-site relative">
        <SectionHeading
          index={3}
          eyebrow="Skills"
          title="Skills & Tools"
          description="Categorized by where I use them day to day — backend depth first, with the frontend and tooling that complete the stack."
          accent="cyan"
        />

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {skillCategories.map((category, i) => {
            const CategoryIcon = categoryIcons[category.icon]
            return (
              <Reveal
                key={category.id}
                delay={i * 0.08}
                className={category.wide ? 'md:col-span-2 xl:col-span-3' : 'h-full'}
              >
                <article
                  className={`card-tinted card-hover flex h-full flex-col rounded-2xl p-6 transition-all duration-300 ${
                    category.inProgress ? 'border-dashed!' : ''
                  }`}
                  style={{
                    '--tint': 'rgba(103, 232, 249, 0.09)',
                    '--tint-2': 'rgba(129, 140, 248, 0.07)',
                    '--hover-glow': 'rgba(103, 232, 249, 0.18)',
                  }}
                >
                  <div className="flex items-center justify-between">
                    <div className="grid h-10 w-10 place-items-center rounded-lg border border-accent-cyan/25 bg-accent-cyan/10">
                      <CategoryIcon size={18} className="text-accent-cyan" />
                    </div>
                    {category.inProgress && (
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-accent-cyan/30 bg-accent-cyan/10 px-2.5 py-1 text-[11px] font-medium text-accent-cyan">
                        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent-cyan" aria-hidden="true" />
                        In progress
                      </span>
                    )}
                  </div>

                  <h3 className="mt-5 font-display text-lg font-semibold text-text">
                    {category.title}
                  </h3>
                  <p className="mt-1.5 text-[13px] leading-relaxed text-muted">
                    {category.description}
                  </p>

                  <ul className="mt-5 flex flex-wrap gap-2">
                    {category.skills.map((skill) => {
                      const Icon = techIcons[skill]
                      return (
                        <li
                          key={skill}
                          className="group inline-flex items-center gap-2 rounded-lg border border-line bg-background/40 px-2.5 py-1.5 text-[13px] text-muted transition-all duration-300 hover:border-accent-cyan/40 hover:text-text"
                        >
                          {Icon && (
                            <Icon
                              size={14}
                              className="text-faint transition-colors group-hover:text-accent-cyan"
                            />
                          )}
                          {skill}
                        </li>
                      )
                    })}
                  </ul>
                </article>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
