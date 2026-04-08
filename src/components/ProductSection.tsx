export default function ProductSection() {
  return (
    <section className="py-28 md:py-36" style={{ backgroundColor: "#0a0a0f" }}>
      <div className="max-w-3xl mx-auto px-6 lg:px-0 text-center flex flex-col items-center gap-10">
        {/* Gold accent */}
        <span
          className="text-xs tracking-[0.25em] uppercase"
          style={{ color: "#c9a96e", letterSpacing: "0.25em" }}
        >
          The Reading
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
          Everything you need to truly understand yourself. Nothing you don&apos;t.
        </h2>

        <div className="w-12 h-px" style={{ backgroundColor: "rgba(201,169,110,0.4)" }} />

        <p
          className="text-base md:text-lg leading-relaxed"
          style={{ color: "rgba(245,240,232,0.6)", lineHeight: 1.9 }}
        >
          Your Caelum reading covers every dimension of your natal chart — your core identity, your
          emotional nature, how you think, love and act, where you expand and where you are being
          asked to grow. Every placement explained in depth. Every pattern connected to the ones
          around it. Not a list of traits. A coherent portrait of a complete human being.
        </p>

        <p
          className="text-base md:text-lg leading-relaxed"
          style={{ color: "rgba(245,240,232,0.6)", lineHeight: 1.9 }}
        >
          Delivered as a beautifully designed document — and for every order, printed and bound as
          a hardcover book shipped to your door. Because something this personal deserves to exist
          as a physical object.
        </p>
      </div>
    </section>
  );
}
