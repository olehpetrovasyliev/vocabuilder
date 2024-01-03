import { createSlice } from "@reduxjs/toolkit";
import {
  GetAllWordsThunk,
  GetCategoriesThunk,
  GetOwnWordsThunk,
} from "./wordsOperations";

const initialState = {
  wordsData: {
    results: [],
    totalPages: 1,
    page: 1,
    perPage: 7,
  },
  categories: [],
  stats: null,
  tasks: [],
  wordToPost: {
    en: "",
    ua: "",
    category: "",
    _id: "",
  },
  currentWord: {
    en: "",
    ua: "",
    category: "",
    _id: "",
    owner: "",
    progress: 0,
  },
  error: null,
  loading: false,
};

const wordsSlice = createSlice({
  name: "words",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(GetCategoriesThunk.fulfilled, (state, action) => {
        state.categories = action.payload;
        state.error = null;
        state.loading = false;
      })
      .addCase(GetAllWordsThunk.fulfilled, (state, action) => {
        state.wordsData.results = action.payload.results;
        state.wordsData.page = action.payload.page;
        state.wordsData.totalPages = action.payload.totalPages;
        state.error = null;
        state.loading = false;
      })
      .addCase(GetOwnWordsThunk.fulfilled, (state, action) => {
        state.wordsData.results = action.payload.results;
        state.wordsData.page = action.payload.page;
        state.wordsData.totalPages = action.payload.totalPages;

        state.error = null;
        state.loading = false;
      });
  },
});

export const wordsReducer = wordsSlice.reducer;
