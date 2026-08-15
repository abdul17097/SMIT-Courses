import axiosInstance from "./api/axiosInstance";
import { API_ENDPOINTS } from "../constants/apiEndpoints";

export const productService = {
  getProducts: async (params = {}) => {
    const query = new URLSearchParams();
    if (params.limit) query.append("limit", params.limit);
    if (params.skip) query.append("skip", params.skip);
    if (params.category) query.append("category", params.category);
    if (params.price) query.append("price", params.price);

    const url = `${API_ENDPOINTS.PRODUCTS.GET_ALL}${query.toString() ? `?${query.toString()}` : ""}`;
    const response = await axiosInstance.get(url);
    return response.data;
  },

  getProductDetails: async (productId) => {
    const response = await axiosInstance.get(API_ENDPOINTS.PRODUCTS.GET_DETAILS(productId));
    return response.data;
  },

  createProduct: async (productData) => {
    const response = await axiosInstance.post(API_ENDPOINTS.PRODUCTS.CREATE, productData);
    return response.data;
  },

  updateProduct: async (productId, productData) => {
    const response = await axiosInstance.put(API_ENDPOINTS.PRODUCTS.UPDATE(productId), productData);
    return response.data;
  },

  deleteProduct: async (productId) => {
    const response = await axiosInstance.delete(API_ENDPOINTS.PRODUCTS.DELETE(productId));
    return response.data;
  },
};

export default productService;
