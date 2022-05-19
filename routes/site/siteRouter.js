const express = require("express");
const router = express.Router();
const Game = require("../../models/Game");

router.get("/create", async (req, res) => {
  res.render("games/create");
});
router.post("/create", async (req, res) => {
  let record = new Game(req.body);
  await record.save();
  res.redirect("/games");
});
router.get("/edit/:id", async (req, res) => {
  let game = await Game.findById(req.params.id);
  res.render("games/edit", { game });
});
router.post("/edit/:id", async (req, res) => {
  let game = await Game.findById(req.params.id);
  game.name = req.body.name;
  game.year = req.body.year;
  await game.save();
  res.redirect("/games");
});
router.get("/delete/:id", async (req, res) => {
  let game = await Game.findById(req.params.id);
  await game.delete();
  res.redirect("/games");
});
router.get("/", async (req, res) => {
  const games = await Game.find();
  res.render("games/index", { games });
});

module.exports = router;
