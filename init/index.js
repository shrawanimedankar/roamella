require("dotenv").config();

if (
  !process.env.ATLASDB_URL ||
  !process.env.OWNER_ID ||
  !process.env.OWNER_PASSWORD
) {
  throw new Error("Missing environment variables");
}

const mongoose = require("mongoose");
const Listing = require("../models/listing.js");
const User = require("../models/user.js");
const Review = require("../models/review.js");
const initData = require("./data.js");

const defaultOwnerId = process.env.OWNER_ID;

async function init() {
  try {
    await mongoose.connect(process.env.ATLASDB_URL);
    console.log("MongoDB connected");

    // Delete old user (if exists)
    await User.findByIdAndDelete(defaultOwnerId);
    console.log("Old default owner deleted");

    // Create new default user
    const defaultOwner = new User({
      _id: defaultOwnerId,
      username: "shrawi",
      email: "shrawanimedankar@gmail.com",
    });
    await User.register(defaultOwner, process.env.OWNER_PASSWORD);
    console.log("New default owner created");

    // (Optional) clear old data
    await Listing.deleteMany({});
    await Review.deleteMany({});
    console.log("Old listings & reviews deleted");

    // Insert fresh data
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
