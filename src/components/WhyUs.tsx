import { motion } from "framer-motion";
import { fadeUp } from "../lib/animations";

import {
  BarChart3,
  Wallet,
  Zap,
  Heart,
} from "lucide-react"; 
const reasons = [
  {
    icon: BarChart3,
    title: "Data-Driven Strategy",
    desc: "Every campaign is backed by analytics, insights, and measurable performance to maximize your ROI.",
  },
  {
    icon: Wallet,
    title: "Affordable Pricing",
    desc: "Premium digital marketing services with transparent pricing that suits businesses of every size.",
  },
  {
    icon: Zap,
    title: "Fast Execution",
    desc: "From strategy to launch, we deliver projects quickly without compromising on quality.",
  },
  {
    icon: Heart,
    title: "Dedicated Support",
    desc: "Our team works closely with you, providing continuous support and personalized solutions.",
  },
];

export function WhyUs() {
  return (
    <section id="why" className="py-20 md:py-28 bg-slate-50">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div {...fadeUp} className="mx-auto mb-16 max-w-3xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-brand-blue">
            Why Choose Brook Stone
          </p>

          <h2 className="text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
            We Don't Just Market,
            <span className="text-gradient-brand"> We Grow Businesses</span>
          </h2>

          <p className="mt-5 text-base leading-7 text-muted-foreground md:text-lg">
            We combine creativity, technology and performance marketing to help
            businesses generate more leads, increase sales and build a powerful
            online presence.
          </p>
        </motion.div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((r, i) => (
            <motion.div
              key={r.title}
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
              className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-400 hover:shadow-xl"
            >
              <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-brand text-white shadow-lg shadow-blue-500/30">
                <r.icon className="h-8 w-8" />
              </div>

              <h3 className="text-xl font-semibold text-slate-900">
                {r.title}
              </h3>

              <p className="mt-4 text-base leading-7 text-muted-foreground">
                {r.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}