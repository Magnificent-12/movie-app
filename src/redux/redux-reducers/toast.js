import {createSlice} from '@reduxjs/toolkit';
//reducer for toast
const toast = createSlice({
  name: 'toast',
  initialState: [],
  reducers: {
    giveSomeAction(state, action) {
      state = action.payload;
    },
  },
});
export const {giveSomeAction} = toast.actions;
export default toast.reducer;
