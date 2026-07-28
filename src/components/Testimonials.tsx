import { motion } from "framer-motion";
import { Star } from "lucide-react";

const reviews = [
  {
    name: "VK LOANS",
    review:
      "Video quality, editing, creativity ellame excellent. Enga business-ku perfect-aana promotional video kuduthanga. Highly Recommended!",
  },
  {
    name: "Manoj",
    review:
      "Brook Stone Digital Solutions oda Website & Meta Ads service romba nalla irundhuchu. Enga business-ku quality leads vandhuchu. Team support-um excellent. Highly recommended!",
  },
  {
    name: "Guna Sekar",
    review:
      "Budget-friendly shoot team. Professional service. Highly recommended!",
  },
];

export function Testimonials() {
  return (
    <section className="bg-slate-950 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="rounded-full bg-violet-500/20 px-4 py-2 text-sm font-medium text-violet-300">
            ⭐ Google Reviews
          </span>

          <h2 className="mt-6 text-4xl font-bold text-white md:text-5xl">
            Trusted by Our Clients
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-slate-400">
            Real reviews from businesses who trusted Brook Stone Digital
            Solutions.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl hover:border-violet-500/40 hover:bg-white/10 transition-all duration-300"
            >
              <div className="mb-5 flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              <p className="text-slate-300 leading-7">
                "{item.review}"
              </p>

              <div className="mt-6">
                <h3 className="text-lg font-semibold text-white">
                  {item.name}
                </h3>
                <p className="text-sm text-violet-400">
                  Verified Google Review
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 