import Movie from "./Movie";

const FilteredMovies = ({ filteredMovies, toggleWatchlist }) => {
  return (
    <div>
      <ul>
        {filteredMovies.map((m) => (
          <Movie key={m.id} movie={m} toggleWatchlist={toggleWatchlist} />
        ))}
      </ul>
    </div>
  );
};

export default FilteredMovies;
