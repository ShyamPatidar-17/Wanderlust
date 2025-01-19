const express                = require("express")
const wrapAsync              = require("../utils/wrapasync.js");
const ExpressError           = require("../utils/ExpressError.js");
const {listingSchema,reviewSchema}  = require("../schema.js");
const Review                 = require("../models/review.js")
const Listing                = require("../models/listing");
const router                 = express.Router({mergeParams:true});
const {isReviewAuthor}        = require("../middleware.js")
const reviewController = require("../controllers/review.js")

// Validation

const validateReview=(req,res,next)=>{
    let {error}= reviewSchema.validate(req.body);
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


//Show reviews Route
router.post("/",isLoggedin,validateReview,wrapAsync(reviewController.showReviews))


//Delete review route//
router.delete("/:reviewId",isLoggedin,isReviewAuthor,wrapAsync(reviewController.destroyReviews))


module.exports=router;