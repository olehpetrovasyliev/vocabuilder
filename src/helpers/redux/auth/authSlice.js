import { createSlice, isAnyOf, PayloadAction } from "@reduxjs/toolkit";
import {
  signUpThunk,
  logInThunk,
  getUserInfoThunk,
  signOutThunk,
  returnedCredentials,
} from "./authOperations";

const initialState = {
  user: null,
  loading: false,
  isLoggedIn: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(signUpThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.error = null;
        state.isLoggedIn = true;
      })
      .addCase(logInThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.error = null;
        state.isLoggedIn = true;
      })
      .addCase(getUserInfoThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.error = null;
        state.isLoggedIn = true;
      })
      .addCase(signOutThunk.fulfilled, (state) => {
        state.loading = false;
        state.user = null;
        state.error = null;
        state.isLoggedIn = false;
      })
      .addMatcher(
        isAnyOf(
          signUpThunk.pending,
          logInThunk.pending,
          getUserInfoThunk.pending,
          signOutThunk.pending
        ),
        (state) => {
          state.loading = true;
          state.user = null;
          state.error = null;
        }
      )
      .addMatcher(
        isAnyOf(
          signUpThunk.rejected,
          logInThunk.rejected,
          getUserInfoThunk.rejected,
          signOutThunk.rejected
        ),
        (state, action) => {
          state.loading = false;
          state.error = action.payload;
        }
      );
  },
});

export const authReducer = authSlice.reducer;
