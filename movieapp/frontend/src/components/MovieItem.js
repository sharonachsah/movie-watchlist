import React, { useState } from 'react';

const MovieItem = ({ movie, onEditMovie, onDeleteMovie, onToggleWatched, onRateMovie, onReviewMovie }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editForm, setEditForm] = useState({
        title: movie.title,
        description: movie.description,
        releaseYear: movie.releaseYear,
        genre: movie.genre,
        rating: movie.rating,
        review: movie.review,
    });

    const handleEditChange = (e) => {
        const { name, value } = e.target;
        setEditForm({ ...editForm, [name]: value });
    };

    const handleEditSubmit = (e) => {
        e.preventDefault();
        onEditMovie(movie._id, editForm);
        setIsEditing(false);
    };

    return (
        <li>
            {isEditing ? (
                <form onSubmit={handleEditSubmit}>
                    <div>
                        <label>Title:</label>
                        <input
                            type="text"
                            name="title"
                            value={editForm.title}
                            onChange={handleEditChange}
                            required
                        />
                    </div>
                    <div>
                        <label>Description:</label>
                        <input
                            type="text"
                            name="description"
                            value={editForm.description}
                            onChange={handleEditChange}
                        />
                    </div>
                    <div>
                        <label>Release Year:</label>
                        <input
                            type="number"
                            name="releaseYear"
                            value={editForm.releaseYear}
                            onChange={handleEditChange}
                        />
                    </div>
                    <div>
                        <label>Genre:</label>
                        <input
                            type="text"
                            name="genre"
                            value={editForm.genre}
                            onChange={handleEditChange}
                        />
                    </div>
                    <div>
                        <label>Rating:</label>
                        <input
                            type="number"
                            name="rating"
                            value={editForm.rating}
                            onChange={handleEditChange}
                            min="1"
                            max="5"
                        />
                    </div>
                    <div>
                        <label>Review:</label>
                        <textarea
                            name="review"
                            value={editForm.review}
                            onChange={handleEditChange}
                        ></textarea>
                    </div>
                    <button type="submit">Save</button>
                    <button type="button" onClick={() => setIsEditing(false)}>Cancel</button>
                </form>
            ) : (
                <>
                    <h2>{movie.title}</h2>
                    <p>{movie.description}</p>
                    <p>{movie.releaseYear}</p>
                    <p>{movie.genre}</p>
                    <p>Rating: {movie.rating}</p>
                    <p>Review: {movie.review}</p>
                    <div className="movie-actions">
                        <button onClick={() => onToggleWatched(movie._id, !movie.watched)}>
                            {movie.watched ? 'Mark as Unwatched' : 'Mark as Watched'}
                        </button>
                        <button className="edit" onClick={() => setIsEditing(true)}>Edit</button>
                        <button className="delete" onClick={() => onDeleteMovie(movie._id)}>Delete</button>
                    </div>
                </>
            )}
        </li>
    );
};

export default MovieItem;
