import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authService from "../../services/authService";
import { getErrorMessage } from "../../utils/errorHandler";

const savedUser = JSON.parse(localStorage.getItem("aura_user") || "null");

const initialState = {
  user: savedUser,
  isAuthenticated: !!savedUser,
  loading: false,
  error: null,
};

export const loginAsync = createAsyncThunk(
  "auth/login",
  async (credentials, { rejectWithValue }) => {
    try {
      const data = await authService.login(credentials);
      if (data.user) {
        localStorage.setItem("aura_user", JSON.stringify(data.user));
      }
      return data;
    } catch (error) {
      return rejectWithValue(getErrorMessage(error));
    }
  }
);

export const signupAsync = createAsyncThunk(
  "auth/signup",
  async (userData, { rejectWithValue }) => {
    try {
      const data = await authService.signup(userData);
      if (data.user) {
        localStorage.setItem("aura_user", JSON.stringify(data.user));
      }
      return data;
    } catch (error) {
      return rejectWithValue(getErrorMessage(error));
    }
  }
);

export const logoutAsync = createAsyncThunk(
  "auth/logout",
  async (_, { rejectWithValue }) => {
    try {
      const data = await authService.logout();
      localStorage.removeItem("aura_user");
      return data;
    } catch (error) {
      localStorage.removeItem("aura_user");
      return rejectWithValue(getErrorMessage(error));
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser(state, action) {
      state.user = action.payload;
      state.isAuthenticated = !!action.payload;
      state.loading = false;
      state.error = null;
      if (action.payload) {
        localStorage.setItem("aura_user", JSON.stringify(action.payload));
      } else {
        localStorage.removeItem("aura_user");
      }
    },
    logoutUser(state) {
      state.user = null;
      state.isAuthenticated = false;
      state.loading = false;
      state.error = null;
      localStorage.removeItem("aura_user");
    },
    clearAuthError(state) {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // Login
      .addCase(loginAsync.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        state.isAuthenticated = true;
        state.error = null;
      })
      .addCase(loginAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // Signup
      .addCase(signupAsync.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(signupAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        state.isAuthenticated = true;
        state.error = null;
      })
      .addCase(signupAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // Logout
      .addCase(logoutAsync.fulfilled, (state) => {
        state.user = null;
        state.isAuthenticated = false;
        state.loading = false;
        state.error = null;
      })
      .addCase(logoutAsync.rejected, (state) => {
        state.user = null;
        state.isAuthenticated = false;
        state.loading = false;
      });
  },
});

export const { setUser, logoutUser, clearAuthError } = authSlice.actions;
export default authSlice.reducer;
