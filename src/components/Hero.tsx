import { useEffect, useState } from "react";

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

    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % count);
    }, 5000);

    return () => clearInterval(timer);
  }, [paused, count]);

  return (
    <div className="absolute inset-0 overflow-hidden bg-black">
      <div
        className="flex h-full w-full transition-transform duration-700 ease-out"
        style={{
          transform: `translateX(-${index * 100}%)`,
        }}
      >
        {banners.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={altTexts[i]}
            loading={i === 0 ? "eager" : "lazy"}
            fetchPriority={i === 0 ? "high" : "auto"}
            decoding="async"
            width="1920"
            height="1080"
            className="h-full w-full flex-shrink-0 object-cover"
          />
        ))}
      </div>

      <button
        onClick={() =>
          setIndex((i) => (i - 1 + count) % count)
        }
        aria-label="Previous slide"
        className="absolute left-5 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur"
      >
        <ChevronLeft />
      </button>

      <button
        onClick={() =>
          setIndex((i) => (i + 1) % count)
        }
        aria-label="Next slide"
        className="absolute right-5 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur"
      >
        <ChevronRight />
      </button>


      <div className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 items-center gap-3">

        <button
          onClick={() => setPaused(!paused)}
          aria-label="Pause slideshow"
          className="flex h-9 w-9 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur"
        >
          {paused ? (
            <Play className="h-4 w-4" />
          ) : (
            <Pause className="h-4 w-4" />
          )}
        </button>


        {banners.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-2 rounded-full transition-all ${
              i === index
                ? "w-8 bg-white"
                : "w-2 bg-white/50"
            }`}
          />
        ))}

      </div>
    </div>
  );
}


export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden"
    >

      <HeroBannerSlider />


      <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#020617]/90 via-[#0f172a]/70 to-[#1e3a8a]/40" />


      <div className="absolute inset-0 z-20 flex items-center pt-24">

        <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 lg:grid-cols-2">


          <div className="max-w-xl">

            <span className="mb-6 inline-block rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-300 backdrop-blur">
              🚀 Trusted by 40+ Businesses in Tamil Nadu
            </span>


            <h1 className="text-3xl font-bold leading-tight text-white md:text-5xl">
              Grow Your Business with
              <br />
              <span className="text-blue-400">
                Digital Marketing
              </span>
              <br />
              That Delivers Results
            </h1>


            <p className="mt-8 max-w-lg text-base leading-7 text-gray-300 md:text-lg">
              Brook Stone Digital Solutions helps businesses
              increase leads, sales and brand visibility through
              <strong> SEO</strong>,
              <strong> Google Ads</strong>,
              <strong> Meta Ads</strong>,
              <strong> Website Development</strong> and
              <strong> Social Media Marketing</strong>.
            </p>


            <div className="mt-10 flex flex-wrap gap-5">

              <a
                href="#contact"
                className="rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-7 py-4 font-semibold text-white shadow-lg"
              >
                Get Free Consultation
              </a>


              <a
                href="#services"
                className="rounded-xl border border-white/20 bg-white/5 px-7 py-4 font-semibold text-white backdrop-blur"
              >
                View Our Services
              </a>

            </div>

          </div>



          <div className="hidden items-center justify-center lg:flex">

            <img
              src={heroImage}
              alt="Digital Marketing Illustration"
              loading="lazy"
              decoding="async"
              width="600"
              height="600"
              className="w-full max-w-md object-contain drop-shadow-[0_0_60px_rgba(59,130,246,0.25)]"
            />

          </div>


        </div>

      </div>

    </section>
  );
}

