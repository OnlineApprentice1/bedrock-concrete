import { ImageResponse } from "next/og";
import { palette, ogGradients } from "@/lib/palette";

export const runtime = "edge";
export const alt = "Bedrock Concrete Solutions — Foundations Built for Northern Winters";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-end",
          width: "100%",
          height: "100%",
          padding: "64px 72px",
          background: `linear-gradient(150deg, ${palette.surface1.hex} 0%, ${palette.surface2.hex} 55%, #2a1010 100%)`,
          color: palette.textPrimary.hex,
          fontFamily: "sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Radial glow — top right */}
        <div
          style={{
            position: "absolute",
            top: "-80px",
            right: "-60px",
            width: "480px",
            height: "480px",
            background: `radial-gradient(circle, rgba(165,36,34,0.28) 0%, transparent 65%)`,
            borderRadius: "50%",
          }}
        />

        {/* Bottom-left glow */}
        <div
          style={{
            position: "absolute",
            bottom: "-40px",
            left: "40px",
            width: "300px",
            height: "300px",
            background: `radial-gradient(circle, rgba(200,120,48,0.15) 0%, transparent 70%)`,
            borderRadius: "50%",
          }}
        />

        {/* Crimson accent rule */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "6px",
            height: "100%",
            background: `linear-gradient(180deg, ${palette.primary.hex} 0%, ${palette.accent.hex} 100%)`,
          }}
        />

        {/* Tagline */}
        <div
          style={{
            fontSize: 18,
            fontWeight: 700,
            letterSpacing: "0.18em",
            textTransform: "uppercase" as const,
            color: palette.accent.hex,
            marginBottom: 20,
            position: "relative",
          }}
        >
          Foundations Built for Northern Winters
        </div>

        {/* Business name */}
        <div
          style={{
            fontSize: 68,
            fontWeight: 800,
            lineHeight: 1.05,
            color: palette.textPrimary.hex,
            position: "relative",
          }}
        >
          Bedrock Concrete
          <br />
          Solutions
        </div>

        {/* Divider */}
        <div
          style={{
            width: "80px",
            height: "3px",
            background: palette.primary.hex,
            margin: "24px 0 20px",
            position: "relative",
          }}
        />

        {/* Location */}
        <div
          style={{
            fontSize: 24,
            color: palette.textSecondary.hex,
            position: "relative",
          }}
        >
          Thunder Bay, Ontario
        </div>
      </div>
    ),
    { ...size }
  );
}
