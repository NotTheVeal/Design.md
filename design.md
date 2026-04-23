---
name: PartsSource Design System
version: "1.2"
description: Design tokens and visual language for PartsSource — an enterprise B2B platform for healthcare equipment parts procurement and service management.

colors:
  # Primitive scale (Token Studio source of truth)
  blue-50: "#D0EEFC"       # Light Blue
  blue-100: "#DCEAED"      # Airway
  blue-200: "#009CF4"      # Cyan
  blue-500: "#005BA7"      # PS Blue — primary brand
  blue-700: "#004884"      # Blue 2 — hover / active pressed
  blue-800: "#003763"      # Blue 3
  blue-900: "#002F48"      # Midnight
  teal-400: "#03D0BF"      # Teal
  teal-500: "#87AFB8"      # Jetstream
  green-100: "#DCFAEF"     # Light Green
  green-300: "#8BD5BC"     # Green 2
  green-500: "#17AB78"     # Signal Green
  red-100: "#FCC8C8"       # Light Red
  red-500: "#FF0000"       # Alert Red
  amber-100: "#FFF4D0"     # Light Amber
  amber-400: "#E3A92D"     # Amber
  amber-500: "#FF9505"     # Orange
  neutral-0: "#FFFFFF"     # White
  neutral-50: "#FAFAFA"    # Grey 7
  neutral-100: "#F1F1F1"   # Grey 6
  neutral-200: "#DCDCDC"   # Grey 5
  neutral-300: "#CCCCCC"   # Grey 4
  neutral-400: "#949494"   # Grey 3
  neutral-500: "#777777"   # Grey 2
  neutral-700: "#4A4A4A"   # Grey 1
  neutral-1000: "#000000"  # Black
  # Semantic aliases
  primary: "#005BA7"
  primaryHover: "#004884"
  white: "#FFFFFF"
  black: "#000000"
  grey1: "#4A4A4A"
  grey2: "#777777"
  grey3: "#949494"
  grey4: "#CCCCCC"
  grey5: "#DCDCDC"
  grey6: "#F1F1F1"
  textSecondary: "#5C5C5C"
  iconDefault: "#09121F"
  inputOutline: "#D2D2D2"
  softFill: "#F0F0F0"
  modalFill: "#FAFAFA"
  selectedFill: "#EFF9FE"
  selectedBorder: "#6AC7FC"
  positive: "#17AB78"
  positiveLight: "#DCFAEF"
  negative: "#FF0000"
  negativeLight: "#FCC8C8"
  warning: "#E3A92D"
  warningLight: "#FFF4D0"
  orange: "#FF9505"
  lightBlue: "#D0EEFC"
  cyan: "#009CF4"

typography:
  h1:
    fontFamily: "Source Sans Pro"
    fontSize: "30px"
    fontWeight: "300"
    lineHeight: "36px"
    letterSpacing: "0em"
  h2:
    fontFamily: "Source Sans Pro"
    fontSize: "24px"
    fontWeight: "300"
    lineHeight: "30px"
    letterSpacing: "0em"
  h3:
    fontFamily: "Source Sans Pro"
    fontSize: "20px"
    fontWeight: "600"
    lineHeight: "24px"
    letterSpacing: "0em"
  h1-mobile:
    fontFamily: "Source Sans Pro"
    fontSize: "26px"
    fontWeight: "300"
    lineHeight: "32px"
    letterSpacing: "0em"
  h2-mobile:
    fontFamily: "Source Sans Pro"
    fontSize: "22px"
    fontWeight: "300"
    lineHeight: "28px"
    letterSpacing: "0em"
  h3-mobile:
    fontFamily: "Source Sans Pro"
    fontSize: "18px"
    fontWeight: "400"
    lineHeight: "22px"
    letterSpacing: "0em"
  body:
    fontFamily: "Source Sans Pro"
    fontSize: "16px"
    fontWeight: "400"
    lineHeight: "22px"
    letterSpacing: "-0.01em"
  body-emphasized:
    fontFamily: "Source Sans Pro"
    fontSize: "16px"
    fontWeight: "600"
    lineHeight: "22px"
    letterSpacing: "-0.01em"
  body-sm:
    fontFamily: "Source Sans Pro"
    fontSize: "14px"
    fontWeight: "400"
    lineHeight: "18px"
    letterSpacing: "-0.01em"
  body-sm-emphasized:
    fontFamily: "Source Sans Pro"
    fontSize: "14px"
    fontWeight: "600"
    lineHeight: "18px"
    letterSpacing: "-0.01em"
  button-lg:
    fontFamily: "Source Sans Pro"
    fontSize: "16px"
    fontWeight: "600"
    lineHeight: "20px"
    letterSpacing: "0em"
  button-md:
    fontFamily: "Source Sans Pro"
    fontSize: "14px"
    fontWeight: "600"
    lineHeight: "18px"
    letterSpacing: "0em"
  button-sm:
    fontFamily: "Source Sans Pro"
    fontSize: "12px"
    fontWeight: "600"
    lineHeight: "16px"
    letterSpacing: "0em"

