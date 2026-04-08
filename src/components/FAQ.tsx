"use client";

import { useState } from "react";
import GrainOverlay from "./GrainOverlay";

const faqs = [
  {
    q: "Is this a real natal chart or a generic reading?",
    a: "Every reading is built from your exact birth data — date, time and place of birth. The planetary positions in your chart are calculated with precision, and every interpretation is specific to your unique configuration. No two readings are the same.",
  },
  {
    q: "Do I need to believe in astrology?",
    a: "No. Caelum readings are written for anyone who is curious about themselves — regardless of whether you consider yourself a believer. The natal chart is a symbolic system with centuries of documented use as a language for human personality. We use it as a tool for self-knowledge, not prophecy.",
  },
  {
    q: "How long does my reading take to arrive?",
    a: "Your reading is delivered within 5-10 days of your order. This is intentional — your chart deserves the time it takes to do it properly.",
  },
  {
    q: "What format do I receive it in?",
    a: "Your reading is delivered as a beautifully designed PDF to your inbox. Every order also includes a hardcover book printed and shipped to your door — your reading as a physical object, built to last.",
  },
  {
    q: "How detailed is it really?",
    a: "Approximately 70 pages. Every major placement in your chart is interpreted in depth — not just your Sun sign, but every planet, every house and the significant relationships between them. It is the most complete natal chart reading available as a product.",
  },
  {
    q: "What information do I need to provide?",
    a: "Your full name, date of birth, exact time of birth and place of birth. The time of birth is important — it determines your Rising sign and house placements. If you do not know your exact birth time, contact us and we will advise.",
  },
  {
    q: "Can I order a reading as a gift?",
    a: "Absolutely. At checkout you can specify that the reading is a gift and provide the recipient's details. The hardcover book makes it one of the more unusual and genuinely personal gifts available.",
  },
  {
    q: "What if I have questions about my reading?",
    a: "We are available via email for any questions about your chart or your reading. We are not able to offer personal consultations but we are happy to help with any questions about the content.",
  },
];

function FAQItem({ faq }: { faq: { q: string; a: string } }) {
  const [open, setOpen] = useState(false);

  return (
    <div style={{ borderTop: "1px solid rgba(201,169,110,0.1)" }}>
      <button
        className="w-full py-7 flex items-center justify-between text-left gap-4"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <h3
          className="text-lg"
          style={{
            fontFamily: "var(--font-cormorant)",
            color: "#e4e2d1",
            fontWeight: 500,
          }}
        >
          {faq.q}
        </h3>
        <span
          className="flex-shrink-0 w-5 h-5 flex items-center justify-center text-sm transition-transform duration-300"
          style={{
            color: "#c9a96e",
            transform: open ? "rotate(45deg)" : "none",
          }}
        >
          +
        </span>
      </button>
      <div className={`faq-answer ${open ? "open" : ""}`}>
        <div className="faq-answer-inner">
          <p
            className="text-sm leading-relaxed pb-7"
            style={{ color: "rgba(228,226,209,0.7)", lineHeight: 1.9 }}
          >
            {faq.a}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function FAQ() {
  return (
    <section
      id="faq"
      className="relative py-28 md:py-36 overflow-hidden"
      style={{ backgroundColor: "#282828" }}
    >
      <GrainOverlay src="dark" />

      <div className="relative max-w-3xl mx-auto px-6 lg:px-0" style={{ zIndex: 2 }}>
        {/* Header */}
        <div className="text-center mb-16 flex flex-col items-center gap-6">
          <span className="section-label">FAQ</span>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl"
            style={{
              fontFamily: "var(--font-cormorant)",
              color: "#e4e2d1",
              fontWeight: 400,
              lineHeight: 1.2,
            }}
          >
            Everything you need to know before you begin.
          </h2>
        </div>

        {/* FAQ list — interactive accordion */}
        <div className="flex flex-col">
          {faqs.map((faq, i) => (
            <FAQItem key={i} faq={faq} />
          ))}
          <div className="h-px" style={{ backgroundColor: "rgba(201,169,110,0.1)" }} />
        </div>
      </div>
    </section>
  );
}
