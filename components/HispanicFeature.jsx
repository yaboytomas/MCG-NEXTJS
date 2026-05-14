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

export default function HispanicFeature() {
  return (
    <section id="hisp">
      <div className="con">
        <FadeUp>
          <div className="hisp-inner" style={{ textAlign: 'center' }}>
            <div className="s-label">Hispanic Market Expansion</div>
            <div className="hisp-n grad-text">Top 5</div>
            <h3 className="hisp-title" style={{ margin: '0 auto 20px' }}>
              If U.S. Latinos were their own country, they&apos;d rank among the top five economies in the world.
            </h3>
            <p className="hisp-body" style={{ margin: '0 auto 32px' }}>
              Overlooking that reality isn&apos;t a strategy. Engaging with it intentionally is one of the most significant
              growth opportunities available today. Because of our leadership within Hispanic business organizations
              and deep personal ties to the community, MCG brings a distinct and informed perspective that no
              copy-paste translation can replicate.
            </p>
            <MagLink href="#contact" className="btn-primary" style={{ fontSize: '.88rem', padding: '12px 26px' }}>
              Explore Hispanic Market Strategy
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </MagLink>
          </div>
        </FadeUp>
      </div>
    </section>
  )
}
