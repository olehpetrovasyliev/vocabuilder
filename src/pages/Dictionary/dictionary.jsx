import React from "react";
import Dashboard from "../../components/Words/Dashboard/Dashboard";
import WordsTable from "../../components/Words/WordsTable";
import WordsPagination from "../../components/Words/WordsPagination";

const Dictionary = () => {
  return (
    <div>
      <Dashboard />
      <WordsTable />
      <WordsPagination />
    </div>
  );
};

export default Dictionary;
