import { useEffect } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function CustomCursor() {
  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)
  const springConfig = { damping: 25, stiffness: 200, mass: 0.5 }
  const x = useSpring(cursorX, springConfig)
  const y = useSpring(cursorY, springConfig)
  const size = useMotionValue(32)
  const springSize = useSpring(size, { damping: 20, stiffness: 300 })

  useEffect(() => {
    if (typeof window === 'undefined') return
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0
    if (isTouchDevice) return

    let isReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const onMouseMove = (e) => {
      if (isReduced) return
      cursorX.set(e.clientX)
      cursorY.set(e.clientY)
    }

    const onMouseEnterInteractive = () => size.set(48)
    const onMouseLeaveInteractive = () => size.set(32)

    window.addEventListener('mousemove', onMouseMove)

    const interactiveEls = document.querySelectorAll('a, button, [role="button"], input, textarea, select')
    interactiveEls.forEach((el) => {
      el.addEventListener('mouseenter', onMouseEnterInteractive)
      el.addEventListener('mouseleave', onMouseLeaveInteractive)
    })

    return () => {
      window.removeEventListener('mousemove', onMouseMove)
      interactiveEls.forEach((el) => {
        el.removeEventListener('mouseenter', onMouseEnterInteractive)
        el.removeEventListener('mouseleave', onMouseLeaveInteractive)
      })
    }
  }, [])

  if (typeof window !== 'undefined' && ('ontouchstart' in window || navigator.maxTouchPoints > 0)) {
    return null
  }

  return (
    <motion.div
      className="pointer-events-none fixed left-0 top-0 z-[9999] hidden rounded-full border border-accent/30 bg-accent/5 backdrop-blur-sm lg:block"
      style={{
        x,
        y,
        width: springSize,
        height: springSize,
        translateX: '-50%',
        translateY: '-50%',
      }}
      aria-hidden="true"
    />
  )
}
