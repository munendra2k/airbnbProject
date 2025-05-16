<h1>🏡 Airbnb Clone — MERN Stack (EJS Version)</h1>

<h2>📸 Screenshots</h2>
<h2><i >&#8962;</i> Home</h2>

<img src="/screenshots/home_wonderlust.png" alt="home_wonderlust" />

<h2>Signup form</h2>
<img src="/screenshots/signup_wonderlust.png" alt="signup_wonderlust" />

<h2>Map showing</h2>
<img src="/screenshots/map_wonderlust.png" alt="map_wonderlust" />

<h2>create listing</h2>
<img src="/screenshots/create_listing_wonderlust.png" alt="create_listing_wonderlust" />

<br/>
<h2>Descriptions</h2>
<p>A full-stack clone of Airbnb using Node.js, Express.js, MongoDB, and EJS. Built with features like user authentication, property listings, and image uploads.
</p>
<h2>🚀 Features</h2>
<ul>
<li><strong>User authentication & authorization (Passport)</strong></li>

<li><strong>Create, edit, and delete property listings</strong></li>

<li><strong>Upload multiple images with Cloudinary</strong></li>

<li><strong>Review and rating system</strong></li>

<li><strong>Mapbox integration for location display</strong></li>

<li><strong>Flash messages and form validation</strong></li>

<li><strong>Role-based access for guests and hosts</strong></li>
</ul>
<h3>🛠️ Tech Stack</h3>
<strong>Backend:</strong> Node.js, Express.js, MongoDB, Mongoose
<br/>
<strong>Frontend:</strong> EJS (server-rendered templates), Bootstrap CSS

<strong>Authentication:</strong> Passport.js

<strong>File Uploads:</strong> Multer + Cloudinary

<strong>Maps:</strong> Mapbox

<strong>Deployment:</strong> Render

<h3>📦 Installation</h3>
<p>bash
  <br/>
Copy
   <br/>
Edit
   <br/>
git clone https://github.com/munendra2k/airbnbProject.git
   <br/>


cd airbnbProject
   <br/>

npm install
   <br/>

Create a .env file with the following:
   <br/>

bash
   <br/>

Copy
   <br/>

<b>Edit</b>
 <br/>
 
PORT=3000
 <br/>
 
DATABASE_URL=your_mongodb_uri
 <br/>

CLOUDINARY_CLOUD_NAME=your_cloud_name
 <br/>

CLOUDINARY_API_KEY=your_api_key
 <br/>
 
CLOUDINARY_API_SECRET=your_api_secret
 <br/>
 
MAPBOX_MAP_TOKEN=your_map_token
 <br/>
 
SECRET_KEY=your_secret_key
 <br/>
 
Then run the app:
 <br/>
 
bash
 <br/>
 
Copy
 <br/>
 
Edit
 <br/>
 
npm start
<br/>
</p>

<h2>📂 Folder Structure</h2>

<p>
  <br/>
routes/ — all express routes
  <br/>
controllers/ — logic for each route
  <br/>
views/ — EJS templates
  <br/>
public/ — static files (CSS, JS)
  <br/>
models/ — Mongoose schemas
  <br/>
utils/ — custom middleware, helpers
  <br/>
show tree structure in <a href="/tree.txt"> tree.txt file</a>
  <br/>
</p>
