import axiosInstance from "@/axios/axiosInstance";

export const getPosts = async ({ search, tag }) => {
  console.log(tag);

  const response = await axiosInstance.get(
    `/post/get-post-for-guest/?tag=${tag}`
  );
  return response.data;
};
export const createPost = async (data) => {
  console.log(data);
  const response = await axiosInstance.post(`/post/new-post`);
  return response.data;
};
