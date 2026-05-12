'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  const close = () => setOpen(false)

  return (
    <>
      <motion.nav
        className="nav"
        animate={{ background: scrolled ? 'rgba(9,7,17,.9)' : 'rgba(9,7,17,.5)', boxShadow: scrolled ? '0 12px 48px rgba(0,0,0,.7)' : 'none' }}
        transition={{ duration: 0.4 }}
      >
        <a href="#hero" className="nav-logo">MCG</a>
        <ul className="nav-links">
          {['#svc', '#hisp', '#about', '#testi'].map((href, i) => (
            <li key={href}>
              <a href={href}>{['Services', 'Hispanic Market', 'About Ana', 'Testimonials'][i]}</a>
            </li>
          ))}
        </ul>
        <motion.a
          href="#contact"
          className="nav-cta"
          whileHover={{ opacity: 0.88, y: -1 }}
          whileTap={{ scale: 0.97 }}
        >
          Schedule A Call
        </motion.a>
        <button
          className="nav-hamburger"
          onClick={() => setOpen(true)}
          aria-label="Open menu"
          aria-expanded={open}
        >
          <span /><span /><span />
        </button>
      </motion.nav>

      <AnimatePresence>
        {open && (
          <motion.div
            className="nav-drawer"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            {[['#svc','Services'],['#hisp','Hispanic Market'],['#about','About Ana'],['#testi','Testimonials']].map(([href, label], i) => (
              <motion.a
                key={href} href={href} onClick={close}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
              >
                {label}
              </motion.a>
            ))}
            <motion.a
              href="#contact" onClick={close}
              className="btn-primary"
              style={{ marginTop: 8 }}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
            >
              Schedule A Call
            </motion.a>
            <button
              onClick={close}
              style={{ position: 'absolute', top: 28, right: 28, background: 'none', border: 'none', color: 'var(--m)', cursor: 'none', fontSize: '1.5rem' }}
              aria-label="Close menu"
            >
              ✕
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
