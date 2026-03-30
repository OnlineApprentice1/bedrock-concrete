# Implementation Plan — Bedrock Concrete Solutions

## Phase 4 — Structure

### Task 4.1: Header
- **File:** `src/components/Header.tsx`
- **Layout:** Full-width sticky header. Logo/business name left-aligned. Nav links (Home, Services, About, Contact) centre. CTA button "Get a Free Quote" right. Mobile: hamburger menu with slide-in panel.
- **Animation:** None on load. Mobile menu slides from right with spring physics.
- **Anti-pattern:** No transparent header that becomes invisible on dark sections. Must have visible bg always (surface-2).
- **Responsive:** Mobile (<640px): hamburger + slide panel. Tablet (640-1023px): full nav, smaller CTA. Desktop: full spread.
- **Acceptance:** Header renders on all pages, CTA links to /contact, mobile menu toggles, nav links functional, uses type-small for nav items and btn-profile for CTA.

### Task 4.2: Footer
- **File:** `src/components/Footer.tsx`
- **Layout:** 4-column grid on desktop (Business info | Services | Quick Links | Contact). Single column stacked on mobile. Privacy + Terms links at bottom. Phone number clickable (tel:). Email clickable (mailto:).
- **Animation:** None.
- **Anti-pattern:** No centred-everything layout. Left-align all columns. No grey-on-grey unreadable text.
- **Responsive:** Mobile: single column stacked. Tablet: 2x2 grid. Desktop: 4 columns.
- **Acceptance:** Footer on all pages, legal links to /privacy and /terms, tel: and mailto: links, service area mentioned, uses siteConfig for all data, text-secondary for body text.

### Task 4.3: Reveal + StaggerGroup
- **File:** `src/components/Reveal.tsx`, `src/components/StaggerGroup.tsx`
- **Layout:** N/A (wrapper components). Reveal wraps individual sections. StaggerGroup wraps groups of cards/items.
- **Animation:** Reveal supports: fade-up, slide-left, slide-right, scale-up, clip-reveal, blur-sharpen, rotate-in. StaggerGroup supports cascade, fan, wave stagger patterns. Duration 0.4s base (powerful mood). Stagger delay 0.06s.
- **Anti-pattern:** No duplicate Reveal + motion.div wrappers. No animation on reduced-motion.
- **Responsive:** Animations work at all breakpoints but may reduce distance on mobile.
- **Acceptance:** useReducedMotion respected, 7 entrance variants available, 3 stagger patterns, spring physics on all transitions.

## Phase 5 — Homepage

### Task 5.1: Hero Section
- **File:** `src/components/home/Hero.tsx`
- **Layout:** SectionFullBleed. Black background with flowing curved SVG shape (magma river) in crimson-to-orange gradient crossing mid-viewport horizontally. Business name "BEDROCK CONCRETE" in massive type-hero above the flow. Subtitle below. CTA buttons below subtitle. The SVG gradient subtly animates (background-position shift). Parallax on the SVG layer.
- **Animation:** fade-up+parallax — text fades up, SVG has parallax depth on scroll.
- **Anti-pattern:** No centred-text-over-stock-photo. No static flat hero. The magma river SVG MUST be visible and animated.
- **Responsive:** Mobile: SVG scales, text stacks vertically, buttons full-width. Desktop: text left-aligned in upper portion, SVG spans full width.
- **Acceptance:** Magma SVG visible with gradient animation, parallax working, type-hero for headline, btn-profile for primary CTA, btn-profile-ghost for secondary, section-spacious density, section-bg-deep background.

### Task 5.2: Stats Section
- **File:** `src/components/home/Stats.tsx`
- **Layout:** SectionStatsBar. Narrow container (max-w-4xl). 4 stats in a horizontal bar: "20+ Years", "500+ Projects", "100% Licensed & Insured", "24h Response Time". Numbers large (type-hero-sub), labels below (type-small). Separated by thick vertical dividers in primary colour.
- **Animation:** scale-up+counter+pop — numbers count up with overshoot bounce.
- **Anti-pattern:** No card grid for stats — use a tight horizontal bar. No equal-width columns.
- **Responsive:** Mobile: 2x2 grid. Tablet: 4 across. Desktop: 4 across with generous spacing.
- **Acceptance:** Counter animation triggers on scroll, section-compact density, section-bg-deep, stats use type-hero-sub for numbers and type-small for labels.

### Task 5.3: Services Section
- **File:** `src/components/home/Services.tsx`
- **Layout:** SectionOffsetGrid or custom honeycomb. 5 service cards with hexagonal icon containers (.hex-clip). Each card: hex icon top, type-card heading, type-body description, "Learn More" link. Cards use .card-standard from profile. Section heading left-aligned.
- **Animation:** slide-alternate+cascade — cards alternate sliding from left/right with stagger.
- **Anti-pattern:** No symmetrical 3-column grid. No centred section heading. Icons MUST use hex-clip, not plain circles.
- **Responsive:** Mobile: single column stacked. Tablet: 2 columns offset. Desktop: 3-2 offset grid (3 top, 2 bottom centred).
- **Acceptance:** 5 service cards, hex-clip icons with Lucide icons, .card-standard styling, section-standard density, section-bg-gradient, left-aligned heading, magma-glow hover on cards.

