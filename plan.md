# Plan — Landing Page Barras Nómades

## Stack
- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS

---

## Estructura de carpetas

```
app/
  layout.tsx          — fuente, metadata, globals
  page.tsx            — ensambla todas las secciones
components/
  Navbar.tsx          — logo + botón WhatsApp fijo
  Hero.tsx
  ValueProp.tsx
  About.tsx
  Services.tsx
  Drinks.tsx
  Gallery.tsx
  Upgrades.tsx
  CTA.tsx
public/
  images/             — las 6 fotos
lib/
  constants.ts        — todos los textos y datos (tragos, marcas, servicios, links)
```

---

## Colores reutilizables — tailwind.config.ts

```ts
colors: {
  brand: {
    blue:   '#1E8FD5',  // azul del logo
    orange: '#F26522',  // naranja del logo
    dark:   '#0F0F0F',  // fondo oscuro general
    cream:  '#F5F0E8',  // texto claro
  }
}
```

Todos los componentes usan estas clases. Si cambia una, cambia todo.

---

## lib/constants.ts — toda la info real, sin hardcodear en componentes

```ts
export const WHATSAPP_LINK =
  'https://wa.me/5491160921908?text=Hola%20Félix%2C%20quiero%20consultar%20por%20el%20servicio%20de%20barra'

export const INSTAGRAM = '@barrasnomades'

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

export const SERVICES = [
  '1 barra',
  '3 bartenders profesionales',
  '1 runner',
  'Provisión de todos los insumos (hielo, frutas, jugos, vasos de vidrio, gaseosas)',
  'Flete',
  'Seguro',
]
```

---

## Secciones — orden y contenido

### 1. Navbar
- Logo (imagen del triángulo azul/naranja)
- Botón WhatsApp fijo visible en todo momento
- Fijo en el top, fondo oscuro con leve transparencia

### 2. Hero
- Foto de fondo: bar iluminado de noche (foto 4)
- Título: **Barras Nómades**
- Tagline: *20 años llevando el bar perfecto a tu evento*
- Botón principal: "Consultanos por WhatsApp" → WHATSAPP_LINK

### 3. Propuesta de valor
- 3 stats: 20 años de experiencia · Servicio llave en mano · Staff incluido
- Descripción breve del servicio

### 4. Nosotros
- Texto: "Barras Nómades nació hace 20 años de la mano de Félix Taboada, y hoy es un proyecto familiar que comparte con sus dos hijos. Lo que empezó como una pasión por la coctelería se convirtió en una empresa con historia, oficio y el sello de quien pone el nombre propio en cada evento."
- Foto sugerida: la de los dos hombres charlando al atardecer (foto 2)

### 5. Servicios incluidos
- Lista desde SERVICES de constants.ts
- Foto de referencia: barra con botellas y salón al fondo (foto 5)

### 6. Tragos y marcas
- Lista desde DRINKS y BRANDS de constants.ts
- Foto de referencia: ingredientes/mise en place (foto 3)

### 7. Upgrades
- Lista desde UPGRADES de constants.ts
- Sin precios — texto: "Consultanos por upgrades de marcas premium"
- Botón WhatsApp → WHATSAPP_LINK

### 8. Galería
- Grid responsivo con las 6 fotos
- Sin captions

### 9. CTA final
- Texto: "¿Tenés un evento? Escribinos y te armamos una propuesta."
- Botón WhatsApp → WHATSAPP_LINK
- Instagram: @barrasnomades
- Contacto: Félix Taboada

---

## Criterios de diseño
- Fondo oscuro general (brand-dark), acorde a las fotos nocturnas
- Acentos en brand-blue y brand-orange
- Tipografía clara sobre fondo oscuro (brand-cream)
- Navbar fija, botón WhatsApp siempre visible
- Responsivo mobile-first
- Sin precios en ninguna sección
- Sin información inventada — todo sale de constants.ts