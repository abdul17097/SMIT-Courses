import axiosInstance from "./api/axiosInstance";
import { API_ENDPOINTS } from "../constants/apiEndpoints";

export const userService = {
  updateProfile: async (profileData) => {
    const response = await axiosInstance.patch(API_ENDPOINTS.ADMIN.UPDATE_USER, profileData);
    return response.data;
  },

  getUsers: async (userStatus = "all") => {
    const response = await axiosInstance.get(`${API_ENDPOINTS.ADMIN.GET_USERS}?userStatus=${userStatus}`);
    return response.data;
  },
};

export default userService;
