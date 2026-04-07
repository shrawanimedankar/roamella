const Listing = require("../models/listing.js");
const { cloudinary } = require("../cloudConfig");

module.exports.index = async (req, res) => {
  const allListings = await Listing.find({});
  res.render("listings/index.ejs", {
    allListings,
    noListings: allListings.length === 0,
    category: "All Listings",
  });
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
      { title: { $regex: location, $options: "i" } },
    ],
  });
  const noListings = allListings.length === 0;
  res.render("listings/index.ejs", {
    allListings,
    noListings,
    category: `Search results for ${location}`,
  });
};

module.exports.renderNewForm = (req, res) => {
  res.render("listings/new.ejs");
};

module.exports.showListing = async (req, res) => {
  const { id } = req.params;
  const listing = await Listing.findById(id)
    .populate("owner")
    .populate({
      path: "reviews",
      populate: { path: "author" },
    });
  if (!listing) {
    req.flash("error", "Listing unavailable.");
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
  req.flash("success", "Listing created successfully.");
  res.redirect("/listings");
};

module.exports.renderEditForm = async (req, res) => {
  let { id } = req.params;
  const listing = await Listing.findById(id);
  if (!listing) {
    req.flash("error", "Listing unavailable.");
    res.redirect("/listings");
  } else {
    let originalImageUrl = listing.image.url;
    originalImageUrl = originalImageUrl.replace(
      "/upload",
      "/upload/w_250,c_fill",
    );
    // console.log(listing.image.url);
    res.render("listings/edit.ejs", { listing, originalImageUrl });
  }
};

module.exports.updateListing = async (req, res) => {
  let { id } = req.params;
  let listing = await Listing.findByIdAndUpdate(id, { ...req.body.listing });

  if (typeof req.file !== "undefined") {
    await cloudinary.uploader.destroy(listing.image.filename); //delete old image
    let url = req.file.path; // upload new image
    let filename = req.file.filename;
    listing.image = { url, filename };
    await listing.save();
  }
  req.flash("success", "Changes saved successfully.");
  res.redirect(`/listings/${id}`);
};

module.exports.destroyListing = async (req, res) => {
  try {
    let { id } = req.params;
    // Find the listing first
    let listing = await Listing.findById(id);
    if (!listing) {
      req.flash("error", "Listing not found.");
      return res.redirect("/listings");
    }
    // Delete the image from Cloudinary
    if (listing.image && listing.image.filename) {
      await cloudinary.uploader.destroy(listing.image.filename);
    }
    // Delete listing from MongoDB
    await Listing.findByIdAndDelete(id);

    req.flash("success", "Listing removed successfully.");
    res.redirect("/listings");
  } catch (err) {
    console.log(err);
    req.flash("error", "Something went wrong while deleting the listing.");
    res.redirect("/listings");
  }
};
