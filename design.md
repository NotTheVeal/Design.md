---
colors:
  brand:
    psBlue: "#005BA6"
    black: "#000000"
    white: "#FFFFFF"
  neutrals:
    grey1: "#4A4A4A"
    grey2: "#777777"
    grey4: "#CCCCCC"
    grey5: "#DCDCDC"
    grey6: "#F1F1F1"
  text:
    primary: "#000000"
    secondary: "#5C5C5C"
    icon: "#09121F"
  ui:
    inputOutline: "#D2D2D2"
    softFill: "#F0F0F0"

typography:
  fontFamily: "Source Sans Pro, sans-serif"
  scales:
    bodySmall:
      fontFamily: "Source Sans Pro"
      fontSize: "14px"
      fontWeight: 400
      lineHeight: "18px"
      letterSpacing: "-0.01em"
    bodySmallBold:
      fontFamily: "Source Sans Pro"
      fontSize: "14px"
      fontWeight: 600
      lineHeight: "18px"
      letterSpacing: "-0.01em"
    body:
      fontFamily: "Source Sans Pro"
      fontSize: "16px"
      fontWeight: 400
      lineHeight: "1"
      letterSpacing: "-0.01em"
    buttonLarge:
      fontFamily: "Source Sans Pro"
      fontSize: "16px"
      fontWeight: 600
      lineHeight: "20px"
      letterSpacing: "0"
    buttonMedium:
      fontFamily: "Source Sans Pro"
      fontSize: "14px"
      fontWeight: 600
      lineHeight: "18px"
      letterSpacing: "0"
    buttonSmall:
      fontFamily: "Source Sans Pro"
      fontSize: "12px"
      fontWeight: 600
      lineHeight: "16px"
      letterSpacing: "0"

spacing:
  xs: "5px"
  sm: "10px"
  md: "15px"

rounded:
  none: "0px"
  sm: "5px"

components:
  buttonPrimary:
    backgroundColor: "{colors.brand.psBlue}"
    textColor: "{colors.brand.white}"
    typography: "{typography.scales.buttonMedium}"
    rounded: "{rounded.sm}"
    padding: "8px 16px"
  buttonPrimaryHover:
    backgroundColor: "#004A8C"
    textColor: "{colors.brand.white}"
    typography: "{typography.scales.buttonMedium}"
    rounded: "{rounded.sm}"
  buttonSecondary:
    backgroundColor: "{colors.ui.softFill}"
    textColor: "{colors.text.primary}"
    typography: "{typography.scales.buttonMedium}"
    rounded: "{rounded.sm}"
    padding: "8px 16px"
  buttonOutline:
    backgroundColor: "{colors.brand.white}"
    textColor: "{colors.brand.psBlue}"
    typography: "{typography.scales.buttonMedium}"
    rounded: "{rounded.sm}"
    padding: "8px 16px"
  inputField:
    backgroundColor: "{colors.brand.white}"
    textColor: "{colors.text.primary}"
    typography: "{typography.scales.bodySmall}"
    rounded: "{rounded.sm}"
    borderColor: "{colors.ui.inputOutline}"
    padding: "8px 10px"
  inputFieldFocused:
    backgroundColor: "{colors.brand.white}"
    textColor: "{colors.text.primary}"
    typography: "{typography.scales.bodySmall}"
    rounded: "{rounded.sm}"
    borderColor: "{colors.brand.psBlue}"
  tableHeader:
    backgroundColor: "{colors.neutrals.grey6}"
    textColor: "{colors.text.primary}"
    typography: "{typography.scales.bodySmallBold}"
  tableRow:
    backgroundColor: "{colors.brand.white}"
    textColor: "{colors.text.primary}"
    typography: "{typography.scales.bodySmall}"
  tableRowHover:
    backgroundColor: "{colors.neutrals.grey6}"
    textColor: "{colors.text.primary}"
    typography: "{typography.scales.bodySmall}"
  accordionSection:
    backgroundColor: "{colors.brand.white}"
    textColor: "{colors.text.primary}"
    typography: "{typography.scales.bodySmallBold}"
    borderColor: "{colors.neutrals.grey5}"
    padding: "16px 26px"
  tabActive:
    backgroundColor: "{colors.brand.psBlue}"
    textColor: "{colors.brand.white}"
    typography: "{typography.scales.bodySmallBold}"
    rounded: "{rounded.sm}"
  tabInactive:
    backgroundColor: "{colors.brand.white}"
    textColor: "{colors.text.secondary}"
    typography: "{typography.scales.bodySmall}"
    rounded: "{rounded.sm}"
