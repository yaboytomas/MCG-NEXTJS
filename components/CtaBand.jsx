'use client'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import FadeUp from './FadeUp'

function MagLink({ href, className, children, style }) {
  const x = useMotionValue(0); const y = useMotionValue(0)
  const sx = useSpring(x, { stiffness: 250, damping: 22 })
  const sy = useSpring(y, { stiffness: 250, damping: 22 })
  return (
    <motion.a href={href} className={className} style={{ x: sx, y: sy, ...style }}
      onMouseMove={e => { const r = e.currentTarget.getBoundingClientRect(); x.set((e.clientX-r.left-r.width/2)*.3); y.set((e.clientY-r.top-r.height/2)*.3) }}
      onMouseLeave={() => { x.set(0); y.set(0) }}>
      {children}
    </motion.a>
  )
}

export default function CtaBand() {
  return (
    <section id="ctab">
      <div className="con">
        <FadeUp>
          <div className="cta-box">
            <div className="s-label" style={{ marginBottom: 12 }}>Ready to Build Something That Lasts?</div>
            <h2 className="s-title" style={{ maxWidth: 520, margin: '0 auto 12px' }}>Start with a Strategy Call</h2>
            <p className="cta-desc">
              Tell us about your business and let&apos;s design a plan that&apos;s durable, not just fast.
              No generic playbooks—just clear strategy built for your specific reality.
            </p>
            <MagLink href="#contact" className="btn-primary" style={{ fontSize: '.95rem', padding: '14px 36px' }}>
              Schedule Your Strategy Call
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </MagLink>
          </div>
        </FadeUp>
      </div>
    </section>
  )
}
