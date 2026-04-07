# 🏡 Roamella | Full-Stack Property Rental Platform

🔹 Live Demo https://roamella.onrender.com/listings

## 🔹 Features

- Developed a full-stack property rental platform enabling users to browse, with CRUD functionality to create, read, update, and delete property listings
- Developed RESTful APIs for users, listings, and reviews following MVC architecture
- MongoDB Atlas used as a cloud-hosted database for storing users, listings, and reviews
- Implemented secure authentication and role-based authorization using Passport.js with session management and protected routes
- Host Info Card displaying host avatar, verification status, membership duration, and a contact button for better interaction
- Integrated image upload using Multer and optimized cloud storage with Cloudinary
- Review system with ownership validation and server-side form validations
- Category-based filtering and dynamic listing views using EJS templates
- Responsive user interface built with Bootstrap for seamless experience across devices
- Applied hashed password security using PBKDF2 and added server-side validation, flash messages, and form error handling
- Deployed application on Render.com ensuring live access

## 🔹 Tech Stack

**Frontend**

- EJS
- Bootstrap
- CSS
- JavaScript

**Backend**

- Node.js
- Express.js
- MongoDB
- Mongoose
- Passport.js

**Other Tools**

- Cloudinary (Image storage)
- Multer (File uploads)
- Express-session
- Connect-flash

## 🔹 Authentication & Authorization

- Passwords are hashed using PBKDF2 secure algorithms
- Protected routes via middleware
- Only listing owners can modify or delete their listings
- Review Authors can delete their reviews

## 🔹 Deployment (Render.com)

- Go to Render → Sign Up → Continue with GitHub → Authorize Render
- Dashboard → New → Web Service → Choose your GitHub repo (roamella)

Render Settings:

- Environment: Node
- Build Command: npm install (installs dependencies)
- Start Command: node app.js (starts the server)

## 🔹 Installation

- Clone the repo: git clone https://github.com/yourusername/roamella.git
- Navigate to the project folder: cd roamella
- Install dependencies: npm install
- Create a .env file and add your environment variables (ATLASDB URL, CLOUD API KEY, CLOUD API SECRET, CLOUD NAME, SESSION SECRET, etc.)

- Run the app locally: npm start

- Open your browser at http://localhost:3000

## 🔹 Future Improvements / Advanced Features

- Booking functionality
- Wishlist / favorites feature
- Payment integration (Stripe)
- Admin dashboard
- Map integration (Mapbox)
- Host dashboard
- Chat between host & user
