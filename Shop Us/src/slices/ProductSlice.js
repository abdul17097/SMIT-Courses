import axios from "axios";

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk(
  "product/allProduct",
  async () => {
    try {
      const response = await axios.get(
        "https://api.escuelajs.co/api/v1/products"
      );
      return response.data;
    } catch (error) {
      console.log(error);
      return error;
    }
  }
);

export const productSlice = createSlice({
  name: "product",
  initialState: {
    products: [],
    isLoading: false,
    message: "",
  },
  // reducers: {
  //   setProduct: (state, action) => {
  //     state.products = action.payload;
  //   },
  // },
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.isLoading = false;
      state.products = action.payload;
    });
    builder.addCase(fetchProducts.rejected, (state, action) => {
      state.isLoading = false;
      state.message = action.error.message;
    });
  },
});

export const { setProduct } = productSlice.actions;
export default productSlice.reducer;
