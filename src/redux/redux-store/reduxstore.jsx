import {configureStore} from '@reduxjs/toolkit';
import userStore from '../redux-reducers/userstore';
import favorites from '../redux-reducers/favorites';
import movies from '../redux-reducers/movies';
//making a store
const store = configureStore({
  reducer: {
    userStore: userStore,
    favorites: favorites,
    movies: movies,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({}),
});

export default store;
