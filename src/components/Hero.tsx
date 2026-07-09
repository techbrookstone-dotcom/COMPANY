import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import {
  ChevronLeft,
  ChevronRight,
  Pause,
  Play,
} from "lucide-react";

import heroImage from "@/assets/hero/hero-image.svg";

import banner1 from "@/assets/no1-digital-marketing-company-tiruppur.jpeg";
import banner2 from "@/assets/google-ads-management-website-development-tiruppur.jpeg";
import banner3 from "@/assets/best-digital-marketing-company-tiruppur.jpeg";
const banners = [banner1, banner2, banner3];

const altTexts = [
  "No.1 Digital Marketing Company in Tiruppur",
  "Google Ads and Website Development Services",
  "Best Digital Marketing Company in Tiruppur",
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
            loading={i === 0 ? "eager" : "lazy"}
            fetchPriority={i === 0 ? "high" : "low"}
            decoding="async"
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
    <section id="home" className="relative min-h-screen overflow-hidden">
      {/* Banner Slider */}
      {/* Premium Animated Background */}
<div className="absolute inset-0 -z-10 overflow-hidden bg-gradient-to-br from-[#020617] via-[#0f172a] to-[#1e3a8a]">

  {/* Glow 1 */}
  <div className="absolute left-10 top-20 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl animate-pulse"></div>

  {/* Glow 2 */}
  <div className="absolute right-10 bottom-20 h-96 w-96 rounded-full bg-cyan-400/10 blur-3xl animate-pulse"></div>

  {/* Glow 3 */}
  <div className="absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-500/10 blur-3xl"></div>

</div>

      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#020617]/90 via-[#0f172a]/70 to-[#1e3a8a]/40 z-10" />

      {/* Hero Content */}
      <div className="absolute inset-0 z-20 flex items-center pt-24">
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:gap-16 px-6 lg:grid-cols-2">
          <div className="max-w-xl lg:max-w-2xl">

            <span className="mb-6 inline-block rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-300 backdrop-blur">
  🚀 Trusted by 40+ Businesses in Tamil Nadu
</span>

            <h1 className="max-w-xl font-bold leading-tight text-white text-3xl md:text-4xl lg:text-5xl">
  Grow Your Business with <br />
  <span className="text-blue-400">Digital Marketing</span> <br />
  That Delivers Results
</h1>

            <p className="mt-8 max-w-lg text-base leading-7 text-gray-300 md:text-lg">
  Brook Stone Digital Solutions helps businesses increase leads, sales and brand visibility through
  <strong> SEO</strong>,
  <strong> Google Ads</strong>,
  <strong> Meta Ads</strong>,
  <strong> Website Development</strong> and
  <strong> Social Media Marketing</strong>.
</p>

            <div className="mt-10 flex flex-wrap gap-5">
              <a
                href="#contact"
                className="rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-7 py-4 font-semibold text-white shadow-lg shadow-blue-500/30 transition-all duration-300 hover:scale-105 hover:shadow-xl"
              >
                Get Free Consultation
              </a>

              <a
  href="#services"
  className="rounded-xl border border-white/20 bg-white/5 px-7 py-4 font-semibold text-white backdrop-blur transition-all duration-300 hover:bg-white/10 hover:border-blue-400">
  View Our Services
</a> 
            </div>

          </div>
          <div className="hidden lg:flex items-center justify-center">
        <img
            src={heroImage}
            alt="Digital Marketing Illustration"
            loading="eager"
            fetchPriority="high"
            decoding="async"
            className="w-full max-w-md xl:max-w-lg object-contain drop-shadow-[0_0_60px_rgba(59,130,246,0.25)] transition-transform duration-500 hover:scale-105"
         />
            </div>
        </div>
      </div>
    </section>
  );
}