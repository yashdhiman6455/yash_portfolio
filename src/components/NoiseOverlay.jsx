import { useEffect, useRef } from 'react'

export default function NoiseOverlay() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    const w = 256
    const h = 256
    canvas.width = w
    canvas.height = h

    const imageData = ctx.createImageData(w, h)
    const data = imageData.data

    for (let i = 0; i < data.length; i += 4) {
      const v = Math.random() * 255
      data[i] = v
      data[i + 1] = v
      data[i + 2] = v
      data[i + 3] = 18
    }

    ctx.putImageData(imageData, 0, 0)
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-[9998] h-full w-full opacity-[0.035]"
      style={{
        mixBlendMode: 'overlay',
        imageRendering: 'pixelated',
      }}
      aria-hidden="true"
    />
  )
}
