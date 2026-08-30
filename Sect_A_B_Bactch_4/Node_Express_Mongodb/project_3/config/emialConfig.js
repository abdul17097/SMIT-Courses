import nodemailer from "nodemailer";
import { config } from "dotenv";
import { emailTemplate } from "../utils/emailTemplate.js";
config();
export const transporter = nodemailer.createTransport({
  service: "Gmail",
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.USER_EMAIL,
    pass: process.env.APP_PASSWORD,
  },
});

export const mailOptions = {
  from: process.env.USER_EMAIL,
  to: "abdul17097@gmail.com",
  subject: "Hello from Nodemailer",
  //   text: "This is a test email sent using Nodemailer.",
  html: `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>XYZ</title>
</head>

<body style="
  margin: 0;
  padding: 0;
  background-color: #f4f6f8;
  font-family: Arial, Helvetica, sans-serif;
">

  <table
    width="100%"
    cellpadding="0"
    cellspacing="0"
    border="0"
    style="background-color: #f4f6f8; padding: 40px 15px;"
  >
    <tr>
      <td align="center">

        <!-- Main Container -->
        <table
          width="100%"
          cellpadding="0"
          cellspacing="0"
          border="0"
          style="
            max-width: 600px;
            background-color: #ffffff;
            border-radius: 10px;
            overflow: hidden;
            box-shadow: 0 4px 15px rgba(0,0,0,0.08);
          "
        >

          <!-- Header -->
          <tr>
            <td
              align="center"
              style="
                background-color: #2563eb;
                padding: 30px 20px;
              "
            >
              <h1 style="
                margin: 0;
                color: #ffffff;
                font-size: 26px;
                font-weight: 700;
              ">
                My App
              </h1>
            </td>
          </tr>

          <!-- Content -->
          <tr>
            <td style="padding: 40px 35px;">

              <h2 style="
                margin: 0 0 20px;
                color: #111827;
                font-size: 24px;
              ">
                "XYZ"
              </h2>

              <p style="
                margin: 0 0 15px;
                color: #374151;
                font-size: 16px;
                line-height: 1.6;
              ">
                Hi Test,
              </p>

              <p style="
                margin: 0 0 30px;
                color: #4b5563;
                font-size: 16px;
                line-height: 1.7;
              ">
                kese ho
              </p>

              <!-- CTA Button -->
              <table
                cellpadding="0"
                cellspacing="0"
                border="0"
                style="margin: 0 auto 30px;"
              >
                <tr>
                  <td
                    align="center"
                    style="
                      background-color: #2563eb;
                      border-radius: 6px;
                    "
                  >
                    <a
                      href="nahi pata"
                      style="
                        display: inline-block;
                        padding: 14px 28px;
                        color: #ffffff;
                        text-decoration: none;
                        font-size: 16px;
                        font-weight: 600;
                      "
                    >
                      press nahi karna
                    </a>
                  </td>
                </tr>
              </table>

              <p style="
                margin: 0;
                color: #6b7280;
                font-size: 14px;
                line-height: 1.6;
              ">
                If you have any questions, feel free to reply to this email.
                We're always happy to help.
              </p>

            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td
              align="center"
              style="
                background-color: #f9fafb;
                padding: 25px 20px;
                border-top: 1px solid #e5e7eb;
              "
            >
              <p style="
                margin: 0 0 8px;
                color: #6b7280;
                font-size: 13px;
              ">
                © ${new Date().getFullYear()} My App. All rights reserved.
              </p>

              <p style="
                margin: 0;
                color: #9ca3af;
                font-size: 12px;
              ">
                This email was sent automatically. Please do not reply
                if you don't need assistance.
              </p>
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
