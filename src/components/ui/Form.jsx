import React, { useState } from "react";
import FormInput from "./FormInput";
import FormBtn from "./FormBtn";

function Form({ onSearch, isChecked, setIsChecked }) {
  const [searchQuery, setSearchQuery] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    onSearch(searchQuery);
  }
  function handleCheck() {
    setIsChecked(!isChecked);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex shadow-lg rounded-full duration-200 max-sm:w-full mx-3 ">
        <FormInput searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <FormBtn />
      </div>
      <input
        type="checkbox"
        id="filter"
        checked={isChecked}
        onChange={handleCheck}
      />
      <label htmlFor="filter" className="text-white">
        Filter
      </label>
    </form>
  );
}

export default Form;
