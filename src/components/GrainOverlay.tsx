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
      className="grain-overlay"
      style={{ backgroundImage: `url(${url})` }}
    />
  );
}