### Task 5.4: Process Section
- **File:** `src/components/home/Process.tsx`
- **Layout:** SectionZigzag. 5 steps: Consultation → Site Prep → Forming → Pour & Finish → Cure & Seal. Each step alternates image left/text right, then text left/image right. Step numbers in large type with primary colour. Lava-channel divider between this and previous section.
- **Animation:** clip-reveal+cascade — steps wipe in sequentially.
- **Anti-pattern:** No vertical timeline with dots. No identical card layout for each step. Zigzag must alternate.
- **Responsive:** Mobile: stacks vertically (image above text). Tablet+: zigzag alternating.
- **Acceptance:** 5 steps rendered, zigzag layout alternating, clip-reveal animation, section-standard density, section-bg-texture, step numbers visible in primary colour, Unsplash construction images.

### Task 5.5: Testimonials Section
- **File:** `src/components/home/Testimonials.tsx`
- **Layout:** SectionAsymmetricSplit or SectionStackedCards. 3 testimonials. Featured testimonial large on left (card-featured), 2 smaller on right (card-compact). Each has quote text, first name + neighbourhood. Large quote mark decorative element in primary colour.
- **Animation:** blur-sharpen+wave — quotes emerge from blur with wave stagger.
- **Anti-pattern:** No 3-column equal grid. No star ratings. Asymmetric layout required.
- **Responsive:** Mobile: stacked single column, featured first. Desktop: asymmetric split 7/5.
- **Acceptance:** 3 testimonials, asymmetric layout, card-featured for main, card-compact for secondary, section-standard density, section-bg-gradient, decorative quote marks.

### Task 5.6: FAQ Preview Section
- **File:** `src/components/home/FAQPreview.tsx`
- **Layout:** SectionEditorial. Narrow container (max-w-4xl). Left-aligned heading "Common Questions". 4 FAQ items (subset of full 8) in accordion style using DaisyUI collapse. Link to full FAQ if separate page exists, otherwise just 4 most important.
- **Animation:** rotate-in — subtle tilt entry.
- **Anti-pattern:** No wide full-bleed FAQ. Keep it narrow and editorial. No centred heading.
- **Responsive:** Single column at all breakpoints. Accordion items full-width.
- **Acceptance:** 4 FAQ items, DaisyUI collapse/accordion, type-section for heading, section-compact density, section-bg-texture, left-aligned.

### Task 5.7: CTA Section
- **File:** `src/components/home/CTA.tsx`
- **Layout:** SectionFullBleed. Dark background (section-bg-deep). Bold headline "Ready to Pour?" in type-hero. Subtitle in type-hero-sub. Two buttons: "Get a Free Quote" (btn-profile) and phone number (btn-profile-ghost). Lava-channel divider above.
- **Animation:** none (intentional stillness).
- **Anti-pattern:** No gradient background competing with text. Let the message land in stillness.
- **Responsive:** Centred text at all breakpoints. Buttons stack on mobile.
- **Acceptance:** type-hero headline, both buttons present, phone uses tel: link, section-spacious density, section-bg-deep, grain-overlay on background.

### Task 5.8: Homepage Assembly
- **File:** `src/app/page.tsx`
- **Layout:** Import and render all 7 sections in order: Hero → Stats → Services → Process → Testimonials → FAQPreview → CTA. Add lava-channel dividers between hero→stats, services→process, and process→testimonials.
- **Animation:** N/A (sections handle their own).
- **Anti-pattern:** No extra wrapper divs. Clean sequential render.
- **Responsive:** Sections handle their own responsive.
- **Acceptance:** All 7 sections render in correct order, lava-channel dividers placed, page loads without errors.

## Phase 6 — Inner Pages

### Task 6.1: Services Page
- **File:** `src/app/services/page.tsx`
- **Layout:** Sidebar navigation layout. Left sidebar (sticky on desktop) lists all 5 services as anchor links. Right content area shows each service in detail: heading, description (2-3 paragraphs), image, key features list. Each service section separated by lava-channel divider.
- **Animation:** fade-up for each service block as it enters viewport.
- **Anti-pattern:** No accordion-only layout. Full content visible with sidebar nav for jumping. No centred content.
- **Responsive:** Mobile: sidebar becomes horizontal scroll tabs at top. Desktop: sticky left sidebar 3/9 split.
- **Acceptance:** 5 services detailed, sidebar nav with anchor links, Unsplash images per service, type-section for service names, type-body for descriptions, Lucide icons per service.

