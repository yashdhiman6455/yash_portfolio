/** Tiny class-name joiner. */
export function cn(...parts) {
  return parts.filter(Boolean).join(' ')
}
