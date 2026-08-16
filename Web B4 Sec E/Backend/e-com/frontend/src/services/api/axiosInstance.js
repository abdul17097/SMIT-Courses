import axios from "axios";
import { ENV } from "../../config/env.js";

const axiosInstance = axios.create({
  baseURL: ENV.API_BASE_URL,
  withCredentials: true, // Essential for sending/receiving HTTP-Only auth cookies
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      // Global HTTP 401 session expiration handling
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;