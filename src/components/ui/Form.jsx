import React, { useState } from "react";

function Form({ onSearch }) {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchQuery);
  };

  return (
    <div className="flex justify-center py-20 bg-[#31b688]">
      <form onSubmit={handleSubmit} className="flex shadow-lg  ">
        <input
          type="text"
          placeholder="Wyszukaj artykuł"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="text-xl px-3 py-4  min-w-[500px] rounded-l-md focus-within:outline-none"
        />
        <button
          type="submit"
          className="text-xl bg-[#227f5f] px-5  rounded-r-md"
        >
          Szukaj
        </button>
      </form>
    </div>
  );
}

export default Form;
