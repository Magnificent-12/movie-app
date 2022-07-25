import {createSlice} from '@reduxjs/toolkit';
//reducer for favorite movies
const initialState = {
  genres: [],
  startYear: 1930,
  endYear: new Date().getFullYear(),
};
export const filters = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    addGenre(state, action) {
      state.genres.push(action.payload);
      return state;
    },
    removeGenre(state, action) {
      state.genres = state.genres.filter((genre) => genre !== action.payload);
      return state;
    },
    addStartYear(state, action) {
      state.startYear = action.payload;
      return state;
    },
    addEndYear(state, action) {
      state.endYear = action.payload;
      return state;
    },
    reset(state) {
      state = initialState;
      return state;
    },
  },
});
