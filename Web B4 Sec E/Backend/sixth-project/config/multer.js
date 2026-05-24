import multer from "multer";

const storage = multer.memoryStorage();

const uploadBlog = multer({
  storage: storage,
});

export { uploadBlog };
