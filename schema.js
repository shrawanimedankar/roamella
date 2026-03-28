//Joi Schema (validation rules)
const Joi = require("joi");

// ================= LISTING SCHEMA =================
module.exports.listingSchema = Joi.object({
  listing: Joi.object({
    title: Joi.string().trim().min(3).max(100).required(),
    description: Joi.string().trim().min(10).max(500).required(),
    location: Joi.string().trim().required(),
    country: Joi.string().trim().required(),
    price: Joi.number().min(0).required().messages({
      "number.base": "Price must be a number",
      "number.min": "Price cannot be negative",
    }),

    category: Joi.string()
      .valid(
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
      )
      .required()
      .messages({
        "any.only": "Invalid category selected",
      }),

    image: Joi.object({
      filename: Joi.string().allow("", null),
      url: Joi.string().allow("", null),
    }).allow(null),

    amenities: Joi.array().items(Joi.string()).min(10).required().messages({
      "array.base": "Amenities must be an array",
      "array.min": "Please select at least 10 amenities",
    }),
  }).required(),
});

// ================= REVIEW SCHEMA =================
module.exports.reviewSchema = Joi.object({
  review: Joi.object({
    rating: Joi.number().min(1).max(5).required().messages({
      "number.min": "Rating must be at least 1",
      "number.max": "Rating cannot exceed 5",
    }),

    comment: Joi.string().trim().min(10).max(300).required().messages({
      "string.min": "Review must be at least 10 characters",
    }),
  }).required(),
});
