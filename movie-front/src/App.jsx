import { useState, useEffect } from "react";
import AddMovieForm from "./components/AddMovieForm";
import FilteredMovies from "./components/FilteredMovies";
import Toggle from "./components/Toggle";
import movieService from "./services/movieService";

const App = () => {
  const [movielist, setMovielist] = useState([]);
  const [movieName, setMovieName] = useState("");
  const [releaseYear, setReleaseYear] = useState("");
  const [toggle, setToggle] = useState(false);
  const [notification, setNotification] = useState(null);

  useEffect(() => {
    // axios.get("http://localhost:3001/movies").then((response) => {
    //   console.log(response.data);
    //   setMovielist(response.data);
    // });
    movieService
      .getAllMovies()
      .then((movies) => setMovielist(movies))
      .catch((e) => {
        console.log("Server is down");
        setMovielist([]);
      });
  }, []);

  const filteredMovies = toggle
    ? movielist.filter((m) => m.watchlist)
    : movielist;

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (movieName) {
        console.log("Label: ", movieName);
        const mvObj = {
          title: movieName,
          watchlist: false,
          releaseYear: parseInt(releaseYear) || null,
        };
        const newMovie = await movieService.addMovie(mvObj);
        setNotification(`A new movie added [${newMovie.title}]`);
        setTimeout(() => {
          setNotification(null);
        }, 3000);
        setMovielist([...movielist, newMovie]);
        setMovieName("");
        setReleaseYear("");
      } else {
        setNotification("Movie name is required!");
        setTimeout(() => {
          setNotification(null);
        }, 3000);
        setReleaseYear("");
      }
    } catch (error) {
      setNotification(error.response.data.error);
      setTimeout(() => {
        setNotification(null);
      }, 3000);
      setMovieName("");
    }
  };

  const handleChange = (e) => {
    setMovieName(e.target.value);
  };

  const toggleWatchlist = async (movie) => {
    const request = { ...movie, watchlist: !movie.watchlist };
    // const response = await axios.put(
    //   `http://localhost:3001/movies/${movie.id}`,
    //   request
    // );

    // const updatedMovie = response.data;
    try {
      const updatedMovie = await movieService.updateMovie(request);

      // update the movieList state with the updated movie
      setMovielist(
        movielist.map((m) => (m.id === updatedMovie.id ? updatedMovie : m)),
      );
    } catch (error) {
      alert(`The movie [${movie.title}] is not in server.`);
      setMovielist(movielist.filter((m) => m.id !== movie.id));
    }
  };

  const handleDelete = async (movie) => {
    try {
      await movieService.deleteMovie(movie);
      setMovielist(movielist.filter((m) => m.id !== movie.id));
    } catch (error) {
      setNotification("Error deleting movie");
      setTimeout(() => {
        setNotification(null);
      }, 3000);
    }
  };

  if (movielist == null) {
    return <p>Sorry. Server is down. Try Later</p>;
  }

  return (
    <div>
      <h2>Movies</h2>
      {notification && <p>{notification}</p>}
      <Toggle toggle={toggle} setToggle={setToggle} />
      <FilteredMovies
        filteredMovies={filteredMovies}
        toggleWatchlist={toggleWatchlist}
        handleDelete={handleDelete}
      />
      <AddMovieForm
        movieName={movieName}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        releaseYear={releaseYear}
        setReleaseYear={setReleaseYear}
      />
    </div>
  );
};

export default App;
