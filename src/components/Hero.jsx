import { Suspense, lazy } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight, ChevronDown, Download } from 'lucide-react'
import { site, hero } from '../config/site'
import { heroStagger, heroItem } from '../lib/motion'
import { GitHubIcon, LinkedInIcon } from './shared/BrandIcons'
import MagneticButton from './shared/MagneticButton'
import Button from './shared/Button'

const HeroScene = lazy(() => import('./HeroScene'))

export default function Hero() {
  const reduce = useReducedMotion()

  return (
    <section id="home" className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* 3D Three.js Scene */}
      <div className="absolute inset-0" aria-hidden="true">
        <Suspense fallback={null}>
          <HeroScene />
        </Suspense>
      </div>

      {/* Gradient overlay for readability */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/30 via-transparent to-background/30" />
        <div className="bg-grid mask-hero absolute inset-0 opacity-40" />
      </div>

      <div className="container-site relative pb-24 pt-36 text-center">
        <motion.div variants={heroStagger} initial="hidden" animate="visible">
          {/* Profile Image */}
          <motion.div variants={heroItem}>
            <div className="relative mx-auto mb-8 h-36 w-36">
              <div className="absolute -inset-4 rounded-full bg-gradient-to-br from-indigo-500 via-violet-500 to-purple-600 opacity-40 blur-2xl animate-pulse-glow" aria-hidden="true" />
              <div className="absolute -inset-2 rounded-full" aria-hidden="true">
                <svg viewBox="0 0 200 200" className="h-full w-full animate-ring-rotate" style={{ animationDuration: '12s' }}>
                  <defs>
                    <linearGradient id="ring-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.8" />
                      <stop offset="25%" stopColor="#6366f1" stopOpacity="0.3" />
                      <stop offset="50%" stopColor="#06b6d4" stopOpacity="0.8" />
                      <stop offset="75%" stopColor="#6366f1" stopOpacity="0.3" />
                      <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.8" />
                    </linearGradient>
                  </defs>
                  <circle cx="100" cy="100" r="96" fill="none" stroke="url(#ring-gradient)" strokeWidth="1.5" strokeDasharray="8 4" />
                </svg>
              </div>
              <img
                src="/images/profile.webp"
                alt={site.name}
                width={144}
                height={144}
                fetchpriority="high"
                className="relative h-36 w-36 rounded-full border-2 border-white/10 object-cover ring-2 ring-accent/30 shadow-2xl shadow-accent/20"
              />
            </div>
          </motion.div>

          {/* Availability badge */}
          <motion.div variants={heroItem}>
            <span className="inline-flex items-center gap-2.5 rounded-full border border-status/25 bg-status/8 px-5 py-2 text-xs font-medium text-status backdrop-blur-md shadow-lg shadow-status/5">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-status opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-status" />
              </span>
              {hero.badge}
            </span>
          </motion.div>

          {/* Eyebrow */}
          <motion.p
            variants={heroItem}
            className="mt-8 font-mono text-xs uppercase tracking-[0.45em] text-faint"
          >
            {hero.eyebrow}
          </motion.p>

          {/* Main Heading */}
          <motion.h1
            variants={heroItem}
            className="mx-auto mt-6 max-w-4xl font-display text-[3rem] font-bold leading-[1.04] tracking-tight text-text sm:text-6xl lg:text-7xl xl:text-8xl"
          >
            {hero.headingA}
            <br className="hidden sm:block" />
            <span className="text-muted">
              building{' '}
              <span className="text-gradient font-serif font-normal italic">
                {hero.headingB}
              </span>
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={heroItem}
            className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-muted sm:text-lg lg:text-xl"
          >
            {hero.description}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={heroItem}
            className="mt-12 flex flex-wrap items-center justify-center gap-4"
          >
            <MagneticButton strength={0.15}>
              <Button href={hero.primaryCta.href} size="lg" className="btn-glow shadow-xl shadow-violet-600/20">
                {hero.primaryCta.label}
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
              </Button>
            </MagneticButton>
            <MagneticButton strength={0.15}>
              <Button href={site.resumeUrl} variant="secondary" size="lg" download={site.resumeDownloadName}>
                <Download size={16} />
                {hero.secondaryCta.label}
              </Button>
            </MagneticButton>
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={heroItem}
            className="mt-8 flex items-center justify-center gap-6 text-sm"
          >
            <MagneticButton strength={0.2}>
              <a
                href={site.githubUrl}
                className="inline-flex items-center gap-2.5 text-muted transition-colors duration-300 hover:text-text"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GitHubIcon size={16} />
                GitHub
              </a>
            </MagneticButton>
            <span className="h-4 w-px bg-line-strong/50" aria-hidden="true" />
            <MagneticButton strength={0.2}>
              <a
                href={site.linkedinUrl}
                className="inline-flex items-center gap-2.5 text-muted transition-colors duration-300 hover:text-text"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedInIcon size={16} />
                LinkedIn
              </a>
            </MagneticButton>
          </motion.div>

          {/* Tech Stack */}
          <motion.div
            variants={heroItem}
            className="mx-auto mt-24 flex max-w-3xl flex-wrap items-center justify-center gap-x-3.5 gap-y-2"
            aria-label={`Technology stack: ${hero.techStack.join(', ')}`}
          >
            <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-faint">
              Stack
            </span>
            <span className="h-3 w-px bg-line-strong/50" aria-hidden="true" />
            {hero.techStack.map((tech, i) => (
              <span key={tech} className="flex items-center gap-3.5">
                <span className="font-mono text-xs text-muted transition-all duration-300 hover:text-accent tech-badge-shine cursor-default px-2 py-0.5 rounded-lg hover:bg-accent/5 hover:shadow-sm hover:shadow-accent/10">
                  {tech}
                </span>
                {i < hero.techStack.length - 1 && (
                  <span className="text-faint/50" aria-hidden="true">
                    •
                  </span>
                )}
              </span>
            ))}
          </motion.div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        aria-label="Scroll to About section"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 rounded-full p-2.5 text-faint transition-colors duration-300 hover:text-text hover:bg-surface/30 backdrop-blur-sm"
        animate={reduce ? undefined : { y: [0, 10, 0] }}
        transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
      >
        <ChevronDown size={22} />
      </motion.a>
    </section>
  )
}
