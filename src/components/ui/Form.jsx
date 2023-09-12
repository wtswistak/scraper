import React, { useState } from "react";

function Form({ onSearch }) {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchQuery);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex justify-center py-14 bg-[#31b688]"
    >
      <input
        type="text"
        placeholder="Wyszukaj artykuł..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="text-3xl px-3 py-5 mr-3"
      />
      <button type="submit" className="text-3xl">
        Szukaj
      </button>
    </form>
  );
}

export default Form;
