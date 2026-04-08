import GrainOverlay from "./GrainOverlay";
import InlineSVG from "./InlineSVG";

export default function ProductSection() {
  return (
    <section className="relative py-28 md:py-36 overflow-hidden" style={{ backgroundColor: "#e4e2d1" }}>
      <GrainOverlay src="cream" />

      {/* Decorative sun/moon icon */}
      <div className="absolute top-12 right-8 md:right-16 opacity-[0.06] pointer-events-none" style={{ zIndex: 0 }}>
        <InlineSVG src="/assets/caelum_sun_moon_icon_1.svg" fill="#282828" width={180} aria-hidden />
      </div>

      <div className="relative max-w-3xl mx-auto px-6 lg:px-0 text-center flex flex-col items-center gap-10" style={{ zIndex: 2 }}>
        <span
          className="text-sm tracking-[0.25em] uppercase"
          style={{
            fontFamily: "var(--font-montserrat)",
            color: "#8a7340",
            letterSpacing: "0.25em",
          }}
        >
          The Reading
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
          Everything you need to truly understand yourself. Nothing you don&apos;t.
        </h2>

        <div className="w-12 h-px" style={{ backgroundColor: "rgba(40,40,40,0.3)" }} />

        <p
          className="text-base md:text-lg leading-relaxed"
          style={{ color: "rgba(40,40,40,0.75)", lineHeight: 1.9 }}
        >
          Your Caelum reading covers every dimension of your natal chart — your core identity, your
          emotional nature, how you think, love and act, where you expand and where you are being
          asked to grow. Every placement explained in depth. Every pattern connected to the ones
          around it. Not a list of traits. A coherent portrait of a complete human being.
        </p>

        <p
          className="text-base md:text-lg leading-relaxed"
          style={{ color: "rgba(40,40,40,0.75)", lineHeight: 1.9 }}
        >
          Delivered as a beautifully designed document — and for every order, printed and bound as
          a hardcover book shipped to your door. Because something this personal deserves to exist
          as a physical object.
        </p>
      </div>
    </section>
  );
}
