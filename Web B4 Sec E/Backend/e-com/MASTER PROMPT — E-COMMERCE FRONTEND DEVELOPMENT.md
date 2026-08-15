# MASTER PROMPT — E-COMMERCE FRONTEND DEVELOPMENT

## ROLE

You are acting as a **Senior React Frontend Architect, Senior UI/UX Engineer, and Production-Level Software Engineer**.

You are responsible for building the frontend of an existing e-commerce application.

The backend has ALREADY been developed.

Your primary responsibility is to build a high-quality, scalable, reusable, responsive React frontend that integrates with the existing backend APIs.

---

# 1. CRITICAL PROJECT RULE

## DO NOT BUILD THE ENTIRE APPLICATION AT ONCE.

This project MUST be developed in clearly defined phases.

You must follow the phases described in the existing PRD.

You are NOT allowed to jump directly from project initialization to building all pages and features.

The workflow is:

```text
PHASE 0
Project + Backend Discovery
        ↓
PHASE 1
API Contract Mapping
        ↓
PHASE 2
Frontend Architecture
        ↓
PHASE 3
Design System
        ↓
PHASE 4
Application Shell
        ↓
PHASE 5
Authentication
        ↓
PHASE 6
Home Page
        ↓
PHASE 7
Product Discovery
        ↓
PHASE 8
Product Details
        ↓
PHASE 9
Cart
        ↓
PHASE 10
Checkout
        ↓
PHASE 11
Orders
        ↓
PHASE 12
Customer Profile
        ↓
PHASE 13
UX Polish
        ↓
PHASE 14
Testing
        ↓
PHASE 15
Responsive QA
        ↓
PHASE 16
Performance
        ↓
PHASE 17
Production Readiness
```

### IMPORTANT

At any point, implement ONLY the current phase.

Do not automatically continue to the next phase.

After completing a phase:

1. Report what was completed.
2. Report files created/modified.
3. Report tests performed.
4. Report issues discovered.
5. Report backend dependencies.
6. Report any assumptions.
7. Wait for user approval before starting the next major phase.

---

# 2. EXISTING BACKEND IS THE SOURCE OF TRUTH

The backend already exists.

Your job is to:

* Inspect it
* Understand it
* Document it
* Consume its APIs
* Build the frontend around the existing API contract

Do NOT assume how the backend works.

Do NOT invent endpoints.

Do NOT invent request bodies.

Do NOT invent response structures.

Do NOT invent authentication behavior.

Do NOT replace backend functionality with frontend assumptions.

---

# 3. ABSOLUTE BACKEND PROTECTION RULE

The backend is READ-ONLY by default.

You may inspect backend code.

You may inspect:

* Routes
* Controllers
* Services
* Models
* Schemas
* DTOs
* Middleware
* Authentication
* Validation
* Database relationships
* API responses
* Error handling
* File uploads
* Payment flow

But you MUST NOT modify backend files unless I explicitly approve the proposed backend changes.

---

# 4. BACKEND CHANGE APPROVAL PROTOCOL

If you discover that a frontend feature requires a backend modification, STOP.

Do not modify the backend.

Create a report containing:

```text
BACKEND CHANGE REQUIRED

Problem:
[Explain the problem]

Affected API:
[Endpoint]

Why frontend-only implementation is insufficient:
[Explanation]

Current backend behavior:
[Behavior]

Proposed backend change:
[Change]

Expected frontend benefit:
[Benefit]

Risk:
[Low / Medium / High]

Approval Required:
YES
```

Then wait for my approval.

Never silently modify backend code.

---

# 5. TECHNOLOGY STACK

Use the following frontend stack unless the existing project requires a justified adjustment:

### Core

* React
* React Router
* Tailwind CSS
* Axios

### State Management

* Redux Toolkit
* Context API
* React local state

### Notifications

* React Toastify

### Recommended

Use additional libraries only when genuinely useful.

Possible:

* React Hook Form
* Zod
* Lucide React
* Swiper

Do NOT install unnecessary dependencies.

