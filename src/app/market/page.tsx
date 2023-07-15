"use client";

import Table from "../(components)/Table";
import { CoinListResponse } from "../models/gecko-api";
import { useState, useEffect } from "react";
import Skeleton from "../(components)/Skeleton";
import Button from "../(components)/Button";
import Dropdown, { Currency } from "../(components)/Dropdown";

const metadata = {
  title: "Zipcoin - Market",
  description: "Generated by create next app",
};

export default function Page() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState<CoinListResponse[]>([]);
  const [currentPage, setCurrentPage] = useState(1);

  const rowsPerPage = 10;
  const numPages = Math.ceil(data.length / rowsPerPage);

  const currencies = [
    { symbol: "$", value: "usd" },
    { symbol: "€", value: "eur" },
    { symbol: "¥", value: "jpy" },
  ];

  const [selection, setSelection] = useState(currencies[0]);
  const handleSelect = (currency: Currency) => {
    setSelection(currency);
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${selection.value}&order=market_cap_desc&per_page=30&page=1&sparkline=false&locale=en&precision=2`
      );
      const coinList: CoinListResponse[] = await response.json();
      setData(coinList);
      setIsLoading(false);
    };

    fetchData();
  }, [selection]);

  const config = [
    {
      label: "Coin",
      key: "name",
      render: (data: CoinListResponse) =>
        data.name + " (" + data.symbol.toUpperCase() + ")",
    },
    {
      label: "Price",
      key: "current_price",
      render: (data: CoinListResponse) =>
        `${selection.symbol} ` + data.current_price,
    },
    {
      label: "24h %",
      key: "price_change_percentage_24h",
      render: (data: CoinListResponse) => {
        const percentageChange = data.price_change_percentage_24h;
        const isPositive = percentageChange >= 0;

        const cellStyle = isPositive ? "text-green-500" : "text-red-500";
        return (
          <span className={cellStyle}>{percentageChange.toFixed(2)}%</span>
        );
      },
    },
    {
      label: "Market Cap",
      key: "market_cap",
      render: (data: CoinListResponse) => {
        const marketCap = data.market_cap;
        const formattedMarketCap = formatMarketCap(marketCap);
        return (
          <span className="gap-2">
            {" "}
            {selection.symbol} {formattedMarketCap}
          </span>
        );
      },
    },
  ];

  function formatMarketCap(marketCap: number): string {
    if (marketCap < 1e3) {
      return marketCap.toFixed(2);
    } else if (marketCap >= 1e3 && marketCap < 1e6) {
      return (marketCap / 1e3).toFixed(2) + " K";
    } else if (marketCap >= 1e6 && marketCap < 1e9) {
      return (marketCap / 1e6).toFixed(2) + " M";
    } else if (marketCap >= 1e9 && marketCap < 1e12) {
      return (marketCap / 1e9).toFixed(2) + " B";
    } else {
      return (marketCap / 1e12).toFixed(2) + " T";
    }
  }

  const pageButtons = [];
  for (let i = 1; i <= numPages; i++) {
    pageButtons.push(
      <Button
        key={i}
        onClick={() => setCurrentPage(i)}
        className={
          i === currentPage
            ? "bg-forest-green rounded-lg"
            : "bg-logo rounded-sm"
        }
      >
        {i}
      </Button>
    );
  }

  return (
    <div>
      <div className="md:flex text-2xl md:gap-4 mb-10 pl-10 py-10 items-baseline">
        <div>Get cryptocurrency prices for 30 assets.</div>
        <div className="py-2">
          <Dropdown
            value={selection}
            currencies={currencies}
            onChange={handleSelect}
          />
        </div>
      </div>
      <div className="p-5 mt-10 grid place-content-center">
        <Table
          data={data}
          config={config}
          rowsPerPage={rowsPerPage}
          currentPage={currentPage}
        />
        {isLoading && data.length === 0 && (
          <Skeleton times={10} className="w-96 h-12" />
        )}
        <div className="justify-center text-white">
          Powered by
          <a
            href="https://coingecko.com"
            className="hover:text-logo transition"
          >
            {" "}
            CoinGecko
          </a>
        </div>
      </div>
      <div className="flex w-full justify-center gap-4 my-4">{pageButtons}</div>
    </div>
  );
}
