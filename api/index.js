const express = require("express");
const app = express();
const mongoose = require("mongoose");
const multer = require("multer");
const dotenv = require("dotenv");
dotenv.config();

// TEST ROUTE
app.get("/", (req, res) => {
  res.send("welcome!");
});

app.listen(8800, () => {
  console.log("Port 8800 Server is running!");
});
