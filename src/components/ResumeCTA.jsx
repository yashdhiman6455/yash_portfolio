import { ArrowRight, ArrowUpRight, Download, FileText } from 'lucide-react'
import { resume, site } from '../config/site'
import Reveal from './shared/Reveal'
import Button from './shared/Button'

export default function ResumeCTA() {
  return (
    <section id="resume" className="py-24 md:py-32">
      <div className="container-site">
        <Reveal>
          <div className="card-surface relative overflow-hidden rounded-3xl px-6 py-14 text-center md:px-16 md:py-20">
            <div className="bg-grid mask-radial absolute inset-0 opacity-50" aria-hidden="true" />
            <div
              className="absolute -top-28 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-accent/15 blur-[110px]"
              aria-hidden="true"
            />

            <div className="relative">
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-faint">
                {resume.eyebrow}
              </p>
              <h2 className="mx-auto mt-4 max-w-xl font-display text-3xl font-semibold tracking-tight text-text sm:text-4xl">
                {resume.title}
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-[15px] leading-relaxed text-muted sm:text-base">
                {resume.text}
              </p>

              <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
                <Button href={resume.primaryCta.href} size="lg" download={site.resumeDownloadName}>
                  <Download size={16} />
                  {resume.primaryCta.label}
                </Button>
                <Button href={resume.secondaryCta.href} variant="secondary" size="lg">
                  {resume.secondaryCta.label}
                  <ArrowRight size={16} />
                </Button>

                <a
                  href={site.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-muted transition-colors hover:text-accent"
                >
                  <FileText size={15} />
                  View Resume
                  <ArrowUpRight size={14} />
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
