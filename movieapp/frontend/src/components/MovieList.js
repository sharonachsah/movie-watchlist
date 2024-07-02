import React from 'react';
import MovieItem from './MovieItem';

const MovieList = ({ movies, onEditMovie, onDeleteMovie, onToggleWatched, onRateMovie, onReviewMovie }) => {
    return (
        <ul>
            {movies.map((movie) => (
                <MovieItem
                    key={movie._id}
                    movie={movie}
                    onEditMovie={onEditMovie}
                    onDeleteMovie={onDeleteMovie}
                    onToggleWatched={onToggleWatched}
                    onRateMovie={onRateMovie}
                    onReviewMovie={onReviewMovie}
                />
            ))}
        </ul>
    );
};

export default MovieList;
