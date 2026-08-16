import axiosInstance from "./api/axiosInstance";
import { API_ENDPOINTS } from "../constants/apiEndpoints";

export const paymentService = {
  createCheckoutSession: async () => {
    const response = await axiosInstance.get(API_ENDPOINTS.CHECKOUT);
    return response.data;
  },
};

export default paymentService;
