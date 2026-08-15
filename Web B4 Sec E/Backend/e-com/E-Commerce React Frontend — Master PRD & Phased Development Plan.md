# E-Commerce Frontend — Master PRD & Phased Development Plan

## 1. Project Overview

Build a production-ready, modern, responsive e-commerce frontend using React.

The backend API has already been developed and is considered the existing source of truth.

### Primary Objective

Create a high-quality e-commerce frontend that:

- Consumes the existing backend APIs
- Provides a clean and modern shopping experience
- Uses reusable React components
- Maintains consistent UI/UX throughout the application
- Uses centralized state management where appropriate
- Handles API loading, errors, authentication, and notifications properly
- Is responsive across mobile, tablet, laptop, and desktop
- Is scalable and maintainable
- Avoids unnecessary duplication
- Does not modify the backend without explicit approval

---

# 2. Technology Stack

## Frontend

- React
- JavaScript or TypeScript based on the existing project requirement
- Tailwind CSS
- Axios
- React Router
- Context API
- Redux Toolkit
- React Toastify

### Recommended Supporting Libraries

Use additional libraries only when they solve a real problem and remain consistent with the project architecture.

Potential examples:

- React Hook Form — forms
- Zod — frontend validation
- Lucide React — icons
- Swiper — product/image sliders
- React Helmet / appropriate SEO solution if required

Do not add libraries unnecessarily.

---

# 3. Critical Backend Rule

The backend already exists.

The frontend developer/AI agent must NOT automatically modify the backend.

## Backend Inspection Process

Before implementing frontend features:

1. Explore the existing backend structure.
2. Identify the available API endpoints.
3. Identify authentication mechanisms.
4. Identify request methods.
5. Identify request payload structures.
6. Identify response structures.
7. Identify pagination behavior.
8. Identify filtering and sorting parameters.
9. Identify product/category APIs.
10. Identify cart APIs.
11. Identify wishlist APIs if available.
12. Identify order APIs.
13. Identify user/profile APIs.
14. Identify payment APIs.
15. Identify admin-related APIs if relevant.
16. Identify upload/image handling.
17. Identify API error response formats.
18. Identify authentication token/cookie behavior.
19. Identify protected routes.
20. Identify environment variables required by the frontend.

### Backend Modification Policy

If any required frontend functionality cannot be implemented because:

- An endpoint is missing
- An endpoint returns insufficient data
- An endpoint has an inconsistent response
- A required field is missing
- Authentication behavior is unclear
- Cart/order/payment functionality is incomplete
- Filtering/search/sorting cannot be supported
- API validation conflicts with the required UI
- Another backend issue is discovered

DO NOT modify the backend.

Instead:

1. Document the issue.
2. Explain why the frontend requires the change.
3. Provide the proposed backend change.
4. Ask for explicit approval.
5. Wait for approval.

Never silently change backend logic.

---

# 4. Product Vision

The frontend should feel like a professional commercial e-commerce application rather than a basic CRUD project.

The experience should focus on:

- Fast navigation
- Clear product discovery
- Strong visual hierarchy
- Simple checkout
- Mobile responsiveness
- Trustworthy UI
- Consistent components
- Excellent loading states
- Excellent error handling
- Reusable architecture
- Maintainable code

---

# 5. Core User Journey

The main customer journey should be:

Home
→ Browse Products
→ Search / Filter
→ Product Details
→ Select Variant
→ Add to Cart
→ View Cart
→ Checkout
→ Address
→ Payment
→ Order Confirmation
→ Order History
→ Order Details

Authentication should integrate naturally into this flow.

---

# 6. Expected Frontend Modules

The exact modules must depend on the existing backend APIs.

Potential modules include:

### Public

- Home
- Shop
- Product Listing
- Product Details
- Categories
- Search
- Offers / Promotions
- About
- Contact
- FAQ

### Authentication

