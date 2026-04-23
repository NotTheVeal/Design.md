---
name: PartsSource Design System
version: "1.0"
description: Design tokens and visual language for PartsSource — an enterprise B2B platform for healthcare equipment parts procurement and service management.

colors:
  primary: "#005BA6"
  black: "#000000"
  white: "#FFFFFF"
  grey1: "#4A4A4A"
  grey2: "#777777"
  grey4: "#CCCCCC"
  grey5: "#DCDCDC"
  grey6: "#F1F1F1"
  textSecondary: "#5C5C5C"
  iconDefault: "#09121F"
  inputOutline: "#D2D2D2"
  softFill: "#F0F0F0"
  # Semantic — positive/negative hex values to be confirmed via PS Color System Figma library
  positive: "#2E7D32"
  negative: "#C62828"
  accent: "#0277BD"
  lightBlue: "#E3F2FD"

typography:
  h1:
    fontFamily: "Source Sans Pro"
    fontSize: "30px"
    fontWeight: 300
    lineHeight: "36px"
    letterSpacing: "0em"
  h2:
    fontFamily: "Source Sans Pro"
    fontSize: "24px"
    fontWeight: 300
    lineHeight: "30px"
    letterSpacing: "0em"
  h3:
    fontFamily: "Source Sans Pro"
    fontSize: "20px"
    fontWeight: 600
    lineHeight: "24px"
    letterSpacing: "0em"
  h1-mobile:
    fontFamily: "Source Sans Pro"
    fontSize: "26px"
    fontWeight: 300
    lineHeight: "32px"
    letterSpacing: "0em"
  h2-mobile:
    fontFamily: "Source Sans Pro"
    fontSize: "22px"
    fontWeight: 300
    lineHeight: "28px"
    letterSpacing: "0em"
  h3-mobile:
    fontFamily: "Source Sans Pro"
    fontSize: "18px"
    fontWeight: 400
    lineHeight: "22px"
    letterSpacing: "0em"
  body:
    fontFamily: "Source Sans Pro"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: "22px"
    letterSpacing: "-0.01em"
  body-emphasized:
    fontFamily: "Source Sans Pro"
    fontSize: "16px"
    fontWeight: 600
    lineHeight: "22px"
    letterSpacing: "-0.01em"
  body-sm:
    fontFamily: "Source Sans Pro"
    fontSize: "14px"
    fontWeight: 400
    lineHeight: "18px"
    letterSpacing: "-0.01em"
  body-sm-emphasized:
    fontFamily: "Source Sans Pro"
    fontSize: "14px"
    fontWeight: 600
    lineHeight: "18px"
    letterSpacing: "-0.01em"
  button-lg:
    fontFamily: "Source Sans Pro"
    fontSize: "16px"
    fontWeight: 600
    lineHeight: "20px"
    letterSpacing: "0em"
  button-md:
    fontFamily: "Source Sans Pro"
    fontSize: "14px"
    fontWeight: 600
    lineHeight: "18px"
    letterSpacing: "0em"
  button-sm:
    fontFamily: "Source Sans Pro"
    fontSize: "12px"
    fontWeight: 600
    lineHeight: "16px"
    letterSpacing: "0em"

spacing:
  xs: "5px"
  sm: "10px"
  md: "15px"
  lg: "24px"
  xl: "40px"

rounded:
  none: "0px"
  sm: "5px"
  full: "9999px"

