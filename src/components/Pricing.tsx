import GrainOverlay from "./GrainOverlay";

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
      className="relative py-28 md:py-36 overflow-hidden"
      style={{ backgroundColor: "#e4e2d1" }}
    >
      <GrainOverlay src="cream" />

      <div className="relative max-w-5xl mx-auto px-6 lg:px-12" style={{ zIndex: 2 }}>
        {/* Header */}
        <div className="text-center mb-16 flex flex-col items-center gap-6">
          <span
            className="text-xs tracking-[0.25em] uppercase"
            style={{
              fontFamily: "var(--font-montserrat)",
              color: "#8a7340",
              letterSpacing: "0.25em",
            }}
          >
            Pricing
          </span>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl"
            style={{
              fontFamily: "var(--font-cormorant)",
              color: "#282828",
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
                  ? "1px solid rgba(40,40,40,0.5)"
                  : "1px solid rgba(40,40,40,0.15)",
                backgroundColor: plan.featured
                  ? "rgba(40,40,40,0.04)"
                  : "transparent",
              }}
            >
              {plan.featured && (
                <span
                  className="text-xs tracking-[0.2em] uppercase self-start"
                  style={{ color: "#8a7340" }}
                >
                  Most popular
                </span>
              )}

              <div>
                <h3
                  className="text-2xl mb-2"
                  style={{
                    fontFamily: "var(--font-cormorant)",
                    color: "#282828",
                    fontWeight: 500,
                  }}
                >
                  {plan.name}
                </h3>
                <p className="text-sm" style={{ color: "rgba(40,40,40,0.5)" }}>
                  {plan.tagline}
                </p>
              </div>

              <div className="h-px" style={{ backgroundColor: "rgba(40,40,40,0.12)" }} />

              <p
                className="text-sm leading-relaxed flex-1"
                style={{ color: "rgba(40,40,40,0.6)", lineHeight: 1.85 }}
              >
                {plan.description}
              </p>

              <div>
                <p
                  className="text-5xl mb-1"
                  style={{
                    fontFamily: "var(--font-cormorant)",
                    color: "#282828",
                    fontWeight: 300,
                  }}
                >
                  {plan.price}
                </p>
                <p className="text-xs" style={{ color: "rgba(40,40,40,0.4)" }}>
                  {plan.includes}
                </p>
              </div>

              <a href="#" className="btn-pill-dark self-start">
                Begin your reading →
              </a>
            </div>
          ))}
        </div>

        {/* Small print */}
        <p
          className="text-center mt-10 text-xs"
          style={{ color: "rgba(40,40,40,0.4)", lineHeight: 1.8 }}
        >
          Every reading includes your personal hardcover book as standard. Upgrade to our luxury
          layflat edition for €35 — opens completely flat, premium paper stock, built to last.
        </p>
      </div>
    </section>
  );
}
