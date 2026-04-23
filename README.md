# PartsSource · Design System

> A machine-readable design reference for PartsSource — structured so coding agents understand and apply the visual identity consistently without guesswork.

[![design.md](https://img.shields.io/badge/format-design.md-005BA6?style=flat-square)](./design.md)
[![version](https://img.shields.io/badge/version-1.2-005BA6?style=flat-square)](./design.md)
[![Figma](https://img.shields.io/badge/Figma-Design%20System-F24E1E?style=flat-square&logo=figma&logoColor=white)](https://www.figma.com/design/pyZ5wKN9KGBUfgi47UwQ0q/Design-System---Component-library)

---

## What is this?

`design.md` is a format that pairs **machine-readable design tokens** (YAML front matter) with **human-readable design rationale** (Markdown body). It's the single source of truth agents use when building, reviewing, or auditing UI for PartsSource.

When a coding agent reads this file it gets:

- Exact token values — no guessing hex codes or spacing numbers
- Component specs — what background, text color, radius, and padding each component uses
- Modal and sheet standards — sizes, structure, content types, and accessibility requirements
- CTA language rules — approved verbs, risk signaling, and naming anti-patterns
- Usage rules — when to use blue vs grey, 0px vs 5px radius, Regular vs SemiBold
- Do's and Don'ts — guardrails that prevent the most common visual inconsistencies

---

## The Design Language

PartsSource is an enterprise B2B platform for healthcare equipment parts procurement. The design language is **utilitarian, data-dense, and trust-focused** — built for clinical and supply chain professionals who need clarity over decoration.

| Principle | Expression |
|---|---|
| Clarity over creativity | Data is the hero; UI scaffolding recedes |
| Density with breathing room | Pack information efficiently, never cramped |
| Trustworthy defaults | Every state (hover, active, disabled) feels deliberate |
| Consistent affordances | Blue = interactive; Grey = supporting or disabled |

---

## Token Quick Reference

### Colors

| Token | Value | Usage |
|---|---|---|
| `primary` | `#005BA7` | CTAs, links, active tabs, focused borders |
| `primaryHover` | `#004884` | Button hover / active pressed state |
| `black` | `#000000` | Primary text |
| `white` | `#FFFFFF` | Page and card backgrounds |
| `grey1` | `#4A4A4A` | Subheadings, emphasized secondary text, modal subtitle |
| `grey2` | `#777777` | Muted text, metadata |
| `grey3` | `#949494` | De-emphasized icons, placeholder text |
| `grey4` | `#CCCCCC` | Borders, dividers |
| `grey5` | `#DCDCDC` | Light borders, row separators |
| `grey6` | `#F1F1F1` | Section backgrounds, row hover, modal dividers |
| `textSecondary` | `#5C5C5C` | Supporting labels, inactive tabs |
| `inputOutline` | `#D2D2D2` | Input field borders at rest |
| `softFill` | `#F0F0F0` | Secondary button background |
| `modalFill` | `#FAFAFA` | Modal content area background |
| `selectedFill` | `#EFF9FE` | Selected row highlight in modals |
| `selectedBorder` | `#6AC7FC` | Border on selected modal rows |
| `positive` | `#17AB78` | Success states, positive indicators (Signal Green) |
| `positiveLight` | `#DCFAEF` | Positive surface tint |
| `negative` | `#FF0000` | Errors, destructive actions (Alert Red) |
| `negativeLight` | `#FCC8C8` | Negative surface tint |
| `warning` | `#E3A92D` | Caution states, time-sensitive alerts |
| `lightBlue` | `#D0EEFC` | Chip idle background |
| `cyan` | `#009CF4` | Transactional interactions, notifications |

### Typography

Font family: **Source Sans Pro**

| Scale | Size | Weight | Line Height | Usage |
|---|---|---|---|---|
| `h1` | 30px | 300 Light | 36px | Page titles, modal titles |
| `h2` | 24px | 300 Light | 30px | Section titles |
| `h3` | 20px | 600 SemiBold | 24px | Panel headers, sheet titles |
| `body` | 16px | 400 Regular | 22px | Default prose, info modal content |
| `body-sm` | 14px | 400 Regular | 18px | Table cells, form labels, modal fields |
| `body-sm-emphasized` | 14px | 600 SemiBold | 18px | Table headers, section titles |
| `button-md` | 14px | 600 SemiBold | 18px | Standard buttons |
| `button-sm` | 12px | 600 SemiBold | 16px | Compact actions, badges |

### Spacing

| Token | Value | Token Studio | Usage |
|---|---|---|---|
| `xs` | 4px | `spacing.1` | Icon padding, badge padding |
| `sm` | 8px | `spacing.2` | Inline gaps |
| `md` | 16px | `spacing.4` | Component padding, row gaps |
| `lg` | 24px | `spacing.6` | Section padding, modal/sheet section gaps |
| `xl` | 40px | `spacing.10` | Major page section separation |

### Border Radius

| Token | Value | Usage |
|---|---|---|
| `borderRadius.none` | 0 | Tables, accordions, page sections, sheets |
| `borderRadius.sm` | 2px | Dense inline elements |
| `borderRadius.md` | 4px | Small tags, compact inputs |
| `borderRadius.lg` | 6px | Buttons, inputs, chips, modals, badges |
| `borderRadius.xl` | 8px | Large cards |
| `borderRadius.2xl` | 12px | Large surface elements |
| `borderRadius.pill` | 20px | Pill-shaped status indicators |
| `borderRadius.full` | 9999px | Avatars |

### Elevation

| Token | Shadow | Usage |
|---|---|---|
| Hover | `0px 4px 11px #6E6E6E40` | Row / card hover lift |
| Shadow MD | `0px 6px 12px -2px #15151514, 0px 2px 8px -2px #15151514` | Modals, dropdowns, popovers |

---

## Component Summary

| Component | Background | Text | Radius | Notes |
|---|---|---|---|---|
| Button Primary | `#005BA7` | White | 6px | Hover: `#004884` |
| Button Secondary | `#F0F0F0` | Black | 6px | — |
| Button Outline | White | `#005BA7` | 6px | Border: `#005BA7` |
| Input Field (rest) | White | Black | 6px | Border: `#D2D2D2` |
| Input Field (focus) | White | Black | 6px | Border: `#005BA7` |
| Table Header | `#F1F1F1` | Black 600 | 0px | — |
| Table Row | White | Black 400 | 0px | — |
| Table Row Hover | `#F1F1F1` | Black | 0px | — |
| Tab Active | `#005BA7` | White | 6px | — |
| Tab Inactive | Transparent | `#5C5C5C` | 6px | — |
| Accordion Header | White | Black 600 | 0px | 61px height |
| Chip | `#D0EEFC` | `#005BA7` | 6px | — |
| Chip Active | `#005BA7` | White | 6px | — |
| Modal | White | Black | 6px | 600px desktop, 32px padding |
| Modal Line Item | `#FAFAFA` | `#4A4A4A` | 6px | 62px height |
| Modal Line Item (selected) | `#EFF9FE` | `#4A4A4A` | 6px | Border: `#6AC7FC` |
| Sheet | White | Black | 0px | 480px default, 100vh height |
| Sheet Header | White | Black | — | 72px height, h3 title |
| Sheet Footer | White | Black | — | 80px height, sticky |

---

## Modal Types

| Type | When to Use | Key Behavior |
|---|---|---|
| Confirmation | Destructive or irreversible actions | Require explicit consent; no backdrop dismiss |
| Form | Quick data entry (2–5 fields) | Keep modal open until validation passes |
| Information | Details, help text, announcements, asset previews | Body uses `body` or `body-sm` type |
| Selection | Choose from lists, multi-select | Line-item rows with `selectedFill` highlight |
| Media | Image/document previews | Content fills modal body edge-to-edge |
| Warning | Errors, system alerts, time-sensitive issues | May auto-open for critical alerts only |

**CTA footer order (right to left):** Primary → Secondary → Cancel/Close

---

## CTA Language Quick Reference

**Format:** Verb–Subject (e.g., "View Details", "Submit Work Order", "Add to Cart")

| Intent | Use | Avoid |
|---|---|---|
| Navigate | View, Open, Explore | See, Show, More |
| Review | Review, Compare, Inspect | Info |
| Take Action | Add, Enter, Submit, Schedule | Continue, Proceed |
| Commit | Purchase, Place Order, Checkout | Add (when committing) |
| Destructive | Remove, Decline, Delete | Icon-only |

**Approved exceptions:** Edit · Back · Cancel · Submit · Save · Print · View Details

---

## Usage

Point your coding agent at the raw `design.md` file:

```
https://raw.githubusercontent.com/NotTheVeal/Design.md/main/design.md
```

Or reference it in a system prompt:

```
Before generating any UI for PartsSource, read the design system at:
https://raw.githubusercontent.com/NotTheVeal/Design.md/main/design.md

Use the YAML tokens for all color, spacing, and typography values.
Follow the component specs, modal/sheet standards, CTA language rules,
and Do's and Don'ts sections.
```

---

## File Structure

```
design.md   ← YAML tokens + Markdown rationale (the full design reference)
README.md   ← This file (human-readable overview)
```

---

## Figma Source

The token values and component specs in this file are derived from the [PartsSource Design System & Component Library](https://www.figma.com/design/pyZ5wKN9KGBUfgi47UwQ0q/Design-System---Component-library) in Figma, including the PS Color System, Typography System, Buttons, Form Components, Modal, and Sheet/Drawer libraries.

Additional standards incorporated from:
- **Modal & Sheet Standards** (UX Standards & Documentation v1.0, April 2026)
- **CTA Audit Reports** (Platform-wide button labeling and verb taxonomy standards)
