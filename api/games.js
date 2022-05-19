const express = require("express");
const router = express.Router();
router.post("/", async (req, res) => {
  let game = new Game(req.body);
  await game.save();
  res.send(game);
});

router.put("/:id", async (req, res) => {
  const game = await Game.findById(req.params.id);
  game.name = req.body.name;
  game.year = req.body.year;
  await game.save();
  res.send(game);
});
router.delete("/:id", async (req, res) => {
  const game = await Game.findById(req.params.id);
  await game.delete();
  res.send(game);
});
router.get("/:id", async (req, res) => {
  const game = await Game.findById(req.params.id);
  res.send(game);
});
router.get("/", async (req, res) => {
  const games = await Game.find();
  res.send(games);
});
module.exports = router;
