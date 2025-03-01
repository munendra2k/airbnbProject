const mongoose = require("mongoose");
const MONGODB_URI = process.env.MONGODB_URI;
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
