import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import {
  Share2, Search, MousePointerClick, Code2, Sparkles, PenTool,
  BarChart3, Wallet, Zap, Heart, Phone, MapPin, Instagram, Facebook, ArrowRight,
} from "lucide-react";
import logo from "@/assets/brookstone-logo.jpeg";
import banner1 from "@/assets/banner-1.jpeg";
import banner2 from "@/assets/banner-2.jpeg";
import banner3 from "@/assets/banner-3.jpeg";

const banners = [banner1, banner2, banner3];

function HeroBannerSlider() {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % banners.length), 4000);
    return () => clearInterval(id);
  }, []);
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="relative mx-auto mb-10 w-full max-w-5xl overflow-hidden rounded-3xl shadow-brand"
    >
      <div
        className="flex transition-transform duration-700 ease-out"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {banners.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`Brook Stone banner ${i + 1}`}
            className="aspect-[1600/500] w-full flex-shrink-0 object-cover"
          />
        ))}
      </div>
      <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-2">
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
    </motion.div>
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
    <section id="home" className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
      {/* decorative blobs */}
      <div className="pointer-events-none absolute -top-32 -left-32 h-96 w-96 rounded-full bg-brand-purple-light/30 blur-3xl" />
      <div className="pointer-events-none absolute -top-20 -right-32 h-96 w-96 rounded-full bg-brand-blue-light/30 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-72 w-[80%] -translate-x-1/2 rounded-full bg-gradient-brand opacity-10 blur-3xl" />

      <div className="relative mx-auto max-w-5xl px-6 text-center">
        <motion.img
          {...fadeUp}
          src={logo}
          alt="Brook Stone Digital Solutions"
          className="mx-auto mb-8 h-44 w-44 rounded-3xl object-cover shadow-brand sm:h-52 sm:w-52 md:h-60 md:w-60"
        />
        <HeroBannerSlider />
        <motion.div {...fadeUp} transition={{ duration: 0.6, delay: 0.1 }} className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-white/60 px-4 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur">
          <Sparkles className="h-3.5 w-3.5 text-brand-purple" />
          Smart Digital Marketing Agency
        </motion.div>
        <motion.h1 {...fadeUp} transition={{ duration: 0.7, delay: 0.15 }} className="mx-auto max-w-4xl text-4xl font-bold leading-[1.05] sm:text-5xl md:text-6xl lg:text-7xl">
          Grow Your Business with{" "}
          <span className="text-gradient-brand">Smart Digital Marketing</span>
        </motion.h1>
        <motion.p {...fadeUp} transition={{ duration: 0.6, delay: 0.25 }} className="mx-auto mt-6 max-w-2xl text-base text-muted-foreground sm:text-lg">
          We help brands scale with creative strategies and data-driven solutions.
        </motion.p>
        <motion.div {...fadeUp} transition={{ duration: 0.6, delay: 0.35 }} className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a href="#contact" className="group inline-flex items-center gap-2 rounded-full bg-gradient-brand px-7 py-3.5 text-sm font-semibold text-white shadow-brand transition-transform hover:scale-105">
            Get Started <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a href="#contact" className="inline-flex items-center gap-2 rounded-full border-2 border-brand-purple/30 bg-white/70 px-7 py-3.5 text-sm font-semibold text-foreground backdrop-blur transition-all hover:border-brand-purple hover:bg-white">
            Contact Us
          </a>
        </motion.div>
      </div>
    </section>
  );
}

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
              Brook Stone Digital Solutions is a growth-focused agency blending creativity with analytics.
              We partner with startups and established brands to design strategies that turn clicks into customers — and customers into communities.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              From bold campaigns to high-converting websites, our team delivers measurable results that move your business forward.
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
    <section id="services" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div {...fadeUp} className="mx-auto mb-14 max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-brand-purple">Services</p>
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
              className="gradient-border group p-7 transition-transform hover:-translate-y-2"
            >
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-brand text-white shadow-brand">
                <s.icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
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
          Ready to take the next step? Let's talk strategy, design, and growth.
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
            href="tel:6381076189"
            className="gradient-border flex items-start gap-4 p-7 transition-transform hover:-translate-y-1"
          >
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-purple text-white">
              <Phone className="h-5 w-5" />
            </div>
            <div>
              <h3 className="font-bold">Phone</h3>
              <p className="mt-1 text-muted-foreground">63810 76189</p>
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
            <p className="mt-3 text-sm text-muted-foreground">📞 63810 76189</p>
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
