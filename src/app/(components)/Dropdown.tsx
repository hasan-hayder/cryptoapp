"use client"

import { useState, useEffect, useRef } from "react";
import { GoChevronDown, GoChevronLeft } from "react-icons/go";
import Button from "./Button";


export interface Currency {
  symbol: string;
  value: string;
}

interface DropdownProps {
  onChange: (currency: Currency) => void;
  value: Currency | undefined;
  currencies: Currency[];
}

function Dropdown({ onChange, value, currencies }: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const divEl = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (event: MouseEvent) => {
      if (!divEl.current) {
        return;
      }

      if (!divEl.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("click", handler, true);
    return () => {
      document.removeEventListener("click", handler);
    };
  }, []);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleCurrencyClick = (currency: Currency) => {
    setIsOpen(false);
    onChange(currency);
  };

  const renderedCurrencies = currencies.map((currency) => {
    return (
      <div
        className="hover:bg-logo rounded cursor-pointer p-1"
        key={currency.value}
        onClick={() => handleCurrencyClick(currency)}
      >
        <div className="uppercase gap-6">
        {currency.symbol}
        {currency.value}
        </div>
      </div>
    );
  });

  return (
    <div ref={divEl} className="md:w-48 relative">
      <Button register className="px-4 py-2.5 text-center inline-flex items-center" onClick={handleClick}>
        {value?.value}
        {isOpen ? <GoChevronDown /> : <GoChevronLeft />}
        </Button>
        {isOpen && (
          <div className="z-10 absolute top-full border rounded p-3 shadow bg-white w-full ">
            {renderedCurrencies}
          </div>
        )}
      
    </div>
  );
}

export default Dropdown;
