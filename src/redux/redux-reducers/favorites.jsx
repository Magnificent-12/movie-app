import {createSlice} from '@reduxjs/toolkit';
//reducer for favorite movies
const favorites = createSlice({
  name: 'favorite',
  initialState: [],
  reducers: {
    addFavMovies(state, action) {2
      state = [...state,action.payload]
    },
  },
});
export const {addFavMovies} = movies.actions;
export default favorites.reducer;
