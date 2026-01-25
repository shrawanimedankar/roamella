if (process.env.NODE_ENV != "production") { // ENV
  require("dotenv").config();
}

const express = require("express"); // Core imports
const app = express();
const mongoose = require("mongoose");
const path = require("path");

const methodOverride = require("method-override"); // Utilities
const ejsMate = require("ejs-mate");
const ExpressError = require("./utils/ExpressError");

const session = require("express-session");  // Authentication & session
const MongoStore = require("connect-mongo").default;  //Mongo session Store 
const passport = require("passport");
const LocalStrategy = require("passport-local");
const User = require("./models/user");

const flash = require("connect-flash");  //Flash  
const cookieParser = require("cookie-parser"); //cookies
app.use(cookieParser("secretCode"));

// Routes
const listingRouter = require("./routes/listing"); 
const reviewRouter = require("./routes/review");
const userRouter = require("./routes/user");

const PORT = process.env.PORT || 8080;

const dbUrl = process.env.ATLASDB_URL;  //Connect to MongoDB
main() 
  .then(() => console.log("Connection successful"))
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect(dbUrl);
}

// View engine
app.engine("ejs", ejsMate); 
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public"))); 
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

//Mongo Session store
const store = MongoStore.create({   
  mongoUrl: dbUrl,  
  crypto: {   
    secret: process.env.SECRET,    
  },
touchAfter: 24 * 3600, 
}); 

store.on("error", (err) => {    
     console.log("Error in Mongo session store", err);    
});

const sessionOptions = {
  store,
  secret: process.env.SECRET, 
  resave: false,
  saveUninitialized: true,
  cookie: {
    expires: Date.now() + 7 * 24 * 60 * 60 * 1000,
    maxAge: 7 * 24 * 60 * 60 * 1000,
    httpOnly: true,
  },
};

app.use(session(sessionOptions)); //session middleware
app.use(flash());

app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

//locals
app.use((req, res, next) => {   
  res.locals.success = req.flash("success"); //Flash Middleware
  res.locals.error = req.flash("error");
  res.locals.currUser = req.user || null;
  next();
});

//Routes
app.use("/listings", listingRouter);
app.use("/listings/:id/reviews", reviewRouter);
app.use("/", userRouter);

app.use((req, res, next) => {
  next(new ExpressError(404, "Page not found!"));
});

// Error Handler
app.use((err, req, res, next) => {
  let { statusCode = 500, message = "Some Error Occurred" } = err;
  res.status(statusCode).render("listings/error.ejs", { message });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
