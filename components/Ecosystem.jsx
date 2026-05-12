'use client'
import FadeUp from './FadeUp'

const nodes = [
  { top: '10%',   left: '50%',  core: false, label: 'Operations', icon: <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/> },
  { top: '30.9%', left: '11%',  core: false, label: 'Financials',  icon: <><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></> },
  { top: '30.9%', left: '89%',  core: false, label: 'Sales',       icon: <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/> },
  { top: '50%',   left: '50%',  core: true,  label: 'MCG Core',    icon: <><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></> },
  { top: '71.7%', left: '11%',  core: false, label: 'Marketing',   icon: <path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z"/> },
  { top: '71.7%', left: '89%',  core: false, label: 'PR & Brand',  icon: <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/> },
]

export default function Ecosystem() {
  return (
    <section id="eco">
      <div className="con">
        <div className="eco-grid">
          <div>
            <FadeUp><div className="s-label">Our Approach</div></FadeUp>
            <FadeUp delay={0.08}><h2 className="s-title">Your business is an ecosystem, not a set of silos</h2></FadeUp>
            <FadeUp delay={0.14}><div className="gold-bar" /></FadeUp>
            <FadeUp delay={0.18}><p className="s-body">MCG assesses how your internal foundations—sales, financials, and operations—work in concert with your external presence, including marketing, PR, and branding. When one part of the business changes, we ensure the rest is aligned.</p></FadeUp>
            <FadeUp delay={0.24}><p className="s-body" style={{ marginTop: 18 }}>This integrated perspective allows us to design solutions that are both durable and scalable—supporting long-term growth instead of temporary fixes.</p></FadeUp>
          </div>
          <FadeUp delay={0.1}>
            <div className="eco-vis">
              <svg className="eco-svg" viewBox="0 0 400 460" preserveAspectRatio="xMidYMid meet">
                <defs>
                  <linearGradient id="eco-lg" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#C9A84C"/>
                    <stop offset="100%" stopColor="#C27A62"/>
                  </linearGradient>
                </defs>
                <line className="eco-faint" x1="200" y1="46"  x2="356" y2="142"/>
                <line className="eco-faint" x1="44"  y1="142" x2="200" y2="46"/>
                <line className="eco-faint" x1="44"  y1="142" x2="44"  y2="330"/>
                <line className="eco-faint" x1="356" y1="142" x2="356" y2="330"/>
                <line className="eco-faint" x1="44"  y1="330" x2="356" y2="330"/>
                <line className="eco-line"  x1="200" y1="46"  x2="200" y2="230"/>
                <line className="eco-line"  x1="44"  y1="142" x2="200" y2="230"/>
                <line className="eco-line"  x1="356" y1="142" x2="200" y2="230"/>
                <line className="eco-line"  x1="44"  y1="330" x2="200" y2="230"/>
                <line className="eco-line"  x1="356" y1="330" x2="200" y2="230"/>
              </svg>
              {nodes.map(n => (
                <div key={n.label} className="eco-node" style={{ top: n.top, left: n.left }}>
                  <div className={`eco-dot${n.core ? ' eco-core' : ''}`}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"
                      style={{ width: n.core ? 28 : 20, height: n.core ? 28 : 20 }}>
                      {n.icon}
                    </svg>
                  </div>
                  <span className={`eco-lbl${n.core ? ' grad-text' : ''}`}>{n.label}</span>
                </div>
              ))}
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  )
}
