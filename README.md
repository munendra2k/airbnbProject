**🏡 Airbnb Clone — MERN Stack (EJS Version)**

A full-stack clone of Airbnb using Node.js, Express.js, MongoDB, and EJS. Built with features like user authentication, property listings, and image uploads.

🚀 Features
User authentication & authorization (Passport)

Create, edit, and delete property listings

Upload multiple images with Cloudinary

Review and rating system

Mapbox integration for location display

Flash messages and form validation

Role-based access for guests and hosts

🛠️ Tech Stack
Backend: Node.js, Express.js, MongoDB, Mongoose

Frontend: EJS (server-rendered templates), Bootstrap CSS

Authentication: Passport.js

File Uploads: Multer + Cloudinary

Maps: Mapbox

Deployment: Render

📦 Installation
bash
Copy
Edit
git clone

https://github.com/munendra2k/airbnbProject.git

cd airbnbProject

npm install

Create a .env file with the following:

bash

Copy

Edit

PORT=3000
DATABASE_URL=your_mongodb_uri

CLOUDINARY_CLOUD_NAME=your_cloud_name

CLOUDINARY_API_KEY=your_api_key

CLOUDINARY_API_SECRET=your_api_secret

MAPBOX_MAP_TOKEN=your_map_token

SECRET_KEY=your_secret_key

Then run the app:

bash

Copy

Edit

npm start

📸 Screenshots
(Add screenshots here to show UI)

📂 Folder Structure

routes/ — all express routes

controllers/ — logic for each route

views/ — EJS templates

public/ — static files (CSS, JS)

models/ — Mongoose schemas

utils/ — custom middleware, helpers

show tree structure in tree.txt file

