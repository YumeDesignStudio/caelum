interface GrainOverlayProps {
  src: "dark" | "cream";
}

export default function GrainOverlay({ src }: GrainOverlayProps) {
  const url =
    src === "dark"
      ? "/assets/Pulp_Grain_4.jpg"
      : "/assets/Pulp_Grain_18.jpg";

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
        opacity: 0.04,
        mixBlendMode: "overlay",
      }}
    />
  );
}
