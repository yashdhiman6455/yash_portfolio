import { useState } from 'react'
import {
  AlertCircle,
  ArrowUpRight,
  CheckCircle2,
  Loader2,
  Mail,
  MapPin,
  Phone,
} from 'lucide-react'
import { contact, site } from '../config/site'
import { submitContactMessage, mailtoHref } from '../lib/contact'
import { cn } from '../lib/cn'
import Reveal from './shared/Reveal'
import SectionHeading from './shared/SectionHeading'
import { GitHubIcon, LinkedInIcon, WhatsAppIcon } from './shared/BrandIcons'

const channelIcons = {
  mail: (className) => <Mail size={16} className={className} />,
  whatsapp: (className) => <WhatsAppIcon size={16} className={className} />,
  linkedin: (className) => <LinkedInIcon size={16} className={className} />,
  github: (className) => <GitHubIcon size={16} className={className} />,
}

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function Field({ label, error, children, fieldId }) {
  return (
    <div>
      <label
        htmlFor={fieldId}
        className="mb-1.5 block font-mono text-[11px] uppercase tracking-[0.16em] text-faint"
      >
        {label}
      </label>
      {children}
      {error && (
        <p id={`${fieldId}-error`} role="alert" className="mt-1.5 text-xs text-red-500">
          {error}
        </p>
      )}
    </div>
  )
}

const inputClass = (hasError) =>
  cn(
    'w-full rounded-lg border bg-surface-2/50 px-4 py-2.5 text-sm text-text placeholder:text-faint transition-colors',
    'focus:border-accent-emerald focus:outline-none focus:ring-2 focus:ring-accent-emerald/25',
    hasError ? 'border-red-500/60' : 'border-line',
  )

