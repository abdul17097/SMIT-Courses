# DESIGN SYSTEM SPECIFICATION

This document outlines the visual design system, color palette, typography hierarchy, component design tokens, and UI guidelines for the E-Commerce React application.

---

## 1. Design Philosophy
- **Rich Aesthetics**: High-end modern e-commerce visual language using deep indigo/violet accents, dark/slate neutral tones, subtle border glassmorphism, and dynamic micro-interactions.
- **Consistent Tokens**: Cohesive spacing scale, typography system, shadow layers, and rounded radii across all components.
- **Accessibility & Feedback**: Explicit interactive hover/focus states, active scale animations, clear error feedback, and loading skeletons.

---

## 2. Color Tokens & Palette

### Brand Colors (Indigo & Violet Accents)
- **Primary 50**: `#eef2ff`
- **Primary 100**: `#e0e7ff`
- **Primary 500**: `#6366f1` (Default Accent)
- **Primary 600**: `#4f46e5` (Primary CTA)
- **Primary 700**: `#4338ca` (Hover state)

### Neutral Tone Colors (Slate / Dark)
- **Neutral 50**: `#f8fafc` (Background light)
- **Neutral 100**: `#f1f5f9` (Card / Input background)
- **Neutral 200**: `#e2e8f0` (Borders)
- **Neutral 600**: `#475569` (Muted text)
- **Neutral 800**: `#1e293b` (Body text)
- **Neutral 900**: `#0f172a` (Headings)

### Status & Feedback Colors
- **Success**: Emerald (`bg-emerald-500`, `text-emerald-700`, `border-emerald-200`)
- **Warning**: Amber (`bg-amber-500`, `text-amber-700`, `border-amber-200`)
- **Danger**: Rose (`bg-rose-500`, `text-rose-700`, `border-rose-200`)
- **Info**: Sky (`bg-sky-500`, `text-sky-700`, `border-sky-200`)

---

## 3. Typography & Spacing Hierarchy
- **Font Family**: Modern sans-serif (Inter / System Sans)
- **Scale**:
  - `Display / H1`: `text-3xl lg:text-4xl font-extrabold tracking-tight`
  - `H2`: `text-2xl lg:text-3xl font-bold tracking-tight`
  - `H3`: `text-xl font-semibold`
  - `Subheading`: `text-lg font-medium text-slate-600`
  - `Body`: `text-base font-normal text-slate-700`
  - `Caption`: `text-sm font-medium text-slate-500`

---

## 4. Design System Component Tokens
- **Button Radii**: `rounded-xl`
- **Card Radii**: `rounded-2xl`
- **Modal Radii**: `rounded-3xl`
- **Shadow Scale**:
  - `shadow-sm` (subtle cards / inputs)
  - `shadow-md` (dropdowns / badges)
  - `shadow-xl` (drawers / modals)
  - `shadow-2xl` (floating popups)
