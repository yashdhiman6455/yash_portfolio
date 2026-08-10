import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { Check, Copy, ExternalLink, Eye, EyeOff, Lock, X } from 'lucide-react'
import { EASE } from '../lib/motion'
import { cn } from '../lib/cn'
import Button from './shared/Button'

async function copyToClipboard(value) {
  try {
    await navigator.clipboard.writeText(value)
  } catch {
    const textarea = document.createElement('textarea')
    textarea.value = value
    textarea.style.position = 'fixed'
    textarea.style.opacity = '0'
    document.body.appendChild(textarea)
    textarea.select()
    document.execCommand('copy')
    document.body.removeChild(textarea)
  }
}

function useCopied() {
  const [copied, setCopied] = useState(false)
  const timer = useRef(null)
  const copy = async (value) => {
    await copyToClipboard(value)
    setCopied(true)
    clearTimeout(timer.current)
    timer.current = setTimeout(() => setCopied(false), 1600)
  }
  return { copied, copy }
}

function CopyButton({ label, copied, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={`Copy ${label.toLowerCase()}`}
      className={cn(
        'inline-flex shrink-0 items-center gap-1.5 rounded-md border px-2.5 py-1.5 text-xs font-medium transition-colors',
        copied
          ? 'border-status/40 bg-status/10 text-status'
          : 'border-line-strong text-muted hover:border-accent/50 hover:text-accent',
      )}
    >
      {copied ? (
        <>
          <Check size={13} />
          Copied!
        </>
      ) : (
        <>
          <Copy size={13} />
          Copy
        </>
      )}
    </button>
  )
}

function EmailField({ value }) {
  const { copied, copy } = useCopied()
  return (
    <div>
      <div className="mb-1.5 font-mono text-[11px] uppercase tracking-[0.16em] text-faint">Email</div>
      <div className="flex items-center gap-2 rounded-lg border border-line bg-surface-2/50 px-3 py-2">
        <span className="min-w-0 flex-1 truncate font-mono text-sm text-text">{value}</span>
        <CopyButton label="email" copied={copied} onClick={() => copy(value)} />
      </div>
    </div>
  )
}

function PasswordField({ value }) {
  const [show, setShow] = useState(false)
  const { copied, copy } = useCopied()
  return (
    <div>
      <div className="mb-1.5 font-mono text-[11px] uppercase tracking-[0.16em] text-faint">Password</div>
      <div className="flex items-center gap-2 rounded-lg border border-line bg-surface-2/50 px-3 py-2">
        <span className="min-w-0 flex-1 truncate font-mono text-sm tracking-wider text-text">
          {show ? value : '••••••••••••'}
        </span>
        <button
          type="button"
          onClick={() => setShow((v) => !v)}
          aria-label={show ? 'Hide password' : 'Show password'}
          className="grid h-8 w-8 shrink-0 place-items-center rounded-md text-muted transition-colors hover:border-accent/50 hover:text-accent"
        >
          {show ? <EyeOff size={15} /> : <Eye size={15} />}
        </button>
        <CopyButton label="password" copied={copied} onClick={() => copy(value)} />
      </div>
    </div>
  )
}

export default function DemoCredentialsModal({ project, onClose }) {
  const reduce = useReducedMotion()
  const closeRef = useRef(null)
  const [activeRole, setActiveRole] = useState(0)

  const credentials = project?.demoCredentials || []
  const active = credentials[activeRole] || credentials[0]

  useEffect(() => {
    if (!project) return undefined
    setActiveRole(0)

    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    const prevFocus = document.activeElement
    closeRef.current?.focus()

    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
      prevFocus?.focus()
    }
  }, [project, onClose])

  return (
    <AnimatePresence>
      {project && credentials.length > 0 && (
        <div className="fixed inset-0 z-[100]">
          <motion.div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
            aria-hidden="true"
          />

          <div className="pointer-events-none absolute inset-0 flex items-center justify-center p-4 sm:p-6">
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-labelledby="demo-credentials-title"
              className="pointer-events-auto w-full max-w-md overflow-hidden rounded-2xl border border-line bg-background shadow-2xl shadow-black/40"
              initial={{ opacity: 0, y: reduce ? 0 : 24, scale: reduce ? 1 : 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: reduce ? 0 : 16, scale: reduce ? 1 : 0.97 }}
              transition={{ duration: 0.3, ease: EASE }}
            >
              <header className="flex items-start justify-between gap-4 border-b border-line px-6 py-5">
                <div>
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-accent/30 bg-accent/10 px-2.5 py-0.5 text-[11px] font-medium text-accent">
                    <Lock size={11} />
                    Demo Credentials
                  </span>
                  <h2
                    id="demo-credentials-title"
                    className="mt-2.5 font-display text-xl font-semibold tracking-tight text-text"
                  >
                    {project.name}
                  </h2>
                  <p className="mt-1 text-sm text-muted">Use these credentials to explore the live demo.</p>
                </div>
                <button
                  ref={closeRef}
                  type="button"
                  onClick={onClose}
                  aria-label="Close demo credentials"
                  className="grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-line-strong text-muted transition-colors hover:border-accent/50 hover:text-text"
                >
                  <X size={17} />
                </button>
              </header>

              <div className="space-y-4 px-6 py-6">
                {credentials.length > 1 && (
                  <div className="flex flex-wrap gap-1.5">
                    {credentials.map((cred, i) => (
                      <button
                        key={cred.role}
                        type="button"
                        onClick={() => setActiveRole(i)}
                        aria-pressed={i === activeRole}
                        className={cn(
                          'rounded-md border px-2.5 py-1 font-mono text-[11px] transition-colors',
                          i === activeRole
                            ? 'border-accent/50 bg-accent/10 text-accent'
                            : 'border-line-strong text-muted hover:text-text',
                        )}
                      >
                        {cred.role}
                      </button>
                    ))}
                  </div>
                )}

                {active && (
                  <>
                    <EmailField value={active.email} />
                    <PasswordField value={active.password} />
                  </>
                )}
              </div>

              <footer className="flex items-center gap-3 border-t border-line px-6 py-5">
                <Button href={project.links.demo} size="md" className="flex-1">
                  <ExternalLink size={15} />
                  Open Live Demo
                </Button>
                <Button variant="secondary" size="md" onClick={onClose}>
                  Close
                </Button>
              </footer>
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  )
}
