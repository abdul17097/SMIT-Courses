# FRONTEND ARCHITECTURE DOCUMENTATION

This document defines the production-level architectural pattern, state management rules, service layer layout, routing hierarchy, and component organization for the E-Commerce React application.

---

## 1. Directory Structure Blueprint

```text
frontend/src/
├── assets/                  # Static assets (images, icons, logos)
├── components/              # Design system and reusable UI components
│   ├── common/              # Generic UI primitives (Button, Input, Modal, Badge, Spinner, etc.)
│   ├── layout/              # Shell layouts (Header, Footer, Sidebar, MainLayout)
│   └── feedback/            # Feedback UI (Skeleton, EmptyState, ErrorBoundary)
├── config/                  # Global application configuration & env vars
│   └── env.js
├── constants/               # System-wide constants & endpoints
│   ├── apiEndpoints.js      # Backend route mappings
│   └── appRoutes.js         # Frontend route paths
├── context/                 # Context API providers for lightweight UI state
│   └── UIContext.jsx        # Mobile menu toggle, modal states, theme
├── hooks/                   # Custom reusable React hooks
│   ├── useAuth.js           # Auth selector & helper logic
│   └── useDebounce.js       # Search/filter debouncing
├── pages/                   # Application page views
│   ├── auth/                # LoginPage, SignupPage
│   ├── home/                # HomePage
│   ├── products/            # ProductListingPage, ProductDetailsPage
│   ├── cart/                # CartPage
│   ├── checkout/            # CheckoutPage
│   ├── orders/              # OrderHistoryPage, OrderDetailsPage
│   └── profile/             # ProfilePage
├── routes/                  # Application routing definitions & guards
│   ├── AppRouter.jsx        # React Router routes definition
│   └── ProtectedRoute.jsx   # Role-based route guard
├── services/                # API communication layer
│   ├── api/
│   │   └── axiosInstance.js # Centralized Axios instance with interceptors
│   ├── authService.js
│   ├── productService.js
│   ├── cartService.js
│   ├── userService.js
│   └── paymentService.js
├── store/                   # Centralized Redux Toolkit state
│   ├── index.js             # Redux store configuration
│   └── slices/              # Feature slices
│       ├── authSlice.js     # User authentication state
│       ├── cartSlice.js     # Shopping cart state
│       └── productSlice.js  # Product listing state
└── utils/                   # Helper utilities
    ├── errorHandler.js      # Centralized error formatter
    └── formatters.js        # Price, currency, date formatters
```

---

## 2. API Communication Layer Architecture
All backend communication MUST follow the strict flow:
`Component → Custom Hook / Redux AsyncThunk → Service → Axios Instance → Backend API`

### Axios Instance Rules:
- Base URL loaded dynamically via `VITE_API_BASE_URL` env variable.
- `withCredentials: true` enabled on all requests to pass HTTP-only `token` cookie.
- Response interceptor converts API responses and extracts standard payload data.
- Global Error interceptor catches HTTP 401 (Unauthorized) and triggers session expiration handling.

---

## 3. State Management Architecture

### 3.1 Redux Toolkit (`store/`)
Used exclusively for application-wide shared domain state:
- **`authSlice`**: `user`, `isAuthenticated`, `role`, `loading`, `error`.
- **`cartSlice`**: `items`, `totalItems`, `subtotal`, `loading`, `error`.
- **`productSlice`**: `products`, `selectedProduct`, `filters`, `pagination`, `loading`, `error`.

### 3.2 Context API (`context/`)
Used for cross-cutting UI states:
- **`UIContext`**: Drawer open/closed, active modal state, mobile menu toggle.

### 3.3 React Local State (`useState` / `useReducer`)
Used for isolated component state:
- Form field values, dropdown popover toggles, image gallery active tab, local accordion states.

---

## 4. Routing Architecture
- Built with `react-router-dom` v7.
- Centralized routes defined in `src/routes/AppRouter.jsx`.
- Protected routes guarded by `ProtectedRoute.jsx` verifying role permissions (`BUYER`, `SELLER`, `ADMIN`).

---

## 5. Architectural Principles & Rules
1. **No Raw API Calls in Components**: Direct `fetch` or raw `axios` calls within React components are prohibited.
2. **Single Source of Truth**: Data must not be duplicated across Redux, Context, and local state simultaneously.
3. **Environment Separation**: API URLs and external keys are configured strictly via environment variables.
