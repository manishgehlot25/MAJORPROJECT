const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

module.exports.sendEmail = async (to, otp) => {

const FROM_EMAIL = process.env.EMAIL_FROM;  

  const msg = {
    to: to,
    from: {
      name: "WanderLust Team",
      email: FROM_EMAIL
    },
    subject: "Your WanderLust Email Verification Code",
    text: `Hello! Your verification code is ${otp}. It expires in 5 minutes. 
If you did not request this email, you can ignore it.`,

    // Clean HTML that Gmail likes
    html: `
      <div style="font-family: Arial, sans-serif; padding: 20px; background: #fafafa;">
        <div style="max-width: 480px; margin: auto; background: #ffffff; padding: 25px; border-radius: 10px;
        box-shadow: 0 4px 18px rgba(0,0,0,0.08);">

          <h2 style="color:#333; text-align:center; margin-bottom: 10px;">
            Your WanderLust Verification Code
          </h2>

          <p style="font-size: 15px; color:#555; text-align:center;">
            Please use the OTP given below to verify your email address:
          </p>

          <div style="font-size: 32px; font-weight: bold; text-align:center; margin: 20px 0;
          letter-spacing: 5px; color:#ff385c;">
            ${otp}
          </div>

          <p style="text-align:center; font-size:14px; color:#666;">
            This code is valid for <b>5 minutes</b>.
          </p>

          <p style="font-size:13px; color:#777; margin-top:25px; text-align:center;">
            If you did not request this email, you can safely ignore it.
          </p>
        </div>
      </div>
    `,

    // Increase inbox placement probability
    headers: {
      "List-Unsubscribe": `<mailto:${FROM_EMAIL}>`,   // Gmail likes this
      "X-Entity-Ref-ID": "wanderlust-otp-system"      // Unique reference ID (reduces spam flag)
    },

    // Helps debug issues
    mailSettings: {
      sandboxMode: {
        enable: false
      }
    }
  };

  try {
    const response = await sgMail.send(msg);

    console.log("💌 SENDGRID STATUS:", response[0].statusCode);
    console.log("📬 SENDGRID HEADERS:", response[0].headers);

    return true;

  } catch (error) {
    console.error("❌ SENDGRID ERROR:", error.response ? error.response.body : error);
    return false;
  }
};