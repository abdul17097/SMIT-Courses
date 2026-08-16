import axiosInstance from "./api/axiosInstance";

export const orderService = {
  getOrders: async () => {
    try {
      const response = await axiosInstance.get("/orders");
      return response.data;
    } catch (error) {
      // Fallback to local session storage if backend orders endpoint is not implemented
      const localOrders = JSON.parse(localStorage.getItem("aura_orders") || "[]");
      return { success: true, data: localOrders };
    }
  },

  getOrderDetails: async (orderId) => {
    try {
      const response = await axiosInstance.get(`/orders/${orderId}`);
      return response.data;
    } catch (error) {
      const localOrders = JSON.parse(localStorage.getItem("aura_orders") || "[]");
      const found = localOrders.find((o) => o.orderId === orderId || o.id === orderId);
      if (found) {
        return { success: true, data: found };
      }
      throw error;
    }
  },
};

export default orderService;
