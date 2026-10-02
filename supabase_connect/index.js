require("dotenv").config();
const express = require("express");
const app = express();
app.use(express.json());

const port = process.env.PORT;

const { Pool } = require("pg");

const pool = new Pool({
  connectionString: process.env.DB_URL,
});

app.get("/api/notes", async (req, res) => {
  const result = await pool.query("SELECT * FROM notes");
  res.json(result.rows);
});

app.post("/api/notes", async (req, res) => {
  const { content } = req.body;

  const result = await pool.query(
    "INSERT INTO notes (content) VALUES ($1) RETURNING *",
    [content],
  );

  res.status(201).json(result.rows[0]);
});

app.get("/", (req, res) => {
  res.json({ message: "I am listening" });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
