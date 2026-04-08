import GrainOverlay from "./GrainOverlay";

const sections = [
  {
    title: "Your Core Identity",
    body: "Sun sign, Moon sign and Rising sign — the three foundations of your chart. Who you are at your core, how you feel and how the world first experiences you.",
  },
  {
    title: "Your Mind and Your Heart",
    body: "Mercury, Venus and Mars — how you think, communicate, love and act. The personal planets that shape your daily experience of being yourself.",
  },
  {
    title: "Your Patterns of Growth",
    body: "Jupiter and Saturn — where life tends to expand for you naturally, and where you are being asked to develop patience, discipline and genuine mastery.",
  },
  {
    title: "The Deeper Forces",
    body: "Uranus, Neptune and Pluto — the generational energies that shape the most transformative dimensions of your experience and your place in the larger story of your time.",
  },
  {
    title: "The Twelve Houses",
    body: "Where each planetary energy operates in the specific landscape of your life — career, relationships, home, creativity, resources and more.",
  },
  {
    title: "The Aspects",
    body: "The relationships between your planets — where your energies flow with natural ease, and where they create the productive tension that drives your deepest growth.",
  },
];

export default function WhatsInside() {
  return (
    <section
      id="whats-inside"
      className="relative py-28 md:py-36 overflow-hidden"
      style={{ backgroundColor: "#e4e2d1" }}
    >
      <GrainOverlay src="cream" />

      <div className="relative max-w-5xl mx-auto px-6 lg:px-12" style={{ zIndex: 2 }}>
        {/* Header */}
        <div className="text-center mb-6 flex flex-col items-center gap-6">
          <span
            className="text-xs tracking-[0.25em] uppercase"
            style={{
              fontFamily: "var(--font-montserrat)",
              color: "#8a7340",
              letterSpacing: "0.25em",
            }}
          >
            What&apos;s Inside
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
            A complete map of who you are.
          </h2>
          <p
            className="text-base max-w-xl"
            style={{ color: "rgba(40,40,40,0.7)", lineHeight: 1.85 }}
          >
            Your reading covers every significant dimension of your natal chart — organised into
            clear sections, each one building on the last.
          </p>
        </div>

        {/* Cards grid */}
        <div
          className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px"
          style={{ backgroundColor: "rgba(40,40,40,0.1)" }}
        >
          {sections.map((section) => (
            <div
              key={section.title}
              className="p-8 flex flex-col gap-4"
              style={{ backgroundColor: "#e4e2d1" }}
            >
              <div className="w-6 h-px" style={{ backgroundColor: "#8a7340", opacity: 0.5 }} />
              <h3
                className="text-lg"
                style={{
                  fontFamily: "var(--font-cormorant)",
                  color: "#282828",
                  fontWeight: 500,
                }}
              >
                {section.title}
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{ color: "rgba(40,40,40,0.65)", lineHeight: 1.85 }}
              >
                {section.body}
              </p>
            </div>
          ))}
        </div>

        {/* Closing line */}
        <p
          className="text-center mt-14 text-base italic max-w-2xl mx-auto"
          style={{
            fontFamily: "var(--font-cormorant)",
            color: "rgba(40,40,40,0.6)",
            fontSize: "1.125rem",
            lineHeight: 1.8,
          }}
        >
          Every section interpreted in depth. Every placement connected to your whole chart.
          Delivered as a single, cohesive portrait — not a list of disconnected traits.
        </p>
      </div>
    </section>
  );
}
