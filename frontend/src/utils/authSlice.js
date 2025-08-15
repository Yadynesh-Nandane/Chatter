import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isSignedIn: false,
  signedIn: { user: null },
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signedInSlice: (state, action) => {
      state.isSignedIn = true;
      state.signedIn.user = action.payload;
    },
    signOutSlice: (state) => {
      state.isSignedIn = false;
      state.signedIn.user = null;
    },
  },
});

export const { signedInSlice, signOutSlice } = authSlice.actions;
export default authSlice.reducer;
