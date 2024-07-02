import React, { useState } from 'react';

const AddMovieForm = ({ onAddMovie }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [releaseYear, setReleaseYear] = useState('');
    const [genre, setGenre] = useState('');
    const [rating, setRating] = useState(0);
    const [review, setReview] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onAddMovie({ title, description, releaseYear, genre, rating, review });
        setTitle('');
        setDescription('');
        setReleaseYear('');
        setGenre('');
        setRating(0);
        setReview('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Title:</label>
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Description:</label>
                <input
                    type="text"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
            </div>
            <div>
                <label>Release Year:</label>
                <input
                    type="number"
                    value={releaseYear}
                    onChange={(e) => setReleaseYear(e.target.value)}
                />
            </div>
            <div>
                <label>Genre:</label>
                <input
                    type="text"
                    value={genre}
                    onChange={(e) => setGenre(e.target.value)}
                />
            </div>
            <div>
                <label>Rating:</label>
                <input
                    type="number"
                    value={rating}
                    onChange={(e) => setRating(Number(e.target.value))}
                    min="1"
                    max="5"
                />
            </div>
            <div>
                <label>Review:</label>
                <textarea
                    value={review}
                    onChange={(e) => setReview(e.target.value)}
                ></textarea>
            </div>
            <button type="submit">Add Movie</button>
        </form>
    );
};

export default AddMovieForm;
