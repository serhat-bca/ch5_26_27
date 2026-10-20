const Movie = ({ movie, toggleWatchlist, handleDelete }) => {
  const spanStyle = {
    fontSize: "0.7rem",
    cursor: "pointer",
  };

  const delete_btn = {
    color: "yellow",
    backgroundColor: "black",
    marginLeft: "5px",
    fontSize: ".7rem",
    cursor: "pointer",
  };

  return (
    <li>
      {movie.title} {movie?.releaseYear && ` (${movie.releaseYear})`}
      <span onClick={() => toggleWatchlist(movie)} style={spanStyle}>
        {movie.watchlist ? " remove" : " add"}
      </span>
      <span onClick={() => handleDelete(movie)} style={delete_btn}>
        delete
      </span>
    </li>
  );
};

export default Movie;
