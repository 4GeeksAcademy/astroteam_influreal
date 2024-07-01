import React, { useState } from "react";

export const Search = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleInputChange = (event) => {
    const value = event.target.value;
    setQuery(value);
    onSearch(value); 
  };

  return (
    <div className="relative flex items-center">
      <input
        type="text"
        className="pl-3 pr-10 py-2 flex-grow border border-gray-300 focus:outline-none"
        placeholder="Busca Aquí"
        value={query}
        onChange={handleInputChange}
      />
      <button className="absolute right-0 top-0 mt-2 mr-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-gray-500 hover:text-gray-700"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </button>
    </div>
  );
};

export default Search;
