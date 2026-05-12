'use client'
import { motion } from 'framer-motion'

export default function FadeUp({ children, delay = 0, className = '', y = 32 }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y, filter: 'blur(4px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      transition={{ duration: 0.75, delay, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true, margin: '-80px' }}
    >
      {children}
    </motion.div>
  )
}
