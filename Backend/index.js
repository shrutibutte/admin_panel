const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();
const port = process.env.PORT;
const URL = process.env.MONGODB_URI;
app.use(express.json());
const productroute = require("./routes/productroute");
const userroute = require("./routes/userroute");
const cors = require("cors");

app.use(
  cors({
    origin: "*",
  })
);

const bodyParser = require("body-parser");
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api", productroute);

app.use("/", userroute);

try {
  const asyncFunction = async () => {
    await mongoose.connect("mongodb://127.0.0.1:27017/FreshFood", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB");
  };
  asyncFunction();
} catch (error) {
  console.log("Error connecting to MongoDB", error.message);
}

app.listen(5000, () => {
  console.log(`Server running on port 5000`);
});
