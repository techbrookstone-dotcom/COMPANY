import { motion } from "framer-motion";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6 },
};
export function About() {
  return (
    <section id="about" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <motion.div {...fadeUp}>
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-brand-blue">About Us</p>
            <h2 className="max-w-xl text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
             Helping Businesses Grow with
             <span className="text-gradient-brand"> Smart Digital Marketing</span>
            </h2>
            <p className="mt-8 max-w-xl text-base leading-8 text-muted-foreground">
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
                { k: "40+", v: "Projects Completed" },
                { k: "20+", v: "Happy Clients" },
                { k: "100%", v: "Custom Strategies" },
                { k: "24/7", v: "Dedicated Support" },
                ].map((s) => (
                <div key={s.v} className="gradient-border rounded-2xl p-8 text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
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