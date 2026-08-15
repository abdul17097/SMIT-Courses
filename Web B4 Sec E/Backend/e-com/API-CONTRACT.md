# API CONTRACT DOCUMENTATION

This document defines the exact API contracts for all endpoints available in the existing backend. All frontend service integrations MUST adhere to these exact definitions without inventing or modifying endpoints.

---

## 1. Authentication APIs

### 1.1 User Signup
- **Feature**: Register a new user account (Buyer, Seller, or Admin).
- **Endpoint**: `/api/auth/signup`
- **HTTP Method**: `POST`
- **Authentication**: None (Public)
- **Path Parameters**: None
- **Query Parameters**: None
- **Request Body**:
```json
{
  "username": "johndoe",
  "email": "john@example.com",
  "password": "securepassword123",
  "role": "BUYER",
  "authProvider": "LOCAL",
  "shopName": "John's Shop"
}
```
*Notes*: `authProvider` defaults to `"LOCAL"`. `role` defaults to `"BUYER"`. If `role` is `"SELLER"`, `shopName` is required. If `authProvider` is `"GOOGLE"`, `googleId` is required.
- **Success Response** (`201 Created`):
```json
{
  "success": true,
  "message": "User registered successfully",
  "user": {
    "_id": "64f8a1b2c3d4e5f6a7b8c9d0",
    "username": "johndoe",
    "email": "john@example.com",
    "role": "BUYER",
    "shopName": "",
    "authProvider": "LOCAL"
  }
}
```
*Cookie*: Sets HTTP-Only cookie `token`.
- **Error Responses**:
  - `400 Bad Request`: `{ "success": false, "message": "Email is required" | "Username is required" | "Password must be at least 6 characters long" | "Sellers must provide a shop name" }`
  - `409 Conflict`: `{ "success": false, "message": "A user with this email already exists" }`

---

### 1.2 User Login
- **Feature**: Authenticate existing user with email/password or Google auth.
- **Endpoint**: `/api/auth/login`
- **HTTP Method**: `POST`
- **Authentication**: None (Public)
- **Path Parameters**: None
- **Query Parameters**: None
- **Request Body**:
```json
{
  "email": "john@example.com",
  "password": "securepassword123",
  "authProvider": "LOCAL"
}
```
- **Success Response** (`200 OK`):
```json
{
  "success": true,
  "message": "Login successful",
  "user": {
    "_id": "64f8a1b2c3d4e5f6a7b8c9d0",
    "username": "johndoe",
    "email": "john@example.com",
    "role": "BUYER",
    "shopName": "",
    "authProvider": "LOCAL"
  }
}
```
*Cookie*: Sets HTTP-Only cookie `token`.
- **Error Responses**:
  - `400 Bad Request`: `{ "success": false, "message": "Email is required" | "Password is required for local login" }`
  - `401 Unauthorized`: `{ "success": false, "message": "Invalid credentials" }`

---

### 1.3 User Logout
- **Feature**: Clear authentication session.
- **Endpoint**: `/api/auth/logout`
- **HTTP Method**: `POST`
- **Authentication**: Auth Required (`token` cookie)
- **Path Parameters**: None
- **Query Parameters**: None
- **Request Body**: None
- **Success Response** (`200 OK`):
```json
{
  "success": true,
  "message": "Logout successful"
}
```
*Cookie*: Clears HTTP-Only cookie `token`.
- **Error Responses**:
  - `401 Unauthorized`: `{ "success": false, "message": "Please log in." }`

---

## 2. Product APIs

### 2.1 Get Products (List & Filter)
- **Feature**: Fetch list of products with optional category filtering and pagination.
- **Endpoint**: `/api/product/get`
- **HTTP Method**: `GET`
- **Authentication**: Auth Required (`token` cookie; Roles: `BUYER`, `SELLER`, `ADMIN`)
- **Path Parameters**: None
- **Query Parameters**:
  - `limit` (number, default: 10): Number of products to return
  - `skip` (number, default: 0): Number of products to skip
  - `category` (string, optional): Filter by category name
  - `price` (`"high"` | `"low"`, optional): Sort price order (Seller aggregate stage)
- **Request Body**: None
- **Success Response** (`200 OK`):
```json
{
  "success": true,
  "data": [
    {
      "_id": "64f8a1b2c3d4e5f6a7b8c9d1",
      "name": "Wireless Headphones",
      "description": "High quality noise cancelling headphones",
      "price": 199.99,
      "category": "Electronics",
      "images": [],
      "stock": 25,
      "seller": "64f8a1b2c3d4e5f6a7b8c9d0",
      "createdAt": "2026-08-15T00:00:00.000Z",
      "updatedAt": "2026-08-15T00:00:00.000Z"
    }
  ]
}
```
- **Error Responses**:
  - `401 Unauthorized`: `{ "success": false, "message": "Please log in." }`
  - `403 Forbidden`: `{ "success": false, "message": "Access denied. Insufficient permissions." }`

---

