import { Fragment, useState } from "react";
import { GoChevronUp, GoChevronDown } from "react-icons/go";

interface TableProps {
  data: any[];
  config: any[];
}

export default function Table({ data, config }: TableProps) {
  const [sortColumn, setSortColumn] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");

  const handleSort = (columnKey: any) => {
    if (sortColumn === columnKey) {
      // Toggle sorting order if the same column is clicked
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      // Set new sorting column and default sorting order
      setSortColumn(columnKey);
      setSortOrder("asc");
    }
  };

  const renderSortArrow = () => {
    if (sortOrder === "asc") {
      return (
        <span>
          <GoChevronUp />{" "}
        </span>
      ); // Upward-pointing arrow
    } else {
      return (
        <span>
          {" "}
          <GoChevronDown />{" "}
        </span>
      ); // Downward-pointing arrow
    }
  };

  const renderedHeaders = config.map((column) => {
    if (column.header) {
      return <Fragment key={column.key}>{column.label}</Fragment>;
    }
    return (
      <th
        className="p-2 "
        key={column.key}
        onClick={() => handleSort(column.key)}
      >
        <div className="flex gap-2 items-center cursor-pointer">
          {sortColumn === column.key && renderSortArrow()} {column.label}
        </div>
      </th>
    );
  });

  const renderedRows = [...data]
    .sort((a, b) => {
      const aValue = a[sortColumn];
      const bValue = b[sortColumn];

      if (typeof aValue !== "undefined" && typeof bValue !== "undefined") {
        if (typeof aValue === "string" && typeof bValue === "string") {
          if (sortOrder === "asc") {
            return aValue.localeCompare(bValue);
          } else {
            return bValue.localeCompare(aValue);
          }
        } else {
          if (sortOrder === "asc") {
            return aValue - bValue;
          } else {
            return bValue - aValue;
          }
        }
      }
      return 0;
    })
    .map((rowData) => {
      const renderedCells = config.map((column) => {
        return (
          <td className="p-2" key={column.key}>
            {column.render(rowData)}
          </td>
        );
      });

      return <tr key={rowData.id}>{renderedCells}</tr>;
    });

  return (
    <table className="table-auto  bg-logo  rounded-md">
      <thead>
        <tr className="border-b-4  border-b-burgundy text-forest-green">
          {renderedHeaders}
        </tr>
      </thead>
      <tbody className="divide-y-4 divide-forest-green">{renderedRows}</tbody>
    </table>
  );
}