- Login
- Register
- Forgot Password
- Reset Password
- Email Verification if supported
- Logout

### Customer

- Profile
- Edit Profile
- Addresses
- Wishlist
- Cart
- Checkout
- Orders
- Order Details

### System

- 404 Page
- Error Page
- Loading States
- Empty States
- API Error States
- Network Error States

Do not build functionality that is not supported by the backend unless the backend contract is confirmed.

---

# 7. Frontend Architecture

Use a scalable feature-oriented architecture.

Recommended structure:

```text
src/
│
├── assets/
│
├── components/
│   ├── common/
│   ├── layout/
│   ├── product/
│   ├── cart/
│   ├── checkout/
│   ├── forms/
│   └── ui/
│
├── pages/
│   ├── home/
│   ├── auth/
│   ├── products/
│   ├── cart/
│   ├── checkout/
│   ├── orders/
│   ├── profile/
│   └── errors/
│
├── features/
│   ├── auth/
│   ├── products/
│   ├── cart/
│   ├── wishlist/
│   ├── orders/
│   └── user/
│
├── store/
│   ├── index.js
│   └── slices/
│
├── context/
│
├── services/
│   ├── api/
│   ├── auth/
│   ├── product/
│   ├── cart/
│   ├── order/
│   └── user/
│
├── hooks/
│
├── utils/
│
├── constants/
│
├── routes/
│
├── layouts/
│
├── App.jsx
└── main.jsx
```

The exact structure may be adapted after inspecting the existing project.

---

# 8. State Management Strategy

Do not put everything into Redux.

Use each state mechanism intentionally.

## Redux Toolkit

Use Redux Toolkit for global application state that needs centralized access.

Potential examples:

- Authentication/user state
- Cart state
- Wishlist state
- Global application state

## Context API

Use Context API for lightweight cross-cutting concerns where Redux would be unnecessary.

Potential examples:

- Theme
- UI preferences
- Lightweight application configuration
- Non-complex shared state

Do not duplicate the same state between Context and Redux.

## Local React State

Use:

```js
useState
useReducer
```

for component-specific state.

Examples:

- Modal open/close
- Dropdown state
- Product image selection
- Local form UI
- Mobile menu
- Accordion

---

# 9. API Architecture

Create a centralized Axios configuration.

Do NOT call raw Axios everywhere inside components.

Bad:

```js
axios.get(...)
```

inside every component.

Preferred architecture:

```text
Component
   ↓
Custom Hook / Feature Logic
   ↓
Service
   ↓
Axios Instance
   ↓
Backend API
```

Example:

```text
services/
    api/
        axiosInstance.js
    product/
        productService.js
    cart/
        cartService.js
    auth/
        authService.js
```

---

# 10. Axios Configuration

Create one centralized Axios instance.

It should handle, depending on the backend:

- Base URL
- Credentials
- Authentication headers
- Request configuration
- Response handling
- Common errors
- Unauthorized responses
- Token handling if applicable

Do not hardcode API URLs throughout the application.

Use environment variables.

Example:

```env
VITE_API_BASE_URL=
```

The exact environment variable name can be decided during project initialization.

---

# 11. API Service Rules

Each major backend domain should have a dedicated service.

Example:

```text
authService
productService
categoryService
cartService
orderService
userService
wishlistService
paymentService
```

Components should not contain large API implementation blocks.

Instead:

```js
const products = await productService.getProducts(params);
```

This makes the application easier to maintain and test.

---

# 12. API Contract Discovery

Before implementing actual features, create an API mapping document.

Example:

| Feature | Method | Endpoint | Request | Response | Auth |
|---|---|---|---|---|---|
| Login | POST | Existing API | Credentials | User/Auth data | No |
| Products | GET | Existing API | Query params | Products | No |
| Product Detail | GET | Existing API | Product ID | Product | No |
| Cart | GET | Existing API | — | Cart | Yes |
| Add Cart | POST | Existing API | Product data | Cart | Yes |
| Orders | GET | Existing API | — | Orders | Yes |

