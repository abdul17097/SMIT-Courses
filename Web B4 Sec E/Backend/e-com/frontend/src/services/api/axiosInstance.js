import axios from "axios";
import { ENV } from "../../config/env.js";

const axiosInstance = axios.create({
  baseURL: ENV.API_BASE_URL,
  withCredentials: true, // Essential for sending/receiving HTTP-Only auth cookies
  headers: {
    "Content-Type": "application/json",
    // "Authorization": "Bearer " + localStorage.getItem("token"),
  },
});

// how to call api using axios
// axiosInstance.post("/admin",{
//   email:"[EMAIL_ADDRESS]",
//   password:"password"
// })
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      // Handle global 401 unauthorized session expiration if required
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;



// fetch("url",{
//   method:"POST",
//   credentials:"include",
//   headers:{
//     "Content-Type": "application/json",
//   },
//   body:JSON.stringify(data)
// })

// axios.post("url",{
//   username: "username",
//   password:"password",
// },{
//   withCredentials:true,
// })