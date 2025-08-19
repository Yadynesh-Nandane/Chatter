import { axiosInstance } from "./axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  isSignedIn: null, // ← better than defaulting to false
  signedIn: { user: null },
};

export const checkAuth = createAsyncThunk(
  "checkingauth",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get("/auth/checkauth");
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || "Auth check failed");
    }
  }
);

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
  extraReducers: (builder) => {
    builder
      .addCase(checkAuth.pending, (state) => {
        state.isLoading = true;
        state.isSignedIn = null;
      })
      .addCase(checkAuth.fulfilled, (state, action) => {
        state.signedIn.user = action.payload;
        state.isLoading = false;
        state.isSignedIn = true;
      })
      .addCase(checkAuth.rejected, (state, action) => {
        state.isLoading = false;
        state.isSignedIn = false;
        state.signedIn.user = null;
        console.error("Error while checking auth: ", action.payload);
      });
  },
});

export const { signedInSlice, signOutSlice } = authSlice.actions;
export default authSlice.reducer;
