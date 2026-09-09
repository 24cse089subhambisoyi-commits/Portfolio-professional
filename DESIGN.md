---
name: Ink & Amber Portfolio
colors:
  surface: '#f8f9ff'
  surface-dim: '#d8dae1'
  surface-bright: '#f8f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f3fa'
  surface-container: '#ecedf5'
  surface-container-high: '#e6e8ef'
  surface-container-highest: '#e1e2e9'
  on-surface: '#191c21'
  on-surface-variant: '#514534'
  inverse-surface: '#2e3036'
  inverse-on-surface: '#eff0f8'
  outline: '#837561'
  outline-variant: '#d5c4ad'
  surface-tint: '#7e5700'
  primary: '#7e5700'
  on-primary: '#ffffff'
  primary-container: '#e3a008'
  on-primary-container: '#573b00'
  inverse-primary: '#ffba36'
  secondary: '#555f6c'
  on-secondary: '#ffffff'
  secondary-container: '#d9e3f2'
  on-secondary-container: '#5b6572'
  tertiary: '#5a5f68'
  on-tertiary: '#ffffff'
  tertiary-container: '#a8adb7'
  on-tertiary-container: '#3c414a'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdeac'
  primary-fixed-dim: '#ffba36'
  on-primary-fixed: '#281900'
  on-primary-fixed-variant: '#604100'
  secondary-fixed: '#d9e3f2'
  secondary-fixed-dim: '#bdc7d6'
  on-secondary-fixed: '#131c27'
  on-secondary-fixed-variant: '#3e4853'
  tertiary-fixed: '#dee2ee'
  tertiary-fixed-dim: '#c2c6d1'
  on-tertiary-fixed: '#171c24'
  on-tertiary-fixed-variant: '#424750'
  background: '#f8f9ff'
  on-background: '#191c21'
  surface-variant: '#e1e2e9'
typography:
  display:
    fontFamily: Source Serif 4
    fontSize: 3.5rem
    fontWeight: '600'
    lineHeight: 4rem
    letterSpacing: -0.02em
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 1.125rem
    fontWeight: '400'
    lineHeight: 1.85rem
    letterSpacing: '0'
  label-code:
    fontFamily: JetBrains Mono
    fontSize: 0.8125rem
    fontWeight: '500'
    lineHeight: 1.25rem
    letterSpacing: 0.02em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  space-2xs: 0.25rem
  space-xs: 0.5rem
  space-sm: 0.75rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2rem
  space-2xl: 3rem
  space-3xl: 4.5rem
  space-4xl: 6rem
  gutter-mobile: 1rem
  gutter-desktop: 1.5rem
  container-max: 72rem
  prose-max: 42rem
---

## Brand & Style

This design system establishes the visual presence of a 3rd-year computer science student developing AI-driven web applications in Python. The tone is deliberate, grounded, and academically rigorous without lapsing into sterile corporate templates or exaggerated startup tropes. It rejects marketing jargon, fabricated impact statistics, and decorative AI tropes like iridescent gradients or neon orbital nodes.

The aesthetic fuses modern technical minimalism with editorial warmth. Crisp, atmospheric light tones provide a clean digital foundation akin to a focused studio or daytime reading environment. This is balanced by the tactile humanity of bookish serif typography and glowing amber accents, evoking the feeling of an architect's desk or an engineer's leather-bound notebook under warm desk lighting.

Interfaces built with this system should project clarity, technical craft, and intellectual curiosity. Surfaces remain calm, allowing code samples, architecture diagrams, and plain-language case studies to lead the experience.

## Colors

The palette operates in a default light mode calibrated for readability and clarity without harsh contrast.

- **Primary Accent (`#E3A008`)**: A focused, radiant warm amber. Reserved strictly for primary callouts, active indicators, interactive links, code highlights, and persistent interaction targets. It should be applied deliberately to retain its luminous weight.
- **Secondary (`#A3ADBB`)**: A muted slate-grey. Governs secondary body copy, captions, structural outlines, inactive icons, and metadata tags.
- **Tertiary / Elevated Surface (`#1E232B`)**: An offset charcoal tone used for elevated card containers, code block backgrounds, and input wells in light mode.
- **Neutral / Canvas (`#14171C`)**: Deep charcoal-navy base. Acts as the foundational plane across all viewports.
- **Text Primary (`#EDEFF2`)**: Near-white text with a slight cool tint to maintain contrast against structured containers.
- **Subtle Border (`rgba(163, 173, 187, 0.12)`)**: A hairline boundary used to delineate containers and separate content sections cleanly.

## Typography

The typographic hierarchy balances literary authority and precise execution.

- **Headings (`Source Serif 4`)**: Chosen for its robust, unpretentious humanist serifs. Provides thoughtful pacing to project overviews and personal statements. It remains grounded, avoiding ornamental hair-lines.
- **Body & Interface (`Plus Jakarta Sans`)**: Clean, contemporary, and legible at small sizes. Used for descriptive project narratives, workflow explanations, and core navigation.
- **Technical Badges & Code (`JetBrains Mono`)**: Strict, geometric monospacing for tech stack chips, terminal references, performance telemetry, and system architecture labels.
- **Hierarchy Rules**: Project case study titles use serif headlines, while nested section subtitles pivot to medium-weight sans-serif for functional reading. Line lengths for prose should never exceed 68 characters to preserve effortless scanning.

## Layout & Spacing

