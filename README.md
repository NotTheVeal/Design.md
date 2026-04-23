# PartsSource · Design System

> A machine-readable design reference for PartsSource — structured so coding agents understand and apply the visual identity consistently without guesswork.

[![design.md](https://img.shields.io/badge/format-design.md-005BA6?style=flat-square)](./design.md)
[![Figma](https://img.shields.io/badge/Figma-Design%20System-F24E1E?style=flat-square&logo=figma&logoColor=white)](https://www.figma.com/design/pyZ5wKN9KGBUfgi47UwQ0q/Design-System---Component-library)

---

## What is this?

`design.md` is a format that pairs **machine-readable design tokens** (YAML front matter) with **human-readable design rationale** (Markdown body). It's the single source of truth agents use when building, reviewing, or auditing UI for PartsSource.

When a coding agent reads this file it gets:

- Exact token values — no guessing hex codes or spacing numbers
- Component specs — what background, text color, radius, and padding each component uses
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
| `brand.psBlue` | `#005BA6` | CTAs, links, active tabs, focused borders |
| `brand.black` | `#000000` | Primary text |
| `brand.white` | `#FFFFFF` | Page and card backgrounds |
| `neutrals.grey1` | `#4A4A4A` | Subheadings, emphasized secondary text |
| `neutrals.grey2` | `#777777` | Muted text, metadata |
| `neutrals.grey4` | `#CCCCCC` | Borders, dividers |
| `neutrals.grey5` | `#DCDCDC` | Light borders, row separators |
| `neutrals.grey6` | `#F1F1F1` | Section backgrounds, row hover |
| `text.secondary` | `#5C5C5C` | Supporting labels, inactive tabs |
| `ui.inputOutline` | `#D2D2D2` | Input field borders at rest |
| `ui.softFill` | `#F0F0F0` | Secondary button background |

### Typography

Font family: **Source Sans Pro**

| Scale | Size | Weight | Line Height | Usage |
|---|---|---|---|---|
| `body` | 16px | 400 | 100% | Default prose |
| `bodySmall` | 14px | 400 | 18px | Table cells, labels |
| `bodySmallBold` | 14px | 600 | 18px | Table headers, section titles |
| `buttonLarge` | 16px | 600 | 20px | Large CTAs |
| `buttonMedium` | 14px | 600 | 18px | Standard buttons |
| `buttonSmall` | 12px | 600 | 16px | Compact actions |

### Spacing

| Token | Value |
|---|---|
| `xs` | 5px |
| `sm` | 10px |
| `md` | 15px |

### Border Radius

| Token | Value | Usage |
|---|---|---|
| `rounded-none` | 0px | Tables, accordions, page sections |
| `rounded-sm` | 5px | Buttons, inputs, badges, chips |

### Elevation

| Token | Shadow | Usage |
|---|---|---|
| Hover | `0px 4px 11px #6E6E6E40` | Row / card hover lift |
| Shadow MD | `0px 6px 12px -2px #15151514, 0px 2px 8px -2px #15151514` | Modals, dropdowns, popovers |

---

## Component Summary

| Component | Background | Text | Radius |
|---|---|---|---|
| Button Primary | `#005BA6` | White | 5px |
| Button Secondary | `#F0F0F0` | Black | 5px |
| Button Outline | White | `#005BA6` | 5px |
| Input Field (rest) | White | Black | 5px, border `#D2D2D2` |
| Input Field (focus) | White | Black | 5px, border `#005BA6` |
| Table Header | `#F1F1F1` | Black 600 | 0px |
| Table Row | White | Black 400 | 0px |
| Table Row Hover | `#F1F1F1` | Black | 0px |
| Tab Active | `#005BA6` | White | 5px |
| Tab Inactive | Transparent | `#5C5C5C` | 5px |
| Accordion Header | White | Black 600 | 0px |

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
Follow the component specs and Do's and Don'ts sections.
```

---

## File Structure

```
design.md   ← YAML tokens + Markdown rationale (the full design reference)
README.md   ← This file (human-readable overview)
```

---

## Figma Source

The token values and component specs in this file are derived from the [PartsSource Design System & Component Library](https://www.figma.com/design/pyZ5wKN9KGBUfgi47UwQ0q/Design-System---Component-library) in Figma, including the PS Color System, Typography System, Buttons, and Form Components libraries.
