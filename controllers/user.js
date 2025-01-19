const user                   = require("../models/users.js")



//signup Form
module.exports.renderSignupForm=
(req,res)=>{
    res.render("users/signup.ejs");
}


//Signup
module.exports.signup=
async(req,res)=>{
    try{
    let {username,email,password} = req.body;
    const newUser = new user({email,username,password});
    const registerdUser = await user.register(newUser,password);
    req.login(registerdUser,(err)=>{
        if(err)
        {
            return next()
        }
        else{
            req.flash("success","Welcome to WANDERLUST")
            res.redirect("/listings");
        }
    })
    
    } catch(e){
        req.flash("error",e.message);
        res.redirect("/signup");
    }
}


//login Form
module.exports.renderLoginForm=
(req,res)=>{
    res.render("users/login.ejs")
}


//Login
module.exports.login=
async(req,res)=>{
    req.flash("success","Welcome back to WANDERLUST ! !")
res.redirect("/listings")
}


//Logout
module.exports.logout=
(req,res,err)=>{
    req.logOut((err)=>{
        if(err){
          return  next(err);
        }
        else{
            req.flash("success","You are LOGGED OUT NOW!!!");
            res.redirect("/listings")
        }
    })
}