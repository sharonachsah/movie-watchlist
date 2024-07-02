const Movie = require('../models/Movie');

const getMovies = async (req, res) => {
    try {
        const movies = await Movie.find();
        res.json(movies);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const addMovie = async (req, res) => {
    const { title, description, releaseYear, genre } = req.body;
    const movie = new Movie({
        title,
        description,
        releaseYear,
        genre,
    });

    try {
        const newMovie = await movie.save();
        res.status(201).json(newMovie);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const editMovie = async (req, res) => {
    const { id } = req.params;
    const { title, description, releaseYear, genre, watched, rating, review } = req.body;

    try {
        const movie = await Movie.findById(id);
        if (movie) {
            movie.title = title || movie.title;
            movie.description = description || movie.description;
            movie.releaseYear = releaseYear || movie.releaseYear;
            movie.genre = genre || movie.genre;
            movie.watched = watched !== undefined ? watched : movie.watched;
            movie.rating = rating || movie.rating;
            movie.review = review || movie.review;

            const updatedMovie = await movie.save();
            res.json(updatedMovie);
        } else {
            res.status(404).json({ message: 'Movie not found' });
        }
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const deleteMovie = async (req, res) => {
    const { id } = req.params;

    try {
        const movie = await Movie.findById(id);
        if (movie) {
            await movie.remove();
            res.json({ message: 'Movie removed' });
        } else {
            res.status(404).json({ message: 'Movie not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getMovies,
    addMovie,
    editMovie,
    deleteMovie,
};
