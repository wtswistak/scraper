import React, { useState } from "react";
import FormInput from "./FormInput";
import FormBtn from "./FormBtn";

function Form({ onSearch }) {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchQuery);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex shadow-lg rounded-full duration-200 max-sm:w-full mx-3 "
    >
      <FormInput searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <FormBtn />
    </form>
  );
}

export default Form;
