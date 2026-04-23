---
designMdVersion: alpha
name: PartsSource
version: 2.0.0

colors:
  # --- Primary brand (blues) ---
  ps-blue:    "#005BA6"   # Product names, links, footer, focused inputs, breadcrumbs
  blue-2:     "#004A84"   # Darker PS Blue variant
  blue-3:     "#003763"   # Darkest variant (navy surfaces, footer)
  azure-blue: "#009CF4"   # Informational highlight

  # --- CTA ramp (orange) ---
  orange-1: "#FF9505"   # Primary CTA default
  orange-2: "#EC8000"   # Primary CTA hover
  orange-3: "#D27200"   # Primary CTA pressed

  # --- Secondary / notification ---
  orange-4:   "#FFCA82"   # Warning / notification chip
  orange-5:   "#FFE4C0"   # Warning / notification background
  green-1:    "#17AB78"   # Success confirmation
  green-2:    "#8BD5BC"   # Success background / subdued
  red:        "#FF0000"   # Error
  light-red:  "#FACBCB"   # Error background / subdued
  light-blue: "#D0EDFC"   # Info background / subdued

  # --- Grayscale (text & UI) ---
  black:  "#000000"
  grey-1: "#4A4A4A"
  grey-2: "#777777"
  grey-3: "#949494"
  grey-4: "#CCCCCC"
  grey-5: "#DCDCDC"
  grey-6: "#F1F1F1"
  grey-7: "#FAFAFA"
  white:  "#FFFFFF"

  # --- PS Plus+ Rewards (reserved) ---
  plus-teal: "#00CBB7"
  plus-blue: "#005499"

  # --- Formulary rating ramp (Best → Poor) ---
  formulary-best:      "#29A10F"
  formulary-very-good: "#03C700"
  formulary-moderate:  "#E9E022"
  formulary-fair:      "#F58B00"
  formulary-poor:      "#DE3700"

  # --- Data visualization (charts / dashboards) ---
  viz-headers:             "#000000"
  viz-neutral-01:          "#005BA6"
  viz-neutral-accent-01:   "#009CF4"
  viz-positive:            "#17AB78"
  viz-negative:            "#FF0000"
  viz-active:              "#FFCA82"
  viz-comparison-02:       "#777777"
  viz-comparison-light-02: "#004A84"
  viz-neutral:             "#B0C6D3"

  # --- Semantic aliases (use these in components, not raw palette tokens) ---
  brand-primary:       "{colors.ps-blue}"
  brand-deep:          "{colors.blue-2}"
  brand-darkest:       "{colors.blue-3}"
  action-default:      "{colors.orange-1}"
  action-hover:        "{colors.orange-2}"
  action-pressed:      "{colors.orange-3}"
  info:                "{colors.azure-blue}"
  info-background:     "{colors.light-blue}"
  success:             "{colors.green-1}"
  success-background:  "{colors.green-2}"
  warning:             "{colors.orange-4}"
  warning-background:  "{colors.orange-5}"
  error:               "{colors.red}"
  error-background:    "{colors.light-red}"
  text-primary:        "{colors.black}"
  text-body:           "{colors.grey-1}"
  text-secondary:      "{colors.grey-2}"
  text-assistive:      "{colors.grey-3}"
  text-disabled:       "{colors.grey-3}"
  text-on-brand:       "{colors.white}"
  text-on-action:      "{colors.white}"
  link:                "{colors.ps-blue}"
  border-input:        "{colors.grey-4}"
  border-subtle:       "{colors.grey-5}"
  border-divider:      "{colors.grey-6}"
  surface-base:        "{colors.white}"
  surface-subtle:      "{colors.grey-7}"
  surface-muted:       "{colors.grey-6}"
  overlay-scrim:       "rgba(0, 0, 0, 0.5)"

