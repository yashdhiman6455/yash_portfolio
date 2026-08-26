import { motion, useReducedMotion } from 'framer-motion'
import { EASE } from '../../lib/motion'

export default function Reveal({ children, className = '', delay = 0, y = 30, rotateX = 0 }) {
  const reduce = useReducedMotion()

  return (
    <motion.div
      className={className}
      initial={{
        opacity: 0,
        y: reduce ? 0 : y,
        filter: reduce ? 'none' : 'blur(6px)',
        rotateX: reduce ? 0 : rotateX,
        transformPerspective: 1200,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
        rotateX: 0,
      }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.8, ease: EASE, delay }}
    >
      {children}
    </motion.div>
  )
}
