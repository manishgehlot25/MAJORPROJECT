const nodemailer = require('nodemailer');

module.exports.sendEmail = async (to, otp) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "gehlot9868@gmail.com",
      pass: "rhum jzoh uxwp yrjc"
    }
  });

  const mailOptions = {
    from: `WanderLust <gehlot9868@gmail.com>`,
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
