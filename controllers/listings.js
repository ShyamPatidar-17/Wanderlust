const Listing=require("../models/listing.js")
const mbxGeocoding = require('@mapbox/mapbox-sdk/services/geocoding');
const mapToken = process.env.MAP_TOKEN;
const geocodingClient = mbxGeocoding({ accessToken: mapToken });

// Index Route
module.exports.index= 
async (req,res)=>{
    const allListings=await Listing.find({})
       res.render("listings/index.ejs",{allListings});  
}


//New Listing Route
module.exports.renderNewForm=(req,res)=>{
    res.render("listings/new.ejs");
}    


//Show All LIstrings Route
module.exports.showListings=
async(req,res)=>{
    let {id}=req.params;
    const listing = await Listing.findById(id).populate({path:"reviews",populate:{path:"author"}}).populate("owner");
    if(!listing)
    { 
        req.flash("error","Listing does not exist");
        res.redirect("/listings")
    }
    else{
        res.render("listings/show.ejs",{listing});
    }
}


//Create New Listing Route
module.exports.createListing=
    async (req,res,next)=>{

    let response = await geocodingClient.forwardGeocode({
        query: req.body.listing.location,
        limit: 1
      })
    .send()
    let url=req.file.path;
    let filename=req.file.filename;
        const newListing = new Listing(req.body.listing)
        newListing.owner = req.user._id; 
        newListing.image={url,filename};
        newListing.geometry=response.body.features[0].geometry
        let savedListing=await newListing.save();
        console.log(savedListing)
        req.flash("success","New Listing Created!!");
        res.redirect("/listings");
     
}


//Edit Form Route
module.exports.renderEditForm=
async (req,res)=>{
    let {id}=req.params;
    const listing=await Listing.findById(id);
    if(!listing)
        { 
            req.flash("error","Listing does not exist");
            res.redirect("/listings")
        }
        else{
            // orignalImageUrl= orignalImageUrl.replace("/upload","/upload/h_300,w_450")
            res.render("listings/edit.ejs",{listing})
        }
}


//Update Route
module.exports.updateListing=
async (req,res)=>{
    let {id}=req.params;
    let listing= await Listing.findByIdAndUpdate(id,{...req.body.listing});

    if(typeof req.file !== "undefined")
    {
    let url=req.file.path;
    let filename=req.file.filename;
    listing.image={url,filename};
    await listing.save();
    }
    
    

     req.flash("success"," Listing Edited ");
     res.redirect(`/listings/${id}`);
}


//Delete Route
module.exports.destroyListing=
async(req,res)=>{
    let {id}=req.params;
    let deltedeListing = await Listing.findByIdAndDelete(id);
    req.flash("success"," Listing Deleted!!");
    res.redirect("/listings");
}