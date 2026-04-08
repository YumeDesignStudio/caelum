"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const navLinks = [
  { label: "How It Works", href: "#how-it-works" },
  { label: "What's Inside", href: "#whats-inside" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: scrolled ? "rgba(40,40,40,0.95)" : "#282828",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: "1px solid rgba(201,169,110,0.12)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between h-16 md:h-20">
        {/* Logo wordmark */}
        <a href="#" className="flex-shrink-0">
          <Image
            src="/assets/caelum_logo.svg"
            alt="Caelum"
            width={140}
            height={32}
            priority
          />
        </a>

        {/* Desktop nav — centred */}
        <nav className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[0.6875rem] tracking-[0.15em] uppercase transition-colors duration-200"
              style={{ color: "rgba(228,226,209,0.75)", fontFamily: "var(--font-montserrat)" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#c9a96e")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(228,226,209,0.75)")}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <a href="#pricing" className="btn-pill hidden md:inline-flex">
          Begin your reading
        </a>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col justify-center gap-[5px] w-8 h-8 flex-shrink-0"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className="block h-px w-full transition-all duration-300 origin-center"
              style={{
                backgroundColor: "#c9a96e",
                transform:
                  i === 0 && open
                    ? "rotate(45deg) translateY(7px)"
                    : i === 2 && open
                    ? "rotate(-45deg) translateY(-7px)"
                    : "none",
                opacity: i === 1 && open ? 0 : 1,
              }}
            />
          ))}
        </button>
      </div>

      {/* Mobile dropdown */}
      <div
        className="md:hidden overflow-hidden transition-all duration-300"
        style={{ maxHeight: open ? "360px" : "0" }}
      >
        <div
          className="px-6 pb-8 pt-4 flex flex-col gap-5"
          style={{ borderTop: "1px solid rgba(201,169,110,0.12)" }}
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs tracking-[0.15em] uppercase"
              style={{ color: "rgba(228,226,209,0.75)", fontFamily: "var(--font-montserrat)" }}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a href="#pricing" className="btn-pill self-start mt-2" onClick={() => setOpen(false)}>
            Begin your reading
          </a>
        </div>
      </div>
    </header>
  );
}
