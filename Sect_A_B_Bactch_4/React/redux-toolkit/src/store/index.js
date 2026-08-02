import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/counter";

const store = configureStore({
  reducer: {
    // Add your reducers h  ere
    counter: counterReducer,
  },
});

export default store;
