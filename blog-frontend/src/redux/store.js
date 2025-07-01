import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../redux/slices/authSlice";
import postReducer from "../redux/slices/postSlice";
import tagReducer from "../redux/slices/tagSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    posts: postReducer,
    tags: tagReducer,
  },
});

export default store;
