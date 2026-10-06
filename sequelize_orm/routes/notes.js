const express = require("express");
const router = express.Router();
const Note = require("../models/note");

router.get("/", async (req, res) => {
  try {
    const result = await Note.findAll();
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
