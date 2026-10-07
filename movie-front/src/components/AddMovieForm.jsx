import React from "react";

const AddMovieForm = ({
  movieName,
  handleChange,
  handleSubmit,
  releaseYear,
  setReleaseYear,
}) => {
  return (
    <div>
      <h3>Add a new movie</h3>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          value={movieName}
          placeholder="Movie Name"
        />
        <input
          value={releaseYear}
          onChange={(e) => setReleaseYear(e.target.value)}
          placeholder="Release Year"
        />
        <button type="submit">Add Movie</button>
      </form>
    </div>
  );
};

export default AddMovieForm;
