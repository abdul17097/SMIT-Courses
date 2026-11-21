import multer from "multer";

const storage = multer.memoryStorage();

export const uploadProfileImg = multer({
  storage,
});
