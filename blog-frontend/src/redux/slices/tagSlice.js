// src/redux/slices/tagSlice.js

import { getTags } from "@/services/tagService";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchTags = createAsyncThunk(
  "tags/fetchTags",
  async (_, thunkAPI) => {
    try {
      const { data } = await getTags();
      console.log(data);

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || "Failed to fetch tags"
      );
    }
  }
);

const tagSlice = createSlice({
  name: "tags",
  initialState: {
    tags: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTags.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTags.fulfilled, (state, action) => {
        state.loading = false;
        state.tags = action.payload;
      })
      .addCase(fetchTags.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default tagSlice.reducer;
