import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import {
  Share2, Search, MousePointerClick, Code2, Sparkles, PenTool,
  BarChart3, Wallet, Zap, Heart, Phone, MapPin, Instagram, Facebook, ArrowRight,
  ChevronLeft, ChevronRight, Pause, Play,
} from "lucide-react";
import logo from "@/assets/brookstone-logo.jpeg";
import banner1 from "@/assets/no1-digital-marketing-company-tiruppur.jpeg";
import banner2 from "@/assets/google-ads-management-website-development-tiruppur.jpeg";
import banner3 from "@/assets/best-digital-marketing-company-tiruppur.jpeg";

const banners = [banner1, banner2, banner3];
const altTexts = [
  "Digital Marketing Company in Tiruppur",
  "SEO and Website Development Services in Tiruppur",
  "Best Digital Marketing Agency in Tiruppur",
]; 
function HeroBannerSlider() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const count = banners.length;

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % count), 5000);
    return () => clearInterval(id);
  }, [paused, count]);

  const prev = () => setIndex((i) => (i - 1 + count) % count);
  const next = () => setIndex((i) => (i + 1) % count);

  return (
    <div className="relative w-full overflow-hidden bg-black aspect-[16/9] max-h-screen">
      <div
        className="flex h-full w-full transition-transform duration-700 ease-out"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {banners.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={altTexts[i]}
            className="h-full w-full flex-shrink-0 object-contain"
          />
        ))}
      </div>

      {/* Prev / Next */}
      <button
        onClick={prev}
        aria-label="Previous slide"
        className="absolute left-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur transition hover:bg-white/30 sm:left-5 sm:h-12 sm:w-12"
      >
        <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" />
      </button>
      <button
        onClick={next}
        aria-label="Next slide"
        className="absolute right-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur transition hover:bg-white/30 sm:right-5 sm:h-12 sm:w-12"
      >
        <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" />
      </button>

      {/* Pause / Play + dots */}
      <div className="absolute bottom-5 left-1/2 z-10 flex -translate-x-1/2 items-center gap-3">
        <button
          onClick={() => setPaused((p) => !p)}
          aria-label={paused ? "Play slideshow" : "Pause slideshow"}
          className="flex h-8 w-8 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur transition hover:bg-white/30"
        >
          {paused ? <Play className="h-4 w-4" /> : <Pause className="h-4 w-4" />}
        </button>
        <div className="flex items-center gap-2">
          {banners.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-2 rounded-full transition-all ${
                i === index ? "w-8 bg-white" : "w-2 bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

// X (formerly Twitter) brand icon
function XIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6 },
};

export function Hero() {
  return (
    <section id="home" className="relative">
      <HeroBannerSlider />
    </section>
  );
}
<section className="bg-background py-16">
  <div className="mx-auto max-w-6xl px-6 text-center">

    <h1 className="text-4xl font-bold sm:text-5xl">
      Digital Marketing Company in Tiruppur
    </h1>

    <p className="mx-auto mt-6 max-w-3xl text-lg text-muted-foreground">
      Brook Stone Digital Solutions helps businesses in Tiruppur grow online
      through SEO, Google Ads, Meta Ads, Website Development and Social Media
      Marketing. We create result-driven digital marketing strategies that
      increase traffic, generate quality leads and improve business growth.
    </p>

    <div className="mt-8 flex flex-wrap justify-center gap-3">
      <span className="rounded-full border px-4 py-2">
        SEO Services
      </span>

      <span className="rounded-full border px-4 py-2">
        Google Ads
      </span>

      <span className="rounded-full border px-4 py-2">
        Website Development
      </span>

      <span className="rounded-full border px-4 py-2">
        Social Media Marketing
      </span>
    </div>

  </div>
