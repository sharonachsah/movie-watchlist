import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  fetchMovies,
  addMovie,
  editMovie,
  deleteMovie,
  toggleWatched,
  rateMovie,
  reviewMovie,
} from './redux/actions';
import MovieList from './components/MovieList';
import AddMovieForm from './components/AddMovieForm';
import './index.css'; // Import CSS file

const App = () => {
  const dispatch = useDispatch();
  const { movies, loading, error } = useSelector((state) => state);

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  const handleAddMovie = (movie) => {
    dispatch(addMovie(movie));
  };

  const handleEditMovie = (id, updates) => {
    dispatch(editMovie(id, updates));
  };

  const handleDeleteMovie = (id) => {
    dispatch(deleteMovie(id));
  };

  const handleToggleWatched = (id, watched) => {
    dispatch(toggleWatched(id, watched));
  };

  const handleRateMovie = (id, rating) => {
    dispatch(rateMovie(id, rating));
  };

  const handleReviewMovie = (id, review) => {
    dispatch(reviewMovie(id, review));
  };

  return (
    <div className="container">
      <h1>Movie Watchlist</h1>
      <AddMovieForm onAddMovie={handleAddMovie} />
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      <MovieList
        movies={movies}
        onEditMovie={handleEditMovie}
        onDeleteMovie={handleDeleteMovie}
        onToggleWatched={handleToggleWatched}
        onRateMovie={handleRateMovie}
        onReviewMovie={handleReviewMovie}
      />
    </div>
  );
};

export default App;
