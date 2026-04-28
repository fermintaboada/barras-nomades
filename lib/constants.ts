export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'http://localhost:3000')

export const WHATSAPP_LINK =
  'https://wa.me/5491160921908?text=Hola%20F%C3%A9lix%2C%20quiero%20consultar%20por%20el%20servicio%20de%20barra'

export const INSTAGRAM_HANDLE = '@barrasnomades'
export const INSTAGRAM_URL = 'https://instagram.com/barrasnomades'

export const DRINKS = [
  'Caipiroskas',
  'Vodka tonic',
  'Vodka con naranja',
  'Fernet',
  'Gin tonic (con limón, pepino o pomelo)',
  'Campari con naranja',
  'Campari con tónica',
  'Whisky',
  'Aperol Spritz',
  'Mojitos',
  'Cuba libre',
  'Negroni',
  'Vermouth',
  'Cerveza',
  'Gaseosas',
  'Agua con y sin gas',
]

export const BRANDS = [
  'Fernet Branca',
  'Vodka Smirnoff',
  'Campari',
  'Gin Beefeater',
  'Cinzano Rosso',
  'Ron Habana',
  'Johnnie Walker Red Label',
  'Champagne de corte para el Aperol',
  'Cerveza Imperial o similar',
]

export const UPGRADES = [
  'Vodka Absolut',
  'Johnnie Walker Black',
  'Salentein Extra Brut',
]

export const GALLERY_IMAGES = [
  '/barra Aestethic.jpeg',
  '/BarraDesdeLejosPanorama.jpeg',
  '/barraRojo.jpeg',
  '/casamiento.jpeg',
  '/genteGold.jpeg',
  '/ingredientes.jpeg',
]

export const SERVICES = [
  '1 barra',
  '3 bartenders profesionales',
  '1 runner',
  'Provisión de todos los insumos (hielo, frutas, jugos, vasos de vidrio, gaseosas)',
  'Flete',
  'Seguro',
]
