#!/usr/bin/env bash
# Migration: TanStack Start (Lovable) -> plain Vite + React + React Router DOM
# Run from the repo root on your local machine after cloning from GitHub.

set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT"

echo "▶ Migrating $ROOT to plain Vite + React Router DOM"

if [[ ! -f package.json ]]; then
  echo "✗ Run this from the repo root (no package.json found)."
  exit 1
fi

# ---------- 1. Remove TanStack/Cloudflare/Lovable-specific files ----------
echo "▶ Removing SSR / TanStack / Cloudflare files"
rm -f wrangler.jsonc bunfig.toml
rm -f src/router.tsx src/routeTree.gen.ts
rm -f src/routes/__root.tsx
rm -rf src/routes/api 2>/dev/null || true

# ---------- 2. Convert route files into pages ----------
echo "▶ Converting routes/ to pages/"
mkdir -p src/pages

# Home page (was src/routes/index.tsx)
if [[ -f src/routes/index.tsx ]]; then
  cat > src/pages/Home.tsx <<'TSX'
import { Navbar } from "@/components/Navbar";
import { FloatingButtons } from "@/components/FloatingButtons";
import { Hero, About, Services, WhyUs, CTABanner, Contact, Footer } from "@/components/Sections";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <WhyUs />
        <CTABanner />
        <Contact />
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  );
}
TSX
fi

# Pricing page (was src/routes/pricing.tsx) — copy body, drop createFileRoute wrapper
if [[ -f src/routes/pricing.tsx ]]; then
  cat > src/pages/Pricing.tsx <<'TSX'
import { motion } from "framer-motion";
import { Check, Sparkles, ArrowRight, Camera, Zap, Crown, Rocket } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { FloatingButtons } from "@/components/FloatingButtons";
import { Footer, CTABanner } from "@/components/Sections";

type Plan = {
  name: string;
  price: string;
  duration: string;
  icon: React.ComponentType<{ className?: string }>;
  badge?: string;
  highlight?: boolean;
  features: string[];
  note?: string;
  tone: "purple" | "blue" | "dark" | "pink";
};

const plans: Plan[] = [
  {
    name: "Trial Meta Ad Plan", price: "₹5,000", duration: "30 Days", icon: Zap, tone: "pink",
    features: [
      "Meta Ads Every Sunday (Facebook & Instagram)",
      "Target Audience Setup for Ideal Customers",
      "6 Daily Creative Posters (Brand-focused designs)",
      "4 Promotional Videos (Reels / Shorts friendly)",
      "Complete Social Media Management",
    ],
    note: "Book for 3 months and get FLAT 20% OFF",
  },
  {
    name: "Basic Meta Ad Plan", price: "₹7,500", duration: "30 Days", icon: Rocket, tone: "purple",
    features: [
      "Sat & Sunday Meta Ad Campaign (Every Week)",
      "Advanced Targeting: Custom & Lookalike Audiences",
      "6 Daily Creative Posters (Brand-focused designs)",
      "6 Promotional Videos (Reels / Shorts friendly)",
      "Complete Social Media Management",
    ],
    note: "Book for 3 months and get FLAT 20% OFF",
  },
  {
    name: "Premium Meta Ad Plan", price: "₹10,000", duration: "30 Days", icon: Crown, tone: "dark",
    badge: "Most Popular", highlight: true,
    features: [
      "Meta Ad Campaigns — Friday, Saturday & Sunday",
      "Professional Design Support",
      "6 Daily Posters — Consistent creative visuals",
      "8 High-Quality Branded Videos",
      "Boosting Included — wider visibility",
      "Page Maintenance — Facebook, Instagram, YouTube & Google My Business",
    ],
    note: "20% OFF on 3 months package",
  },
  {
    name: "Ad Shoot Package", price: "₹7,499", duration: "Per Project", icon: Camera, tone: "blue",
    features: [
      "6 Ad Videos (30s / 60s each)",
      "Product / Service shoot",
      "Cinematic shots & lighting",
      "Professional editing",
      "Color grading",
      "Background music",
      "Ready for Insta, FB & YouTube Ads",
    ],
    note: "Delivery: 3–5 Days · 2 Minor Revisions",
  },
];

const toneClasses: Record<Plan["tone"], string> = {
  pink: "from-pink-100 to-purple-100",
  purple: "from-purple-100 to-fuchsia-100",
  dark: "from-[#1a0b2e] to-[#3b1170] text-white",
  blue: "from-cyan-50 to-blue-100",
};

