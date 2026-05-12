import { Playfair_Display, Inter } from 'next/font/google'
import './globals.css'

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-serif',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-sans',
  display: 'swap',
})

export const metadata = {
  title: 'Milo Consulting Group — Holistic Growth Consulting',
  description:
    "MCG partners with founders, leadership teams, and enterprises to tackle their most complex business challenges. Specializing in Business Foundations, Scaling & Optimization, and Hispanic Market Expansion. Led by Ana Milo.",
  keywords: 'consulting, business strategy, Hispanic market, scaling, growth, Ana Milo, MCG',
  openGraph: {
    title: 'Milo Consulting Group — Holistic Growth Consulting',
    description: "Built by a woman who didn't wait for the opportunity. MCG delivers integrated strategy, structure, and sustainable growth for businesses that mean it.",
    url: 'https://miloconsultinggrp.com',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Milo Consulting Group',
    description: 'Holistic Growth Consulting for Businesses That Mean It.',
  },
}

export const viewport = {
  themeColor: '#090711',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  )
}
