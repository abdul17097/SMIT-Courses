export const API_ENDPOINTS = {
  AUTH: {
    SIGNUP: "/auth/signup",
    LOGIN: "/auth/login",
    LOGOUT: "/auth/logout",
  },
  PRODUCTS: {
    GET_ALL: "/product/get",
    GET_DETAILS: (id) => `/product/${id}`,
    CREATE: "/product/create",
    UPDATE: (id) => `/product/${id}`,
    DELETE: (id) => `/product/${id}`,
  },
  CART: {
    GET: "/cart/",
    ADD: "/cart/addtocart",
    DELETE_ITEM: (id) => `/cart/${id}`,
    CLEAR: "/cart/",
  },
  ADMIN: {
    GET_USERS: "/admin/",
    CREATE_USER: "/admin/create",
    UPDATE_USER: "/admin/",
    DELETE_USER: (id) => `/admin/${id}`,
  },
  CHECKOUT: "/checkout",
};
