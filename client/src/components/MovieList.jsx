import { useEffect, useState } from 'react';
import { getMovies, deleteMovie } from '../services/movieService';

const MovieList = () => {
  const [movies, setMovies] = useState([]);

  const loadMovies = async () => {
    const { data } = await getMovies();
    setMovies(data);
  };

  const handleDelete = async (id) => {
    await deleteMovie(id);
    loadMovies();
  };

  useEffect(() => {
    loadMovies();
  }, []);

  return (
    <div>
      <h4>Movie List</h4>
      <table className="table table-striped table-bordered">
  <thead className="thead-dark">
    <tr>
      <th>ID</th>
      <th>Name</th>
      <th>Casting</th>
      <th>Release Date</th>
      <th>Director</th>
      <th>Producer</th>
      <th>Actions</th>
    </tr>
  </thead>
  <tbody>
    {movies.map((movie) => (
      <tr key={movie.id}>
        <td>{movie.id}</td>
        <td>{movie.name}</td>
        <td>{movie.casting}</td>
        <td>{movie.releaseDate}</td>
        <td>{movie.director}</td>
        <td>{movie.producer}</td>
        <td>
          <button className="btn btn-danger btn-sm" onClick={() => handleDelete(movie.id)}>
            Delete
          </button>
        </td>
      </tr>
    ))}
  </tbody>
</table>
    </div>
  );
};

export default MovieList;