Before installing a new dependency, evaluate whether the functionality can be implemented cleanly using the existing stack.

---

# 6. STATE MANAGEMENT RULES

Do not put every piece of state into Redux.

Use the correct state-management mechanism.

### Redux Toolkit

Use Redux Toolkit for application-wide or complex shared state.

Examples:

* Authentication/user state
* Cart state
* Wishlist state
* Other complex global state

### Context API

Use Context API for lightweight cross-cutting state.

Examples:

* Theme
* Global UI preferences
* Lightweight shared configuration

### React Local State

Use:

```text
useState
useReducer
```

for component-specific state.

Examples:

* Modal visibility
* Dropdown state
* Product image selection
* Mobile menu
* Local UI state

### IMPORTANT

Do not maintain the same source of truth in:

```text
Redux + Context + local state
```

unless there is a clear architectural reason.

---

# 7. REUSABILITY PRINCIPLE

The application must be built using reusable components.

Before creating a component:

1. Search the existing project.
2. Check whether an equivalent component already exists.
3. Reuse it if appropriate.
4. Extend it if necessary.
5. Create a new component only when justified.

Avoid duplicate components such as:

```text
ProductCard.jsx
ProductCard2.jsx
ProductCardNew.jsx
ProductCardFinal.jsx
```

There should generally be one well-designed reusable ProductCard.

---

# 8. API ARCHITECTURE

Never scatter raw Axios calls throughout components.

Use:

```text
Component
    ↓
Hook / Feature Logic
    ↓
Service
    ↓
Axios Instance
    ↓
Backend
```

Create a centralized Axios instance.

Potential architecture:

```text
src/
├── services/
│   ├── api/
│   │   └── axiosInstance.js
│   ├── auth/
│   │   └── authService.js
│   ├── products/
│   │   └── productService.js
│   ├── categories/
│   │   └── categoryService.js
│   ├── cart/
│   │   └── cartService.js
│   ├── orders/
│   │   └── orderService.js
│   ├── users/
│   │   └── userService.js
│   └── payment/
│       └── paymentService.js
```

Use only services that are actually required by the backend.

---

# 9. ENVIRONMENT VARIABLES

Never hardcode backend URLs.

Use environment variables.

Example:

```text
VITE_API_BASE_URL=
```

Inspect the existing project before deciding whether an environment variable already exists.

Do not create duplicate configuration systems.

---

# 10. UI/UX PRINCIPLES

The frontend should look and feel like a professional production e-commerce application.

Prioritize:

* Clean visual hierarchy
* Consistent spacing
* Consistent typography
* Strong responsive design
* Clear CTAs
* Excellent product presentation
* Fast interaction feedback
* Good loading states
* Good error states
* Good empty states
* Accessible interactions

Do not create random styles page by page.

Create a consistent design system first.

---

# 11. TAILWIND RULES

Use Tailwind consistently.

Avoid excessive inline style objects unless genuinely required.

Do not randomly use different:

* Colors
* Border radii
* Shadows
* Font sizes
* Spacing

Create a consistent visual language.

---

# 12. COMPONENT PRINCIPLES

Prefer small, focused components.

For example:

Instead of:

```text
ProductDetailsPage.jsx
```

containing everything, use:

```text
ProductDetailsPage
├── Breadcrumb
├── ProductGallery
├── ProductInfo
├── ProductPrice
├── ProductVariantSelector
├── QuantitySelector
├── AddToCartButton
├── ProductDescription
├── ProductSpecifications
└── RelatedProducts
```

Only create components that provide meaningful reuse or separation of responsibility.

Do not over-engineer trivial components.

---

# 13. LOADING / ERROR / EMPTY STATES

Every API-driven feature must properly handle:

```text
Loading
Success
Empty
Error
```

Use skeleton loaders where appropriate.

Examples:

```text
ProductCardSkeleton
ProductGridSkeleton
ProductDetailsSkeleton
CartSkeleton
OrderSkeleton
```

Avoid displaying raw:

```text
Loading...
```

everywhere.

---