typography:
  fontFamily:
    sans: "'Source Sans Pro', sans-serif"

  fontWeight:
    light:    300
    regular:  400
    semibold: 600
    bold:     700
    black:    900

  # --- Desktop scale ---
  desktop-header-00:
    fontFamily:  "{typography.fontFamily.sans}"
    fontSize:    34px
    fontWeight:  "{typography.fontWeight.light}"
    lineHeight:  40px
  desktop-header-01:
    fontFamily:  "{typography.fontFamily.sans}"
    fontSize:    30px
    fontWeight:  "{typography.fontWeight.light}"
    lineHeight:  34px
  desktop-header-02:
    fontFamily:  "{typography.fontFamily.sans}"
    fontSize:    24px
    fontWeight:  "{typography.fontWeight.light}"
    lineHeight:  28px
  desktop-header-03:
    fontFamily:  "{typography.fontFamily.sans}"
    fontSize:    24px
    fontWeight:  "{typography.fontWeight.regular}"
    lineHeight:  28px
  desktop-header-04:
    fontFamily:  "{typography.fontFamily.sans}"
    fontSize:    24px
    fontWeight:  "{typography.fontWeight.semibold}"
    lineHeight:  28px
  desktop-body-01:
    fontFamily:  "{typography.fontFamily.sans}"
    fontSize:    16px
    fontWeight:  "{typography.fontWeight.regular}"
    lineHeight:  22px
  desktop-body-02:
    fontFamily:  "{typography.fontFamily.sans}"
    fontSize:    16px
    fontWeight:  "{typography.fontWeight.bold}"
    lineHeight:  22px
  desktop-micro:
    fontFamily:  "{typography.fontFamily.sans}"
    fontSize:    12px
    fontWeight:  "{typography.fontWeight.regular}"
    lineHeight:  16px

  # --- Mobile scale ---
  mobile-header-01:
    fontFamily:  "{typography.fontFamily.sans}"
    fontSize:    26px
    fontWeight:  "{typography.fontWeight.light}"
    lineHeight:  26px
  mobile-header-02:
    fontFamily:  "{typography.fontFamily.sans}"
    fontSize:    22px
    fontWeight:  "{typography.fontWeight.light}"
    lineHeight:  24px
  mobile-header-03:
    fontFamily:  "{typography.fontFamily.sans}"
    fontSize:    18px
    fontWeight:  "{typography.fontWeight.regular}"
    lineHeight:  20px
  mobile-header-04:
    fontFamily:  "{typography.fontFamily.sans}"
    fontSize:    18px
    fontWeight:  "{typography.fontWeight.semibold}"
    lineHeight:  20px
  mobile-body-01:
    fontFamily:  "{typography.fontFamily.sans}"
    fontSize:    14px
    fontWeight:  "{typography.fontWeight.regular}"
    lineHeight:  18px
  mobile-body-02:
    fontFamily:  "{typography.fontFamily.sans}"
    fontSize:    14px
    fontWeight:  "{typography.fontWeight.bold}"
    lineHeight:  18px
  mobile-micro:
    fontFamily:  "{typography.fontFamily.sans}"
    fontSize:    12px
    fontWeight:  "{typography.fontWeight.regular}"
    lineHeight:  18px

spacing:
  # 8-step scale — only these values are allowed.
  0:  0px
  1:  2px    # Minimal
  2:  4px    # Tight
  3:  8px    # Small
  4:  16px   # Medium
  5:  24px   # Large
  6:  32px   # Section
  7:  48px   # Page
  8:  64px   # Major section

radii:
  # Three values only. Any other radius requires design-system approval.
  operational: 4px     # Dense, high-frequency surfaces: buttons, inputs, chips, right-rail cards, alerts
  structural:  8px     # Primary content surfaces: detail cards, modals, tables, accordions, page containers
  expressive:  100px   # Pill buttons, selectable chips — emphasis only

breakpoints:
  mobile-small:   360px
  mobile-medium:  550px
  tablet:         768px
  tablet-large:   820px
  desktop-small:  1150px
  desktop-medium: 1440px
  desktop-large:  1630px
  desktop-xl:     1920px

elevation:
  # Shadow scale is a known gap — see the Elevation and Depth section below.
  # Z-index and overlay tokens here are the authored primitives.
  z-base:     0
  z-sticky:   100
  z-modal:    1000
  z-sheet:    1100
  z-popover:  1200
  overlay-modal:  "rgba(0, 0, 0, 0.5)"
  overlay-sheet:  "rgba(0, 0, 0, 0.5)"
  backdrop-blur:  8px

motion:
  # Timings captured from the Modal / Sheet spec; formal motion system not yet codified.
  duration-fast:     200ms
  duration-medium:   300ms
  duration-slow:     400ms
  easing-standard:   "cubic-bezier(0.4, 0.0, 0.2, 1)"

