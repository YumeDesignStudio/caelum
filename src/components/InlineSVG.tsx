import { readFileSync } from "fs";
import path from "path";

interface InlineSVGProps {
  src: string; // path relative to /public, e.g. "/assets/caelum_logo.svg"
  fill?: string;
  width?: number | string;
  height?: number | string;
  className?: string;
  style?: React.CSSProperties;
  "aria-hidden"?: boolean;
}

export default function InlineSVG({
  src,
  fill,
  width,
  height,
  className,
  style,
  "aria-hidden": ariaHidden,
}: InlineSVGProps) {
  const filePath = path.join(process.cwd(), "public", src);

  let content: string;
  try {
    content = readFileSync(filePath, "utf-8");
  } catch {
    // File not yet present — render an empty placeholder at the right size
    return (
      <div
        aria-hidden={ariaHidden}
        className={className}
        style={{ width, height, display: "inline-block", ...style }}
      />
    );
  }

  if (fill) {
    // Replace every explicit fill that isn't "none" or "transparent"
    content = content.replace(
      /fill="(?!none|transparent)([^"]*)"/g,
      `fill="${fill}"`
    );
    // Also handle fill on <svg> root and inline style fills where we can
    content = content.replace(/fill: ?(?!none|transparent)[^;"}]+/g, `fill: ${fill}`);
  }

  // Inject width/height as style on the root <svg> element
  const sizeStyle = [
    width !== undefined ? `width:${typeof width === "number" ? `${width}px` : width}` : "",
    height !== undefined ? `height:${typeof height === "number" ? `${height}px` : height}` : "",
  ]
    .filter(Boolean)
    .join(";");

  if (sizeStyle) {
    content = content.replace(/<svg/, `<svg style="${sizeStyle}"`);
  }

  if (ariaHidden) {
    content = content.replace(/<svg/, `<svg aria-hidden="true"`);
  }

  return (
    <div
      className={className}
      style={{ display: "contents", ...style }}
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
}
