"use client";

import { useState } from "react";

const navLinks = [
  { label: "How It Works", href: "#how-it-works" },
  { label: "What's Inside", href: "#whats-inside" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50" style={{ backgroundColor: "rgba(10,10,15,0.85)", backdropFilter: "blur(12px)", borderBottom: "1px solid rgba(201,169,110,0.1)" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <a
          href="#"
          className="text-2xl tracking-[0.3em]"
          style={{ fontFamily: "var(--font-cormorant)", color: "#f5f0e8", fontWeight: 300 }}
        >
          CAELUM
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs tracking-widest uppercase transition-colors duration-200"
              style={{ color: "rgba(245,240,232,0.55)", letterSpacing: "0.1em" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#c9a96e")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(245,240,232,0.55)")}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <a href="#pricing" className="btn-gold text-xs">
            Begin your reading
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden flex flex-col justify-center gap-1.5 w-8 h-8"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span
            className="block h-px transition-all duration-300"
            style={{
              backgroundColor: "#c9a96e",
              transform: open ? "rotate(45deg) translateY(6px)" : "none",
            }}
          />
          <span
            className="block h-px transition-all duration-300"
            style={{
              backgroundColor: "#c9a96e",
              opacity: open ? 0 : 1,
            }}
          />
          <span
            className="block h-px transition-all duration-300"
            style={{
              backgroundColor: "#c9a96e",
              transform: open ? "rotate(-45deg) translateY(-6px)" : "none",
            }}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className="md:hidden overflow-hidden transition-all duration-300"
        style={{ maxHeight: open ? "400px" : "0" }}
      >
        <div className="px-6 pb-8 pt-4 flex flex-col gap-6" style={{ borderTop: "1px solid rgba(201,169,110,0.1)" }}>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm tracking-widest uppercase"
              style={{ color: "rgba(245,240,232,0.7)" }}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#pricing"
            className="btn-gold text-xs self-start mt-2"
            onClick={() => setOpen(false)}
          >
            Begin your reading
          </a>
        </div>
      </div>
    </header>
  );
}