components:
  # --- Primary CTA button (Verb–Subject labels only; see Do's and Don'ts) ---
  button-primary:
    background:  "{colors.action-default}"
    text:        "{colors.text-on-action}"
    fontFamily:  "{typography.fontFamily.sans}"
    fontWeight:  "{typography.fontWeight.semibold}"
    fontSize:    14px
    paddingX:    "{spacing.4}"
    paddingY:    "{spacing.3}"
    radius:      "{radii.operational}"
    minHeight:   44px
  button-primary-hover:
    background:  "{colors.action-hover}"
    text:        "{colors.text-on-action}"
  button-primary-pressed:
    background:  "{colors.action-pressed}"
    text:        "{colors.text-on-action}"
  button-primary-focus:
    background:  "{colors.action-default}"
    text:        "{colors.text-on-action}"
    outline:     2px
    outlineColor: "{colors.ps-blue}"
    outlineOffset: 2px
  button-primary-disabled:
    background:  "{colors.grey-4}"
    text:        "{colors.grey-2}"

  # --- Primary CTA — large / small variants (horizontal padding by size) ---
  button-primary-large:
    paddingX:  "{spacing.5}"
    paddingY:  "{spacing.3}"
  button-primary-small:
    paddingX:  12px
    paddingY:  "{spacing.2}"

  # --- Pill button (expressive emphasis only) ---
  button-pill:
    background:  "{colors.action-default}"
    text:        "{colors.text-on-action}"
    fontWeight:  "{typography.fontWeight.semibold}"
    paddingX:    "{spacing.5}"
    paddingY:    "{spacing.3}"
    radius:      "{radii.expressive}"
  button-pill-hover:
    background:  "{colors.action-hover}"
  button-pill-pressed:
    background:  "{colors.action-pressed}"

  # --- Secondary button ---
  button-secondary:
    background:  "{colors.surface-base}"
    text:        "{colors.ps-blue}"
    border:      "{colors.ps-blue}"
    borderWidth: 1px
    fontWeight:  "{typography.fontWeight.semibold}"
    paddingX:    "{spacing.4}"
    paddingY:    "{spacing.3}"
    radius:      "{radii.operational}"
  button-secondary-hover:
    background:  "{colors.light-blue}"
    text:        "{colors.ps-blue}"
  button-secondary-pressed:
    background:  "{colors.grey-6}"
    text:        "{colors.blue-2}"
  button-secondary-disabled:
    background:  "{colors.surface-base}"
    text:        "{colors.grey-3}"
    border:      "{colors.grey-4}"

  # --- Tertiary / link button (inline) ---
  button-link:
    background:  transparent
    text:        "{colors.link}"
    fontWeight:  "{typography.fontWeight.regular}"
    paddingX:    "{spacing.0}"
    paddingY:    "{spacing.0}"
  button-link-hover:
    text:        "{colors.blue-2}"
    textDecoration: underline
  button-link-pressed:
    text:        "{colors.blue-3}"

  # --- Destructive button (Reject / Remove / Decline / Delete) ---
  button-destructive:
    background:  "{colors.surface-base}"
    text:        "{colors.red}"
    border:      "{colors.red}"
    borderWidth: 1px
    fontWeight:  "{typography.fontWeight.semibold}"
    paddingX:    "{spacing.4}"
    paddingY:    "{spacing.3}"
    radius:      "{radii.operational}"
  button-destructive-hover:
    background:  "{colors.light-red}"
    text:        "{colors.red}"

  # --- Segmented button (view/mode toggle) ---
  button-segmented:
    background:  "{colors.surface-subtle}"
    text:        "{colors.text-body}"
    border:      "{colors.grey-4}"
    borderWidth: 1px
    radius:      "{radii.operational}"
    paddingX:    12px
    paddingY:    "{spacing.2}"
  button-segmented-active:
    background:  "{colors.ps-blue}"
    text:        "{colors.text-on-brand}"
    border:      "{colors.ps-blue}"

  # --- Input fields ---
  input-text:
    background:  "{colors.surface-base}"
    text:        "{colors.text-body}"
    border:      "{colors.border-input}"
    borderWidth: 1px
    radius:      "{radii.operational}"
    paddingX:    12px
    paddingY:    "{spacing.2}"
    fontSize:    14px
    fontFamily:  "{typography.fontFamily.sans}"
    minHeight:   40px
  input-text-focus:
    border:      "{colors.ps-blue}"
    outline:     2px
    outlineColor: "{colors.azure-blue}"
  input-text-error:
    border:      "{colors.red}"
  input-text-disabled:
    background:  "{colors.grey-6}"
    text:        "{colors.grey-3}"
    border:      "{colors.grey-5}"

  # --- Filter chip (status chip, non-selectable — operational radius) ---
  chip-status:
    background:  "{colors.grey-6}"
    text:        "{colors.text-body}"
    fontSize:    12px
    fontWeight:  "{typography.fontWeight.semibold}"
    paddingX:    "{spacing.3}"
    paddingY:    "{spacing.1}"
    radius:      "{radii.operational}"
  chip-status-success:
    background:  "{colors.green-2}"
    text:        "{colors.green-1}"
  chip-status-warning:
    background:  "{colors.orange-5}"
    text:        "{colors.orange-2}"
  chip-status-error:
    background:  "{colors.light-red}"
    text:        "{colors.red}"
  chip-status-info:
    background:  "{colors.light-blue}"
    text:        "{colors.blue-2}"

  # --- Filter chip (selectable — expressive radius; see status vs. selectable chip rule in Shapes) ---
  chip-filter:
    background:  "{colors.surface-base}"
    text:        "{colors.text-body}"
    border:      "{colors.grey-4}"
    borderWidth: 1px
    paddingX:    "{spacing.3}"
    paddingY:    "{spacing.1}"
    radius:      "{radii.expressive}"
  chip-filter-selected:
    background:  "{colors.ps-blue}"
    text:        "{colors.text-on-brand}"
    border:      "{colors.ps-blue}"

  # --- Cards ---
  card-detail:           # Primary surface — structural radius (locked 8px)
    background:  "{colors.surface-base}"
    text:        "{colors.text-body}"
    border:      "{colors.border-subtle}"
    borderWidth: 1px
    radius:      "{radii.structural}"
    paddingX:    "{spacing.5}"
    paddingY:    "{spacing.5}"
    headerMarginBottom:  "{spacing.4}"
    contentMarginBottom: "{spacing.5}"
  card-right-rail:       # Utility surface — operational radius (locked 4px)
    background:  "{colors.surface-base}"
    text:        "{colors.text-body}"
    border:      "{colors.border-subtle}"
    borderWidth: 1px
    radius:      "{radii.operational}"
    paddingX:    "{spacing.4}"
    paddingY:    "{spacing.4}"
  card-data-small:       # KPI / summary tile — operational radius
    background:  "{colors.surface-base}"
    border:      "{colors.border-subtle}"
    radius:      "{radii.operational}"
    paddingX:    "{spacing.4}"
    paddingY:    "{spacing.4}"

  # --- Alert card (inline contextual message — operational radius) ---
  alert-info:
    background:  "{colors.info-background}"
    text:        "{colors.blue-2}"
    border:      "{colors.azure-blue}"
    borderWidth: 1px
    radius:      "{radii.operational}"
    paddingX:    "{spacing.4}"
    paddingY:    "{spacing.3}"
  alert-success:
    background:  "{colors.success-background}"
    text:        "{colors.green-1}"
    border:      "{colors.green-1}"
    radius:      "{radii.operational}"
    paddingX:    "{spacing.4}"
    paddingY:    "{spacing.3}"
  alert-warning:
    background:  "{colors.warning-background}"
    text:        "{colors.orange-3}"
    border:      "{colors.orange-2}"
    radius:      "{radii.operational}"
    paddingX:    "{spacing.4}"
    paddingY:    "{spacing.3}"
  alert-error:
    background:  "{colors.error-background}"
    text:        "{colors.red}"
    border:      "{colors.red}"
    radius:      "{radii.operational}"
    paddingX:    "{spacing.4}"
    paddingY:    "{spacing.3}"

  # --- Modal (dialog — structural radius, locked 8px) ---
  modal:
    background:  "{colors.surface-base}"
    text:        "{colors.text-body}"
    radius:      "{radii.structural}"
    paddingX:    "{spacing.6}"    # 32px horizontal
    paddingY:    "{spacing.5}"    # 24px vertical
    maxWidthDesktop: 850px
    maxWidthTablet:  600px
    maxWidthMobile:  375px
    overlay:     "{elevation.overlay-modal}"
    zIndex:      "{elevation.z-modal}"
  modal-header:
    fontFamily:  "{typography.fontFamily.sans}"
    fontSize:    30px
    fontWeight:  "{typography.fontWeight.light}"
    marginBottom: "{spacing.4}"
  modal-subtitle:
    fontSize:    14px
    text:        "{colors.text-body}"
  modal-divider:
    background:  "{colors.border-divider}"
    height:      1px
  modal-line-item:
    width:       785px
    minHeight:   62px
    gap:         18px
    radius:      "{radii.operational}"
  modal-line-item-selected:
    background:  "#EFF9FE"
    border:      "#6AC7FC"
    borderWidth: 1px

  # --- Sheet / drawer (structural radius, slide from right on desktop) ---
  sheet:
    background:  "{colors.surface-base}"
    text:        "{colors.text-body}"
    widthDefault: 480px
    widthWide:    640px
    widthNarrow:  320px
    paddingX:    "{spacing.6}"
    paddingY:    "{spacing.5}"
    headerHeight: 72px
    footerHeight: 80px
    overlay:     "{elevation.overlay-sheet}"
    zIndex:      "{elevation.z-sheet}"
    enterDuration: "{motion.duration-slow}"
    exitDuration:  "{motion.duration-medium}"
  sheet-mobile-bottom:
    dragHandleWidth:  32px
    dragHandleHeight: 4px
    heightCollapsed:  50%
    heightExpanded:   90%
    heightFull:       100%

  # --- Tables (outer container locked 8px; cells flat) ---
  table:
    background:  "{colors.surface-base}"
    text:        "{colors.text-body}"
    border:      "{colors.border-divider}"
    borderWidth: 1px
    radius:      "{radii.structural}"
  table-row:
    borderBottom: "{colors.border-divider}"
    paddingX:    "{spacing.4}"
    paddingY:    "{spacing.3}"
  table-row-hover:
    background:  "{colors.surface-subtle}"
  table-header:
    background:  "{colors.surface-subtle}"
    fontWeight:  "{typography.fontWeight.semibold}"
    text:        "{colors.text-primary}"

  # --- Accordion (structural radius, locked 8px) ---
  accordion:
    background:  "{colors.surface-base}"
    border:      "{colors.border-subtle}"
    borderWidth: 1px
    radius:      "{radii.structural}"
    paddingX:    "{spacing.5}"
    paddingY:    "{spacing.4}"

  # --- Navigation / header ---
  navigation-header:
    background:  "{colors.blue-3}"
    text:        "{colors.text-on-brand}"
    height:      56px
  navigation-sidebar-left:
    background:  "{colors.surface-base}"
    width:       199px
  navigation-sidebar-right:
    background:  "{colors.surface-base}"
    width:       281px

  # --- Formulary rating badges ---
  formulary-badge-best:
    background:  "{colors.formulary-best}"
    text:        "{colors.text-on-brand}"
    radius:      "{radii.operational}"
    paddingX:    "{spacing.3}"
    paddingY:    "{spacing.1}"
  formulary-badge-very-good:
    background:  "{colors.formulary-very-good}"
    text:        "{colors.text-on-brand}"
  formulary-badge-moderate:
    background:  "{colors.formulary-moderate}"
    text:        "{colors.text-primary}"
  formulary-badge-fair:
    background:  "{colors.formulary-fair}"
    text:        "{colors.text-on-brand}"
  formulary-badge-poor:
    background:  "{colors.formulary-poor}"
    text:        "{colors.text-on-brand}"

