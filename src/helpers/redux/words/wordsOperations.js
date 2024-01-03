import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "../../api/userConfig";

export const CreateWordThunk = createAsyncThunk(
  "words/create",
  async (word, { rejectWithValue }) => {
    try {
      const { data } = await instance.post("words/create", word);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const AddWordThunk = createAsyncThunk(
  "words/add",
  async (id, { rejectWithValue }) => {
    try {
      const { data } = await instance.post(`words/add/${id}`);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const PostAnswerThunk = createAsyncThunk(
  "words/postAnswer",
  async (task, { rejectWithValue }) => {
    try {
      const { data } = await instance.post(`words/answers`, task);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const GetCategoriesThunk = createAsyncThunk(
  "words/getCategories",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await instance.get("words/categories");
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const GetAllWordsThunk = createAsyncThunk(
  "words/getAll",
  async (params, { rejectWithValue }) => {
    try {
      const { data } = await instance.get("words/all?limit=7", { params });
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const GetOwnWordsThunk = createAsyncThunk(
  "words/getOwn",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await instance.get("words/own");
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const GetStatsThunk = createAsyncThunk(
  "words/getStats",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await instance.get("words/statistics");
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const GetTasksThunk = createAsyncThunk(
  "words/getTasks",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await instance.get("words/tasks");
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const EditWordThunk = createAsyncThunk(
  "words/edit",
  async (id, { rejectWithValue }) => {
    try {
      const { data } = await instance.patch(`words/edit/${id}`);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const DeleteWordThunk = createAsyncThunk(
  "words/delete",
  async (id, { rejectWithValue }) => {
    try {
      const { data } = await instance.delete(`words/${id}`);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
