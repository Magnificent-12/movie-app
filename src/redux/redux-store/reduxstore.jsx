import {configureStore} from '@reduxjs/toolkit';
const movies = {};
const store = configureStore({
  allMovies: movies,
});
