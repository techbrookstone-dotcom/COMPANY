# Static Vite Migration Pack

Converts this Lovable TanStack Start project into a plain **Vite + React + React Router DOM** app that builds to a single `dist/` folder for Hostinger (or any static host).

## ⚠️ One-way conversion

Run this **on your own machine after cloning from GitHub**, NOT inside the Lovable editor.
Once applied, the project can no longer be edited in Lovable's preview (Lovable's sandbox needs TanStack Start).

## What it does

- Removes `@tanstack/react-start`, `@tanstack/react-router`, `@tanstack/router-plugin`, `@cloudflare/vite-plugin`, `@lovable.dev/vite-tanstack-config`, `wrangler`
- Deletes `wrangler.jsonc`, `bunfig.toml`, `src/router.tsx`, `src/routeTree.gen.ts`, `src/routes/__root.tsx`
- Converts `src/routes/index.tsx` → `src/pages/Home.tsx`
- Converts `src/routes/pricing.tsx` → `src/pages/Pricing.tsx`
- Creates standard Vite entry: `index.html`, `src/main.tsx`, `src/App.tsx`
- Replaces all `@tanstack/react-router` `<Link>` and `createFileRoute` usage with `react-router-dom`
- Writes a clean `vite.config.ts` (React + Tailwind v4 + `@/` alias)
- Writes `dist/.htaccess` and `dist/_redirects` after build via a `postbuild` script
- Output: `dist/index.html` + `dist/assets/*` only

## Run it

```bash
git clone <your-repo-url>
cd <repo>
bash migration/apply.sh
npm install
npm run build
ls dist/   # index.html  assets/  .htaccess  _redirects
```

Upload the **contents** of `dist/` to Hostinger `public_html/`.
