import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { SITE_URL } from '@/lib/constants'
import './globals.css'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: 'Barras Nómades — Bar profesional para eventos en Buenos Aires',
  description:
    '20 años llevando el bar perfecto a tu evento. Bodas, corporativos y fiestas privadas. Servicio llave en mano: barra, staff, insumos y logística incluidos.',
  keywords: [
    'barra de tragos para eventos',
    'bartenders Buenos Aires',
    'servicio de barra para bodas',
    'bar para casamientos',
    'coctelería para eventos',
    'Barras Nómades',
    'Félix Taboada bartender',
  ],
  authors: [{ name: 'Félix Taboada' }],
  robots: { index: true, follow: true },
  openGraph: {
    type: 'website',
    locale: 'es_AR',
    url: SITE_URL,
    siteName: 'Barras Nómades',
    title: 'Barras Nómades — Bar profesional para eventos',
    description:
      '20 años llevando el bar perfecto a tu evento. Bodas, corporativos y fiestas privadas. Servicio llave en mano incluido.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Barras Nómades — Bar profesional para eventos',
    description:
      '20 años llevando el bar perfecto a tu evento. Servicio llave en mano con staff incluido.',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Barras Nómades',
  description:
    'Servicio profesional de barra para eventos. Bodas, corporativos y fiestas privadas en Buenos Aires.',
  url: SITE_URL,
  telephone: '+5491160921908',
  priceRange: '$$',
  founder: { '@type': 'Person', name: 'Félix Taboada' },
  sameAs: ['https://instagram.com/barrasnomades'],
  areaServed: { '@type': 'City', name: 'Buenos Aires' },
  serviceType: 'Bar service for events',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={`${playfair.variable} ${inter.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
