# Brajendra Kumar — Portfolio

A stunning dark luxury portfolio built with Next.js 14, featuring:
- ✨ Custom animated cursor with magnetic follow
- 🌑 Dark luxury aesthetic with grain texture
- ⚡ Scroll-reveal animations throughout
- 📱 Fully responsive design
- 🎨 Google Fonts: Syne + Instrument Serif + DM Mono

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see your portfolio.

## Build for Production

```bash
npm run build
npm start
```

## Deployment

### Vercel
1. Import this repo in Vercel.
2. Set **Project Name** to `brajendra-portfolio` (or your preferred brand slug).
3. Add env var: `NEXT_PUBLIC_SITE_URL=https://<your-vercel-domain>`.
4. Deploy.

### Netlify
1. Import this repo in Netlify.
2. Build command: `npm run build`
3. Plugin auto-enabled via `netlify.toml` (`@netlify/plugin-nextjs`).
4. Set env var: `NEXT_PUBLIC_SITE_URL=https://<your-netlify-domain>`.
5. Deploy.

### Keep URL branded (no random-looking public URL)
- Set site/project name explicitly in Vercel and Netlify dashboards.
- Add a custom domain (recommended) and make it primary.
- Disable Deploy Previews/Branch Deploys in dashboard if you do not want preview URLs.

## Sections
1. **Hero** — Name, title, availability badge, key stats
2. **About** — Bio, education, current role
3. **Skills** — 6 skill category cards
4. **Experience** — Timeline with Moglix + ITPROFOUND
5. **Projects** — Buyers Platform + OPUS with metrics
6. **Contact** — Email, LinkedIn, Phone

## Customization

All content is in the component files inside `/components/`.
Colors and fonts are CSS variables in `app/globals.css`.
