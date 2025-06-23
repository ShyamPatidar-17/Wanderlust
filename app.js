if(process.env.NODE_ENV!="production")
{
    require('dotenv').config();
}

const express                = require("express");
const mongoose               = require("mongoose");
const path                   = require("path");
const joi                    = require("joi");
const methodOverride         = require("method-override");
const ejsMate                = require("ejs-mate");
const session                = require("express-session");
const MongoStore             = require("connect-mongo")
const flash                  = require("connect-flash");
const passport               = require("passport");
const LocalStrategy          = require("passport-local");
const multer                 = require("multer");
const User                   = require("./models/users.js");
const Listing                = require("../MAJOR PROJECT/models/listing");
const Review                 = require("../MAJOR PROJECT/models/review.js");
const wrapAsync              = require("./utils/wrapasync.js");
const ExpressError           = require("./utils/ExpressError.js");
const {listingSchema,reviewSchema}  = require("./schema.js");
const port                   = 8080;
const app                    = express();
const upload                 = multer({dest:'uploads/'})
const listingRoute           = require("./routes/listing.js");
const reviewRoute            = require("./routes/review.js");
const userRoute              = require("./routes/user.js");
const dbUrl                  = process.env.ATLASDB_URL

// Views Directory path set
app.set("view engine","ejs")
app.set("views",path.join(__dirname,"views"));
app.use(express.urlencoded({extended:true}))
app.use(methodOverride("_method"));
app.engine("ejs",ejsMate);
app.use(express.static(path.join(__dirname,"/public")));


const store= MongoStore.create({
    mongoUrl: dbUrl,
    crypto:{
        secret:process.env.SECRET
    },
    touchAfter:24*3600
})

store.on("erroe",()=>{
    console.log("Error in mongo SESSION STORE",err);
})

const sessionOptions={
    store,
    secret:process.env.SECRET,
    resave:false,
    saveUninitialized:true,
    cookie:{
        expires: Date.now()+7*24*60*60*1000, //no. of days*hours in a day*minutes*hours*sec in min* milisec in sec
        maxAge:7*24*60*60*1000,
        httpOnly:true, 
    }
};



//Sample Main route//
app.get("/",(req,res)=>{
    res.redirect("/listings");
})

app.listen(8080,()=>{
    console.log(`App is Running on port ${port}`)
})


app.use(session(sessionOptions));
app.use(flash());


// Passport //
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());



app.use((req,res,next)=>{
    res.locals.success=req.flash("success");
    res.locals.error=req.flash("error");
    res.locals.currUser=req.user;
    next();
})


//Mongoose Connection


main().then(()=>
{
    console.log("Connected with Database Successfully");
}).catch(err=>{
    console.log(err)
})
async function main() {
    await mongoose.connect(dbUrl);
}







//Routes
//Listing
app.use("/listings",listingRoute)

//Review
app.use("/listings/:id/reviews",reviewRoute)

// User login and signup

app.use("/",userRoute)










//Error Handling//
app.use((err,req,res,next)=>{
    let{statusCode=500,message="something went wrong"}=err;
    res.status(statusCode).render("error.ejs",{err})
})


// Validate for non existing paths//
app.all("*", (req,res,next)=>{
    next(new ExpressError(404,"Page Not Found"));
})