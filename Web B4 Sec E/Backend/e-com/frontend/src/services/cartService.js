import axiosInstance from "./api/axiosInstance";
import { API_ENDPOINTS } from "../constants/apiEndpoints";

export const cartService = {
  getCart: async () => {
    const response = await axiosInstance.get(API_ENDPOINTS.CART.GET);
    return response.data;
  },

  addToCart: async (productId, requestedQuantity = 1) => {
    const response = await axiosInstance.post(API_ENDPOINTS.CART.ADD, {
      productId,
      requestedQuantity,
    });
    return response.data;
  },

  deleteCartItem: async (productId) => {
    const response = await axiosInstance.delete(API_ENDPOINTS.CART.DELETE_ITEM(productId));
    return response.data;
  },

  clearCart: async () => {
    const response = await axiosInstance.delete(API_ENDPOINTS.CART.CLEAR);
    return response.data;
  },
};

export default cartService;