components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.white}"
    typography: "{typography.button-md}"
    rounded: "{rounded.sm}"
    padding: "{spacing.sm} {spacing.md}"
  button-primary-hover:
    backgroundColor: "#004A8C"
    textColor: "{colors.white}"
    typography: "{typography.button-md}"
    rounded: "{rounded.sm}"
    padding: "{spacing.sm} {spacing.md}"
  button-primary-disabled:
    backgroundColor: "{colors.grey4}"
    textColor: "{colors.white}"
    typography: "{typography.button-md}"
    rounded: "{rounded.sm}"
    padding: "{spacing.sm} {spacing.md}"
  button-secondary:
    backgroundColor: "{colors.softFill}"
    textColor: "{colors.black}"
    typography: "{typography.button-md}"
    rounded: "{rounded.sm}"
    padding: "{spacing.sm} {spacing.md}"
  button-secondary-hover:
    backgroundColor: "{colors.grey5}"
    textColor: "{colors.black}"
    typography: "{typography.button-md}"
    rounded: "{rounded.sm}"
    padding: "{spacing.sm} {spacing.md}"
  button-outline:
    backgroundColor: "{colors.white}"
    textColor: "{colors.primary}"
    typography: "{typography.button-md}"
    rounded: "{rounded.sm}"
    padding: "{spacing.sm} {spacing.md}"
  button-outline-hover:
    backgroundColor: "{colors.lightBlue}"
    textColor: "{colors.primary}"
    typography: "{typography.button-md}"
    rounded: "{rounded.sm}"
    padding: "{spacing.sm} {spacing.md}"
  input-field:
    backgroundColor: "{colors.white}"
    textColor: "{colors.black}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.sm}"
    padding: "{spacing.sm}"
  input-field-focus:
    backgroundColor: "{colors.white}"
    textColor: "{colors.black}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.sm}"
    padding: "{spacing.sm}"
  input-field-disabled:
    backgroundColor: "{colors.grey6}"
    textColor: "{colors.grey2}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.sm}"
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
    rounded: "{rounded.sm}"
    padding: "6px 12px"
  tab-inactive:
    backgroundColor: "{colors.white}"
    textColor: "{colors.textSecondary}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.sm}"
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
    rounded: "{rounded.sm}"
    padding: "2px {spacing.sm}"
  chip-active:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.white}"
    typography: "{typography.body-sm-emphasized}"
    rounded: "{rounded.sm}"
    padding: "2px {spacing.sm}"
  badge-positive:
    backgroundColor: "{colors.positive}"
    textColor: "{colors.white}"
    typography: "{typography.button-sm}"
    rounded: "{rounded.sm}"
    padding: "2px 6px"
  badge-negative:
    backgroundColor: "{colors.negative}"
    textColor: "{colors.white}"
    typography: "{typography.button-sm}"
    rounded: "{rounded.sm}"
    padding: "2px 6px"
  badge-neutral:
    backgroundColor: "{colors.grey5}"
    textColor: "{colors.grey1}"
    typography: "{typography.button-sm}"
    rounded: "{rounded.sm}"
    padding: "2px 6px"
---

## Overview

PartsSource is an enterprise B2B platform for healthcare equipment parts procurement and service management. The design language is utilitarian, data-dense, and trust-focused — built for clinical and supply chain professionals who need clarity and efficiency, not decoration.

