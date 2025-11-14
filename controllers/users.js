const User = require('../models/user.js');
const { sendEmail } = require('../utils/sendEmail.js');

module.exports.renderSignupForm = (req, res) => {
  res.render('users/signup.ejs');
};

module.exports.signUp = async (req, res) => {
  try {
    let { username, email, password } = req.body;
    const newUser = new User({ email, username });
    const registeredUser = await User.register(newUser, password);
    console.log(registeredUser);

    req.login(registeredUser, (err) => {
      if (err) {
        return next(err);
      }
      req.flash('success', 'welcome to wanderlust');
      res.redirect('/listings');
    });
  } catch (e) {
    req.flash('error', e.message);
    res.redirect('/signup');
  }
};

module.exports.loginForm = (req, res) => {
  res.render('users/login.ejs');
};

module.exports.login = async (req, res) => {
  req.flash('success', 'Welcome back to Wanderlust!');
  let redirectUrl = res.locals.redirectUrl || '/listings';
  res.redirect(redirectUrl);
};

module.exports.logout = (req, res, next) => {
  req.logout((err) => {
    if (err) {
      return next(err);
    }
    req.flash('success', 'you are logged out!');
    res.redirect('/listings');
  });
};

module.exports.root = (req, res) => {
  res.render('listings/root.ejs');
};

module.exports.rental = (req, res) => {
  res.render('listings/rental.ejs');
};

module.exports.renderSendOTPForm = (req, res) => {
  res.render('users/send-otp.ejs');
};

module.exports.sendOTP = async (req, res) => {
  const { email } = req.body;
  const user = await User.findOne({ email });

  try {
    if (user) {
      // Generate OTP
      const otp = Math.floor(100000 + Math.random() * 900000);

      // Save to DB with expiry time
      const otpExpire = Date.now() + 5 * 60 * 1000;

      await User.findOneAndUpdate(
        { email },
        { email, otp, otpExpire },
        { upsert: true, new: true }
      );

      await sendEmail(email, otp);

      req.flash('success', 'OTP Sent Successfully ✅');
      res.redirect('/verify-otp');

    } else {
      return res.render('users/send-otp.ejs', {
        email,
        error: "Incorrect Email ! Please Enter Correct Email."
      });
    }
  }
  catch (err) {
    res.status(500).render('error.ejs', { message: err });
  }
};

module.exports.renderVerifyOTPForm = (req, res) => {
  res.render('users/verify-otp.ejs');
};

module.exports.verifyOTP = async (req, res) => {
  const { email, otp } = req.body;

  try {
    // Find user with email
    const user = await User.findOne({ email });

    if (!user) {
      return res.render('users/verify-otp.ejs', {
        email,
        error: "Email not found. Try again."
      });
    }

    // Check OTP Expiration
    if (user.otpExpire < Date.now()) {
      return res.render('users/verify-otp.ejs', {
        email,
        error: "OTP Expired. Please request a new OTP."
      });
    }

    // Check OTP Match
    if (user.otp !== otp) {
      return res.render('users/verify-otp.ejs', {
        email,
        error: "Incorrect OTP or Invalid Email. Please try again."
      });
    }

    // ✅ OTP Correct → Verify Account
    user.isVerified = true;
    user.otp = undefined;
    user.otpExpire = undefined;
    await user.save();

    // Redirect after verification
    req.flash('success', 'Email Verified Successfully ✅');
    res.redirect('/listings'); 

  } catch (err) {
    res.status(500).render('error.ejs', { message: "Server Error" });
  }
};