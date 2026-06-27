import multer, { memoryStorage } from "multer";

const storage = memoryStorage();

export const uploadMulter = multer({ storage }).single("coverImage");
