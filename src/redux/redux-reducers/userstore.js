import {createSlice} from '@reduxjs/toolkit';
//reducer for the user

const user = localStorage.getItem('userinfo');
//export const getUser = () => JSON.parse(user);

const userStore = createSlice({
  name: 'userStore',
  initialState: {
    email: user ? JSON.parse(user) : '',
    loggedIn: user ? true : false,
  },
  reducers: {
    addUser: (state, action) => {
      localStorage.setItem('userinfo', JSON.stringify(action.payload));
      state.loggedIn = true;
      state.email = action.payload;
    },
    removeUser: (state) => {
      localStorage.removeItem('userinfo');
      state.loggedIn = false;
    },
  },
});
export const {addUser, removeUser} = userStore.actions;
export default userStore.reducer;
