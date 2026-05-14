'use client'
import { useEffect } from 'react'
import { motion, useMotionValue } from 'framer-motion'

export default function Cursor() {
  const mx = useMotionValue(-100)
  const my = useMotionValue(-100)

  useEffect(() => {
    const move = (e) => { mx.set(e.clientX); my.set(e.clientY) }
    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move)
  }, [mx, my])

  return (
    <motion.div
      className="cursor-dot"
      style={{ left: mx, top: my, position: 'fixed', borderRadius: '50%',
        width: 5, height: 5, background: 'var(--gold)',
        pointerEvents: 'none', zIndex: 9999, translateX: '-50%', translateY: '-50%' }}
    />
  )
}
