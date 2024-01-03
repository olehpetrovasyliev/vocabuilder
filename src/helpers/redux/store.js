import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./auth/authSlice";
import { wordsReducer } from "./words/wordsSlice";
import { modalReducer } from "./modal/modalSlice";

const rootReducer = combineReducers({
  auth: authReducer,
  words: wordsReducer,
  modal: modalReducer,
});
export const store = configureStore({ reducer: rootReducer });
