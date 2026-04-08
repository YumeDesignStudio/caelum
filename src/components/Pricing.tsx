const plans = [
  {
    name: "Solo Chart",
    tagline: "The complete natal chart reading for one person",
    description:
      "Everything in your chart. Every planet, every house, every significant aspect. Interpreted in depth and delivered as a beautifully designed document and hardcover book.",
    price: "€120",
    includes: "Includes hardcover book, shipped to your door.",
  },
  {
    name: "Compatibility Chart",
    tagline: "Two complete readings plus a full relationship analysis",
    description:
      "Both individual charts read in full, plus a detailed synastry section — how your two charts interact, what you bring out in each other, and how to navigate the dynamic between you. For couples, close friends, family or business partners.",
    price: "€180",
    includes: "Includes two hardcover books, shipped to your doors.",
    featured: true,
  },
];

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="py-28 md:py-36"
      style={{ backgroundColor: "#0d0d14", borderTop: "1px solid rgba(201,169,110,0.08)" }}
    >
      <div className="max-w-5xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-16 flex flex-col items-center gap-6">
          <span
            className="text-xs tracking-[0.25em] uppercase"
            style={{ color: "#c9a96e" }}
          >
            Pricing
          </span>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl"
            style={{
              fontFamily: "var(--font-cormorant)",
              color: "#f5f0e8",
              fontWeight: 400,
              lineHeight: 1.2,
            }}
          >
            Your reading. Your terms.
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className="flex flex-col gap-6 p-10"
              style={{
                border: plan.featured
                  ? "1px solid rgba(201,169,110,0.5)"
                  : "1px solid rgba(201,169,110,0.15)",
                backgroundColor: plan.featured
                  ? "rgba(201,169,110,0.04)"
                  : "transparent",
              }}
            >
              {plan.featured && (
                <span
                  className="text-xs tracking-[0.2em] uppercase self-start"
                  style={{ color: "#c9a96e" }}
                >
                  Most popular
                </span>
              )}

              <div>
                <h3
                  className="text-2xl mb-2"
                  style={{
                    fontFamily: "var(--font-cormorant)",
                    color: "#f5f0e8",
                    fontWeight: 500,
                  }}
                >
                  {plan.name}
                </h3>
                <p className="text-sm" style={{ color: "rgba(245,240,232,0.45)" }}>
                  {plan.tagline}
                </p>
              </div>

              <div className="h-px" style={{ backgroundColor: "rgba(201,169,110,0.15)" }} />

              <p
                className="text-sm leading-relaxed flex-1"
                style={{ color: "rgba(245,240,232,0.55)", lineHeight: 1.85 }}
              >
                {plan.description}
              </p>

              <div>
                <p
                  className="text-5xl mb-1"
                  style={{
                    fontFamily: "var(--font-cormorant)",
                    color: "#f5f0e8",
                    fontWeight: 300,
                  }}
                >
                  {plan.price}
                </p>
                <p className="text-xs" style={{ color: "rgba(245,240,232,0.35)" }}>
                  {plan.includes}
                </p>
              </div>

              <a href="#" className="btn-gold self-start">
                Begin your reading →
              </a>
            </div>
          ))}
        </div>

        {/* Small print */}
        <p
          className="text-center mt-10 text-xs"
          style={{ color: "rgba(245,240,232,0.3)", lineHeight: 1.8 }}
        >
          Every reading includes your personal hardcover book as standard. Upgrade to our luxury
          layflat edition for €35 — opens completely flat, premium paper stock, built to last.
        </p>
      </div>
    </section>
  );
}
