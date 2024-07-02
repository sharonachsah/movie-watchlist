const express = require('express');
const { getMovies, addMovie, editMovie, deleteMovie } = require('../controllers/movieController');

const router = express.Router();

router.route('/').get(getMovies).post(addMovie);
router.route('/:id').put(editMovie).delete(deleteMovie);

module.exports = router;
