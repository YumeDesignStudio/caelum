const navLinks = [
  { label: "How It Works", href: "#how-it-works" },
  { label: "What's Inside", href: "#whats-inside" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "mailto:hello@caelum.co" },
];

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
  { label: "Refund Policy", href: "/refunds" },
];

export default function Footer() {
  return (
    <footer
      className="py-16"
      style={{ backgroundColor: "#0a0a0f", borderTop: "1px solid rgba(201,169,110,0.1)" }}
    >
      <div className="max-w-5xl mx-auto px-6 lg:px-12 flex flex-col items-center gap-10">
        {/* Logo */}
        <span
          className="text-2xl tracking-[0.3em]"
          style={{ fontFamily: "var(--font-cormorant)", color: "#f5f0e8", fontWeight: 300 }}
        >
          CAELUM
        </span>

        {/* Nav links */}
        <nav className="flex flex-wrap justify-center gap-x-8 gap-y-3">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-xs tracking-widest uppercase"
              style={{ color: "rgba(245,240,232,0.35)", letterSpacing: "0.1em" }}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Tagline */}
        <p
          className="text-sm italic"
          style={{
            fontFamily: "var(--font-cormorant)",
            color: "rgba(245,240,232,0.3)",
            fontSize: "1rem",
          }}
        >
          Caelum — Your Astral Companion
        </p>

        {/* Divider */}
        <div className="w-full h-px" style={{ backgroundColor: "rgba(201,169,110,0.08)" }} />

        {/* Legal */}
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
          {legalLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-xs"
              style={{ color: "rgba(245,240,232,0.2)" }}
            >
              {link.label}
            </a>
          ))}
        </div>

        <p className="text-xs" style={{ color: "rgba(245,240,232,0.15)" }}>
          © {new Date().getFullYear()} Caelum. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
