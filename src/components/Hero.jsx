import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight, ChevronDown, Download } from 'lucide-react'
import { site, hero } from '../config/site'
import { staggerContainer, staggerItem } from '../lib/motion'
import { GitHubIcon, LinkedInIcon } from './shared/BrandIcons'
import Button from './shared/Button'

export default function Hero() {
  const reduce = useReducedMotion()

  const orbTransition = { duration: 18, repeat: Infinity, ease: 'easeInOut' }

  return (
    <section id="home" className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Ambient background */}
      <div className="absolute inset-0" aria-hidden="true">
        <div className="bg-grid mask-radial absolute inset-0" />
        <motion.div
          className="absolute -left-32 top-24 h-[28rem] w-[28rem] rounded-full bg-accent/20 blur-[120px]"
          animate={reduce ? undefined : { x: [0, 60, 0], y: [0, 40, 0] }}
          transition={orbTransition}
        />
        <motion.div
          className="absolute -right-40 bottom-10 h-[26rem] w-[26rem] rounded-full bg-accent-2/15 blur-[120px]"
          animate={reduce ? undefined : { x: [0, -50, 0], y: [0, -30, 0] }}
          transition={{ ...orbTransition, duration: 22 }}
        />
      </div>

      <div className="container-site relative pb-24 pt-36 text-center">
        <motion.div variants={staggerContainer} initial="hidden" animate="visible">
          <motion.div variants={staggerItem}>
            <div className="relative mx-auto mb-8 h-28 w-28">
              <div
                className="absolute inset-0 rounded-full bg-gradient-to-br from-indigo-500 to-violet-600 opacity-60 blur-lg"
                aria-hidden="true"
              />
              <img
                src="/images/profile.png"
                alt={site.name}
                width={112}
                height={112}
                className="relative h-28 w-28 rounded-full border-2 border-white/10 object-cover ring-2 ring-accent/30"
              />
            </div>
          </motion.div>

          <motion.div variants={staggerItem}>
            <span className="inline-flex items-center gap-2 rounded-full border border-status/25 bg-status/10 px-3.5 py-1.5 text-xs font-medium text-status">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-status opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-status" />
              </span>
              {hero.badge}
            </span>
          </motion.div>

          <motion.p
            variants={staggerItem}
            className="mt-8 font-mono text-xs uppercase tracking-[0.35em] text-faint"
          >
            {hero.eyebrow}
          </motion.p>

          <motion.h1
            variants={staggerItem}
            className="mx-auto mt-4 max-w-4xl font-display text-[2.6rem] font-bold leading-[1.06] tracking-tight text-text sm:text-6xl lg:text-7xl"
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

          <motion.p
            variants={staggerItem}
            className="mx-auto mt-7 max-w-2xl text-base leading-relaxed text-muted sm:text-lg"
          >
            {hero.description}
          </motion.p>

          <motion.div
            variants={staggerItem}
            className="mt-10 flex flex-wrap items-center justify-center gap-3"
          >
            <Button href={hero.primaryCta.href} size="lg">
              {hero.primaryCta.label}
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
            </Button>
            <Button href={site.resumeUrl} variant="secondary" size="lg" download={site.resumeDownloadName}>
              <Download size={16} />
              {hero.secondaryCta.label}
            </Button>
          </motion.div>

          <motion.div
            variants={staggerItem}
            className="mt-7 flex items-center justify-center gap-6 text-sm"
          >
            <a
              href={site.githubUrl}
              className="inline-flex items-center gap-2 text-muted transition-colors hover:text-text"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHubIcon size={16} />
              GitHub
            </a>
            <span className="h-3.5 w-px bg-line-strong" aria-hidden="true" />
            <a
              href={site.linkedinUrl}
              className="inline-flex items-center gap-2 text-muted transition-colors hover:text-text"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedInIcon size={16} />
              LinkedIn
            </a>
          </motion.div>

          <motion.div
            variants={staggerItem}
            className="mx-auto mt-16 flex max-w-3xl flex-wrap items-center justify-center gap-x-2.5 gap-y-2"
            aria-label={`Technology stack: ${hero.techStack.join(', ')}`}
          >
            <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-faint">
              Stack
            </span>
            <span className="h-3 w-px bg-line-strong" aria-hidden="true" />
            {hero.techStack.map((tech, i) => (
              <span key={tech} className="flex items-center gap-2.5">
                <span className="font-mono text-xs text-muted">{tech}</span>
                {i < hero.techStack.length - 1 && (
                  <span className="text-faint" aria-hidden="true">
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
        className="absolute bottom-7 left-1/2 -translate-x-1/2 rounded-full p-2 text-faint transition-colors hover:text-text"
        animate={reduce ? undefined : { y: [0, 7, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
      >
        <ChevronDown size={20} />
      </motion.a>
    </section>
  )
}
