import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Sri Rama Aditya College & Nursing Home',
  description: 'Most Reliable and Trusted Nursing School - Affordable Fee Structure | Endless Opportunities',
  keywords: 'nursing school, B.Sc Nursing, GNM, medical education, healthcare training',
  authors: [{ name: 'Sri Rama Aditya College & Nursing Home' }],
  openGraph: {
    title: 'Sri Rama Aditya College & Nursing Home',
    description: 'Most Reliable and Trusted Nursing School - Affordable Fee Structure | Endless Opportunities',
    type: 'website',
    locale: 'en_US',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}

