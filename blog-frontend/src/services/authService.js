import axiosInstance from "@/axios/axiosInstance";

export const loginApi = async (credientials) => {
  const response = await axiosInstance.post("/user/login", credientials);
  return response.data;
};
