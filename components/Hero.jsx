'use client'
import { useRef } from 'react'
import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion'

const EASE = [0.22, 1, 0.36, 1]

function MagLink({ href, className, children, style }) {
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const sx = useSpring(x, { stiffness: 250, damping: 22 })
  const sy = useSpring(y, { stiffness: 250, damping: 22 })
  return (
    <motion.a
      href={href} className={className} style={{ x: sx, y: sy, ...style }}
      onMouseMove={e => {
        const r = e.currentTarget.getBoundingClientRect()
        x.set((e.clientX - r.left - r.width / 2) * 0.3)
        y.set((e.clientY - r.top - r.height / 2) * 0.3)
      }}
      onMouseLeave={() => { x.set(0); y.set(0) }}
    >
      {children}
    </motion.a>
  )
}

const lines = [
  ['Holistic', 'Growth'],
  ['Consulting', 'For'],
  ['Businesses That'],
]

export default function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const ghostY    = useTransform(scrollYProgress, [0, 1], ['0%', '14%'])
  const ghostScale = useTransform(scrollYProgress, [0, 1], [1, 1.07])
  const contentY  = useTransform(scrollYProgress, [0, 1], ['0%', '16%'])

  const container = { hidden: {}, show: { transition: { staggerChildren: 0.055, delayChildren: 0.18 } } }
  const word = {
    hidden: { yPercent: 110, opacity: 0 },
    show:   { yPercent: 0, opacity: 1, transition: { duration: 0.85, ease: EASE } },
  }

  return (
    <section id="hero" ref={ref} style={{ position: 'relative' }}>
      {/* ghost background text */}
      <motion.div className="hero-ghost" style={{ y: ghostY, scale: ghostScale }}>MCG</motion.div>

      <div className="con">
        <motion.div style={{ y: contentY }}>
          {/* badge */}
          <motion.div
            className="hero-badge"
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: EASE }}
          >
            <span className="badge-dot" />
            Led by Ana Milo · Founder &amp; CEO
          </motion.div>

          {/* headline — word-by-word reveal */}
          <motion.h1 className="hero-h1" variants={container} initial="hidden" animate="show">
            {lines.map((words, li) => (
              <span key={li} className="hero-line">
                {words.map((w, wi) => (
                  <span key={wi} className="hero-line" style={{ overflow: 'hidden', display: 'inline-block', marginRight: '.26em' }}>
                    <motion.span className="hero-word" variants={word} style={{ display: 'inline-block' }}>
                      {w}
                    </motion.span>
                  </span>
                ))}
                {li === 2 && (
                  <span className="hero-line" style={{ overflow: 'hidden', display: 'inline-block' }}>
                    <motion.em variants={word} style={{ display: 'inline-block' }}>Mean It</motion.em>
                  </span>
                )}
              </span>
            ))}
          </motion.h1>

          <motion.p className="hero-sub"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7, ease: EASE }}
          >
            Strategy. Structure. Sustainable Scale.
          </motion.p>

          <motion.p className="hero-desc"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.82, ease: EASE }}
          >
            MCG partners with founders, leadership teams, and enterprises to address their most complex
            challenges through a comprehensive view of the business—financials, operations, marketing,
            PR, and sales—ensuring every decision advances sustainable, scalable growth.
          </motion.p>

          <motion.div className="hero-actions"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.94, ease: EASE }}
          >
            <MagLink href="#contact" className="btn-primary">
              Request a Strategy Call
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </MagLink>
            <MagLink href="#svc" className="btn-ghost">Explore Services</MagLink>
          </motion.div>
        </motion.div>

        {/* floating deco card */}
        <motion.div
          className="hero-deco"
          initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 1.1, ease: [0.34, 1.56, 0.64, 1] }}
        >
          <div className="deco-label">Business Foundations</div>
          {['Sales Process', 'Financial Clarity', 'Operational Flow', 'Marketing & PR', 'Brand Strategy'].map(item => (
            <div key={item} className="deco-item">
              <div className="deco-chk">
                <svg width="8" height="8" viewBox="0 0 8 8" fill="none" stroke="var(--rose)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="1.5,4 3,5.5 6.5,2"/></svg>
              </div>
              {item}
            </div>
          ))}
        </motion.div>
      </div>

      <div className="scroll-caret">
        <span>Scroll</span>
        <div className="caret-line" />
      </div>
    </section>
  )
}