</section>
export function About() {
  return (
    <section id="about" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <motion.div {...fadeUp}>
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-brand-blue">About Us</p>
            <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl">
              We craft <span className="text-gradient-brand">infinite</span> growth for ambitious brands.
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Brook Stone Digital Solutions is a growth-focused digital marketing company in Tiruppur, blending creativity with analytics. 
              We partner with startups and established businesses to design strategies that turn clicks into customers and customers into loyal communities.
              </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              From SEO services and Google Ads management to social media marketing and website development, our team helps businesses in Tiruppur achieve measurable online growth and generate quality leads.
              </p>
          </motion.div>
          <motion.div {...fadeUp} transition={{ duration: 0.7, delay: 0.15 }} className="relative">
            <div className="absolute inset-0 rounded-3xl bg-gradient-brand opacity-20 blur-2xl" />
            <div className="relative grid grid-cols-2 gap-4">
              {[
                { k: "150+", v: "Projects Delivered" },
                { k: "98%", v: "Client Retention" },
                { k: "5x", v: "Avg. ROI Growth" },
                { k: "24/7", v: "Support" },
              ].map((s) => (
                <div key={s.v} className="gradient-border p-6 text-center">
                  <div className="text-3xl font-bold text-gradient-brand">{s.k}</div>
                  <div className="mt-1 text-xs text-muted-foreground">{s.v}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

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
      <div className="relative mx-auto max-w-6xl px-6">
        <motion.div {...fadeUp} className="mx-auto mb-14 max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-brand-purple-light">Services</p>
          <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl">
            Everything you need to <span className="text-gradient-brand">scale</span>
          </h2>
        </motion.div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="group rounded-2xl border border-white/10 bg-white/5 p-7 backdrop-blur transition-all hover:-translate-y-2 hover:border-brand-purple-light/50 hover:bg-white/10"
            >
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-brand text-white shadow-brand">
                <s.icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold text-white">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/70">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

const reasons = [
  { icon: BarChart3, title: "Data-driven", desc: "Every decision backed by analytics and insights." },
  { icon: Wallet, title: "Affordable", desc: "Premium quality at packages that fit your budget." },
  { icon: Zap, title: "Fast delivery", desc: "Quick turnarounds without compromising on quality." },
  { icon: Heart, title: "Personalized support", desc: "A dedicated team that truly cares about your growth." },
];

export function WhyUs() {
  return (
    <section id="why" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div {...fadeUp} className="mx-auto mb-14 max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-brand-blue">Why Choose Us</p>
          <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl">
            Built for brands that mean <span className="text-gradient-brand">business</span>
          </h2>
        </motion.div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="rounded-2xl bg-white p-7 shadow-[0_8px_30px_-15px_rgba(123,44,191,0.2)] transition-all hover:shadow-brand"
            >
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-lg bg-gradient-blue text-white">
                <r.icon className="h-5 w-5" />
              </div>
              <h3 className="font-bold">{r.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{r.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CTABanner() {
  return (
    <section className="px-6 py-12">
      <motion.div
        {...fadeUp}
        className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl bg-gradient-brand p-10 text-center text-white shadow-brand md:p-16"
      >
        <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
        <div className="pointer-events-none absolute -left-20 -bottom-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
        <h2 className="relative text-3xl font-bold sm:text-4xl md:text-5xl">
          Let's Grow Your Business Together 🚀
        </h2>
        <p className="relative mx-auto mt-4 max-w-xl text-white/90">
        Looking for a trusted digital marketing company in Tiruppur? We help businesses grow through SEO, Google Ads, social media marketing, and website development.
        </p>
        <a
          href="#contact"
          className="relative mt-8 inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 text-sm font-bold text-brand-purple transition-transform hover:scale-105"
        >
          Start Your Project <ArrowRight className="h-4 w-4" />
        </a>
      </motion.div>
    </section>
  );
}

export function Contact() {
  return (
    <section id="contact" className="py-20 md:py-28">
      <div className="mx-auto max-w-5xl px-6">
        <motion.div {...fadeUp} className="mb-12 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-brand-purple">Contact</p>
          <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl">
            Get in <span className="text-gradient-brand">Touch</span>
          </h2>
          <p className="mt-4 text-muted-foreground">We'd love to hear about your project.</p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          <motion.a
            {...fadeUp}
            href="tel:+916383624245"
            className="gradient-border flex items-start gap-4 p-7 transition-transform hover:-translate-y-1"
          >
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-purple text-white">
              <Phone className="h-5 w-5" />
            </div>
            <div>
              <h3 className="font-bold">Phone</h3>
              <p className="mt-1 text-muted-foreground">+91 63836 24245</p>
            </div>
          </motion.a>

          <motion.div {...fadeUp} transition={{ duration: 0.6, delay: 0.1 }} className="gradient-border flex items-start gap-4 p-7">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-blue text-white">
              <MapPin className="h-5 w-5" />
            </div>
            <div>
              <h3 className="font-bold">Address</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                402B 3rd Street, Kallakadu,<br />Verrapandi Post, Tiruppur
              </p>
            </div>
          </motion.div>
        </div>

        {/* Live map */}
        <motion.div {...fadeUp} className="mt-8 overflow-hidden rounded-2xl shadow-brand gradient-border">
          <iframe
            title="Brook Stone Digital Solutions location"
            src="https://www.google.com/maps?q=402B+3rd+Street+Kallakadu+Veerapandi+Tiruppur&output=embed"
            width="100%"
            height="320"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            style={{ border: 0, display: "block" }}
            allowFullScreen
          />
        </motion.div>

        <motion.div {...fadeUp} className="mt-10 flex justify-center gap-4">
          {[
            { Icon: Instagram, href: "https://www.instagram.com/brookstone.digitalsolutions/", label: "Instagram" },
            { Icon: Facebook, href: "https://www.facebook.com/profile.php?id=61583190211991", label: "Facebook" },
            { Icon: XIcon, href: "https://x.com/BStone42646", label: "X" },
          ].map(({ Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-[0_8px_20px_-10px_rgba(123,44,191,0.4)] transition-all hover:scale-110 hover:bg-gradient-brand hover:text-white"
            >
              <Icon className="h-5 w-5" />
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-white/50 backdrop-blur">
      <div className="mx-auto max-w-6xl px-6 py-10">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2">
              <img src={logo} alt="Brook Stone" className="h-9 w-9 rounded-full object-cover" />
              <span className="font-display font-bold text-gradient-brand">Brook Stone</span>
            </div>
            <p className="mt-3 text-sm text-muted-foreground">
              Smart digital marketing solutions for ambitious brands.
            </p>
          </div>
          <div>
            <h4 className="font-semibold">Quick Links</h4>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li><a href="#about" className="hover:text-foreground">About</a></li>
              <li><a href="#services" className="hover:text-foreground">Services</a></li>
              <li><a href="#why" className="hover:text-foreground">Why Us</a></li>
              <li><a href="#contact" className="hover:text-foreground">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold">Connect</h4>
            <p className="mt-3 text-sm text-muted-foreground">📞 +91 63836 24245</p>
            <p className="mt-1 text-sm text-muted-foreground">📍 Tiruppur, Tamil Nadu</p>
            <div className="mt-3 flex gap-3">
              <a href="https://www.instagram.com/brookstone.digitalsolutions/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-muted-foreground hover:text-brand-purple"><Instagram className="h-5 w-5" /></a>
              <a href="https://www.facebook.com/profile.php?id=61583190211991" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-muted-foreground hover:text-brand-purple"><Facebook className="h-5 w-5" /></a>
              <a href="https://x.com/BStone42646" target="_blank" rel="noopener noreferrer" aria-label="X" className="text-muted-foreground hover:text-brand-purple"><XIcon className="h-5 w-5" /></a>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-border pt-6 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} Brook Stone Digital Solutions. All rights reserved. 
        </div>
      </div>
    </footer>
  );
}
