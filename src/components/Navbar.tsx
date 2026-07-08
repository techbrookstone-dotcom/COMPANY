import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/brookstone-logo.jpeg";


const links = [
  { href: "/#home", label: "Home" },
  { href: "/#about", label: "About" },
  { href: "/#services", label: "Services" },
  { href: "/#faq", label: "FAQ" },
  { href: "/pricing", label: "Pricing", route: true },
  { href: "/#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
       scrolled? "bg-slate-900/70 backdrop-blur-2xl border-b border-white/10 shadow-2xl" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
        <a href="/#home"
         className="flex items-center gap-2 transition-transform duration-300 hover:scale-105">
          <img src={logo} alt="Brook Stone" className="h-12 w-12 rounded-full object-cover ring-2 ring-blue-500/30" />
          <span className="font-display text-lg font-bold text-gradient-brand">Brook Stone</span>
        </a>
        <ul className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              {l.route ? (
              <Link
               to={l.href}
               className="text-sm font-medium text-white/80 transition-all duration-300 hover:text-white">
               {l.label}
              </Link>
              ) : (
                <a href={l.href}
                  className="text-sm font-medium text-white/80 transition-all duration-300 hover:text-blue-400" >
                  {l.label}
                </a>
              
              )}
            </li>
          ))}
        </ul>
        <a
          href="/#contact"
          className="hidden rounded-full bg-gradient-brand px-5 py-2 text-sm font-semibold text-white shadow-brand transition-transform hover:scale-105 md:inline-block"
        >
          Get Started
        </a>
        <button onClick={() => setOpen(!open)} className="md:hidden" aria-label="Menu">
          {open ? <X /> : <Menu />}
        </button>
      </nav>
      {open && (
        <div className="border-t border-border bg-white/95 backdrop-blur md:hidden">
          <ul className="flex flex-col gap-1 px-6 py-4">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-3 py-2 text-sm font-medium hover:bg-muted"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
