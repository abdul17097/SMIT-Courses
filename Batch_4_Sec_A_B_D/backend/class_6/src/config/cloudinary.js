import { v2 as cloudinary } from "cloudinary";

const cloudinaryConfig = () => {
  cloudinary.config({
    cloud_name: process.env.CLOUDNIARY_NAME,
    api_secret: process.env.CLOUDNARIY_SECRET_KEY,
    api_key: process.env.CLOUDNARIY_API_KEY,
  });
};

export { cloudinary, cloudinaryConfig };
