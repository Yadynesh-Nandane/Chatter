import { createSlice } from "@reduxjs/toolkit";
import { axiosInstance } from "../lib/axios.js";

const initialState = {
  authUser: null,
  isSigningUp: false,
  isLoggingIn: false,
  isCheckingAuth: true,
  isUpdatingProfile: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    checkAuth: (state) => {
      try {
        const res = axiosInstance.get("/auth/check");
        state.authUser = res.data;
      } catch (error) {
        console.log("Error in checkAuth: ", error);
        state.authUser = null;
      } finally {
        state.isCheckingAuth = false;
      }
    },
  },
});

export default authSlice.reducer;
export const { checkAuth } = authSlice.actions;
