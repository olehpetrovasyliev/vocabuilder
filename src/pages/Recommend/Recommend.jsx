import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectCurrentCategory,
  selectPage,
} from "../../helpers/redux/words/wordsSelectors";
import { GetAllWordsThunk } from "../../helpers/redux/words/wordsOperations";
import Dashboard from "../../components/Words/Dashboard/Dashboard";
import WordsTable from "../../components/Words/WordsTable";
import WordsPagination from "../../components/Words/WordsPagination";

const Recommend = () => {
  const dispatch = useDispatch();
  const page = useSelector(selectPage);
  const category = useSelector(selectCurrentCategory);

  useEffect(() => {
    dispatch(GetAllWordsThunk({ page, category }));
  }, [page, category]);
  return (
    <div>
      <Dashboard />
      <WordsTable />
      <WordsPagination />
    </div>
  );
};

export default Recommend;