### 2.2 Get Product Details
- **Feature**: Retrieve details of a single product.
- **Endpoint**: `/api/product/:productId`
- **HTTP Method**: `GET`
- **Authentication**: None (Public)
- **Path Parameters**:
  - `productId` (string): Product ObjectId
- **Query Parameters**: None
- **Request Body**: None
- **Success Response** (`200 OK`):
```json
{
  "message": "Product Details",
  "success": true,
  "data": {
    "_id": "64f8a1b2c3d4e5f6a7b8c9d1",
    "name": "Wireless Headphones",
    "description": "High quality noise cancelling headphones",
    "price": 199.99,
    "category": "Electronics",
    "images": [],
    "stock": 25,
    "seller": "64f8a1b2c3d4e5f6a7b8c9d0",
    "createdAt": "2026-08-15T00:00:00.000Z",
    "updatedAt": "2026-08-15T00:00:00.000Z"
  }
}
```
- **Error Responses**:
  - `404 Not Found`: `{ "success": false, "message": "Product Not Found" }`

---

### 2.3 Create Product
- **Feature**: Sellers create a new product listing.
- **Endpoint**: `/api/product/create`
- **HTTP Method**: `POST`
- **Authentication**: Auth Required (`token` cookie; Role: `SELLER`)
- **Path Parameters**: None
- **Query Parameters**: None
- **Request Body**:
```json
{
  "name": "Wireless Headphones",
  "description": "High quality noise cancelling headphones",
  "price": 199.99,
  "category": "Electronics",
  "stock": 25
}
```
- **Success Response** (`201 Created`):
```json
{
  "success": true,
  "data": {
    "_id": "64f8a1b2c3d4e5f6a7b8c9d1",
    "name": "Wireless Headphones",
    "description": "High quality noise cancelling headphones",
    "price": 199.99,
    "category": "Electronics",
    "images": [],
    "stock": 25,
    "seller": "64f8a1b2c3d4e5f6a7b8c9d0",
    "createdAt": "2026-08-15T00:00:00.000Z",
    "updatedAt": "2026-08-15T00:00:00.000Z"
  }
}
```
- **Error Responses**:
  - `401 Unauthorized`: `{ "success": false, "message": "Please log in." }`
  - `403 Forbidden`: `{ "success": false, "message": "Only sellers can create products" }`

---

### 2.4 Update Product
- **Feature**: Sellers or Admins update product information.
- **Endpoint**: `/api/product/:productId`
- **HTTP Method**: `PUT`
- **Authentication**: Auth Required (`token` cookie; Roles: `SELLER`, `ADMIN`)
- **Path Parameters**: `productId` (string)
- **Query Parameters**: None
- **Request Body**:
```json
{
  "name": "Updated Wireless Headphones",
  "price": 179.99,
  "stock": 30
}
```
- **Success Response** (`200 OK`):
```json
{
  "success": true,
  "data": {
    "_id": "64f8a1b2c3d4e5f6a7b8c9d1",
    "name": "Updated Wireless Headphones",
    "description": "High quality noise cancelling headphones",
    "price": 179.99,
    "category": "Electronics",
    "images": [],
    "stock": 30,
    "seller": "64f8a1b2c3d4e5f6a7b8c9d0"
  }
}
```
- **Error Responses**:
  - `404 Not Found`: `{ "success": false, "message": "Product not found" }`
  - `403 Forbidden`: `{ "success": false, "message": "Unauthorized access" }`

---

### 2.5 Delete Product
- **Feature**: Sellers or Admins delete a product.
- **Endpoint**: `/api/product/:productId`
- **HTTP Method**: `DELETE`
- **Authentication**: Auth Required (`token` cookie; Roles: `SELLER`, `ADMIN`)
- **Path Parameters**: `productId` (string)
- **Query Parameters**: None
- **Request Body**: None
- **Success Response** (`200 OK`):
```json
{
  "message": "Product Delted Successfully!",
  "success": true,
  "data": {
    "acknowledged": true,
    "deletedCount": 1
  }
}
```
- **Error Responses**:
  - `404 Not Found`: `{ "success": false, "message": "Product Not Found" }`

---

## 3. Cart APIs

### 3.1 Get User Cart
- **Feature**: Retrieve all items currently in the logged-in user's cart.
- **Endpoint**: `/api/cart/`
- **HTTP Method**: `GET`
- **Authentication**: Auth Required (`token` cookie; Roles: `BUYER`, `SELLER`)
- **Path Parameters**: None
- **Query Parameters**: None
- **Request Body**: None
- **Success Response** (`200 OK`):
```json
{
  "message": "All Cart Products",
  "success": true,
  "data": [
    {
      "quantity": 2,
      "name": "Wireless Headphones",
      "description": "High quality noise cancelling headphones",
      "price": 199.99,
      "category": "Electronics",
      "subtotal": 399.98
    }
  ]
}
```
*Notes*: Backend aggregate output currently does not project `_id` or `productId`.
- **Error Responses**:
  - `404 Not Found`: `{ "success": false, "message": "Cart Not Found" }`
  - `401 Unauthorized`: `{ "success": false, "message": "Please log in." }`

---

