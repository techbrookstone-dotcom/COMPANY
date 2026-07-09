import { Link } from "react-router-dom";
import { Instagram, Facebook } from "lucide-react";

import logo from "@/assets/brookstone-logo.jpeg"; 
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
export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-slate-950 text-white">
      {/* Background Glow */}
      <div className="absolute -top-20 left-10 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />
      <div className="absolute bottom-0 right-10 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-3">

          {/* Company */}
          <div>
            <div className="flex items-center gap-3">
              <img
                src={logo}
                alt="Brook Stone"
                className="h-12 w-12 rounded-full ring-2 ring-blue-500/30"
              />

              <div>
                <h3 className="text-xl font-bold text-white">
                  Brook Stone
                </h3>

                <p className="text-sm text-blue-400">
                  Digital Solutions
                </p>
              </div>
            </div>

            <p className="mt-5 leading-7 text-white/70">
              Helping businesses grow through SEO, Google Ads, Meta Ads,
              Website Development and Social Media Marketing.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-5 text-lg font-semibold">
              Quick Links
            </h4>

            <ul className="space-y-3 text-white/70">
              <li>
                <a href="#home" className="transition hover:text-blue-400">
                  Home
                </a>
              </li>

              <li>
                <a href="#about" className="transition hover:text-blue-400">
                  About
                </a>
              </li>

              <li>
                <a href="#services" className="transition hover:text-blue-400">
                  Services
                </a>
              </li>

              <li>
                <Link to="/pricing" className="transition hover:text-blue-400">
  Pricing
</Link>
              </li>

              <li>
                <a href="#contact" className="transition hover:text-blue-400">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-5 text-lg font-semibold">
              Contact Info
            </h4>

            <div className="space-y-4 text-white/70">
              <p>📞 +91 63836 24245</p>

              <p>📧 brookstonedigitalsolutions@gmail.com</p>

              <p>
                📍 Tiruppur,
                <br />
                Tamil Nadu,
                India
              </p>
            </div>

            <div className="mt-6 flex gap-4">
              <a
                href="https://www.instagram.com/brookstone.digitalsolutions/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 transition-all duration-300 hover:scale-110 hover:bg-gradient-brand"
              >
                <Instagram className="h-5 w-5" />
              </a>

              <a
                href="https://www.facebook.com/profile.php?id=61583190211991"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 transition-all duration-300 hover:scale-110 hover:bg-gradient-brand"
              >
                <Facebook className="h-5 w-5" />
              </a>

              <a
                href="https://x.com/BStone42646"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 transition-all duration-300 hover:scale-110 hover:bg-gradient-brand"
              >
                <XIcon className="h-5 w-5" />
              </a>
            </div>
          </div>

        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-center text-sm text-white/50">
          © {new Date().getFullYear()} Brook Stone Digital Solutions. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}