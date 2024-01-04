import React, { useEffect } from "react";
import Dashboard from "../../components/Words/Dashboard/Dashboard";
import WordsTable from "../../components/Words/WordsTable";
import WordsPagination from "../../components/Words/WordsPagination";
import { useDispatch, useSelector } from "react-redux";
import {
  selectCurrentCategory,
  selectPage,
} from "../../helpers/redux/words/wordsSelectors";
import { GetOwnWordsThunk } from "../../helpers/redux/words/wordsOperations";

const Dictionary = () => {
  const dispatch = useDispatch();
  const page = useSelector(selectPage);
  const category = useSelector(selectCurrentCategory);

  useEffect(() => {
    dispatch(GetOwnWordsThunk({ page, category }));
  }, [page, category]);
  return (
    <div>
      <Dashboard />
      <WordsTable />
      <WordsPagination />
    </div>
  );
};

export default Dictionary;
