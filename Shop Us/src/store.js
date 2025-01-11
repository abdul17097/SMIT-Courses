import { configureStore } from "@reduxjs/toolkit";
import productSlice from "../src/slices/ProductSlice";
export const store = configureStore({
  reducer: {
    products: productSlice,
  },
});
