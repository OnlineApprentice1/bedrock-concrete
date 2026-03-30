/**
 * Palette — Single source of truth for colour values
 * Bedrock Concrete Solutions — Magma Flow Industrial Bold
 *
 * Used by:
 * - opengraph-image.tsx (server-side, can't read CSS vars)
 * - Any server component needing colour values
 */

export const palette = {
  primary:       { oklch: "oklch(50% 0.22 10)", hex: "#a52422" },
  primaryLight:  { oklch: "oklch(65% 0.22 10)", hex: "#d04440" },
  primaryMuted:  { oklch: "oklch(45% 0.11 10)", hex: "#7a3a38" },
  accent:        { oklch: "oklch(68% 0.18 50)", hex: "#c87830" },
  accentMuted:   { oklch: "oklch(55% 0.10 50)", hex: "#8a6a4e" },
  surface1:      { oklch: "oklch(10% 0.01 260)", hex: "#141418" },
  surface2:      { oklch: "oklch(15% 0.01 260)", hex: "#1e1e24" },
  surface3:      { oklch: "oklch(22% 0.01 260)", hex: "#2e2e36" },
  surface4:      { oklch: "oklch(28% 0.015 260)", hex: "#3c3c48" },
  textPrimary:   { oklch: "oklch(95% 0.01 260)", hex: "#ededf0" },
  textSecondary: { oklch: "oklch(75% 0.02 260)", hex: "#b4b4be" },
  textMuted:     { oklch: "oklch(55% 0.02 260)", hex: "#7e7e8a" },
} as const;

/** OG image gradients — hex/rgba for Satori compatibility */
export const ogGradients = {
  background: "linear-gradient(150deg, #141418 0%, #1e1e24 50%, #a52422 100%)",
  glow: "radial-gradient(circle, rgba(165,36,34,0.3) 0%, transparent 60%)",
  accentText: "#c87830",
  gridLine: "rgba(165,36,34,0.08)",
} as const;

export type PaletteToken = keyof typeof palette;
