import {configureStore} from '@reduxjs/toolkit';
import userStore from '../redux-reducers/userstore';
import favorites from '../redux-reducers/favorites';
import movies from '../redux-reducers/movies';
import toast from '../redux-reducers/toast';
//making a store
const store = configureStore({
  reducer: {
    userStore: userStore,
    favorites: favorites,
    movies: movies,
    toast: toast,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({}),
});

export default store;
