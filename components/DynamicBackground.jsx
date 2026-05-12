'use client'
import dynamic from 'next/dynamic'

const AscendBackground = dynamic(() => import('./AscendBackground'), { ssr: false })

export default function DynamicBackground() {
  return <AscendBackground />
}