Use the ACTUAL backend endpoints after inspection.

Never invent endpoint names.

---

# 13. UI/UX Design System

Create the design system before implementing individual pages.

Define:

### Colors

- Primary
- Secondary
- Background
- Surface
- Text
- Muted text
- Border
- Success
- Warning
- Error

### Typography

Define:

- Heading sizes
- Body sizes
- Labels
- Buttons
- Captions

### Spacing

Use Tailwind's spacing system consistently.

### Border Radius

Define consistent:

- Small
- Medium
- Large
- Full

### Shadows

Use a small number of consistent shadow levels.

### Buttons

Create reusable:

- PrimaryButton
- SecondaryButton
- OutlineButton
- DangerButton
- LoadingButton

### Inputs

Create reusable:

- Input
- Select
- Checkbox
- Radio
- Textarea
- SearchInput

---

# 14. Reusable Component Strategy

Everything that appears more than once should be evaluated for reuse.

Potential components:

```text
Header
Navbar
Footer
Container
SectionHeader
Button
Input
Modal
Drawer
Spinner
Skeleton
Pagination
SearchBar
Breadcrumb
ProductCard
ProductGrid
ProductImageGallery
PriceDisplay
Rating
Badge
QuantitySelector
CartItem
OrderCard
OrderStatus
EmptyState
ErrorState
ConfirmDialog
LoadingOverlay
```

Avoid creating huge components.

For example:

Do not create:

```text
ProductPage.jsx
```

with 1,000+ lines.

Break it into:

```text
ProductGallery
ProductInfo
ProductVariants
ProductQuantity
ProductActions
ProductDescription
RelatedProducts
```

---

# 15. Product Listing Experience

Product listing should support whatever the backend provides.

Potential functionality:

- Category filtering
- Search
- Price filtering
- Brand filtering
- Rating filtering
- Availability
- Sorting
- Pagination
- Product count
- Responsive grid

The frontend must adapt to the backend's actual filtering/pagination contract.

If the backend does not support a required filter, stop and request approval before changing the backend.

---

# 16. Product Card

Create one reusable ProductCard component.

It should potentially support:

- Product image
- Product name
- Price
- Discount price
- Discount badge
- Rating
- Wishlist
- Add to cart
- Stock status

Avoid duplicating product-card markup across pages.

---

# 17. Product Details

Product detail page should be modular.

Suggested structure:

```text
ProductDetailsPage
│
├── Breadcrumb
├── ProductGallery
├── ProductInfo
│   ├── ProductTitle
│   ├── Rating
│   ├── Price
│   ├── StockStatus
│   ├── VariantSelector
│   ├── QuantitySelector
│   └── AddToCart
│
├── ProductDescription
├── ProductSpecifications
├── Reviews
└── RelatedProducts
```

Only implement sections supported by backend data.

---

# 18. Cart

Cart should provide:

- Product image
- Product name
- Variant information
- Quantity
- Unit price
- Subtotal
- Remove item
- Update quantity
- Total
- Empty cart state
- Continue shopping
- Checkout CTA

Cart calculations must be consistent with backend pricing rules.

Never trust frontend calculations for final order/payment amounts.

The backend remains authoritative for final totals.

---

# 19. Checkout

Checkout should be designed as a clear multi-step experience where appropriate.

Potential steps:

```text
Cart
 ↓
Shipping Address
 ↓
Order Review
 ↓
Payment
 ↓
Confirmation
```

Handle:

- Authentication
- Address
- Order summary
- Shipping charges
- Discounts
- Payment
- Validation
- API errors
- Loading state
- Success state

Never expose sensitive payment information unnecessarily.

---

# 20. Authentication

Authentication implementation must match the backend.

First determine whether backend authentication uses:

