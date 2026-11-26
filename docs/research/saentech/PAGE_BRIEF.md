# saentech.com — page brief

Source: https://www.saentech.com/ (WordPress + Elementor + Smart Slider 3)
Local route: `/` → `src/app/page.tsx` → `src/components/sites/saentech/SaentechHome.tsx`
Assets: `public/sites/saentech/{fonts,img,icons,logos,products,slides}`

## Tokens
- Lime `#BDD346`, navy `#1E3A5F`, black `#1D1D1B`, dark `#191E27`
- Gradient: `linear-gradient(205deg|225deg, #BDD346 1%, #1E3A5F 100%)`
- Fonts (self-hosted, from source): CY Grotesk Grand (display, mostly outline via `-webkit-text-stroke`), Open Sauce One (body), PP Telegraf (lead)

## Sections (desktop 1440)
1. Header 136px + off-canvas menu (right panel 40%, `#191E27`)
2. Hero: Smart Slider showcase (7 slides, fade, dots, next arrow) + outlined H1/H2 + circle CTA
3. Nuestros beneficios: 3×2 icons with glow background
4. Distribución a todas las islas: stats + Canary Islands map
5. Marcas líderes: two swiper marquees (opposite directions, ~3.5s per logo, linear)
6. Proceso de compra: staggered steps 01–03
7. Catálogo: 4-col product cards (21 visible, "Cargar más" reveals the rest); mobile = one-card carousel
8. Footer

## Interactions reproduced
Off-canvas menu (Esc/overlay/close), slider autoplay/dots/next, CTA hover (circle expands), marquee, load more, mobile catalog arrows.

## Known gaps
- Only the homepage is cloned; other pages (Conócenos, Saentech PRO, Catálogo, Contacto, legal) link to the live site.
- "Cargar más" on the source fetches more products via AJAX; the clone ships the 40 products present in the initial HTML.
- Product cards have no links on the source, so none here either.