The visual identity centers on **PS Blue (#005BA6)**, a reliable, authoritative blue that signals precision and professionalism in a regulated industry. Interfaces are light, structured, and conservative — white backgrounds with subtle grey scaffolding, tight spacing, and restrained border radius communicate a serious tool that respects the user's workflow.

**Design principles:**
- **Clarity over creativity** — data is the hero; UI scaffolding recedes
- **Density with breathing room** — pack information efficiently, never cramped
- **Trustworthy defaults** — every state (hover, active, disabled) feels deliberate, not accidental
- **Consistent affordances** — blue always means interactive; grey always means supporting or disabled

## Colors

**Primary (`#005BA6`)** — PS Blue. The single interactive color across the entire system. Use for: primary CTAs, active tabs, links, focused input borders, breadcrumbs, and interactive icons. Never use decoratively.

**Neutrals** form the scaffolding of every screen:
- `grey6` (`#F1F1F1`) and `grey5` (`#DCDCDC`) — backgrounds and subtle separators
- `grey4` (`#CCCCCC`) — borders and dividers
- `grey2` (`#777777`) and `textSecondary` (`#5C5C5C`) — supporting text and metadata
- `grey1` (`#4A4A4A`) — subheadings and emphasized secondary text
- `black` (`#000000`) — primary text
- `white` (`#FFFFFF`) — page and card backgrounds

**Semantic colors:**
- `positive` — confirmations, success states, positive data indicators
- `negative` — errors, destructive actions, negative data indicators
- `accent` — transactional interactions, notifications
- `lightBlue` (`#E3F2FD`) — chip idle/normal state background; tint complementary to PS Blue

**Additional palettes** (full values in PS Color System Figma library):
- **Tints/Complementary** — light blue variants complementary to PS Blue for chip and highlight use
- **Tertiary Representations** — supporting brand colors for secondary contexts
- **Data Visualization** — distinct hues for chart series, never re-used for semantic meaning
- **Formulary** — colors specific to formulary and catalog workflows
- **PS Plus+ Rewards** — exclusive palette for the Plus+ loyalty program; do not use in standard UI

**Color rules:**
- Blue on white for all primary interactive elements and links
- Dark grey on white for body copy; secondary grey for metadata
- `grey6` backgrounds to group and separate content sections
- Never use blue as a large background fill — it is an accent, not a surface color
- Never use Data Visualization, Formulary, or Plus+ Rewards colors outside their designated contexts

## Typography

PartsSource uses **Source Sans Pro** exclusively — a humanist sans-serif designed for legibility at small sizes, ideal for dense data tables and form interfaces.

**Heading scale — Desktop:**

| Token | Size | Weight | Line Height | Usage |
|---|---|---|---|---|
| `h1` | 30px | 300 Light | 36px | Page titles, major section headers |
| `h2` | 24px | 300 Light | 30px | Section titles, modal headers |
| `h3` | 20px | 600 SemiBold | 24px | Panel headers, card titles, emphasized section labels |

**Heading scale — Mobile/Tablet (≤768px):**

| Token | Size | Weight | Line Height |
|---|---|---|---|
| `h1-mobile` | 26px | 300 Light | 32px |
| `h2-mobile` | 22px | 300 Light | 28px |
| `h3-mobile` | 18px | 400 Regular | 22px |

**Body and UI scale:**

| Token | Size | Weight | Line Height | Usage |
|---|---|---|---|---|
| `body` | 16px | 400 Regular | 22px | Default prose, descriptions |
| `body-emphasized` | 16px | 600 SemiBold | 22px | Highlighted body content |
| `body-sm` | 14px | 400 Regular | 18px | Table cells, form labels, metadata |
| `body-sm-emphasized` | 14px | 600 SemiBold | 18px | Table headers, section titles |
| `button-lg` | 16px | 600 SemiBold | 20px | Large CTAs |
| `button-md` | 14px | 600 SemiBold | 18px | Standard buttons |
| `button-sm` | 12px | 600 SemiBold | 16px | Compact actions, inline controls, badges |

H1 and H2 use **Light (300)** to create visual openness at large sizes. H3 uses **SemiBold (600)** because it sits close to body text size and needs weight to read as a heading. Never use weights lighter than 300 or heavier than 600.

## Layout

Interfaces are organized into **sections** (full-width rows) and **panels** (contained cards or inset regions). Tables are the primary layout pattern for list-type data; accordions group related data under collapsible section headers.

**Spacing scale:**
- `xs` = 5px — icon padding, badge padding, tight insets
- `sm` = 10px — inline gaps between sibling elements
- `md` = 15px — internal component padding, form row gaps
- `lg` = 24px — section internal padding, card spacing
- `xl` = 40px — separation between major page sections

**Density targets:**
- Table rows: 44–48px height
- Accordion headers: 61px height
- Form fields: ~36px height
- Button (medium): ~34px height

**Responsive breakpoints:**
- Mobile/Tablet: ≤768px — mobile heading scale, single-column layouts
- Desktop: >768px — desktop heading scale, multi-column layouts with sidebar panels

## Elevation & Depth

Depth is used sparingly — only to communicate layering for interactive or floating elements.

| Token | Value | Usage |
|---|---|---|
| hover | `0px 4px 11px rgba(110,110,110,0.25)` | Row or card hover lift |
| shadow-md | `0px 6px 12px -2px rgba(21,21,21,0.08), 0px 2px 8px -2px rgba(21,21,21,0.08)` | Modals, popovers, dropdowns |

Never apply shadows to static layout containers or table structures. Shadow signals interactivity and layering only.

## Shapes

Border radius is minimal and intentional:

| Token | Value | Usage |
|---|---|---|
| `rounded-none` | 0px | Tables, accordion headers, section containers, full-width rows |
| `rounded-sm` | 5px | Buttons, inputs, badges, chips, cards, modals |
| `rounded-full` | 9999px | Avatar circles, pill indicators only |

The system is predominantly **square-cornered** — structural containers use 0px radius. The 5px radius applies to interactive controls and small contained elements. The pill radius is reserved for avatars and rare pill-shaped indicators. Never use corner radii between 5px and 9999px.

## Components

### Buttons

**Primary** — PS Blue background, white text, `rounded-sm`, `button-md` type. The single most important CTA per screen. Hover darkens to `#004A8C`. Disabled state uses `grey4` background.

**Secondary** — Soft grey (`softFill`) background, black text. Same shape as primary. Use alongside primary for alternative actions. Never use as a sole CTA.

**Outline** — White background, PS Blue border and text. For tertiary actions or contexts where the grey fill would disappear into the background.

### Input Fields

White background, `inputOutline` border at rest, `primary` border on focus, `rounded-sm`, `body-sm` type. Disabled state uses `grey6` background and `grey2` text. Always pair with a visible label — never rely on placeholder text alone.

### Data Table

- **Header row** — `grey6` background, `body-sm-emphasized`, left-aligned, `rounded-none`
- **Body rows** — white background, `body-sm`, bottom border in `grey5`
- **Hover** — `grey6` row highlight, no border change, no shadow
- **Footer** — row count (e.g., "1–32 of 48"), page number pills, rows-per-page selector
- **Search** — inline search input above the table, paired with action buttons

### Tabs

Active tab: `primary` background, white `body-sm-emphasized` text, `rounded-sm`. Inactive: white/transparent, `textSecondary`, `body-sm`. Count badges appear inline in the tab label (e.g., "In Progress 48").

### Accordion

61px header, white background, left drag handle icon, right chevron for expand/collapse. Title in `body-sm-emphasized`. Content expands below with left indentation. Groups related data panels (e.g., "Parts And Service Events").

### Chips

Idle state: `lightBlue` background, `primary` text, `rounded-sm`. Active state: `primary` background, white text. Used for filter tags, status indicators, and category labels.

### Badges / Status

Three semantic variants — `badge-positive` (green), `badge-negative` (red), `badge-neutral` (grey). All use `button-sm` type, `rounded-sm`, tight padding. Use to reflect order status (Ordered, Backordered, Returned, etc.). Never repurpose semantic badge colors for non-semantic decoration.

## Do's and Don'ts

**Do:**
- Use `primary` (PS Blue) for all interactive affordances — links, buttons, active states, focused borders
- Use `body-sm` (14px/Regular) for table and form content — optimized for data density
- Use `grey6` to group and separate content sections visually
- Use `rounded-none` for structural containers and `rounded-sm` for interactive controls
- Use Light (300) for H1/H2 and SemiBold (600) for H3 to maintain clear visual hierarchy
- Apply the hover shadow only on lift interactions, never statically on layout

**Don't:**
- Don't use PS Blue as a large background fill — it overwhelms data-dense interfaces
- Don't use font weights outside 300–600 — extremes fail at clinical screen densities
- Don't use corner radii between 5px and 9999px — stay on the defined scale only
- Don't stack multiple primary buttons — enforce hierarchy: primary + secondary or primary + outline
- Don't omit visible labels on form fields — placeholder text disappears on input and fails accessibility
- Don't apply shadows to static containers — shadow signals interactivity and elevation only
- Don't use Data Visualization, Formulary, or Plus+ Rewards palettes outside their designated contexts
