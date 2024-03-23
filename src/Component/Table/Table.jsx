import React from "react";
import "./Table.css";
import { SlOptionsVertical } from "react-icons/sl";

const Table = ({ tableHeader, tableData, hasAction }) => {
  const handleOptionsClick = (id) => {
    console.log(id);
  };
  return (
    <div>
      <table>
        <thead>
          {tableHeader?.map((head) => (
            <th key={head.name}>{head.name}</th>
          ))}
          {hasAction ? <th>Action</th> : undefined}
        </thead>
        <tbody>
          {tableData.map((row) => {
            return (
              <tr key={row.id}>
                {tableHeader.map((col) => (
                  <td key={col.key}>
                    {col.key === "active"
                      ? row[col.key]
                        ? "Active"
                        : "Inavtive"
                      : row[col.key]}
                    ,
                  </td>
                ))}
                {hasAction ? (
                  <td>
                    <div
                      className="opt"
                      onClick={() => handleOptionsClick(row.id)}
                    >
                      <SlOptionsVertical className="opt-b" />
                    </div>
                  </td>
                ) : undefined}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
