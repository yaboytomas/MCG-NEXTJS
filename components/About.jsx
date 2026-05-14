'use client'
import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import FadeUp from './FadeUp'

function MagLink({ href, className, children }) {
  const x = useMotionValue(0); const y = useMotionValue(0)
  const sx = useSpring(x, { stiffness: 250, damping: 22 })
  const sy = useSpring(y, { stiffness: 250, damping: 22 })
  return (
    <motion.a href={href} className={className}
      style={{ x: sx, y: sy, display: 'inline-flex', alignItems: 'center', gap: 8 }}
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

const LINKEDIN_URL = 'https://www.linkedin.com/in/ana-milo-520546192/'

export default function About() {
  const [flipped, setFlipped] = useState(false)
  const leaveTimer = useRef(null)

  const handleEnter = () => {
    clearTimeout(leaveTimer.current)
    setFlipped(true)
  }
  const handleLeave = () => {
    leaveTimer.current = setTimeout(() => setFlipped(false), 80)
  }

  return (
    <section id="about">
      <div className="con">
        <div className="about-grid">

          {/* ── flip card column ── */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: [0.22,1,.36,1] }}
            viewport={{ once: true }}
            className="about-flip-wrap"
          >
            <div
              className={`about-flip-inner${flipped ? ' is-flipped' : ''}`}
              onMouseEnter={handleEnter}
              onMouseLeave={handleLeave}
            >

              {/* FRONT — photo */}
              <div className="about-flip-face">
                <Image
                  src="/founder.avif"
                  alt="Ana Milo, Founder & CEO of Milo Consulting Group"
                  fill
                  style={{ objectFit: 'cover', objectPosition: '50% 8%', transform: 'scale(0.92)', transformOrigin: '50% 0%' }}
                  sizes="(max-width:960px) 100vw, 380px"
                />
                <div className="cert-badge">
                  <div className="cert-sub">Certified Trainer</div>
                  <div className="cert-main">Hispanic Wealth Project</div>
                </div>
              </div>

              {/* BACK — LinkedIn */}
              <div className="about-flip-face about-flip-back">
                <div className="li-flip-header">
                  <div className="li-flip-icon">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="#0A66C2">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </div>
                  <span className="li-flip-label">LinkedIn</span>
                </div>

                <div className="li-flip-divider" />

                <div className="li-flip-profile">
                  <div className="li-flip-avatar">
                    <Image src="/founder.avif" alt="Ana Milo" fill
                      style={{ objectFit: 'cover', objectPosition: 'center top' }}
                      sizes="68px" />
                  </div>
                  <p className="li-flip-name">Ana Milo</p>
                  <p className="li-flip-role">Founder &amp; CEO</p>
                  <p className="li-flip-company">Milo Consulting Group</p>
                </div>

                <div className="li-flip-divider" />

                <p className="li-flip-tagline">
                  Helping founders &amp; enterprises build integrated businesses that strengthen communities and create lasting wealth.
                </p>

                <div className="li-flip-divider" />

                <div className="li-flip-meta">
                  <div className="li-flip-meta-row">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/>
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                    </svg>
                    <span>500+ connections</span>
                  </div>
                  <div className="li-flip-meta-row">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
                    </svg>
                    <span>Open to connect</span>
                  </div>
                </div>

                <div className="li-flip-divider" />

                <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="li-flip-cta">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  Connect on LinkedIn
                </a>

                <p className="li-flip-hint">hover to see photo</p>
              </div>

            </div>
          </motion.div>

          {/* ── content column ── */}
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
