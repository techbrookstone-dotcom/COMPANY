import heroImage from "@/assets/hero/hero-image.svg";

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#020617] via-[#0f172a] to-[#1e3a8a]"
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#020617]/90 via-[#0f172a]/80 to-[#1e3a8a]/70" />

      {/* Content */}
      <div className="relative z-10 flex min-h-screen items-center pt-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2">

          {/* Left Content */}
          <div className="max-w-xl">
            <span className="mb-6 inline-block rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-300 backdrop-blur">
              🚀 Trusted by 40+ Businesses in Tamil Nadu
            </span>

            <h1 className="text-4xl font-bold leading-tight text-white md:text-6xl">
              Grow Your Business with
              <br />
              <span className="text-blue-400">
                Digital Marketing
              </span>
              <br />
              That Delivers Results
            </h1>

            <p className="mt-8 max-w-lg text-base leading-8 text-gray-300 md:text-lg">
              Brook Stone Digital Solutions helps businesses increase leads,
              sales and brand visibility through
              <strong> SEO</strong>,
              <strong> Google Ads</strong>,
              <strong> Meta Ads</strong>,
              <strong> Website Development</strong> and
              <strong> Social Media Marketing</strong>.
            </p>

            <div className="mt-10 flex flex-wrap gap-5">
              <a
                href="#contact"
                className="rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-7 py-4 font-semibold text-white shadow-xl transition hover:scale-105"
              >
                Get Free Consultation
              </a>

              <a
                href="#services"
                className="rounded-xl border border-white/20 bg-white/10 px-7 py-4 font-semibold text-white backdrop-blur transition hover:bg-white/20"
              >
                View Our Services
              </a>
            </div>
          </div>

          {/* Right Image */}
          <div className="hidden items-center justify-center lg:flex">
            <img
              src={heroImage}
              alt="Brook Stone Digital Solutions"
              loading="eager"
              width={600}
              height={600}
              className="w-full max-w-lg object-contain drop-shadow-[0_0_50px_rgba(59,130,246,0.35)]"
            />
          </div>

        </div>
      </div>
    </section>
  );
}