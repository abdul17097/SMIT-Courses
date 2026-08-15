export const ENV = {
  API_BASE_URL: import.meta.env.VITE_API_BASE_URL || "http://localhost:5000/api",
  STRIPE_PUBLISHABLE_KEY: import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY || "",
};
