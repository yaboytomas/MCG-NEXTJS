'use client'
import { useRef } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import FadeUp from './FadeUp'

const services = [
  { n: '01', title: 'Foundations',              tag: 'For Early-Stage Founders',       desc: 'We turn your big vision into a real-world business model, complete with the structure and systems needed for predictable, sustainable growth. From offers and pricing to processes and customer experience, we design everything with the future of your business in mind.' },
  { n: '02', title: 'Scaling & Optimization',   tag: 'For Businesses with Momentum',   desc: 'We align your internal foundations—sales processes, financial clarity, and operational flow—with your external presence. The goal is to turn growth into something you can plan for, not something you are constantly reacting to.' },
  { n: '03', title: 'Hispanic Market Expansion', tag: 'For Enterprises & High-Growth Brands', desc: 'We align your offers, pricing, operations, and customer experience with culturally fluent strategies in marketing, PR, branding, and partnerships. No tokenism, no copy-paste translations—just real strategy that earns trust, not just attention.' },
]

function ServiceRow({ item, index }) {
  const rowRef = useRef(null)
  const rotX = useMotionValue(0)
  const rotY = useMotionValue(0)
  const srotX = useSpring(rotX, { stiffness: 200, damping: 28 })
  const srotY = useSpring(rotY, { stiffness: 200, damping: 28 })

  const onMove = (e) => {
    const r = rowRef.current?.getBoundingClientRect()
    if (!r) return
    rotX.set((e.clientY - r.top  - r.height / 2) / r.height * -3)
    rotY.set((e.clientX - r.left - r.width  / 2) / r.width  *  3)
  }
  const onLeave = () => { rotX.set(0); rotY.set(0) }

  return (
    <motion.div
      ref={rowRef}
      className="svc-item"
      style={{ rotateX: srotX, rotateY: srotY, transformPerspective: 1200 }}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: index * 0.12, ease: [0.22,1,.36,1] }}
      viewport={{ once: true }}
    >
      <div className="svc-n grad-text">{item.n}</div>
      <div className="svc-r">
        <div>
          <h3 className="svc-title">{item.title}</h3>
          <span className="svc-tag">{item.tag}</span>
        </div>
        <p className="svc-desc">{item.desc}</p>
      </div>
      <div className="svc-arrow">
        <svg viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width:15,height:15 }}>
          <path d="M5 12h14M12 5l7 7-7 7"/>
        </svg>
      </div>
    </motion.div>
  )
}

export default function Services() {
  return (
    <section id="svc">
      <div className="con">
        <FadeUp style={{ textAlign: 'center' }}><div className="s-label">How We Partner With You</div></FadeUp>
        <FadeUp delay={0.08}><h2 className="s-title" style={{ maxWidth: 500, margin: '0 auto 20px' }}>Three Pathways to Lasting Growth</h2></FadeUp>
        {services.map((s, i) => <ServiceRow key={s.n} item={s} index={i} />)}
      </div>
    </section>
  )
}
