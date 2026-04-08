import StarField from "./StarField";

export default function FinalCTA() {
  return (
    <section
      className="relative py-36 md:py-48 overflow-hidden text-center"
      style={{ backgroundColor: "#0d0d14", borderTop: "1px solid rgba(201,169,110,0.08)" }}
    >
      {/* Faint star field */}
      <div className="absolute inset-0 opacity-50">
        <StarField />
      </div>

      {/* Subtle glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(201,169,110,0.05) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-2xl mx-auto px-6 flex flex-col items-center gap-8">
        <div className="flex items-center gap-4 w-32">
          <div className="flex-1 h-px" style={{ backgroundColor: "rgba(201,169,110,0.3)" }} />
          <div className="w-1 h-1 rounded-full" style={{ backgroundColor: "#c9a96e", opacity: 0.6 }} />
          <div className="flex-1 h-px" style={{ backgroundColor: "rgba(201,169,110,0.3)" }} />
        </div>

        <h2
          className="text-3xl md:text-4xl lg:text-5xl"
          style={{
            fontFamily: "var(--font-cormorant)",
            color: "#f5f0e8",
            fontWeight: 400,
            lineHeight: 1.2,
          }}
        >
          You were born at a particular moment. There is no one else quite like you.
        </h2>

        <p
          className="text-base"
          style={{ color: "rgba(245,240,232,0.5)", lineHeight: 1.8 }}
        >
          Your reading is waiting. It takes less than two minutes to begin.
        </p>

        <a href="#pricing" className="btn-gold mt-4">
          Begin your reading
        </a>

        <p
          className="text-xs"
          style={{ color: "rgba(245,240,232,0.25)", letterSpacing: "0.08em" }}
        >
          Delivered within 5–10 days. Hardcover book included with every order.
        </p>
      </div>
    </section>
  );
}