spacing:
  # Token Studio numeric scale (4px base)
  "0": "0"
  "1": "4px"
  "2": "8px"
  "3": "12px"
  "4": "16px"
  "5": "20px"
  "6": "24px"
  "8": "32px"
  "10": "40px"
  "12": "48px"
  "14": "56px"
  "16": "64px"
  "20": "80px"
  "24": "96px"
  # Semantic aliases
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "40px"

rounded:
  none: "0"
  sm: "2px"
  md: "4px"
  lg: "6px"
  xl: "8px"
  2xl: "12px"
  pill: "20px"
  full: "9999px"

components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.white}"
    typography: "{typography.button-md}"
    rounded: "{rounded.lg}"
    padding: "{spacing.sm} {spacing.md}"
  button-primary-hover:
    backgroundColor: "{colors.primaryHover}"
    textColor: "{colors.white}"
    typography: "{typography.button-md}"
    rounded: "{rounded.lg}"
    padding: "{spacing.sm} {spacing.md}"
  button-primary-disabled:
    backgroundColor: "{colors.grey4}"
    textColor: "{colors.white}"
    typography: "{typography.button-md}"
    rounded: "{rounded.lg}"
    padding: "{spacing.sm} {spacing.md}"
  button-secondary:
    backgroundColor: "{colors.softFill}"
    textColor: "{colors.black}"
    typography: "{typography.button-md}"
    rounded: "{rounded.lg}"
    padding: "{spacing.sm} {spacing.md}"
  button-secondary-hover:
    backgroundColor: "{colors.grey5}"
    textColor: "{colors.black}"
    typography: "{typography.button-md}"
    rounded: "{rounded.lg}"
    padding: "{spacing.sm} {spacing.md}"
  button-outline:
    backgroundColor: "{colors.white}"
    textColor: "{colors.primary}"
    typography: "{typography.button-md}"
    rounded: "{rounded.lg}"
    padding: "{spacing.sm} {spacing.md}"
  button-outline-hover:
    backgroundColor: "{colors.lightBlue}"
    textColor: "{colors.primary}"
    typography: "{typography.button-md}"
    rounded: "{rounded.lg}"
    padding: "{spacing.sm} {spacing.md}"
  input-field:
    backgroundColor: "{colors.white}"
    textColor: "{colors.black}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.lg}"
    padding: "{spacing.sm}"
  input-field-focus:
    backgroundColor: "{colors.white}"
    textColor: "{colors.black}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.lg}"
    padding: "{spacing.sm}"
  input-field-disabled:
    backgroundColor: "{colors.grey6}"
    textColor: "{colors.grey2}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.lg}"
    padding: "{spacing.sm}"
  table-header:
    backgroundColor: "{colors.grey6}"
    textColor: "{colors.black}"
    typography: "{typography.body-sm-emphasized}"
  table-row:
    backgroundColor: "{colors.white}"
    textColor: "{colors.black}"
    typography: "{typography.body-sm}"
  table-row-hover:
    backgroundColor: "{colors.grey6}"
    textColor: "{colors.black}"
    typography: "{typography.body-sm}"
  tab-active:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.white}"
    typography: "{typography.body-sm-emphasized}"
    rounded: "{rounded.lg}"
    padding: "6px 12px"
  tab-inactive:
    backgroundColor: "{colors.white}"
    textColor: "{colors.textSecondary}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.lg}"
    padding: "6px 12px"
  accordion-header:
    backgroundColor: "{colors.white}"
    textColor: "{colors.black}"
    typography: "{typography.body-sm-emphasized}"
    padding: "{spacing.md} {spacing.lg}"
    height: "61px"
  chip:
    backgroundColor: "{colors.lightBlue}"
    textColor: "{colors.primary}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.lg}"
    padding: "2px {spacing.sm}"
  chip-active:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.white}"
    typography: "{typography.body-sm-emphasized}"
    rounded: "{rounded.lg}"
    padding: "2px {spacing.sm}"
  badge-positive:
    backgroundColor: "{colors.positive}"
    textColor: "{colors.white}"
    typography: "{typography.button-sm}"
    rounded: "{rounded.lg}"
    padding: "{spacing.1} {spacing.2}"
  badge-negative:
    backgroundColor: "{colors.negative}"
    textColor: "{colors.white}"
    typography: "{typography.button-sm}"
    rounded: "{rounded.lg}"
    padding: "{spacing.1} {spacing.2}"
  badge-neutral:
    backgroundColor: "{colors.grey5}"
    textColor: "{colors.grey1}"
    typography: "{typography.button-sm}"
    rounded: "{rounded.lg}"
    padding: "{spacing.1} {spacing.2}"
  modal:
    backgroundColor: "{colors.white}"
    textColor: "{colors.black}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.lg}"
    padding: "24px 32px"
    width: "600px"
  modal-header:
    backgroundColor: "{colors.white}"
    textColor: "{colors.black}"
    typography: "{typography.h1}"
    padding: "24px 32px 16px"
  modal-line-item:
    backgroundColor: "{colors.modalFill}"
    textColor: "{colors.grey1}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.lg}"
    height: "62px"
  modal-line-item-selected:
    backgroundColor: "{colors.selectedFill}"
    textColor: "{colors.grey1}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.lg}"
    height: "62px"
  sheet:
    backgroundColor: "{colors.white}"
    textColor: "{colors.black}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.none}"
    padding: "24px 32px"
    width: "480px"
  sheet-header:
    backgroundColor: "{colors.white}"
    textColor: "{colors.black}"
    typography: "{typography.h3}"
    height: "72px"
    padding: "0 32px"
  sheet-footer:
    backgroundColor: "{colors.white}"
    textColor: "{colors.black}"
    typography: "{typography.button-md}"
    height: "80px"
    padding: "0 32px"
