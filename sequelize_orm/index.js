const express = require("express");
require("dotenv").config();
const app = express();
const port = process.env.PORT;
const notesRouter = require("./routes/notes");
app.use("/api/notes", notesRouter);
const dbOrm = require("./util/db");

app.get("/", (req, res) => {
  res.json({ message: "i am listening" });
});

const start = async () => {
  try {
    await dbOrm.authenticate();
    console.log("DB Connected:");
    app.listen(port, () => {
      console.log(`Server listening on port ${port}`);
    });
  } catch (error) {
    console.log("Server failed to start.");
  }
};

start();