iconography:
  library: "Lucide React"
  sizeInline: 16px
  sizeButton: 20px
  sizeHeader: 24px
  minClearSpace: 8px

accessibility:
  contrastMinText:   4.5    # WCAG 2.1 AA — 4.5:1 for body text
  contrastMinUI:     3.0    # 3:1 for graphical / UI components
  touchTargetMin:    44px   # Mobile minimum tap target
---

# PartsSource Design System

## Overview

PartsSource is a procurement and service platform for medical equipment parts, trusted by thousands of hospitals. The brand promise — **_Ensuring healthcare is always on_** — is the single idea every visual and verbal decision supports. Users are clinical engineers, HTM leaders, supply-chain managers, and administrators operating under time pressure in regulated, mission-critical environments. Interfaces must be **calm, precise, and confidence-inspiring**: clear over clever, specific over vague, and operational over decorative.

The visual identity is built on a confident navy (**PS Blue** `#005BA6`) paired with a bright action orange (**Orange 1** `#FF9505`). Grayscale carries the heavy lifting for content; notification hues (green, red, orange, azure) signal status without decoration. Typography is a single typeface — **Source Sans Pro** — across all weights and scales. Shape is restrained to three corner radii (4px operational, 8px structural, 100px expressive) so density and emphasis read instantly. Spacing follows an 8-step scale that produces a quiet, readable rhythm even on data-dense dashboards.

