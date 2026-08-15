import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import productService from "../../services/productService";
import { getErrorMessage } from "../../utils/errorHandler";

const initialState = {
  products: [],
  selectedProduct: null,
  loading: false,
  error: null,
};

export const fetchProductsAsync = createAsyncThunk(
  "product/fetchProducts",
  async (params, { rejectWithValue }) => {
    try {
      const data = await productService.getProducts(params);
      return data.data || [];
    } catch (error) {
      return rejectWithValue(getErrorMessage(error));
    }
  }
);

export const fetchProductDetailsAsync = createAsyncThunk(
  "product/fetchProductDetails",
  async (productId, { rejectWithValue }) => {
    try {
      const data = await productService.getProductDetails(productId);
      return data.data;
    } catch (error) {
      return rejectWithValue(getErrorMessage(error));
    }
  }
);

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setSelectedProduct(state, action) {
      state.selectedProduct = action.payload;
    },
    clearProductError(state) {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // Fetch Products
      .addCase(fetchProductsAsync.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProductsAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
        state.error = null;
      })
      .addCase(fetchProductsAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // Fetch Details
      .addCase(fetchProductDetailsAsync.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProductDetailsAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.selectedProduct = action.payload;
        state.error = null;
      })
      .addCase(fetchProductDetailsAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { setSelectedProduct, clearProductError } = productSlice.actions;
export default productSlice.reducer;
