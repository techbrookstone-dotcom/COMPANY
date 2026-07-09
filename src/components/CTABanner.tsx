import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { fadeUp } from "../lib/animations"; 
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