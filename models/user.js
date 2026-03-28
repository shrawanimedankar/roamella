const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// const passportLocalMongoose = require("passport-local-mongoose");
const passportLocalMongoose = require("passport-local-mongoose").default;

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
  },
  isVerified: {
    type: Boolean,
    default: true,
  },

  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

userSchema.plugin(passportLocalMongoose); //Automaically does password hashing, salting, username

module.exports = mongoose.model("User", userSchema);
