import { axiosInstance } from "./axios.js";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  signedIn: { user: null },
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signedInSlice: (state, action) => {
      state.signedIn.user = action.payload;
    },
    signOutSlice: (state) => {
      state.signedIn.user = null;
    },
    checkAuth: async (state) => {
      try {
        const response = await axiosInstance.get("/auth/checkauth");
        console.log("Check auth response: ", response);
        state.signedIn.user = response.data;
      } catch (error) {
        console.error("Error in checkAuth slice: ", error);
        state.signedIn.user = null;
      }
    },
  },
});

export const { signedInSlice, signOutSlice, checkAuth } = authSlice.actions;
export default authSlice.reducer;
