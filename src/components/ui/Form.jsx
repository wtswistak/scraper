import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";

function Form({ onSearch }) {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchQuery);
  };

  return (
    <div className="flex justify-center py-24 bg-[var(--primary-color)]">
      <form
        onSubmit={handleSubmit}
        className="flex shadow-lg rounded-2xl duration-200  "
      >
        <input
          type="text"
          placeholder="Szukaj artykuły"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="text-lg px-5 py-4 min-w-[500px] rounded-l-2xl border-2 border-[#fff] duration-300 outline-none focus-within:border-[var(--primary-darker)]"
          required
        />
        <button
          type="submit"
          className="text-[26px] bg-[var(--primary-darker)] px-7 rounded-r-2xl text-[#fff] hover:bg-[#1d6d52] duration-200 "
        >
          <FiSearch />
        </button>
      </form>
    </div>
  );
}

export default Form;
