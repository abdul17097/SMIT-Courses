# BACKEND API AUDIT REPORT

## 1. Backend Architecture Overview
- **Technology Stack**: Node.js, Express v5 (`5.2.1`), MongoDB with Mongoose (`9.7.3`), JWT (`9.0.3`), Cookie-Parser (`1.4.7`), Stripe (`22.4.0`), Bcryptjs (`3.0.3`), CORS (`2.8.6`).
- **Server Entry Point**: [backend/src/index.js](file:///d:/SMIT-Courses/Web%20B4%20Sec%20E/Backend/e-com/backend/src/index.js) running on port `5000` (or `process.env.PORT`).
- **Database Connection**: MongoDB Atlas cluster managed in [backend/src/config/dbConnection.js](file:///d:/SMIT-Courses/Web%20B4%20Sec%20E/Backend/e-com/backend/src/config/dbConnection.js).
- **CORS Configuration**: Configured with origins `http://localhost:5173` and `http://localhost:3000`, with `credentials: true` to support HTTP-only cookie exchange.
- **Base API Path**: All primary entity routes are mounted under `/api` in [backend/src/routes/index.js](file:///d:/SMIT-Courses/Web%20B4%20Sec%20E/Backend/e-com/backend/src/routes/index.js).

---

## 2. Authentication Architecture & Endpoints
- **Base Route**: `/api/auth`
- **Endpoints**:
  - `POST /api/auth/signup`: Registers a new user. Accepts `username`, `email`, `password`, `authProvider` (`LOCAL` | `GOOGLE`), `googleId`, `avatar`, `role` (`BUYER` | `SELLER` | `ADMIN`), `shopName` (required for `SELLER`). Sets HTTP-only cookie `token`. Returns registered user object.
  - `POST /api/auth/login`: Authenticates user. Accepts `email`, `password` (for `LOCAL`), `authProvider`, `googleId`, `avatar`. Sets HTTP-only cookie `token`. Returns user object.
  - `POST /api/auth/logout`: Clears the HTTP-only cookie `token`.
- **Token Format**: JWT payload `{ role, id }` signed with `JWT_SECRET`, valid for 1 hour.
- **Session Persistence**: HTTP-only cookie named `token` (`sameSite: "strict"`, `httpOnly: true`).

---

## 3. Products Management Endpoints
- **Base Route**: `/api/product`
- **Endpoints**:
  - `GET /api/product/get`: Fetch list of products. **Requires authentication** (`authMiddleware` and `checkRole(["SELLER", "BUYER", "ADMIN"])`). Supports query params:
    - `limit` (default: 10)
    - `skip` (number of items to skip)
    - `category` (string filter)
    - `price` (`"high"` | `"low"` sort - applied in seller aggregate pipeline)
  - `GET /api/product/:productId`: Public route to view single product details.
  - `POST /api/product/create`: Seller-only (`SELLER`). Creates product (`name`, `description`, `price`, `category`, `stock`).
  - `PUT /api/product/:productId`: Updates product (`SELLER`, `ADMIN`).
  - `DELETE /api/product/:productId`: Deletes product (`SELLER`, `ADMIN`).

---

## 4. Categories Capabilities
- **Current Architecture**: No standalone Category collection or category CRUD routes exist. Categories are represented as plain string fields (`category`) on `Product` documents.

---

## 5. Cart Management Endpoints
- **Base Route**: `/api/cart`
- **Endpoints**:
  - `GET /api/cart/`: Requires auth (`BUYER`, `SELLER`). Aggregates and returns user's cart items.
  - `POST /api/cart/addtocart`: Requires auth (`BUYER`, `SELLER`). Body: `{ productId, requestedQuantity }`. Checks product stock before adding/updating item quantity.
  - `DELETE /api/cart/`: Requires auth (`BUYER`, `SELLER`). Clears entire user cart.
  - `DELETE /api/cart/:productId`: Requires auth (`BUYER`, `SELLER`). Removes item from cart by product ID.

---

## 6. Wishlist Capabilities
- **Status**: **NOT IMPLEMENTED** in backend. No schemas, controllers, or endpoints exist for wishlist.

---

## 7. Orders Capabilities
- **Status**: **NOT IMPLEMENTED** in backend. [backend/src/modals/order.js](file:///d:/SMIT-Courses/Web%20B4%20Sec%20E/Backend/e-com/backend/src/modals/order.js) is empty (0 bytes). No order controller or order routes exist.

---

## 8. User & Admin Management Endpoints
- **Base Route**: `/api/admin`
- **Endpoints**:
  - `GET /api/admin/`: Admin only (`ADMIN`). Fetches all users. Query param: `userStatus` (`"all"`, `"active"`, `"inactive"`).
  - `POST /api/admin/create`: Admin only (`ADMIN`). Creates a new user record.
  - `PATCH /api/admin/`: Auth required (`ADMIN`, `SELLER`, `BUYER`). Updates profile. Admins can update any user via `userId` payload; standard users update their own profile.
  - `DELETE /api/admin/:userId`: Allowed for `ADMIN` & `SELLER`. Performs soft delete by setting `isActive: false`.

---

## 9. Payment Integration Analysis
- **Current State**: Single route `GET /checkout` in [backend/src/index.js](file:///d:/SMIT-Courses/Web%20B4%20Sec%20E/Backend/e-com/backend/src/index.js).
- **Behavior**: Initializes a Stripe Checkout Session using hardcoded mock line items (`Test product`, $20 USD). Returns Stripe checkout session URL.
- **Gaps**: Does not read items from user cart, does not validate actual order total, has no webhook listener or order creation logic upon payment success.

---

## 10. Media / Image Handling Analysis
- **Packages Installed**: `cloudinary`, `multer`.
- **Current State**: Neither Cloudinary nor Multer middleware is attached to product routes or user controllers. `images` array on Product model defaults to empty array `[]`.

---

## 11. Pagination Behavior
- **Query Parameters**: `limit` and `skip`.
- **Implementation**: Handled using `$skip` and `$limit` in MongoDB aggregation pipeline inside `getAllProducts`.
- **Gap**: Total product count and total page metadata are not returned in the API response.

---

## 12. Filtering Capabilities
- **Category Filter**: Supported via `category` query parameter on `GET /api/product/get`.
- **Search Query (`q`)**: **NOT SUPPORTED**. No text search or regular expression matching is implemented in `getAllProducts`.

---

## 13. Sorting Capabilities
- **Price Sort**: Seller pipeline supports `price="high"` (descending) or `price="low"` (ascending). Buyer/Admin pipeline does not currently incorporate sorting in its aggregate stages.

---

## 14. Error Handling Format & Status Codes
- **Middleware**: [backend/src/middlewares/errorMiddleware.js](file:///d:/SMIT-Courses/Web%20B4%20Sec%20E/Backend/e-com/backend/src/middlewares/errorMiddleware.js)
- **JSON Error Format**:
```json
{
  "success": false,
  "message": "Detailed error message string"
}
```
- **Observed HTTP Status Codes**:
  - `400`: Bad Request (Validation errors, missing parameters, stock limits)
  - `401`: Unauthorized ("Please log in.", "Invalid credentials")
  - `403`: Forbidden ("Access denied. Insufficient permissions.", "Unauthorized access")
  - `404`: Not Found ("Product not found", "Cart Not Found", "User Not Found")
  - `409`: Conflict ("A user with this email already exists")
  - `500`: Internal Server Error

---

## 15. Authentication Behavior & Session Management
- **Token Transmit Mechanism**: HTTP-Only Cookie (`token`).
- **Cookie Attributes**: `httpOnly: true`, `sameSite: "strict"`, `secure` (in production).
- **Expiration**: 1 hour (`3600000` ms).
- **Session Verification Gap**: No `/api/auth/me` endpoint exists. The frontend must rely on `PATCH /api/admin/` or a custom auth check to verify if the stored cookie is valid upon reload.

---

## 16. Frontend Dependencies Audit
- **Installed**: `react` (v19), `react-dom`, `react-router-dom` (v7), `@tailwindcss/vite` (v4), `tailwindcss`, `react-toastify`, `lucide-react`.
- **Required Additional**:
  - `axios`: Essential for centralized API instance, request interceptors, and `withCredentials: true`.
  - `@reduxjs/toolkit` & `react-redux`: Required for global state management (Auth state, Cart state, UI state).

---

## 17. Missing Capabilities & Critical Gaps
1. **Cart Item ID Missing in Projection**: `getCartProducts` projects `name`, `description`, `price`, `category`, `quantity`, `subtotal`, but omits `_id` or `productId`! The frontend cannot delete specific cart items (`DELETE /api/cart/:productId`) without `productId`.
2. **Product Grid Unprotected Access**: `GET /api/product/get` requires authentication cookie, preventing unauthenticated buyers from browsing products.
3. **No `/api/auth/me` Endpoint**: Cannot fetch currently logged-in user details on initial app load/refresh.
4. **Orders & Checkout Incomplete**: No order schema/controller/routes exist. `GET /checkout` uses static dummy data.
5. **No Wishlist API**: Wishlist functionality is missing from backend.
6. **No Image Upload Pipeline**: Product creation and update lack file upload middleware.

---

## 18. Potential / Proposed Backend Changes (For Approval Protocol)
When frontend phases require backend capabilities, formal approval reports will be submitted according to the **Backend Change Approval Protocol** (Section 4 of Master Prompt).
