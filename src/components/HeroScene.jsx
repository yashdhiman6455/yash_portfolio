import { useRef, useMemo, useState, useEffect } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Float, MeshTransmissionMaterial } from '@react-three/drei'
import {
  EffectComposer,
  Bloom,
  ChromaticAberration,
  Vignette,
} from '@react-three/postprocessing'
import { BlendFunction } from 'postprocessing'
import * as THREE from 'three'

function CameraRig() {
  const { camera, pointer } = useThree()
  const target = useRef(new THREE.Vector3(0, 0, 5))

  useFrame((_, delta) => {
    target.current.x = THREE.MathUtils.lerp(target.current.x, pointer.x * 1.5, delta * 2)
    target.current.y = THREE.MathUtils.lerp(target.current.y, pointer.y * 0.8, delta * 2)
    camera.position.x = THREE.MathUtils.lerp(camera.position.x, target.current.x * 0.3, delta * 3)
    camera.position.y = THREE.MathUtils.lerp(camera.position.y, target.current.y * 0.2 + 1.5, delta * 3)
    camera.lookAt(0, 0, 0)
  })

  return null
}

function ParticleCloud({ count = 600 }) {
  const mesh = useRef()

  const particles = useMemo(() => {
    const positions = new Float32Array(count * 3)
    const colors = new Float32Array(count * 3)
    const sizes = new Float32Array(count)

    const colorA = new THREE.Color('#8b5cf6')
    const colorB = new THREE.Color('#6366f1')
    const colorC = new THREE.Color('#06b6d4')

    for (let i = 0; i < count; i++) {
      const i3 = i * 3
      const radius = 3 + Math.random() * 8
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)

      positions[i3] = radius * Math.sin(phi) * Math.cos(theta)
      positions[i3 + 1] = radius * Math.sin(phi) * Math.sin(theta)
      positions[i3 + 2] = radius * Math.cos(phi) - 2

      const color = [colorA, colorB, colorC][Math.floor(Math.random() * 3)]
      colors[i3] = color.r
      colors[i3 + 1] = color.g
      colors[i3 + 2] = color.b

      sizes[i] = Math.random() * 3 + 0.5
    }

    return { positions, colors, sizes }
  }, [count])

  useFrame((state) => {
    if (!mesh.current) return
    const time = state.clock.elapsedTime
    mesh.current.rotation.y = time * 0.02
    mesh.current.rotation.x = Math.sin(time * 0.01) * 0.1
  })

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={count} array={particles.positions} itemSize={3} />
        <bufferAttribute attach="attributes-color" count={count} array={particles.colors} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial
        size={0.02}
        vertexColors
        transparent
        opacity={0.7}
        sizeAttenuation
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  )
}

function FloatingGeometry({ position, geometry, color, scale = 1, speed = 0.5, rotSpeed = 0.3 }) {
  const mesh = useRef()
  const initialPos = useRef(position)

  useFrame((state) => {
    if (!mesh.current) return
    const t = state.clock.elapsedTime * speed
    mesh.current.position.y = initialPos.current[1] + Math.sin(t) * 0.3
    mesh.current.position.x = initialPos.current[0] + Math.cos(t * 0.7) * 0.15
    mesh.current.rotation.x += 0.002 * rotSpeed
    mesh.current.rotation.y += 0.003 * rotSpeed
    mesh.current.rotation.z += 0.001 * rotSpeed
  })

  const GeometryComponent = {
    octahedron: <octahedronGeometry args={[1, 0]} />,
    icosahedron: <icosahedronGeometry args={[1, 0]} />,
    dodecahedron: <dodecahedronGeometry args={[1, 0]} />,
    torus: <torusGeometry args={[1, 0.3, 16, 32]} />,
    torusKnot: <torusKnotGeometry args={[0.8, 0.25, 100, 16]} />,
    cone: <coneGeometry args={[0.8, 1.5, 6]} />,
    ring: <ringGeometry args={[0.7, 1, 6]} />,
  }

  return (
    <Float speed={speed * 2} rotationIntensity={rotSpeed} floatIntensity={0.5}>
      <mesh ref={mesh} position={position} scale={scale}>
        {GeometryComponent[geometry] || <octahedronGeometry args={[1, 0]} />}
        <meshStandardMaterial
          color={color}
          wireframe
          transparent
          opacity={0.2}
          emissive={color}
          emissiveIntensity={0.15}
        />
      </mesh>
    </Float>
  )
}

function GlassSphere({ position, scale = 1 }) {
  const mesh = useRef()

  useFrame((state) => {
    if (!mesh.current) return
    const t = state.clock.elapsedTime
    mesh.current.position.y = position[1] + Math.sin(t * 0.5) * 0.2
    mesh.current.position.x = position[0] + Math.cos(t * 0.3) * 0.1
  })

  return (
    <mesh ref={mesh} position={position} scale={scale}>
      <sphereGeometry args={[1, 32, 32]} />
      <MeshTransmissionMaterial
        backside
        samples={4}
        thickness={0.5}
        chromaticAberration={0.2}
        anisotropy={0.3}
        distortion={0.3}
        distortionScale={0.3}
        temporalDistortion={0.2}
        transmission={0.95}
        roughness={0.1}
        color="#8b5cf6"
      />
    </mesh>
  )
}

