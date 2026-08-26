import { useRef } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Float } from '@react-three/drei'

function Particles({ count = 100 }) {
  const mesh = useRef()
  const { viewport } = useThree()

  const positions = useRef(null)
  const speeds = useRef(null)

  if (!positions.current) {
    positions.current = new Float32Array(count * 3)
    speeds.current = new Float32Array(count)

    for (let i = 0; i < count; i++) {
      positions.current[i * 3] = (Math.random() - 0.5) * viewport.width * 2
      positions.current[i * 3 + 1] = (Math.random() - 0.5) * viewport.height * 2
      positions.current[i * 3 + 2] = (Math.random() - 0.5) * 2
      speeds.current[i] = Math.random() * 0.3 + 0.1
    }
  }

  useFrame((state) => {
    if (!mesh.current) return
    const time = state.clock.elapsedTime
    const posArray = mesh.current.geometry.attributes.position.array

    for (let i = 0; i < count; i++) {
      const i3 = i * 3
      posArray[i3 + 1] += Math.sin(time * speeds.current[i] + i) * 0.002
      posArray[i3] += Math.cos(time * speeds.current[i] * 0.5 + i) * 0.001
    }

    mesh.current.geometry.attributes.position.needsUpdate = true
  })

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions.current}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.015}
        color="#a78bfa"
        transparent
        opacity={0.6}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  )
}

function FloatingNodes() {
  const groupRef = useRef()

  useFrame((state) => {
    if (!groupRef.current) return
    groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.1) * 0.1
    groupRef.current.rotation.x = Math.cos(state.clock.elapsedTime * 0.08) * 0.05
  })

  const nodes = useRef(
    Array.from({ length: 6 }, (_, i) => ({
      position: [
        (Math.random() - 0.5) * 6,
        (Math.random() - 0.5) * 4,
        (Math.random() - 0.5) * 3 - 2,
      ],
      scale: Math.random() * 0.3 + 0.15,
      speed: Math.random() * 0.5 + 0.3,
      rotSpeed: Math.random() * 0.5 + 0.2,
      geoType: i % 3,
    })),
  )

  return (
    <group ref={groupRef}>
      {nodes.current.map((node, i) => (
        <Float key={i} speed={node.speed} rotationIntensity={node.rotSpeed} floatIntensity={0.5}>
          <mesh position={node.position} scale={node.scale}>
            {node.geoType === 0 ? (
              <octahedronGeometry args={[1, 0]} />
            ) : node.geoType === 1 ? (
              <icosahedronGeometry args={[1, 0]} />
            ) : (
              <dodecahedronGeometry args={[1, 0]} />
            )}
            <meshStandardMaterial
              color={i % 2 === 0 ? '#8b5cf6' : '#6366f1'}
              wireframe
              transparent
              opacity={0.25}
            />
          </mesh>
        </Float>
      ))}
    </group>
  )
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.4} />
      <pointLight position={[5, 5, 5]} intensity={0.6} color="#a78bfa" />
      <pointLight position={[-5, -3, 3]} intensity={0.4} color="#6366f1" />
      <Particles count={80} />
      <FloatingNodes />
    </>
  )
}

export default function ParticleField({ className = '' }) {
  return (
    <div className={`absolute inset-0 ${className}`} aria-hidden="true">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 60 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
        style={{ background: 'transparent' }}
      >
        <Scene />
      </Canvas>
    </div>
  )
}