---

## Overview

PartsSource is an enterprise B2B platform for healthcare equipment parts procurement and service management. The design language is utilitarian, data-dense, and trust-focused — built for clinical and supply chain professionals who need clarity and efficiency, not decoration.

The visual identity centers on **PS Blue (#005BA6)**, a reliable, authoritative blue that signals precision and professionalism in a regulated industry. Interfaces are light, structured, and conservative — white backgrounds with subtle grey scaffolding, tight spacing, and restrained border radius communicate a serious tool that respects the user's workflow.

**Design principles:**
- **Clarity over creativity** — data is the hero; UI scaffolding recedes
- **Density with breathing room** — pack information efficiently, but never let it feel cramped
- **Trustworthy defaults** — every state (hover, active, disabled) should feel deliberate, not accidental
- **Consistent affordances** — blue always means interactive; grey always means supporting or disabled

## Colors

**PS Blue** (`#005BA6`) is the primary brand color. Use it for: primary CTAs, active tabs, links, focused input borders, breadcrumbs, and interactive icons. Never use it for decorative purposes.

**Neutrals** form the scaffolding of every screen. Grey 6 (`#F1F1F1`) and Grey 5 (`#DCDCDC`) are for backgrounds and subtle separators. Grey 4 (`#CCCCCC`) is for borders and dividers. Grey 2 (`#777777`) and Text/Secondary (`#5C5C5C`) are for supporting text and metadata. Grey 1 (`#4A4A4A`) is for subheadings and emphasized secondary text.

**Black** (`#000000`) is primary text. **White** (`#FFFFFF`) is page and card backgrounds.

**Color usage rules:**
- Blue on white for primary actions and links
- Dark grey on white for body copy
- Light grey backgrounds to group and separate content sections
- Never use blue as a background for large areas — it's an accent color

## Typography

PartsSource uses **Source Sans Pro** exclusively. It is a humanist sans-serif designed for legibility at small sizes — ideal for dense data tables and form interfaces.

| Style | Weight | Size | Line Height | Letter Spacing | Usage |
|---|---|---|---|---|---|
| Body | Regular 400 | 16px | 100% | -0.01em | Default prose, descriptions |
| Body Small | Regular 400 | 14px | 18px | -0.01em | Table cells, labels, metadata |
| Body Small Bold | SemiBold 600 | 14px | 18px | -0.01em | Table headers, section titles, emphasized labels |
| Button Large | SemiBold 600 | 16px | 20px | 0 | Large CTAs |
| Button Medium | SemiBold 600 | 14px | 18px | 0 | Standard buttons |
| Button Small | SemiBold 600 | 12px | 16px | 0 | Compact action buttons, inline controls |
| Button Inline | SemiBold 600 | 14px | — | 0 | Text-only clickable actions in content |

SemiBold (600) is the primary weight for buttons and interactive labels. Regular (400) is for all body content. Never use lighter weights in the UI — they reduce legibility on dense screens.

## Layout

Interfaces are organized into **sections** (full-width rows) and **panels** (contained cards or inset regions). Tables are the primary layout pattern for list-type data; accordions group related data under collapsible section headers.

**Spacing scale:**
- `xs` = 5px — tight insets, icon padding, badge padding
- `sm` = 10px — inline gaps between elements
- `md` = 15px — internal component padding, row gaps

**Grid:**
- Content areas use a flexible column layout — no fixed grid imposed across all screens
- Sidebar/filter panels sit to the left of main content
- Table columns are defined by content type, not a fixed column count

**Density:**
- Table rows: ~44–48px height (label + padding)
- Accordion headers: 61px height
- Form fields: ~36px height

## Elevation & Depth

Depth is used sparingly — only to communicate layering (modals, dropdowns, hover states).

| Token | Value | Usage |
|---|---|---|
| Hover shadow | `0px 4px 11px #6E6E6E40` | Card/row hover feedback |
| Shadow MD | `0px 6px 12px -2px #15151514, 0px 2px 8px -2px #15151514` | Modals, popovers, dropdowns |

Use shadows only on interactive surfaces that lift on hover, or on floating elements (menus, tooltips, modals). Never apply shadows to static layout containers.

## Shapes

Border radius is minimal and consistent:

| Token | Value | Usage |
|---|---|---|
| `rounded-none` | 0px | Tables, section headers, full-width containers |
| `rounded-sm` | 5px | Buttons, input fields, badges, chips, cards |

The design language is predominantly **square-cornered** — most structural elements (tables, accordions, page sections) use no radius. The 5px radius is reserved for interactive controls and small contained elements. Never use large corner radii (>5px) — they conflict with the enterprise, utilitarian aesthetic.

## Components

### Primary Button
Blue background (`#005BA6`), white text, `rounded-sm` (5px), `bodySmallBold` / `buttonMedium` type. This is the single most important CTA on any screen. Use sparingly — one primary button per section. Hover darkens to `#004A8C`.

### Secondary / Gray Button
Soft grey fill (`#F0F0F0`), black text, same shape as primary. Use for secondary or alternative actions alongside a primary button. Never use grey buttons as the sole CTA on a screen.

### Outline Button
White background, PS Blue border and text. Use for tertiary actions or in contexts where a grey fill would disappear into the background.

### Input Field
White background, `#D2D2D2` border at rest, PS Blue border on focus, `rounded-sm`. Placeholder and label text in Grey 2 / Secondary. Error state uses a red border (define in semantic tokens). Always pair with a visible label — never rely on placeholder alone.

### Data Table
- **Header row:** Grey 6 background, Body Small Bold text, left-aligned
- **Body rows:** White background, Body Small text, subtle bottom border in Grey 5
- **Hover state:** Grey 6 row highlight — no shadow, no border change
- **Columns:** Facility, MO, Ref#, PO#, Price, Status, Order#, Description — column width driven by content
- **Pagination:** Show count ("1-32 of 48"), page number pills, rows-per-page selector in the footer
- **Search:** Inline search input above the table, full-width or right-aligned

### Tabs
Active tab uses PS Blue background with white text, `rounded-sm`. Inactive tabs are white/transparent with Secondary text. Tabs sit above the table and filter its content. Count badges (e.g. "In Progress 48") appear inline inside the tab label using a small numeral.

### Accordion Section
61px tall header, white background, left drag handle icon, right chevron for expand/collapse state. Section title in Body Small Bold. Content expands below with left indentation. Used to group related data panels (e.g. "Parts And Service Events").

### Badge / Count Chip
Small inline pill. Uses `rounded-sm` (5px). Blue for active/primary states, grey for neutral counts, context-appropriate color for status (ordered, backordered, etc.). Body Small Bold text inside.

## Do's and Don'ts

**Do:**
- Use PS Blue for all interactive affordances — links, buttons, active states, focused borders
- Use Body Small (14px) for table and form content — it's optimized for density
- Use Grey 6 (`#F1F1F1`) to visually separate sections and group related content
- Keep border radius at 0px for structural containers and 5px for interactive controls
- Apply the hover shadow only on lift interactions — never statically
- Pair primary actions with clear supporting secondary or text actions

**Don't:**
- Don't use blue as a fill for large background regions — it overwhelms the data
- Don't use font weights lighter than Regular (400) — they fail at 14px on clinical screens
- Don't apply corner radii > 5px — it breaks the utilitarian visual language
- Don't stack multiple primary (blue) buttons — use hierarchy: primary + secondary or primary + outline
- Don't omit labels on form fields — placeholder text disappears on input and reduces accessibility
- Don't add decorative shadows to static layout containers — shadow signals interactivity
