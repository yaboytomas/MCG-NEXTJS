'use client'
import { motion } from 'framer-motion'

export default function ResourceStrip() {
  return (
    <div className="resource-strip-outer">
      <motion.div
        className="resource-strip"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.3, ease: [0.22,1,.36,1] }}
      >
        <p><strong>Free Resource:</strong> Quickly spot the gaps holding your business back</p>
        <a href="#contact">Get the Foundations Checklist →</a>
      </motion.div>
    </div>
  )
}
