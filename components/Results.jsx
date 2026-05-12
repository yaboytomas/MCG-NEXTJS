'use client'
import { motion } from 'framer-motion'
import FadeUp from './FadeUp'

const cards = [
  { icon: <><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></>, text: 'Leaders finally see how all the moving pieces of their business fit together—and what to do about it.' },
  { icon: <><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></>, text: 'Teams become more aligned, more accountable, and less confused about what\'s actually important.' },
  { icon: <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>, text: 'Hispanic market efforts shift from "let\'s just translate this campaign" to real, long-term strategy.' },
]

export default function Results() {
  return (
    <section id="res">
      <div className="con">
        <FadeUp style={{ textAlign: 'center' }}>
          <div className="s-label">Results &amp; Impact</div>
          <h2 className="s-title" style={{ maxWidth: 520, margin: '0 auto 10px' }}>Clients don&apos;t come to MCG for a quick motivational talk.</h2>
          <p style={{ fontSize: '.97rem', color: 'var(--m)' }}>They come because they want clarity, courage, and a plan.</p>
        </FadeUp>
        <div className="res-grid">
          {cards.map((c, i) => (
            <motion.div
              key={i} className="res-card"
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: i * 0.12, ease: [0.22,1,.36,1] }}
              viewport={{ once: true }}
              whileHover={{ y: -6, transition: { type: 'spring', stiffness: 300, damping: 20 } }}
            >
              <div className="res-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="var(--rose)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ width:18,height:18 }}>{c.icon}</svg>
              </div>
              <p className="res-text">{c.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
