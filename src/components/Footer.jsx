import { ArrowUpRight, Mail } from 'lucide-react'
import { site } from '../config/site'
import { GitHubIcon, LinkedInIcon } from './shared/BrandIcons'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-line">
      <div className="container-site py-14">
        <div className="flex flex-col items-center gap-8 md:flex-row md:items-start md:justify-between">
          <div className="text-center md:text-left">
            <a href="#home" className="inline-flex items-center gap-2.5" aria-label="Back to top">
              <span className="grid h-9 w-9 place-items-center rounded-lg bg-gradient-to-br from-indigo-500 to-violet-600 font-display text-[13px] font-bold text-white shadow-lg shadow-violet-600/25">
                {site.initials}
              </span>
              <span className="font-display text-[15px] font-semibold tracking-tight text-text">
                {site.name}
              </span>
            </a>
            <p className="mt-3 font-mono text-xs text-faint">
              PHP Laravel Developer • Full-Stack Developer
            </p>
          </div>

          <nav aria-label="Footer" className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
            <a
              href={site.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-text"
            >
              <GitHubIcon size={15} />
              GitHub
            </a>
            <a
              href={site.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-text"
            >
              <LinkedInIcon size={15} />
              LinkedIn
            </a>
            <a
              href={`mailto:${site.email}`}
              className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-text"
            >
              <Mail size={15} />
              Email
            </a>
            <a
              href={site.resumeUrl}
              download={site.resumeDownloadName}
              className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-text"
            >
              Resume
              <ArrowUpRight size={13} />
            </a>
          </nav>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-line pt-6 text-xs text-faint md:flex-row">
          <p>© {year} Yash Dhiman. All rights reserved.</p>
          <p className="font-mono">Built with React • Tailwind CSS • Framer Motion</p>
        </div>
      </div>
    </footer>
  )
}
