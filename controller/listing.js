const Listing = require("../models/listing.js");

module.exports.index = async (req, res) => {
  const allListings = await Listing.find({});
  res.render("listings/index.ejs", { allListings, noListings: allListings.length === 0, category: "All Listings" });
};

module.exports.filterByCategory = async (req, res) => {
  const { category } = req.params;
  const allListings = await Listing.find({ category }); 
  const noListings = allListings.length === 0;  
  res.render("listings/index.ejs", { allListings, noListings, category });
};

module.exports.searchListings = async (req, res) => {
  const { location } = req.query;
  const allListings = await Listing.find({
    $or: [
      { location: { $regex: location, $options: "i" } },
      { country: { $regex: location, $options: "i" } },
      { title: { $regex: location, $options: "i" } }
    ]
  });
  const noListings = allListings.length === 0;
  res.render("listings/index.ejs", { allListings, noListings, category: `Search results for ${location}`
  });
};

module.exports.renderNewForm = (req, res) => {
  res.render("listings/new.ejs");
};

module.exports.showListing = async (req, res) => {
  const { id } = req.params;
  const listing = await Listing.findById(id)
    .populate("owner")          // <--- populates the owner document
    .populate({
      path: "reviews",         // optional: if you also want reviews populated
      populate: { path: "author" }
    });

  if (!listing) {
    req.flash("error", "Listing not found");
    return res.redirect("/listings");
  }

  res.render("listings/show", { listing });
};

module.exports.createListing = async (req, res, next) => {
  let url = req.file.path;
  let filename = req.file.filename;
  const newListing = new Listing(req.body.listing);
  newListing.location = newListing.location;
  newListing.country = newListing.country;
  newListing.owner = req.user._id;
  newListing.image = { url, filename };
  await newListing.save();
  req.flash("success", "New Listing Created");
  res.redirect("/listings");
};

module.exports.renderEditForm = async (req, res) => {
  let { id } = req.params;
  const listing = await Listing.findById(id);
  if (!listing) {
    req.flash("error", "Listing doesn't exist!");
    res.redirect("/listings");
  } else {
    let originalImageUrl = listing.image.url;
    originalImageUrl = originalImageUrl.replace("/upload", "/upload/w_250")
    res.render("listings/edit.ejs", { listing, originalImageUrl });
  }
};

module.exports.updateListing = async (req, res) => {
  let { id } = req.params;
  let listing = await Listing.findByIdAndUpdate(id, { ...req.body.listing });

  if (typeof req.file !== "undefined") {  //If new image uploaded → replace old image
    let url = req.file.path;
    let filename = req.file.filename;
    listing.image = { url, filename };
    await listing.save();
  }
  req.flash("success", "Listing Updated");
  res.redirect(`/listings/${id}`);
};

module.exports.destroyListing = async (req, res) => {
  let { id } = req.params;
  let deletedListing = await Listing.findByIdAndDelete(id);
  // console.log("Listing Deleted");
  // console.log(deletedListing);
  req.flash("success", "Listing Deleted");
  res.redirect("/listings");
};