function ContactForm() {
  const [values, setValues] = useState({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle')

  const setValue = (key) => (e) => {
    setValues((v) => ({ ...v, [key]: e.target.value }))
    if (errors[key]) setErrors((err) => ({ ...err, [key]: undefined }))
  }

  const validate = () => {
    const next = {}
    if (values.name.trim().length < 2) next.name = 'Please enter your name.'
    if (!EMAIL_PATTERN.test(values.email.trim())) next.email = 'Please enter a valid email address.'
    if (values.message.trim().length < 10) next.message = 'Message must be at least 10 characters.'
    setErrors(next)
    return Object.keys(next).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!validate()) return
    setStatus('submitting')
    const { whatsappUrl } = submitContactMessage(values)
    window.open(whatsappUrl, '_blank', 'noopener')
    setTimeout(() => {
      setStatus('success')
      setValues({ name: '', email: '', message: '' })
    }, 700)
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="card-tinted space-y-5 rounded-3xl p-6 md:p-8"
      style={{
        '--tint': 'rgba(110, 231, 183, 0.08)',
        '--tint-2': 'rgba(34, 211, 238, 0.07)',
      }}
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Name" error={errors.name} fieldId="cf-name">
          <input
            id="cf-name"
            type="text"
            value={values.name}
            onChange={setValue('name')}
            placeholder="Your name"
            autoComplete="name"
            className={inputClass(errors.name)}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? 'cf-name-error' : undefined}
          />
        </Field>
        <Field label="Email" error={errors.email} fieldId="cf-email">
          <input
            id="cf-email"
            type="email"
            value={values.email}
            onChange={setValue('email')}
            placeholder="you@example.com"
            autoComplete="email"
            className={inputClass(errors.email)}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? 'cf-email-error' : undefined}
          />
        </Field>
      </div>

      <Field label="Message" error={errors.message} fieldId="cf-message">
        <textarea
          id="cf-message"
          rows={5}
          value={values.message}
          onChange={setValue('message')}
          placeholder="Tell me about your project or opportunity…"
          className={cn(inputClass(errors.message), 'resize-none')}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? 'cf-message-error' : undefined}
        />
      </Field>

      {status === 'success' && (
        <div
          role="status"
          className="flex items-start gap-2.5 rounded-lg border border-status/30 bg-status/10 px-4 py-3 text-sm text-status"
        >
          <CheckCircle2 size={17} className="mt-0.5 shrink-0" />
          <span>Message ready — it should open in WhatsApp. Thank you for reaching out!</span>
        </div>
      )}

      {status === 'error' && (
        <div
          role="alert"
          className="flex items-start gap-2.5 rounded-lg border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-500"
        >
          <AlertCircle size={17} className="mt-0.5 shrink-0" />
          <span>Something went wrong sending your message. Please try again or email me directly.</span>
        </div>
      )}

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="group inline-flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-emerald-500 to-cyan-500 px-6 py-3 text-sm font-medium text-white shadow-lg shadow-emerald-600/20 transition-all hover:shadow-emerald-600/35 hover:brightness-110 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-emerald active:scale-[0.99] disabled:pointer-events-none disabled:opacity-60 sm:w-auto"
      >
        {status === 'submitting' ? (
          <>
            <Loader2 size={16} className="animate-spin" />
            Sending…
          </>
        ) : (
          <>
            Send Message
            <ArrowUpRight size={15} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </>
        )}
      </button>
    </form>
  )
}

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 md:py-32">
      <div
        className="pointer-events-none absolute -left-40 bottom-40 h-96 w-96 rounded-full bg-accent-emerald/10 blur-[140px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-40 top-24 h-96 w-96 rounded-full bg-accent-cyan/10 blur-[140px]"
        aria-hidden="true"
      />

      <div className="container-site relative">
        <SectionHeading
          index={6}
          eyebrow={contact.eyebrow}
          title={contact.title}
          description={contact.text}
          accent="emerald"
        />

        <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:gap-8">
          <Reveal>
            <aside
              className="card-edge flex h-full flex-col rounded-3xl p-6 md:p-8"
              style={{
                '--edge-a': 'rgba(52, 211, 153, 0.5)',
                '--edge-b': 'rgba(34, 211, 238, 0.4)',
                '--edge-glow': 'rgba(52, 211, 153, 0.22)',
              }}
            >
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent-emerald">
                Get in touch
              </p>
              <h3 className="mt-3 font-display text-2xl font-semibold tracking-tight text-text md:text-3xl">
                Let&apos;s build something great together.
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                Open to freelance work, full-time roles and interesting collaborations — I typically
                respond within a couple of days.
              </p>

              <div className="mt-8 space-y-3">
                {contact.channels.map((channel) => {
                  const Icon = channelIcons[channel.icon]
                  const isEmail = channel.icon === 'mail'
                  const href = isEmail ? mailtoHref : channel.href
                  const target = isEmail ? undefined : '_blank'
                  return (
                    <a
                      key={channel.label}
                      href={href}
                      target={target}
                      rel={isEmail ? undefined : 'noopener noreferrer'}
                      className={`group flex items-center gap-4 rounded-xl border p-4 transition-all duration-300 ${
                        isEmail
                          ? 'border-accent-emerald/40 bg-accent-emerald/10 hover:bg-accent-emerald/15'
                          : 'border-line bg-background/40 hover:border-accent-emerald/40 hover:bg-background/60'
                      }`}
                    >
                      <span
                        className={`grid h-10 w-10 shrink-0 place-items-center rounded-lg border ${
                          isEmail
                            ? 'border-accent-emerald/50 bg-accent-emerald/15'
                            : 'border-accent-emerald/25 bg-accent-emerald/10'
                        }`}
                      >
                        {Icon('text-accent-emerald')}
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block text-sm font-medium text-text">{channel.label}</span>
                        <span className="block truncate font-mono text-xs text-faint">
                          {channel.value}
                        </span>
                      </span>
                      <ArrowUpRight
                        size={16}
                        className="shrink-0 text-faint transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent-emerald"
                      />
                    </a>
                  )
                })}

                <a
                  href="tel:+918569885563"
                  className="group flex items-center gap-4 rounded-xl border border-line bg-background/40 p-4 transition-all duration-300 hover:border-accent-emerald/40 hover:bg-background/60"
                >
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg border border-accent-emerald/25 bg-accent-emerald/10">
                    <Phone size={16} className="text-accent-emerald" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-sm font-medium text-text">Phone</span>
                    <span className="block truncate font-mono text-xs text-faint">{site.phone}</span>
                  </span>
                  <ArrowUpRight
                    size={16}
                    className="shrink-0 text-faint transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent-emerald"
                  />
                </a>

                <div className="flex items-center gap-4 rounded-xl border border-line bg-background/40 p-4">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg border border-accent-emerald/25 bg-accent-emerald/10">
                    <MapPin size={16} className="text-accent-emerald" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-sm font-medium text-text">Location</span>
                    <span className="block font-mono text-xs text-faint">{site.location}</span>
                  </span>
                </div>
              </div>

              <div className="mt-auto pt-8">
                <div className="rounded-2xl border border-line bg-background/40 p-4 text-[13px] leading-relaxed text-muted">
                  Prefer email? Reach me at{' '}
                  <a
                    href={mailtoHref}
                    className="font-semibold text-accent-emerald underline-offset-4 hover:underline"
                  >
                    {contact.channels[0].value}
                  </a>{' '}
                  — I typically respond within a couple of days.
                </div>
              </div>
            </aside>
          </Reveal>

          <Reveal delay={0.1}>
            <ContactForm />
          </Reveal>
        </div>
      </div>
    </section>
  )
}