The system is consumed by web, tablet, and mobile experiences across eight breakpoints from 360px to 1920px. The default is a three-column dashboard with a fixed navy top bar, a collapsible left menu, a flexible main content area, and a right rail for alerts and context.

## Colors

The palette is organized by **role**, not by hue. Components should reference semantic aliases (e.g., `{colors.action-default}`, `{colors.error}`), not raw palette tokens.

**Primary brand.** `ps-blue` (`#005BA6`) is the single brand hue — product names, links, breadcrumbs, focused input borders, and the footer. `blue-2` (`#004A84`) and `blue-3` (`#003763`) are darker variants used for the navigation header background and deep data-visualization tones. `azure-blue` (`#009CF4`) is reserved for informational accents, never for primary brand signaling.

**Call-to-action ramp.** All primary CTAs use the orange ramp: `orange-1` default, `orange-2` hover, `orange-3` pressed. These three tokens are the entire vocabulary for high-emphasis action — do not introduce other orange values for interactive state.

**Notification / semantic.** Green for success (`green-1` foreground, `green-2` background). Red for error (`red` foreground, `light-red` background). Orange 4/5 for warning and notification. Azure Blue + Light Blue for informational alerts. These pairs are the only approved mappings for alert variants.

**Grayscale.** Black and eight greys step from primary text (`black`) down through secondary text, assistive text, input borders, component outlines, muted surfaces, subtle surfaces, and finally `white`. Avoid sampling arbitrary hex values between these stops.

**PS Plus+ Rewards.** `plus-teal` and `plus-blue` are **reserved** for the Plus+ loyalty program — do not repurpose for general UI.

**Formulary rating.** The five-stop Best → Poor ramp is used exclusively for formulary coverage scoring. Do not overload for other statuses.

**Data visualization.** A separate role-based palette (neutral, accent, positive, negative, active, comparison, neutral-background) drives charts. Several hex values overlap with the main palette but carry distinct semantic roles in chart context.

**Contrast.** Every text/background pair must meet WCAG 2.1 AA — **4.5:1** for body text and **3.0:1** for graphical and UI components. The linter enforces this at token resolution time.

## Typography

**Source Sans Pro** is the only typeface used across the product. Five weights are loaded: 300 (Light), 400 (Regular), 600 (SemiBold), 700 (Bold), and 900 (Black). Reserve **Bold** and **Black** for emphasis and display numerics; body copy is Regular, headings are Light at larger sizes and SemiBold when an emphasized heading is needed.

Two scales are defined: **desktop** (from `desktop-header-00` at 34/40 down to `desktop-micro` at 12/16) and **mobile** (from `mobile-header-01` at 26/26 down to `mobile-micro` at 12/18). Applications should switch scales at the tablet breakpoint — use mobile scale below 768px, desktop scale at and above. Base body size is **14px** on mobile, **16px** on desktop, with line heights in the 1.4–1.5 ratio range for comfortable reading.

