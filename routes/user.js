const express = require("express");
const router = express.Router();
const wrapAsunc = require("../utils/wrapAsunc");
const passport = require("passport");
const { saveRedirectUrl } = require("../middleware.js");
const { signup, renderSignupForm, renderLoginForm, login, logout } = require("../controllers/users.js");

router.route("/signup")
.get(renderSignupForm)
.post(wrapAsunc(signup));


router.route("/login")
.get(renderLoginForm)
.post(saveRedirectUrl, passport.authenticate('local', { failureRedirect: '/login', failureFlash: true }), login);

router.get("/logout", logout);


module.exports = router;


// router.get("/signup", renderSignupForm)
// router.post("/signup", wrapAsunc(signup));

// router.get("/login", renderLoginForm)

// router.post("/login",saveRedirectUrl, passport.authenticate('local', { failureRedirect: '/login', failureFlash: true }), login);