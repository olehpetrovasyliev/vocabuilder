import React, { useMemo, useEffect } from "react";
import { useTable } from "react-table";
import { useDispatch, useSelector } from "react-redux";
import {
  selectCurrentCategory,
  selectPage,
  selectWords,
} from "../../helpers/redux/words/wordsSelectors";
import AddWordBtn from "../ui/Buttons/AddWordBtn";
import { GetAllWordsThunk } from "../../helpers/redux/words/wordsOperations";

const WordsTable = () => {
  const dispatch = useDispatch();
  const words = useSelector(selectWords);
  const page = useSelector(selectPage);
  const category = useSelector(selectCurrentCategory);

  useEffect(() => {
    dispatch(GetAllWordsThunk({ page, category }));
  }, [page, category]);
  const data = useMemo(
    () =>
      words.map((word) => ({
        en: word.en,
        ua: word.ua,
        category: word.category,
        addWord: <AddWordBtn />,
      })),
    [words]
  );

  const columns = useMemo(
    () => [
      {
        Header: "Word",
        accessor: "en",
      },
      {
        Header: "Translation",
        accessor: "ua",
      },
      {
        Header: "Category",
        accessor: "category",
      },
      {
        Header: "",
        accessor: "addWord",
      },
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  return (
    <div>
      <table {...getTableProps()} style={{ border: "1px solid #DBDBDB" }}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render("Header")}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => (
                  <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default WordsTable;
