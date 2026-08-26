import { projects } from '../config/site'
import SectionHeading from './shared/SectionHeading'
import ProjectCard from './ProjectCard'

export default function Projects({ onOpenCaseStudy, onShowCredentials }) {
  const featured = projects.filter((p) => p.featured)
  const rest = projects.filter((p) => !p.featured)

  return (
    <section id="projects" className="relative py-24 md:py-32">
      <div
        className="pointer-events-none absolute -left-40 top-1/3 h-96 w-96 rounded-full bg-accent/6 blur-[140px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-40 bottom-1/4 h-80 w-80 rounded-full bg-accent-2/6 blur-[120px]"
        aria-hidden="true"
      />

      <div className="container-site relative z-10">
        <SectionHeading
          index={4}
          eyebrow="Work"
          title="Latest Projects"
          description="A selection of production-style work — from a full e-commerce storefront to an AI-powered form builder, a property rental platform and browser-based automation."
          accent="indigo"
        />

        <div className="space-y-8">
          {featured.map((project) => (
            <ProjectCard key={project.id} project={project} onOpenCaseStudy={onOpenCaseStudy} onShowCredentials={onShowCredentials} />
          ))}

          <div className="grid gap-8 md:grid-cols-2">
            {rest.map((project) => (
              <ProjectCard key={project.id} project={project} onOpenCaseStudy={onOpenCaseStudy} onShowCredentials={onShowCredentials} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
