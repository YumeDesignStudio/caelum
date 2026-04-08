import GrainOverlay from "./GrainOverlay";
import InlineSVG from "./InlineSVG";

const plans = [
  {
    name: "Natal Chart",
    tagline: "The complete natal chart reading for one person",
    description:
      "Everything in your chart. Every planet, every house, every significant aspect. Interpreted in depth and delivered as a beautifully designed document and hardcover book.",
    price: "€120",
    includes: "Includes hardcover book, shipped to your door.",
    icon: "/assets/caelum_sun_moon_icon_1.svg",
  },
  {
    name: "2× Natal Chart + Synastry",
    tagline: "Two complete readings plus a full relationship analysis",
    description:
      "Both individual charts read in full, plus a detailed synastry section — how your two charts interact, what you bring out in each other, and how to navigate the dynamic between you. For couples, close friends, family or business partners.",
    price: "€180",
    includes: "Includes two hardcover books, shipped to your doors.",
    featured: true,
    icon: "/assets/caelum_sun_moon_icon_2.svg",
  },
];

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="relative py-28 md:py-36 overflow-hidden"
      style={{ backgroundColor: "#282828" }}
    >
      <GrainOverlay src="dark" />

      <div className="relative max-w-5xl mx-auto px-6 lg:px-12" style={{ zIndex: 2 }}>
        {/* Header */}
        <div className="text-center mb-16 flex flex-col items-center gap-6">
          <span className="section-label">Pricing</span>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl"
            style={{
              fontFamily: "var(--font-cormorant)",
              color: "#e4e2d1",
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
              className="arch-card flex flex-col gap-6 overflow-hidden"
              style={{
                border: plan.featured
                  ? "1px solid rgba(201,169,110,0.6)"
                  : "1px solid rgba(201,169,110,0.3)",
                backgroundColor: "#333333",
              }}
            >
              {/* Arch top with icon */}
              <div
                className="flex items-center justify-center pt-10 pb-4"
                style={{
                  background: "linear-gradient(to bottom, rgba(201,169,110,0.06), transparent)",
                }}
              >
                <InlineSVG src={plan.icon} fill="#c9a96e" width={48} aria-hidden />
              </div>

              <div className="px-10 pb-10 flex flex-col gap-6">
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
                      color: "#e4e2d1",
                      fontWeight: 500,
                    }}
                  >
                    {plan.name}
                  </h3>
                  <p className="text-sm" style={{ color: "rgba(228,226,209,0.7)" }}>
                    {plan.tagline}
                  </p>
                </div>

                <div className="h-px" style={{ backgroundColor: "rgba(201,169,110,0.15)" }} />

                <p
                  className="text-sm leading-relaxed flex-1"
                  style={{ color: "rgba(228,226,209,0.7)", lineHeight: 1.85 }}
                >
                  {plan.description}
                </p>

                <div>
                  <p
                    className="text-5xl mb-1"
                    style={{
                      fontFamily: "var(--font-cormorant)",
                      color: "#e4e2d1",
                      fontWeight: 300,
                    }}
                  >
                    {plan.price}
                  </p>
                  <p className="text-sm" style={{ color: "rgba(228,226,209,0.7)" }}>
                    {plan.includes}
                  </p>
                </div>

                <a href="#" className="btn-pill self-start">
                  Begin your reading →
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Small print */}
        <p
          className="text-center mt-10 text-sm"
          style={{ color: "rgba(228,226,209,0.7)", lineHeight: 1.8 }}
        >
          Every reading includes your personal hardcover book as standard. Upgrade to our luxury
          layflat edition for €35 — opens completely flat, premium paper stock, built to last.
        </p>
      </div>
    </section>
  );
}
