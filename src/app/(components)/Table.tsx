"use client";

import { GoChevronUp, GoChevronDown } from "react-icons/go";

interface TableProps {
  data: any[];
  config: any[];
  rowsPerPage: number;
  currentPage: number;
}

export default function Table({
  data,
  config,
  rowsPerPage,
  currentPage,
}: TableProps) {
  const [sortColumn, setSortColumn] = useState("");
  const [sortOrder, setSortOrder] = useState("none");

  const handleSort = (columnKey: any) => {
    if (sortColumn === columnKey) {
      // Toggle sorting order if the same column is clicked
      setSortOrder((prevSortOrder) => {
        if (prevSortOrder === "asc") return "desc";
        else if (prevSortOrder === "desc") return "none";
        else return "asc";
      });
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
    } else if (sortOrder === "desc") {
      return (
        <span>
          {" "}
          <GoChevronDown />{" "}
        </span>
      ); // Downward-pointing arrow
    } else {
      return;
    }
  };

  const renderedHeaders = config.map((column) => {
    if (column.header) {
      return <Fragment key={column.key}>{column.label}</Fragment>;
    }
    return (
      <th
        className="p-1 sm:px-5"
        key={column.key}
        onClick={() => handleSort(column.key)}
      >
        <div className="flex gap-2 items-center cursor-pointer">
          {sortColumn === column.key && renderSortArrow()} {column.label}
        </div>
      </th>
    );
  });

  const startIndex = (currentPage - 1) * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;

  const renderedRows = [...data]
    .sort((a, b) => {
      const aValue = a[sortColumn];
      const bValue = b[sortColumn];

      if (typeof aValue !== "undefined" && typeof bValue !== "undefined") {
        if (typeof aValue === "string" && typeof bValue === "string") {
          if (sortOrder === "asc") {
            return aValue.localeCompare(bValue);
          } else if (sortOrder === "desc") {
            return bValue.localeCompare(aValue);
          } else {
            return 0;
          }
        } else {
          if (sortOrder === "asc") {
            return aValue - bValue;
          } else if (sortOrder === "desc") {
            return bValue - aValue;
          } else {
            return 0;
          }
        }
      }
      return 0;
    })
    .slice(startIndex, endIndex)
    .map((rowData) => {
      const renderedCells = config.map((column) => {
        return (
          <td className="p-2 sm:p-5 text-sm sm:text-2xl" key={column.key}>
            {column.render(rowData)}
          </td>
        );
      });

      return (
        <tr className="h-16" key={rowData.id}>
          {renderedCells}
        </tr>
      );
    });

  return (
    <table className="table-fixed sm:table-auto bg-logo  sm:rounded-md">
      <thead>
        <tr className="border-b-4  border-b-burgundy text-sm sm:text-xl text-forest-green">
          {renderedHeaders}
        </tr>
      </thead>
      <tbody className="divide-y-4 divide-forest-green">{renderedRows}</tbody>
    </table>
  );
}
