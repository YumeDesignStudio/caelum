interface GrainOverlayProps {
  src: "dark" | "cream";
}

export default function GrainOverlay({ src }: GrainOverlayProps) {
  const isDark = src === "dark";
  const url = isDark ? "/assets/Pulp_Grain_4.jpg" : "/assets/Pulp_Grain_18.jpg";

  return (
    <div
      aria-hidden="true"
      style={{
        position: "absolute",
        inset: 0,
        pointerEvents: "none",
        zIndex: 1,
        backgroundImage: `url(${url})`,
        backgroundSize: "cover",
        opacity: isDark ? 0.06 : 0.08,
        mixBlendMode: isDark ? "screen" : "multiply",
      }}
    />
  );
}
