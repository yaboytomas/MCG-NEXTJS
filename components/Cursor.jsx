'use client'
import { useEffect } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function Cursor() {
  const mx = useMotionValue(-100)
  const my = useMotionValue(-100)
  const rx = useSpring(mx, { stiffness: 160, damping: 18, mass: 0.6 })
  const ry = useSpring(my, { stiffness: 160, damping: 18, mass: 0.6 })

  useEffect(() => {
    const move = (e) => { mx.set(e.clientX); my.set(e.clientY) }
    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move)
  }, [mx, my])

  return (
    <>
      <motion.div
        className="cursor-dot"
        style={{ left: mx, top: my, position: 'fixed', borderRadius: '50%',
          width: 5, height: 5, background: 'var(--gold)',
          pointerEvents: 'none', zIndex: 9999, translateX: '-50%', translateY: '-50%' }}
      />
      <motion.div
        className="cursor-ring"
        style={{ left: rx, top: ry, position: 'fixed', borderRadius: '50%',
          width: 32, height: 32, border: '1.5px solid rgba(201,168,76,.45)',
          pointerEvents: 'none', zIndex: 9998, translateX: '-50%', translateY: '-50%' }}
      />
    </>
  )
}
