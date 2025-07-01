import axiosInstance from "@/axios/axiosInstance";

export const getTags = async () => {
  const response = await axiosInstance.get("/tag/all-tags");

  return response.data;
};
