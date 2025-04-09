const mongoose = require("mongoose");
const MONGODB_URI = "mongodb://127.0.0.1:27017/wanderlust";

// const ATLASDB_URL = process.env.ATLASDB_URL;
const main = async () => {
  await mongoose.connect(MONGODB_URI);
};
main()
  .then((res) => {
    console.log("connection succesful");
  })
  .catch((err) => {
    console.log(err);
  });
module.exports = main;