The portfolio is structured mobile-first, prioritizing seamless reading flow, immediate context, and fingertip reachability before scaling to widescreen viewports.

- **Grid Architecture**:
  - **Mobile (<768px)**: Single column with `1rem` (16px) margins. All primary actions and technical project previews stack vertically.
  - **Tablet (768px - 1024px)**: 6-column layout with `1.25rem` gutters and `2rem` margins.
  - **Desktop (>1024px)**: 12-column grid capped at a maximum width of `72rem` (1152px) centered horizontally, with `1.5rem` gutters. Narrative case studies utilize an asymmetric structure (4 columns for meta-information/stack specs and 8 columns for engineering breakdown).
- **Rhythm**: Vertical flow follows an 8px baseline rhythm (`0.5rem`, `1rem`, `1.5rem`, `2rem`, `3rem`). Component groupings use compact spacing (`0.5rem` to `1rem`), while project sections breathe with generous negative margins (`3rem` on mobile, `4.5rem` to `6rem` on desktop).

## Elevation & Depth

This system avoids aggressive skeuomorphism and diffuse, heavy drop shadows. Depth is achieved via **tonal stratification** coupled with low-contrast, hairline outlines.

- **Base Layer (Elevation 0)**: Background canvas (`#14171C`). Flat, unbordered.
- **Card Layer (Elevation 1)**: `#1E232B` surfaced with a 1px solid border of `rgba(163, 173, 187, 0.12)`. No shadow is present at rest.
- **Interactive Hover (Elevation 2)**: The card background remains `#1E232B`, while the border transitions to `rgba(227, 160, 8, 0.35)` accompanied by a subtle amber halo: `0 4px 20px -2px rgba(227, 160, 8, 0.08)`.
- **Floating Overlay (Elevation 3)**: Employed exclusively for the persistent mobile floating CTA and floating navigation bars. Rendered using `#1E232B` at 85% opacity with backdrop blur (`backdrop-filter: blur(12px)`), a top-hairline highlight of `rgba(237, 239, 242, 0.12)`, and a grounding shadow of `0 8px 32px rgba(0, 0, 0, 0.45)`.

## Shapes

The interface adopts a disciplined, low-radius shape language (`roundedness: 1`). Soft 4px (`0.25rem`) and 8px (`0.5rem`) radiuses reflect an intentional, code-editor-inspired structure rather than consumer-app pill shapes.

- **Containers & Project Cards**: `0.5rem` (`rounded-lg` token context). Crisp, structured, and rectangular without appearing razor-sharp.
- **Chips, Badges, and Code Pills**: `0.25rem` (4px). Rectangular with soft edge dampening, reinforcing their identity as technical data indicators.
- **Buttons**: `0.375rem` (6px). Balanced corner curvature that feels responsive and solid.
- **Persistent Floating CTA**: `0.5rem` (8px) on desktop; `0.75rem` (12px) when docked on mobile to soften against physical device edges.

## Components

### Buttons
- **Primary CTA**: Background `#E3A008`, foreground `#14171C` (bold weight for immediate contrast), corner radius 6px, padding `0.75rem 1.25rem`. On hover, lightens to `#EDAE1E`. Focus rings utilize an offset 2px ring of `rgba(227, 160, 8, 0.5)`.
- **Secondary / Ghost Button**: Transparent background with a `1px` border of `rgba(163, 173, 187, 0.25)` and `#EDEFF2` text. Hover shifts border color to `#A3ADBB` and fills background with `rgba(163, 173, 187, 0.06)`.

### Chips & Tech Badges
- Displayed in `JetBrains Mono` at `0.75rem`.
- Set against a background of `rgba(30, 35, 43, 0.9)` with a 1px border of `rgba(163, 173, 187, 0.15)`.
- Text color is `#A3ADBB`. When denoting the primary stack element (e.g., `Python`, `FastAPI`, `PyTorch`), the text shifts to `#E3A008` with a subtle amber border tint.

### Persistent Floating CTA (Mobile & Responsive)
- Fixed to the bottom viewport on mobile screens (`bottom: 1rem`, centered, spanning available width minus padding).
- Constructed using Elevation 3 (`#1E232B` at 85% opacity with 12px backdrop blur).
- Hosts a concise status indicator (e.g., a 6px pulsing amber dot indicating "Open for Summer 2025 roles") alongside a direct action button ("Get in Touch" or "View GitHub").

### Project Case Study Cards
- Nested within Elevation 1 containers.
- Structure:
  1. Technical category and completion date (JetBrains Mono, `#A3ADBB`).
  2. Project title in `Source Serif 4` (`#EDEFF2`).
  3. Straightforward 2-sentence summary detailing the problem and algorithmic solution.
  4. Stack tag array using the Chip component.
  5. Direct links: "Repository" and "Live Demo" rendered as understated text links with subtle arrow glyphs (`→`).

### Inputs & Contact Controls
- Fields feature a background of `#14171C` inset against the `#1E232B` card surface.
- Border is 1px `rgba(163, 173, 187, 0.2)`. On focus, the border shifts cleanly to `#E3A008` without default browser outlines.
- Labels are rendered in `Plus Jakarta Sans` medium at `0.875rem` in `#A3ADBB`.

### Code Snippets & Architecture Blocks
- Dark mono wells with syntax highlighting tailored to warm amber, slate, and muted olive.
- Includes a subtle copy button anchored top-right with an unobtrusive hover state.