---

## Overview

PartsSource is an enterprise B2B platform for healthcare equipment parts procurement and service management. The design language is utilitarian, data-dense, and trust-focused — built for clinical and supply chain professionals who need clarity and efficiency, not decoration.

The visual identity centers on **PS Blue (#005BA7)**, a reliable, authoritative blue that signals precision and professionalism in a regulated industry. Interfaces are light, structured, and conservative — white backgrounds with subtle grey scaffolding, tight spacing, and restrained border radius communicate a serious tool that respects the user's workflow.

**Design principles:**
- **Clarity over creativity** — data is the hero; UI scaffolding recedes
- **Density with breathing room** — pack information efficiently, never cramped
- **Trustworthy defaults** — every state (hover, active, disabled) feels deliberate, not accidental
- **Consistent affordances** — blue always means interactive; grey always means supporting or disabled

## Colors

**Primary (`#005BA7`)** — PS Blue. The single interactive color across the entire system. Use for: primary CTAs, active tabs, links, focused input borders, breadcrumbs, and interactive icons. Hover/pressed state uses `primaryHover` (`#004884`). Never use decoratively.

**Neutrals** form the scaffolding of every screen:
- `grey6` (`#F1F1F1`) and `grey5` (`#DCDCDC`) — backgrounds and subtle separators
- `grey4` (`#CCCCCC`) — borders and dividers
- `grey3` (`#949494`) — de-emphasized icons and placeholder text
- `grey2` (`#777777`) and `textSecondary` (`#5C5C5C`) — supporting text and metadata
- `grey1` (`#4A4A4A`) — subheadings and emphasized secondary text
- `black` (`#000000`) — primary text
- `white` (`#FFFFFF`) — page and card backgrounds

**Surface colors:**
- `modalFill` (`#FAFAFA`) — modal content area background
- `selectedFill` (`#EFF9FE`) — selected row highlight in modals and selection lists
- `selectedBorder` (`#6AC7FC`) — border on selected rows in modals and selection lists

**Semantic colors:**
- `positive` (`#17AB78`) — success states, confirmations, positive data indicators
- `positiveLight` (`#DCFAEF`) — positive surface tint
- `negative` (`#FF0000`) — errors, destructive actions, negative data indicators
- `negativeLight` (`#FCC8C8`) — negative surface tint
- `warning` (`#E3A92D`) — caution states, time-sensitive alerts
- `warningLight` (`#FFF4D0`) — warning surface tint
- `lightBlue` (`#D0EEFC`) — chip idle background; tint complementary to PS Blue

**Extended palette** (use only in designated contexts):
- `cyan` (`#009CF4`) — transactional interactions, notifications
- `orange` (`#FF9505`) — high-urgency status indicators
- `teal-400` (`#03D0BF`) / `teal-500` (`#87AFB8`) — Jetstream/brand complementary contexts
- `blue-800` (`#003763`) / `blue-900` (`#002F48`) — deep blue for data visualization or dark surface contexts only
- Data Visualization, Formulary, and PS Plus+ Rewards colors — do not use outside their designated workflows

**Color rules:**
- Blue on white for all primary interactive elements and links
- Dark grey on white for body copy; secondary grey for metadata
- `grey6` backgrounds to group and separate content sections
- Never use blue as a large background fill — it is an accent, not a surface color
- Never repurpose semantic colors (positive/negative/warning) for decoration

## Typography

PartsSource uses **Source Sans Pro** exclusively — a humanist sans-serif designed for legibility at small sizes, ideal for dense data tables and form interfaces. Inter is available for UI chrome only.

**Heading scale — Desktop:**

| Token | Size | Weight | Line Height | Usage |
|---|---|---|---|---|
| `h1` | 30px | 300 Light | 36px | Page titles, major section headers, modal titles |
| `h2` | 24px | 300 Light | 30px | Section titles, modal headers |
| `h3` | 20px | 600 SemiBold | 24px | Panel headers, card titles, sheet titles, emphasized section labels |

**Heading scale — Mobile/Tablet (≤768px):**

| Token | Size | Weight | Line Height |
|---|---|---|---|
| `h1-mobile` | 26px | 300 Light | 32px |
| `h2-mobile` | 22px | 300 Light | 28px |
| `h3-mobile` | 18px | 400 Regular | 22px |

**Body and UI scale:**

| Token | Size | Weight | Line Height | Usage |
|---|---|---|---|---|
| `body` | 16px | 400 Regular | 22px | Default prose, descriptions, modal body content |
| `body-emphasized` | 16px | 600 SemiBold | 22px | Highlighted body content |
| `body-sm` | 14px | 400 Regular | 18px | Table cells, form labels, metadata, modal field text |
| `body-sm-emphasized` | 14px | 600 SemiBold | 18px | Table headers, section titles |
| `button-lg` | 16px | 600 SemiBold | 20px | Large CTAs |
| `button-md` | 14px | 600 SemiBold | 18px | Standard buttons |
| `button-sm` | 12px | 600 SemiBold | 16px | Compact actions, inline controls, badges |

H1 and H2 use **Light (300)** to create visual openness at large sizes. H3 uses **SemiBold (600)** because it sits close to body text size and needs weight to read as a heading. Never use weights lighter than 300 or heavier than 600.

## Layout

Interfaces are organized into **sections** (full-width rows) and **panels** (contained cards or inset regions). Tables are the primary layout pattern for list-type data; accordions group related data under collapsible section headers.

**Spacing scale (4px base):**

| Alias | Value | Token Studio | Usage |
|---|---|---|---|
| `xs` | 4px | `spacing.1` | Icon padding, badge padding |
| `sm` | 8px | `spacing.2` | Inline gaps between sibling elements |
| `md` | 16px | `spacing.4` | Internal component padding, form row gaps |
| `lg` | 24px | `spacing.6` | Section internal padding, modal/sheet section gaps |
| `xl` | 40px | `spacing.10` | Separation between major page sections |

**Density targets:**
- Table rows: 44–48px height
- Accordion headers: 61px height
- Form fields: ~36px height
- Button (medium): ~34px height
- Modal line items: 62px height

**Responsive breakpoints:**
- Mobile/Tablet: ≤768px — mobile heading scale, single-column layouts, bottom sheets instead of side sheets
- Desktop: >768px — desktop heading scale, multi-column layouts with sidebar panels

## Elevation & Depth

Depth is used sparingly — only to communicate layering for interactive or floating elements.

| Token | Value | Usage |
|---|---|---|
| hover | `0px 4px 11px rgba(110,110,110,0.25)` | Row or card hover lift |
| shadow-sm | `0px 1px 4px rgba(0,47,72,0.08)` | Subtle surface lift |
| shadow-md | `0px 2px 10px rgba(0,47,72,0.10)` | Modals, popovers, dropdowns |
| shadow-lg | `0px 6px 20px rgba(0,47,72,0.18)` | Overlays, bottom sheets |

Never apply shadows to static layout containers or table structures. Shadow signals interactivity and layering only.

## Shapes

Border radius uses a stepped scale from the Token Studio:

| Token | Value | Usage |
|---|---|---|
| `rounded.none` | 0 | Tables, accordion headers, section containers, full-width rows, sheets |
| `rounded.sm` | 2px | Subtle rounding for dense inline elements |
| `rounded.md` | 4px | Small tags, compact inputs |
| `rounded.lg` | 6px | Buttons, inputs, chips, cards, modals, modal line items, badges |
| `rounded.xl` | 8px | Large cards, prominent containers |
| `rounded.2xl` | 12px | Large surface elements |
| `rounded.pill` | 20px | Pill-shaped status indicators |
| `rounded.full` | 9999px | Avatar circles |

Interactive controls (buttons, inputs, chips, modals) use **`rounded.lg` (6px)**. Structural containers (tables, accordions, sheets, page sections) use **`rounded.none` (0px)**. Never use radii between `lg` and `pill` — stay on the defined scale.

## Components

### Buttons

**Primary** — PS Blue (`#005BA7`) background, white text, `rounded.lg`, `button-md` type. The single most important CTA per screen. Hover darkens to `primaryHover` (`#004884`). Disabled state uses `grey4` background.

**Secondary** — Soft grey (`softFill`) background, black text. Same shape as primary. Use alongside primary for alternative actions. Never use as a sole CTA.

**Outline** — White background, PS Blue border and text. For tertiary actions or contexts where the grey fill would disappear into the background.

### Input Fields

White background, `inputOutline` border at rest, `primary` border on focus, `rounded.lg`, `body-sm` type. Disabled state uses `grey6` background and `grey2` text. Always pair with a visible label — never rely on placeholder text alone.

### Data Table

- **Header row** — `grey6` background, `body-sm-emphasized`, left-aligned, `rounded.none`
- **Body rows** — white background, `body-sm`, bottom border in `grey5`
- **Hover** — `grey6` row highlight, no border change, no shadow
- **Footer** — row count (e.g., "1–32 of 48"), page number pills, rows-per-page selector
- **Search** — inline search input above the table, paired with action buttons

### Tabs

Active tab: `primary` background, white `body-sm-emphasized` text, `rounded.lg`. Inactive: white/transparent, `textSecondary`, `body-sm`. Count badges appear inline in the tab label (e.g., "In Progress 48").

### Accordion

61px header, white background, left drag handle icon, right chevron for expand/collapse. Title in `body-sm-emphasized`. Content expands below with left indentation. Groups related data panels (e.g., "Parts And Service Events").

### Chips

Idle state: `lightBlue` (`#D0EEFC`) background, `primary` text, `rounded.lg`. Active state: `primary` background, white text. Used for filter tags, status indicators, and category labels.

### Badges / Status

Three semantic variants — `badge-positive` (Signal Green), `badge-negative` (Alert Red), `badge-neutral` (grey). All use `button-sm` type, `rounded.lg`, tight padding. Use to reflect order status (Ordered, Backordered, Returned, etc.). Never repurpose semantic badge colors for non-semantic decoration.

### Modal

Modals interrupt the current flow to demand focused attention. Use them for critical decisions, quick data entry, confirmations, and information display. Avoid for complex multi-step workflows or large forms — use sheets instead.

**Structure:**
- **Container** — white background (`#FFFFFF`), `rounded.lg` (6px), `shadow-md` elevation, semi-transparent overlay backdrop
- **Max widths** — 850px absolute max; 600px desktop/tablet default; 375px mobile
- **Padding** — 32px horizontal, 24px vertical
- **Header** — `h1` type (Source Sans Pro Light 30px), close button (X) top-right, minimum 44×44px touch target
- **Subtitle** — `body-sm` type, `grey1` (`#4A4A4A`) color, placed directly below title
- **Divider** — full-width `grey6` (`#F1F1F1`) line separating header from body content
- **Content area** — `modalFill` (`#FAFAFA`) background; 32px gap from divider to first content element

**Modal types:**
- **Confirmation** — Destructive or irreversible actions (delete, remove, reject). Require explicit user consent. Use `negative` color cues for destructive primary CTAs.
- **Form** — Quick data entry without leaving context (add item, edit details, enter PO number). 2–5 fields maximum; larger forms belong in a sheet.
- **Information** — Display details, help text, onboarding flows, feature announcements, asset detail previews. Body content uses `body` or `body-sm` type with standard paragraph spacing.
- **Selection** — Choose from lists, multi-select items (e.g., nudge approver selection, quote option selection). Uses line-item rows with selectable states.
- **Media** — Image galleries, document previews, focused views. Content fills the modal body.
- **Warning** — Alert users to errors, system status, required actions, or time-sensitive issues.

**Line items (data modals):**
- Width: 785px within the modal container
- Height: 62px per row, 18px gap between rows
- Background: `modalFill` (`#FAFAFA`), `rounded.lg`
- Layout: flex with `justify-between`
- Field typography: `body-sm` (14px Regular); button labels: `button-sm` (12px SemiBold)
- Hover state: `grey6` background
- Selected state: `selectedFill` (`#EFF9FE`) background, `selectedBorder` (`#6AC7FC`) border
- Divider between rows: `grey6` (`#F1F1F1`)

**Informational / content modals:**
- Body text: `body` (16px) for primary content, `body-sm` for supporting details
- Max 2–3 short paragraphs; if more content is needed, link to a dedicated page
- Use `grey6` dividers between sections when grouping multiple content blocks
- Images and media fill the modal body edge-to-edge (no padding)

**CTA footer:**
- Sticky to the bottom of the modal
- Button order (right to left): Primary action → Secondary action → Cancel/Close
- Never place Cancel visually equal to the primary CTA
- Primary: filled `button-primary`; Cancel/Close: text link or `button-secondary`

**Accessibility:**
- `role="dialog"`, `aria-modal="true"`, `aria-labelledby` pointing to title
- Focus trap within modal; auto-focus first interactive element on open
- ESC to close; TAB to cycle; ENTER to submit
- Backdrop click closes (unless critical confirmation)
- Lock body scroll; return focus to trigger element on close
- Z-index: 1000+

### Sheet / Drawer

Sheets slide in from the right (desktop) or bottom (mobile) and overlay the page without fully blocking it. Use for complex workflows, multi-step forms, detailed editing, filter panels, and content previews where the user may need to reference the underlying page.

**Structure:**
- **Container** — white background, `rounded.none`, full viewport height (100vh), fixed right edge
- **Default width** — 480px (desktop); full-screen on mobile
- **Wide sheet** — 640px for multi-column forms or detailed content
- **Narrow sheet** — 320px for simple lists, filters, or navigation menus
- **Padding** — 32px horizontal, 24px vertical (consistent with modals)
- **Overlay** — semi-transparent backdrop `rgba(0,0,0,0.4–0.6)`, click to close

**Internal structure:**
- **Header (fixed)** — 64–72px height; `h3` title (20px SemiBold); optional subtitle/breadcrumb; X close button top-right
- **Subheader (optional)** — tabs, progress indicator, or status badge below title; separated by `grey6` divider
- **Body (scrollable)** — forms, lists, content sections; 24px between major sections, 16px between form fields
- **Footer (sticky)** — 72–80px height; primary action right, secondary/cancel left; separated by `grey6` divider

**Animations:**
- Entry: slide in from right (desktop), slide up from bottom (mobile); 300–400ms cubic-bezier easing
- Exit: slide out to right/down; 250–300ms; fade overlay simultaneously
- Mobile drag handle: 4×32px rounded bar at top; swipe-to-dismiss

**When to use sheets vs modals:**

| Use Modals For | Use Sheets For |
|---|---|
| Quick confirmations | Multi-step forms or detailed editing |
| Simple forms (2–5 fields) | Complex filter panels, settings panels |
| Critical alerts | Content previews (documents, profiles) |
| Single-choice selections | Workflows that reference main content |
| Short information displays | Navigation menus, progressive disclosure |

**Accessibility:**
- `role="dialog"` or `role="complementary"` for navigation sheets
- Focus trap within sheet; ESC to close; TAB/SHIFT+TAB to navigate
- Touch targets: minimum 44×44px; color contrast: 4.5:1 text, 3:1 UI components
- Z-index: 1100–1200 (above modals if stacking is required)

## Do's and Don'ts

**Do:**
- Use `primary` (`#005BA7`) for all interactive affordances — links, buttons, active states, focused borders
- Use `body-sm` (14px/Regular) for table and form content — optimized for data density
- Use `grey6` to group and separate content sections visually
- Use `rounded.none` for structural containers and `rounded.lg` for interactive controls
- Use Light (300) for H1/H2 and SemiBold (600) for H3 to maintain clear visual hierarchy
- Apply the hover shadow only on lift interactions, never statically on layout
- Use Verb–Subject labels for all CTAs; signal risk level in label copy for destructive actions
- Provide visible X close button (min 44×44px) on all modals and sheets; always support ESC to dismiss
- Use sheets for complex workflows that need context retention; use modals for focused, single-task interactions
- Show 2–3 action buttons maximum per modal footer; enforce primary → secondary → cancel hierarchy

**Don't:**
- Don't use PS Blue as a large background fill — it overwhelms data-dense interfaces
- Don't use font weights outside 300–600 — extremes fail at clinical screen densities
- Don't use border radii outside the defined `rounded` scale — stay on `none`, `sm`, `md`, `lg`, `xl`, `2xl`, `pill`, or `full`
- Don't stack multiple primary buttons — enforce hierarchy: primary + secondary or primary + outline
- Don't omit visible labels on form fields — placeholder text disappears on input and fails accessibility
- Don't apply shadows to static containers — shadow signals interactivity and elevation only
- Don't use Data Visualization, Formulary, or Plus+ Rewards palettes outside their designated contexts
- Don't use nested modals — never stack a modal on a modal; redesign the flow
- Don't use verb-only CTAs for high-risk actions — "Purchase" and "Reject" alone lack consequence clarity
- Don't make destructive CTAs icon-only — always include visible label text
- Don't open modals or sheets on page load without user action (except critical system alerts)

## CTA Language Standards

All call-to-action labels across PartsSource follow a **Verb–Subject** format (e.g., "View Details", "Submit Work Order", "Add to Cart"). This reduces cognitive load, aligns with user mental models, and ensures scannability in dense operational interfaces.

**Standard patterns:**
- `"View Details"` — opens a single record or item (card → detail view)
- `"View All [Object]"` — navigates to a full list or collection (section → list)
- `"[Verb] [Object]"` — for workflow or task-based actions (e.g., "Submit Work Order", "Approve Event", "Print Label")

**Approved verb taxonomy:**

| Intent | Approved Verbs | When to Use | Avoid |
|---|---|---|---|
| Navigate / Explore | View, Open, Explore | Dashboards, cards, tables | See, Show, More |
| Review / Evaluate | Review, Compare, Inspect | Quotes, approvals, analytics | Info |
| Take Action | Add, Enter, Submit, Schedule | Forms, carts, service requests | Continue, Proceed |
| Commit / Purchase | Purchase, Place Order, Checkout | Final steps only | Add (when committing) |
| Destructive | Remove, Decline, Delete | Must signal risk | Icon-only |

**Risk signaling:**

| Risk Level | CTA Requirement |
|---|---|
| Low | Standard Verb + Object ("View Asset") |
| Medium | Verb + outcome clarity ("Review Quote") |
| High | Verb + consequence cue ("Delete List – Cannot Undo") |

**Approved exceptions** (do not flag as non-compliant):
- `Edit` — inline utility affordance
- `Back` — navigation utility
- `Cancel` — escape/abort action
- `Submit`, `Save`, `Print` — industry-standard short forms
- `View Details` — approved navigation affordance

**Modal CTA ordering** (right to left in the footer):
1. Primary action (Save, Purchase, Confirm, Approve)
2. Secondary action (Print, Download)
3. Escape action (Cancel, Close)

Never place Cancel or Close visually equal to the primary CTA. Never use destructive CTAs as icon-only — always include a visible text label.

**Anti-patterns to eliminate:**
- Verb-only CTAs: "Purchase", "Reject", "Continue"
- Noun-only CTAs: "Options", "More", "Details" (except "View Details")
- Slang or internal terms: "Nudge" (use "Send Reminder")
- Symbol-reliant labels: "Enter PO#" (use "Enter PO Number"), "Enter Tracking #" (use "Enter Return Tracking")
- Generic step labels: "See More", "Show All" (use "View All [Object]")
