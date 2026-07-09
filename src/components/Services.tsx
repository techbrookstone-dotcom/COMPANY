import { motion } from "framer-motion";
import { fadeUp } from "../lib/animations";

import {
  Share2,
  Search,
  MousePointerClick,
  Code2,
  Sparkles,
  PenTool,
} from "lucide-react"; 
const services = [
  { icon: Share2, title: "Social Media Marketing", desc: "Engage audiences across Instagram, Facebook & more with scroll-stopping content." },
  { icon: Search, title: "SEO", desc: "Rank higher and capture intent-driven traffic with our proven SEO playbook." },
  { icon: MousePointerClick, title: "Google Ads", desc: "Performance campaigns optimized for clicks, conversions and ROAS." },
  { icon: Code2, title: "Website Development", desc: "Lightning-fast, responsive websites that convert visitors into customers." },
  { icon: Sparkles, title: "Branding", desc: "Memorable identities — logos, voice, visuals — that make brands unforgettable." },
  { icon: PenTool, title: "Content Marketing", desc: "Stories, blogs and videos that build authority and trust at scale." },
];

export function Services() {
  return (
    <section id="services" className="relative overflow-hidden bg-[oklch(0.16_0.04_280)] py-20 text-white md:py-28">
      <div className="pointer-events-none absolute -top-32 -left-20 h-96 w-96 rounded-full bg-brand-purple/30 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -right-20 h-96 w-96 rounded-full bg-brand-blue/30 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-6">
        <motion.div {...fadeUp} className="mx-auto mb-14 max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-brand-purple-light">Services</p>
          <h2 className="mx-auto max-w-2xl text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
           Digital Marketing Services That
           <span className="text-gradient-brand"> Drive Real Business Growth</span>
          </h2>
          <p className="mt-5 text-base leading-7 text-white/70 md:text-lg">
           From SEO and Google Ads to Website Development and Social Media Marketing,
           we help businesses attract more customers and grow faster.
          </p>
        </motion.div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial="initial"
              whileInView="whileInView"
              viewport={fadeUp.viewport}
              variants={{
              initial: fadeUp.initial,
              whileInView: fadeUp.whileInView,
              }}
              transition={{
              duration: 0.45,
              delay: i * 0.05,
              }}
              className="group rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-300 hover:-translate-y-3 hover:border-blue-400/50 hover:bg-white/10 hover:shadow-[0_0_40px_rgba(59,130,246,0.25)]"
            >
              <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-brand text-white shadow-lg shadow-blue-500/30">
                <s.icon className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-semibold text-white">{s.title}</h3>
              <p className="mt-3 text-base leading-7 text-white/70">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
