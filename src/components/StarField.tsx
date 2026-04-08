const stars = [
  { cx: 3.2, cy: 8.5, r: 0.9, opacity: 0.7, slow: false },
  { cx: 8.7, cy: 22.1, r: 0.6, opacity: 0.4, slow: true },
  { cx: 14.1, cy: 5.3, r: 0.8, opacity: 0.6, slow: false },
  { cx: 19.5, cy: 38.7, r: 0.5, opacity: 0.3, slow: true },
  { cx: 23.8, cy: 14.2, r: 1.0, opacity: 0.8, slow: false },
  { cx: 28.3, cy: 62.4, r: 0.6, opacity: 0.5, slow: true },
  { cx: 31.7, cy: 28.9, r: 0.7, opacity: 0.4, slow: false },
  { cx: 36.2, cy: 7.1, r: 0.9, opacity: 0.6, slow: true },
  { cx: 41.5, cy: 48.3, r: 0.5, opacity: 0.35, slow: false },
  { cx: 45.9, cy: 19.6, r: 0.8, opacity: 0.7, slow: true },
  { cx: 50.4, cy: 71.2, r: 0.6, opacity: 0.4, slow: false },
  { cx: 54.8, cy: 34.5, r: 1.0, opacity: 0.55, slow: true },
  { cx: 59.1, cy: 11.8, r: 0.7, opacity: 0.65, slow: false },
  { cx: 63.6, cy: 55.9, r: 0.5, opacity: 0.3, slow: true },
  { cx: 68.2, cy: 24.3, r: 0.9, opacity: 0.7, slow: false },
  { cx: 72.7, cy: 79.4, r: 0.6, opacity: 0.45, slow: true },
  { cx: 77.1, cy: 42.7, r: 0.8, opacity: 0.5, slow: false },
  { cx: 81.4, cy: 16.1, r: 0.7, opacity: 0.6, slow: true },
  { cx: 85.9, cy: 63.8, r: 1.0, opacity: 0.4, slow: false },
  { cx: 90.3, cy: 31.5, r: 0.5, opacity: 0.75, slow: true },
  { cx: 94.7, cy: 88.2, r: 0.8, opacity: 0.35, slow: false },
  { cx: 97.2, cy: 52.6, r: 0.6, opacity: 0.5, slow: true },
  { cx: 6.5, cy: 74.3, r: 0.7, opacity: 0.45, slow: false },
  { cx: 11.9, cy: 45.8, r: 0.9, opacity: 0.6, slow: true },
  { cx: 16.3, cy: 91.4, r: 0.5, opacity: 0.3, slow: false },
  { cx: 21.7, cy: 57.2, r: 0.8, opacity: 0.5, slow: true },
  { cx: 26.1, cy: 83.9, r: 0.6, opacity: 0.4, slow: false },
  { cx: 33.4, cy: 69.1, r: 1.0, opacity: 0.55, slow: true },
  { cx: 38.8, cy: 93.7, r: 0.7, opacity: 0.35, slow: false },
  { cx: 43.2, cy: 76.5, r: 0.5, opacity: 0.6, slow: true },
  { cx: 48.6, cy: 86.3, r: 0.9, opacity: 0.4, slow: false },
  { cx: 57.3, cy: 95.1, r: 0.6, opacity: 0.3, slow: true },
  { cx: 65.8, cy: 81.7, r: 0.8, opacity: 0.5, slow: false },
  { cx: 74.4, cy: 94.2, r: 0.7, opacity: 0.45, slow: true },
  { cx: 83.1, cy: 87.6, r: 1.0, opacity: 0.35, slow: false },
  { cx: 91.6, cy: 73.4, r: 0.5, opacity: 0.6, slow: true },
  { cx: 4.8, cy: 37.9, r: 0.8, opacity: 0.5, slow: false },
  { cx: 87.3, cy: 6.7, r: 0.6, opacity: 0.65, slow: true },
  { cx: 52.1, cy: 2.4, r: 0.9, opacity: 0.55, slow: false },
  { cx: 76.5, cy: 97.3, r: 0.5, opacity: 0.3, slow: true },
  { cx: 18.9, cy: 98.1, r: 0.7, opacity: 0.35, slow: false },
  { cx: 61.4, cy: 3.8, r: 0.8, opacity: 0.6, slow: true },
  { cx: 92.8, cy: 43.2, r: 0.6, opacity: 0.4, slow: false },
  { cx: 1.3, cy: 61.7, r: 1.0, opacity: 0.5, slow: true },
  { cx: 98.6, cy: 17.9, r: 0.7, opacity: 0.45, slow: false },
  { cx: 47.3, cy: 99.2, r: 0.5, opacity: 0.3, slow: true },
  { cx: 29.9, cy: 1.8, r: 0.8, opacity: 0.55, slow: false },
  { cx: 70.6, cy: 13.4, r: 0.6, opacity: 0.5, slow: true },
  { cx: 55.7, cy: 41.6, r: 0.9, opacity: 0.4, slow: false },
  { cx: 12.4, cy: 68.3, r: 0.7, opacity: 0.6, slow: true },
];

export default function StarField() {
  return (
    <svg
      aria-hidden="true"
      className="absolute inset-0 w-full h-full pointer-events-none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
      viewBox="0 0 100 100"
    >
      {stars.map((star, i) => (
        <circle
          key={i}
          cx={star.cx}
          cy={star.cy}
          r={star.r * 0.25}
          fill="#c9a96e"
          opacity={star.opacity}
          className={star.slow ? "star-twinkle-slow" : "star-twinkle"}
          style={{ animationDelay: `${(i * 0.37) % 7}s` }}
        />
      ))}
    </svg>
  );
}
