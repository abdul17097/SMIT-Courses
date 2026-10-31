import nodemailer from "nodemailer";

export const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    // user: process.env.USER_EMAIL,
    // pass: process.env.APP_PASSWORD,
    user: "kgue kesw wtho oyav",
    pass: "asadkn624@gmail.com",
  },
});

export const mailOptions = {
  from: "asadkn624@gmail.com",
  to: "akmalhassan223@gmail.com",
  subject: "Job Offer",
  text: "You are Selected!",
};