### Task 6.2: About Page
- **File:** `src/app/about/page.tsx`
- **Layout:** Story-image layout. Hero banner with dark overlay + construction image. Below: split layout — left side: Mike Dufresne's story (owner name allowed here only), 20 years in Thunder Bay, started as a labourer, family crew. Right: portrait placeholder image. Then: values/pillars section (3 values in card-standard). Then: service area section with mention of Thunder Bay, Fort William, Kakabeka Falls.
- **Animation:** fade-up for story, slide-left for image, scale-up for values.
- **Anti-pattern:** No generic "About Us" heading. Lead with the story, not corporate boilerplate.
- **Responsive:** Mobile: stacked single column. Desktop: 7/5 split for story+image.
- **Acceptance:** Owner name used (Mike Dufresne), personal story, 3 values cards, service area list, type-section for headings, Canadian English.

### Task 6.3: Contact Page
- **File:** `src/app/contact/page.tsx`
- **Layout:** Form-sidebar layout. Left: contact form (Name, Email, Phone, Service dropdown, Message). Right sidebar: business info card (phone with tel:, email with mailto:, address, hours: "Mon-Fri 7am-5pm, Sat 8am-12pm"). Below: full-width Google Maps embed.
- **Animation:** fade-up for form, slide-right for sidebar.
- **Anti-pattern:** No form-only page without map. Must have Google Maps. No missing tel: links.
- **Responsive:** Mobile: form stacks above sidebar above map. Desktop: 7/5 form + sidebar, full-width map below.
- **Acceptance:** Form fields present, tel: and mailto: links, Google Maps embed, service dropdown with 5 services, hours listed, section-bg-deep for map area.

### Task 6.4: FAQ Page (full)
- **File:** `src/app/faq/page.tsx`
- **Layout:** Single column, narrow (max-w-3xl). 8 FAQ items in DaisyUI collapse accordion. Grouped if possible (general, process, pricing). CTA at bottom linking to /contact.
- **Animation:** fade-up for each group.
- **Anti-pattern:** No wide layout. No tabbed interface. Simple accordion.
- **Responsive:** Single column at all breakpoints.
- **Acceptance:** 8 FAQ items, DaisyUI collapse, left-aligned, CTA at bottom, Canadian English, concrete-specific questions.

## Phase 7 — SEO & Legal

### Task 7.1: SEO Files
- **Files:** `src/app/robots.ts`, `src/app/sitemap.ts`, `src/app/opengraph-image.tsx`
- **Layout:** N/A (programmatic). robots: allow all, reference sitemap. sitemap: all routes (/, /services, /about, /contact, /faq, /privacy, /terms). OG image: dynamic using palette.ts hex values (Satori can't read CSS vars).
- **Anti-pattern:** No hardcoded OKLCH in OG image. Use palette.ts hex values.
- **Acceptance:** robots.txt accessible, sitemap.xml lists all routes, OG image renders with magma palette colours, business name in OG image.

### Task 7.2: Legal Pages
- **Files:** `src/app/privacy/page.tsx`, `src/app/terms/page.tsx`
- **Layout:** Single column prose layout (max-w-3xl). Standard legal page structure.
- **Anti-pattern:** No missing PIPEDA reference in privacy. No generic placeholder text.
- **Acceptance:** Privacy mentions PIPEDA, business name throughout, Canadian jurisdiction, Terms cover service business basics, both linked from footer.

### Task 7.3: llms.txt
- **File:** `public/llms.txt`
- **Layout:** N/A (plain text).
- **Acceptance:** Business name, trade, location, services listed.

---

## Anti-Sameness Self-Review Results

| Check | Result | Notes |
|-------|--------|-------|
| Archetype differs from last 3 | PASS | magma-flow-industrial-bold vs brass-instrument/glacier-glass/quarry-face |
| Hero differs from last 2 | PASS | magma-river-viewport vs glassmorphism-frosted-panel/angular-interlocking-blocks |
| Section order differs from last 3 | PASS | Authority Builder pattern (hero→stats→services→process→testimonials→faq→cta) not used recently |
| Animation set differs from last 2 | PASS | Different entrance combos; hero uses fade-up+parallax (not clip-reveal or scale-up) |
| Palette family rotated | PASS | Bold (hue 10) after warm(70)/cool(235)/earth(95) |
| Heading font differs | PASS | Anton (not IBM Plex Sans, Plus Jakarta Sans, or Oswald) |
| Signature moves unique | PASS | lava-channel-dividers, basalt-column-cards, magma-glow-hover — none in last 3 builds |
| Location not repeated | PASS | Thunder Bay (not Sudbury, Peterborough, or Brampton) |
| Inner page layouts differ from last 2 | PASS | sidebar-nav, story-image, form-sidebar vs crystaledge/johns layouts |

## Task Summary
- **Total tasks:** 14
- **Tier breakdown:** 3 Tier-1 (4.1-4.3), 8 Tier-2 (5.1-5.8), 3 Tier-2 (6.1-6.4) — no Tier-3
- **Homepage sections:** 7
- **Inner pages:** 4 (services, about, contact, faq)
- **Creative vision ratio:** ~40% in Tier-2 prompts
