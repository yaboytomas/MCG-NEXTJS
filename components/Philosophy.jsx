'use client'
import FadeUp from './FadeUp'

const cols = [
  { n: '01', title: 'Integrated', italic: true, body: 'Every part of your business—sales, financials, operations, marketing, PR, and branding—works in concert. Not in isolation.' },
  { n: '02', title: 'Not Siloed',  italic: false, body: "We never fix one area and walk away. Solutions that help one department but break three others aren't solutions—they're expensive band-aids." },
  { n: '03', title: 'Built to Last', italic: false, body: 'We design interventions that are durable and scalable—supporting long-term growth instead of temporary fixes that overlook critical interdependencies.' },
]

export default function Philosophy() {
  return (
    <section id="phil">
      <div className="con">
        <FadeUp style={{ textAlign: 'center', marginBottom: 48 }}>
          <div className="s-label">Our Philosophy</div>
          <h2 className="s-title" style={{ maxWidth: 520, margin: '0 auto' }}>Three principles behind everything we do</h2>
        </FadeUp>
        <div className="phil-grid">
          {cols.map((c, i) => (
            <FadeUp key={c.n} delay={i * 0.12}>
              <div className="phil-col">
                <div className="phil-n grad-text">{c.n}</div>
                <h3 className="phil-title">{c.italic ? <em>{c.title}</em> : c.title}</h3>
                <p className="phil-body">{c.body}</p>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  )
}
