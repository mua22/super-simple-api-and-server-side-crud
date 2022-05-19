const express = require("express");
const mongoose = require("mongoose");
const Game = require("./models/Game");
const path = require("path");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.send("We Are trying to build our first api");
});

app.use("/api/games", require("./api/games"));
app.use("/games", require("./routes/site/siteRouter"));

app.listen(3300, () => {
  console.log("Listening on port 3300");
});

mongoose
  .connect("mongodb://localhost/sp19bsea")
  .then(() => {
    console.log("connected to db");
  })
  .catch((err) => {
    console.log(err);
  });
