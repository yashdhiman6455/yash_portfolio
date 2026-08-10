import { ArrowUpRight, BookOpen, ExternalLink, Lock } from 'lucide-react'
import { GitHubIcon } from './shared/BrandIcons'
import ProjectPreview from './ProjectPreview'
import Button from './shared/Button'

function StatusBadge({ project }) {
  const styles = {
    featured: 'border-accent/30 bg-accent/10 text-accent',
    building: 'border-status/30 bg-status/10 text-status',
    standard: 'border-line-strong bg-surface-2/60 text-muted',
  }
  const kind = project.featured ? 'featured' : project.status === 'Currently Building' ? 'building' : 'standard'
  return (
    <span className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[11px] font-medium ${styles[kind]}`}>
      {project.status === 'Currently Building' && (
        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-status" aria-hidden="true" />
      )}
      {project.status}
    </span>
  )
}

function ProjectActions({ project, onOpenCaseStudy, onShowCredentials, size = 'sm' }) {
  const hasDemo = project.links.demo
  const hasCredentials = hasDemo && project.demoCredentials?.length > 0
  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-wrap items-center gap-2.5">
        {hasDemo && (
          <Button href={project.links.demo} size={size}>
            <ExternalLink size={14} />
            Live Demo
          </Button>
        )}
        <Button href={project.links.github} variant="secondary" size={size}>
          <GitHubIcon size={14} />
          View GitHub
        </Button>
        <Button
          variant="ghost"
          size={size}
          onClick={() => onOpenCaseStudy(project)}
          aria-label={`Open case study for ${project.name}`}
        >
          <BookOpen size={14} />
          Case Study
          <ArrowUpRight size={13} className="text-faint" />
        </Button>
      </div>
      {hasCredentials && (
        <button
          type="button"
          onClick={() => onShowCredentials(project)}
          className="inline-flex w-fit items-center gap-2 rounded-lg border border-line-strong bg-surface/40 px-3 py-1.5 text-xs font-medium text-muted transition-all hover:border-accent/50 hover:text-accent"
        >
          <Lock size={13} />
          Demo Credentials
        </button>
      )}
    </div>
  )
}

function TechChips({ tech, limit }) {
  const shown = tech.slice(0, limit)
  const extra = tech.length - shown.length
  return (
    <div className="flex flex-wrap gap-2">
      {shown.map((t) => (
        <span
          key={t}
          className="rounded-md border border-line bg-surface-2/60 px-2.5 py-1 font-mono text-[11px] text-muted"
        >
          {t}
        </span>
      ))}
      {extra > 0 && (
        <span className="rounded-md border border-line px-2.5 py-1 font-mono text-[11px] text-faint">
          +{extra}
        </span>
      )}
    </div>
  )
}

export default function ProjectCard({ project, onOpenCaseStudy, onShowCredentials }) {
  if (project.featured) {
    return (
      <article className="card-surface group overflow-hidden rounded-3xl transition-all duration-300 hover:border-accent/30">
        <div className="grid lg:grid-cols-2">
          <div className="p-5 sm:p-7 lg:border-r lg:border-line">
            <div className="transition-transform duration-500 group-hover:scale-[1.015]">
              <ProjectPreview variant={project.preview} screenshots={project.screenshots} />
            </div>
          </div>

          <div className="flex flex-col p-6 sm:p-8 lg:p-10">
            <div className="flex flex-wrap items-center gap-3">
              <StatusBadge project={project} />
              <span className="font-mono text-[11px] text-faint">{project.year}</span>
            </div>

            <h3 className="mt-4 font-display text-2xl font-semibold tracking-tight text-text">
              {project.name}
            </h3>
            <p className="mt-2 text-[15px] font-medium text-muted">{project.tagline}</p>
            <p className="mt-3 text-sm leading-relaxed text-muted">{project.description}</p>

            <div className="mt-6">
              <TechChips tech={project.tech} limit={6} />
            </div>

            <div className="mt-8">
              <ProjectActions project={project} onOpenCaseStudy={onOpenCaseStudy} onShowCredentials={onShowCredentials} />
            </div>
          </div>
        </div>
      </article>
    )
  }

  return (
    <article className="card-surface group flex h-full flex-col overflow-hidden rounded-2xl transition-all duration-300 hover:border-accent/30 hover:shadow-xl hover:shadow-black/10">
      <div className="p-5">
        <ProjectPreview variant={project.preview} screenshots={project.screenshots} />
      </div>
      <div className="flex flex-1 flex-col p-6 pt-2">
        <div className="flex flex-wrap items-center gap-3">
          <StatusBadge project={project} />
          <span className="font-mono text-[11px] text-faint">{project.year}</span>
        </div>

        <h3 className="mt-4 font-display text-xl font-semibold tracking-tight text-text">
          {project.name}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-muted">{project.tagline}</p>

        <div className="mt-5">
          <TechChips tech={project.tech} limit={4} />
        </div>

        <div className="mt-auto pt-6">
          <ProjectActions project={project} onOpenCaseStudy={onOpenCaseStudy} onShowCredentials={onShowCredentials} />
        </div>
      </div>
    </article>
  )
}