Copy itself follows the **Verb–Subject** standard for CTAs (e.g., "Submit Order", "View Details"), avoids vague nouns ("Report"), avoids marketing euphemisms ("seamless", "next-gen"), and explains error messages in three parts: what happened, why, and what to do next. See the Do's and Don'ts section below for the full copy rules.

## Layout and Spacing

**Spacing scale.** Eight values (2px, 4px, 8px, 16px, 24px, 32px, 48px, 64px) cover every padding, margin, and gap in the system. No other values are allowed — arbitrary paddings fragment the rhythm that makes dense dashboards readable.

**Component paddings.**

- **Button horizontal padding** by size: Large 24px, Medium 16px, Small 12px.
- **Card header** has a 16px bottom margin; **card content area** has a 24px bottom margin before actions.
- **List items** use 16px padding per item.
- **Modal** uses 32px horizontal / 24px vertical padding (matches desktop max width 850px, tablet 600px, mobile 375px).
- **Sheet** uses the same 32/24 padding, with header 64–72px fixed and footer 72–80px sticky.

**Overall structure.** Default layout is a three-column dashboard: a 56px navy top bar, a 199px collapsible left sidebar, a flexible main content area, and a 281px right sidebar for alerts and context.

**Breakpoints.** Eight stops from `mobile-small` (360px) through `desktop-xl` (1920px). Adapt by collapsing columns, not by scaling; large screens should increase content width, not introduce additional columns.

**Touch targets.** 44px minimum on mobile — this applies to close buttons, chip dismiss affordances, and any interactive element intended for touch.

## Elevation and Depth

PartsSource does not yet publish a formal shadow token set — this is a known gap in the current export. The elevation primitives that **are** codified come from the modal and sheet specs:

- **Z-index layers.** Base content 0; sticky headers 100; modals 1000+; sheets 1100–1200 when stacked above a modal; popovers 1200.
- **Overlay scrim.** `rgba(0, 0, 0, 0.5)` for both modal and sheet backdrops (spec allows 0.4–0.6). Click-to-dismiss on non-critical dialogs.
- **Optional backdrop blur.** `blur(8px)` on the overlay is permitted for depth perception but should be used sparingly — it is a nice-to-have, not a standard.
- **Motion.** Modal fade-in overlay is 200–300ms; modal content scale/slide on entry matches. Sheet slide-in from right is 300–400ms with cubic-bezier easing; slide-out is 250–300ms. Use `transform` and `opacity` only — avoid triggering layout reflow.

A future pass should add a proper shadow scale (e.g., `shadow-1`, `shadow-2`, `shadow-3`) authored with design; until then, component elevation is implied by background contrast against the page and by the z-index stack.

## Shapes

PartsSource limits corner radius to **three values**. This restraint is load-bearing: it reinforces hierarchy, supports dense enterprise workflows, and prevents styling drift.

- **4px — Operational.** Precision-driven, high-frequency interaction. Buttons, inputs, checkboxes, filter bars, right-rail cards (locked), small data cards, alert banners and alert cards, status chips, modal inline list items.
- **8px — Structural.** Primary content containers. Detail cards (locked), order cards, the outer container of tables (not the cells), accordions, page-level containers, modals.
- **100px — Expressive.** Emphasis and intentional discoverability. **Pill buttons** and **selectable button chips** only.

**Hard rules.**

- No other radii are allowed without design-system approval.
- Radius **does not change across interaction states** — never alter radius on hover, focus, active, disabled, or error. Signal state through color, outline, or scale instead.
- Radius **does not scale across breakpoints** — the same 4/8/100 values apply to desktop, tablet, and mobile.
- **Nested components** may not visually exceed the softness of their container: an 8px container can hold a 4px child (allowed), but a 4px container cannot hold an 8px child (disallowed). 100px children inside 8px containers are rare and must be intentional.
- **Adjacency.** When a 4px surface touches an 8px surface (e.g., filter bar attached to card), align the shared edge via inset to prevent corner collision.

**Status chip vs. selectable button chip.** Status chips are informational (4px); selectable button chips are interactive filters (100px). The radius difference is how a scanning user distinguishes passive labels from tappable controls — do not swap them.

## Components

### Buttons

Four interactive variants: **primary**, **secondary**, **link** (tertiary), and **destructive**. Plus a **segmented** control for mutually exclusive view/mode toggles, a **pill** variant for expressive emphasis, and size modifiers (large / medium / small) controlled by horizontal padding.

- **Primary** uses the Orange CTA ramp. One primary action per screen or page section, reserved for the highest-value action. The default state is `action-default`; hover shifts to `action-hover`; pressed to `action-pressed`; focus adds a 2px PS Blue outline; disabled collapses to `grey-4` background with `grey-2` text.
- **Secondary** is a PS Blue outline on white. Used alongside or instead of primary for lower-emphasis actions; must never compete with the primary.
- **Link** is inline textual PS Blue with no background or padding. Used inside running copy for navigation-style actions.
- **Destructive** is red-outlined on white — reject, remove, decline, delete. Destructive CTAs must never be icon-only and must be visually separated from primary CTAs.
- **Pill** is expressive emphasis only — uses `radii.expressive` (100px). Reserve for intentionally high-discoverability CTAs.
- **Segmented** is a connected group of mutually exclusive toggles; the active segment uses PS Blue.

