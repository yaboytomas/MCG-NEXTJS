'use client'
import { useState, useRef } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import FadeUp from './FadeUp'

function FloatField({ id, label, type = 'text', required }) {
  return (
    <div className="fg">
      <input className="fi" id={id} name={id} type={type} placeholder=" " required={required} />
      <label className="fl" htmlFor={id}>{label}</label>
    </div>
  )
}

function FloatSelect({ id, label, options, required }) {
  const [filled, setFilled] = useState(false)
  return (
    <div className="fg">
      <select
        className={filled ? 'fi filled' : 'fi'}
        id={id} name={id} required={required}
        onChange={e => setFilled(e.target.value !== '')}
      >
        <option value="" disabled defaultValue> </option>
        {options.map(o => <option key={o}>{o}</option>)}
      </select>
      <label className="fl" htmlFor={id}>{label}</label>
    </div>
  )
}

function MagBtn({ children }) {
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const sx = useSpring(x, { stiffness: 250, damping: 22 })
  const sy = useSpring(y, { stiffness: 250, damping: 22 })
  return (
    <motion.button
      type="submit"
      className="btn-primary"
      style={{ x: sx, y: sy, width: '100%', maxWidth: 380, justifyContent: 'center', fontSize: '.93rem', padding: 14, border: 'none', cursor: 'none' }}
      onMouseMove={e => {
        const r = e.currentTarget.getBoundingClientRect()
        x.set((e.clientX - r.left - r.width / 2) * 0.3)
        y.set((e.clientY - r.top - r.height / 2) * 0.3)
      }}
      onMouseLeave={() => { x.set(0); y.set(0) }}
    >
      {children}
    </motion.button>
  )
}

const stageOptions    = ['Early-stage / Startup', 'Growing (1-5 years)', 'Scaling (5+ years)', 'Enterprise']
const interestOptions = ['Foundations (Early-stage)', 'Scaling & Optimization', 'Hispanic Market Expansion', 'Capital / Funding', 'Speaking Engagement', 'General Inquiry']
const hispanicOptions = ['Yes - this is a priority for us', 'Possibly - we would like to learn more', 'No - focused on other growth areas']

export default function Contact() {
  const [status, setStatus] = useState('idle')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    const form = e.target
    const data = Object.fromEntries(new FormData(form).entries())
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (res.ok) { setStatus('sent'); form.reset() }
      else throw new Error()
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact">
      <div className="con">
        <FadeUp style={{ textAlign: 'center', marginBottom: 48 }}>
          <div className="s-label">Contact</div>
          <h2 className="s-title" style={{ maxWidth: 420, margin: '0 auto' }}>Start with a Strategy Call</h2>
        </FadeUp>
        <FadeUp delay={0.1}>
          {/* Replace YOUR_FORM_ID at formspree.io/forms to activate email delivery */}
          <form
            className="form-shell"
            onSubmit={handleSubmit}
            noValidate
          >
            <div className="form-grid">
              <FloatField id="firstName" label="First Name *" required />
              <FloatField id="lastName"  label="Last Name *"  required />
              <FloatField id="company"   label="Company *"    required />
              <FloatField id="email"     label="Email *"      type="email" required />
              <FloatField id="role"      label="Role *"       required />
              <FloatSelect id="stage"    label="Stage of Business *" options={stageOptions} required />

              <div className="fg-full">
                <FloatSelect id="interest" label="What are you most interested in? *" options={interestOptions} required />
              </div>
              <div className="fg-full">
                <FloatSelect id="hispanic" label="Interested in Hispanic Market Expansion? *" options={hispanicOptions} required />
              </div>
              <div className="fg-full">
                <div className="fg">
                  <textarea className="fi" id="context" name="context" placeholder=" " />
                  <label className="fl" htmlFor="context">Goals, context, or questions *</label>
                </div>
              </div>

              <div className="fg-ctr">
                {status === 'sent' ? (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                    style={{ padding: '14px 28px', background: 'linear-gradient(135deg,#276742,#1a5c35)', borderRadius: 10, fontWeight: 600, fontSize: '.93rem' }}
                  >
                    Request sent - we will be in touch soon
                  </motion.div>
                ) : status === 'error' ? (
                  <motion.div
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                    style={{ padding: '14px 28px', background: 'rgba(139,32,32,.8)', borderRadius: 10, fontSize: '.93rem' }}
                  >
                    Something went wrong — email us at info@miloconsultinggrp.com
                  </motion.div>
                ) : (
                  <MagBtn>
                    {status === 'sending' ? 'Sending...' : (
                      <>
                        Schedule Call{' '}
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M5 12h14M12 5l7 7-7 7"/>
                        </svg>
                      </>
                    )}
                  </MagBtn>
                )}
              </div>
            </div>
          </form>
        </FadeUp>
      </div>
    </section>
  )
}
