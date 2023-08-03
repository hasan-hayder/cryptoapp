"use client";

import { useState } from "react";

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
    <div>
      <div className="search field is-horizontal">
        <input
          placeholder="Find coin"
          className="'input"
          value={searchTerm}
          onChange={handleSearchTermChange}
        />
      </div>
    </div>
  );
}
