import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'

/*
  ── Typography ────────────────────────────────────────────────
  To swap fonts: change the import + variable name below.
  The rest of the app uses font-display / font-body via Tailwind.
*/
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
  title: 'Barras Nómades — Bar para eventos',
  description:
    '20 años llevando el bar perfecto a tu evento. Bodas, corporativos, fiestas privadas. Servicio llave en mano con staff incluido.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="es"
      className={`${playfair.variable} ${inter.variable}`}
    >
      <body>{children}</body>
    </html>
  )
}
