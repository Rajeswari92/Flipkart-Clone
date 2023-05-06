import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  user: null,
};
export const userSlices = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    removeUser: (state) => {
      state.user = null;
    },
  },
});
export const { setUser, removeUser } = userSlices.actions;
export default userSlices.reducer;
