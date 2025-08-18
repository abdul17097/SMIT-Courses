// src/context/AuthContext.jsx
import { createContext, useContext, useState, useEffect } from "react";
import api from "@/utils/axios"; // your axios instance

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null); // {id, name, role}
  const [token, setToken] = useState(localStorage.getItem("token") || "");
  const [loading, setLoading] = useState(true);

  // Save token in localStorage when it changes
  useEffect(() => {
    if (token) {
      localStorage.setItem("token", token);
    } else {
      localStorage.removeItem("token");
    }
  }, [token]);

  // Fetch user data from /me if token exists
  useEffect(() => {
    const fetchUser = async () => {
      if (token) {
        try {
          const res = await api.get("/me", {
            headers: { Authorization: `Bearer ${token}` },
          });
          setUser(res.data);
        } catch (err) {
          console.error("Failed to fetch user:", err);
          setUser(null);
          setToken("");
        }
      }
      setLoading(false);
    };

    fetchUser();
  }, [token]);

  const login = (userData, jwt) => {
    setUser(userData);
    setToken(jwt);
  };

  const logout = () => {
    setUser(null);
    setToken("");
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        login,
        logout,
        isAuthenticated: !!user,
        loading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
