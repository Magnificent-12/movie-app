import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

export const getMovies = createAsyncThunk('post/getMovies', async () => {
  return await axios
    .get('https://api.themoviedb.org/3/discover/movie?api_key=8397ff8d67a1683ba8f7f42b3c27b829')
    .then((resp) => resp.data.results);
});
//reducer for all movies
const movies = createSlice({
  name: 'movies',
  initialState: {
    movies: [],
    status: 'begining',
  },
  //action for geting information aboout movies by Api
  extraReducers: {
    [getMovies.pending]: (state) => {
      state.status = 'waiting';
    },
    [getMovies.fulfilled]: (state, {payload}) => {
      state.status = 'resolved';
      state.movies = [payload];
    },
    [getMovies.rejected]: (state, action) => {
      state.status = 'rejected';
    },
  },
});

export default movies.reducer;
