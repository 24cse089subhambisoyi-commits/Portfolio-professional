---
name: Ink & Amber Portfolio
colors:
  surface: '#101418'
  surface-dim: '#101418'
  surface-bright: '#36393f'
  surface-container-lowest: '#0b0e13'
  surface-container-low: '#191c21'
  surface-container: '#1d2025'
  surface-container-high: '#272a2f'
  surface-container-highest: '#32353a'
  on-surface: '#e1e2e9'
  on-surface-variant: '#d5c4ad'
  inverse-surface: '#e1e2e9'
  inverse-on-surface: '#2e3036'
  outline: '#9e8f7a'
  outline-variant: '#514534'
  surface-tint: '#ffba36'
  primary: '#ffbc3f'
  on-primary: '#432c00'
  primary-container: '#e3a008'
  on-primary-container: '#573b00'
  inverse-primary: '#7e5700'
  secondary: '#ffc55d'
  on-secondary: '#422c00'
  secondary-container: '#eaa700'
  on-secondary-container: '#5d4000'
  tertiary: '#bec8d7'
  on-tertiary: '#28313c'
  tertiary-container: '#a3adbb'
  on-tertiary-container: '#37414d'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffdeac'
  primary-fixed-dim: '#ffba36'
  on-primary-fixed: '#281900'
  on-primary-fixed-variant: '#604100'
  secondary-fixed: '#ffdeaa'
  secondary-fixed-dim: '#ffba2c'
  on-secondary-fixed: '#271900'
  on-secondary-fixed-variant: '#5f4100'
  tertiary-fixed: '#d9e3f2'
  tertiary-fixed-dim: '#bdc7d6'
  on-tertiary-fixed: '#131c27'
  on-tertiary-fixed-variant: '#3e4853'
  background: '#101418'
  on-background: '#e1e2e9'
  surface-variant: '#32353a'
typography:
  headline-xl:
    fontFamily: Newsreader
    fontSize: 3.5rem
    fontWeight: '400'
    lineHeight: '1.15'
    letterSpacing: -0.02em
  headline-xl-mobile:
    fontFamily: Newsreader
    fontSize: 2.25rem
    fontWeight: '400'
    lineHeight: '1.2'
    letterSpacing: -0.015em
  headline-lg:
    fontFamily: Newsreader
    fontSize: 2.25rem
    fontWeight: '400'
    lineHeight: '1.25'
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Newsreader
    fontSize: 1.75rem
    fontWeight: '400'
    lineHeight: '1.3'
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Newsreader
    fontSize: 1.5rem
    fontWeight: '500'
    lineHeight: '1.35'
    letterSpacing: -0.005em
  headline-sm:
    fontFamily: Newsreader
    fontSize: 1.25rem
    fontWeight: '500'
    lineHeight: '1.4'
    letterSpacing: '0'
  body-lg:
    fontFamily: Inter
    fontSize: 1.125rem
    fontWeight: '400'
    lineHeight: '1.7'
    letterSpacing: -0.01em
  body-md:
    fontFamily: Inter
    fontSize: 1rem
    fontWeight: '400'
    lineHeight: '1.65'
    letterSpacing: -0.005em
  body-sm:
    fontFamily: Inter
    fontSize: 0.875rem
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: '0'
  label-md:
    fontFamily: JetBrains Mono
    fontSize: 0.875rem
    fontWeight: '500'
    lineHeight: '1.4'
    letterSpacing: -0.01em
  label-sm:
    fontFamily: JetBrains Mono
    fontSize: 0.75rem
    fontWeight: '500'
    lineHeight: '1.35'
    letterSpacing: 0.02em
  code-inline:
    fontFamily: JetBrains Mono
    fontSize: 0.875rem
    fontWeight: '400'
    lineHeight: '1.4'
    letterSpacing: '0'
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
  container-max: 68rem
  container-reading: 42rem
  gutter-mobile: 1.25rem
  gutter-desktop: 2rem
---

## Brand & Style

This design system expresses the voice and practice of a third-year Computer Science undergraduate specializing in Python systems, machine learning engineering, and AI-powered web applications. It eschews generic developer aesthetics—there are no neon glow gradients, faux glassmorphic cards, or floating isometric primitives. Instead, it pairs the academic rigor and depth of editorial publishing with the disciplined clarity of modern developer tools.

