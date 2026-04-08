import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 4,
    name: "Jhon",
  },
  reducers: {
    increment: (state) => {
      state.value = state.value + 1;
    },
    changeName: (state, action) => {
      state.name = action.payload;
    },
  },
});

export const { increment, changeName } = counterSlice.actions;
export default counterSlice.reducer;
