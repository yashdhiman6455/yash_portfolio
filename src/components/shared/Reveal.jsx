import { motion, useReducedMotion } from 'framer-motion'
import { EASE } from '../../lib/motion'

/**
 * Scroll-reveal wrapper. Disables the vertical translate for users who
 * prefer reduced motion — only opacity fades remain.
 */
export default function Reveal({ children, className = '', delay = 0, y = 24 }) {
  const reduce = useReducedMotion()

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: reduce ? 0 : y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease: EASE, delay }}
    >
      {children}
    </motion.div>
  )
}
