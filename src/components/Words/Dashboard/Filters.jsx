import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetCategoriesThunk } from "../../../helpers/redux/words/wordsOperations";
import { setCategory } from "../../../helpers/redux/words/wordsSlice";
import {
  selectCategories,
  selectCurrentCategory,
} from "../../../helpers/redux/words/wordsSelectors";
import Select from "react-select";

const Filters = () => {
  const dispatch = useDispatch();
  const categories = useSelector(selectCategories);
  const currentCategory = useSelector(selectCurrentCategory);

  useEffect(() => {
    dispatch(GetCategoriesThunk());
  }, [dispatch]);

  const transformedCategories = categories.map((category) => ({
    label: category,
    value: category,
  }));

  const handleChange = (value) => {
    dispatch(setCategory(value));
  };
  return (
    <div>
      <label>
        <input type="text" />
        <svg>
          <use></use>
        </svg>
      </label>
      <Select options={transformedCategories} onChange={handleChange} />
      {currentCategory === "verb" && (
        <>
          <input type="radio" name="isIrregular" />
          <input type="radio" name="isIrregular" />
        </>
      )}
    </div>
  );
};

export default Filters;
