import nodemailer from "nodemailer";

export const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.USER_EMAIL,
    pass: process.env.APP_PASSWORD,
  },
});

export const mailOptions = {
  from: process.env.USER_EMAIL,
  to: process.env.RECIPIENT_EMAIL,
  subject: "Job Offer",
  text: "You are Selected!",
  html: `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Employee Scale-Up Announcement</title>
</head>

<body style="margin:0; padding:30px 10px; background:#f4f6f9; font-family:Arial,sans-serif;">

  <table width="100%" cellpadding="0" cellspacing="0">
    <tr>
      <td align="center">

        <table width="600" cellpadding="0" cellspacing="0"
          style="max-width:600px; background:#ffffff; border-radius:10px; overflow:hidden;">

          <!-- Header -->
          <tr>
            <td style="background:#173b68; padding:35px; text-align:center;">
              <h1 style="color:#ffffff; margin:0;">
                Congratulations!
              </h1>
              <p style="color:#dbeafe; margin-bottom:0;">
                Employee Scale-Up Announcement
              </p>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="padding:35px; color:#333333;">

              <p>Dear Employee,</p>

              <p style="font-size:15px; line-height:1.8;">
                We are pleased to inform you that you have successfully
                qualified for an employee scale-up in recognition of
                your dedication, performance, commitment, and valuable
                contributions to the organization.
              </p>

              <p style="font-size:15px; line-height:1.8;">
                Your hard work and continuous efforts have been
                recognized by management, and we are delighted to
                acknowledge your professional growth.
              </p>

              <div style="background:#f1f5f9; padding:20px; border-radius:8px; margin:25px 0;">

                <h3 style="color:#173b68; margin-top:0;">
                  Scale-Up Announcement
                </h3>

                <p style="line-height:1.8;">
                  <strong>Previous Designation:</strong> Junior Developer
                  <br><br>

                  <strong>New Designation:</strong>
                  <span style="color:#16834a;">Senior Developer</span>
                  <br><br>

                  <strong>Previous Level:</strong> Level 1
                  <br><br>

                  <strong>New Level:</strong> Level 2
                  <br><br>

                  <strong>Effective Date:</strong> November 15, 2026
                </p>

              </div>

              <p style="font-size:15px; line-height:1.8;">
                This scale-up represents an important milestone in your
                professional journey. We encourage you to continue
                demonstrating excellence, taking ownership of your
                responsibilities, and contributing positively to
                the organization's success.
              </p>

              <p style="font-size:15px; line-height:1.8;">
                We appreciate your dedication and look forward to
                achieving many more milestones together.
              </p>

              <p style="margin-top:30px; line-height:1.8;">
                Congratulations once again!
              </p>

              <p style="line-height:1.8;">
                Best Regards,<br>
                <strong>Human Resources Department</strong><br>
                HR Management Team<br>
                Your Company
              </p>

            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background:#f4f6f9; padding:20px; text-align:center;">
              <p style="font-size:12px; color:#777;">
                This is an official employee notification.
              </p>
              <p style="font-size:12px; color:#999;">
                © 2026 Your Company. All rights reserved.
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
