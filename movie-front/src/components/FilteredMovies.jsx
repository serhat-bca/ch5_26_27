import Movie from "./Movie";

const FilteredMovies = ({ filteredMovies, toggleWatchlist, handleDelete }) => {
  return (
    <div>
      <ul>
        {filteredMovies.map((m) => (
          <Movie
            key={m.id}
            movie={m}
            toggleWatchlist={toggleWatchlist}
            handleDelete={handleDelete}
          />
        ))}
      </ul>
    </div>
  );
};

export default FilteredMovies;
