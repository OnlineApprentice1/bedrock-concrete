# Design Context — Bedrock Concrete Solutions

## Archetype
- **Name:** magma-flow-industrial-bold
- **Colour family:** Bold
- **Profile:** profile-bold.css
- **Visual identity:** Volcanic magma flowing over dark basalt — vivid crimson-orange liquid against jet black rock, primal energy contained in geological channels. Zero radii, thick borders, dramatic state changes.
- **This site should feel:** powerful, grounded, industrial
- **This site should NOT feel:** generic, soft, corporate

## Brand Token Overrides (from mood: powerful, grounded, industrial)

Based on the brand mapping:
- **Animation base duration:** 0.4s (snappy, powerful)
- **Stagger delay:** 0.06s (rapid cascade)
- **Heading font-weight override:** 700-900 (Anton is inherently ultra-bold)
- **Preferred section density:** mixed (tight stats + spacious hero for contrast)
- **Border treatment:** thick (2px+), hard edges, zero radii
- **Hover intensity:** dramatic (background fill, colour inversion)
- **Layout tendency:** asymmetric with structural weight

## Expanded Colour Tokens

| Token | Value | Use For |
|-------|-------|---------|
| --clr-primary | `oklch(50% 0.22 10)` | Deep crimson — CTAs, key highlights |
| --clr-primary-light | `oklch(65% 0.22 10)` | Lighter crimson — hover states |
| --clr-primary-muted | `oklch(45% 0.11 10)` | Muted crimson — subtle borders |
| --clr-accent | `oklch(68% 0.18 50)` | Lava orange — badges, dividers |
| --clr-accent-muted | `oklch(55% 0.10 50)` | Soft amber — accent backgrounds |
| --clr-surface-1 | `oklch(10% 0.01 260)` | Basalt black — deepest bg |
| --clr-surface-2 | `oklch(15% 0.01 260)` | Card bg |
| --clr-surface-3 | `oklch(22% 0.01 260)` | Borders, elevated |
| --clr-surface-4 | `oklch(28% 0.015 260)` | Hover states |
| --clr-text-primary | `oklch(95% 0.01 260)` | Main text |
| --clr-text-secondary | `oklch(75% 0.02 260)` | Supporting text |
| --clr-text-muted | `oklch(55% 0.02 260)` | Labels, captions |

### Opacity Rules
- Gradient overlays on dark backgrounds: **minimum 0.15 opacity** (0.10 and below are invisible)
- Text on dark backgrounds: use `var(--clr-text-secondary)` minimum for readable text
- Subtle backgrounds: `bg-primary/10` to `bg-primary/20` (not /5)
- Card borders: `border-base-300` or `border-accent/20` (visible, not invisible)

### Hardcoded Colour Rules
- **CSS keyframes:** Use `color-mix(in oklch, var(--clr-primary) 40%, transparent)` — NOT raw `oklch(...)`
- **Inline JSX styles:** Use `var(--clr-primary)` via CSS or reference `palette.ts`
- **OG images:** Use values from `src/lib/palette.ts`

## Typography
- **Heading:** `var(--font-heading)` — Anton, ultra-bold display (only weight 400, but reads as black). Tight tracking for impact.
- **Body:** `var(--font-body)` — Source Sans 3, clean professional sans-serif.
- **Scale:** Use type classes from `src/styles/typography.css`:
  - Hero headline: `type-hero` (fluid 40px → 80px)
  - Hero subtitle: `type-hero-sub` (fluid 24px → 40px)
  - Section headings: `type-section` (fluid 28px → 40px)
  - Card headings: `type-card` (fluid 18px → 24px)
  - Body large: `type-body-lg` (fluid 17px → 20px)
  - Body: `type-body` (fluid 16px → 18px)
  - Labels: `type-small` (fluid 12px → 14px)
- **DO NOT hardcode text-4xl, text-2xl, etc. — use the type classes.**

## Signature Effects

### 1. Lava-Channel Dividers
Custom SVG dividers between sections — thick curved shapes with animated crimson-to-orange gradient.
```tsx
// Use the .lava-channel class from archetype.css for simple horizontal versions.
// For curved SVG versions between key sections:
<svg viewBox="0 0 1440 40" className="w-full" preserveAspectRatio="none">
  <defs>
    <linearGradient id="lava-grad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stopColor="var(--clr-primary)" />
      <stop offset="50%" stopColor="var(--clr-accent)" />
      <stop offset="100%" stopColor="var(--clr-primary)" />
    </linearGradient>
  </defs>
  <path d="M0,20 Q360,0 720,20 T1440,20" stroke="url(#lava-grad)" strokeWidth="6" fill="none" />
</svg>
```

### 2. Basalt-Column Cards
Hexagonal clip-path cards arranged in a honeycomb-like pattern for the services grid.
```tsx
// Use .hex-clip class from archetype.css on the icon/image container:
<div className="hex-clip bg-primary/15 w-20 h-20 flex items-center justify-center">
  <Icon className="w-8 h-8 text-accent" />
</div>
// The cards themselves use .card-standard or .card-featured from profile-bold.css
```

