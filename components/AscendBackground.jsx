'use client'
import { useRef, useMemo, useEffect } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'

function EmberSystem({ count, color, size, spreadX, spreadY, spreadZ, scrollRef }) {
  const mesh = useRef()
  const { positions, velocities } = useMemo(() => {
    const positions = new Float32Array(count * 3)
    const velocities = []
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * spreadX
      positions[i * 3 + 1] = (Math.random() - 0.5) * spreadY
      positions[i * 3 + 2] = (Math.random() - 0.5) * spreadZ
      velocities.push({
        vy: 0.03 + Math.random() * 0.1,
        vx: (Math.random() - 0.5) * 0.018,
        vz: (Math.random() - 0.5) * 0.014,
        phase: Math.random() * Math.PI * 2,
      })
    }
    return { positions, velocities }
  }, [count, spreadX, spreadY, spreadZ])

  useFrame(({ clock }) => {
    if (!mesh.current) return
    const pos = mesh.current.geometry.attributes.position.array
    const t = clock.elapsedTime
    const sp = scrollRef.current
    const speed = 1 + sp * 2.2
    const HY = spreadY / 2
    for (let i = 0; i < count; i++) {
      pos[i * 3 + 1] += velocities[i].vy * speed * 0.016
      pos[i * 3] += velocities[i].vx
      pos[i * 3 + 2] += velocities[i].vz
      if (pos[i * 3 + 1] > HY) {
        pos[i * 3 + 1] = -HY
        pos[i * 3] = (Math.random() - 0.5) * spreadX
        pos[i * 3 + 2] = (Math.random() - 0.5) * spreadZ
      }
    }
    mesh.current.geometry.attributes.position.needsUpdate = true
    mesh.current.material.opacity = 0.55 + Math.sin(t * 1.1) * 0.12
  })

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={count} array={positions} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial color={color} size={size} transparent opacity={0.7} sizeAttenuation depthWrite={false} />
    </points>
  )
}

function CrownRing({ radius, tube, color, opacity, rotX, rotY }) {
  const ref = useRef()
  useFrame(() => {
    if (!ref.current) return
    ref.current.rotation.z += 0.0007
    ref.current.rotation.y += 0.0003
  })
  return (
    <mesh ref={ref} rotation={[rotX || 0, rotY || 0, 0]}>
      <torusGeometry args={[radius, tube, 10, 120]} />
      <meshBasicMaterial color={color} transparent opacity={opacity} depthWrite={false} />
    </mesh>
  )
}

function Diamond({ scrollRef }) {
  const ref = useRef()
  useFrame(({ clock }) => {
    if (!ref.current) return
    ref.current.rotation.y += 0.0006
    ref.current.rotation.x += 0.0002
    const s = 1 + Math.sin(clock.elapsedTime * 0.4) * 0.04
    ref.current.scale.setScalar(s)
  })
  return (
    <mesh ref={ref}>
      <icosahedronGeometry args={[68, 1]} />
      <meshBasicMaterial color="#C9A84C" wireframe transparent opacity={0.022} depthWrite={false} />
    </mesh>
  )
}

function AccentShape({ position, color, size, rx, ry }) {
  const ref = useRef()
  useFrame(() => {
    if (!ref.current) return
    ref.current.rotation.x += rx
    ref.current.rotation.y += ry
  })
  return (
    <mesh ref={ref} position={position}>
      <octahedronGeometry args={[size, 0]} />
      <meshBasicMaterial color={color} wireframe transparent opacity={0.048} depthWrite={false} />
    </mesh>
  )
}

function AuraGlow() {
  return (
    <>
      {[[10, 0.055, '#F0A840'], [20, 0.032, '#D07A5E'], [36, 0.018, '#C9A84C'], [58, 0.009, '#C27A62']].map(([r, op, c]) => (
        <mesh key={r}>
          <sphereGeometry args={[r, 20, 20]} />
          <meshBasicMaterial color={c} transparent opacity={op} side={THREE.BackSide} depthWrite={false} />
        </mesh>
      ))}
    </>
  )
}

