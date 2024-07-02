import axios from 'axios';

// Action Types
export const FETCH_MOVIES_REQUEST = 'FETCH_MOVIES_REQUEST';
export const FETCH_MOVIES_SUCCESS = 'FETCH_MOVIES_SUCCESS';
export const FETCH_MOVIES_FAILURE = 'FETCH_MOVIES_FAILURE';

export const ADD_MOVIE = 'ADD_MOVIE';
export const EDIT_MOVIE = 'EDIT_MOVIE';
export const DELETE_MOVIE = 'DELETE_MOVIE';
export const TOGGLE_WATCHED = 'TOGGLE_WATCHED';
export const RATE_MOVIE = 'RATE_MOVIE';
export const REVIEW_MOVIE = 'REVIEW_MOVIE';
export const BASE_URI = 'http://localhost:5000/api/movies'

// Action Creators
export const fetchMovies = () => async (dispatch) => {
    dispatch({ type: FETCH_MOVIES_REQUEST });


    try {
        const response = await axios.get(BASE_URI);
        dispatch({ type: FETCH_MOVIES_SUCCESS, payload: response.data });
    } catch (error) {
        dispatch({ type: FETCH_MOVIES_FAILURE, payload: error.message });
    }
};

export const addMovie = (movie) => async (dispatch) => {
    try {
        const response = await axios.post(BASE_URI, movie);
        dispatch({ type: ADD_MOVIE, payload: response.data });
    } catch (error) {
        console.error(error);
    }
};

export const editMovie = (id, updates) => async (dispatch) => {
    try {
        const response = await axios.put(`${BASE_URI}/${id}`, updates);
        dispatch({ type: EDIT_MOVIE, payload: response.data });
    } catch (error) {
        console.error(error);
    }
};

export const deleteMovie = (id) => async (dispatch) => {
    try {
        await axios.delete(`${BASE_URI}/${id}`);
        dispatch({ type: DELETE_MOVIE, payload: id });
    } catch (error) {
        console.error(error);
    }
};

export const toggleWatched = (id, watched) => async (dispatch) => {
    try {
        const response = await axios.put(`${BASE_URI}/${id}`, { watched });
        dispatch({ type: TOGGLE_WATCHED, payload: response.data });
    } catch (error) {
        console.error(error);
    }
};

export const rateMovie = (id, rating) => async (dispatch) => {
    try {
        const response = await axios.put(`${BASE_URI}/${id}`, { rating });
        dispatch({ type: RATE_MOVIE, payload: response.data });
    } catch (error) {
        console.error(error);
    }
};

export const reviewMovie = (id, review) => async (dispatch) => {
    try {
        const response = await axios.put(`${BASE_URI}/${id}`, { review });
        dispatch({ type: REVIEW_MOVIE, payload: response.data });
    } catch (error) {
        console.error(error);
    }
};