The brand persona is quiet, technically assured, direct, and pragmatic. Communication is written strictly in the first-person present tense ("I build", "I research", "I design"), completely devoid of marketing hype, corporate fluff, or resume hyperbole. The visual language evokes an engineer's notebook meets a refined terminal interface: deliberate typography, structured data hierarchy, tactile borders, and focused amber highlights that direct visual attention to architecture decisions, technical constraints, and measurable impact.

## Colors

The palette centers on a disciplined dark theme anchored by "Ink & Amber." The foundation uses deep charcoal-navy tones rather than lifeless pure blacks, preserving richness and depth while sustaining contrast levels well above WCAG AAA standards for body and interface text.

### Surface Tiers
- **surface-base (`#14171C`)**: The foundational canvas for the entire viewport.
- **surface-card (`#1B2027`)**: Primary container level for project items, code blocks, and structured groups.
- **surface-card-hover (`#222832`)**: Interactive state elevating cards on cursor proximity or focus.
- **surface-code (`#0F1216`)**: Deepest recessed container, reserved specifically for inline shell sessions and Python terminal outputs.

### Borders & Dividers
- **border-muted (`#29303D`)**: Structural framing for cards, section lines, and subtle horizontal rules.
- **border-subtle (`#1F242D`)**: Secondary interior dividers within complex cards.
- **amber-border (`rgba(227, 160, 8, 0.35)`)**: Focused emphasis for active states, tags, and selected project nodes.

### Accents & Status
- **amber-primary (`#E3A008`)**: The primary kinetic focal point. Used for interactive buttons, active tab indicators, and critical metadata highlights.
- **amber-hover (`#F5B014`)**: Direct interaction state providing subtle luminosity without halo bloom.
- **amber-subtle-bg (`rgba(227, 160, 8, 0.12)`)**: Low-energy contextual fill used behind skill pills, status badges, and inline key variables.

### Text Contrast Tiers
- **text-primary (`#EDEFF2`)**: Near-white, delivering an intentional 13.5:1 contrast against `surface-base` for effortless sustained reading.
- **text-secondary (`#A3ADBB`)**: Slate-grey for descriptive copy, metadata annotations, and context notes (exceeding 6.5:1 ratio).
- **text-muted (`#6D7786`)**: Strictly for inactive icons, timestamp brackets, and structural punctuation.

## Typography

The typographic hierarchy establishes tension between the warmth of a bookish editorial serif and the technical precision of a monospaced terminal font, mediated by a hyper-legible sans-serif for working prose.

1. **Headlines (`Newsreader`)**: Warm, humanist, and literary. Headlines evoke serious academic essays and monographs. It frames engineering work with maturity, treating case studies as documented investigations rather than flashy product pitches.
2. **Body (`Inter`)**: Neutral, transparent, and legible at small sizes. Used across personal narratives, long-form project summaries, and structural content.
3. **Labels & Metadata (`JetBrains Mono`)**: Strict, technical, and rhythmic. Applied deliberately and exclusively to technological tags (e.g., `PyTorch`, `FastAPI`), performance metrics (e.g., `latency: 42ms`, `params: 7B`), Git commit hashes, section numberings (`01 //`, `02 //`), and raw code snippets.

## Layout & Spacing

The layout philosophy balances spacious editorial storytelling with compact, information-dense technical overviews.

### Two-Paced Spacing Model
- **Airy Rhythm (Hero, Statement, Contact)**: Employs wide vertical padding (`space-3xl` to `space-4xl`) and generous body line-heights within a constrained reading measure (`container-reading`, max 680px). This forces intentional pacing, welcoming recruiters and collaborators with an open, unhurried reading experience.
- **Dense Structural Rhythm (Projects & Architecture Breakdowns)**: Shifts into an information-dense, multi-column grid with compact padding (`space-md` to `space-lg`). Content conforms to an inspectable layout: system architecture, tech stacks, input/output data, and live links arranged side-by-side without excess vertical scroll travel.

### Grid Architecture
- **Desktop (>= 1024px)**: 12-column grid within a max-width of `68rem` (1088px), centered with `gutter-desktop` margin padding. Project cards span 6 columns (2-up) or 12 columns for featured deep-dives.
- **Tablet (768px - 1023px)**: 8-column layout. Project grids drop from 2-up to structured single-column entries when technical metadata requires horizontal room.
- **Mobile (< 768px)**: 4 columns with `gutter-mobile` edge padding. Horizontal metadata tags wrap into compact pill-stacks.

