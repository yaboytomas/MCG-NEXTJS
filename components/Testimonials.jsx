'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import FadeUp from './FadeUp'

const testimonials = [
  { q: "Working with MCG completely changed the way we run our business. They didn't just fix problems, they helped us see opportunities and make decisions with confidence. Everything started clicking into place, and we began seeing real results almost immediately.", name: 'Sarah & David Lau', initials: 'SL' },
  { q: "MCG helped us tackle our biggest challenges with clarity and focus. They looked at our whole business, not just pieces, and guided us to smarter decisions. The changes took effect quickly, and we started seeing growth right away.", name: 'Jessica Mcquire', initials: 'JM' },
  { q: "Before working with MCG, we felt stuck and overwhelmed. They took the time to understand every part of our business and showed us the best path forward. It didn't take long before we saw real, measurable results.", name: 'Mark Tele', initials: 'MT' },
]

const EASE = [0.22, 1, 0.36, 1]

export default function Testimonials() {
  const [idx, setIdx] = useState(0)
  const prev = () => setIdx(i => (i + 2) % 3)
  const next = () => setIdx(i => (i + 1) % 3)

  return (
    <section id="testi">
      <div className="con">
        <FadeUp style={{ textAlign: 'center' }}>
          <div className="s-label">Client Stories</div>
          <h2 className="s-title" style={{ maxWidth: 400, margin: '0 auto' }}>What Our Clients Say</h2>
        </FadeUp>

        <FadeUp delay={0.1}>
          <div className="testi-box">
            <span className="tqm grad-text">&ldquo;</span>

            <AnimatePresence mode="wait">
              <motion.p
                key={`q-${idx}`}
                className="tq"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.4, ease: EASE }}
              >
                {testimonials[idx].q}
              </motion.p>
            </AnimatePresence>

            <AnimatePresence mode="wait">
              <motion.div
                key={`a-${idx}`}
                className="tauthor"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.35, ease: EASE }}
              >
                <div className="tauthor-name">{testimonials[idx].name}</div>
                <div className="tstars">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="tstar" style={{ background: 'linear-gradient(135deg,var(--gold),var(--rose))' }} />
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </FadeUp>

        <FadeUp delay={0.16}>
          <div className="tnav">
            <motion.button className="tnbtn" onClick={prev} whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.93 }} aria-label="Previous testimonial">
              <svg viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{width:15,height:15}}><path d="M15 18l-6-6 6-6"/></svg>
            </motion.button>
            <div className="tdots">
              {testimonials.map((_, i) => (
                <motion.div
                  key={i}
                  className="tdot"
                  style={{ background: i === idx ? 'linear-gradient(135deg,var(--gold),var(--rose))' : 'rgba(201,168,76,.2)', cursor: 'none' }}
                  animate={{ scale: i === idx ? 1.3 : 1 }}
                  onClick={() => setIdx(i)}
                />
              ))}
            </div>
            <motion.button className="tnbtn" onClick={next} whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.93 }} aria-label="Next testimonial">
              <svg viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{width:15,height:15}}><path d="M9 18l6-6-6-6"/></svg>
            </motion.button>
          </div>
        </FadeUp>
      </div>
    </section>
  )
}
