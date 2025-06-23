const ExpressError           = require("./utils/ExpressError.js");
const Listing                = require("./models/listing");
const {listingSchema}        = require("./schema.js");
const Review                 = require("../models/review.js")




const saveRedirectUrl=(req,res,next)=>{
    if(req.session.redirectURL){
        res.locals.redirectUrl=req.session.redirectURL;
    }
    next();
}

module.exports=saveRedirectUrl;


// Ediot and delete prevention
module.exports.isOwner=async (req,res,next)=>{
    let {id}=req.params;
    let listing= await Listing.findById(id);
   if(!res.locals.currUser._id.equals(listing.owner._id))
   {
    req.flash("error","You don't have permission");
   return  res.redirect(`/listings/${id}`);
   }
   else{
    next();
   }
}

module.exports.isReviewAuthor=async (req,res,next)=>{
    let {id,reviewId}=req.params;
    let review= await Review.findById(reviewId);
   if(!review.author.equals(res.locals.currUser._id))
   {
    req.flash("error","You don't have permission to delete this Review");
    return  res.redirect(`/listings/${id}`);
   }
    next();
}
