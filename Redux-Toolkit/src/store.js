import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/userSlice";
const store = configureStore({
  reducer: {
    userInfo: userSlice,
  },
});

export default store;
