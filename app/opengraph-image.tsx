import { ImageResponse } from 'next/og'

export const alt = 'Barras Nómades — Bar profesional para eventos'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

async function loadGoogleFont(family: string, weight: number) {
  const css = await fetch(
    `https://fonts.googleapis.com/css2?family=${family}:wght@${weight}&display=swap`,
    { headers: { 'User-Agent': 'Mozilla/5.0' } }
  ).then((r) => r.text())

  const url = css.match(/src: url\((.+?)\) format/)?.[1]
  if (!url) return undefined
  return fetch(url).then((r) => r.arrayBuffer())
}

export default async function Image() {
  const playfair = await loadGoogleFont('Playfair+Display', 700).catch(() => undefined)

  return new ImageResponse(
    (
      <div
        style={{
          background: '#0F0F0F',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
        }}
      >
        {/* Subtle radial glow */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'radial-gradient(ellipse 70% 60% at 50% 50%, rgba(242,101,34,0.07) 0%, transparent 70%)',
            display: 'flex',
          }}
        />

        {/* Frame */}
        <div
          style={{
            position: 'absolute',
            top: 40,
            left: 40,
            right: 40,
            bottom: 40,
            border: '1px solid rgba(242,101,34,0.2)',
            display: 'flex',
          }}
        />

        {/* Eyebrow */}
        <div
          style={{
            color: '#1E8FD5',
            fontSize: 15,
            letterSpacing: '0.3em',
            textTransform: 'uppercase',
            marginBottom: 36,
            display: 'flex',
          }}
        >
          Servicio profesional de barra
        </div>

        {/* Title */}
        <div
          style={{
            color: '#FFFFFF',
            fontSize: 96,
            fontWeight: 700,
            letterSpacing: '-3px',
            lineHeight: 1,
            marginBottom: 36,
            display: 'flex',
            fontFamily: playfair ? 'Playfair Display' : 'Georgia, serif',
          }}
        >
          Barras Nómades
        </div>

        {/* Orange divider */}
        <div
          style={{
            width: 72,
            height: 2,
            background: '#F26522',
            marginBottom: 36,
            display: 'flex',
          }}
        />

        {/* Tagline */}
        <div
          style={{
            color: 'rgba(245,240,232,0.65)',
            fontSize: 24,
            letterSpacing: '0.01em',
            display: 'flex',
          }}
        >
          20 años llevando el bar perfecto a tu evento
        </div>
      </div>
    ),
    {
      ...size,
      fonts: playfair
        ? [{ name: 'Playfair Display', data: playfair, style: 'normal', weight: 700 }]
        : [],
    }
  )
}
