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

const applyFilter = (state) => {
  const { searchQuery, products } = state;
  return products.filter((product) => {
    return product.title.toLowerCase().includes(searchQuery.toLowerCase());
  });
};
const categoryFilter = (state) => {
  const { products, category } = state;
  return products.filter((product) => {
    return category
      ? product.category.name.toLowerCase() === category.toLowerCase()
      : products;
  });
};

export const productSlice = createSlice({
  name: "product",
  initialState: {
    products: [],
    isLoading: false,
    message: "",
    filterProducts: [],
    searchQuery: "",
    category: "",
  },
  reducers: {
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
      // state.filterProducts = productSlice.caseReducers.applyFilter(state);
      state.filterProducts = applyFilter(state);
    },
    setCategory: (state, action) => {
      state.category = action.payload;
      state.filterProducts = categoryFilter(state);
    },
    // applyFilter: (state) => {
    //   const { searchQuery, products } = state;
    //   return products.filter((product) => {
    //     return product.title.toLowerCase().includes(searchQuery.toLowerCase());
    //   });
    // },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.isLoading = false;
      state.products = action.payload;
      state.filterProducts = action.payload;
    });
    builder.addCase(fetchProducts.rejected, (state, action) => {
      state.isLoading = false;
      state.message = action.error.message;
    });
  },
});

export const { setProduct, setSearchQuery, setCategory } = productSlice.actions;
export default productSlice.reducer;
