import {createSlice} from '@reduxjs/toolkit';
//reducer for all movies
const movies = createSlice({
  name: 'movies',
  initialState: [],
  reducers: {
    addMovies(state, action) {
      state = action.payload;
    },
  },
});
export const {addMovies} = movies.actions;
export default movies.reducer;
