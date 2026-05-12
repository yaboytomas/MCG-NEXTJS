'use client'
import Image from 'next/image'
import FadeUp from './FadeUp'

export default function FeatureQuote() {
  return (
    <section id="fquote">
      <div className="con">
        <FadeUp><span className="fq-mark grad-text">&ldquo;</span></FadeUp>
        <FadeUp delay={0.12}>
          <p className="fq-text">
            Strong businesses and strong communities should grow together—not compete for your time and energy.
          </p>
        </FadeUp>
        <FadeUp delay={0.22}>
          <div className="fq-attr">
            <Image src="/founder2.avif" alt="Ana Milo" width={52} height={52} className="fq-img" />
            <cite className="fq-cite">Ana Milo — Founder &amp; CEO, MCG</cite>
          </div>
        </FadeUp>
      </div>
    </section>
  )
}
