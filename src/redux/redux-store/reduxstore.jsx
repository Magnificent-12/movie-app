import {configureStore} from '@reduxjs/toolkit';
import userStore from '../redux-reducers/userstore';
import favorites from '../redux-reducers/favorites';
import movies from '../redux-reducers/movies';
//making a store
const store = configureStore({
  userStore: userStore,
  favorites: favorites,
  movies: movies,
});
