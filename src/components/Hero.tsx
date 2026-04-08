import StarField from "./StarField";

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center text-center overflow-hidden pt-20"
      style={{ backgroundColor: "#0a0a0f" }}
    >
      {/* Star field */}
      <StarField />

      {/* Subtle radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 80% 60% at 50% 40%, rgba(201,169,110,0.04) 0%, transparent 70%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto px-6 lg:px-0 flex flex-col items-center gap-8 py-24">
        {/* Decorative rule */}
        <div className="flex items-center gap-4 w-40">
          <div className="flex-1 h-px" style={{ backgroundColor: "rgba(201,169,110,0.3)" }} />
          <div className="w-1 h-1 rounded-full" style={{ backgroundColor: "#c9a96e", opacity: 0.5 }} />
          <div className="flex-1 h-px" style={{ backgroundColor: "rgba(201,169,110,0.3)" }} />
        </div>

        {/* Headline */}
        <h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight"
          style={{
            fontFamily: "var(--font-cormorant)",
            color: "#f5f0e8",
            fontWeight: 300,
            letterSpacing: "-0.01em",
            lineHeight: 1.1,
          }}
        >
          The most honest portrait of yourself you will ever read.
        </h1>

        {/* Subheadline */}
        <p
          className="text-base md:text-lg leading-relaxed max-w-2xl"
          style={{ color: "rgba(245,240,232,0.65)", lineHeight: 1.85 }}
        >
          At the exact moment you were born, the sky looked a particular way. It has never looked
          that way before, and it never will again. Your natal chart is a precise map of that
          moment — and what it reveals about your nature, your character and the particular patterns
          that shape how you move through the world is unlike anything else you have encountered
          about yourself.
        </p>

        {/* Supporting line */}
        <p
          className="text-sm md:text-base"
          style={{ color: "rgba(245,240,232,0.4)", fontStyle: "italic", fontFamily: "var(--font-cormorant)", fontSize: "1.125rem" }}
        >
          Not a horoscope. Not a generalisation. A 70-page reading built entirely from your birth
          data — delivered as a beautifully designed document you will return to for years.
        </p>

        {/* CTA */}
        <a href="#pricing" className="btn-gold mt-4">
          Begin your reading
        </a>
      </div>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, transparent, #0a0a0f)" }}
      />
    </section>
  );
}
