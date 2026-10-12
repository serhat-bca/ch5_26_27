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
        res.status(400).json({error: error.message});
    }
});

router.delete("/api/movies/:id", (req, res) => {
  const id = req.params.id;
  const movie = movies.find((m) => m.id == id);
  if (!movie) {
    res.status(404).json({ message: "Movie not found." });
  } else {
    movies = movies.filter((m) => m.id != movie.id);
    res.status(200).json({ message: "Movie deleted." });
  }
  // find movie
  // not found message
  // erase the movie object from movies array
  // you can use filter method for this
  // return a deleted message.
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
