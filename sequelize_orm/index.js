const express = require("express");
require("dotenv").config();
const app = express();

const port = process.env.PORT;

const { Sequelize, Model, DataTypes } = require("sequelize");
const dbOrm = new Sequelize(process.env.DB_URL, {
  dialect: "postgres",
});

// you need to create table Models
class Note extends Model {}
// initialize the Note model
// Note.init({},{})
Note.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    sequelize: dbOrm,
    tableName: "notes",
    timestamps: false,
  },
);

app.get("/api/notes", async (req, res) => {
  try {
    const result = await Note.findAll();
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get("/", (req, res) => {
  res.json({ message: "i am listening" });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
