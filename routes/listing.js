const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const { validateListing, isLoggedIn, isOwner } = require("../middleware.js");
const listingController = require("../controller/listing.js");
const multer = require("multer");
const { storage } = require("../cloudConfig.js");
const upload = multer({ storage });


router.get(  /* CATEGORY FILTER*/
  "/category/:category",
  wrapAsync(listingController.filterByCategory)
);

router
  .route("/")
  .get(wrapAsync(listingController.index)) //Index - Main page
  .post(
    isLoggedIn, //Create New Listing
    upload.single("listing[image]"),
    validateListing,
    wrapAsync(listingController.createListing)
  );

router.get("/new", isLoggedIn, listingController.renderNewForm); // Show New Listing Form

router.get("/search", listingController.searchListings);



router
  .route("/:id")
  .get(wrapAsync(listingController.showListing)) //Show Listing - After clicking cards
  .put(   // Update Listing
    isLoggedIn,
    isOwner,
    upload.single("listing[image]"),
    validateListing,
    wrapAsync(listingController.updateListing)
  )
  .delete(isLoggedIn,  //Delete Listing
    isOwner, 
    wrapAsync(listingController.destroyListing)); 

router.get(
  "/:id/edit",
  isLoggedIn,
  isOwner,
  wrapAsync(listingController.renderEditForm)
); //Edit Listing




module.exports = router;
