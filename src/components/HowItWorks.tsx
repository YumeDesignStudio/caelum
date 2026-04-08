import GrainOverlay from "./GrainOverlay";
import InlineSVG from "./InlineSVG";

const steps = [
  {
    number: "01",
    title: "Share your birth details",
    body: "Your name, date, time and place of birth. That is everything we need. The precision of your birth data is what makes your reading entirely yours.",
    icon: "/assets/caelum_sun_moon_icon_1.svg",
  },
  {
    number: "02",
    title: "We prepare your reading",
    body: "Your chart is calculated, your placements interpreted and your personal reading assembled — every section written with your specific configuration in mind. This takes us a few days. Good things are worth the wait.",
    icon: "/assets/caelum_sun_moon_icon_2.svg",
  },
  {
    number: "03",
    title: "It arrives when it is ready",
    body: "Your reading is delivered to your inbox as a beautifully designed PDF. Your hardcover book follows shortly after. Both yours to keep, return to and share.",
    icon: "/assets/caelum_sun_moon_icon_3.svg",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="relative py-28 md:py-36 overflow-hidden"
      style={{ backgroundColor: "#282828" }}
    >
      <GrainOverlay src="dark" />

      <div className="relative max-w-5xl mx-auto px-6 lg:px-12" style={{ zIndex: 2 }}>
        {/* Header */}
        <div className="text-center mb-20 flex flex-col items-center gap-6">
          <span className="section-label">How It Works</span>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl"
            style={{
              fontFamily: "var(--font-cormorant)",
              color: "#e4e2d1",
              fontWeight: 400,
              lineHeight: 1.2,
            }}
          >
            Simple to begin. Profound to receive.
          </h2>
        </div>

        {/* Steps as cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((step) => (
            <div
              key={step.number}
              className="flex flex-col gap-5 p-8"
              style={{
                backgroundColor: "#333333",
                border: "1px solid rgba(201,169,110,0.4)",
                borderRadius: "16px",
              }}
            >
              <div className="flex items-center gap-4">
                <InlineSVG src={step.icon} fill="#c9a96e" width={28} aria-hidden />
                <span
                  className="text-5xl leading-none"
                  style={{
                    fontFamily: "var(--font-cormorant)",
                    color: "rgba(201,169,110,0.25)",
                    fontWeight: 300,
                  }}
                >
                  {step.number}
                </span>
              </div>
              <h3
                className="text-xl"
                style={{
                  fontFamily: "var(--font-cormorant)",
                  color: "#e4e2d1",
                  fontWeight: 500,
                }}
              >
                {step.title}
              </h3>
              <p
                className="text-base leading-relaxed"
                style={{ color: "rgba(228,226,209,0.75)", lineHeight: 1.85 }}
              >
                {step.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
