const express = require("express");
const app = express();
// use json middleware
app.use(express.json());
const Movie = require("./models/movie");
const movieRouter = require("./routes/movies");
app.use("/api/movies", movieRouter);

// using cors
const cors = require("cors");
app.use(cors());
app.use(express.static("dist"));

const db_connect = require("./util/db");

const { requestLogger } = require("./util/middleware");

app.use(requestLogger);

const port = process.env.PORT || 3001;

app.get("/", (req, res) => {
  res.send("hello server. Node.js. BCA");
});

const start = async () => {
  try {
    await db_connect.authenticate();
    console.log("DB Connection Established.");

    await db_connect.sync();

    app.listen(port, () => {
      console.log(`Listening on port ${port}`);
    });
  } catch (error) {
    console.log("Error starting to Server: ", error);
  }
};

start();
