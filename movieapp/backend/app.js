const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const Movie = require('./models/movie');

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useCreateIndex: true,
});

app.get('/api/movies', async (req, res) => {
    const movies = await Movie.find();
    res.json(movies);
});

app.post('/api/movies', async (req, res) => {
    const newMovie = new Movie(req.body);
    const savedMovie = await newMovie.save();
    res.json(savedMovie);
});

app.put('/api/movies/:id', async (req, res) => {
    const updatedMovie = await Movie.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedMovie);
});

app.delete('/api/movies/:id', async (req, res) => {
    await Movie.findByIdAndDelete(req.params.id);
    res.json({ message: 'Movie deleted' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
