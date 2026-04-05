import type { Metadata } from 'next'
import './globals.css'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://brajendra-portfolio.vercel.app'

export const metadata: Metadata = {
  title: 'Brajendra Kumar — Senior Frontend Engineer',
  description: 'Senior Web Developer specializing in Angular, React, TypeScript & scalable B2B platforms.',
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Brajendra Kumar — Senior Frontend Engineer',
    description: 'Senior Web Developer specializing in Angular, React, TypeScript & scalable B2B platforms.',
    url: siteUrl,
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=DM+Mono:ital,wght@0,300;0,400;0,500;1,300&family=Instrument+Serif:ital@0;1&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  )
}
