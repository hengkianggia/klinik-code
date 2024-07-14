"use client";
import React, { useState } from "react";

const ButtonCounter = ({ count }: { count: number }) => {
  const [quantity, setQuantity] = useState(count);

  const increment = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };
  const decrement = () => {
    setQuantity((prevQuantity) => (prevQuantity > 1 ? prevQuantity - 1 : 1));
  };

  return (
    <div className="flex items-center space-x-2">
      <button
        className={`flex items-center justify-center w-8 h-8 text-gray-500 rounded hover:bg-gray-200 ${
          quantity === 1 ? "cursor-not-allowed" : ""
        } `}
        disabled={quantity === 1}
        onClick={decrement}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M20 12H4"
          />
        </svg>
      </button>
      <span className="w-7 flex justify-center">{quantity}</span>
      <button
        className="flex items-center justify-center w-8 h-8 text-gray-500 rounded hover:bg-gray-200 "
        onClick={increment}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 4v16m8-8H4"
          />
        </svg>
      </button>
    </div>
  );
};

export default ButtonCounter;
