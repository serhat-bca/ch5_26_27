const express = require("express");
const router = express.Router();
const Movie = require("../models/movie");

router.get("/", async (req, res) => {
  try {
    const movies = await Movie.findAll();
    res.json(movies);
  } catch (error) {
    res.status(400).json({ error: error });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const movie = await Movie.findByPk(req.params.id);
    res.status(200).json(movie);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const deleted = await Movie.destroy({ where: { id: id } });
    if (deleted === 0) {
      res.status(404).json({ message: "Movie not found." });
    } else {
      res.sendStatus(204);
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post("/", async (req, res) => {
  try {
    const { title, watchlist } = req.body;
    const movie = await Movie.create({ title, watchlist });
    res.status(201).json(movie);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
