import InlineSVG from "./InlineSVG";

interface DividerProps {
  variant: 1 | 2 | 3;
  bg?: "dark" | "cream";
}

const srcs: Record<number, string> = {
  1: "/assets/caelum_divider_1.svg",
  2: "/assets/caelum_divider_2.svg",
  3: "/assets/caelum_divider_3.svg",
};

export default function Divider({ variant, bg = "dark" }: DividerProps) {
  const isDark = bg === "dark";
  return (
    <div
      className="relative flex justify-center items-center py-14 overflow-hidden"
      style={{ backgroundColor: isDark ? "#282828" : "#e4e2d1" }}
    >
      <InlineSVG
        src={srcs[variant]}
        fill={isDark ? "#c9a96e" : "#8a7340"}
        width={400}
        style={{ opacity: isDark ? 1 : 0.6 }}
        aria-hidden
      />
    </div>
  );
}
