import { projects } from '../config/site'
import SectionHeading from './shared/SectionHeading'
import ProjectCard from './ProjectCard'

export default function Projects({ onOpenCaseStudy, onShowCredentials }) {
  const featured = projects.filter((p) => p.featured)
  const rest = projects.filter((p) => !p.featured)

  return (
    <section id="projects" className="py-24 md:py-32">
      <div className="container-site">
        <SectionHeading
          index={4}
          eyebrow="Work"
          title="Latest Projects"
          description="A selection of production-style work — from a full e-commerce storefront to an AI-powered form builder and browser-based automation."
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