- JWT
- HTTP-only cookies
- Access/refresh tokens
- Session authentication
- Another mechanism

Do not assume.

Frontend should provide:

- Login
- Registration
- Logout
- Protected routes
- Authentication persistence
- Unauthorized handling
- User profile state

---

# 21. Protected Routes

Create reusable route protection.

Example conceptual architecture:

```text
PublicRoute
ProtectedRoute
AdminRoute
```

Only create AdminRoute if the existing application requires admin functionality.

---

# 22. Toast Notifications

Use React Toastify consistently.

Examples:

Success:

```text
Product added to cart.
```

Error:

```text
Unable to add product to cart.
```

Warning:

```text
Please select a product variant.
```

Avoid excessive notifications.

Not every UI interaction needs a toast.

---

# 23. Loading States

Every API-driven UI must have an appropriate loading state.

Do not simply show:

```text
Loading...
```

everywhere.

Use:

- Skeleton loaders
- Button loading states
- Page loaders
- Table/list skeletons
- Image loading states

Example:

```text
ProductCardSkeleton
ProductDetailsSkeleton
CartSkeleton
OrderSkeleton
```

---

# 24. Empty States

Create reusable empty states.

Examples:

```text
No products found
Your cart is empty
No wishlist items
No orders found
No search results
```

Each should provide an appropriate CTA where useful.

---

# 25. Error Handling

Handle:

- Network errors
- Server errors
- Validation errors
- Authentication errors
- Not found
- Unauthorized
- Forbidden
- Timeout
- Empty responses

The user should receive a meaningful message.

Do not expose raw backend stack traces or technical errors to customers.

---

# 26. Responsive Design

The application must be mobile-first.

Required breakpoints:

```text
Mobile
Tablet
Laptop
Desktop
Large Desktop
```

Test every major page at:

- 320px
- 375px
- 768px
- 1024px
- 1280px
- 1440px+
 
Avoid:

- Horizontal overflow
- Broken grids
- Tiny buttons
- Unusable navigation
- Overflowing text
- Desktop-only interactions

---

# 27. Accessibility

Follow good accessibility practices.

Include:

- Semantic HTML
- Proper labels
- Keyboard navigation
- Focus states
- Accessible buttons
- Alt text
- Proper heading hierarchy
- Sufficient contrast
- Accessible modals
- Accessible forms

Do not use `<div>` elements where semantic HTML is more appropriate.

---

# 28. Performance

Optimize:

- Images
- Component rendering
- API calls
- Bundle size
- Lazy loading
- Route loading
- Unnecessary Redux updates
- Repeated API calls

Use React optimizations only when justified.

Do not blindly use:

```js
useMemo
useCallback
memo
```

everywhere.

---

# 29. Security

Frontend security requirements:

- Never hardcode secrets
- Never expose private API keys
- Never trust frontend prices
- Never trust frontend authorization
- Do not store sensitive data unnecessarily
- Follow backend authentication requirements
- Sanitize/handle user-generated content appropriately
- Do not expose backend errors directly

The backend remains responsible for real authorization and business rules.

---

# 30. SEO Considerations

If the application is a standard React SPA, implement practical frontend SEO where possible.

Potentially include:

- Page titles
- Meta descriptions
- Canonical URLs where appropriate
- Open Graph metadata
- Proper headings
- Semantic content
- Clean URLs

However, do not promise SSR/SSG SEO capabilities unless the project is actually using a framework that supports them.

---

# 31. Development Phases

## PHASE 0 — Project Audit

Before writing feature code:

- [ ] Inspect existing frontend repository
- [ ] Inspect backend repository
- [ ] Understand backend architecture
- [ ] Identify API routes
- [ ] Identify authentication mechanism
- [ ] Identify API response formats
- [ ] Identify database-driven entities exposed by APIs
- [ ] Identify image/file handling
- [ ] Identify pagination
- [ ] Identify filtering
- [ ] Identify sorting
- [ ] Identify cart workflow
- [ ] Identify checkout workflow
- [ ] Identify payment workflow
- [ ] Identify order workflow
- [ ] Identify user workflow