export default function Pricing() {
  const waMsg = (plan: string) =>
    `https://wa.me/916383624245?text=${encodeURIComponent(`Hi! I'm interested in the ${plan}.`)}`;

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-32 pb-20">
        <section className="mx-auto max-w-6xl px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-white/60 px-4 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur">
            <Sparkles className="h-3.5 w-3.5 text-brand-purple" />
            Pricing & Packages
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="mt-6 text-4xl font-bold sm:text-5xl md:text-6xl">
            Plans Built to <span className="text-gradient-brand">Scale Your Brand</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            className="mx-auto mt-5 max-w-2xl text-muted-foreground">
            Transparent pricing. Premium quality. Pick the package that fits your goals — or talk to us for a custom plan.
          </motion.p>
        </section>

        <section className="mx-auto mt-16 grid max-w-7xl gap-6 px-6 sm:grid-cols-2 lg:grid-cols-4">
          {plans.map((p, i) => {
            const Icon = p.icon;
            const isDark = p.tone === "dark";
            return (
              <motion.div key={p.name} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                className={`relative flex flex-col overflow-hidden rounded-3xl bg-gradient-to-br ${toneClasses[p.tone]} p-7 shadow-[0_15px_40px_-20px_rgba(123,44,191,0.35)] ${p.highlight ? "ring-2 ring-brand-purple lg:scale-105" : ""}`}>
                {p.badge && (
                  <span className="absolute right-5 top-5 rounded-full bg-yellow-400 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-black shadow">
                    {p.badge}
                  </span>
                )}
                <div className={`mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl ${isDark ? "bg-white/15" : "bg-gradient-brand"} text-white shadow-brand`}>
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className={`text-xl font-bold ${isDark ? "text-white" : ""}`}>{p.name}</h3>
                <div className="mt-4 flex items-baseline gap-2">
                  <span className={`text-4xl font-bold ${isDark ? "text-white" : "text-gradient-brand"}`}>{p.price}</span>
                  <span className={`text-xs ${isDark ? "text-white/70" : "text-muted-foreground"}`}>/ {p.duration}</span>
                </div>
                <ul className={`mt-6 space-y-3 text-sm ${isDark ? "text-white/90" : "text-foreground/80"}`}>
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2">
                      <Check className={`mt-0.5 h-4 w-4 shrink-0 ${isDark ? "text-cyan-300" : "text-brand-purple"}`} />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                {p.note && (
                  <p className={`mt-5 rounded-lg px-3 py-2 text-xs font-medium ${isDark ? "bg-yellow-400/20 text-yellow-200" : "bg-white/70 text-brand-purple"}`}>
                    🎁 {p.note}
                  </p>
                )}
                <a href={waMsg(p.name)} target="_blank" rel="noopener noreferrer"
                  className={`mt-6 inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition-transform hover:scale-105 ${isDark ? "bg-white text-brand-purple" : "bg-gradient-brand text-white shadow-brand"}`}>
                  Book Now <ArrowRight className="h-4 w-4" />
                </a>
              </motion.div>
            );
          })}
        </section>

        <div className="mt-20"><CTABanner /></div>
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  );
}
TSX
fi

# Remove old route directory
rm -rf src/routes

# ---------- 3. New entry: index.html + main.tsx + App.tsx ----------
echo "▶ Writing Vite entry files"

cat > index.html <<'HTML'
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Brook Stone - Digital Marketing</title>
    <meta name="description" content="Grow your business with Brook Stone Digital Solutions. SEO, social media marketing, Google Ads, and website development." />
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
HTML

cat > src/main.tsx <<'TSX'
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./styles.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
TSX

cat > src/App.tsx <<'TSX'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Pricing from "./pages/Pricing";

function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <Link to="/" className="mt-6 inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90">
          Go home
        </Link>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
TSX

# ---------- 4. New vite.config.ts ----------
echo "▶ Writing vite.config.ts"
cat > vite.config.ts <<'TS'
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: { "@": path.resolve(__dirname, "./src") },
  },
  build: {
    outDir: "dist",
    emptyOutDir: true,
  },
});
TS

# ---------- 5. Patch all imports of @tanstack/react-router -> react-router-dom ----------
echo "▶ Rewriting @tanstack/react-router imports in components"
# Replace `Link` import + `to=` is the same API; only the package changes.
# Also replace useNavigate / useLocation / useParams (same names exist in react-router-dom).
if command -v gsed >/dev/null 2>&1; then SED=gsed; else SED=sed; fi
grep -rl "@tanstack/react-router" src 2>/dev/null | while read -r f; do
  $SED -i 's|@tanstack/react-router|react-router-dom|g' "$f"
done

# ---------- 6. Patch package.json ----------
echo "▶ Patching package.json (deps + scripts)"
node - <<'NODE'
const fs = require("fs");
const pkg = JSON.parse(fs.readFileSync("package.json", "utf8"));

// Remove deps that no longer apply
const drop = [
  "@tanstack/react-router",
  "@tanstack/react-start",
  "@tanstack/router-plugin",
  "@cloudflare/vite-plugin",
  "@lovable.dev/vite-tanstack-config",
  "wrangler",
  "@cloudflare/workers-types",
];
for (const d of drop) {
  delete pkg.dependencies?.[d];
  delete pkg.devDependencies?.[d];
}

// Add what we need
pkg.dependencies ||= {};
pkg.devDependencies ||= {};
pkg.dependencies["react-router-dom"] = "^6.28.0";
pkg.devDependencies["@vitejs/plugin-react"] = "^4.3.4";
pkg.devDependencies["vite"] = "^7.0.0";

// Scripts: plain Vite + post-build htaccess copy
pkg.scripts = {
  dev: "vite",
  build: "vite build && node migration/postbuild.mjs",
  preview: "vite preview",
  lint: pkg.scripts?.lint || "eslint .",
};

// Drop SSR-only fields
delete pkg.type === "module" ? null : pkg.type; // keep "module"

fs.writeFileSync("package.json", JSON.stringify(pkg, null, 2) + "\n");
NODE

# ---------- 7. Done ----------
cat <<'EOF'

✅ Migration complete.

Next steps:
  rm -rf node_modules package-lock.json bun.lockb
  npm install
  npm run build
  ls dist/    # index.html  assets/  .htaccess  _redirects

Then upload the CONTENTS of dist/ to Hostinger public_html/.
EOF