## Elevation & Depth

Visual hierarchy avoids drop shadows, fuzzy glows, and faux 3D physics. Elevation is communicated entirely through tonal stratification and micro-borders:

1. **Base Plane**: `surface-base` (`#14171C`) sits as the root background layer.
2. **Container Tier**: Cards, technical sidebars, and input surfaces sit directly on `surface-card` (`#1B2027`) framed by a razor-thin 1px solid stroke of `border-muted` (`#29303D`).
3. **Hover & Interactive Elevation**: Hover states do not project shadows outward; instead, they brighten the container fill to `surface-card-hover` (`#222832`) and crisp the stroke toward `amber-border` or `text-secondary`.
4. **Recessed Sub-containers**: Code blocks, performance metrics, and console samples recess beneath the card plane into `surface-code` (`#0F1216`) with a 1px inset border of `border-subtle` (`#1F242D`).

## Shapes

The design system adopts a soft, disciplined geometry (`roundedness: 1`). Radius scales remain restrained to reinforce technical precision:

- **Base Surfaces & Cards**: `0.25rem` (4px). Clean, precise corners that avoid the casual look of heavy curves while softening harsh geometric wireframes.
- **Buttons & Interactive Elements**: `0.25rem` (4px) or `0.375rem` (6px) maximum.
- **Skill Badges & Metadata Chips**: `0.25rem` (4px).
- **Interactive Badges**: Strictly squared-soft rectangles—circular pill chips are avoided to preserve the terminal-like, modular feel.

## Components

### Buttons
- **Primary Action**: Solid `amber-primary` (`#E3A008`) fill with `#14171C` dark ink text (`label-md`, font weight 600). Hover state shifts fill to `amber-hover` (`#F5B014`). No drop shadows. Focused state provides a 2px offset border in `amber-primary`.
- **Secondary / Ghost**: Transparent fill, 1px solid `border-muted`, `text-primary`. On hover, background shifts to `surface-card` and border brightens to `text-secondary`.
- **Inline Text Link**: Underlined text in `amber-primary` with 2px underline offset. Transitions smoothly to `amber-hover` on pointer hover.

### Chips & Skill Badges
- Constructed exclusively with `JetBrains Mono` at `label-sm`.
- Static/Display variant: `amber-subtle-bg` background, 1px border of `amber-border`, text in `amber-primary`.
- Neutral Metadata variant: `surface-card-hover` background, 1px border of `border-muted`, text in `text-secondary`.
- Internal padding: `0.2rem 0.5rem`.

### Project Cards
- Background: `surface-card` (`#1B2027`).
- Border: 1px solid `border-muted` (`#29303D`).
- Layout: Structured header featuring project title (`headline-sm`), monospaced year/role label, concise 2-line problem statement (`body-sm`), embedded architecture diagram or terminal preview block, and a footer cluster of skill chips paired with external GitHub/demo link anchors.
- Hover Behavior: Transition background color to `surface-card-hover` (`#222832`) and outline color to `amber-border` over 150ms.

### Form Inputs & Textareas
- Background: `surface-code` (`#0F1216`).
- Border: 1px solid `border-muted`.
- Text: `text-primary` (`Inter`, 1rem).
- Placeholder: `text-muted`.
- Focus State: Border snaps to `amber-primary` with a zero-blur outline ring `rgba(227, 160, 8, 0.2)`.

### Code & Terminal Displays
- Background: `surface-code` (`#0F1216`).
- Border: 1px solid `border-muted`.
- Top header: 32px height containing minimal dot markers or file path notation (e.g., `pipeline/train.py`) in `label-sm` (`#A3ADBB`).
- Text: `JetBrains Mono` with high-contrast syntax highlighting preserving deep amber for keywords/functions and soft slate for parameters and comments.

### Section Headers
- Prefixed with monospaced numerical indexing: `01 //`, `02 //` in `label-md` colored in `amber-primary`.
- Followed by the section title in `Newsreader` (`headline-lg`), separated from the content by a full-bleed 1px `border-muted` divider.