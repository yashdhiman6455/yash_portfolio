import {
  Atom,
  Braces,
  Cable,
  Code2,
  Container,
  Database,
  FileCode2,
  GitBranch,
  GitFork,
  Hexagon,
  KeyRound,
  Layers,
  Layout,
  Package,
  Palette,
  Route,
  Send,
  Server,
  ServerCog,
  Sparkles,
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
  sparkles: Sparkles,
  wrench: Wrench,
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
}

export default function Skills() {
  return (
    <section id="skills" className="py-24 md:py-32">
      <div className="container-site">
        <SectionHeading
          index={3}
          eyebrow="Skills"
          title="Skills & Tools"
          description="Categorized by where I use them day to day — backend depth first, with the frontend and tooling that complete the stack."
        />

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {skillCategories.map((category, i) => {
            const CategoryIcon = categoryIcons[category.icon]
            return (
              <Reveal key={category.id} delay={i * 0.08}>
                <article
                  className={`card-surface flex h-full flex-col rounded-2xl p-6 transition-colors hover:border-accent/25 ${
                    category.inProgress ? 'border-dashed' : ''
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="grid h-10 w-10 place-items-center rounded-lg border border-accent/25 bg-accent/10">
                      <CategoryIcon size={18} className="text-accent" />
                    </div>
                    {category.inProgress && (
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-status/30 bg-status/10 px-2.5 py-1 text-[11px] font-medium text-status">
                        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-status" aria-hidden="true" />
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
                          className="group inline-flex items-center gap-2 rounded-lg border border-line bg-surface-2/50 px-2.5 py-1.5 text-[13px] text-muted transition-colors hover:border-accent/40 hover:text-text"
                        >
                          {Icon && <Icon size={14} className="text-faint transition-colors group-hover:text-accent" />}
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
