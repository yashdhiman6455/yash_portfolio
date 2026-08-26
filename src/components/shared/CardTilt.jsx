import { useRef, useState } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'

export default function CardTilt({
  children,
  className = '',
  glareEnable = true,
  depth = 12,
  glareIntensity = 0.12,
  scaleOnHover = 1.02,
  ...props
}) {
  const ref = useRef(null)
  const [isHovered, setIsHovered] = useState(false)

  const x = useMotionValue(0.5)
  const y = useMotionValue(0.5)

  const rotateX = useSpring(useTransform(y, [0, 1], [depth, -depth]), { stiffness: 250, damping: 25 })
  const rotateY = useSpring(useTransform(x, [0, 1], [-depth, depth]), { stiffness: 250, damping: 25 })
  const glareX = useSpring(useTransform(x, [0, 1], [0, 100]), { stiffness: 250, damping: 25 })
  const glareY = useSpring(useTransform(y, [0, 1], [0, 100]), { stiffness: 250, damping: 25 })
  const scale = useSpring(isHovered ? scaleOnHover : 1, { stiffness: 300, damping: 25 })
  const translateZ = useSpring(isHovered ? 30 : 0, { stiffness: 300, damping: 25 })

  const glareGradient = useTransform(
    [glareX, glareY],
    ([gx, gy]) =>
      `radial-gradient(circle at ${gx}% ${gy}%, rgba(255,255,255,${glareIntensity}) 0%, transparent 55%)`,
  )

  const edgeGlow = useTransform(
    [glareX, glareY],
    ([gx, gy]) =>
      `radial-gradient(circle at ${gx}% ${gy}%, rgba(139, 92, 246, 0.15) 0%, transparent 50%)`,
  )

  const handleMouseMove = (e) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    x.set((e.clientX - rect.left) / rect.width)
    y.set((e.clientY - rect.top) / rect.height)
  }

  const handleMouseEnter = () => setIsHovered(true)
  const handleMouseLeave = () => {
    setIsHovered(false)
    x.set(0.5)
    y.set(0.5)
  }

  return (
    <motion.div
      ref={ref}
      style={{
        rotateX,
        rotateY,
        scale,
        transformPerspective: 1200,
        transformStyle: 'preserve-3d',
        translateZ,
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={className}
      {...props}
    >
      {children}
      {glareEnable && (
        <>
          <motion.div
            className="pointer-events-none absolute inset-0 z-10 rounded-[inherit] opacity-0"
            style={{ background: glareGradient }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          />
          <motion.div
            className="pointer-events-none absolute -inset-px z-0 rounded-[inherit] opacity-0"
            style={{ background: edgeGlow }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.4 }}
          />
        </>
      )}
    </motion.div>
  )
}
