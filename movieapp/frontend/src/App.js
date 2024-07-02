import React, { useEffect, useState } from 'react';
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
import './index.css';

const App = () => {
  const dispatch = useDispatch();
  const { movies, loading, error } = useSelector((state) => state);
  const [setIsAdding] = useState(false);

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  const handleAddMovie = async (movie) => {
    setIsAdding(true);
    await dispatch(addMovie(movie));
    setIsAdding(false);
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
    <div>
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