### Deliverable

Create:

```text
BACKEND-API-AUDIT.md
```

Do not modify backend.

---

# PHASE 1 — API Contract Mapping

Create:

```text
API-CONTRACT.md
```

Document every frontend-required endpoint.

For each endpoint record:

- Method
- URL
- Authentication requirement
- Parameters
- Query parameters
- Request body
- Response structure
- Error structure
- Pagination
- Notes

### Important

If something required by the frontend is missing:

```text
🚨 BACKEND CHANGE REQUIRED
```

Document it and ask for approval.

Do not implement backend changes automatically.

---

# PHASE 2 — Frontend Architecture

Create the React project architecture.

Implement:

- Folder structure
- Routing
- Axios instance
- Environment configuration
- Redux store
- Context structure
- Service layer
- Shared hooks
- Shared utilities
- Error handling foundation

### Deliverable

Create:

```text
FRONTEND-ARCHITECTURE.md
```

---

# PHASE 3 — Design System

Build the reusable UI foundation.

Implement:

- Colors
- Typography
- Buttons
- Inputs
- Cards
- Modal
- Drawer
- Badge
- Skeleton
- Spinner
- Empty state
- Error state
- Container
- Responsive layout

Do not start building every page before reusable foundations are ready.

---

# PHASE 4 — Application Shell

Build:

- Header
- Navigation
- Mobile navigation
- Footer
- Main layout
- Breadcrumbs
- Global notification system
- Global loading/error handling

Verify responsive behavior.

---

# PHASE 5 — Authentication

Implement based strictly on backend APIs:

- Register
- Login
- Logout
- Authentication persistence
- Protected routes
- User state
- Unauthorized handling
- Profile

Test all authentication flows.

---

# PHASE 6 — Home Page

Build the homepage using reusable sections.

Potential sections:

```text
Hero
Categories
Featured Products
New Arrivals
Best Sellers
Promotional Banner
Benefits
Testimonials
Newsletter
Footer
```

Only use sections that match the actual business requirements.

Avoid creating fake content if real backend data exists.

---

# PHASE 7 — Product Discovery

Implement:

- Product listing
- Categories
- Search
- Filters
- Sorting
- Pagination
- Product cards
- Loading states
- Empty states
- Error states

Use the existing backend API capabilities.

---

# PHASE 8 — Product Details

Implement:

- Product gallery
- Product information
- Price
- Discount
- Stock
- Variants
- Quantity
- Add to cart
- Wishlist if supported
- Description
- Specifications
- Reviews if supported
- Related products if supported

Break the page into reusable components.

---

# PHASE 9 — Cart

Implement:

- Cart retrieval
- Add item
- Remove item
- Update quantity
- Cart totals
- Empty state
- Loading state
- Error state
- Cart persistence according to backend behavior

Ensure backend remains the source of truth.

---

# PHASE 10 — Checkout

Implement:

- Address
- Shipping information
- Order review
- Discounts if supported
- Shipping charges
- Payment integration
- Order creation
- Loading states
- Validation
- Failure handling
- Success confirmation

Do not invent payment behavior.

Follow the backend's existing payment contract.

---

# PHASE 11 — Orders

Implement:

- Order history
- Order details
- Order status
- Product information
- Payment status
- Shipping information
- Empty state
- Loading state
- Error state

---

# PHASE 12 — Profile & Customer Account

Implement:

- Profile
- Edit profile
- Password management if supported
- Addresses
- Wishlist
- Orders
- Account navigation

Only expose features supported by backend APIs.

---

# PHASE 13 — Global UX Polish

Perform a full UX review.

Check:

- Loading states
- Error states
- Empty states
- Toast messages
- Button states
- Form validation
- Responsive layouts
- Navigation
- Accessibility
- Mobile interactions
- Confirmation dialogs

