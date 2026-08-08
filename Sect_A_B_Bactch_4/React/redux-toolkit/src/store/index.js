import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/counter";
import cartReducer from "./slices/cart"; // Import the cart reducer

const store = configureStore({
  reducer: {
    // Add your reducers h  ere
    counter: counterReducer,
    cart: cartReducer, // Add the cart reducer here
  },
});

export default store;
