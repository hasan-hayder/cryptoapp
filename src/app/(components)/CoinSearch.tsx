"use client";

import { useState } from "react";
import { GoSearch } from "react-icons/go";

type CoinSearchProps = {
  onSearch: (searchTerm: string) => void;
};

export default function CoinSearch({ onSearch }: CoinSearchProps) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchTermChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const searchTerm = event.target.value;
    setSearchTerm(searchTerm);
    onSearch(searchTerm);
  };

  return (
    <div className="sm:px-20 py-5 sm:py-10">
      <div className="flex justify-center sm:justify-end">
        <div className="relative border-4 w-full sm:w-1/4  hover:border-logo focus-within:border-logo">
          <input
            placeholder="Find coin"
            className="input w-full focus:outline-none h-10 pl-10 pr-2"
            value={searchTerm}
            onChange={handleSearchTermChange}
          />
          <GoSearch className="h-5 w-5 absolute top-3 left-3 text-slate-500" />
        </div>
      </div>
    </div>
  );
}
