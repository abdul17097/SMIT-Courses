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
    filterProducts: [],
    isLoading: false,
    message: "",
    searchQuery: "",
    selectedCategory: "",
  },
  reducers: {
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
      productSlice.caseReducers.applyFilter(state);
    },
    setSelectedCategory: (state, action) => {
      state.selectedCategory = action.payload;
      productSlice.caseReducers.applyFilter(state);
    },
    applyFilter: (state) => {
      const { selectedCategory, searchQuery, products } = state;
      state.filterProducts = products.filter((product) => {
        const matchesSearch = product.title
          .toLowerCase()
          .includes(searchQuery.toLowerCase());
        const matchesCategory =
          !selectedCategory || product.category?.name === selectedCategory;
        return matchesSearch && matchesCategory;
      });
    },
  },
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

export const { setProduct, setSearchQuery, setSelectedCategory } =
  productSlice.actions;
export default productSlice.reducer;
