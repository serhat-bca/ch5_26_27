import axios from "axios";
const MOVIE_URL = "/api/movies";

const getAllMovies = async () => {
  const response = await axios.get(MOVIE_URL);
  return response.data;
};

const addMovie = async (movie) => {
  const response = await axios.post(MOVIE_URL, movie);
  return response.data;
};

const updateMovie = async (movie) => {
  const response = await axios.put(`${MOVIE_URL}/${movie.id}`, movie);
  return response.data;
};

export default { getAllMovies, addMovie, updateMovie };
