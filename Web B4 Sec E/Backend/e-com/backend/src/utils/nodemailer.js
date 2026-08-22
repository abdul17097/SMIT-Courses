import nodemailer from "nodemailer";

/**
 * Creates and returns the Nodemailer transporter.
 */
const getTransporter = () => {
  const user = (process.env.EMAIL_USER || "").trim();
  const pass = (process.env.EMAIL_PASS || process.env.APP_PASSWORD || "").replace(/\s+/g, "");

  if (!user || !pass) {
    throw new Error(
      "Missing email credentials. Please ensure EMAIL_USER and EMAIL_PASS (or APP_PASSWORD) are defined in your .env file."
    );
  }

  return nodemailer.createTransport({
    service: process.env.EMAIL_SERVICE || "gmail",
    auth: {
      user,
      pass,
    },
  });
};

/**
 * Utility function to send emails.
 *
 * @param {Object} options
 * @param {string|string[]} options.to - Recipient email address(es)
 * @param {string} options.subject - Email subject line
 * @param {string} [options.text] - Plain text email body
 * @param {string} [options.html] - HTML formatted email body
 * @param {string} [options.from] - Custom sender address (optional)
 * @returns {Promise<Object>} Nodemailer send info
 */
export const sendEmail = async ({ to, subject, text, html, from }) => {
  try {
    const user = (process.env.EMAIL_USER || "").trim();
    const transporter = getTransporter();

    const mailOptions = {
      from: from || `"${process.env.APP_NAME || "E-Commerce App"}" <${user}>`,
      to,
      subject,
      text,
      html,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent successfully: %s", info.messageId);
    return info;
  } catch (error) {
    console.error("Error sending email:", error.message);
    throw error;
  }
};

export default sendEmail;
