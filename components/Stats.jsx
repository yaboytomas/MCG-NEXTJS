'use client'
import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

function Counter({ target }) {
  const [val, setVal] = useState(0)
  const started = useRef(false)
  const ref = useRef(null)

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !started.current) {
        started.current = true
        const start = performance.now()
        const dur = 1400
        const tick = (now) => {
          const p = Math.min((now - start) / dur, 1)
          setVal(Math.round(p * target))
          if (p < 1) requestAnimationFrame(tick)
        }
        requestAnimationFrame(tick)
      }
    }, { threshold: 0.3 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [target])

  return <span ref={ref}>{val}</span>
}

const stats = [
  { display: null, count: 3,     label: 'Core Service Pillars' },
  { display: 'Top 5', count: null, label: 'U.S. Hispanic Economy World Rank' },
  { display: '360°',  count: null, label: 'Integrated Business View' },
  { display: '100%',  count: null, label: 'Holistic — Never Siloed' },
]

export default function Stats() {
  return (
    <section id="stats">
      <div className="con">
        <div className="stats-grid">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              className="stat"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22,1,.36,1] }}
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
            >
              <div className="stat-n grad-text">
                {s.count != null ? <Counter target={s.count} /> : s.display}
              </div>
              <div className="stat-l">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
