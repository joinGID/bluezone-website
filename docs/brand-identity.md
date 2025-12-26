# BlueZone Brand Identity

This document defines the visual identity system for BlueZone, focusing on an "Eco-Luxury Living" aesthetic.

## 🎨 Color Palette

The BlueZone palette is inspired by natural coastal elements, balancing deep oceanic tones with soft, sandy neutrals.

| Color | Role | Hex Code | Tailwind Token |
| :--- | :--- | :--- | :--- |
| **Deep Habitat** | Primary | `#153F41` | `habitat` |
| **Soft Bone** | Background | `#F7F3EF` | `bone` |
| **Aero Teal** | Accent / Link | `#0F677D` | `aero` |
| **Charcoal Black**| Primary Text | `#171B1C` | `charcoal` |
| **Sage Slate** | Muted Text | `#415D60` | `sage` |
| **Light Mist** | Borders / UI | `#D4D4D4` | `mist` |

## 📐 Typography

BlueZone uses a sophisticated blend of classic serifs and modern sans-serifs to reflect the balance of nature and luxury.

### Headings
- **Font Family**: `Playfair Display` (Serif)
- **Primary Weight**: **700 (Bold)**
- **Letter Spacing**: `-0.02em`
- **Usage**: All `h1` through `h6` tags.

### Body Text
- **Font Family**: `Montserrat` (Sans-serif)
- **Default Weight**: **300 (Light)**
- **Emphasis Weight**: **600 (Semi-Bold)** for strong/bold spans.
- **Usage**: Paragraphs, lists, and general reading content.

## ✨ Visual Language

- **Backgrounds**: Use `bg-bone` (`#F7F3EF`) as the primary container background to evoke a warm, natural luxury feel.
- **Accents**: Use `habitat` for primary actions (buttons) and `aero` for subtle emphasis or highlight states.
- **Borders**: Favor thin, low-contrast borders (`mist` or `habitat/10`) with `rounded-2xl` for a soft, premium touch.
- **Spacing**: Generous whitespace to maintain an airy, relaxed atmosphere.

## 🛠 Developer Tokens

These tokens are available as utility classes:
- **Colors**: `text-habitat`, `bg-bone`, `border-mist`, `shadow-habitat/20`
- **Fonts**: `font-serif` (Playfair), `font-sans` (Montserrat)