function InfiniteGrid() {
  const mesh = useRef()

  useFrame((state) => {
    if (!mesh.current) return
    mesh.current.position.z = -(state.clock.elapsedTime * 0.3 % 2)
  })

  return (
    <group position={[0, -2.5, 0]} rotation={[-Math.PI / 2, 0, 0]}>
      <gridHelper ref={mesh} args={[60, 60, '#6366f1', '#6366f1']} position={[0, 0, 0]}>
        <meshBasicMaterial transparent opacity={0.06} />
      </gridHelper>
      <mesh rotation={[0, 0, 0]} position={[0, 0, -10]}>
        <planeGeometry args={[60, 60]} />
        <meshBasicMaterial color="#08080c" transparent opacity={0.9} />
      </mesh>
    </group>
  )
}

function GlowOrbs() {
  const group = useRef()

  useFrame((state) => {
    if (!group.current) return
    group.current.children.forEach((child, i) => {
      const t = state.clock.elapsedTime
      child.position.y = Math.sin(t * 0.3 + i * 2) * 0.5
      child.position.x = Math.cos(t * 0.2 + i * 1.5) * 0.3
    })
  })

  return (
    <group ref={group}>
      <pointLight position={[-4, 2, -3]} intensity={2} color="#8b5cf6" distance={12} />
      <pointLight position={[4, -1, -4]} intensity={1.5} color="#6366f1" distance={10} />
      <pointLight position={[0, 3, -2]} intensity={1} color="#06b6d4" distance={8} />
      <pointLight position={[-2, -2, -5]} intensity={0.8} color="#a78bfa" distance={10} />
    </group>
  )
}

function ScanLine() {
  const mesh = useRef()

  useFrame((state) => {
    if (!mesh.current) return
    const t = state.clock.elapsedTime
    mesh.current.position.y = Math.sin(t * 0.4) * 3
    mesh.current.material.opacity = 0.03 + Math.sin(t * 2) * 0.02
  })

  return (
    <mesh ref={mesh} position={[0, 0, -3]} rotation={[0, 0, 0]}>
      <planeGeometry args={[30, 0.02]} />
      <meshBasicMaterial color="#8b5cf6" transparent opacity={0.05} blending={THREE.AdditiveBlending} />
    </mesh>
  )
}

function Scene() {
  return (
    <>
      <fog attach="fog" args={['#08080c', 4, 18]} />
      <ambientLight intensity={0.15} />
      <directionalLight position={[5, 5, 5]} intensity={0.3} color="#a78bfa" />
      <GlowOrbs />
      <CameraRig />
      <ParticleCloud count={500} />

      <FloatingGeometry position={[-4, 2, -3]} geometry="octahedron" color="#8b5cf6" scale={0.6} speed={0.4} rotSpeed={0.5} />
      <FloatingGeometry position={[4.5, -0.5, -4]} geometry="icosahedron" color="#6366f1" scale={0.5} speed={0.5} rotSpeed={0.4} />
      <FloatingGeometry position={[-2.5, -1.5, -5]} geometry="dodecahedron" color="#06b6d4" scale={0.4} speed={0.3} rotSpeed={0.6} />
      <FloatingGeometry position={[3, 2.5, -6]} geometry="torus" color="#a78bfa" scale={0.35} speed={0.45} rotSpeed={0.3} />
      <FloatingGeometry position={[0, -1, -7]} geometry="torusKnot" color="#818cf8" scale={0.25} speed={0.35} rotSpeed={0.4} />
      <FloatingGeometry position={[-5, 0.5, -4.5]} geometry="cone" color="#c084fc" scale={0.3} speed={0.55} rotSpeed={0.5} />
      <FloatingGeometry position={[2, -2.5, -5.5]} geometry="ring" color="#6366f1" scale={0.4} speed={0.4} rotSpeed={0.3} />

      <GlassSphere position={[5, 1.5, -6]} scale={0.4} />
      <GlassSphere position={[-4.5, -1, -7]} scale={0.3} />

      <InfiniteGrid />
      <ScanLine />

      <EffectComposer>
        <Bloom
          intensity={0.8}
          luminanceThreshold={0.2}
          luminanceSmoothing={0.9}
          mipmapBlur
        />
        <ChromaticAberration
          blendFunction={BlendFunction.NORMAL}
          offset={[0.0005, 0.0005]}
        />
        <Vignette
          offset={0.3}
          darkness={0.7}
          blendFunction={BlendFunction.NORMAL}
        />
      </EffectComposer>
    </>
  )
}

export default function HeroScene({ className = '' }) {
  const [supportsWebGL, setSupportsWebGL] = useState(true)

  useEffect(() => {
    try {
      const canvas = document.createElement('canvas')
      const gl = canvas.getContext('webgl2') || canvas.getContext('webgl')
      if (!gl) setSupportsWebGL(false)
    } catch {
      setSupportsWebGL(false)
    }
  }, [])

  if (!supportsWebGL) return null

  return (
    <div className={`absolute inset-0 ${className}`} aria-hidden="true">
      <Canvas
        camera={{ position: [0, 1.5, 6], fov: 55 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
        style={{ background: 'transparent' }}
      >
        <Scene />
      </Canvas>
    </div>
  )
}