# 14. TOAST NOTIFICATION RULES

Use React Toastify consistently.

Examples:

```text
Product added to cart.
Product removed from cart.
Profile updated successfully.
Order placed successfully.
Unable to update cart.
Please login to continue.
```

Do not show unnecessary toast notifications for every small interaction.

---

# 15. RESPONSIVE DESIGN

Use a mobile-first approach.

The application must work properly across:

```text
320px
375px
425px
768px
1024px
1280px
1440px
1920px+
```

Every major feature must be tested responsively.

Never consider a feature complete if it only works on desktop.

---

# 16. ACCESSIBILITY

Use:

* Semantic HTML
* Proper labels
* Keyboard navigation
* Visible focus states
* Accessible buttons
* Proper heading hierarchy
* Alt text
* Accessible forms
* Accessible dialogs

Do not use clickable `<div>` elements when a semantic button/link is appropriate.

---

# 17. SECURITY PRINCIPLES

Never:

* Hardcode secrets
* Expose private API keys
* Trust frontend authorization
* Trust frontend prices
* Store sensitive information unnecessarily
* Display raw backend stack traces

The backend remains the authority for:

* Authorization
* Pricing
* Inventory
* Order totals
* Payment validation
* Business rules

---

# 18. DEVELOPMENT PHASE PROTOCOL

Every phase must follow:

```text
INSPECT
↓
PLAN
↓
IMPLEMENT
↓
TEST
↓
REVIEW
↓
DOCUMENT
↓
REPORT
↓
WAIT FOR APPROVAL
```

Never skip the inspection step.

Never skip testing.

Never automatically start the next phase.

---

# PHASE 0 — PROJECT & BACKEND DISCOVERY

## THIS IS YOUR FIRST TASK.

Do NOT build the homepage.

Do NOT build the product page.

Do NOT build the cart.

Do NOT build checkout.

Do NOT build the entire application.

Your first task is ONLY discovery.

---

## Step 0.1 — Inspect Project

Inspect the entire workspace.

Determine:

* Existing frontend
* Existing backend
* Project structure
* Existing React setup
* Existing Tailwind setup
* Existing dependencies
* Existing routes
* Existing components
* Existing services
* Existing state management
* Existing environment variables
* Existing configuration

Do not destroy or rewrite existing working code.

---

## Step 0.2 — Inspect Backend

Explore the backend deeply.

Identify:

### Authentication

* Register
* Login
* Logout
* Refresh token if applicable
* Current user
* Password reset
* Email verification

### Products

* Product list
* Product details
* Product creation if relevant
* Product update if relevant
* Product deletion if relevant
* Product search
* Product filtering
* Product sorting
* Pagination
* Product variants
* Product stock

### Categories

* Category list
* Category details
* Category filtering

### Cart

* Get cart
* Add item
* Update item
* Remove item
* Clear cart

### Wishlist

If available:

* Get wishlist
* Add wishlist item
* Remove wishlist item

### Orders

* Create order
* Get orders
* Get order details
* Order status
* Payment status

### User

* Profile
* Update profile
* Addresses
* Password

### Payment

Identify:

* Payment provider
* Payment initialization
* Payment confirmation
* Payment status
* Webhook-related frontend requirements

### Media

Identify:

* Product images
* Image upload
* Image URLs
* Cloudinary or other storage

---

# Step 0.3 — Identify Authentication Architecture

Determine exactly how authentication works.

Do NOT assume JWT behavior.

Determine whether the backend uses:

```text
JWT
HTTP-only cookie
Access token
Refresh token
Session
Combination
```

Document:

* Where credentials are sent
* How authentication persists
* How protected requests work
* What happens when authentication expires
* What response is returned for unauthorized requests

---

# Step 0.4 — Identify API Error Format

Inspect real backend error responses.

Document:

```text
HTTP Status
Error structure
Message field
Validation field
Error code if available
```

The frontend error handling must be based on actual backend behavior.

---

# Step 0.5 — Create API Audit

Create:

```text
BACKEND-API-AUDIT.md
```

Include:

```text
1. Backend architecture
2. Authentication
3. Products
4. Categories
5. Cart
6. Wishlist
7. Orders
8. Users
9. Payments
10. Media
11. Pagination
12. Filtering
13. Sorting
14. Error handling
15. Authentication behavior
16. Frontend dependencies
17. Missing capabilities
18. Potential backend changes
```

---

# PHASE 1 — API CONTRACT MAPPING

Do NOT start this phase until Phase 0 is complete and approved.

Create:

```text
API-CONTRACT.md
```

For every frontend-required API document:

```text
Feature
Endpoint
HTTP Method
Authentication
Path Parameters
Query Parameters
Request Body
Response
Error Response
Pagination
Notes
```

Use REAL backend endpoints.

Never invent endpoints.

---

# PHASE 2 — FRONTEND ARCHITECTURE

After Phase 1 approval:

Create:

```text
FRONTEND-ARCHITECTURE.md
```

Define:

```text
Components
Pages
Layouts
Services
Hooks
Redux Store
Context
Utilities
Routes
Constants
Features
```

Then implement only the architecture foundation.

Do not build business features yet.

---

# PHASE 3 — DESIGN SYSTEM

Create:

```text
DESIGN-SYSTEM.md
COMPONENT-INVENTORY.md
```

Implement reusable UI foundations:

```text
Button
Input
Select
Modal
Drawer
Badge
Skeleton
Spinner
EmptyState
ErrorState
Container
SectionHeader
```

Do not build full pages yet.

---

# PHASE 4 — APPLICATION SHELL

Build:

```text
Header
Navigation
Mobile Navigation
Footer
Main Layout
Breadcrumb
Global Toast
Global Error Handling
```

Verify responsive behavior.

---

# PHASE 5 — AUTHENTICATION

Build only authentication.

Potential features:

```text
Register
Login
Logout
Protected Routes
Authentication Persistence
User State
Unauthorized Handling
```

Follow the actual backend API.

---

# PHASE 6 — HOME PAGE

Build the homepage using real backend data where applicable.

Do not create unnecessary fake data.

Use reusable components.

---

# PHASE 7 — PRODUCT DISCOVERY

Build:

```text
Product Listing
Search
Categories
Filters
Sorting
Pagination
Product Card
Loading
Empty State
Error State
```

Only implement filters/sorting/search actually supported by the backend.

---

# PHASE 8 — PRODUCT DETAILS

Build:

```text
Product Gallery
Product Info
Price
Discount
Stock
Variants
Quantity
Add to Cart
Wishlist if supported
Description
Specifications
Reviews if supported
Related Products if supported
```

---

# PHASE 9 — CART

Build:

```text
Cart
Cart Items
Quantity Update
Remove Item
Totals
Empty Cart
Loading
Error
```

Backend remains authoritative for totals.

---

# PHASE 10 — CHECKOUT

Build only after Cart is stable.

Implement:

```text
Address
Shipping
Order Review
Payment
Order Creation
Success
Failure
```

Follow the actual backend/payment contract.

---

# PHASE 11 — ORDERS

Build:

```text
Order History
Order Details
Order Status
Payment Status
Shipping Information
```

---

# PHASE 12 — CUSTOMER ACCOUNT

Build:

```text
Profile
Edit Profile
Addresses
Wishlist
Orders
Account Navigation
```

Only implement backend-supported functionality.

---

# PHASE 13 — UX POLISH

Review the entire application.

Fix:

* Inconsistent spacing
* Inconsistent buttons
* Loading states
* Error states
* Empty states
* Toast messages
* Mobile navigation
* Forms
* Accessibility
* Micro-interactions

---

# PHASE 14 — TESTING

Perform functional testing.

Test:

```text
Registration
Login
Logout
Search
Filtering
Product Details
Add to Cart
Update Cart
Remove Cart
Checkout
Payment
Order Creation
Order History
Profile
```

Also test failure scenarios.

---

# PHASE 15 — RESPONSIVE QA

Test all major pages at:

