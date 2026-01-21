const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const passport = require("passport");
const { saveRedirectUrl } = require("../middleware.js");
const userController = require("../controller/user.js");

router.route("/signup") 
.get(userController.renderSignupForm) //Show Signup Form
.post(wrapAsync(userController.signup)); //Post Details of Signup Form

router.route("/login") 
.get(userController.renderLoginForm)  //Show Login Form
.post(saveRedirectUrl,  //Post Details of Login Form
  passport.authenticate("local", { failureRedirect: "/login", failureFlash: true, }), 
  userController.login
);  

router.get("/logout", userController.logout); 

module.exports = router;