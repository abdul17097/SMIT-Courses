import express from "express";
import nodemailer from "nodemailer";
import { config } from "dotenv";
import multer from "multer";
import path from "path";

config();

const app = express();
app.use(express.json());
const transoporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "abdul17097@gmail.com",
    pass: "useo uouk dibh ezsf",
    // pas: process.env.EMAIL_SECRET,
  },
});

const mailOptions = {
  from: "abdul17097@gmail.com",
  to: "noumanahmad.info@gmail.com",
  subject: "Testing Nodemailer",
  //   text: "Hello, this is a test email from Nodemailer!",
  html: `<!DOCTYPE html>

<html>
<head>
  <meta charset="UTF-8">
  <title>Email Template</title>
</head>
<body style="margin:0; padding:0; background-color:#f4f4f7; font-family:Arial, sans-serif;">

  <table align="center" width="100%" cellpadding="0" cellspacing="0" style="padding:40px 0;">
    <tr>
      <td align="center">

    <!-- Container -->
    <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff; border-radius:8px; padding:40px;">
      
      <!-- Heading -->
      <tr>
        <td style="font-size:28px; font-weight:bold; color:#333333; text-align:center;">
          Your Main Heading
        </td>
      </tr>

      <!-- Subheading -->
      <tr>
        <td style="font-size:18px; color:#666666; text-align:center; padding-top:10px;">
          Your subheading goes here
        </td>
      </tr>

      <!-- Description -->
      <tr>
        <td style="font-size:16px; color:#555555; text-align:center; padding:20px 0; line-height:1.5;">
          This is your description area. You can explain your offer, message, or important details here. Keep it concise and engaging for better results.
        </td>
      </tr>

      <!-- Button -->
      <tr>
        <td align="center">
          <a href="#" style="background-color:#4CAF50; color:#ffffff; text-decoration:none; padding:12px 24px; border-radius:5px; display:inline-block; font-size:16px;">
            Call to Action
          </a>
        </td>
      </tr>

    </table>

  </td>
</tr>


  </table>

</body>
</html>
`,
};

app.get("/", (req, res) => {
  transoporter.sendMail(mailOptions, (err, info) => {
    if (err) {
      console.log(err.message);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
  res.send("Hello, World!");
});

// upload file

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "medias");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(
      null,
      file.fieldname + "-" + uniqueSuffix + path.extname(file.originalname),
    );
  },
});

const upload = multer({
  storage: storage,
});
app.post("/upload", upload.single("image"), (req, res) => {
  console.log(req.file);

  console.log(req.body);
  res.send("File uploaded successfully");
});

app.listen(4000, () => {
  console.log("Server is running on port 4000");
});
