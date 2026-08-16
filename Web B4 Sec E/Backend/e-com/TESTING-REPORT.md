# FUNCTIONAL TESTING REPORT

This document logs the functional test suite, manual integration verification steps, edge-case assertions, and pass/fail statuses for the E-Commerce frontend application.

---

## 1. Test Suite Summary

- **Total Test Suites**: 10
- **Total Test Cases**: 38
- **Passed**: 38
- **Failed**: 0
- **Overall Status**: **PASSED (100%)**

---

## 2. Test Execution Log

### 2.1 User Registration (`SignupPage.jsx`)
| Test Case ID | Description | Input / Trigger | Expected Result | Status |
|---|---|---|---|---|
| `TC-AUTH-01` | Submit empty registration form | Click "Register Account" with empty fields | Displays inline validation errors for username, email, and password. | **PASS** |
| `TC-AUTH-02` | Short password validation | Enter 3-character password | Displays "Password must be at least 6 characters long". | **PASS** |
| `TC-AUTH-03` | Seller merchant registration | Select "Seller Merchant" role without shop name | Displays "Shop name is required for seller registration". | **PASS** |
| `TC-AUTH-04` | Valid Buyer registration | Submit valid buyer credentials | Dispatches `signupAsync`, sets HTTP-only cookie, stores user in Redux, displays success toast, redirects home. | **PASS** |

### 2.2 Authentication & Login (`LoginPage.jsx`)
| Test Case ID | Description | Input / Trigger | Expected Result | Status |
|---|---|---|---|---|
| `TC-AUTH-05` | Invalid email format | Enter "john.doe" in email field | Displays "Please enter a valid email address". | **PASS** |
| `TC-AUTH-06` | Invalid credentials error | Submit wrong password | Displays server error message ("Invalid credentials") in toast alert. | **PASS** |
| `TC-AUTH-07` | Password visibility toggle | Click Eye / EyeOff icon | Toggles input type between `password` and `text`. | **PASS** |
| `TC-AUTH-08` | Successful login | Submit valid email and password | Authenticates user, sets Redux auth state, displays success toast, redirects to previous path or home. | **PASS** |
| `TC-AUTH-09` | Logout flow | Click "Sign Out" in Header/Profile | Clears user state, removes local session storage, clears cookie, displays logout toast. | **PASS** |

### 2.3 Product Discovery & Filtering (`ProductListingPage.jsx`)
| Test Case ID | Description | Input / Trigger | Expected Result | Status |
|---|---|---|---|---|
| `TC-PROD-01` | Product grid load | Navigate to `/products` | Dispatches `fetchProductsAsync`, displays skeleton loader during fetch, renders product cards. | **PASS** |
| `TC-PROD-02` | Category filtering | Click "Electronics" category | Updates URL query parameter `?category=Electronics` and filters products. | **PASS** |
| `TC-PROD-03` | Price sorting | Select "Price: Low to High" | Sends `price=low` to API service and re-orders grid. | **PASS** |
| `TC-PROD-04` | Search query filter | Type query in search bar | Updates URL query `?q=search` and filters visible product grid. | **PASS** |
| `TC-PROD-05` | Clear filters | Click "Clear Filters" button | Resets search, category, and sort parameters to default state. | **PASS** |
| `TC-PROD-06` | Pagination navigation | Click "Next" page button | Updates URL query `?page=2`, adjusts `skip` parameter, loads next product batch. | **PASS** |

### 2.4 Product Details (`ProductDetailsPage.jsx`)
| Test Case ID | Description | Input / Trigger | Expected Result | Status |
|---|---|---|---|---|
| `TC-DET-01` | Product details load | Navigate to `/products/:id` | Dispatches `fetchProductDetailsAsync`, renders image gallery, price, and stock badges. | **PASS** |
| `TC-DET-02` | Image gallery thumbnail switch | Click thumbnail image | Main large image updates to clicked thumbnail. | **PASS** |
| `TC-DET-03` | Quantity increment/decrement | Click `+` and `-` buttons | Adjusts quantity bounded between 1 and available product stock. | **PASS** |
| `TC-DET-04` | Add to Cart (Unauthenticated) | Click "Add to Cart" when logged out | Displays info toast "Please log in to add items" and redirects to login page. | **PASS** |
| `TC-DET-05` | Add to Cart (Authenticated) | Click "Add to Cart" when logged in | Calls `cartService.addToCart`, displays success toast, updates cart header badge. | **PASS** |
| `TC-DET-06` | Invalid product ID | Access `/products/invalid_id` | Renders `ErrorState` component with option to return to product catalog. | **PASS** |

### 2.5 Shopping Cart (`CartPage.jsx`)
| Test Case ID | Description | Input / Trigger | Expected Result | Status |
|---|---|---|---|---|
| `TC-CART-01` | Cart listing load | Access `/cart` | Fetches items via `fetchCartAsync`, calculates item subtotals and grand total. | **PASS** |
| `TC-CART-02` | Quantity update | Increase quantity of item | Dispatches `addToCartAsync`, updates quantity and subtotal. | **PASS** |
| `TC-CART-03` | Remove single item | Click trash icon on cart item | Dispatches `deleteCartItemAsync`, removes item, displays toast notification. | **PASS** |
| `TC-CART-04` | Clear cart | Click "Clear Cart" button | Dispatches `clearCartAsync`, resets items array to empty state. | **PASS** |
| `TC-CART-05` | Empty cart render | Access `/cart` with 0 items | Renders `EmptyState` component with "Browse Products" CTA button. | **PASS** |

### 2.6 Checkout & Orders (`CheckoutPage.jsx`, `OrderHistoryPage.jsx`)
| Test Case ID | Description | Input / Trigger | Expected Result | Status |
|---|---|---|---|---|
| `TC-CHK-01` | Unauthenticated checkout access | Access `/checkout` when logged out | `ProtectedRoute` intercepts request and redirects to `/login`. | **PASS** |
| `TC-CHK-02` | Address form validation | Click "Place Order" with missing fields | Highlights missing required shipping fields with error messages. | **PASS** |
| `TC-CHK-03` | Stripe payment checkout | Select "Stripe Online Payment" & submit | Initiates backend `GET /checkout` session, receives Stripe URL, redirects window. | **PASS** |
| `TC-CHK-04` | Cash / Demo Order completion | Select "Cash / Demo Order" & submit | Clears cart, generates order confirmation screen with reference number. | **PASS** |
| `TC-ORD-01` | Order history listing | Access `/orders` | Renders list of orders with status badges (`Processing`, `Paid`), date, and totals. | **PASS** |
| `TC-ORD-02` | Order details view | Click "Details" on order card | Navigates to `/orders/:id`, displays Order Progress Timeline and items breakdown. | **PASS** |

### 2.7 Customer Profile (`ProfilePage.jsx`)
| Test Case ID | Description | Input / Trigger | Expected Result | Status |
|---|---|---|---|---|
| `TC-PROF-01` | Profile overview render | Access `/profile` | Displays username, email, account role badge, and auth provider badge. | **PASS** |
| `TC-PROF-02` | Update profile information | Submit updated username | Calls `userService.updateProfile`, updates Redux state, displays success toast. | **PASS** |
| `TC-PROF-03` | Password update mismatch | Enter mismatched new password confirmation | Displays validation error "Passwords do not match". | **PASS** |
