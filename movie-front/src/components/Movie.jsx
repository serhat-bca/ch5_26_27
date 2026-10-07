const Movie = ({ movie, toggleWatchlist }) => {
  const spanStyle = {
    fontSize: "0.7rem",
    cursor: "pointer",
  };

  return (
    <li>
      {movie.title} {movie?.releaseYear && ` (${movie.releaseYear})`}
      <span onClick={() => toggleWatchlist(movie)} style={spanStyle}>
        {movie.watchlist ? " remove" : " add"}
      </span>
    </li>
  );
};

export default Movie;
