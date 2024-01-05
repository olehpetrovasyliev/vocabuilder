import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Select from "react-select";
import {
  selectCategories,
  selectCurrentCategory,
} from "../../../helpers/redux/words/wordsSelectors";
import { GetCategoriesThunk } from "../../../helpers/redux/words/wordsOperations";
import { setCategory } from "../../../helpers/redux/words/wordsSlice";

const CategorySelect = () => {
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
    <>
      <Select options={transformedCategories} onChange={handleChange} />
      {currentCategory === "verb" && (
        <>
          <input type="radio" name="isIrregular" />
          <input type="radio" name="isIrregular" />
        </>
      )}
      Field
    </>
  );
};

export default CategorySelect;