function LightRays() {
  const rays = [[-0.35, 0], [-18, 0.12], [18, -0.08], [8, 0.2], [-8, -0.15], [28, 0.05], [-28, 0.18]]
  const refs = useRef(rays.map(() => ({ current: null })))
  useFrame(({ clock }) => {
    refs.current.forEach((r, i) => {
      if (r.current) r.current.rotation.z = Math.sin(clock.elapsedTime * 0.05 * (i + 1)) * 0.04
    })
  })
  return (
    <>
      {rays.map(([x, z], i) => {
        const h = 55 + (i * 7)
        return (
          <mesh key={i} ref={el => refs.current[i] = { current: el }} position={[x, 0, z]}>
            <boxGeometry args={[0.06, h, 0.06]} />
            <meshBasicMaterial color="#F0B848" transparent opacity={0.032 + (i % 3) * 0.01} depthWrite={false} />
          </mesh>
        )
      })}
    </>
  )
}

function CameraController({ scrollRef, mouseRef }) {
  const { camera } = useThree()
  useFrame(() => {
    const sp = scrollRef.current
    const mx = mouseRef.current.x
    const my = mouseRef.current.y
    camera.position.x += (mx * 11 - camera.position.x) * 0.02
    camera.position.y += (-12 + sp * 18 - my * 8 - camera.position.y) * 0.022
    camera.position.z += (95 - sp * 22 - camera.position.z) * 0.022
    camera.lookAt(0, camera.position.y * 0.35 + 8, 0)
  })
  return null
}

function Scene() {
  const scrollRef = useRef(0)
  const mouseRef = useRef({ x: 0, y: 0 })
  const mob = typeof window !== 'undefined' && window.innerWidth < 720

  useEffect(() => {
    const onScroll = () => {
      scrollRef.current = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight) || 0
    }
    const onMouse = (e) => {
      mouseRef.current.x = (e.clientX / window.innerWidth - 0.5) * 0.3
      mouseRef.current.y = (e.clientY / window.innerHeight - 0.5) * 0.22
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('mousemove', onMouse, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('mousemove', onMouse)
    }
  }, [])

  const accentShapes = [
    { position: [-38, 22, -20], color: '#C9A84C', size: 10, rx: -0.002, ry: 0.003 },
    { position: [32, -18, 10],  color: '#C27A62', size: 12, rx: 0.002,  ry: -0.002 },
    { position: [-20, -28, 15], color: '#C9A84C', size: 14, rx: -0.001, ry: 0.003 },
    { position: [26, 30, -10],  color: '#C27A62', size: 16, rx: 0.003,  ry: 0.001 },
  ]

  return (
    <>
      <CameraController scrollRef={scrollRef} mouseRef={mouseRef} />
      <AuraGlow />
      <LightRays />
      <Diamond scrollRef={scrollRef} />
      <CrownRing radius={48} tube={0.25} color="#C9A84C" opacity={0.055} rotX={Math.PI / 2.6} />
      <CrownRing radius={34} tube={0.16} color="#C27A62" opacity={0.035} rotX={Math.PI / 2.1} rotY={Math.PI / 6} />
      <EmberSystem count={mob ? 160 : 280} color="#F0A840" size={0.52} spreadX={160} spreadY={170} spreadZ={70} scrollRef={scrollRef} />
      <EmberSystem count={mob ? 90 : 160}  color="#D07A5E" size={0.44} spreadX={140} spreadY={170} spreadZ={60} scrollRef={scrollRef} />
      <EmberSystem count={mob ? 22 : 44}   color="#F8E4B0" size={0.88} spreadX={120} spreadY={150} spreadZ={50} scrollRef={scrollRef} />
      {accentShapes.map((s, i) => <AccentShape key={i} {...s} />)}
    </>
  )
}

export default function AscendBackground() {
  return (
    <Canvas
      style={{ position: 'fixed', inset: 0, zIndex: 0, pointerEvents: 'none' }}
      gl={{ antialias: true, alpha: true }}
      camera={{ position: [0, -12, 95], fov: 62 }}
      dpr={[1, 1.5]}
    >
      <Scene />
    </Canvas>
  )
}
