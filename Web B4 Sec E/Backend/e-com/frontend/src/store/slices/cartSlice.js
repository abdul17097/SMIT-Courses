import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import cartService from "../../services/cartService";
import { getErrorMessage } from "../../utils/errorHandler";

const initialState = {
  items: [],
  loading: false,
  error: null,
};

export const fetchCartAsync = createAsyncThunk(
  "cart/fetchCart",
  async (_, { rejectWithValue }) => {
    try {
      const data = await cartService.getCart();
      return data.data || [];
    } catch (error) {
      return rejectWithValue(getErrorMessage(error));
    }
  }
);

export const addToCartAsync = createAsyncThunk(
  "cart/addToCart",
  async ({ productId, requestedQuantity }, { dispatch, rejectWithValue }) => {
    try {
      const data = await cartService.addToCart(productId, requestedQuantity);
      dispatch(fetchCartAsync());
      return data;
    } catch (error) {
      return rejectWithValue(getErrorMessage(error));
    }
  }
);

export const deleteCartItemAsync = createAsyncThunk(
  "cart/deleteCartItem",
  async (productId, { dispatch, rejectWithValue }) => {
    try {
      const data = await cartService.deleteCartItem(productId);
      dispatch(fetchCartAsync());
      return data;
    } catch (error) {
      return rejectWithValue(getErrorMessage(error));
    }
  }
);

export const clearCartAsync = createAsyncThunk(
  "cart/clearCart",
  async (_, { rejectWithValue }) => {
    try {
      const data = await cartService.clearCart();
      return data;
    } catch (error) {
      return rejectWithValue(getErrorMessage(error));
    }
  }
);

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    clearCartState(state) {
      state.items = [];
      state.loading = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // Fetch Cart
      .addCase(fetchCartAsync.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCartAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
        state.error = null;
      })
      .addCase(fetchCartAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // Clear Cart
      .addCase(clearCartAsync.fulfilled, (state) => {
        state.items = [];
        state.loading = false;
        state.error = null;
      });
  },
});

export const { clearCartState } = cartSlice.actions;
export default cartSlice.reducer;
