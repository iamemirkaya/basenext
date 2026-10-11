let context: CanvasRenderingContext2D | null = null;

/** Resolves a color token from globals.css to sRGB hex for renderers that cannot parse oklch (WebGL). */
export function resolveColorToken(token: string): string {
  const value = getComputedStyle(document.documentElement).getPropertyValue(token).trim();

  context ??= document.createElement("canvas").getContext("2d", { willReadFrequently: true });
  if (!context) return value;

  context.clearRect(0, 0, 1, 1);
  context.fillStyle = value;
  context.fillRect(0, 0, 1, 1);
  const [r, g, b] = context.getImageData(0, 0, 1, 1).data;

  return `#${((r << 16) | (g << 8) | b).toString(16).padStart(6, "0")}`;
}