**Labeling** follows Verb–Subject strictly (see Do's and Don'ts below). Industry-standard short labels — Submit, Save, Done, Edit, Back, Cancel, Print, View Details — are approved exceptions.

### Inputs

**Text input** is the base form control: white background, 4px corner radius, 1px `border-input` (grey-4), 12px horizontal × 8px vertical padding, 40px minimum height, 14px Source Sans Pro Regular. Focus state replaces the border with PS Blue and adds a 2px Azure Blue outline. Error state replaces the border with red. Disabled state uses `grey-6` background and `grey-3` text.

**Search input, filter dropdown, and filter chip** extend this base pattern. Filter chips are the **selectable** chip variant (100px expressive radius), distinct from the 4px **status chip**.

### Chips

Two strict categories, non-interchangeable:

- **Status chip** (informational, non-selectable): 4px radius, grey-6 background for neutral, paired semantic background + foreground for success / warning / error / info.
- **Filter chip / button chip** (interactive, selectable): 100px radius, white with grey-4 outline in default; PS Blue in selected.

### Cards

Three tiers:

- **Detail card** (8px structural, locked) — primary reading surfaces such as order detail, asset detail, quote detail.
- **Right-rail card** (4px operational, locked) — dense, supportive content in the right sidebar.
- **Small data / KPI card** (4px operational) — summary modules, tiles, and actionable small cards.

Card headers use the desktop-header-04 style (24/28 SemiBold); content uses desktop-body-01 (16/22 Regular). Header has 16px bottom margin; content has 24px bottom margin before actions.

### Alerts

Alert cards and banners use **4px operational** radius and pair semantic foreground + background: info (azure on light blue), success (green-1 on green-2), warning (orange on orange-5), error (red on light-red). Every alert must include an icon from Lucide React (`AlertTriangle`, `CheckCircle`, `Info`, `X`) and a Verb–Subject dismiss or remedial action where applicable.

### Modals and Sheets

- **Modal** — a **focused** interruption for critical decisions, quick confirmations, 2–5 field forms, and single-choice selections. 8px structural radius. Max width 850px desktop, 600px tablet, 375px mobile. 32px horizontal / 24px vertical padding. Header divider is 1px `grey-6`. Header title is desktop-header-01 (30/34 Light); subtitle is 14px `text-body`. Line items are 785px wide, 62px minimum height, 18px gap, 4px radius; selected line items get `#EFF9FE` background and `#6AC7FC` border. Focus is trapped inside; ESC closes; backdrop click closes unless the action is critical.
- **Sheet / drawer** — for **context-retained** workflows: multi-step forms, detailed editing, complex filters, settings panels, content previews, and shopping carts. 8px structural radius. Desktop slides in from the right (480px default, 640px wide, 320px narrow). Mobile uses a **bottom sheet** with a 4×32px drag handle and 50% / 90% / full-screen snap points. Fixed 64–72px header, sticky 72–80px footer (when needed), scrollable body. Sheets may stack (offset by 24px); modals may not. Close by X, ESC, backdrop, or swipe on mobile.

**Choosing between them.** Modals demand focus; sheets preserve context. Confirmations, critical alerts, and single-choice selections are modals. Multi-step forms, detailed editing, filter panels, navigation menus, and previews that reference the main content are sheets.

### Tables and Accordions

Both use **8px structural** radius on the outer container. Table cells themselves are flat (no radius); hover on a table row uses `surface-subtle` background. Accordion bodies use `paddingX: 24px` / `paddingY: 16px` and can contain nested cards at 4px or 8px radius per the nesting rules in the Shapes section above.

### Navigation

The top header is **56px high** with a **navy `blue-3`** background — the one place navy is used as a dominant surface. The left sidebar is **199px** and collapsible; the right rail is **281px**. Across breakpoints, the desktop header carries full chrome (contact, help, search, categories, cart, facility context, account); at tablet it condenses; on mobile the primary nav collapses behind a hamburger.

### Iconography

All icons come from **Lucide React**. Do not introduce icons from other libraries. Do not alter stroke, geometry, or proportions. Sizes: 16px inline with text, 20px in buttons, 24px in headers. Maintain at least 8px clear space. Every icon must carry an accessible label; never rely on an icon alone to convey meaning.

### Formulary Rating Badges

Five-stop Best → Poor scale. Use only on formulary coverage scoring; do not overload for other status systems.

## Do's and Don'ts

### Copy

