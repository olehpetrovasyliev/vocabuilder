import { createAsyncThunk } from "@reduxjs/toolkit";
import { setToken, clearToken, instance } from "../../api/userConfig.js";

export const signUpThunk = createAsyncThunk(
  "auth/signup",
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await instance.post("users/signup", credentials);
      setToken(data.token);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const logInThunk = createAsyncThunk(
  "auth/login",
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await instance.post("users/signin", credentials);
      setToken(data.token);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getUserInfoThunk = createAsyncThunk(
  "auth/currentUser",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await instance.get("users/current");
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const signOutThunk = createAsyncThunk(
  "auth/signout",
  async (_, { rejectWithValue }) => {
    await instance.post("users/signout");
    clearToken();
    try {
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
