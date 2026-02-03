const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose
    .connect("mongodb://localhost:27017/notes_db")
    .then(() => {
      console.log("Database connected to local server");
    })
    .catch((err) => console.error(err));
};
module.exports = connectDB;
