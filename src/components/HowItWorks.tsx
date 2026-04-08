const steps = [
  {
    number: "01",
    title: "Share your birth details",
    body: "Your name, date, time and place of birth. That is everything we need. The precision of your birth data is what makes your reading entirely yours.",
  },
  {
    number: "02",
    title: "We prepare your reading",
    body: "Your chart is calculated, your placements interpreted and your personal reading assembled — every section written with your specific configuration in mind. This takes us a few days. Good things are worth the wait.",
  },
  {
    number: "03",
    title: "It arrives when it is ready",
    body: "Your reading is delivered to your inbox as a beautifully designed PDF. Your hardcover book follows shortly after. Both yours to keep, return to and share.",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="py-28 md:py-36"
      style={{ backgroundColor: "#0d0d14", borderTop: "1px solid rgba(201,169,110,0.08)" }}
    >
      <div className="max-w-5xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-20 flex flex-col items-center gap-6">
          <span
            className="text-xs tracking-[0.25em] uppercase"
            style={{ color: "#c9a96e" }}
          >
            How It Works
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
            Simple to begin. Profound to receive.
          </h2>
        </div>

        {/* Steps */}
        <div className="flex flex-col md:flex-row gap-0 md:gap-0 divide-y md:divide-y-0 md:divide-x" style={{ borderColor: "rgba(201,169,110,0.12)" }}>
          {steps.map((step) => (
            <div
              key={step.number}
              className="flex-1 py-10 md:py-0 md:px-10 first:md:pl-0 last:md:pr-0 flex flex-col gap-5"
            >
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
              <h3
                className="text-xl"
                style={{
                  fontFamily: "var(--font-cormorant)",
                  color: "#f5f0e8",
                  fontWeight: 500,
                }}
              >
                {step.title}
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{ color: "rgba(245,240,232,0.55)", lineHeight: 1.85 }}
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
