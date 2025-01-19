const express                = require("express")
const multer                 = require("multer");
const wrapAsync              = require("../utils/wrapasync.js");
const ExpressError           = require("../utils/ExpressError.js");
const Listing                = require("../models/listing");
const {listingSchema}        = require("../schema.js");
const router                 = express.Router();
const {isOwner}              = require("../middleware.js")
const listingController      = require("../controllers/listings.js")
const {storage}              = require("../cloudconfig.js")
const upload                 = multer({storage})



// Validation 
const validateListing=(req,res,next)=>{
    let {error}= listingSchema.validate(req.body);
   if(error)
   {
    let errMsg=error.details.map((el)=>el.message).join(",")
    throw new ExpressError(400,errMsg);
   }else{
    next();
   }
}

const isLoggedin=(req,res,next)=>
    {
        if(!req.isAuthenticated())
        {
            req.session.redirectURL=req.originalURL;
            req.flash("error","Please LOGGIN to CREATE A NEW LISTING")
            return res.redirect("/login")
        }
    else{
        next();
    }  
}


router.route("/")
    .get(wrapAsync(listingController.index))
    .post(isLoggedin,upload.single('listing[image]'),wrapAsync(listingController.createListing))
    

// Index Route //
// router.get("/", wrapAsync(listingController.index)); //Done by router.route


//New Route //
router.get("/new",isLoggedin,listingController.renderNewForm)


// Show Route //
router.get("/:id", wrapAsync(listingController.showListings))


//create Route
// router.post("/",isLoggedin,validateListing,wrapAsync(listingController.createListing)) //Done by router.route
   

//Edit Route
router.get("/:id/edit",isLoggedin,isOwner,wrapAsync(listingController.renderEditForm))


//Update
router.put("/:id",isLoggedin,isOwner,upload.single("listing[image]"),validateListing,wrapAsync(listingController.updateListing))


//Delete Route
router.delete("/:id",isLoggedin,isOwner,wrapAsync(listingController.destroyListing))



module.exports=router;