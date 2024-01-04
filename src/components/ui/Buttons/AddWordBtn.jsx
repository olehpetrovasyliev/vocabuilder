import React from "react";
import { useDispatch } from "react-redux";
import { openModalAddWord } from "../../../helpers/redux/modal/modalSlice";
const AddWordBtn = ({ content }) => {
  const dispatch = useDispatch();
  return (
    <button onClick={() => dispatch(openModalAddWord())}>{content}</button>
  );
};

export default AddWordBtn;
