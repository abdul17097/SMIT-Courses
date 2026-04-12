import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addToCart: (state, action) => {
      state.items = [...state.items, action.payload];
    },
  },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
