import {createSlice} from '@reduxjs/toolkit';
//reducer for the user
const userStore = createSlice({
  name: 'userStore',
  initialState: {email: ''},
  reducers: {},
});
export default userStore.reducer;
