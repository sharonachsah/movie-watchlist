const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: String,
    releaseYear: Number,
    genre: String,
    watched: { type: Boolean, default: false },
    rating: { type: Number, default: 0 },
    review: String,
});

module.exports = mongoose.model('Movie', movieSchema);
