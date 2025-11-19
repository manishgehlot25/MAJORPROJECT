### 🌍 WanderLust — Full-Stack Travel & Stay Booking Platform

WanderLust is a complete full-stack travel and rental booking platform designed and developed by me as a major project.
The goal of this project is to build a modern, responsive, and functional website where users can explore stays, create listings, manage bookings, verify their email using OTP, read/write reviews, and interact with a clean UI.

This project is fully deployed online on Render, uses MongoDB Atlas for cloud database storage, and follows a professional MVC architecture for clean, scalable code.
#
### 🚀 Main Features

#### 🔐 Complete Authentication System

* Signup & Login using Passport.js

* Password hashing, sessions, authorization

* Protect pages using custom middlewares

* Connect-flash messages for errors and success

#### ✉️ Email OTP Verification

* Real-time OTP sending via SendGrid

* OTP stored securely with expiry time

* Modern OTP UI with auto-focus input boxes

* Spam-warning note for users

* Handles invalid, expired, or mismatched OTP

#### 🏡 Listings Management (CRUD)

* Add new stays with images & location

* Edit existing listings

* Delete listings

* View all listings on a dedicated index page

* Detailed property pages with user reviews and maps

#### ⭐ Review System

* Users can add reviews

* Edit and delete reviews

* Reviews displayed on listing page

* Validations & access control

#### 🔍 Powerful Search Function

* Search stays by:

    * City

    * Country

    *  Location keyword

* Search results shown on a dedicated page

* Responsive search bar in navigation

#### 🗺️ Google Maps Integration

* Uses Google Geocoding API

* Converts user-entered location → coordinates

* Displays map on listing detail pages

#### ☁️ Cloudinary for Image Storage

* Fast, secure cloud image uploading

* Auto optimization & resizing

* Works perfectly with forms

#### 🧱 Backend & Architecture

* Clean MVC (Models, Controllers, Views) structure

* Well-organized routes using router.route()

* Reusable middleware functions

* Centralized custom error handling

* Form validation and sanitation

* .env for all sensitive keys

#### 🎨 Frontend & UX

* Fully responsive UI (mobile, tablet, laptop)

* Clean layout and easy navigation

* Reusable EJS templates (partials)

* Real-time feedback using flash messages

* Polished UI for OTP & auth pages

* Interactive search and listing views

#### ☁️ Deployment

* Hosted live on Render

* MongoDB Atlas for cloud database

* Cloudinary for file storage

* SendGrid for email delivery
# 
### 🚀 Live Deployment (Render)

👉 https://wanderlust-rrnn.onrender.com
#
### 🧰 Tech Stack
#### Frontend

* HTML

* CSS

* JavaScript

* EJS Templates

#### Backend

* Node.js

* Express.js

* Passport.js (Authentication)

* Connect-Flash

* Custom Middlewares

* Express Router.route()

#### Database

* MongoDB Atlas

* Mongoose

#### Cloud Integrations

* Cloudinary (Image storage)

* SendGrid (OTP emails)

* Google Maps Geocoding API
#
### 📂 Project Structure (MVC)
 ```
MAJORPROJECT/
│
├── controllers/
├── init/
├── models/
├── routes/
├── views/
│   ├── includes/
│   ├── layouts/
│   ├── listings/
│   └── users/
│
├── public/
│   ├── css/
│   └── js/
|
├── utils/            
├── middleware.js       
├── cloudConfig.js     
├── geoCoding.js        
├── schema.js
├── app.js              # Main server file
└── .env                # Private config
```
#
### 🧪 How to Run Project Locally

#### 1. Clone the repo
```
git clone https://github.com/manishgehlot25/MAJORPROJECT

cd MAJORPROJECT
```

#### 2. Install dependencies
```
npm install

```

#### 3. Add .env file
```
CLOUD_NAME=**********
CLOUD_API_KEY=**************
CLOUD_API_SECRET=******************

MAP_API_KEY=***************

ATLASDB_URL=your_mongodb_atlas_url


SECRET=********************

SENDGRID_API_KEY=*******************
EMAIL_FROM=your verified email on sendGrid 
```

#### 4. Start server
```
node app.js

```

#### Visit:
```
http://localhost:8080

```
#
### 🧠 Why I Built This Project

I created WanderLust to understand how full real-world web apps work.

#### This project taught me:

* How structures listings & reviews

* How user authentication works behind the scenes

* How to handle image uploads using Cloudinary

* How mapping/geocoding APIs work

* How to structure code using MVC

* How to deploy full-stack apps

* How to send secure OTP emails

* How to write clean, scalable backend logic

It’s not a college project — it’s something I genuinely enjoyed building.
#
### 🔮 Future Updates (Planned)

* Booking calendar functionality

* User dashboard

* Notification system

* Wishlist / Save listing

* More travel pages (tours, packages, experiences)

* Improved search filters (price, guests, amenities)

* New redesigned UI
#
### 👤 Author

Manish Gehlot

B.Tech (AI & DS) | Full-Stack Developer

Passionate about building real, functional web applications with clean code and modern workflows.

Gmail :- gehlotmanish9079@gmail.com

Linkdin :- https://www.linkedin.com/in/gehlotmanish
