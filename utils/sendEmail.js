const nodemailer = require('nodemailer');

module.exports.sendEmail = async (to, otp) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });

  const mailOptions = {
    from: `WanderLust <${process.env.EMAIL_USER}>`,
    to,
    subject: "Your WanderLust Email Verification Code",
    html: `
      <h2>Your OTP Code</h2>
      <p>Use the code below to verify your email:</p>
      <div style="font-size: 24px; font-weight: bold;">${otp}</div>
      <p>This code expires in <b>5 minutes.</b></p>
    `
  };

  await transporter.sendMail(mailOptions);
};
