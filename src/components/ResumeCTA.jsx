import { ArrowRight, ArrowUpRight, Download, FileText } from 'lucide-react'
import { resume, site } from '../config/site'
import Reveal from './shared/Reveal'
import MagneticButton from './shared/MagneticButton'
import Button from './shared/Button'

export default function ResumeCTA() {
  return (
    <section id="resume" className="relative py-24 md:py-32">
      {/* Extra gradient orbs */}
      <div className="pointer-events-none absolute -right-32 top-1/3 h-72 w-72 rounded-full bg-accent-sky/8 blur-[120px]" aria-hidden="true" />
      <div className="pointer-events-none absolute -left-32 bottom-1/3 h-64 w-64 rounded-full bg-accent-emerald/6 blur-[100px]" aria-hidden="true" />

      <div className="container-site relative">
        <Reveal>
          <div className="card-surface relative overflow-hidden rounded-3xl px-6 py-14 text-center md:px-16 md:py-20">
            {/* Enhanced layered background */}
            <div className="bg-grid mask-radial absolute inset-0 opacity-50" aria-hidden="true" />
            <div
              className="absolute -top-28 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-accent/12 blur-[110px]"
              aria-hidden="true"
            />
            <div
              className="absolute -bottom-20 left-1/4 h-48 w-48 rounded-full bg-accent-2/10 blur-[100px]"
              aria-hidden="true"
            />
            <div
              className="absolute top-1/2 right-0 h-36 w-36 -translate-y-1/2 rounded-full bg-accent-sky/8 blur-[80px]"
              aria-hidden="true"
            />

            {/* Floating decorative elements */}
            <div
              className="absolute top-8 left-[15%] h-2 w-2 rounded-full bg-accent-sky/30 blur-[1px]"
              style={{ animation: 'float 7s ease-in-out infinite' }}
              aria-hidden="true"
            />
            <div
              className="absolute bottom-12 right-[20%] h-1.5 w-1.5 rounded-full bg-accent-emerald/30 blur-[1px]"
              style={{ animation: 'float 9s ease-in-out infinite 2s' }}
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

              <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
                <MagneticButton strength={0.12}>
                  <Button href={resume.primaryCta.href} size="lg" download={site.resumeDownloadName} className="btn-glow">
                    <Download size={16} />
                    {resume.primaryCta.label}
                  </Button>
                </MagneticButton>
                <MagneticButton strength={0.12}>
                  <Button href={resume.secondaryCta.href} variant="secondary" size="lg">
                    {resume.secondaryCta.label}
                    <ArrowRight size={16} />
                  </Button>
                </MagneticButton>

                <a
                  href={site.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-muted transition-colors duration-300 hover:text-accent"
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
