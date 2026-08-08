import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

// const [count, setCount] = useState(0);
const counterSlice = createSlice({
  name: "counter",
  initialState: initialState,
  reducers: {
    increment: (state) => {
      // immer
      // state.value = {...state, value: state.value + 1} // do'nt do this
      // state.value =+ 1;
      state.value = state.value + 1;
    },
  },
});

export const { increment } = counterSlice.actions;
export default counterSlice.reducer;
