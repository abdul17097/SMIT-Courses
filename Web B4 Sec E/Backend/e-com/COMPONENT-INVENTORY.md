# COMPONENT INVENTORY

This document catalogues all reusable UI foundation components built for the design system, along with their props, variants, and usage guidelines.

---

## Foundation Components

| Component | Props | Variants / Options | Description |
|---|---|---|---|
| **Button** | `variant`, `size`, `isLoading`, `leftIcon`, `rightIcon`, `fullWidth`, `disabled`, `children`, `className`, `...props` | Variants: `primary`, `secondary`, `outline`, `ghost`, `danger`<br>Sizes: `sm`, `md`, `lg` | Standard action button with built-in spinner and icon support. |
| **Input** | `label`, `error`, `helperText`, `leftIcon`, `rightIcon`, `fullWidth`, `className`, `...props` | - | Form input field with dynamic label, error state, and icon slots. |
| **Select** | `label`, `error`, `options`, `helperText`, `fullWidth`, `className`, `...props` | - | Accessible custom-styled dropdown selector. |
| **Modal** | `isOpen`, `onClose`, `title`, `children`, `maxWidth` | Sizes: `sm`, `md`, `lg`, `xl` | Backdrop overlay modal container with ESC listener & lock body scroll. |
| **Drawer** | `isOpen`, `onClose`, `title`, `children`, `position` | Positions: `left`, `right` | Slide-out overlay container for mobile navigation and mini-cart. |
| **Badge** | `variant`, `size`, `children`, `className` | Variants: `default`, `primary`, `success`, `warning`, `danger`, `outline`<br>Sizes: `sm`, `md` | Status indicator tag badge. |
| **Skeleton** | `variant`, `className`, `count` | Variants: `text`, `circular`, `rectangular`, `card` | Shimmer pulse placeholder for loading states. |
| **Spinner** | `size`, `color`, `className` | Sizes: `sm`, `md`, `lg` | Loading indicator spinner animation. |
| **EmptyState** | `icon`, `title`, `description`, `actionLabel`, `onAction`, `className` | - | Responsive empty result UI placeholder with CTA button. |
| **ErrorState** | `title`, `message`, `onRetry`, `className` | - | User-friendly error message block with optional Retry button. |
| **Container** | `children`, `className`, `clean` | - | Max-width layout wrapper (`max-w-7xl px-4 sm:px-6 lg:px-8`). |
| **SectionHeader** | `title`, `subtitle`, `actionLabel`, `onAction`, `className` | - | Reusable section title header with optional link/action. |
