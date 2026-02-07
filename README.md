# 🏡 Roamella | Full-Stack Property Rental Platform

🔹 Live Demo https://roamella.onrender.com/listings

## 🔹 Features
* CRUD functionality for property listings
* RESTful APIs for listings, users, and reviews following MVC architecture
* Secure authentication and role-based authorization using Passport.js
* Image upload via **Multer** and optimized storage with **Cloudinary**
* Review and rating system with ownership validation and protected routes
* Category-based filtering and dynamic listing views using **EJS**
* Responsive UI built with **Bootstrap**, ensuring cross-device compatibility
* Server-side validation, flash messages, and form validations


## 🔹 Tech Stack

**Frontend**  
* EJS  
* Bootstrap  
* CSS  
* JavaScript  

**Backend**  
* Node.js  
* Express.js  
* MongoDB  
* Mongoose  
* Passport.js  

**Other Tools**  
* Cloudinary (Image storage)  
* Multer (File uploads)  
* Express-session  
* Connect-flash  

## 🔹 Authentication & Security
* Passwords are hashed using secure algorithms  
* Protected routes via middleware  
* Only listing owners can modify or delete their listings  

## 🔹 Deployment (Render.com)
- Go to Render → Sign Up → Continue with GitHub → Authorize Render
- Dashboard → New → Web Service → Choose your GitHub repo (roamella)

Render Settings:
- Environment: Node
- Build Command: npm install (installs dependencies)
- Start Command: node app.js (starts the server)


## 🔹 Installation
* Clone the repo: git clone https://github.com/yourusername/roamella.git
* Navigate to the project folder: cd roamella
* Install dependencies: npm install
* Create a .env file and add your environment variables (ATLASDB URL, CLOUD API KEY, CLOUD API SECRET, CLOUD NAME, SESSION SECRET, etc.)

* Run the app locally: npm start

* Open your browser at http://localhost:3000



## 🔹  Future Improvements / Advanced Features
* Booking functionality  
* Wishlist / favorites feature  
* Payment integration (Stripe)  
* Admin dashboard  
* Map integration (Mapbox)  
* Host dashboard  
* Chat between host & user


 ###  ⭐ If you like this project – Give it a ⭐ on GitHub!
