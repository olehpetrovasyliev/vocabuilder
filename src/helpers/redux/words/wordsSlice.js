import { createSlice } from "@reduxjs/toolkit";
import {
  AddWordThunk,
  CreateWordThunk,
  DeleteWordThunk,
  EditWordThunk,
  GetAllWordsThunk,
  GetCategoriesThunk,
  GetOwnWordsThunk,
  GetStatsThunk,
  PostAnswerThunk,
} from "./wordsOperations";

const initialState = {
  wordsData: {
    results: [],
    totalPages: 1,
    page: 1,
    perPage: 7,
  },
  categories: [],
  stats: { totalCount: 0 },
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
  currentCategory: "",
  error: null,
  loading: false,
};

const wordsSlice = createSlice({
  name: "words",
  initialState,
  reducers: {
    setCategory: (state, action) => ({
      ...state,
      currentCategory: action.payload.value,
    }),
  },
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
      })
      .addCase(CreateWordThunk.fulfilled, (state, action) => {})
      .addCase(AddWordThunk.fulfilled, (state, action) => {})
      .addCase(GetStatsThunk.fulfilled, (state, action) => {
        state.stats = action.payload;
      })
      .addCase(PostAnswerThunk.fulfilled, (state, action) => {})
      .addCase(EditWordThunk.fulfilled, (state, action) => {})
      .addCase(DeleteWordThunk.fulfilled, (state, action) => {});
  },
});
export const { setCategory } = wordsSlice.actions;
export const wordsReducer = wordsSlice.reducer;
