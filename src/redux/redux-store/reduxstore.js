import {configureStore} from '@reduxjs/toolkit';
import userStore from '../redux-reducers/userstore';
import favorites from '../redux-reducers/favorites';
import movies from '../redux-reducers/movies';
import toast from '../redux-reducers/toast';
import {filters} from '../redux-reducers/filters';

//making a store
const store = configureStore({
  reducer: {
    userStore,
    favorites,
    movies,
    toast,
    filters: filters.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({}),
});

export default store;
