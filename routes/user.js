const express = require('express');
const router = express.Router();
const wrapAsync = require('../utils/wrapAsync');
const passport = require('passport');
const { saveRedirectUrl } = require('../middleware.js');

const userController = require('../controllers/users.js');

// Root Route -
router.get("/", userController.root);

// Rental Route - 
router.get("/rentals", userController.rental);

// SignUP Route- 
router.route('/signup')
    .get(userController.renderSignupForm)
    .post(wrapAsync(userController.signUp));

// Send OTP Route -
router.route('/send-otp')
    .get(userController.renderSendOTPForm)
    .post(wrapAsync(userController.sendOTP));

// Verify OTP Route -
router.route('/verify-otp')
    .get(userController.renderVerifyOTPForm)
    .post(wrapAsync(userController.verifyOTP));

// Login Route-
router.route('/login')
    .get(userController.loginForm)
    .post(saveRedirectUrl, passport.authenticate('local', { failureRedirect: '/login', failureFlash: true }), userController.login);

// LogOut Route-
router.get('/logout', userController.logout);

module.exports = router;