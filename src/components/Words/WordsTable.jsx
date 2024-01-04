import React, { useMemo, useEffect } from "react";
import { useTable } from "react-table";
import { selectWords } from "../../helpers/redux/words/wordsSelectors";
import AddWordBtn from "../ui/Buttons/AddWordBtn";
import ActionsBtn from "../ui/Buttons/ActionsBtn";
import { useSelector } from "react-redux";

const WordsTable = () => {
  const words = useSelector(selectWords);
  const data = useMemo(
    () =>
      words.map((word) =>
        location.pathname === "/dictionary"
          ? {
              en: word.en,
              ua: word.ua,
              category: word.category,
              progress: word.progress,
              button: <ActionsBtn />,
            }
          : {
              en: word.en,
              ua: word.ua,
              category: word.category,
              button: <AddWordBtn content={<span>Add to dictionary</span>} />,
            }
      ),
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
        accessor: "button",
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
