const mongoose = require("mongoose");
const gamesSchema = mongoose.Schema({
  name: String,
  year: Number,
});
const Game = mongoose.model("Game", gamesSchema);
module.exports = Game;
