import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { GetCategoriesThunk } from "../../../helpers/redux/words/wordsOperations";
import { Categories } from "../../../types/types";

const Filters = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetCategoriesThunk());
  }, [dispatch]);
  return <div></div>;
};

export default Filters;
