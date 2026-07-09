import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
const faqs = [
  {
    question: "What digital marketing services do you offer?",
    answer:
      "We provide SEO, Google Ads, Meta Ads, Social Media Marketing, Website Development, Branding and Content Marketing for businesses of all sizes.",
  },
  {
    question: "Why do businesses trust your agency?",
    answer:
      " We focus on transparency, creativity, and results-driven strategies that help businesses grow with confidence.",
  },
  {
    question: "Do you manage Google Ads and Meta Ads?",
    answer:
      "Yes. We create, manage and optimize Google Ads and Facebook/Instagram Meta Ads campaigns to generate quality leads and maximize ROI.",
  },
  {
    question: "Why should I invest in digital marketing?",
    answer:
      "Digital marketing turns online visibility into real business opportunities—helping you attract customers, increase engagement, and grow your brand faster and smarter.",
  },
  {
    question: "Which businesses do you work with?",
    answer:
      "We work with Startups, Construction, Real estate, Parlour & Saloon, Manufacturers, Resorts, Turf, Showrooms, Job Consultancy, Hospitals, Restaurants, Gym, Electronic Shops, Event Management.",
  },
  {
    question: "How do you measure campaign success?",
    answer:
      "We track key performance indicators (KPIs) such as reach, engagement, website traffic, lead quality, conversion rates, and return on ad spend (ROAS) to evaluate campaign effectiveness.",
  },
];
export function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section
      id="faq"
      className="relative overflow-hidden bg-slate-950 py-24 text-white"
    >
      {/* Background Glow */}
      <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-blue-500/20 blur-3xl" />
      <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-cyan-500/20 blur-3xl" />

      <div className="relative mx-auto max-w-4xl px-6">

        <div className="mb-16 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-blue-400">
            FAQ
          </p>

          <h2 className="text-4xl font-bold md:text-5xl">
            Frequently Asked
            <span className="text-gradient-brand"> Questions</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/70">
            Everything you need to know before growing your business with
            Brook Stone Digital Solutions.
          </p>
        </div>

        <div className="space-y-5">
          {faqs.map((faq, index) => (
            <motion.div
              key={faq.question}
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.25 }}
              className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl"
            >
              <button
                onClick={() =>
                  setOpen(open === index ? -1 : index)
                }
                className="flex w-full items-center justify-between p-7 text-left"
              >
                <h3 className="text-lg font-semibold">
                  {faq.question}
                </h3>

                <motion.div
                  animate={{
                    rotate: open === index ? 180 : 0,
                  }}
                  transition={{ duration: 0.25 }}
                >
                  <ChevronDown className="h-6 w-6 text-blue-400" />
                </motion.div>
              </button>

              <AnimatePresence>
                {open === index && (
                  <motion.div
                    initial={{
                      height: 0,
                      opacity: 0,
                    }}
                    animate={{
                      height: "auto",
                      opacity: 1,
                    }}
                    exit={{
                      height: 0,
                      opacity: 0,
                    }}
                    transition={{
                      duration: 0.3,
                    }}
                  >
                    <p className="px-7 pb-7 leading-8 text-white/70">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}