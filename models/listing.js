const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Review = require("./review.js");

const listingSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: String,
  image: {
    url: String,
    filename: String,
  },
  price: Number,
  location: String,
  country: String,
  category: {
    type: String,
    required: true,
    enum: [
      "Apartments",
      "Hotels",
      "Resorts",
      "Villas",
      "GlampingSites",
      "Rooms",
      "Cabins",
      "GuestRooms",
      "Hostels",
      "FarmStays",
      "HouseBoats",
      "Cottages",
      "TreeHouses",
      "Ryokans",
      "Artic",
      "Riads",
    ],
  },
  amenities: {
    type: [String],
    required: true,
    validate: {
      validator: (v) => v.length >= 10,
      message: "Please select at least 10 amenities",
    },
  },
  reviews: [
    {
      type: Schema.Types.ObjectId,
      ref: "Review",
    },
  ],
  owner: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

listingSchema.post("findOneAndDelete", async (listing) => {
  if (listing) {
    await Review.deleteMany({ _id: { $in: listing.reviews } });
  }
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;
