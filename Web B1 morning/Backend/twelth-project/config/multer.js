import multer from "multer";

const storage = multer.memoryStorage();

const uploadMulter = multer({ storage }).single("coverImage");

export default uploadMulter;
