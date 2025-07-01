import express from "express";
import multer from "multer";
import morgan from "morgan";
const app = express();
app.use(express.json());
app.use(morgan("short"));
app.use(express.urlencoded({ extended: true }));
const upload = multer();
app.use(upload.any());
app.post("/registerUser", (req, res) => {
  console.log(req.body);
  res.status(201).send({ data: req.body });
});
app.get("/", (req, res) => {
  //   try {

  //   } catch (error) {
  //   res.status(500).json({
  //     success: false,
  //     message: "Something went wrong!",
  //   });
  //   }
  //   throw new Error("Something went wrong! laksdjfl");
  throw {
    status: 500,
    message: "Something went wrong! laksdjfl",
  };
});

app.get("/about", (req, res) => {
  res.status(500).json({
    success: false,
    message: "Something went wrong!",
  });
});
app.use((error, req, res, next) => {
  console.log(error.message);
  res.json({
    success: false,
    message: error.message || "Something went wrong!",
  });
});

app.listen(5000);
// files[0]
// const userForm =  new FormData()
// userForm.append("username", "test")
// useForm.append("profileImage", "image.png")
