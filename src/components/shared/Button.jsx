import { cn } from '../../lib/cn'

const base =
  'group inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg font-medium transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent disabled:pointer-events-none disabled:opacity-50'

const variants = {
  primary:
    'bg-gradient-to-r from-indigo-600 to-violet-600 text-white shadow-lg shadow-violet-600/20 hover:shadow-violet-600/35 hover:brightness-110 active:scale-[0.98]',
  secondary:
    'border border-line-strong bg-surface/50 text-text hover:border-accent/50 hover:bg-surface hover:brightness-110 active:scale-[0.98]',
  ghost: 'text-muted hover:text-text hover:bg-surface/70',
}

const sizes = {
  sm: 'px-3.5 py-2 text-sm',
  md: 'px-5 py-2.5 text-sm',
  lg: 'px-6 py-3 text-[15px]',
}

export default function Button({
  as,
  href,
  variant = 'primary',
  size = 'md',
  className = '',
  target,
  rel,
  onClick,
  type,
  disabled,
  download,
  ariaLabel,
  children,
}) {
  const Tag = as || (href ? 'a' : 'button')
  const isExternal = typeof href === 'string' && href.startsWith('http')

  return (
    <Tag
      href={Tag === 'a' ? href : undefined}
      type={Tag === 'button' ? type || 'button' : undefined}
      target={isExternal ? '_blank' : target}
      rel={isExternal ? 'noopener noreferrer' : rel}
      onClick={onClick}
      disabled={disabled}
      download={Tag === 'a' ? download : undefined}
      aria-label={ariaLabel}
      className={cn(base, variants[variant], sizes[size], className)}
    >
      {children}
    </Tag>
  )
}
