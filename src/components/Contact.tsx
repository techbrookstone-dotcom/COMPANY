import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Instagram, Facebook } from "lucide-react";
import { fadeUp } from "../lib/animations";
function XIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
} 
export function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-slate-950 py-20 text-white md:py-28"
    >
      {/* Background Glow */}
      <div className="absolute -left-20 top-0 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl" />
      <div className="absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6">
        <motion.div {...fadeUp} className="mx-auto mb-16 max-w-3xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-blue-400">
            Contact Us
          </p>

          <h2 className="text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
            Let's Grow Your
            <span className="text-gradient-brand"> Business Together</span>
          </h2>

          <p className="mt-5 text-lg text-white/70">
            Ready to increase your leads and grow your brand? Contact Brook Stone
            Digital Solutions today for a free consultation.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Contact Cards */}
          <div className="space-y-6">

            <motion.a
              {...fadeUp}
              href="tel:+916383624245"
              className="flex items-center gap-5 rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-blue-400"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-brand">
                <Phone className="h-7 w-7 text-white" />
              </div>

              <div>
                <h3 className="text-xl font-semibold">Call Us</h3>
                <p className="mt-1 text-white/70">
                  +91 63836 24245
                </p>
              </div>
            </motion.a>

            <motion.div
              {...fadeUp}
              transition={{ delay: 0.1 }}
              className="flex items-center gap-5 rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur-xl"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-brand">
                <MapPin className="h-7 w-7 text-white" />
              </div>

              <div>
                <h3 className="text-xl font-semibold">Visit Our Office</h3>

                <p className="mt-2 text-white/70">
                  402B 3rd Street,
                  <br />
                  Kallakadu,
                  <br />
                  Veerapandi,
                  Tiruppur.
                </p>
              </div>
            </motion.div>

            <motion.div
              {...fadeUp}
              transition={{ delay: 0.2 }}
              className="flex items-center gap-5 rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur-xl"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-brand">
                <Mail className="h-7 w-7 text-white" />
              </div>

              <div>
                <h3 className="text-xl font-semibold">Email</h3>

                <p className="mt-2 text-white/70">
                  brookstonedigitalsolutions@gmail.com
                </p>
              </div>
            </motion.div>

          </div>

          {/* Google Map */}
          <motion.div
            {...fadeUp}
            transition={{ delay: 0.2 }}
            className="overflow-hidden rounded-3xl border border-white/10 shadow-2xl"
          >
            <iframe
                title="Brook Stone Digital Solutions"
                src="https://www.google.com/maps?q=402B+3rd+Street+Kallakadu+Veerapandi+Tiruppur&output=embed"
                width="100%"
                height="100%"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                style={{ border: 0, minHeight: "430px" }}
                allowFullScreen
            />
          </motion.div>
        </div>

        {/* Social Icons */}
        <motion.div
          {...fadeUp}
          className="mt-14 flex justify-center gap-5"
        >
          {[
            {
              Icon: Instagram,
              href: "https://www.instagram.com/brookstone.digitalsolutions/",
            },
            {
              Icon: Facebook,
              href: "https://www.facebook.com/profile.php?id=61583190211991",
            },
            {
              Icon: XIcon,
              href: "https://x.com/BStone42646",
            },
          ].map(({ Icon, href }, i) => (
            <a
              key={i}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-white/5 transition-all duration-300 hover:scale-110 hover:bg-gradient-brand"
            >
              <Icon className="h-6 w-6 text-white" />
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}