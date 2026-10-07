const express = require("express");
const app = express();
// use json middleware
app.use(express.json());

// using cors
const cors = require("cors");
app.use(cors());
app.use(express.static("dist"));

// middleware method creation
const requestLogger = (req, res, next) => {
  // middleware logic, update req if needed.
  // once you are done call next method for this request
  // to move forward
  console.log(`Request Method: ${req.method}`);
  console.log(`Request Path: ${req.path}`);
  if (req.body && Object.keys(req.body).length != 0) {
    console.log("Request Body: ", req.body);
  }
  next();
};

app.use(requestLogger);

const port = process.env.PORT || 3001;
let movies = [
  {
    title: "Inception",
    id: 1,
    watchlist: true,
  },
  {
    title: "The Dark Knight",
    id: 2,
    watchlist: false,
  },
  {
    title: "Interstellar",
    id: 3,
    watchlist: true,
  },
  {
    title: "The Matrix",
    id: 4,
    watchlist: false,
  },
  {
    title: "Avengers: Endgame",
    id: 5,
    watchlist: true,
  },
];

app.get("/", (req, res) => {
  res.send("hello server. Node.js. BCA");
});

app.get("/api/movies", (req, res) => {
  res.json(movies);
});

app.get("/api/movies/:id", (req, res) => {
  const id = req.params.id;
  const movie = movies.find((m) => m.id == id);
  if (!movie) {
    res.status(404).json({ error: "Movie not found!" });
  } else {
    res.json(movie);
  }
});

app.delete("/api/movies/:id", (req, res) => {
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

app.post("/api/movies", (req, res) => {
  if (req.body.title == null || req.body.title == "") {
    res.status(400).json({ message: "Title Required." });
  }
  const { title, watchlist = false } = req.body;
  const movie = {
    title,
    id: Math.floor(Math.random() * 10000),
    watchlist,
  };

  // add a input validation if title is not there
  // return 400 and a message as "Title required."
  movies.push(movie);
  // get the data from body.
  // body can be reached with req.body
  // make sure to add app.use(express.json()) middleware at the beginning

  // create a movie object using body data
  // if no watchlist passed default it to false
  // add movie object to movies array
  // return the created movie as a response
  // create a random id.
  res.json(movie);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