- **Do** use Verb–Subject labels for every CTA: "Submit Order", "View Details", "Approve Event", "Print Label", "Add to Cart".
- **Do** describe what will happen before the user commits — "Delete Order", not "OK".
- **Do** explain errors in three beats: what happened, why, what to do next. Example: "We couldn't submit your order because the part number is missing. Add a part number and try again."
- **Do** default to the industry-standard short exceptions where appropriate: **Submit, Save, Done, Edit, Back, Cancel, Print, View Details**.
- **Don't** use noun-only labels like "Report", "Form", "Dashboard".
- **Don't** use vague actions like "Click here", "Continue", "Get started", "Learn more" (without a concrete object).
- **Don't** use marketing-first verbs like "Discover", "Explore", "Unlock" for functional actions.
- **Don't** use urgency language that pressures the user — "Fix this now!", "Don't miss out!". Maintain calm operational tone even when urgent: "Address Overdue Repairs".
- **Don't** overload a CTA with multiple implied actions.
- **Don't** create new labels for existing features. Default to the term used in the platform UI.

### Color

- **Do** reference semantic aliases (`{colors.action-default}`, `{colors.error}`) in components. Raw palette tokens belong in the palette, not in component definitions.
- **Do** maintain a minimum **4.5:1 contrast ratio** for text against background and **3.0:1** for graphical and UI components.
- **Do** pair notification foreground and background tokens as specified (green-1 on green-2, red on light-red, etc.) — these pairs were chosen for contrast.
- **Don't** introduce new orange values for interactive state beyond the three-step CTA ramp.
- **Don't** repurpose the PS Plus+ Rewards tokens (`plus-teal`, `plus-blue`) for general UI.
- **Don't** use the formulary rating ramp for any other status system.
- **Don't** convey status with color alone — always pair with icon, label, or shape.

### Typography

- **Do** use **Source Sans Pro** everywhere. Do not introduce a second typeface.
- **Do** switch from desktop to mobile type scale at the tablet breakpoint.
- **Do** reserve 700 (Bold) and 900 (Black) for emphasis and display numerics.
- **Don't** hardcode font sizes outside the documented scale.
- **Don't** use title case for body copy or sentence case for button labels — match the established convention in the UI.

### Shape and spacing

- **Do** limit corner radius to the three approved values: **4px**, **8px**, **100px**.
- **Do** keep radius constant across interaction states and breakpoints.
- **Do** follow the nesting rule: an 8px container can hold a 4px child; a 4px container may not hold an 8px child.
- **Do** use the 8-step spacing scale exclusively. 2 / 4 / 8 / 16 / 24 / 32 / 48 / 64.
- **Don't** introduce new radius values without design-system approval.
- **Don't** change radius on hover, focus, active, disabled, or error — use color, outline, or scale instead.

### Components

- **Do** use **one primary CTA per screen or section**, reserved for the highest-value action.
- **Do** separate destructive CTAs from primary CTAs visually and in language. Destructive CTAs must never be icon-only.
- **Do** use modals for focused decisions and sheets for context-retained workflows.
- **Do** provide three ways to dismiss a modal or sheet: X button, ESC key, backdrop click (unless critical).
- **Do** provide 44×44px minimum touch targets on mobile.
- **Don't** stack modals on modals. Redesign the flow instead.
- **Don't** open a modal on page load without an explicit user action (except for critical alerts).
- **Don't** auto-open sheets on page load.

### Accessibility

- **Do** trap focus inside modals and sheets when open; auto-focus the first interactive element; return focus to the trigger on close.
- **Do** provide `role="dialog"` and `aria-modal="true"` (or `role="complementary"` for navigation sheets), with `aria-labelledby` pointing at the title.
- **Do** support full keyboard navigation — TAB to cycle, ENTER to submit, ESC to close.
- **Don't** rely on color alone to convey state — pair with icon, label, or structural signal.
- **Don't** use tiny close buttons — 44×44px minimum, visible contrast.

---

## Known gaps

The following areas are not yet codified. Components that need these primitives should note the dependency until the gaps are filled with design sign-off.

- **Elevation / shadow scale.** No formal `shadow-1 / 2 / 3` tokens exist; only z-index layering and overlay scrim are authored. Until a shadow scale is published, components imply elevation via background contrast and z-index.
- **Motion system.** Modal and sheet entry/exit durations are captured; a general motion token scale (easings, durations for micro-interactions) is not yet codified.
- **Dark mode mappings.** No authored dark-mode tokens exist.
- **Logo, clearspace, exclusion zones, lockups.** Not yet codified.
- **Status-badge → color-token bindings.** Badge variants (Service Completed, Service Scheduled, Priority on Hold, Contracted) are known but not yet bound to specific tokens. The semantic mappings elsewhere in this file are recommended; verify with design before codifying.
- **Token values under review.** The following token values were selected from conflicting candidates and are subject to a follow-up design sign-off pass: `orange-3` (`#D27200`), `grey-1` (`#4A4A4A`), `light-blue` (`#D0EDFC`), `blue-3` (`#003763`), `plus-blue` (`#005499`), and the full formulary rating ramp (`#29A10F / #03C700 / #E9E022 / #F58B00 / #DE3700`).
