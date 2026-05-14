'use client'
import Image from 'next/image'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import FadeUp from './FadeUp'

function MagLink({ href, className, children }) {
  const x = useMotionValue(0); const y = useMotionValue(0)
  const sx = useSpring(x, { stiffness: 250, damping: 22 })
  const sy = useSpring(y, { stiffness: 250, damping: 22 })
  return (
    <motion.a href={href} className={className} style={{ x: sx, y: sy, display: 'inline-flex', alignItems: 'center', gap: 8 }}
      onMouseMove={e => { const r = e.currentTarget.getBoundingClientRect(); x.set((e.clientX-r.left-r.width/2)*.3); y.set((e.clientY-r.top-r.height/2)*.3) }}
      onMouseLeave={() => { x.set(0); y.set(0) }}>
      {children}
    </motion.a>
  )
}

const affiliations = [
  'Government Affairs Committee, NAHREP North Orlando',
  'Certified Trainer, Hispanic Wealth Project',
  'Executive Contributor, Brainz Magazine',
]

export default function About() {
  return (
    <section id="about">
      <div className="con">
        <div className="about-grid">
          {/* image */}
          <motion.div
            className="about-img-wrap"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: [0.22,1,.36,1] }}
            viewport={{ once: true }}
          >
            <div className="about-frame">
              <Image
                src="/founder.avif"
                alt="Ana Milo, Founder & CEO of Milo Consulting Group"
                fill
                style={{ objectFit: 'cover', objectPosition: 'center top', borderRadius: 22 }}
                sizes="(max-width:960px) 100vw, 380px"
              />
            </div>
            <div className="cert-badge">
              <div className="cert-sub">Certified Trainer</div>
              <div className="cert-main">Hispanic Wealth Project</div>
            </div>
          </motion.div>

          {/* content */}
          <div>
            <FadeUp><div className="s-label">Consulting Grounded in Leadership &amp; Service</div></FadeUp>
            <FadeUp delay={0.06}><div className="about-tag">Founder &amp; CEO</div></FadeUp>
            <FadeUp delay={0.1}><h2 className="about-name">Ana Milo</h2></FadeUp>
            <FadeUp delay={0.14}><p className="about-body">MCG exists because I believe strong businesses and strong communities should grow together—not compete for your time and energy.</p></FadeUp>
            <FadeUp delay={0.18}><p className="about-body">I&apos;ve built my career in real estate while consulting across multiple industries, always asking: how does this decision affect people, community, and long-term wealth-building?</p></FadeUp>
            <FadeUp delay={0.22}><p className="about-body">Outside of client work, I serve on the Government Affairs Committee with NAHREP North Orlando, am a Certified Trainer with the Hispanic Wealth Project, and am an Executive Contributor with Brainz Magazine—because the next generation of leadership deserves support, not gatekeeping.</p></FadeUp>
            <FadeUp delay={0.26}>
              <div className="about-quote">
                &ldquo;To help businesses grow in ways that strengthen their internal foundations, honor their communities, and create wealth and opportunity that actually lasts.&rdquo;
              </div>
            </FadeUp>
            <FadeUp delay={0.3}>
              <div className="affil-list">
                {affiliations.map(a => (
                  <div key={a} className="affil-item">
                    <span className="affil-dot" />
                    {a}
                  </div>
                ))}
              </div>
            </FadeUp>
            <FadeUp delay={0.34} className="about-cta-wrap">
              <MagLink href="#contact" className="btn-ghost">Invite Me to Speak</MagLink>
            </FadeUp>
          </div>
        </div>
      </div>
    </section>
  )
}
