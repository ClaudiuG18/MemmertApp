const { log } = require("console");
const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/test")
  .then(() => {
    console.log("connection open");
  })
  .catch((err) => {
    log("Error connecting");
    log(err);
  });
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("home");
});

app.listen(3000, () => {
  console.log("App is listening on port http://localhost:3000");
});
