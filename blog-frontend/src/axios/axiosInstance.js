import axios from "axios";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL,
});

axiosInstance.interceptors.request.use(
  (config) => {
    const storeUser = localStorage.getItem("userToken");

    if (storeUser) {
      try {
        // Attach token only if it exists
        config.headers.Authorization = `Bearer ${storeUser}`;
      } catch (error) {
        console.error("Error parsing stored user data:", error);
      }
    }

    // Automatically set Content-Type to 'application/json' if it's not form data
    if (!(config.data instanceof FormData)) {
      config.headers["Content-Type"] = "application/json";
    }

    return config;
  },
  (error) => Promise.reject(error)
);

export default axiosInstance;
