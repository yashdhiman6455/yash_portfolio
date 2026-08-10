import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { Download, Moon, Sun } from 'lucide-react'
import { site, navLinks } from '../config/site'
import useTheme from '../hooks/useTheme'
import useScrollSpy from '../hooks/useScrollSpy'
import { cn } from '../lib/cn'
import { EASE } from '../lib/motion'
import { GitHubIcon, LinkedInIcon } from './shared/BrandIcons'

function ThemeToggle({ className }) {
  const { theme, toggle } = useTheme()
  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      className={cn(
        'grid h-9 w-9 place-items-center rounded-lg border border-line-strong text-muted transition-colors hover:border-accent/50 hover:text-text',
        className,
      )}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={theme}
          initial={{ rotate: -90, opacity: 0, scale: 0.6 }}
          animate={{ rotate: 0, opacity: 1, scale: 1 }}
          exit={{ rotate: 90, opacity: 0, scale: 0.6 }}
          transition={{ duration: 0.2, ease: EASE }}
          className="grid place-items-center"
        >
          {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
        </motion.span>
      </AnimatePresence>
    </button>
  )
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const active = useScrollSpy()
  const reduce = useReducedMotion()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const socialIconClass = 'h-9 w-9 grid place-items-center rounded-lg text-muted hover:text-text transition-colors'
  const placeholderGithub = site.githubUrl === 'YOUR_GITHUB_URL'

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        scrolled || open
          ? 'border-b border-line bg-background/75 backdrop-blur-xl'
          : 'border-b border-transparent bg-transparent',
      )}
    >
      <div className="container-site flex h-16 items-center justify-between gap-4 md:h-[4.5rem]">
        <a href="#home" className="flex shrink-0 items-center gap-2.5" aria-label={`${site.name} — home`}>
          <span className="font-display text-xl font-bold tracking-tight text-text sm:text-2xl">
            {site.name}
          </span>
        </a>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {navLinks.map((link) => {
            const isActive = active === link.href.slice(1)
            return (
              <a
                key={link.href}
                href={link.href}
                aria-current={isActive ? 'true' : undefined}
                className={cn(
                  'relative px-3 py-2 text-sm transition-colors',
                  isActive ? 'text-text' : 'text-muted hover:text-text',
                )}
              >
                {link.label}
                {isActive && !reduce && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute inset-x-3 -bottom-0.5 h-px bg-accent"
                    transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                  />
                )}
              </a>
            )
          })}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <a
            href={site.githubUrl}
            aria-label="GitHub (placeholder)"
            className={socialIconClass}
            {...(placeholderGithub ? {} : { target: '_blank', rel: 'noopener noreferrer' })}
          >
            <GitHubIcon size={17} />
          </a>
          <a
            href={site.linkedinUrl}
            aria-label="LinkedIn (placeholder)"
            className={socialIconClass}
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedInIcon size={17} />
          </a>
          <ThemeToggle className="ml-1" />
          <a
            href={site.resumeUrl}
            download={site.resumeDownloadName}
            className="ml-2 inline-flex items-center gap-2 rounded-lg border border-line-strong bg-surface/50 px-3.5 py-2 text-sm font-medium text-text transition-all hover:border-accent/50 hover:bg-surface active:scale-[0.98]"
          >
            <Download size={15} />
            Resume
          </a>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="grid h-9 w-9 place-items-center rounded-lg border border-line-strong text-text transition-colors hover:border-accent/50"
          >
            <div className="relative h-3.5 w-5" aria-hidden="true">
              <motion.span
                className="absolute left-0 top-0 h-[1.5px] w-5 rounded-full bg-current"
                animate={open ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.25, ease: EASE }}
              />
              <motion.span
                className="absolute left-0 top-1/2 h-[1.5px] w-5 -translate-y-1/2 rounded-full bg-current"
                animate={open ? { opacity: 0, x: -8 } : { opacity: 1, x: 0 }}
                transition={{ duration: 0.2, ease: EASE }}
              />
              <motion.span
                className="absolute bottom-0 left-0 h-[1.5px] w-5 rounded-full bg-current"
                animate={open ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.25, ease: EASE }}
              />
            </div>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: EASE }}
            className="overflow-hidden border-b border-line bg-background/95 backdrop-blur-xl lg:hidden"
          >
            <nav className="container-site flex flex-col gap-1 pb-6 pt-2" aria-label="Mobile">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: reduce ? 0 : -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, ease: EASE, delay: i * 0.04 }}
                  className={cn(
                    'flex items-center justify-between rounded-lg px-3 py-3 text-base transition-colors',
                    active === link.href.slice(1)
                      ? 'bg-surface text-text'
                      : 'text-muted hover:text-text',
                  )}
                >
                  {link.label}
                  <span className="font-mono text-xs text-faint">
                    /{String(i + 1).padStart(2, '0')}
                  </span>
                </motion.a>
              ))}

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.25 }}
                className="mt-4 flex items-center gap-2 border-t border-line pt-4"
              >
                <a
                  href={site.githubUrl}
                  aria-label="GitHub (placeholder)"
                  className="grid h-10 w-10 place-items-center rounded-lg border border-line-strong text-muted transition-colors hover:text-text"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GitHubIcon size={18} />
                </a>
                <a
                  href={site.linkedinUrl}
                  aria-label="LinkedIn (placeholder)"
                  className="grid h-10 w-10 place-items-center rounded-lg border border-line-strong text-muted transition-colors hover:text-text"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LinkedInIcon size={18} />
                </a>
                <a
                  href={site.resumeUrl}
                  download={site.resumeDownloadName}
                  className="ml-auto inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-indigo-600 to-violet-600 px-4 py-2.5 text-sm font-medium text-white"
                >
                  <Download size={15} />
                  Resume
                </a>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
