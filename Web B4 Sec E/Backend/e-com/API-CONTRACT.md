# API CONTRACT & BACKEND MAPPING DOCUMENT

This document lists all backend APIs available for frontend integration, along with their parameters, request payloads, authentication requirements, and response structures.

---

## Master API Summary Table

| Feature | Endpoint | Method | Auth | Request | Response |
|---|---|---|---|---|---|
| **Signup** | `/api/auth/signup` | `POST` | Public | `{ username, email, password, role, shopName, authProvider }` | `{ success: true, message, user }` + Cookie `token` |
| **Login** | `/api/auth/login` | `POST` | Public | `{ email, password, authProvider, googleId, avatar }` | `{ success: true, message, user }` + Cookie `token` |
| **Logout** | `/api/auth/logout` | `POST` | Auth (`token`) | None | `{ success: true, message }` (Clears cookie) |
| **Get Products** | `/api/product/get` | `GET` | Auth (`token`) | Query: `limit`, `skip`, `category`, `price` | `{ success: true, data: [ products ] }` |
| **Get Product Details** | `/api/product/:productId` | `GET` | Public | Path: `productId` | `{ success: true, message, data: product }` |
| **Create Product** | `/api/product/create` | `POST` | Auth (`SELLER`) | `{ name, description, price, category, stock }` | `{ success: true, data: newProduct }` |
| **Update Product** | `/api/product/:productId` | `PUT` | Auth (`SELLER`, `ADMIN`) | Path: `productId`, Body: `{ name, price, stock, ... }` | `{ success: true, data: updatedProduct }` |
| **Delete Product** | `/api/product/:productId` | `DELETE` | Auth (`SELLER`, `ADMIN`) | Path: `productId` | `{ success: true, message, data }` |
| **Get Cart** | `/api/cart/` | `GET` | Auth (`BUYER`, `SELLER`) | None | `{ success: true, message, data: [ items ] }` |
| **Add to Cart** | `/api/cart/addtocart` | `POST` | Auth (`BUYER`, `SELLER`) | `{ productId, requestedQuantity }` | `{ success: true, message, data: cart }` |
| **Remove Cart Item** | `/api/cart/:productId` | `DELETE` | Auth (`BUYER`, `SELLER`) | Path: `productId` | `{ success: true, message }` |
| **Clear Cart** | `/api/cart/` | `DELETE` | Auth (`BUYER`, `SELLER`) | None | `{ success: true, message }` |
| **Update Profile** | `/api/admin/` | `PATCH` | Auth (`BUYER`, `SELLER`, `ADMIN`) | `{ username, email, password, avatar, shopName }` | `{ success: true, message, data: updatedUser }` |
| **List Users (Admin)** | `/api/admin/` | `GET` | Auth (`ADMIN`) | Query: `userStatus` (`all` \| `active` \| `inactive`) | `{ success: true, message, data: [ users ] }` |
| **Stripe Checkout** | `/checkout` | `GET` | Public | None | `{ id: "stripe_session_url" }` |

---

## Detailed Endpoint Breakdown

### 1. Authentication APIs
- **`POST /api/auth/signup`**:
  - Request: `{ username: string, email: string, password: string, role?: "BUYER" | "SELLER" | "ADMIN", shopName?: string, authProvider?: "LOCAL" | "GOOGLE" }`
  - Response (`201`): `{ success: true, message: "User registered successfully", user: { _id, username, email, role, shopName, authProvider } }`
  - Auth: Sets HTTP-Only cookie `token` (`httpOnly: true`, `sameSite: "strict"`, `maxAge: 3600000`).

- **`POST /api/auth/login`**:
  - Request: `{ email: string, password: string, authProvider?: "LOCAL" | "GOOGLE" }`
  - Response (`200`): `{ success: true, message: "Login successful", user: { _id, username, email, role, shopName, authProvider } }`
  - Auth: Sets HTTP-Only cookie `token`.

- **`POST /api/auth/logout`**:
  - Request: None
  - Response (`200`): `{ success: true, message: "Logout successful" }`
  - Auth: Clears HTTP-Only cookie `token`.

---

### 2. Product APIs
- **`GET /api/product/get`**:
  - Auth Required: Cookie `token` (Roles: `BUYER`, `SELLER`, `ADMIN`).
  - Query Params: `limit` (number), `skip` (number), `category` (string), `price` (`"high"` | `"low"`).
  - Response (`200`): `{ success: true, data: [ { _id, name, description, price, category, images, stock, seller, createdAt, updatedAt } ] }`.

- **`GET /api/product/:productId`**:
  - Auth: Public.
  - Path Param: `productId` (MongoDB ObjectId string).
  - Response (`200`): `{ success: true, message: "Product Details", data: { _id, name, description, price, category, images, stock, seller } }`.

---

### 3. Cart APIs
- **`GET /api/cart/`**:
  - Auth Required: Cookie `token` (Roles: `BUYER`, `SELLER`).
  - Response (`200`): `{ success: true, message: "All Cart Products", data: [ { quantity, name, description, price, category, subtotal } ] }`.

- **`POST /api/cart/addtocart`**:
  - Auth Required: Cookie `token` (Roles: `BUYER`, `SELLER`).
  - Request: `{ productId: string, requestedQuantity: number }`.
  - Response (`200`): `{ success: true, message: "Product added to cart successfully", data: { _id, user, items } }`.

- **`DELETE /api/cart/:productId`**:
  - Auth Required: Cookie `token`.
  - Path Param: `productId` (string).
  - Response (`200`): `{ success: true, message: "Product Delted Successfullly" }`.

- **`DELETE /api/cart/`**:
  - Auth Required: Cookie `token`.
  - Response (`200`): `{ success: true, message: "Cleared Cart" }`.

---

### 4. User Profile APIs
- **`PATCH /api/admin/`**:
  - Auth Required: Cookie `token` (Roles: `BUYER`, `SELLER`, `ADMIN`).
  - Request: `{ username?: string, email?: string, password?: string, avatar?: string, shopName?: string }`.
  - Response (`200`): `{ success: true, message: "User Updated Successfully!", data: { _id, username, email, role, shopName, avatar } }`.

---

### 5. Payment API
- **`GET /checkout`**:
  - Auth: Public.
  - Response (`200`): `{ id: "https://checkout.stripe.com/c/pay/..." }`.

---

## Identification of Backend Capability Gaps
1. **Current User Endpoint**: `/api/auth/me` does not exist in backend. Frontend session state relies on login/signup payload and user update query.
2. **Categories**: No standalone category CRUD model. Categories are managed as plain string fields.
3. **Wishlist**: Wishlist backend routes are not implemented.
4. **Orders**: Order backend model (`order.js`) is 0 bytes and no order endpoints exist. Frontend implements order tracking with local session fallback.
5. **Cart Item ID**: `GET /api/cart/` aggregate projection omits `productId`.
