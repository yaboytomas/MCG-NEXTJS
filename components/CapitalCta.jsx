'use client'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import FadeUp from './FadeUp'

function MagLink({ href, className, children }) {
  const x = useMotionValue(0); const y = useMotionValue(0)
  const sx = useSpring(x, { stiffness: 250, damping: 22 })
  const sy = useSpring(y, { stiffness: 250, damping: 22 })
  return (
    <motion.a href={href} className={className} style={{ x: sx, y: sy }}
      onMouseMove={e => { const r = e.currentTarget.getBoundingClientRect(); x.set((e.clientX-r.left-r.width/2)*.3); y.set((e.clientY-r.top-r.height/2)*.3) }}
      onMouseLeave={() => { x.set(0); y.set(0) }}>
      {children}
    </motion.a>
  )
}

export default function CapitalCta() {
  return (
    <section style={{ position: 'relative', zIndex: 3, paddingBottom: 0 }}>
      <div className="con">
        <FadeUp>
          <div className="cap-strip">
            <div>
              <div className="cap-label">Fuel Your Growth</div>
              <p className="cap-title">Get matched with the right capital to fund your next stage of growth.</p>
            </div>
            <MagLink href="#contact" className="btn-primary" style={{ whiteSpace: 'nowrap', fontSize: '.88rem', padding: '12px 26px' }}>
              Find My Options
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </MagLink>
          </div>
        </FadeUp>
      </div>
    </section>
  )
}
