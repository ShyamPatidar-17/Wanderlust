const express                = require("express")
const router                 = express.Router();
const user                   = require("../models/users.js")
const wrapAsync              = require("../utils/wrapasync.js");
const passport               = require("passport");
const userController = require("../controllers/user.js")



//Signup New user register
router.get("/signup",userController.renderSignupForm);

router.post("/signup",wrapAsync(userController.signup))

//Login existing user check or register

router.get("/login",userController.renderLoginForm)

router.post("/login",
    passport.authenticate("local",{failureRedirect:'/login',failureFlash:true}),
    userController.login)

//logut

router.get("/logout",userController.logout)


module.exports=router;