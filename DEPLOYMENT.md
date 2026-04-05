# Deployment Guide (Vercel + Netlify)

## 1) Prerequisites
- Use Node.js `20` (`.nvmrc` is included).
- Install deps:

```bash
npm install
```

## 2) Environment Variable
Set this in both platforms:

- `NEXT_PUBLIC_SITE_URL=https://your-primary-domain.com`

Example:
- Vercel: `https://brajendra-portfolio.vercel.app`
- Netlify: `https://brajendra-portfolio.netlify.app`

## 3) Vercel Setup
1. Import Git repo into Vercel.
2. Project Name: set to your brand slug (for example `brajendra-portfolio`).
3. Framework: Next.js (auto-detected).
4. Build command: `npm run build` (already in `vercel.json`).
5. Deploy.

## 4) Netlify Setup
1. Import Git repo into Netlify.
2. Build command: `npm run build`.
3. `@netlify/plugin-nextjs` runs from `netlify.toml`.
4. Deploy.

## 5) Avoid random-looking public URLs
- Set a clear site/project name on both platforms.
- Add custom domain and mark it as primary.
- If you do not want preview links, disable:
  - Vercel: Preview deployments (via project settings/workflow policy)
  - Netlify: Deploy previews + branch deploys

## 6) Local stable dev command
If local port/cache gets stuck:

```bash
npm run dev:force
```
