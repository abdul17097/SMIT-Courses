import axiosInstance from "./api/axiosInstance";
import { API_ENDPOINTS } from "../constants/apiEndpoints";

export const authService = {
  login: async (credentials) => {
    const response = await axiosInstance.post(API_ENDPOINTS.AUTH.LOGIN, {
      email: credentials.email,
      password: credentials.password,
      authProvider: credentials.authProvider || "LOCAL",
      googleId: credentials.googleId,
      avatar: credentials.avatar,
    });
    return response.data;
  },

  signup: async (userData) => {
    const response = await axiosInstance.post(API_ENDPOINTS.AUTH.SIGNUP, {
      username: userData.username,
      email: userData.email,
      password: userData.password,
      role: userData.role || "BUYER",
      shopName: userData.shopName,
      authProvider: userData.authProvider || "LOCAL",
      googleId: userData.googleId,
      avatar: userData.avatar,
    });
    return response.data;
  },

  logout: async () => {
    const response = await axiosInstance.post(API_ENDPOINTS.AUTH.LOGOUT);
    return response.data;
  },

  updateProfile: async (profileData) => {
    const response = await axiosInstance.patch(API_ENDPOINTS.ADMIN.UPDATE_USER, profileData);
    return response.data;
  },
};

export default authService;