### 3. Magma-Glow Hover
Cursor-tracking radial gradient glow on interactive cards.
```tsx
// Use .magma-glow class from archetype.css on card containers.
// Set --mouse-x and --mouse-y via onMouseMove:
const handleMouse = (e: React.MouseEvent) => {
  const rect = e.currentTarget.getBoundingClientRect();
  const x = ((e.clientX - rect.left) / rect.width) * 100;
  const y = ((e.clientY - rect.top) / rect.height) * 100;
  e.currentTarget.style.setProperty("--mouse-x", `${x}%`);
  e.currentTarget.style.setProperty("--mouse-y", `${y}%`);
};
<div className="card-featured magma-glow" onMouseMove={handleMouse}>...</div>
```

## Layout Rules for This Build
- **Hero layout:** Full-bleed dark background with flowing SVG magma river crossing viewport. Text in white above the flow.
- **Primary card pattern:** Services use basalt-column hexagonal icons + .card-standard from profile
- **Container width variety:**
  - Narrow: `max-w-4xl` (stats bar, FAQ)
  - Standard: `max-w-6xl` (services, testimonials)
  - Wide: `max-w-7xl` (process)
  - Full-bleed: hero, CTA
- **Section spacing:**
  - `section-spacious` for hero, CTA
  - `section-standard` for services, process, testimonials
  - `section-compact` for stats, FAQ preview
- **Section dividers:** Lava-channel SVG dividers between hero→stats, services→process, and process→testimonials
- **Section backgrounds:**
  - `section-bg-deep` for hero, stats, CTA
  - `section-bg-gradient` for services, testimonials
  - `section-bg-texture` for process, FAQ preview

## Anti-Patterns for This Build
- Do NOT center every heading — at least 2 sections should have left-aligned text
- Do NOT use symmetrical 3-column card grids for more than 1 section
- Do NOT use the same section-bg-* class for every section — alternate
- Do NOT make all sections the same density — mix spacious, standard, compact
- Do NOT use `text-base-content/50` for anything meant to be read
- Do NOT use emoji icons — use Lucide React
- Do NOT use `.card-archetype` — use `.card-featured`, `.card-standard`, or `.card-compact`
- Do NOT hardcode max-w-7xl on every section — vary container widths
- Do NOT use `transition-all` — use specific transition properties
- Do NOT use placehold.co images — use Unsplash URLs
- Do NOT use hardcoded hex colours in components — use var(--clr-*) tokens
- Do NOT hardcode text sizes — use type-* classes

## Placeholder Images

| Use | URL |
|-----|-----|
| Hero / construction site | `https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&h=1080&fit=crop&q=80` |
| Concrete pour | `https://images.unsplash.com/photo-1590069261209-f8e9b8642343?w=800&h=600&fit=crop&q=80` |
| Custom home | `https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop&q=80` |
| Blueprint / plans | `https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&h=600&fit=crop&q=80` |
| Brick / masonry detail | `https://images.unsplash.com/photo-1523755231516-e43fd2e8dca5?w=800&h=600&fit=crop&q=80` |
| Stone wall | `https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800&h=600&fit=crop&q=80` |
| Tools on workbench | `https://images.unsplash.com/photo-1572981779307-38b8cabb2407?w=800&h=600&fit=crop&q=80` |
| Patio / interlocking | `https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop&q=80` |
| Stone pathway | `https://images.unsplash.com/photo-1572025442646-866d16c84a54?w=800&h=600&fit=crop&q=80` |

## What Already Exists (do not rebuild)
- `Reveal.tsx` — scroll-triggered animation wrapper. Import from `@/components/Reveal`.
- `StaggerGroup.tsx` — wraps groups with stagger delay. Import from `@/components/StaggerGroup`.
- `src/styles/profile.css` — bold profile (card tiers, badges, buttons, dividers, section bgs).
- `src/styles/typography.css` — fluid type scale and section density classes.
- `src/styles/colour-tokens.css` — expanded colour tokens with magma OKLCH values.
- `src/styles/archetype.css` — magma-specific: grain overlay, lava-channel, hex-clip, magma-glow.
- `src/components/effects/` — WaveDivider, GradientSweep, RingBorder, TracePath, GlowCursor, ParticleField.
- `src/components/layouts/` — SectionBentoGrid, SectionZigzag, SectionFullBleed, SectionStatsBar, SectionAsymmetricSplit, SectionEditorial, SectionOffsetGrid, SectionStackedCards.
- `globals.css` — DaisyUI "magma" theme, font tokens, base styles.
- `config/site.ts` — business info. Import from `@/config/site`.
- `lib/palette.ts` — colour values as TS constants. Import from `@/lib/palette`.

## DaisyUI 5 Syntax Reminder
```css
@plugin "daisyui/theme" { name: "magma"; primary: oklch(...); }
```

## Tailwind CSS v4 Reminder
- Use `@import "tailwindcss"` not `@tailwind base;`
- Custom tokens: `@theme inline { }` blocks
- Use OKLCH everywhere, not hex or HSL
