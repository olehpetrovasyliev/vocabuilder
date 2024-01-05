import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isModalAddOpen: false,
  isModalEditWordOpen: false,
  isModalWellDoneOpen: false,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModalAddWord: (state, action) => {
      state.isModalAddOpen = true;
    },
    openModalEditWord: (state, action) => {
      state.isModalEditWordOpen = true;
    },
    openModalWellDone: (state, action) => {
      state.isModalWellDoneOpen = true;
    },
    closeModalAddWord: (state, action) => {
      state.isModalAddOpen = false;
    },
    closeModalEditWord: (state, action) => {
      state.isModalEditWordOpen = false;
    },
    closeModalWellDone: (state, action) => {
      state.isModalWellDoneOpen = false;
    },
  },
});

export const modalReducer = modalSlice.reducer;
export const {
  openModalAddWord,
  openModalEditWord,
  openModalWellDone,
  closeModalAddWord,
  closeModalEditWord,
  closeModalWellDone,
} = modalSlice.actions;
