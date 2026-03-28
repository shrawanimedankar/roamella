console.log("Current working directory:", process.cwd());
require("dotenv").config();

const mongoose = require("mongoose");
const Listing = require("../models/listing.js");
const User = require("../models/user.js");
const Review = require("../models/review.js");
const initData = require("./data.js");

const defaultOwnerId = "69705829520cd2a68bab2009";

async function init() {
  try {
    await mongoose.connect(process.env.ATLASDB_URL);
    console.log("MongoDB connected");

    // Ensure default owner exists
    let defaultOwner = await User.findById(defaultOwnerId);
    if (!defaultOwner) {
      defaultOwner = new User({
        _id: defaultOwnerId,
        username: "shrawi",
        email: "shrawanimedankar@gmail.com",
      });
      await User.register(defaultOwner, "shrawi");
      console.log("Default owner created ");
    }

    // Loop through each listing
    for (let listingData of initData.data) {
      // Create review documents first
      let reviewIds = [];
      if (listingData.reviews && listingData.reviews.length > 0) {
        const reviewDocs = await Review.insertMany(
          listingData.reviews.map((r) => ({
            ...r,
            author: r.author || defaultOwnerId,
          })),
        );
        reviewIds = reviewDocs.map((r) => r._id);
      }

      // Create listing with review IDs
      const listing = new Listing({
        ...listingData,
        owner: defaultOwnerId,
        reviews: reviewIds,
      });

      await listing.save();
      // console.log(`Inserted listing: ${listing.title}`);
    }

    console.log("All listings with reviews added successfully!");
  } catch (err) {
    console.error(err);
  } finally {
    mongoose.connection.close();
  }
}

init();
