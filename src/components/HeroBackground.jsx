import { useRef, useEffect, useState } from 'react'

export default function HeroBackground() {
  const canvasRef = useRef(null)
  const mouseRef = useRef({ x: 0, y: 0 })
  const animRef = useRef(null)
  const [isReduced, setIsReduced] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    setIsReduced(mq.matches)
    const handler = (e) => setIsReduced(e.matches)
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    let width = window.innerWidth
    let height = window.innerHeight

    const resize = () => {
      width = window.innerWidth
      height = window.innerHeight
      canvas.width = width * window.devicePixelRatio
      canvas.height = height * window.devicePixelRatio
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio)
    }

    resize()
    window.addEventListener('resize', resize)

    const onMouse = (e) => {
      mouseRef.current = { x: e.clientX, y: e.clientY }
    }
    window.addEventListener('mousemove', onMouse)

    const gridSize = 56
    const nodeCount = Math.min(40, Math.floor((width * height) / 25000))
    const nodes = Array.from({ length: nodeCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      size: Math.random() * 2 + 1,
    }))

    let time = 0

    const draw = () => {
      time += 1
      ctx.clearRect(0, 0, width, height)

      ctx.strokeStyle = 'rgba(99, 102, 241, 0.04)'
      ctx.lineWidth = 0.5

      for (let gx = 0; gx < width; gx += gridSize) {
        ctx.beginPath()
        ctx.moveTo(gx, 0)
        ctx.lineTo(gx, height)
        ctx.stroke()
      }
      for (let gy = 0; gy < height; gy += gridSize) {
        ctx.beginPath()
        ctx.moveTo(0, gy)
        ctx.lineTo(width, gy)
        ctx.stroke()
      }

      const mx = mouseRef.current.x
      const my = mouseRef.current.y

      if (!isReduced) {
        nodes.forEach((node) => {
          node.x += node.vx
          node.y += node.vy

          if (node.x < 0 || node.x > width) node.vx *= -1
          if (node.y < 0 || node.y > height) node.vy *= -1

          const dx = mx - node.x
          const dy = my - node.y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 200) {
            node.x -= dx * 0.001
            node.y -= dy * 0.001
          }
        })
      }

      nodes.forEach((node) => {
        const pulse = Math.sin(time * 0.02 + node.x * 0.01) * 0.3 + 0.7
        ctx.fillStyle = `rgba(167, 139, 250, ${0.3 * pulse})`
        ctx.beginPath()
        ctx.arc(node.x, node.y, node.size, 0, Math.PI * 2)
        ctx.fill()
      })

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x
          const dy = nodes[i].y - nodes[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 150) {
            const alpha = (1 - dist / 150) * 0.08
            ctx.strokeStyle = `rgba(139, 92, 246, ${alpha})`
            ctx.lineWidth = 0.5
            ctx.beginPath()
            ctx.moveTo(nodes[i].x, nodes[i].y)
            ctx.lineTo(nodes[j].x, nodes[j].y)
            ctx.stroke()
          }
        }
      }

      const gridMouseX = Math.round(mx / gridSize) * gridSize
      const gridMouseY = Math.round(my / gridSize) * gridSize
      const glowRadius = 120
      const gradient = ctx.createRadialGradient(
        gridMouseX, gridMouseY, 0,
        gridMouseX, gridMouseY, glowRadius,
      )
      gradient.addColorStop(0, 'rgba(139, 92, 246, 0.06)')
      gradient.addColorStop(1, 'rgba(139, 92, 246, 0)')
      ctx.fillStyle = gradient
      ctx.beginPath()
      ctx.arc(gridMouseX, gridMouseY, glowRadius, 0, Math.PI * 2)
      ctx.fill()

      animRef.current = requestAnimationFrame(draw)
    }

    animRef.current = requestAnimationFrame(draw)

    return () => {
      cancelAnimationFrame(animRef.current)
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', onMouse)
    }
  }, [isReduced])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 h-full w-full"
      style={{ width: '100%', height: '100%' }}
      aria-hidden="true"
    />
  )
}
