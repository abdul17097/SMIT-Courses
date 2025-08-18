// src/lib/axios.js
import axios from "axios";
import { useAuth } from "../context/AuthContext";

export function useApi() {
  const { token, logout } = useAuth();

  const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL || "http://localhost:5000/api",
    headers: { "Content-Type": "application/json" },
  });

  api.interceptors.request.use((config) => {
    if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
  });

  api.interceptors.response.use(
    (res) => res,
    (err) => {
      if (err.response?.status === 401) {
        logout();
        window.location.href = "/login";
      }
      return Promise.reject(err);
    }
  );

  return api;
}
