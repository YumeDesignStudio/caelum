import StarField from "./StarField";
import GrainOverlay from "./GrainOverlay";
import InlineSVG from "./InlineSVG";

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center text-center overflow-hidden pt-20"
      style={{ backgroundColor: "#282828" }}
    >
      {/* Grain */}
      <GrainOverlay src="dark" />

      {/* Stars — behind centerpiece */}
      <div className="absolute inset-0 z-0">
        <StarField />
      </div>

      {/* Zodiac wheel centerpiece */}
      <div
        className="absolute inset-0 flex items-center justify-center z-0 pointer-events-none"
        aria-hidden
      >
        <InlineSVG
          src="/assets/caelum_centerpiece.svg"
          fill="#c9a96e"
          width={800}
          style={{ opacity: 0.15 }}
        />
      </div>

      {/* Content */}
      <div
        className="relative flex flex-col items-center gap-7 px-6 py-28 max-w-4xl mx-auto"
        style={{ zIndex: 2 }}
      >
        {/* Decorative label */}
        <span className="section-label">Natal Chart Reading</span>

        {/* Headline */}
        <h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] leading-[1.08]"
          style={{
            fontFamily: "var(--font-cormorant)",
            color: "#e4e2d1",
            fontWeight: 400,
            letterSpacing: "-0.01em",
          }}
        >
          The most honest portrait of yourself you will ever read.
        </h1>

        {/* Subheadline */}
        <p
          className="text-sm md:text-base max-w-[600px] mx-auto"
          style={{
            fontFamily: "var(--font-montserrat)",
            color: "rgba(228,226,209,0.65)",
            lineHeight: 1.9,
          }}
        >
          At the exact moment you were born, the sky looked a particular way. It has never looked
          that way before, and it never will again. Your natal chart is a precise map of that
          moment — and what it reveals about your nature, your character and the particular patterns
          that shape how you move through the world is unlike anything else you have encountered
          about yourself.
        </p>

        {/* Supporting italic */}
        <p
          className="text-sm max-w-[560px] mx-auto"
          style={{
            fontFamily: "var(--font-montserrat)",
            fontStyle: "italic",
            color: "rgba(228,226,209,0.4)",
            lineHeight: 1.8,
          }}
        >
          Not a horoscope. Not a generalisation. A 70-page reading built entirely from your birth
          data — delivered as a beautifully designed document you will return to for years.
        </p>

        <a href="#pricing" className="btn-pill mt-2">
          Begin your reading
        </a>
      </div>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, transparent, #282828)", zIndex: 2 }}
      />
    </section>
  );
}