---

# PHASE 14 — Testing

Test each feature independently.

## Functional Testing

Test:

- Registration
- Login
- Logout
- Search
- Filtering
- Product details
- Add to cart
- Update cart
- Remove cart item
- Checkout
- Payment
- Order creation
- Order history
- Profile

## Edge Cases

Test:

- Invalid credentials
- Expired authentication
- Product out of stock
- Product deleted
- Empty cart
- Network failure
- Backend 500
- Invalid form
- Slow API
- Duplicate requests
- Unauthorized API
- Missing image
- Long product names
- Large prices
- Zero results

---

# PHASE 15 — Responsive QA

Check every major page on:

```text
320px
375px
425px
768px
1024px
1280px
1440px
1920px
```

Fix:

- Overflow
- Broken layouts
- Incorrect spacing
- Typography issues
- Navigation issues
- Touch target issues

---

# PHASE 16 — Performance Optimization

Review:

- API request duplication
- Unnecessary rendering
- Large images
- Bundle size
- Lazy loading
- Route splitting
- Redux state updates
- Component complexity

Only optimize where there is an actual benefit.

---

# PHASE 17 — Production Readiness

Before deployment:

- [ ] Remove debug logs
- [ ] Remove test data
- [ ] Verify environment variables
- [ ] Verify API URL
- [ ] Verify authentication
- [ ] Verify payment
- [ ] Verify CORS configuration
- [ ] Verify error handling
- [ ] Verify responsive UI
- [ ] Verify production build
- [ ] Test production build locally
- [ ] Verify routing configuration
- [ ] Verify image handling
- [ ] Verify security-sensitive values

---

# 32. Antigravity Development Rules

Antigravity must follow these rules throughout the project.

## Rule 1 — Inspect Before Building

Never start implementing a feature without first understanding the relevant existing code and API.

## Rule 2 — Backend Is Read-Only by Default

The backend may be explored and analyzed.

It must not be changed unless explicitly approved.

## Rule 3 — Never Invent APIs

Do not create assumed endpoints such as:

```text
/api/products
/api/cart
/api/orders
```

unless they actually exist in the backend.

Use the real API contract.

## Rule 4 — Ask Before Backend Changes

If a backend change is necessary, stop and report:

```text
Backend Change Required

Problem:
...

Why frontend cannot solve it:
...

Proposed backend change:
...

Affected endpoint:
...

Expected response:
...

Please approve before making backend changes.
```

## Rule 5 — Reuse Before Creating

Before creating a component, search the project for an existing component that can be reused.

## Rule 6 — Avoid Duplicate Logic

Do not duplicate:

- API calls
- Validation
- Formatting
- Product card markup
- Button styles
- Error handling
- Loading states

## Rule 7 — Keep Components Small

If a component becomes unnecessarily large, split it into logical reusable components.

## Rule 8 — No Business Logic in UI

Keep API and business logic outside presentation components whenever practical.

## Rule 9 — No Hardcoded Backend Data

Do not hardcode product, category, cart, order, or user data when the backend provides it.

## Rule 10 — Preserve Existing Work

Do not rewrite working code just for stylistic preference.

Make incremental changes.

---

# 33. Feature Completion Standard

A feature is NOT considered complete merely because the happy path works.

Every feature must include:

```text
UI
+
API Integration
+
Loading State
+
Error State
+
Empty State
+
Validation
+
Responsive Design
+
Toast/Feedback
+
Accessibility
+
Edge Case Handling
```

Where applicable.

---

# 34. Definition of Done

A feature is considered DONE only when:

- [ ] Backend API contract verified
- [ ] Service implemented
- [ ] State management implemented appropriately
- [ ] UI implemented
- [ ] Reusable components extracted
- [ ] Loading state implemented
- [ ] Error state implemented
- [ ] Empty state implemented
- [ ] Validation implemented
- [ ] Toast feedback implemented
- [ ] Responsive design verified
- [ ] Accessibility reviewed
- [ ] API errors handled
- [ ] Edge cases tested
- [ ] No unnecessary duplicate code
- [ ] No console errors
- [ ] No unnecessary backend modifications
- [ ] Production build succeeds

---

# 35. Documentation Requirements

Maintain these documents during development:

```text
PRD.md
BACKEND-API-AUDIT.md
API-CONTRACT.md
FRONTEND-ARCHITECTURE.md
DESIGN-SYSTEM.md
COMPONENT-INVENTORY.md
DEVELOPMENT-PHASES.md
KNOWN-ISSUES.md
BACKEND-CHANGE-REQUESTS.md
```

Update documentation whenever architecture or API assumptions change.

---

# 36. Development Workflow

For every phase, follow:

```text
1. Inspect
↓
2. Understand
↓
3. Plan
↓
4. Confirm API contract
↓
5. Implement reusable foundation
↓
6. Implement feature
↓
7. Connect API
↓
8. Handle loading/error/empty states
↓
9. Test
↓
10. Responsive QA
↓
11. Refactor
↓
12. Document
↓
13. Move to next phase
```

Do not implement the entire project blindly in one pass.

---

# 37. Antigravity Execution Strategy

Work incrementally.

After each phase:

1. Explain what was implemented.
2. List files created/modified.
3. Explain API endpoints used.
4. Mention any assumptions.
5. Report bugs or blockers.
6. Report any backend changes that appear necessary.
7. Ask for approval before backend modification.
8. Do not proceed to unrelated phases if a critical blocker exists.

---

# 38. First Task for Antigravity

Do NOT immediately build the homepage.

The first task is:

## Backend + Existing Project Discovery

Analyze the existing project and produce:

### A. Backend API Audit

Document:

- Authentication APIs
- User APIs
- Product APIs
- Category APIs
- Cart APIs
- Wishlist APIs
- Order APIs
- Payment APIs
- Upload APIs
- Search/filter APIs

### B. API Contract

Document actual:

- URLs
- HTTP methods
- Request bodies
- Query parameters
- Response structures
- Authentication requirements
- Error responses

### C. Frontend Requirements Matrix

Create:

| Feature | Backend Available | Frontend Required | Status |
|---|---|---|---|
| Authentication | Yes/No | Yes | |
| Products | Yes/No | Yes | |
| Categories | Yes/No | Yes | |
| Search | Yes/No | Yes | |
| Cart | Yes/No | Yes | |
| Wishlist | Yes/No | Optional | |
| Checkout | Yes/No | Yes | |
| Payment | Yes/No | Yes | |
| Orders | Yes/No | Yes | |
| Profile | Yes/No | Yes | |

### D. Backend Change Report

If something is missing, DO NOT change it.

Create:

```text
BACKEND-CHANGE-REQUESTS.md
```

and explain what is required.

Then STOP and ask for approval.

---

# 39. Final Instruction to Antigravity

You are acting as a senior frontend architect and senior React engineer.

Your responsibility is to build a production-quality e-commerce frontend using the existing backend.

Prioritize:

1. Existing API compatibility
2. Reusable architecture
3. Clean React code
4. Consistent UI
5. Responsive design
6. Maintainability
7. Performance
8. Accessibility
9. Error handling
10. Production readiness

The backend is NOT yours to modify automatically.

Explore it.

Understand it.

Integrate with it.

If a backend change becomes necessary, clearly report it and request explicit approval before making any backend modification.

Do not guess.

Do not invent endpoints.

Do not duplicate components.

Do not duplicate API logic.

Do not hardcode backend data.

Do not implement everything in one giant step.

Build the project phase by phase and validate each phase before moving forward.

The final result should feel like a professional, scalable e-commerce application built by an experienced React engineering team.