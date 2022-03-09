import {createSlice} from '@reduxjs/toolkit';
//reducer for the user
const user = localStorage.getItem('userinfo');
const userStore = createSlice({
  name: 'userStore',
  initialState: {
    email: user ? JSON.parse(user) : '',
    loggedIn: user ? true : false,
  },
  reducers: {
    addUser: (state, action) => {
      localStorage.setItem('userinfo', JSON.stringify(action.payload));
    },
    removeUser: () => localStorage.removeItem('userinfo'),
  },
});
export const {addUser, removeUser} = userStore.actions;
export default userStore.reducer;
