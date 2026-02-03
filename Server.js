require("dotenv").config();
const express = require("express");
const app = express();
const connectDB = require("./config/connectDB");

connectDB();
app.use(express.json());

// routes
app.use("/", require("./routes/notesRoute"));

app.listen(3000, () => console.log("Server running on port 3000"));
