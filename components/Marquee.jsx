export default function Marquee() {
  const items = [
    'Foundations', 'Scaling & Optimization', 'Hispanic Market Expansion',
    'Holistic Growth', 'Sales Strategy', 'Financial Clarity',
    'Operational Systems', 'Community & Wealth',
  ]

  const full = [...items, ...items]

  return (
    <div className="mq-outer">
      <div className="mq-wrap">
        <div className="mq-track">
          {full.map((item, i) => (
            <span key={i}>
              {item}
              <span className="mq-dot" style={{ margin: '0 24px' }}>·</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