### 3.2 Add Item to Cart
- **Feature**: Add a product to cart or increment quantity.
- **Endpoint**: `/api/cart/addtocart`
- **HTTP Method**: `POST`
- **Authentication**: Auth Required (`token` cookie; Roles: `BUYER`, `SELLER`)
- **Path Parameters**: None
- **Query Parameters**: None
- **Request Body**:
```json
{
  "productId": "64f8a1b2c3d4e5f6a7b8c9d1",
  "requestedQuantity": 1
}
```
- **Success Response** (`200 OK`):
```json
{
  "message": "Product added to cart successfully",
  "success": true,
  "data": {
    "_id": "64f8a1b2c3d4e5f6a7b8c9d9",
    "user": "64f8a1b2c3d4e5f6a7b8c9d0",
    "items": [
      {
        "product": "64f8a1b2c3d4e5f6a7b8c9d1",
        "quantity": 1
      }
    ]
  }
}
```
- **Error Responses**:
  - `400 Bad Request`: `{ "success": false, "message": "Quantity must be positive" | "out of stock" | "Cannot add more. Only 5 items available in stock total." }`
  - `404 Not Found`: `{ "success": false, "message": "Product Not Found" }`

---

### 3.3 Delete Item from Cart
- **Feature**: Remove a specific product item from user cart.
- **Endpoint**: `/api/cart/:productId`
- **HTTP Method**: `DELETE`
- **Authentication**: Auth Required (`token` cookie; Roles: `BUYER`, `SELLER`)
- **Path Parameters**: `productId` (string)
- **Query Parameters**: None
- **Request Body**: None
- **Success Response** (`200 OK`):
```json
{
  "message": "Product Delted Successfullly",
  "success": true
}
```
- **Error Responses**:
  - `404 Not Found`: `{ "success": false, "message": "Cart Not Found" }`

---

### 3.4 Clear Cart
- **Feature**: Remove all items from user cart.
- **Endpoint**: `/api/cart/`
- **HTTP Method**: `DELETE`
- **Authentication**: Auth Required (`token` cookie; Roles: `BUYER`, `SELLER`)
- **Path Parameters**: None
- **Query Parameters**: None
- **Request Body**: None
- **Success Response** (`200 OK`):
```json
{
  "message": "Cleared Cart",
  "success": true
}
```

---

## 4. User & Admin Profile APIs

### 4.1 Update Profile / User
- **Feature**: Update user profile attributes. Admins can update any user via `userId`.
- **Endpoint**: `/api/admin/`
- **HTTP Method**: `PATCH`
- **Authentication**: Auth Required (`token` cookie; Roles: `BUYER`, `SELLER`, `ADMIN`)
- **Path Parameters**: None
- **Query Parameters**: None
- **Request Body**:
```json
{
  "username": "john_updated",
  "email": "john_new@example.com",
  "avatar": "https://example.com/avatar.jpg",
  "shopName": "John's Tech Store"
}
```
- **Success Response** (`200 OK`):
```json
{
  "message": "User Updated Successfully!",
  "success": true,
  "data": {
    "_id": "64f8a1b2c3d4e5f6a7b8c9d0",
    "username": "john_updated",
    "email": "john_new@example.com",
    "role": "BUYER",
    "avatar": "https://example.com/avatar.jpg",
    "isActive": true
  }
}
```

---

### 4.2 Get Users List (Admin Only)
- **Feature**: List all registered users in the platform.
- **Endpoint**: `/api/admin/`
- **HTTP Method**: `GET`
- **Authentication**: Auth Required (`token` cookie; Role: `ADMIN`)
- **Path Parameters**: None
- **Query Parameters**: `userStatus` (`"all"` | `"active"` | `"inactive"`)
- **Request Body**: None
- **Success Response** (`200 OK`):
```json
{
  "message": "Users",
  "success": true,
  "data": [
    {
      "_id": "64f8a1b2c3d4e5f6a7b8c9d0",
      "username": "johndoe",
      "email": "john@example.com",
      "role": "BUYER",
      "isActive": true
    }
  ]
}
```

---

### 4.3 Soft Delete User (Admin / Seller)
- **Feature**: Deactivate user account (`isActive: false`).
- **Endpoint**: `/api/admin/:userId`
- **HTTP Method**: `DELETE`
- **Authentication**: Auth Required (`token` cookie; Roles: `ADMIN`, `SELLER`)
- **Path Parameters**: `userId` (string)
- **Query Parameters**: None
- **Request Body**: None
- **Success Response** (`201 Created`):
```json
{
  "success": true,
  "message": "User Deleted successfully"
}
```

---

## 5. Payment API

### 5.1 Create Stripe Checkout Session
- **Feature**: Initiates Stripe Checkout session.
- **Endpoint**: `/checkout`
- **HTTP Method**: `GET`
- **Authentication**: None (Public)
- **Path Parameters**: None
- **Query Parameters**: None
- **Request Body**: None
- **Success Response** (`200 OK`):
```json
{
  "id": "https://checkout.stripe.com/c/pay/cs_test_a1b2c3..."
}
```