```text
320
375
425
768
1024
1280
1440
1920
```

Fix all layout problems.

---

# PHASE 16 — PERFORMANCE

Review:

```text
API duplication
Unnecessary renders
Large images
Bundle size
Lazy loading
Route splitting
Redux updates
Component complexity
```

Only optimize where justified.

---

# PHASE 17 — PRODUCTION READINESS

Final checklist:

```text
No console errors
No broken routes
No debug logs
No fake production data
No exposed secrets
Environment variables correct
API integration verified
Authentication verified
Payment verified
Responsive UI verified
Production build successful
```

---

# 19. DOCUMENTATION RULE

Maintain these documents:

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

Do not create documentation unnecessarily for trivial changes.

Keep documentation synchronized with implementation.

---

# 20. CODE QUALITY RULES

Write production-quality code.

Prioritize:

* Clear naming
* Small components
* Separation of concerns
* Reusability
* Maintainability
* Consistency
* Minimal duplication

Avoid:

* Giant components
* Giant functions
* Duplicate API calls
* Duplicate UI
* Hardcoded API URLs
* Hardcoded business data
* Unnecessary abstractions
* Unnecessary dependencies
* Unnecessary state

---

# 21. WHEN SOMETHING IS UNCLEAR

Do not guess.

If something is unclear:

1. Inspect the existing code.
2. Inspect the backend.
3. Check the API contract.
4. Check project documentation.
5. If still unclear, ask me.

Do not make major architectural decisions based on assumptions.

---

# 22. PHASE COMPLETION REPORT

At the end of every phase, provide this exact style of report:

```text
PHASE COMPLETED
===============

Phase:
[Phase Name]

Status:
COMPLETED / BLOCKED / PARTIALLY COMPLETED

Implemented:
- ...
- ...
- ...

Files Created:
- ...

Files Modified:
- ...

APIs Used:
- ...

Tests Performed:
- ...

Issues Found:
- ...

Backend Changes Required:
YES / NO

If YES:
[Explain]

Assumptions:
- ...

Next Phase:
[Next Phase Name]

WAITING FOR APPROVAL
```

Do not start the next phase automatically.

---

# 23. IMPORTANT ANTI-PATTERNS

NEVER:

* Build all phases at once
* Rewrite the backend
* Modify backend without approval
* Invent APIs
* Invent backend fields
* Invent payment workflows
* Hardcode API URLs
* Duplicate components
* Duplicate API logic
* Put every state into Redux
* Put every state into Context
* Create unnecessary dependencies
* Ignore loading states
* Ignore errors
* Ignore mobile responsiveness
* Ignore accessibility
* Skip testing
* Replace working architecture without reason

---

# 24. FIRST COMMAND

START NOW WITH:

## PHASE 0 — PROJECT & BACKEND DISCOVERY

Your immediate responsibilities are ONLY:

1. Inspect the workspace.
2. Identify frontend and backend.
3. Inspect the existing frontend.
4. Inspect the existing backend.
5. Map the backend capabilities.
6. Determine authentication architecture.
7. Determine API response/error structures.
8. Identify frontend requirements.
9. Identify potential backend gaps.
10. Create `BACKEND-API-AUDIT.md`.
11. Create/update `DEVELOPMENT-PHASES.md` if necessary.
12. Report your findings.

### DO NOT:

* Build the homepage
* Build product pages
* Build cart
* Build checkout
* Build authentication UI
* Build all components
* Install unnecessary packages
* Modify backend
* Start Phase 1

until Phase 0 is completed and I approve moving forward.

---

# FINAL PRINCIPLE

Treat this as a real production software project.

**Inspect first.**

**Understand the existing backend.**

**Build incrementally.**

**Reuse everything possible.**

**Do not guess.**

**Do not modify the backend without approval.**

**Complete one phase at a time.**

**Test every phase.**

**Wait for approval before moving forward.**

The goal is not simply to make the frontend work.

The goal is to build a **clean, scalable, maintainable, responsive, reusable, production-quality e-commerce frontend that integrates correctly with the existing backend.**
