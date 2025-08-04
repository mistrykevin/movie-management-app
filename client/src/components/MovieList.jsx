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
      <ul className="list-group">
        {movies.map(movie => (
          <li key={movie.id} className="list-group-item d-flex justify-content-between">
            <div>
              <strong>{movie.name}</strong> - {movie.director} ({movie.releaseDate})
            </div>
            <button className="btn btn-danger btn-sm" onClick={() => handleDelete(movie.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
